'use strict';

import Backbone         from 'backbone';
import Parse            from 'parse';
import eventbus         from 'mainEventbus';

import AppRouter        from 'pathSite/js/router/AppRouter.js';
import LogInView        from 'pathSite/js/views/LogInView.js';
import ManageTodosView  from 'pathSite/js/views/ManageTodosView.js';

import appState         from 'pathSite/js/models/appState.js';
import todoList         from 'pathSite/js/collections/todoList.js';

/**
 * Provides the main entry point for the Todos app and major control functionality (the C in MVC). This control
 * functionality is exposed over an eventbus created by `mainEventbus.js`.
 *
 * It should be noted that since this app is based on `backbone-parse-es6` there are no additional lifecycle methods
 * added to Backbone.View such as `close` which automatically removes all listeners defined by `listenTo`. Each view
 * must explicitly have any listeners removed before creating a new view.
 *
 * While in this simple app there is only one view of the `TodoList` a benefit of separating control functionality and
 * the `TodoList` instance from a specific view is that it could be used across multiple views.
 */
export default class App
{
   /**
    * Wires up the main eventbus, invokes the private s_INITIALIZE_ROUTE function which creates `AppRouter` and sets up
    * a catch all handler then invokes `Backbone.history.start` with the root path and finally the constructor shows the
    * proper view based on whether there is a current logged in user.
    */
   constructor()
   {
      // Wire up the main eventbus to respond to the following events. By passing in `this` in the third field to
      // `on` that sets the context when the callback is invoked.
      eventbus.on('app:create:item', this.createItem, this);
      eventbus.on('app:select:filter', this.selectFilter, this);
      eventbus.on('app:user:login', this.logInUser, this);
      eventbus.on('app:user:logout', this.logOutUser, this);

      // Invokes a private method to initialize the `AppRouter`, add a default catch all handler, and start
      // `Backbone.history`.
      s_INITIALIZE_ROUTE();

      // Get the current user and show the proper initial view given whether a user is currently logged in to the app.
      const user = Parse.User.current();

      /**
       * Creates the initial displayed view based given if a user is currently logged into the app.
       *
       * @type {View} Stores the current active view.
       */
      this.currentView = user !== null ? this.showTodos(user.escape('username')) : new LogInView();
   }

   /**
    * Creates a new Item in the todos list. Note the addition of user which becomes a Parse pointer and an
    * Parse.ACL (access control list) which limits the item to be only accessible to the current user.
    *
    * @param {string}   content - The text for the item.
    */
   createItem(content)
   {
      const user = Parse.User.current();

      // Ensure that content is a string and there is a currently logged in user. If so then create a new
      // `Item` entry in `todoList`.
      if (typeof content === 'string' && user !== null)
      {
         todoList.create(
         {
            content,
            order: todoList.nextOrder(),
            done: false,
            user,                      // Current user is assigned as a pointer.
            ACL: new Parse.ACL(user)   // An ACL with the current user ensures that it is only accessible by this user.
         });
      }
   }

   /**
    * Invokes `showTodos` if there is a current user.
    */
   logInUser()
   {
      const user = Parse.User.current();
      if (user !== null)
      {
         this.showTodos(user.escape('username'));
      }
   }

   /**
    * Logs out the user and shows the login view.
    */
   logOutUser()
   {
      // Close any current view and create the LogInView on success.
      Parse.User.logOut().then(() =>
      {
         if (this.currentView)
         {
            this.currentView.stopListening();
            this.currentView.off();
            this.currentView.undelegateEvents();

            // Removes any child views.
            if (this.currentView.clearAll)
            {
               this.currentView.clearAll();
            }

            delete this.currentView;
         }
         this.currentView = new LogInView();
         appState.set('filter', 'all');
      });
   }

   /**
    * Sets the app state with the new filter type and updates `Backbone.History`.
    *
    * @param {string}   filter - Filter type to select.
    */
   selectFilter(filter)
   {
      // When setting a value on a `Backbone.Model` if the value is the same as what is being set a change event will
      // not be fired. In this case we set the new state with the `silent` option which won't fire any events then
      // we manually trigger a change event so that any listeners respond regardless of the original state value.
      appState.set({ filter }, { silent: true });
      appState.trigger('change', appState);

      // Update the history state with the new filter type.
      Backbone.history.navigate(filter);
   }

   /**
    * Creates and shows a new ManageTodosView then sets a new `Parse.Query` for `todoList` for the current user and
    * fetches the collection.
    *
    * @param {string}   username - Name of current user.
    * @returns {*}
    */
   showTodos(username)
   {
      if (this.currentView)
      {
         this.currentView.stopListening();
         this.currentView.off();
         this.currentView.undelegateEvents();
         delete this.currentView;
      }

      Backbone.history.navigate(appState.get('filter'), { replace: true });

      // Create a new ManageTodosView and pass in the username via optional parameters. In a Backbone.View additional
      // options are available via `this.options.<key>`.
      this.currentView = new ManageTodosView({ username });

      // Set the `todoList` query which is necessary for Parse backed collections. The `equalTo` qualifier returns
      // items that are associated with the current user.
      todoList.query = new Parse.Query(todoList.model);
      todoList.query.equalTo('user', Parse.User.current());

      // Fetch all the todos items for this user. Any listeners for `todoList` reset events will be invoked.
      todoList.fetch({ reset: true });

      return this.currentView;
   }
}

/**
 * A private function in the module scope, but outside of the class which initializes the `AppRouter`, adds a default
 * catch all handler, and start `Backbone.history`.
 */
const s_INITIALIZE_ROUTE = () =>
{
   new AppRouter();

   // Defines a catch all handler for all non-matched routes (anything that isn't `all`, `active` or `completed`). If
   // a user is logged in the catch all navigates to `all` triggering the route and replacing the invalid route in
   // the browser history.
   Backbone.history.handlers.push(
   {
      route: /(.*)/,
      callback: () =>
      {
         if (Parse.User.current() !== null)
         {
            Backbone.history.navigate('all', { trigger: true, replace: true });
         }
         else
         {
            Backbone.history.navigate('', { replace: true });
         }
      }
   });

   // This regex matches the root path, so that it can be set in `Backbone.history.start`
   let urlMatch;

   if (typeof window.location !== 'undefined')
   {
      urlMatch = window.location.toString().match(/\/\/[\s\S]*\/([\s\S]*\/)([\s\S]*\.html)/i);
   }

   // Construct the root path to the web app which is the path above the domain including `index.html` for the bundle
   // or `indexSrc.html` when running the app from source code transpiled in the browser.
   const root = urlMatch && urlMatch.length >= 3 ? `${urlMatch[1]}${urlMatch[2]}` : undefined;

   Backbone.history.start({ root });
};