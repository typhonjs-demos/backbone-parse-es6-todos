'use strict';

import Backbone   from 'backbone';
import Parse      from 'parse';

import appState   from 'pathSite/js/models/appState.js';

/**
 * Provides a basic `Backbone.Router` to route between app states: `all`, `active` & `completed`. When a user
 * navigates between these different filter type states `Backbone.history.navigate` is invoked in `App.js->selectFilter`
 * to update the navigation history allowing the user to use the back and forward browser controls to navigate the app.
 * When a filter type is selected it is referenced in the current URL for the web app. If this URL is navigated to and
 * the user is still logged into the app `AppRouter` will set the `AppState` accordingly and `ManageTodosView` will
 * appropriately show the `Items` for the current user given the filter state set below. If a user is not logged in
 * `App.js` renders the login view and `AppRouter` will replace any route matches with no hash tag.
 *
 * Please note that in `App.js->s_INITIALIZE_ROUTES` a default catch all no route callback is specified which handles
 * unmatched routes.
 */
export default class AppRouter extends Backbone.Router
{
   /**
    * Creates the routes delegated to the given methods specified.
    */
   constructor()
   {
      super(
      {
         routes:
         {
            'all': 'all',
            'active': 'active',
            'completed': 'completed'
         }
      });
   }

   /**
    * Handles the `all` route. If the user is logged in then `appState` is set to `all` otherwise the route is
    * replaced in the browser history with no route.
    */
   all()
   {
      if (Parse.User.current() !== null)
      {
         appState.set({ filter: 'all' });
      }
      else
      {
         Backbone.history.navigate('', { replace: true });
      }
   }

   /**
    * Handles the `active` route. If the user is logged in then `appState` is set to `active` otherwise the route is
    * replaced in the browser history with no route.
    */
   active()
   {
      if (Parse.User.current() !== null)
      {
         appState.set({ filter: 'active' });
      }
      else
      {
         Backbone.history.navigate('', { replace: true });
      }
   }

   /**
    * Handles the `completed` route. If the user is logged in then `appState` is set to `completed` otherwise the route
    * is replaced in the browser history with no route.
    */
   completed()
   {
      if (Parse.User.current() !== null)
      {
         appState.set({ filter: 'completed' });
      }
      else
      {
         Backbone.history.navigate('', { replace: true });
      }
   }
}