!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(s),i=(r[1].split(",")[n]||"require").replace(p,""),t=c[i]||(c[i]=new RegExp(u+i+a,"g"));t.lastIndex=0;for(var o,f=[];o=t.exec(e);)f.push(o[2]||o[3]);return f}function r(e,n,i,t){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var f=o.get(e);return f.__useDefault?f["default"]:f}throw new TypeError("Invalid require")}for(var l=[],u=0;u<e.length;u++)l.push(o["import"](e[u],t));Promise.all(l).then(function(e){n&&n.apply(null,e)},i)}function i(i,t,l){"string"!=typeof i&&(l=t,t=i,i=null),t instanceof Array||(l=t,t=["require","exports","module"].splice(0,l.length)),"function"!=typeof l&&(l=function(e){return function(){return e}}(l)),void 0===t[t.length-1]&&t.pop();var u,a,s;-1!=(u=f.call(t,"require"))&&(t.splice(u,1),i||(t=t.concat(n(l.toString(),u)))),-1!=(a=f.call(t,"exports"))&&t.splice(a,1),-1!=(s=f.call(t,"module"))&&t.splice(s,1);var p={name:i,deps:t,execute:function(n,i,f){for(var p=[],c=0;c<t.length;c++)p.push(n(t[c]));f.uri=f.id,f.config=function(){},-1!=s&&p.splice(s,0,f),-1!=a&&p.splice(a,0,i),-1!=u&&p.splice(u,0,function(e,i,t){return"string"==typeof e&&"function"!=typeof i?n(e):r.call(o,e,i,t,f.id)});var d=l.apply(-1==a?e:i,p);return"undefined"==typeof d&&f&&(d=f.exports),"undefined"!=typeof d?d:void 0}};if(i)d.anonDefine||d.isBundle?(d.anonDefine&&d.anonDefine.name&&o.registerDynamic(d.anonDefine.name,d.anonDefine.deps,!1,d.anonDefine.execute),d.anonDefine=null):d.anonDefine=p,d.isBundle=!0,o.registerDynamic(i,p.deps,!1,p.execute);else{if(d.anonDefine)throw new TypeError("Multiple defines for anonymous module");d.anonDefine=p}}function t(n){d.anonDefine=null,d.isBundle=!1;var r=e.module,t=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=i,function(){e.define=o,e.module=r,e.exports=t}}var o=$__System,f=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,u="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",a="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",s=/\(([^\)]*)\)/,p=/^\s+|\s+$/g,c={};i.amd={};var d={isBundle:!1,anonDefine:null};o.set("@@amd-helpers",o.newModule({createDefine:t,require:r,define:i,lastModule:d})),o.amdDefine=i,o.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.register('2', [], function (_export) {
  /**
   * production-config.js -- Defines the production keys for Parse.
   */
  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        parseAppID: 'prBNuyKHlwbX4wvWTUNNWY5GaQLI7cAZ96pd5RwM',
        parseAPIKey: 'YyaqHxgLUNMn4Ito5sokU1o8g0exPbJcsUMKZSQB'
      });
    }
  };
});

$__System.registerDynamic("3", ["2", "5", "4"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var parseconfig = $__require('2');
  if (typeof parseconfig.default === 'object') {
    parseconfig = parseconfig.default;
  }
  if (parseconfig.parseForceBrowser) {
    $__require('5').set('IS_NODE', false);
  }
  $__require('4').initialize(parseconfig.parseAppID, parseconfig.parseAPIKey);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6", ["3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('3');
  global.define = __define;
  return module.exports;
});

$__System.register('7', ['4', '8', '9', 'a', 'b', 'c', 'd'], function (_export) {
   var Parse, appState, Backbone, _get, _inherits, _createClass, _classCallCheck, AppRouter;

   return {
      setters: [function (_2) {
         Parse = _2['default'];
      }, function (_3) {
         appState = _3['default'];
      }, function (_) {
         Backbone = _['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

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
         'use strict';

         AppRouter = (function (_Backbone$Router) {
            _inherits(AppRouter, _Backbone$Router);

            /**
             * Creates the routes delegated to the given methods specified.
             */

            function AppRouter() {
               _classCallCheck(this, AppRouter);

               _get(Object.getPrototypeOf(AppRouter.prototype), 'constructor', this).call(this, {
                  routes: {
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

            _createClass(AppRouter, [{
               key: 'all',
               value: function all() {
                  if (Parse.User.current() !== null) {
                     appState.set({ filter: 'all' });
                  } else {
                     Backbone.history.navigate('', { replace: true });
                  }
               }

               /**
                * Handles the `active` route. If the user is logged in then `appState` is set to `active` otherwise the route is
                * replaced in the browser history with no route.
                */
            }, {
               key: 'active',
               value: function active() {
                  if (Parse.User.current() !== null) {
                     appState.set({ filter: 'active' });
                  } else {
                     Backbone.history.navigate('', { replace: true });
                  }
               }

               /**
                * Handles the `completed` route. If the user is logged in then `appState` is set to `completed` otherwise the route
                * is replaced in the browser history with no route.
                */
            }, {
               key: 'completed',
               value: function completed() {
                  if (Parse.User.current() !== null) {
                     appState.set({ filter: 'completed' });
                  } else {
                     Backbone.history.navigate('', { replace: true });
                  }
               }
            }]);

            return AppRouter;
         })(Backbone.Router);

         _export('default', AppRouter);
      }
   };
});

$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<header id=\"header\"></header>\n<div class=\"login\">\n   <form class=\"login-form\">\n      <h2>Log In</h2>\n      <div class=\"error\" style=\"display:none\"></div>\n      <input type=\"text\" id=\"login-username\" placeholder=\"Username\" />\n      <input type=\"password\" id=\"login-password\" placeholder=\"Password\" />\n      <button>Log In</button>\n   </form>\n\n   <form class=\"signup-form\">\n      <h2>Sign Up</h2>\n      <div class=\"error\" style=\"display:none\"></div>\n      <input type=\"text\" id=\"signup-username\" placeholder=\"Username\" />\n      <input type=\"password\" id=\"signup-password\" placeholder=\"Create a Password\" />\n      <button>Sign Up</button>\n   </form>\n</div>";
  global.define = __define;
  return module.exports;
});

$__System.register('f', ['4', '9', '10', '11', 'a', 'b', 'c', 'd', 'e'], function (_export) {
   var Parse, Backbone, _, eventbus, _get, _inherits, _createClass, _classCallCheck, loginTmpl, LogInView;

   return {
      setters: [function (_4) {
         Parse = _4['default'];
      }, function (_3) {
         Backbone = _3['default'];
      }, function (_2) {
         _ = _2['default'];
      }, function (_5) {
         eventbus = _5['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }, function (_e) {
         loginTmpl = _e['default'];
      }],
      execute: function () {

         /**
          * Provides a `Backbone.View` allowing a user to login or sign up.
          */
         'use strict';

         LogInView = (function (_Backbone$View) {
            _inherits(LogInView, _Backbone$View);

            _createClass(LogInView, [{
               key: 'events',

               /**
                * Delegated events for logging in and signing up.
                *
                * @returns {object}
                */
               get: function get() {
                  return {
                     'submit form.login-form': 'logIn',
                     'submit form.signup-form': 'signUp'
                  };
               }

               /**
                * Sets the element this view is associated with to `.content`.
                */
            }]);

            function LogInView() {
               _classCallCheck(this, LogInView);

               _get(Object.getPrototypeOf(LogInView.prototype), 'constructor', this).call(this, { el: '.content' });
            }

            /**
             * Binds `this` to the methods specified and renders the view.
             */

            _createClass(LogInView, [{
               key: 'initialize',
               value: function initialize() {
                  // Binds the `this` context to all methods such that it is accessible via Backbone event callbacks.
                  _.bindAll(this, 'logIn', 'signUp');

                  this.render();
               }

               /**
                * Attempts to login a user and on success dispatches a `app:user:login` event which is handled in `App.js`
                * controlling view management.
                *
                * @param {object}   e - event data
                */
            }, {
               key: 'logIn',
               value: function logIn(e) {
                  var _this = this;

                  // When dealing with a form submit button it's necessary to prevent the default form submission.
                  e.preventDefault();

                  var username = this.$('#login-username').val();
                  var password = this.$('#login-password').val();

                  // Send an event `app:user:login` on successful login.
                  Parse.User.logIn(username, password).then(function () {
                     eventbus.trigger('app:user:login');
                  }, function () {
                     _this.$('.login-form .error').html('Invalid username or password. Please try again.').show('fast');

                     // Hide the error message and enable the login button.
                     setTimeout(function () {
                        _this.$('.login-form .error').hide('fast');
                        _this.$('.login-form button').prop('disabled', false);
                     }, 3000);
                  });

                  // Always set the login button to disabled. If there is an error the button is enabled again.
                  this.$('.login-form button').prop('disabled', true);
               }

               /**
                * Renders the login view.
                */
            }, {
               key: 'render',
               value: function render() {
                  // Set the `.content` element to the login template.
                  this.$el.html(_.template(loginTmpl));

                  // Automatically wires all events specified by `get events()`.
                  this.delegateEvents();
               }

               /**
                * Attempts to sign up a user and on success dispatches a `app:user:login` event which is handled in `App.js`
                * controlling view management.
                *
                * @param {object}   e - event data
                */
            }, {
               key: 'signUp',
               value: function signUp(e) {
                  var _this2 = this;

                  // When dealing with a form submit button it's necessary to prevent the default form submission.
                  e.preventDefault();

                  var username = this.$('#signup-username').val();
                  var password = this.$('#signup-password').val();

                  // Dispatch the `app:user:login` on successful signup.
                  Parse.User.signUp(username, password, { ACL: new Parse.ACL() }).then(function () {
                     eventbus.trigger('app:user:login');
                  }, function (error) {
                     _this2.$('.signup-form .error').html(_.escape(error.message)).show('fast');

                     // Hide the error message and enable the sign up button.
                     setTimeout(function () {
                        _this2.$el.find('.signup-form .error').hide('fast');
                        _this2.$('.signup-form button').prop('disabled', false);
                     }, 3000);
                  });

                  // Always set the sign up button to disabled. If there is an error the button is enabled again.
                  this.$('.signup-form button').prop('disabled', true);
               }
            }]);

            return LogInView;
         })(Backbone.View);

         _export('default', LogInView);
      }
   };
});

$__System.registerDynamic("12", ["13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('13'),
      floor = Math.floor;
  module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14", ["15", "12"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('15');
  $export($export.S, 'Number', {isInteger: $__require('12')});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("16", ["14", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('14');
  module.exports = $__require('17').Number.isInteger;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("18", ["16"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('16'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("19", ["1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "13", "25", "26"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a'),
      hide = $__require('1b'),
      redefineAll = $__require('1c'),
      ctx = $__require('1d'),
      strictNew = $__require('1e'),
      defined = $__require('1f'),
      forOf = $__require('20'),
      $iterDefine = $__require('21'),
      step = $__require('22'),
      ID = $__require('23')('id'),
      $has = $__require('24'),
      isObject = $__require('13'),
      setSpecies = $__require('25'),
      DESCRIPTORS = $__require('26'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("27", ["19", "28"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var strong = $__require('19');
  $__require('28')('Map', function(get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("29", ["20", "2a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var forOf = $__require('20'),
      classof = $__require('2a');
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2b", ["15", "29"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('15');
  $export($export.P, 'Map', {toJSON: $__require('29')('Map')});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2c", ["2d", "2e", "2f", "27", "2b", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('2d');
  $__require('2e');
  $__require('2f');
  $__require('27');
  $__require('2b');
  module.exports = $__require('17').Map;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("30", ["2c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('2c'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.register('31', ['18', '30', 'c', 'd'], function (_export) {
   var _Number$isInteger, _Map, _createClass, _classCallCheck, s_ALL_LOGGING_ENABLED, s_LOG_LEVELS, s_IS_LEVEL_ENABLED, Logger;

   return {
      setters: [function (_) {
         _Number$isInteger = _['default'];
      }, function (_2) {
         _Map = _2['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {
         'use strict';

         s_ALL_LOGGING_ENABLED = true;
         s_LOG_LEVELS = {
            off: 7,
            fatal: 6,
            error: 5,
            warn: 4,
            info: 3,
            debug: 2,
            trace: 1,
            all: 0
         };

         s_IS_LEVEL_ENABLED = function s_IS_LEVEL_ENABLED(currentLevel, requestedLevel) {
            return _Number$isInteger(currentLevel) && currentLevel <= requestedLevel && s_ALL_LOGGING_ENABLED;
         };

         /* eslint-disable no-console */

         /**
          * Logger.js -- Provides dispatch to logging plugins. Logging can be turned off via invoking "setLogLevel('off')".
          * By default all logging is enabled and the context is set to `default`. Add one or more logger plugins by invoking
          * the `setLogger` method. Change the logging context by invoking `setContext`.
          *
          * The following log levels are available in order of precedence: `off, fatal, error, warn, info, debug, trace, all`.
          */

         Logger = (function () {
            /**
             * Create the Logger with default values and all logging enabled.
             */

            function Logger() {
               _classCallCheck(this, Logger);

               this._context = 'default';
               this._logLevelMap = new _Map();
               this._loggerMap = new _Map();

               this.setLogLevel('all');
            }

            /**
             * Dispatch to the `logger->debug` if it exists and the log level is enabled.
             */

            _createClass(Logger, [{
               key: 'debug',
               value: function debug() {
                  var enabled = s_IS_LEVEL_ENABLED(this.getLogLevel(), s_LOG_LEVELS['debug']);
                  var logger = this._loggerMap.get(this._context);

                  if (enabled && logger && logger.debug) {
                     logger.debug.apply(logger, arguments);
                  }
               }

               /**
                * Dispatch to the `logger->error` if it exists and the log level is enabled.
                */
            }, {
               key: 'error',
               value: function error() {
                  var enabled = s_IS_LEVEL_ENABLED(this.getLogLevel(), s_LOG_LEVELS['error']);
                  var logger = this._loggerMap.get(this._context);

                  if (enabled && logger) {
                     logger.error.apply(logger, arguments);
                  }
               }

               /**
                * Dispatch to the `logger->fatal` if it exists and the log level is enabled.
                */
            }, {
               key: 'fatal',
               value: function fatal() {
                  var enabled = s_IS_LEVEL_ENABLED(this.getLogLevel(), s_LOG_LEVELS['fatal']);
                  var logger = this._loggerMap.get(this._context);

                  if (enabled && logger) {
                     logger.fatal.apply(logger, arguments);
                  }
               }

               /**
                * Get the current context.
                *
                * @returns {string|*}
                */
            }, {
               key: 'getContext',
               value: function getContext() {
                  return this._context;
               }

               /**
                * Get the log level for the current context.
                *
                * @returns {*}
                */
            }, {
               key: 'getLogLevel',
               value: function getLogLevel() {
                  return this._logLevelMap.get(this._context);
               }

               /**
                * Get the logger by the given context.
                *
                * @param {*}  context - the context to use for logger retrieval.
                * @returns {*}
                */
            }, {
               key: 'getLogger',
               value: function getLogger(context) {
                  return this._loggerMap.get(context);
               }

               /**
                * Returns whether a logger is defined by the given context.
                *
                * @param {*}  context - the context to check.
                * @returns {*}
                */
            }, {
               key: 'hasContext',
               value: function hasContext(context) {
                  return this._loggerMap.get(context) !== undefined;
               }

               /**
                * Returns whether the given log level is enabled.
                *
                * @param {string}   level - log level
                * @returns {boolean}
                */
            }, {
               key: 'isLevelEnabled',
               value: function isLevelEnabled(level) {
                  var requestedLevel = s_LOG_LEVELS[level];

                  if (typeof requestedLevel === 'undefined' || requestedLevel === null) {
                     console.log('isLevelEnabled - unknown log level: ' + level);
                     return false;
                  }

                  return s_IS_LEVEL_ENABLED(this.getLogLevel(), requestedLevel);
               }

               /**
                * Dispatch to the `logger->info` if it exists and the log level is enabled.
                */
            }, {
               key: 'info',
               value: function info() {
                  var enabled = s_IS_LEVEL_ENABLED(this.getLogLevel(), s_LOG_LEVELS['info']);
                  var logger = this._loggerMap.get(this._context);

                  if (enabled && logger) {
                     logger.info.apply(logger, arguments);
                  }
               }

               /**
                * Posts a log message given a log level and parameters.
                *
                * @param {string}   level - log level
                * @param {*}        params - log message parameters to forward onto dispatched method.
                */
            }, {
               key: 'post',
               value: function post(level) {
                  if (typeof s_LOG_LEVELS[level] === 'undefined') {
                     console.log('post - unknown log level: ' + level);
                     return;
                  }

                  var enabled = s_IS_LEVEL_ENABLED(this.getLogLevel(), s_LOG_LEVELS['info']);
                  var logger = this._loggerMap.get(this._context);

                  if (enabled && logger) {
                     for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        params[_key - 1] = arguments[_key];
                     }

                     switch (level) {
                        case 'fatal':
                           logger.fatal.apply(logger, params);
                           break;

                        case 'error':
                           logger.error.apply(logger, params);
                           break;

                        case 'warn':
                           logger.warn.apply(logger, params);
                           break;

                        case 'info':
                           logger.info.apply(logger, params);
                           break;

                        case 'debug':
                           logger.debug.apply(logger, params);
                           break;

                        case 'trace':
                           logger.trace.apply(logger, params);
                           break;
                     }
                  }
               }

               /**
                * Removes the logger by the given context.
                *
                * @param {*}  context - The context to check.
                */
            }, {
               key: 'removeLogger',
               value: function removeLogger(context) {
                  this._loggerMap['delete'](context);
               }

               /**
                * Sets the current context
                *
                * @param {string}   context - The context to set.
                * @returns {boolean}
                */
            }, {
               key: 'setContext',
               value: function setContext(context) {
                  if (typeof context !== 'string') {
                     throw new TypeError('setContext - context is not a string: ' + context);
                  }

                  this._context = context;
                  return true;
               }

               /**
                * Sets the current log level.
                *
                * @param {string}   level - log level
                * @returns {boolean}
                */
            }, {
               key: 'setLogLevel',
               value: function setLogLevel(level) {
                  var requestedLevel = s_LOG_LEVELS[level];

                  if (typeof requestedLevel === 'undefined' || requestedLevel === null) {
                     console.log('setLogLevel - unknown log level: ' + level);
                     return false;
                  }

                  this._logLevelMap.set(this._context, requestedLevel);
                  return true;
               }

               /**
                * Sets the logger for the give context.
                *
                * @param {string}   context - The context to set.
                * @param {*}        logger - The logger to set.
                */
            }, {
               key: 'setLogger',
               value: function setLogger(context, logger) {
                  if (typeof context !== 'string') {
                     throw new TypeError('setLogger - context is not a string: ' + context);
                  }

                  this._loggerMap.set(context, logger);

                  if (!this._logLevelMap.has(context)) {
                     this._logLevelMap.set(context, s_LOG_LEVELS['all']);
                  }
               }

               /**
                * Dispatch to the `logger->trace` if it exists and the log level is enabled.
                */
            }, {
               key: 'trace',
               value: function trace() {
                  var enabled = s_IS_LEVEL_ENABLED(this.getLogLevel(), s_LOG_LEVELS['trace']);
                  var logger = this._loggerMap.get(this._context);

                  if (enabled && logger) {
                     logger.trace.apply(logger, arguments);
                  }
               }

               /**
                * Dispatch to the `logger->warn` if it exists and the log level is enabled.
                */
            }, {
               key: 'warn',
               value: function warn() {
                  var enabled = s_IS_LEVEL_ENABLED(this.getLogLevel(), s_LOG_LEVELS['warn']);
                  var logger = this._loggerMap.get(this._context);

                  if (enabled && logger) {
                     logger.warn.apply(logger, arguments);
                  }
               }
            }]);

            return Logger;
         })();

         _export('default', Logger);
      }
   };
});

$__System.register('32', ['c', 'd'], function (_export) {
   var _createClass, _classCallCheck, ConsoleLogger;

   return {
      setters: [function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {
         'use strict';

         /* eslint-disable no-console */

         /**
          * ConsoleLogger.js -- Provides basic logging functionality with all log messages posting to `console.log`.
          * Trace will also output "console.trace()" after the log message is posted.
          */

         ConsoleLogger = (function () {
            /**
             * Sets the serializer; defaults to `JSON` if none supplied.
             *
             * @param {Object} serializer - An instance that conform to the JSON API.
             */

            function ConsoleLogger() {
               var serializer = arguments.length <= 0 || arguments[0] === undefined ? JSON : arguments[0];

               _classCallCheck(this, ConsoleLogger);

               this.setSerializer(serializer);
            }

            /**
             * Post debug message.
             */

            _createClass(ConsoleLogger, [{
               key: 'debug',
               value: function debug() {
                  var message = undefined;

                  // Attempt to convert the arguments to a string.
                  try {
                     message = this._serializer.stringify(arguments);
                  } catch (ignore) {/* ignore */}

                  if (message !== undefined) {
                     console.log('Debug: ' + message);
                  }
               }

               /**
                * Post error message.
                */
            }, {
               key: 'error',
               value: function error() {
                  var message = undefined;

                  // Attempt to convert the arguments to a string.
                  try {
                     message = this._serializer.stringify(arguments);
                  } catch (ignore) {/* ignore */}

                  if (message !== undefined) {
                     console.log('Error: ' + message);
                  }
               }

               /**
                * Post fatal message.
                */
            }, {
               key: 'fatal',
               value: function fatal() {
                  var message = undefined;

                  // Attempt to convert the arguments to a string.
                  try {
                     message = this._serializer.stringify(arguments);
                  } catch (ignore) {/* ignore */}

                  if (message !== undefined) {
                     console.log('Fatal: ' + message);
                  }
               }

               /**
                * Returns the serializer.
                *
                * @returns {Object|*}
                */
            }, {
               key: 'getSerializer',
               value: function getSerializer() {
                  return this._serializer;
               }

               /**
                * Post info message.
                */
            }, {
               key: 'info',
               value: function info() {
                  var message = undefined;

                  // Attempt to convert the arguments to a string.
                  try {
                     message = this._serializer.stringify(arguments);
                  } catch (ignore) {/* ignore */}

                  if (message !== undefined) {
                     console.log('Info: ' + message);
                  }
               }

               /**
                * Sets the serializer which must conform to the JSON API.
                *
                * @param {Object}   serializer - An instance of a JSON like serializer.
                */
            }, {
               key: 'setSerializer',
               value: function setSerializer(serializer) {
                  if (typeof serializer !== 'object' || typeof serializer.stringify !== 'function' || typeof serializer.parse !== 'function') {
                     throw new TypeError('setSerializer - `serializer` does not conform to the JSON API.');
                  }

                  this._serializer = serializer;
               }

               /**
                * Post trace message.
                */
            }, {
               key: 'trace',
               value: function trace() {
                  var message = undefined;

                  // Attempt to convert the arguments to a string.
                  try {
                     message = this._serializer.stringify(arguments);
                  } catch (ignore) {/* ignore */}

                  if (message !== undefined) {
                     console.log('Trace: ' + message);console.trace();
                  }
               }

               /**
                * Post warn message.
                */
            }, {
               key: 'warn',
               value: function warn() {
                  var message = undefined;

                  // Attempt to convert the arguments to a string.
                  try {
                     message = this._serializer.stringify(arguments);
                  } catch (ignore) {/* ignore */}

                  if (message !== undefined) {
                     console.log('Warn: ' + message);
                  }
               }
            }]);

            return ConsoleLogger;
         })();

         _export('default', ConsoleLogger);
      }
   };
});

$__System.register('33', ['31', '32'], function (_export) {
  'use strict';

  var Logger, ConsoleLogger, logger;
  return {
    setters: [function (_) {
      Logger = _['default'];
    }, function (_2) {
      ConsoleLogger = _2['default'];
    }],
    execute: function () {
      logger = new Logger();

      logger.setLogger('default', new ConsoleLogger());

      _export('default', logger);
    }
  };
});

$__System.register("34", ["33"], function (_export) {
  "use strict";

  return {
    setters: [function (_) {
      var _exportObj = {};

      for (var _key in _) {
        if (_key !== "default") _exportObj[_key] = _[_key];
      }

      _exportObj["default"] = _["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

$__System.register('35', ['10', '34', '36', '37', 'a', 'b', 'c', 'd'], function (_export) {
   var _, logger, Utils, TyphonEvents, _get, _inherits, _createClass, _classCallCheck, TyphonLoggedEvents;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_4) {
         logger = _4['default'];
      }, function (_5) {
         Utils = _5['default'];
      }, function (_3) {
         TyphonEvents = _3['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         /**
          * TyphonLoggedEvents posts a message to the `logger` before invoking the parent TyphonEvents method.
          *
          * Adds new functionality for trigger events. The following are new trigger mechanisms:
          *
          * Please refer to the Events documentation for all inherited functionality.
          *
          * `triggerDefer` - Defers invoking `trigger`.
          *
          * `triggerFirst` - Only invokes the first target matched and passes back any result to the callee.
          *
          * `triggerResults` - Invokes all targets matched and passes back an array of results in an array to the callee.
          *
          * `triggerThen` - Invokes all targets matched and adds any returned promises through Promise.all which returns
          *  a single promise to the callee.
          */
         'use strict';

         TyphonLoggedEvents = (function (_TyphonEvents) {
            _inherits(TyphonLoggedEvents, _TyphonEvents);

            /**
             * Constructs TyphonLoggedEvents and sets the default log level to `debug` and the eventbusName to 'unknown`.
             */

            function TyphonLoggedEvents() {
               _classCallCheck(this, TyphonLoggedEvents);

               _get(Object.getPrototypeOf(TyphonLoggedEvents.prototype), 'constructor', this).call(this);

               this._logLevel = 'debug';
               this._eventbusName = 'unknown';
            }

            /**
             * Returns the any event scrubber function.
             *
             * @returns {function}
             */

            _createClass(TyphonLoggedEvents, [{
               key: 'getEventScrubber',
               value: function getEventScrubber() {
                  return this._eventScrubber;
               }

               /**
                * Returns the current log level.
                *
                * @returns {string|*}
                */
            }, {
               key: 'getLogLevel',
               value: function getLogLevel() {
                  return this._logLevel;
               }

               /**
                * Sets the current event scrubber. The event scrubber is a function which is passed the `logData` object hash
                * of event data that is about to be logged. It should pass back a modified version of `logData`. This is rather
                * useful for scrubbing sensitive events from being logged such as username / password.
                *
                * @param {function} eventScrubber - A function that scrubs event log data.
                */
            }, {
               key: 'setEventScrubber',
               value: function setEventScrubber(eventScrubber) {
                  if (!_.isFunction(eventScrubber)) {
                     if (Utils.isNullOrUndef(eventScrubber)) {
                        this._eventScrubber = undefined;
                     } else {
                        throw new TypeError('setEventScrubber - `eventScrubber` is not a function.');
                     }
                  } else {
                     this._eventScrubber = eventScrubber;
                  }
               }

               /**
                * Sets the current log level.
                *
                * @param {string}   logLevel - The log level to set.
                */
            }, {
               key: 'setLogLevel',
               value: function setLogLevel(logLevel) {
                  this._logLevel = logLevel;
               }

               /**
                * Defers invoking `trigger`.
                *
                * @returns {TyphonLoggedEvents}
                */
            }, {
               key: 'triggerDefer',
               value: function triggerDefer() {
                  var _this = this,
                      _arguments = arguments;

                  setTimeout(function () {
                     _this.trigger.apply(_this, _arguments);
                  }, 0);

                  return this;
               }

               /**
                * Posts a log message given the current log level.
                *
                * Trigger callbacks for the given event, or space-delimited list of events. Subsequent arguments to trigger will be
                * passed along to the event callbacks.
                *
                * @see http://backbonejs.org/#Events-trigger
                *
                * @param {string}   name  - Event name(s)
                * @returns {TyphonLoggedEvents}
                */
            }, {
               key: 'trigger',
               value: function trigger(name) {
                  var params = arguments.length > 1 ? _.map(Array.prototype.slice.call(arguments, 1), _.clone) : [];

                  var logData = { busName: this._eventbusName, triggerType: 'trigger', eventName: name, params: params };

                  logger.post(this._logLevel, !Utils.isNullOrUndef(this._eventScrubber) ? this._eventScrubber(logData) : logData);

                  return _get(Object.getPrototypeOf(TyphonLoggedEvents.prototype), 'trigger', this).apply(this, arguments);
               }

               /**
                * Posts a log message given the current log level.
                *
                * Provides `trigger` functionality that only invokes the first target matched and passes back any result to
                * the callee.
                *
                * @param {string}   name  - Event name(s)
                * @returns {*}
                */
            }, {
               key: 'triggerFirst',
               value: function triggerFirst(name) {
                  var params = arguments.length > 1 ? _.map(Array.prototype.slice.call(arguments, 1), _.clone) : [];

                  var results = _get(Object.getPrototypeOf(TyphonLoggedEvents.prototype), 'triggerFirst', this).apply(this, arguments);

                  var logData = { busName: this._eventbusName, triggerType: 'triggerFirst', eventName: name, params: params, results: results };

                  logger.post(this._logLevel, !Utils.isNullOrUndef(this._eventScrubber) ? this._eventScrubber(logData) : logData);

                  return results;
               }

               /**
                * Posts a log message given the current log level.
                *
                * Provides `trigger` functionality, but collects any returned results from invoked targets in an array and passes
                * back this array to the callee.
                *
                * @param {string}   name  - Event name(s)
                * @returns {Array<*>}
                */
            }, {
               key: 'triggerResults',
               value: function triggerResults(name) {
                  var params = arguments.length > 1 ? _.map(Array.prototype.slice.call(arguments, 1), _.clone) : [];

                  var results = _get(Object.getPrototypeOf(TyphonLoggedEvents.prototype), 'triggerResults', this).apply(this, arguments);

                  var logData = { busName: this._eventbusName, triggerType: 'triggerResults', eventName: name, params: params, results: results };

                  logger.post(this._logLevel, !Utils.isNullOrUndef(this._eventScrubber) ? this._eventScrubber(logData) : logData);

                  return results;
               }

               /**
                * Posts a log message given the current log level.
                *
                * Provides `trigger` functionality, but collects any returned Promises from invoked targets and returns a
                * single Promise generated by `Promise.all`. This is a very useful mechanism to invoke asynchronous operations
                * over an eventbus.
                *
                * @param {string}   name  - Event name(s)
                * @returns {Promise}
                */
            }, {
               key: 'triggerThen',
               value: function triggerThen(name) {
                  var params = arguments.length > 1 ? _.map(Array.prototype.slice.call(arguments, 1), _.clone) : [];

                  var logData = { busName: this._eventbusName, triggerType: 'triggerThen', eventName: name, params: params };

                  logger.post(this._logLevel, !Utils.isNullOrUndef(this._eventScrubber) ? this._eventScrubber(logData) : logData);

                  return _get(Object.getPrototypeOf(TyphonLoggedEvents.prototype), 'triggerThen', this).apply(this, arguments);
               }
            }]);

            return TyphonLoggedEvents;
         })(TyphonEvents);

         _export('default', TyphonLoggedEvents);
      }
   };
});

$__System.register('11', ['35'], function (_export) {
  'use strict';

  var TyphonLoggedEvents, eventbus;
  return {
    setters: [function (_) {
      TyphonLoggedEvents = _['default'];
    }],
    execute: function () {
      eventbus = new TyphonLoggedEvents();

      eventbus.setEventbusName('mainEventbus');

      /**
       * Exports an instance of `TyphonLoggedEvents` which adds asynchronous capabilities to `Backbone.Events` which is used
       * as a main eventbus. Note that an instance of `TyphonLoggedEvents` is exported and is also associated to a mapped
       * path, `mainEventbus` in the SystemJS extra configuration data loaded by all TyphonJS repos in
       * `./config/config-app-paths.js`. By using a mapped path any other module may import the main eventbus via:
       * `import eventbus from 'mainEventbus';`
       *
       * Note the above creation of `const eventbus` is a workaround for an ESDoc bug:
       * https://github.com/esdoc/esdoc/issues/166
       *
       * Normally we can write `export default new TyphonLoggedEvents();`, but this currently breaks ESDoc.
       */

      _export('default', eventbus);
    }
  };
});

$__System.registerDynamic("38", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<li class=\"<%= done ? 'completed' : '' %>\">\n   <div class=\"view\">\n      <input class=\"toggle\" type=\"checkbox\" <%= done ? 'checked=\"checked\"' : '' %>>\n      <label class=\"todo-content\"><%= _.escape(content) %></label>\n      <button class=\"todo-destroy\"></button>\n   </div>\n   <input class=\"edit\" value=\"<%= _.escape(content) %>\">\n</li>";
  global.define = __define;
  return module.exports;
});

$__System.register('39', ['9', '10', '38', 'a', 'b', 'c', 'd'], function (_export) {
  var Backbone, _, itemTmpl, _get, _inherits, _createClass, _classCallCheck, ItemView;

  return {
    setters: [function (_3) {
      Backbone = _3['default'];
    }, function (_2) {
      _ = _2['default'];
    }, function (_4) {
      itemTmpl = _4['default'];
    }, function (_a) {
      _get = _a['default'];
    }, function (_b) {
      _inherits = _b['default'];
    }, function (_c) {
      _createClass = _c['default'];
    }, function (_d) {
      _classCallCheck = _d['default'];
    }],
    execute: function () {

      /**
       * The `Backbone.View` for an item which encapsulates the ability to edit the content of the item. With a desktop
       * browser an `Item` can be edited with a double click or double tap when running on a mobile device. Zepto is the
       * jQuery equivalent library being used and the touch API is added so additional touch events, `doubleTap` are
       * available.
       */
      'use strict';

      ItemView = (function (_Backbone$View) {
        _inherits(ItemView, _Backbone$View);

        function ItemView() {
          _classCallCheck(this, ItemView);

          _get(Object.getPrototypeOf(ItemView.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(ItemView, [{
          key: 'initialize',

          /**
           * The ItemView listens for changes to its model, re-rendering. Since there's a one-to-one correspondence between an
           * Item and an ItemView. If the model is deleted then the `Backbone.View->remove` method is invoked.
           */
          value: function initialize() {
            // Binds the `this` context to all methods such that it is accessible via Backbone event callbacks.
            _.bindAll(this, 'clear', 'closeEdit', 'remove', 'render');

            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
          }

          /**
           * Remove the item, destroy the model.
           */
        }, {
          key: 'clear',
          value: function clear() {
            this.model.destroy();
          }

          /**
           * Close the `editing` mode, saving changes to the todo.
           */
        }, {
          key: 'closeEdit',
          value: function closeEdit() {
            this.model.save({ content: this.input.val() });
            this.$el.removeClass('editing');
          }

          /**
           * Switch this view into `editing` mode, displaying the input field.
           */
        }, {
          key: 'edit',
          value: function edit() {
            this.$el.addClass('editing');
            this.input.focus();
          }

          /**
           * Re-render the contents of the Item.
           *
           * @returns {ItemView}
           */
        }, {
          key: 'render',
          value: function render() {
            this.$el.html(this.template(this.model.toJSON()));

            /**
             * @type {object} Stores the edit input.
             */
            this.input = this.$('.edit');

            return this;
          }

          /**
           * Toggle the `done` state of the model.
           */
        }, {
          key: 'toggleDone',
          value: function toggleDone() {
            this.model.toggle();
          }

          /**
           * If you hit `enter`, we're through editing the item.
           *
           * @param {object}   e - event data
           */
        }, {
          key: 'updateOnEnter',
          value: function updateOnEnter(e) {
            if (e.keyCode === 13) {
              this.closeEdit();
            }
          }
        }, {
          key: 'tagName',

          /**
           * Defines the tag that is created for an `Item`.
           *
           * @returns {string}
           */
          get: function get() {
            return 'li';
          }

          /**
           * Delegated events for interacting with an `Item`.
           *
           * @returns {object}
           */
        }, {
          key: 'events',
          get: function get() {
            return {
              'click .toggle': 'toggleDone',
              'doubleTap label.todo-content': 'edit',
              'dblclick label.todo-content': 'edit',
              'click .todo-destroy': 'clear',
              'keypress .edit': 'updateOnEnter',
              'blur .edit': 'closeEdit'
            };
          }

          /**
           * Cache the template function for a single item.
           *
           * @returns {*}
           */
        }, {
          key: 'template',
          get: function get() {
            return _.template(itemTmpl);
          }
        }]);

        return ItemView;
      })(Backbone.View);

      _export('default', ItemView);
    }
  };
});

$__System.registerDynamic("3a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<div id=\"user-info\">\n   Signed in as <%= username %> (<a href=\"#\" class=\"log-out\">Log out</a>)\n</div>\n\n<div class=\"section\">\n\n   <header id=\"header\">\n      <input id=\"new-todo\" placeholder=\"What needs to be done?\" type=\"text\" />\n   </header>\n\n   <div id=\"main\">\n      <input id=\"toggle-all\" type=\"checkbox\">\n      <label for=\"toggle-all\">Mark all as complete</label>\n\n      <ul id=\"todo-list\">\n         <img class='spinner' />\n      </ul>\n   </div>\n\n   <div id=\"todo-stats\"></div>\n</div>";
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<footer id=\"footer\">\n   <span id=\"todo-count\"><strong><%= remaining %></strong> <%= remaining == 1 ? 'item' : 'items' %> left</span>\n   <ul id=\"filters\">\n      <li>\n         <a href=\"javascript:void(0)\" id=\"all\" class=\"selected\">All</a>\n      </li>\n      <li>\n         <a href=\"javascript:void(0)\" id=\"active\">Active</a>\n      </li>\n      <li>\n         <a href=\"javascript:void(0)\" id=\"completed\">Completed</a>\n      </li>\n   </ul>\n   <button id=\"clear-completed\">Clear completed (<%= done %>)</button>\n</footer>";
  global.define = __define;
  return module.exports;
});

$__System.register('3c', ['8', '9', '10', '11', '30', '39', 'a', 'b', 'c', 'd', '3d', '3e', '3a', '3b'], function (_export) {
   var appState, Backbone, _, eventbus, _Map, ItemView, _get, _inherits, _createClass, _classCallCheck, $, todoList, manageTodosTmpl, statsTmpl, ManageTodosView;

   return {
      setters: [function (_7) {
         appState = _7['default'];
      }, function (_4) {
         Backbone = _4['default'];
      }, function (_3) {
         _ = _3['default'];
      }, function (_5) {
         eventbus = _5['default'];
      }, function (_2) {
         _Map = _2['default'];
      }, function (_6) {
         ItemView = _6['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }, function (_d2) {
         $ = _d2['default'];
      }, function (_e) {
         todoList = _e['default'];
      }, function (_a2) {
         manageTodosTmpl = _a2['default'];
      }, function (_b2) {
         statsTmpl = _b2['default'];
      }],
      execute: function () {

         /**
          * The main view that lets a user manage their todos `Items`. When the various items are rendered they are tracked
          * in the `itemViews` map so that they can be cleaned up correctly.
          */
         'use strict';

         ManageTodosView = (function (_Backbone$View) {
            _inherits(ManageTodosView, _Backbone$View);

            _createClass(ManageTodosView, [{
               key: 'events',

               /**
                * Delegated events for creating new items and clearing completed ones.
                *
                * @returns {object}
                */
               get: function get() {
                  return {
                     'keypress #new-todo': 'createOnEnter',
                     'click #clear-completed': 'clearCompleted',
                     'click #toggle-all': 'toggleAllComplete',
                     'click .log-out': function clickLogOut() {
                        eventbus.trigger('app:user:logout');
                     },
                     'click ul#filters a': function clickUlFiltersA(e) {
                        eventbus.trigger('app:select:filter', $(e.target).attr('id'));
                     }
                  };
               }

               /**
                * The template for the line of statistics at the bottom of the app.
                */
            }, {
               key: 'statsTemplate',
               get: function get() {
                  return _.template(statsTmpl);
               }

               /**
                * Extends the optional parameters with the element this view is associated with to `.content`.
                *
                * @param {object}   options - optional parameters
                */
            }]);

            function ManageTodosView() {
               var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

               _classCallCheck(this, ManageTodosView);

               _get(Object.getPrototypeOf(ManageTodosView.prototype), 'constructor', this).call(this, _.extend({ el: '.content' }, options));

               /**
                * Stores all current `ItemViews` so that they may be properly cleaned up.
                *
                * @type {Array<ItemView>}
                */
               this.itemViews = new _Map();
            }

            /**
             * At initialization we bind to the relevant events on the `Todos` collection, when items are added or changed.
             * Kick things off by loading any preexisting todos that might be saved to Parse.
             *
             * @param {object}   options - optional parameters
             */

            _createClass(ManageTodosView, [{
               key: 'initialize',
               value: function initialize(options) {
                  var _this = this;

                  // Binds the `this` context to all methods such that it is accessible via Backbone event callbacks.
                  _.bindAll(this, 'addOne', 'addAll', 'addSome', 'createOnEnter', 'render', 'toggleAllComplete');

                  // Main todos management template.
                  this.$el.html(_.template(manageTodosTmpl)(options));

                  /**
                   * @type {object} Stores the input field.
                   */
                  this.input = this.$('#new-todo');

                  /**
                   * @type {object} Stores the toggle all checkbox.
                   */
                  this.allCheckbox = this.$('#toggle-all')[0];

                  // Useful to get rid of the initial displayed spinner gif. This is called only once when the collection
                  // initially is reset.
                  this.listenToOnce(todoList, 'reset', function () {
                     _this.$('#todo-list').html('');
                  });

                  // When `AppState` changes invoke `filter` to redraw this view.
                  this.listenTo(appState, 'change', this.filter);

                  // When `todoList` is reset / initially populated or if an Item done state changes invoke `filter` to
                  // redraw this view.
                  this.listenTo(todoList, 'change:done reset', this.filter);

                  // Ensure that the statistics are re-rendered when an item is added or removed.
                  this.listenTo(todoList, 'update', this.render);
               }

               /**
                * Add all items in the Todos collection at once.
                */
            }, {
               key: 'addAll',
               value: function addAll() {
                  this.clearAll();

                  todoList.each(this.addOne);

                  this.render();
               }

               /**
                * Add a single item to the list by creating a view for it, and appending its element to the `<ul>`.
                *
                * @param {Item}  item - Item to add.
                */
            }, {
               key: 'addOne',
               value: function addOne(item) {
                  var view = new ItemView({ model: item });

                  this.itemViews.set(item, view);

                  this.$('#todo-list').append(view.render().el);
               }

               /**
                * Only adds some todos, based on a filtering function that is passed into `addSome`.
                *
                * @param {function} filter - A function to filter the Items.
                */
            }, {
               key: 'addSome',
               value: function addSome(filter) {
                  this.clearAll();

                  todoList.chain().filter(filter).each(this.addOne);

                  this.render();
               }

               /**
                * Iterates through the `itemViews` map invoking the `Backbone.View->remove` method for each `ItemView` tracked.
                * The map is then cleared.
                */
            }, {
               key: 'clearAll',
               value: function clearAll() {
                  this.itemViews.forEach(function (itemView) {
                     itemView.remove();
                  });
                  this.itemViews.clear();
               }

               /**
                * Clear all done todos items, destroying their models.
                */
            }, {
               key: 'clearCompleted',
               value: function clearCompleted() {
                  var _this2 = this;

                  _.each(todoList.done(), function (item) {
                     // This will trigger the remove method of ItemView.
                     item.destroy();

                     // Remove the ItemView from the tracking map.
                     _this2.itemViews['delete'](item);
                  });
               }

               /**
                * If you hit return in the main input field, create new Item model. The creation of the item is handled over
                * the eventbus via triggering `app:create:item` which invokes `App.js->createItem`.
                *
                * @param {object}   e - event data
                */
            }, {
               key: 'createOnEnter',
               value: function createOnEnter(e) {
                  // Only respond to `enter` pressed.
                  if (e.keyCode !== 13) {
                     return;
                  }

                  // Create new item.
                  eventbus.trigger('app:create:item', this.input.val());

                  // Clear the input text field.
                  this.input.val('');

                  // Sets state and updates Backbone.history.navigate.
                  eventbus.trigger('app:select:filter', 'all');
               }

               /**
                * Invoked when the TodoList collection is reset and when the app state changes.
                */
            }, {
               key: 'filter',
               value: function filter() {
                  var filterValue = appState.get('filter');

                  switch (filterValue) {
                     case 'all':
                        this.addAll();
                        break;

                     case 'completed':
                        this.addSome(function (item) {
                           return item.get('done');
                        });
                        break;

                     default:
                        this.addSome(function (item) {
                           return !item.get('done');
                        });
                        break;
                  }
               }

               /**
                * Re-rendering the App just means refreshing the statistics -- the rest of the app doesn't change.
                */
            }, {
               key: 'render',
               value: function render() {
                  var done = todoList.done().length;
                  var remaining = todoList.remaining().length;

                  // Render the statistics template
                  this.$('#todo-stats').html(this.statsTemplate({ total: todoList.length, done: done, remaining: remaining }));

                  // Automatically wires all events specified by `get events()`.
                  this.delegateEvents();

                  // Sets the checked state of the allCheckbox depending on remaining count.
                  this.allCheckbox.checked = !remaining;

                  // Update the filter state after the stats template is rendered.
                  var filterValue = appState.get('filter');
                  $('ul#filters a').removeClass('selected');
                  $('ul#filters a#' + filterValue).addClass('selected');
               }

               /**
                * Toggles all todos items to completed / done then saves each item.
                */
            }, {
               key: 'toggleAllComplete',
               value: function toggleAllComplete() {
                  var done = this.allCheckbox.checked;
                  todoList.each(function (item) {
                     item.save({ done: done });
                  });
               }
            }]);

            return ManageTodosView;
         })(Backbone.View);

         _export('default', ManageTodosView);
      }
   };
});

$__System.register('8', ['9', 'a', 'b', 'c', 'd'], function (_export) {
  var Backbone, _get, _inherits, _createClass, _classCallCheck, AppState;

  return {
    setters: [function (_) {
      Backbone = _['default'];
    }, function (_a) {
      _get = _a['default'];
    }, function (_b) {
      _inherits = _b['default'];
    }, function (_c) {
      _createClass = _c['default'];
    }, function (_d) {
      _classCallCheck = _d['default'];
    }],
    execute: function () {

      /**
       * This is the transient application state, not persisted on Parse. By using a `Backbone.Model` this also makes it an
       * instance of `Backbone.Events` allowing subscription to state changes. Exporting an instance of AppState allows
       * any other module to import this instance.
       */
      'use strict';

      AppState = (function (_Backbone$Model) {
        _inherits(AppState, _Backbone$Model);

        function AppState() {
          _classCallCheck(this, AppState);

          _get(Object.getPrototypeOf(AppState.prototype), 'constructor', this).apply(this, arguments);
        }

        /**
         * Returns an instance of AppState.
         */

        _createClass(AppState, [{
          key: 'className',

          /**
           * Sets the `className` necessary for constructing a Backbone.Model with `backbone-parse-es6`.
           *
           * @returns {string}
           */
          get: function get() {
            return 'AppState';
          }

          /**
           * Returns the default values for AppState which is set in `Backbone.Model` when initializing an instance of
           * `AppState`.
           *
           * @returns {object}
           */
        }, {
          key: 'defaults',
          get: function get() {
            return { filter: 'all' };
          }
        }]);

        return AppState;
      })(Backbone.Model);

      _export('default', new AppState());
    }
  };
});

(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
;
(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd)
    define("3f", [], factory);
  else if (typeof exports === 'object')
    factory(require());
  else
    factory();
}(function() {
  var Zepto = (function() {
    var undefined,
        key,
        $,
        classList,
        emptyArray = [],
        concat = emptyArray.concat,
        filter = emptyArray.filter,
        slice = emptyArray.slice,
        document = window.document,
        elementDisplay = {},
        classCache = {},
        cssNumber = {
          'column-count': 1,
          'columns': 1,
          'font-weight': 1,
          'line-height': 1,
          'opacity': 1,
          'z-index': 1,
          'zoom': 1
        },
        fragmentRE = /^\s*<(\w+|!)[^>]*>/,
        singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        rootNodeRE = /^(?:body|html)$/i,
        capitalRE = /([A-Z])/g,
        methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
        adjacencyOperators = ['after', 'prepend', 'before', 'append'],
        table = document.createElement('table'),
        tableRow = document.createElement('tr'),
        containers = {
          'tr': document.createElement('tbody'),
          'tbody': table,
          'thead': table,
          'tfoot': table,
          'td': tableRow,
          'th': tableRow,
          '*': document.createElement('div')
        },
        readyRE = /complete|loaded|interactive/,
        simpleSelectorRE = /^[\w-]*$/,
        class2type = {},
        toString = class2type.toString,
        zepto = {},
        camelize,
        uniq,
        tempParent = document.createElement('div'),
        propMap = {
          'tabindex': 'tabIndex',
          'readonly': 'readOnly',
          'for': 'htmlFor',
          'class': 'className',
          'maxlength': 'maxLength',
          'cellspacing': 'cellSpacing',
          'cellpadding': 'cellPadding',
          'rowspan': 'rowSpan',
          'colspan': 'colSpan',
          'usemap': 'useMap',
          'frameborder': 'frameBorder',
          'contenteditable': 'contentEditable'
        },
        isArray = Array.isArray || function(object) {
          return object instanceof Array;
        };
    zepto.matches = function(element, selector) {
      if (!selector || !element || element.nodeType !== 1)
        return false;
      var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
      if (matchesSelector)
        return matchesSelector.call(element, selector);
      var match,
          parent = element.parentNode,
          temp = !parent;
      if (temp)
        (parent = tempParent).appendChild(element);
      match = ~zepto.qsa(parent, selector).indexOf(element);
      temp && tempParent.removeChild(element);
      return match;
    };
    function type(obj) {
      return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    }
    function isFunction(value) {
      return type(value) == "function";
    }
    function isWindow(obj) {
      return obj != null && obj == obj.window;
    }
    function isDocument(obj) {
      return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }
    function isObject(obj) {
      return type(obj) == "object";
    }
    function isPlainObject(obj) {
      return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }
    function likeArray(obj) {
      return typeof obj.length == 'number';
    }
    function compact(array) {
      return filter.call(array, function(item) {
        return item != null;
      });
    }
    function flatten(array) {
      return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }
    camelize = function(str) {
      return str.replace(/-+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    };
    function dasherize(str) {
      return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    }
    uniq = function(array) {
      return filter.call(array, function(item, idx) {
        return array.indexOf(item) == idx;
      });
    };
    function classRE(name) {
      return name in classCache ? classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'));
    }
    function maybeAddPx(name, value) {
      return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value;
    }
    function defaultDisplay(nodeName) {
      var element,
          display;
      if (!elementDisplay[nodeName]) {
        element = document.createElement(nodeName);
        document.body.appendChild(element);
        display = getComputedStyle(element, '').getPropertyValue("display");
        element.parentNode.removeChild(element);
        display == "none" && (display = "block");
        elementDisplay[nodeName] = display;
      }
      return elementDisplay[nodeName];
    }
    function children(element) {
      return 'children' in element ? slice.call(element.children) : $.map(element.childNodes, function(node) {
        if (node.nodeType == 1)
          return node;
      });
    }
    function Z(dom, selector) {
      var i,
          len = dom ? dom.length : 0;
      for (i = 0; i < len; i++)
        this[i] = dom[i];
      this.length = len;
      this.selector = selector || '';
    }
    zepto.fragment = function(html, name, properties) {
      var dom,
          nodes,
          container;
      if (singleTagRE.test(html))
        dom = $(document.createElement(RegExp.$1));
      if (!dom) {
        if (html.replace)
          html = html.replace(tagExpanderRE, "<$1></$2>");
        if (name === undefined)
          name = fragmentRE.test(html) && RegExp.$1;
        if (!(name in containers))
          name = '*';
        container = containers[name];
        container.innerHTML = '' + html;
        dom = $.each(slice.call(container.childNodes), function() {
          container.removeChild(this);
        });
      }
      if (isPlainObject(properties)) {
        nodes = $(dom);
        $.each(properties, function(key, value) {
          if (methodAttributes.indexOf(key) > -1)
            nodes[key](value);
          else
            nodes.attr(key, value);
        });
      }
      return dom;
    };
    zepto.Z = function(dom, selector) {
      return new Z(dom, selector);
    };
    zepto.isZ = function(object) {
      return object instanceof zepto.Z;
    };
    zepto.init = function(selector, context) {
      var dom;
      if (!selector)
        return zepto.Z();
      else if (typeof selector == 'string') {
        selector = selector.trim();
        if (selector[0] == '<' && fragmentRE.test(selector))
          dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
        else if (context !== undefined)
          return $(context).find(selector);
        else
          dom = zepto.qsa(document, selector);
      } else if (isFunction(selector))
        return $(document).ready(selector);
      else if (zepto.isZ(selector))
        return selector;
      else {
        if (isArray(selector))
          dom = compact(selector);
        else if (isObject(selector))
          dom = [selector], selector = null;
        else if (fragmentRE.test(selector))
          dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
        else if (context !== undefined)
          return $(context).find(selector);
        else
          dom = zepto.qsa(document, selector);
      }
      return zepto.Z(dom, selector);
    };
    $ = function(selector, context) {
      return zepto.init(selector, context);
    };
    function extend(target, source, deep) {
      for (key in source)
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
          if (isPlainObject(source[key]) && !isPlainObject(target[key]))
            target[key] = {};
          if (isArray(source[key]) && !isArray(target[key]))
            target[key] = [];
          extend(target[key], source[key], deep);
        } else if (source[key] !== undefined)
          target[key] = source[key];
    }
    $.extend = function(target) {
      var deep,
          args = slice.call(arguments, 1);
      if (typeof target == 'boolean') {
        deep = target;
        target = args.shift();
      }
      args.forEach(function(arg) {
        extend(target, arg, deep);
      });
      return target;
    };
    zepto.qsa = function(element, selector) {
      var found,
          maybeID = selector[0] == '#',
          maybeClass = !maybeID && selector[0] == '.',
          nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
          isSimple = simpleSelectorRE.test(nameOnly);
      return (element.getElementById && isSimple && maybeID) ? ((found = element.getElementById(nameOnly)) ? [found] : []) : (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] : slice.call(isSimple && !maybeID && element.getElementsByClassName ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector));
    };
    function filtered(nodes, selector) {
      return selector == null ? $(nodes) : $(nodes).filter(selector);
    }
    $.contains = document.documentElement.contains ? function(parent, node) {
      return parent !== node && parent.contains(node);
    } : function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent)
          return true;
      return false;
    };
    function funcArg(context, arg, idx, payload) {
      return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }
    function setAttribute(node, name, value) {
      value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
    }
    function className(node, value) {
      var klass = node.className || '',
          svg = klass && klass.baseVal !== undefined;
      if (value === undefined)
        return svg ? klass.baseVal : klass;
      svg ? (klass.baseVal = value) : (node.className = value);
    }
    function deserializeValue(value) {
      try {
        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
      } catch (e) {
        return value;
      }
    }
    $.type = type;
    $.isFunction = isFunction;
    $.isWindow = isWindow;
    $.isArray = isArray;
    $.isPlainObject = isPlainObject;
    $.isEmptyObject = function(obj) {
      var name;
      for (name in obj)
        return false;
      return true;
    };
    $.inArray = function(elem, array, i) {
      return emptyArray.indexOf.call(array, elem, i);
    };
    $.camelCase = camelize;
    $.trim = function(str) {
      return str == null ? "" : String.prototype.trim.call(str);
    };
    $.uuid = 0;
    $.support = {};
    $.expr = {};
    $.noop = function() {};
    $.map = function(elements, callback) {
      var value,
          values = [],
          i,
          key;
      if (likeArray(elements))
        for (i = 0; i < elements.length; i++) {
          value = callback(elements[i], i);
          if (value != null)
            values.push(value);
        }
      else
        for (key in elements) {
          value = callback(elements[key], key);
          if (value != null)
            values.push(value);
        }
      return flatten(values);
    };
    $.each = function(elements, callback) {
      var i,
          key;
      if (likeArray(elements)) {
        for (i = 0; i < elements.length; i++)
          if (callback.call(elements[i], i, elements[i]) === false)
            return elements;
      } else {
        for (key in elements)
          if (callback.call(elements[key], key, elements[key]) === false)
            return elements;
      }
      return elements;
    };
    $.grep = function(elements, callback) {
      return filter.call(elements, callback);
    };
    if (window.JSON)
      $.parseJSON = JSON.parse;
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });
    $.fn = {
      constructor: zepto.Z,
      length: 0,
      forEach: emptyArray.forEach,
      reduce: emptyArray.reduce,
      push: emptyArray.push,
      sort: emptyArray.sort,
      splice: emptyArray.splice,
      indexOf: emptyArray.indexOf,
      concat: function() {
        var i,
            value,
            args = [];
        for (i = 0; i < arguments.length; i++) {
          value = arguments[i];
          args[i] = zepto.isZ(value) ? value.toArray() : value;
        }
        return concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
      },
      map: function(fn) {
        return $($.map(this, function(el, i) {
          return fn.call(el, i, el);
        }));
      },
      slice: function() {
        return $(slice.apply(this, arguments));
      },
      ready: function(callback) {
        if (readyRE.test(document.readyState) && document.body)
          callback($);
        else
          document.addEventListener('DOMContentLoaded', function() {
            callback($);
          }, false);
        return this;
      },
      get: function(idx) {
        return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
      },
      toArray: function() {
        return this.get();
      },
      size: function() {
        return this.length;
      },
      remove: function() {
        return this.each(function() {
          if (this.parentNode != null)
            this.parentNode.removeChild(this);
        });
      },
      each: function(callback) {
        emptyArray.every.call(this, function(el, idx) {
          return callback.call(el, idx, el) !== false;
        });
        return this;
      },
      filter: function(selector) {
        if (isFunction(selector))
          return this.not(this.not(selector));
        return $(filter.call(this, function(element) {
          return zepto.matches(element, selector);
        }));
      },
      add: function(selector, context) {
        return $(uniq(this.concat($(selector, context))));
      },
      is: function(selector) {
        return this.length > 0 && zepto.matches(this[0], selector);
      },
      not: function(selector) {
        var nodes = [];
        if (isFunction(selector) && selector.call !== undefined)
          this.each(function(idx) {
            if (!selector.call(this, idx))
              nodes.push(this);
          });
        else {
          var excludes = typeof selector == 'string' ? this.filter(selector) : (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector);
          this.forEach(function(el) {
            if (excludes.indexOf(el) < 0)
              nodes.push(el);
          });
        }
        return $(nodes);
      },
      has: function(selector) {
        return this.filter(function() {
          return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
        });
      },
      eq: function(idx) {
        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
      },
      first: function() {
        var el = this[0];
        return el && !isObject(el) ? el : $(el);
      },
      last: function() {
        var el = this[this.length - 1];
        return el && !isObject(el) ? el : $(el);
      },
      find: function(selector) {
        var result,
            $this = this;
        if (!selector)
          result = $();
        else if (typeof selector == 'object')
          result = $(selector).filter(function() {
            var node = this;
            return emptyArray.some.call($this, function(parent) {
              return $.contains(parent, node);
            });
          });
        else if (this.length == 1)
          result = $(zepto.qsa(this[0], selector));
        else
          result = this.map(function() {
            return zepto.qsa(this, selector);
          });
        return result;
      },
      closest: function(selector, context) {
        var node = this[0],
            collection = false;
        if (typeof selector == 'object')
          collection = $(selector);
        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
          node = node !== context && !isDocument(node) && node.parentNode;
        return $(node);
      },
      parents: function(selector) {
        var ancestors = [],
            nodes = this;
        while (nodes.length > 0)
          nodes = $.map(nodes, function(node) {
            if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
              ancestors.push(node);
              return node;
            }
          });
        return filtered(ancestors, selector);
      },
      parent: function(selector) {
        return filtered(uniq(this.pluck('parentNode')), selector);
      },
      children: function(selector) {
        return filtered(this.map(function() {
          return children(this);
        }), selector);
      },
      contents: function() {
        return this.map(function() {
          return this.contentDocument || slice.call(this.childNodes);
        });
      },
      siblings: function(selector) {
        return filtered(this.map(function(i, el) {
          return filter.call(children(el.parentNode), function(child) {
            return child !== el;
          });
        }), selector);
      },
      empty: function() {
        return this.each(function() {
          this.innerHTML = '';
        });
      },
      pluck: function(property) {
        return $.map(this, function(el) {
          return el[property];
        });
      },
      show: function() {
        return this.each(function() {
          this.style.display == "none" && (this.style.display = '');
          if (getComputedStyle(this, '').getPropertyValue("display") == "none")
            this.style.display = defaultDisplay(this.nodeName);
        });
      },
      replaceWith: function(newContent) {
        return this.before(newContent).remove();
      },
      wrap: function(structure) {
        var func = isFunction(structure);
        if (this[0] && !func)
          var dom = $(structure).get(0),
              clone = dom.parentNode || this.length > 1;
        return this.each(function(index) {
          $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
        });
      },
      wrapAll: function(structure) {
        if (this[0]) {
          $(this[0]).before(structure = $(structure));
          var children;
          while ((children = structure.children()).length)
            structure = children.first();
          $(structure).append(this);
        }
        return this;
      },
      wrapInner: function(structure) {
        var func = isFunction(structure);
        return this.each(function(index) {
          var self = $(this),
              contents = self.contents(),
              dom = func ? structure.call(this, index) : structure;
          contents.length ? contents.wrapAll(dom) : self.append(dom);
        });
      },
      unwrap: function() {
        this.parent().each(function() {
          $(this).replaceWith($(this).children());
        });
        return this;
      },
      clone: function() {
        return this.map(function() {
          return this.cloneNode(true);
        });
      },
      hide: function() {
        return this.css("display", "none");
      },
      toggle: function(setting) {
        return this.each(function() {
          var el = $(this);
          ;
          (setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
        });
      },
      prev: function(selector) {
        return $(this.pluck('previousElementSibling')).filter(selector || '*');
      },
      next: function(selector) {
        return $(this.pluck('nextElementSibling')).filter(selector || '*');
      },
      html: function(html) {
        return 0 in arguments ? this.each(function(idx) {
          var originHtml = this.innerHTML;
          $(this).empty().append(funcArg(this, html, idx, originHtml));
        }) : (0 in this ? this[0].innerHTML : null);
      },
      text: function(text) {
        return 0 in arguments ? this.each(function(idx) {
          var newText = funcArg(this, text, idx, this.textContent);
          this.textContent = newText == null ? '' : '' + newText;
        }) : (0 in this ? this[0].textContent : null);
      },
      attr: function(name, value) {
        var result;
        return (typeof name == 'string' && !(1 in arguments)) ? (!this.length || this[0].nodeType !== 1 ? undefined : (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result) : this.each(function(idx) {
          if (this.nodeType !== 1)
            return;
          if (isObject(name))
            for (key in name)
              setAttribute(this, key, name[key]);
          else
            setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
        });
      },
      removeAttr: function(name) {
        return this.each(function() {
          this.nodeType === 1 && name.split(' ').forEach(function(attribute) {
            setAttribute(this, attribute);
          }, this);
        });
      },
      prop: function(name, value) {
        name = propMap[name] || name;
        return (1 in arguments) ? this.each(function(idx) {
          this[name] = funcArg(this, value, idx, this[name]);
        }) : (this[0] && this[0][name]);
      },
      data: function(name, value) {
        var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();
        var data = (1 in arguments) ? this.attr(attrName, value) : this.attr(attrName);
        return data !== null ? deserializeValue(data) : undefined;
      },
      val: function(value) {
        return 0 in arguments ? this.each(function(idx) {
          this.value = funcArg(this, value, idx, this.value);
        }) : (this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function() {
          return this.selected;
        }).pluck('value') : this[0].value));
      },
      offset: function(coordinates) {
        if (coordinates)
          return this.each(function(index) {
            var $this = $(this),
                coords = funcArg(this, coordinates, index, $this.offset()),
                parentOffset = $this.offsetParent().offset(),
                props = {
                  top: coords.top - parentOffset.top,
                  left: coords.left - parentOffset.left
                };
            if ($this.css('position') == 'static')
              props['position'] = 'relative';
            $this.css(props);
          });
        if (!this.length)
          return null;
        if (!$.contains(document.documentElement, this[0]))
          return {
            top: 0,
            left: 0
          };
        var obj = this[0].getBoundingClientRect();
        return {
          left: obj.left + window.pageXOffset,
          top: obj.top + window.pageYOffset,
          width: Math.round(obj.width),
          height: Math.round(obj.height)
        };
      },
      css: function(property, value) {
        if (arguments.length < 2) {
          var computedStyle,
              element = this[0];
          if (!element)
            return;
          computedStyle = getComputedStyle(element, '');
          if (typeof property == 'string')
            return element.style[camelize(property)] || computedStyle.getPropertyValue(property);
          else if (isArray(property)) {
            var props = {};
            $.each(property, function(_, prop) {
              props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop));
            });
            return props;
          }
        }
        var css = '';
        if (type(property) == 'string') {
          if (!value && value !== 0)
            this.each(function() {
              this.style.removeProperty(dasherize(property));
            });
          else
            css = dasherize(property) + ":" + maybeAddPx(property, value);
        } else {
          for (key in property)
            if (!property[key] && property[key] !== 0)
              this.each(function() {
                this.style.removeProperty(dasherize(key));
              });
            else
              css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
        }
        return this.each(function() {
          this.style.cssText += ';' + css;
        });
      },
      index: function(element) {
        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function(name) {
        if (!name)
          return false;
        return emptyArray.some.call(this, function(el) {
          return this.test(className(el));
        }, classRE(name));
      },
      addClass: function(name) {
        if (!name)
          return this;
        return this.each(function(idx) {
          if (!('className' in this))
            return;
          classList = [];
          var cls = className(this),
              newName = funcArg(this, name, idx, cls);
          newName.split(/\s+/g).forEach(function(klass) {
            if (!$(this).hasClass(klass))
              classList.push(klass);
          }, this);
          classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
        });
      },
      removeClass: function(name) {
        return this.each(function(idx) {
          if (!('className' in this))
            return;
          if (name === undefined)
            return className(this, '');
          classList = className(this);
          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass) {
            classList = classList.replace(classRE(klass), " ");
          });
          className(this, classList.trim());
        });
      },
      toggleClass: function(name, when) {
        if (!name)
          return this;
        return this.each(function(idx) {
          var $this = $(this),
              names = funcArg(this, name, idx, className(this));
          names.split(/\s+/g).forEach(function(klass) {
            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
          });
        });
      },
      scrollTop: function(value) {
        if (!this.length)
          return;
        var hasScrollTop = 'scrollTop' in this[0];
        if (value === undefined)
          return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
        return this.each(hasScrollTop ? function() {
          this.scrollTop = value;
        } : function() {
          this.scrollTo(this.scrollX, value);
        });
      },
      scrollLeft: function(value) {
        if (!this.length)
          return;
        var hasScrollLeft = 'scrollLeft' in this[0];
        if (value === undefined)
          return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
        return this.each(hasScrollLeft ? function() {
          this.scrollLeft = value;
        } : function() {
          this.scrollTo(value, this.scrollY);
        });
      },
      position: function() {
        if (!this.length)
          return;
        var elem = this[0],
            offsetParent = this.offsetParent(),
            offset = this.offset(),
            parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? {
              top: 0,
              left: 0
            } : offsetParent.offset();
        offset.top -= parseFloat($(elem).css('margin-top')) || 0;
        offset.left -= parseFloat($(elem).css('margin-left')) || 0;
        parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
        parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;
        return {
          top: offset.top - parentOffset.top,
          left: offset.left - parentOffset.left
        };
      },
      offsetParent: function() {
        return this.map(function() {
          var parent = this.offsetParent || document.body;
          while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
            parent = parent.offsetParent;
          return parent;
        });
      }
    };
    $.fn.detach = $.fn.remove;
    ;
    ['width', 'height'].forEach(function(dimension) {
      var dimensionProperty = dimension.replace(/./, function(m) {
        return m[0].toUpperCase();
      });
      $.fn[dimension] = function(value) {
        var offset,
            el = this[0];
        if (value === undefined)
          return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];
        else
          return this.each(function(idx) {
            el = $(this);
            el.css(dimension, funcArg(this, value, idx, el[dimension]()));
          });
      };
    });
    function traverseNode(node, fun) {
      fun(node);
      for (var i = 0,
          len = node.childNodes.length; i < len; i++)
        traverseNode(node.childNodes[i], fun);
    }
    adjacencyOperators.forEach(function(operator, operatorIndex) {
      var inside = operatorIndex % 2;
      $.fn[operator] = function() {
        var argType,
            nodes = $.map(arguments, function(arg) {
              argType = type(arg);
              return argType == "object" || argType == "array" || arg == null ? arg : zepto.fragment(arg);
            }),
            parent,
            copyByClone = this.length > 1;
        if (nodes.length < 1)
          return this;
        return this.each(function(_, target) {
          parent = inside ? target : target.parentNode;
          target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;
          var parentInDocument = $.contains(document.documentElement, parent);
          nodes.forEach(function(node) {
            if (copyByClone)
              node = node.cloneNode(true);
            else if (!parent)
              return $(node).remove();
            parent.insertBefore(node, target);
            if (parentInDocument)
              traverseNode(node, function(el) {
                if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src)
                  window['eval'].call(window, el.innerHTML);
              });
          });
        });
      };
      $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function(html) {
        $(html)[operator](this);
        return this;
      };
    });
    zepto.Z.prototype = Z.prototype = $.fn;
    zepto.uniq = uniq;
    zepto.deserializeValue = deserializeValue;
    $.zepto = zepto;
    return $;
  })();
  window.Zepto = Zepto;
  window.$ === undefined && (window.$ = Zepto);
  ;
  (function($) {
    var _zid = 1,
        undefined,
        slice = Array.prototype.slice,
        isFunction = $.isFunction,
        isString = function(obj) {
          return typeof obj == 'string';
        },
        handlers = {},
        specialEvents = {},
        focusinSupported = 'onfocusin' in window,
        focus = {
          focus: 'focusin',
          blur: 'focusout'
        },
        hover = {
          mouseenter: 'mouseover',
          mouseleave: 'mouseout'
        };
    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';
    function zid(element) {
      return element._zid || (element._zid = _zid++);
    }
    function findHandlers(element, event, fn, selector) {
      event = parse(event);
      if (event.ns)
        var matcher = matcherFor(event.ns);
      return (handlers[zid(element)] || []).filter(function(handler) {
        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
      });
    }
    function parse(event) {
      var parts = ('' + event).split('.');
      return {
        e: parts[0],
        ns: parts.slice(1).sort().join(' ')
      };
    }
    function matcherFor(ns) {
      return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
    }
    function eventCapture(handler, captureSetting) {
      return handler.del && (!focusinSupported && (handler.e in focus)) || !!captureSetting;
    }
    function realEvent(type) {
      return hover[type] || (focusinSupported && focus[type]) || type;
    }
    function add(element, events, fn, data, selector, delegator, capture) {
      var id = zid(element),
          set = (handlers[id] || (handlers[id] = []));
      events.split(/\s/).forEach(function(event) {
        if (event == 'ready')
          return $(document).ready(fn);
        var handler = parse(event);
        handler.fn = fn;
        handler.sel = selector;
        if (handler.e in hover)
          fn = function(e) {
            var related = e.relatedTarget;
            if (!related || (related !== this && !$.contains(this, related)))
              return handler.fn.apply(this, arguments);
          };
        handler.del = delegator;
        var callback = delegator || fn;
        handler.proxy = function(e) {
          e = compatible(e);
          if (e.isImmediatePropagationStopped())
            return;
          e.data = data;
          var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
          if (result === false)
            e.preventDefault(), e.stopPropagation();
          return result;
        };
        handler.i = set.length;
        set.push(handler);
        if ('addEventListener' in element)
          element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
      });
    }
    function remove(element, events, fn, selector, capture) {
      var id = zid(element);
      ;
      (events || '').split(/\s/).forEach(function(event) {
        findHandlers(element, event, fn, selector).forEach(function(handler) {
          delete handlers[id][handler.i];
          if ('removeEventListener' in element)
            element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
        });
      });
    }
    $.event = {
      add: add,
      remove: remove
    };
    $.proxy = function(fn, context) {
      var args = (2 in arguments) && slice.call(arguments, 2);
      if (isFunction(fn)) {
        var proxyFn = function() {
          return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
        };
        proxyFn._zid = zid(fn);
        return proxyFn;
      } else if (isString(context)) {
        if (args) {
          args.unshift(fn[context], fn);
          return $.proxy.apply(null, args);
        } else {
          return $.proxy(fn[context], fn);
        }
      } else {
        throw new TypeError("expected function");
      }
    };
    $.fn.bind = function(event, data, callback) {
      return this.on(event, data, callback);
    };
    $.fn.unbind = function(event, callback) {
      return this.off(event, callback);
    };
    $.fn.one = function(event, selector, data, callback) {
      return this.on(event, selector, data, callback, 1);
    };
    var returnTrue = function() {
      return true;
    },
        returnFalse = function() {
          return false;
        },
        ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
        eventMethods = {
          preventDefault: 'isDefaultPrevented',
          stopImmediatePropagation: 'isImmediatePropagationStopped',
          stopPropagation: 'isPropagationStopped'
        };
    function compatible(event, source) {
      if (source || !event.isDefaultPrevented) {
        source || (source = event);
        $.each(eventMethods, function(name, predicate) {
          var sourceMethod = source[name];
          event[name] = function() {
            this[predicate] = returnTrue;
            return sourceMethod && sourceMethod.apply(source, arguments);
          };
          event[predicate] = returnFalse;
        });
        if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault())
          event.isDefaultPrevented = returnTrue;
      }
      return event;
    }
    function createProxy(event) {
      var key,
          proxy = {originalEvent: event};
      for (key in event)
        if (!ignoreProperties.test(key) && event[key] !== undefined)
          proxy[key] = event[key];
      return compatible(proxy, event);
    }
    $.fn.delegate = function(selector, event, callback) {
      return this.on(event, selector, callback);
    };
    $.fn.undelegate = function(selector, event, callback) {
      return this.off(event, selector, callback);
    };
    $.fn.live = function(event, callback) {
      $(document.body).delegate(this.selector, event, callback);
      return this;
    };
    $.fn.die = function(event, callback) {
      $(document.body).undelegate(this.selector, event, callback);
      return this;
    };
    $.fn.on = function(event, selector, data, callback, one) {
      var autoRemove,
          delegator,
          $this = this;
      if (event && !isString(event)) {
        $.each(event, function(type, fn) {
          $this.on(type, selector, data, fn, one);
        });
        return $this;
      }
      if (!isString(selector) && !isFunction(callback) && callback !== false)
        callback = data, data = selector, selector = undefined;
      if (callback === undefined || data === false)
        callback = data, data = undefined;
      if (callback === false)
        callback = returnFalse;
      return $this.each(function(_, element) {
        if (one)
          autoRemove = function(e) {
            remove(element, e.type, callback);
            return callback.apply(this, arguments);
          };
        if (selector)
          delegator = function(e) {
            var evt,
                match = $(e.target).closest(selector, element).get(0);
            if (match && match !== element) {
              evt = $.extend(createProxy(e), {
                currentTarget: match,
                liveFired: element
              });
              return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
            }
          };
        add(element, event, callback, data, selector, delegator || autoRemove);
      });
    };
    $.fn.off = function(event, selector, callback) {
      var $this = this;
      if (event && !isString(event)) {
        $.each(event, function(type, fn) {
          $this.off(type, selector, fn);
        });
        return $this;
      }
      if (!isString(selector) && !isFunction(callback) && callback !== false)
        callback = selector, selector = undefined;
      if (callback === false)
        callback = returnFalse;
      return $this.each(function() {
        remove(this, event, callback, selector);
      });
    };
    $.fn.trigger = function(event, args) {
      event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event);
      event._args = args;
      return this.each(function() {
        if (event.type in focus && typeof this[event.type] == "function")
          this[event.type]();
        else if ('dispatchEvent' in this)
          this.dispatchEvent(event);
        else
          $(this).triggerHandler(event, args);
      });
    };
    $.fn.triggerHandler = function(event, args) {
      var e,
          result;
      this.each(function(i, element) {
        e = createProxy(isString(event) ? $.Event(event) : event);
        e._args = args;
        e.target = element;
        $.each(findHandlers(element, event.type || event), function(i, handler) {
          result = handler.proxy(e);
          if (e.isImmediatePropagationStopped())
            return false;
        });
      });
      return result;
    };
    ;
    ('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function(event) {
      $.fn[event] = function(callback) {
        return (0 in arguments) ? this.bind(event, callback) : this.trigger(event);
      };
    });
    $.Event = function(type, props) {
      if (!isString(type))
        props = type, type = props.type;
      var event = document.createEvent(specialEvents[type] || 'Events'),
          bubbles = true;
      if (props)
        for (var name in props)
          (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name]);
      event.initEvent(type, bubbles, true);
      return compatible(event);
    };
  })(Zepto);
  ;
  (function($) {
    var jsonpID = 0,
        document = window.document,
        key,
        name,
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        scriptTypeRE = /^(?:text|application)\/javascript/i,
        xmlTypeRE = /^(?:text|application)\/xml/i,
        jsonType = 'application/json',
        htmlType = 'text/html',
        blankRE = /^\s*$/,
        originAnchor = document.createElement('a');
    originAnchor.href = window.location.href;
    function triggerAndReturn(context, eventName, data) {
      var event = $.Event(eventName);
      $(context).trigger(event, data);
      return !event.isDefaultPrevented();
    }
    function triggerGlobal(settings, context, eventName, data) {
      if (settings.global)
        return triggerAndReturn(context || document, eventName, data);
    }
    $.active = 0;
    function ajaxStart(settings) {
      if (settings.global && $.active++ === 0)
        triggerGlobal(settings, null, 'ajaxStart');
    }
    function ajaxStop(settings) {
      if (settings.global && !(--$.active))
        triggerGlobal(settings, null, 'ajaxStop');
    }
    function ajaxBeforeSend(xhr, settings) {
      var context = settings.context;
      if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
        return false;
      triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
    }
    function ajaxSuccess(data, xhr, settings, deferred) {
      var context = settings.context,
          status = 'success';
      settings.success.call(context, data, status, xhr);
      if (deferred)
        deferred.resolveWith(context, [data, status, xhr]);
      triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
      ajaxComplete(status, xhr, settings);
    }
    function ajaxError(error, type, xhr, settings, deferred) {
      var context = settings.context;
      settings.error.call(context, xhr, type, error);
      if (deferred)
        deferred.rejectWith(context, [xhr, type, error]);
      triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
      ajaxComplete(type, xhr, settings);
    }
    function ajaxComplete(status, xhr, settings) {
      var context = settings.context;
      settings.complete.call(context, xhr, status);
      triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
      ajaxStop(settings);
    }
    function empty() {}
    $.ajaxJSONP = function(options, deferred) {
      if (!('type' in options))
        return $.ajax(options);
      var _callbackName = options.jsonpCallback,
          callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
          script = document.createElement('script'),
          originalCallback = window[callbackName],
          responseData,
          abort = function(errorType) {
            $(script).triggerHandler('error', errorType || 'abort');
          },
          xhr = {abort: abort},
          abortTimeout;
      if (deferred)
        deferred.promise(xhr);
      $(script).on('load error', function(e, errorType) {
        clearTimeout(abortTimeout);
        $(script).off().remove();
        if (e.type == 'error' || !responseData) {
          ajaxError(null, errorType || 'error', xhr, options, deferred);
        } else {
          ajaxSuccess(responseData[0], xhr, options, deferred);
        }
        window[callbackName] = originalCallback;
        if (responseData && $.isFunction(originalCallback))
          originalCallback(responseData[0]);
        originalCallback = responseData = undefined;
      });
      if (ajaxBeforeSend(xhr, options) === false) {
        abort('abort');
        return xhr;
      }
      window[callbackName] = function() {
        responseData = arguments;
      };
      script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
      document.head.appendChild(script);
      if (options.timeout > 0)
        abortTimeout = setTimeout(function() {
          abort('timeout');
        }, options.timeout);
      return xhr;
    };
    $.ajaxSettings = {
      type: 'GET',
      beforeSend: empty,
      success: empty,
      error: empty,
      complete: empty,
      context: null,
      global: true,
      xhr: function() {
        return new window.XMLHttpRequest();
      },
      accepts: {
        script: 'text/javascript, application/javascript, application/x-javascript',
        json: jsonType,
        xml: 'application/xml, text/xml',
        html: htmlType,
        text: 'text/plain'
      },
      crossDomain: false,
      timeout: 0,
      processData: true,
      cache: true
    };
    function mimeToDataType(mime) {
      if (mime)
        mime = mime.split(';', 2)[0];
      return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
    }
    function appendQuery(url, query) {
      if (query == '')
        return url;
      return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    }
    function serializeData(options) {
      if (options.processData && options.data && $.type(options.data) != "string")
        options.data = $.param(options.data, options.traditional);
      if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
        options.url = appendQuery(options.url, options.data), options.data = undefined;
    }
    $.ajax = function(options) {
      var settings = $.extend({}, options || {}),
          deferred = $.Deferred && $.Deferred(),
          urlAnchor,
          hashIndex;
      for (key in $.ajaxSettings)
        if (settings[key] === undefined)
          settings[key] = $.ajaxSettings[key];
      ajaxStart(settings);
      if (!settings.crossDomain) {
        urlAnchor = document.createElement('a');
        urlAnchor.href = settings.url;
        urlAnchor.href = urlAnchor.href;
        settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host);
      }
      if (!settings.url)
        settings.url = window.location.toString();
      if ((hashIndex = settings.url.indexOf('#')) > -1)
        settings.url = settings.url.slice(0, hashIndex);
      serializeData(settings);
      var dataType = settings.dataType,
          hasPlaceholder = /\?.+=\?/.test(settings.url);
      if (hasPlaceholder)
        dataType = 'jsonp';
      if (settings.cache === false || ((!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)))
        settings.url = appendQuery(settings.url, '_=' + Date.now());
      if ('jsonp' == dataType) {
        if (!hasPlaceholder)
          settings.url = appendQuery(settings.url, settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?');
        return $.ajaxJSONP(settings, deferred);
      }
      var mime = settings.accepts[dataType],
          headers = {},
          setHeader = function(name, value) {
            headers[name.toLowerCase()] = [name, value];
          },
          protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
          xhr = settings.xhr(),
          nativeSetHeader = xhr.setRequestHeader,
          abortTimeout;
      if (deferred)
        deferred.promise(xhr);
      if (!settings.crossDomain)
        setHeader('X-Requested-With', 'XMLHttpRequest');
      setHeader('Accept', mime || '*/*');
      if (mime = settings.mimeType || mime) {
        if (mime.indexOf(',') > -1)
          mime = mime.split(',', 2)[0];
        xhr.overrideMimeType && xhr.overrideMimeType(mime);
      }
      if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
        setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');
      if (settings.headers)
        for (name in settings.headers)
          setHeader(name, settings.headers[name]);
      xhr.setRequestHeader = setHeader;
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = empty;
          clearTimeout(abortTimeout);
          var result,
              error = false;
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
            dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
            result = xhr.responseText;
            try {
              if (dataType == 'script')
                (1, eval)(result);
              else if (dataType == 'xml')
                result = xhr.responseXML;
              else if (dataType == 'json')
                result = blankRE.test(result) ? null : $.parseJSON(result);
            } catch (e) {
              error = e;
            }
            if (error)
              ajaxError(error, 'parsererror', xhr, settings, deferred);
            else
              ajaxSuccess(result, xhr, settings, deferred);
          } else {
            ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
          }
        }
      };
      if (ajaxBeforeSend(xhr, settings) === false) {
        xhr.abort();
        ajaxError(null, 'abort', xhr, settings, deferred);
        return xhr;
      }
      if (settings.xhrFields)
        for (name in settings.xhrFields)
          xhr[name] = settings.xhrFields[name];
      var async = 'async' in settings ? settings.async : true;
      xhr.open(settings.type, settings.url, async, settings.username, settings.password);
      for (name in headers)
        nativeSetHeader.apply(xhr, headers[name]);
      if (settings.timeout > 0)
        abortTimeout = setTimeout(function() {
          xhr.onreadystatechange = empty;
          xhr.abort();
          ajaxError(null, 'timeout', xhr, settings, deferred);
        }, settings.timeout);
      xhr.send(settings.data ? settings.data : null);
      return xhr;
    };
    function parseArguments(url, data, success, dataType) {
      if ($.isFunction(data))
        dataType = success, success = data, data = undefined;
      if (!$.isFunction(success))
        dataType = success, success = undefined;
      return {
        url: url,
        data: data,
        success: success,
        dataType: dataType
      };
    }
    $.get = function() {
      return $.ajax(parseArguments.apply(null, arguments));
    };
    $.post = function() {
      var options = parseArguments.apply(null, arguments);
      options.type = 'POST';
      return $.ajax(options);
    };
    $.getJSON = function() {
      var options = parseArguments.apply(null, arguments);
      options.dataType = 'json';
      return $.ajax(options);
    };
    $.fn.load = function(url, data, success) {
      if (!this.length)
        return this;
      var self = this,
          parts = url.split(/\s/),
          selector,
          options = parseArguments(url, data, success),
          callback = options.success;
      if (parts.length > 1)
        options.url = parts[0], selector = parts[1];
      options.success = function(response) {
        self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
        callback && callback.apply(self, arguments);
      };
      $.ajax(options);
      return this;
    };
    var escape = encodeURIComponent;
    function serialize(params, obj, traditional, scope) {
      var type,
          array = $.isArray(obj),
          hash = $.isPlainObject(obj);
      $.each(obj, function(key, value) {
        type = $.type(value);
        if (scope)
          key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
        if (!scope && array)
          params.add(value.name, value.value);
        else if (type == "array" || (!traditional && type == "object"))
          serialize(params, value, traditional, key);
        else
          params.add(key, value);
      });
    }
    $.param = function(obj, traditional) {
      var params = [];
      params.add = function(key, value) {
        if ($.isFunction(value))
          value = value();
        if (value == null)
          value = "";
        this.push(escape(key) + '=' + escape(value));
      };
      serialize(params, obj, traditional);
      return params.join('&').replace(/%20/g, '+');
    };
  })(Zepto);
  ;
  (function($) {
    $.fn.serializeArray = function() {
      var name,
          type,
          result = [],
          add = function(value) {
            if (value.forEach)
              return value.forEach(add);
            result.push({
              name: name,
              value: value
            });
          };
      if (this[0])
        $.each(this[0].elements, function(_, field) {
          type = field.type, name = field.name;
          if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && ((type != 'radio' && type != 'checkbox') || field.checked))
            add($(field).val());
        });
      return result;
    };
    $.fn.serialize = function() {
      var result = [];
      this.serializeArray().forEach(function(elm) {
        result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
      });
      return result.join('&');
    };
    $.fn.submit = function(callback) {
      if (0 in arguments)
        this.bind('submit', callback);
      else if (this.length) {
        var event = $.Event('submit');
        this.eq(0).trigger(event);
        if (!event.isDefaultPrevented())
          this.get(0).submit();
      }
      return this;
    };
  })(Zepto);
  ;
  (function() {
    try {
      getComputedStyle(undefined);
    } catch (e) {
      var nativeGetComputedStyle = getComputedStyle;
      window.getComputedStyle = function(element) {
        try {
          return nativeGetComputedStyle(element);
        } catch (e) {
          return null;
        }
      };
    }
  })();
  ;
  (function($) {
    var data = {},
        dataAttr = $.fn.data,
        camelize = $.camelCase,
        exp = $.expando = 'Zepto' + (+new Date()),
        emptyArray = [];
    function getData(node, name) {
      var id = node[exp],
          store = id && data[id];
      if (name === undefined)
        return store || setData(node);
      else {
        if (store) {
          if (name in store)
            return store[name];
          var camelName = camelize(name);
          if (camelName in store)
            return store[camelName];
        }
        return dataAttr.call($(node), name);
      }
    }
    function setData(node, name, value) {
      var id = node[exp] || (node[exp] = ++$.uuid),
          store = data[id] || (data[id] = attributeData(node));
      if (name !== undefined)
        store[camelize(name)] = value;
      return store;
    }
    function attributeData(node) {
      var store = {};
      $.each(node.attributes || emptyArray, function(i, attr) {
        if (attr.name.indexOf('data-') == 0)
          store[camelize(attr.name.replace('data-', ''))] = $.zepto.deserializeValue(attr.value);
      });
      return store;
    }
    $.fn.data = function(name, value) {
      return value === undefined ? $.isPlainObject(name) ? this.each(function(i, node) {
        $.each(name, function(key, value) {
          setData(node, key, value);
        });
      }) : (0 in this ? getData(this[0], name) : undefined) : this.each(function() {
        setData(this, name, value);
      });
    };
    $.fn.removeData = function(names) {
      if (typeof names == 'string')
        names = names.split(/\s+/);
      return this.each(function() {
        var id = this[exp],
            store = id && data[id];
        if (store)
          $.each(names || store, function(key) {
            delete store[names ? camelize(this) : key];
          });
      });
    };
    ;
    ['remove', 'empty'].forEach(function(methodName) {
      var origFn = $.fn[methodName];
      $.fn[methodName] = function() {
        var elements = this.find('*');
        if (methodName === 'remove')
          elements = elements.add(this);
        elements.removeData();
        return origFn.call(this);
      };
    });
  })(Zepto);
  ;
  (function($, undefined) {
    var document = window.document,
        docElem = document.documentElement,
        origShow = $.fn.show,
        origHide = $.fn.hide,
        origToggle = $.fn.toggle;
    function anim(el, speed, opacity, scale, callback) {
      if (typeof speed == 'function' && !callback)
        callback = speed, speed = undefined;
      var props = {opacity: opacity};
      if (scale) {
        props.scale = scale;
        el.css($.fx.cssPrefix + 'transform-origin', '0 0');
      }
      return el.animate(props, speed, null, callback);
    }
    function hide(el, speed, scale, callback) {
      return anim(el, speed, 0, scale, function() {
        origHide.call($(this));
        callback && callback.call(this);
      });
    }
    $.fn.show = function(speed, callback) {
      origShow.call(this);
      if (speed === undefined)
        speed = 0;
      else
        this.css('opacity', 0);
      return anim(this, speed, 1, '1,1', callback);
    };
    $.fn.hide = function(speed, callback) {
      if (speed === undefined)
        return origHide.call(this);
      else
        return hide(this, speed, '0,0', callback);
    };
    $.fn.toggle = function(speed, callback) {
      if (speed === undefined || typeof speed == 'boolean')
        return origToggle.call(this, speed);
      else
        return this.each(function() {
          var el = $(this);
          el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback);
        });
    };
    $.fn.fadeTo = function(speed, opacity, callback) {
      return anim(this, speed, opacity, null, callback);
    };
    $.fn.fadeIn = function(speed, callback) {
      var target = this.css('opacity');
      if (target > 0)
        this.css('opacity', 0);
      else
        target = 1;
      return origShow.call(this).fadeTo(speed, target, callback);
    };
    $.fn.fadeOut = function(speed, callback) {
      return hide(this, speed, null, callback);
    };
    $.fn.fadeToggle = function(speed, callback) {
      return this.each(function() {
        var el = $(this);
        el[(el.css('opacity') == 0 || el.css('display') == 'none') ? 'fadeIn' : 'fadeOut'](speed, callback);
      });
    };
  })(Zepto);
  ;
  (function($, undefined) {
    var prefix = '',
        eventPrefix,
        vendors = {
          Webkit: 'webkit',
          Moz: '',
          O: 'o'
        },
        testEl = document.createElement('div'),
        supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        transform,
        transitionProperty,
        transitionDuration,
        transitionTiming,
        transitionDelay,
        animationName,
        animationDuration,
        animationTiming,
        animationDelay,
        cssReset = {};
    function dasherize(str) {
      return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
    }
    function normalizeEvent(name) {
      return eventPrefix ? eventPrefix + name : name.toLowerCase();
    }
    $.each(vendors, function(vendor, event) {
      if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
        prefix = '-' + vendor.toLowerCase() + '-';
        eventPrefix = event;
        return false;
      }
    });
    transform = prefix + 'transform';
    cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionDelay = prefix + 'transition-delay'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationDelay = prefix + 'animation-delay'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = '';
    $.fx = {
      off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
      speeds: {
        _default: 400,
        fast: 200,
        slow: 600
      },
      cssPrefix: prefix,
      transitionEnd: normalizeEvent('TransitionEnd'),
      animationEnd: normalizeEvent('AnimationEnd')
    };
    $.fn.animate = function(properties, duration, ease, callback, delay) {
      if ($.isFunction(duration))
        callback = duration, ease = undefined, duration = undefined;
      if ($.isFunction(ease))
        callback = ease, ease = undefined;
      if ($.isPlainObject(duration))
        ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration;
      if (duration)
        duration = (typeof duration == 'number' ? duration : ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000;
      if (delay)
        delay = parseFloat(delay) / 1000;
      return this.anim(properties, duration, ease, callback, delay);
    };
    $.fn.anim = function(properties, duration, ease, callback, delay) {
      var key,
          cssValues = {},
          cssProperties,
          transforms = '',
          that = this,
          wrappedCallback,
          endEvent = $.fx.transitionEnd,
          fired = false;
      if (duration === undefined)
        duration = $.fx.speeds._default / 1000;
      if (delay === undefined)
        delay = 0;
      if ($.fx.off)
        duration = 0;
      if (typeof properties == 'string') {
        cssValues[animationName] = properties;
        cssValues[animationDuration] = duration + 's';
        cssValues[animationDelay] = delay + 's';
        cssValues[animationTiming] = (ease || 'linear');
        endEvent = $.fx.animationEnd;
      } else {
        cssProperties = [];
        for (key in properties)
          if (supportedTransforms.test(key))
            transforms += key + '(' + properties[key] + ') ';
          else
            cssValues[key] = properties[key], cssProperties.push(dasherize(key));
        if (transforms)
          cssValues[transform] = transforms, cssProperties.push(transform);
        if (duration > 0 && typeof properties === 'object') {
          cssValues[transitionProperty] = cssProperties.join(', ');
          cssValues[transitionDuration] = duration + 's';
          cssValues[transitionDelay] = delay + 's';
          cssValues[transitionTiming] = (ease || 'linear');
        }
      }
      wrappedCallback = function(event) {
        if (typeof event !== 'undefined') {
          if (event.target !== event.currentTarget)
            return;
          $(event.target).unbind(endEvent, wrappedCallback);
        } else
          $(this).unbind(endEvent, wrappedCallback);
        fired = true;
        $(this).css(cssReset);
        callback && callback.call(this);
      };
      if (duration > 0) {
        this.bind(endEvent, wrappedCallback);
        setTimeout(function() {
          if (fired)
            return;
          wrappedCallback.call(that);
        }, ((duration + delay) * 1000) + 25);
      }
      this.size() && this.get(0).clientLeft;
      this.css(cssValues);
      if (duration <= 0)
        setTimeout(function() {
          that.each(function() {
            wrappedCallback.call(this);
          });
        }, 0);
      return this;
    };
    testEl = null;
  })(Zepto);
  ;
  (function($) {
    var touch = {},
        touchTimeout,
        tapTimeout,
        swipeTimeout,
        longTapTimeout,
        longTapDelay = 750,
        gesture;
    function swipeDirection(x1, x2, y1, y2) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
    }
    function longTap() {
      longTapTimeout = null;
      if (touch.last) {
        touch.el.trigger('longTap');
        touch = {};
      }
    }
    function cancelLongTap() {
      if (longTapTimeout)
        clearTimeout(longTapTimeout);
      longTapTimeout = null;
    }
    function cancelAll() {
      if (touchTimeout)
        clearTimeout(touchTimeout);
      if (tapTimeout)
        clearTimeout(tapTimeout);
      if (swipeTimeout)
        clearTimeout(swipeTimeout);
      if (longTapTimeout)
        clearTimeout(longTapTimeout);
      touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
      touch = {};
    }
    function isPrimaryTouch(event) {
      return (event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
    }
    function isPointerEventType(e, type) {
      return (e.type == 'pointer' + type || e.type.toLowerCase() == 'mspointer' + type);
    }
    $(document).ready(function() {
      var now,
          delta,
          deltaX = 0,
          deltaY = 0,
          firstTouch,
          _isPointerType;
      if ('MSGesture' in window) {
        gesture = new MSGesture();
        gesture.target = document.body;
      }
      $(document).bind('MSGestureEnd', function(e) {
        var swipeDirectionFromVelocity = e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe');
          touch.el.trigger('swipe' + swipeDirectionFromVelocity);
        }
      }).on('touchstart MSPointerDown pointerdown', function(e) {
        if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e))
          return;
        firstTouch = _isPointerType ? e : e.touches[0];
        if (e.touches && e.touches.length === 1 && touch.x2) {
          touch.x2 = undefined;
          touch.y2 = undefined;
        }
        now = Date.now();
        delta = now - (touch.last || now);
        touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
        touchTimeout && clearTimeout(touchTimeout);
        touch.x1 = firstTouch.pageX;
        touch.y1 = firstTouch.pageY;
        if (delta > 0 && delta <= 250)
          touch.isDoubleTap = true;
        touch.last = now;
        longTapTimeout = setTimeout(longTap, longTapDelay);
        if (gesture && _isPointerType)
          gesture.addPointer(e.pointerId);
      }).on('touchmove MSPointerMove pointermove', function(e) {
        if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e))
          return;
        firstTouch = _isPointerType ? e : e.touches[0];
        cancelLongTap();
        touch.x2 = firstTouch.pageX;
        touch.y2 = firstTouch.pageY;
        deltaX += Math.abs(touch.x1 - touch.x2);
        deltaY += Math.abs(touch.y1 - touch.y2);
      }).on('touchend MSPointerUp pointerup', function(e) {
        if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e))
          return;
        cancelLongTap();
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))
          swipeTimeout = setTimeout(function() {
            touch.el.trigger('swipe');
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
            touch = {};
          }, 0);
        else if ('last' in touch)
          if (deltaX < 30 && deltaY < 30) {
            tapTimeout = setTimeout(function() {
              var event = $.Event('tap');
              event.cancelTouch = cancelAll;
              touch.el.trigger(event);
              if (touch.isDoubleTap) {
                if (touch.el)
                  touch.el.trigger('doubleTap');
                touch = {};
              } else {
                touchTimeout = setTimeout(function() {
                  touchTimeout = null;
                  if (touch.el)
                    touch.el.trigger('singleTap');
                  touch = {};
                }, 250);
              }
            }, 0);
          } else {
            touch = {};
          }
        deltaX = deltaY = 0;
      }).on('touchcancel MSPointerCancel pointercancel', cancelAll);
      $(window).on('scroll', cancelAll);
    });
    ;
    ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName) {
      $.fn[eventName] = function(callback) {
        return this.on(eventName, callback);
      };
    });
  })(Zepto);
  ;
  (function($) {
    var ioDim = function(dimension, includeBorder) {
      return function(includeMargin) {
        var sides,
            size,
            elem;
        if (this) {
          elem = this;
          size = elem[dimension]();
          sides = {
            width: ["left", "right"],
            height: ["top", "bottom"]
          };
          sides[dimension].forEach(function(side) {
            size += parseInt(elem.css("padding-" + side), 10);
            if (includeBorder) {
              size += parseInt(elem.css("border-" + side + "-width"), 10);
            }
            if (includeMargin) {
              size += parseInt(elem.css("margin-" + side), 10);
            }
          });
          return size;
        } else {
          return null;
        }
      };
    };
    ["width", "height"].forEach(function(dimension) {
      var Dimension = dimension.substr(0, 1).toUpperCase() + dimension.substr(1);
      $.fn["inner" + Dimension] = ioDim(dimension, false);
      $.fn["outer" + Dimension] = ioDim(dimension, true);
    });
  })(Zepto);
  return Zepto;
}));

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("3d", ["3f"], function(main) {
  return main;
});

_removeDefine();
})();
$__System.register('40', ['10', '41', 'd', '3d'], function (_export) {
  var _, BackboneProxy, _classCallCheck, $, Backbone;

  return {
    setters: [function (_2) {
      _ = _2['default'];
    }, function (_3) {
      BackboneProxy = _3['default'];
    }, function (_d) {
      _classCallCheck = _d['default'];
    }, function (_d2) {
      $ = _d2['default'];
    }],
    execute: function () {

      /**
       * Backbone.js
       *
       * (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       * Backbone may be freely distributed under the MIT license.
       *
       * For all details and documentation:
       * http://backbonejs.org
       *
       * ---------
       *
       * Backbone-ES6
       * https://github.com/typhonjs/backbone-es6
       * (c) 2015 Michael Leahy
       * Backbone-ES6 may be freely distributed under the MIT license.
       *
       * This fork of Backbone converts it to ES6 and provides extension through constructor injection for easy modification.
       * The only major difference from Backbone is that Backbone itself is not a global Events instance anymore. Please
       * see @link{Events.js} for documentation on easily setting up an ES6 event module for global usage.
       *
       * @see http://backbonejs.org
       * @see https://github.com/typhonjs/backbone-es6
       * @author Michael Leahy
       * @version 1.2.3
       * @copyright Michael Leahy 2015
       */
      'use strict';

      Backbone =
      /**
       * Initializes Backbone by constructor injection. You may provide variations on any component below by passing
       * in a different version. The "runtime" initializing Backbone is responsible for further modification like
       * supporting the older "extend" support. See backbone-es6/src/ModuleRuntime.js and backbone-es6/src/extend.js
       * for an example on composing Backbone for usage.
       *
       * @param {Collection}  Collection  - A class defining Backbone.Collection.
       * @param {Events}      Events      - A class defining Backbone.Events.
       * @param {History}     History     - A class defining Backbone.History.
       * @param {Model}       Model       - A class defining Backbone.Model.
       * @param {Router}      Router      - A class defining Backbone.Router.
       * @param {View}        View        - A class defining Backbone.View.
       * @param {function}    sync        - A function defining synchronization for Collection & Model.
       * @param {object}      options     - Options to mixin to Backbone.
       * @constructor
       */
      function Backbone(Collection, Events, History, Model, Router, View, sync) {
        var _this = this,
            _arguments = arguments;

        var options = arguments.length <= 7 || arguments[7] === undefined ? {} : arguments[7];

        _classCallCheck(this, Backbone);

        /**
         * Establish the root object, `window` (`self`) in the browser, or `global` on the server.
         * We use `self` instead of `window` for `WebWorker` support.
         *
         * @type {object|global}
         */
        var root = typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global;

        /**
         * jQuery or equivalent
         * @type {*}
         */
        this.$ = $ || root.jQuery || root.Zepto || root.ender || root.$;

        if (typeof this.$ === 'undefined') {
          throw new Error("Backbone - ctor - could not locate global '$' (jQuery or equivalent).");
        }

        /**
         * Initial setup. Mixin options and set the BackboneProxy instance to this.
         */
        if (_.isObject(options)) {
          _.extend(this, options);
        }

        BackboneProxy.backbone = this;

        /**
         * A public reference of the Collection class.
         * @class
         */
        this.Collection = Collection;

        /**
         * A public reference of the Events class.
         * @class
         */
        this.Events = Events;

        /**
         * A public reference of the History class.
         * @class
         */
        this.History = History;

        /**
         * A public reference of the Model class.
         * @class
         */
        this.Model = Model;

        /**
         * A public reference of the Router class.
         * @class
         */
        this.Router = Router;

        /**
         * A public reference of the View class.
         * @class
         */
        this.View = View;

        /**
         * A public instance of History.
         * @instance
         */
        this.history = new History();

        /**
         * A public instance of the sync function.
         * @instance
         */
        this.sync = sync;

        /**
         * Set the default implementation of `Backbone.ajax` to proxy through to `$`.
         * Override this if you'd like to use a different library.
         *
         * @returns {XMLHttpRequest}   XMLHttpRequest
         */
        this.ajax = function () {
          var _$;

          return (_$ = _this.$).ajax.apply(_$, _arguments);
        };
      };

      _export('default', Backbone);
    }
  };
});

$__System.register('42', ['10', '41', '43', '44', '45', '46', 'a', 'b', 'c', 'd'], function (_export) {
   var _, BackboneProxy, Model, Utils, Debug, Events, _get, _inherits, _createClass, _classCallCheck, s_ADD_OPTIONS, s_SET_OPTIONS, s_ADD_REFERENCE, s_ON_MODEL_EVENT, s_REMOVE_MODELS, s_REMOVE_REFERENCE, s_SPLICE, Collection, collectionMethods;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_3) {
         BackboneProxy = _3['default'];
      }, function (_5) {
         Model = _5['default'];
      }, function (_6) {
         Utils = _6['default'];
      }, function (_7) {
         Debug = _7['default'];
      }, function (_4) {
         Events = _4['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         // Private / internal methods ---------------------------------------------------------------------------------------

         /**
          * Default options for `Collection#add`.
          * @type {{add: boolean, remove: boolean}}
          */
         'use strict';

         s_ADD_OPTIONS = { add: true, remove: false };

         /**
          * Default options for `Collection#set`.
          * @type {{add: boolean, remove: boolean}}
          */
         s_SET_OPTIONS = { add: true, remove: true, merge: true };

         /**
          * Internal method to create a model's ties to a collection.
          *
          * @param {Collection}  collection  - A collection instance
          * @param {Model}       model       - A model instance
          */

         s_ADD_REFERENCE = function s_ADD_REFERENCE(collection, model) {
            collection._byId[model.cid] = model;
            var id = collection.modelId(model.attributes);

            Debug.log('Collection - s_ADD_REFERENCE - id: ' + id + '; model.cid: ' + model.cid, true);

            if (!Utils.isNullOrUndef(id)) {
               collection._byId[id] = model;
            }
            model.on('all', s_ON_MODEL_EVENT, collection);
         };

         /**
          * Internal method called every time a model in the set fires an event. Sets need to update their indexes when models
          * change ids. All other events simply proxy through. "add" and "remove" events that originate in other collections
          * are ignored.
          *
          * Note: Because this is the callback added to the model via Events the "this" context is associated with the model.
          *
          * @param {string}      event       - Event name
          * @param {Model}       model       - A model instance
          * @param {Collection}  collection  - A collection instance
          * @param {object}      options     - Optional parameters
          */

         s_ON_MODEL_EVENT = function s_ON_MODEL_EVENT(event, model, collection, options) {
            Debug.log('Collection - s_ON_MODEL_EVENT - 0 - event: ' + event, true);

            if ((event === 'add' || event === 'remove') && collection !== this) {
               return;
            }
            if (event === 'destroy') {
               this.remove(model, options);
            }
            if (event === 'change') {
               var prevId = this.modelId(model.previousAttributes());
               var id = this.modelId(model.attributes);

               Debug.log('Collection - s_ON_MODEL_EVENT - 1 - change - id: ' + id + '; prevId: ' + prevId);

               if (prevId !== id) {
                  if (!Utils.isNullOrUndef(prevId)) {
                     delete this._byId[prevId];
                  }
                  if (!Utils.isNullOrUndef(id)) {
                     this._byId[id] = model;
                  }
               }
            }

            this.trigger.apply(this, arguments);
         };

         /**
          * Internal method called by both remove and set.
          *
          * @param {Collection}     collection  - A collection instance
          * @param {Array<Model>}   models      - A model instance
          * @param {object}         options     - Optional parameters
          * @returns {*}
          */

         s_REMOVE_MODELS = function s_REMOVE_MODELS(collection, models, options) {
            var removed = [];

            for (var i = 0; i < models.length; i++) {
               var model = collection.get(models[i]);

               Debug.log('Collection - s_REMOVE_MODELS - 0 - model: ' + model, true);

               if (!model) {
                  continue;
               }

               Debug.log('Collection - s_REMOVE_MODELS - 1 - model: ' + model.toJSON());

               var index = collection.indexOf(model);

               Debug.log('Collection - s_REMOVE_MODELS - 2 - index: ' + index);

               collection.models.splice(index, 1);
               collection.length--;

               if (!options.silent) {
                  options.index = index;
                  model.trigger('remove', model, collection, options);
               }

               removed.push(model);
               s_REMOVE_REFERENCE(collection, model, options);
            }

            return removed.length ? removed : false;
         };

         /**
          * Internal method to sever a model's ties to a collection.
          *
          * @param {Collection}  collection  - A collection instance
          * @param {Model}       model       - A model instance
          */

         s_REMOVE_REFERENCE = function s_REMOVE_REFERENCE(collection, model) {
            delete collection._byId[model.cid];
            var id = collection.modelId(model.attributes);

            Debug.log('Collection - s_REMOVE_REFERENCE - id: ' + id + '; model.cid: ' + model.cid);

            if (!Utils.isNullOrUndef(id)) {
               delete collection._byId[id];
            }
            if (collection === model.collection) {
               delete model.collection;
            }
            model.off('all', s_ON_MODEL_EVENT, collection);
         };

         /**
          * Splices `insert` into `array` at index `at`.
          *
          * @param {Array}    array    - Target array to splice into
          * @param {Array}    insert   - Array to insert
          * @param {number}   at       - Index to splice at
          */

         s_SPLICE = function s_SPLICE(array, insert, at) {
            at = Math.min(Math.max(at, 0), array.length);
            var tail = new Array(array.length - at);
            var length = insert.length;

            for (var i = 0; i < tail.length; i++) {
               tail[i] = array[i + at];
            }
            for (var i = 0; i < length; i++) {
               array[i + at] = insert[i];
            }
            for (var i = 0; i < tail.length; i++) {
               array[i + length + at] = tail[i];
            }
         };

         /**
          * Backbone.Collection - Collections are ordered sets of models. (http://backbonejs.org/#Collection)
          * -------------------
          *
          * You can bind "change" events to be notified when any model in the collection has been modified, listen for "add"
          * and "remove" events, fetch the collection from the server, and use a full suite of Underscore.js methods.
          *
          * Any event that is triggered on a model in a collection will also be triggered on the collection directly, for
          * convenience. This allows you to listen for changes to specific attributes in any model in a collection, for
          * example: documents.on("change:selected", ...)
          *
          * ---------
          *
          * Underscore methods available to Collection (including aliases):
          *
          * @see http://underscorejs.org/#chain
          * @see http://underscorejs.org/#contains
          * @see http://underscorejs.org/#countBy
          * @see http://underscorejs.org/#difference
          * @see http://underscorejs.org/#each
          * @see http://underscorejs.org/#every
          * @see http://underscorejs.org/#filter
          * @see http://underscorejs.org/#find
          * @see http://underscorejs.org/#first
          * @see http://underscorejs.org/#groupBy
          * @see http://underscorejs.org/#indexBy
          * @see http://underscorejs.org/#indexOf
          * @see http://underscorejs.org/#initial
          * @see http://underscorejs.org/#invoke
          * @see http://underscorejs.org/#isEmpty
          * @see http://underscorejs.org/#last
          * @see http://underscorejs.org/#lastIndexOf
          * @see http://underscorejs.org/#map
          * @see http://underscorejs.org/#max
          * @see http://underscorejs.org/#min
          * @see http://underscorejs.org/#partition
          * @see http://underscorejs.org/#reduce
          * @see http://underscorejs.org/#reduceRight
          * @see http://underscorejs.org/#reject
          * @see http://underscorejs.org/#rest
          * @see http://underscorejs.org/#sample
          * @see http://underscorejs.org/#shuffle
          * @see http://underscorejs.org/#some
          * @see http://underscorejs.org/#sortBy
          * @see http://underscorejs.org/#size
          * @see http://underscorejs.org/#toArray
          * @see http://underscorejs.org/#without
          *
          * @example
          *
          * If using Backbone-ES6 by ES6 source one can create a module for a Backbone.Collection:
          *
          * export default new Backbone.Collection(null,
          * {
          *    model: Backbone.Model.extend(...)
          * });
          *
          * or if importing a specific model class
          *
          * import Model from '<MY-BACKBONE-MODEL>'
          *
          * export default new Backbone.Collection(null,
          * {
          *    model: Model
          * });
          *
          * or use full ES6 style by using a getter for "model":
          *
          * import Model from '<MY-BACKBONE-MODEL>'
          *
          * class MyCollection extends Backbone.Collection
          * {
          *    get model() { return Model; }
          * }
          *
          * export default new MyCollection();   // If desired drop "new" to export the class itself and not an instance.
          */

         Collection = (function (_Events) {
            _inherits(Collection, _Events);

            /**
             * When creating a Collection, you may choose to pass in the initial array of models. The collection's comparator
             * may be included as an option. Passing false as the comparator option will prevent sorting. If you define an
             * initialize function, it will be invoked when the collection is created. There are a couple of options that, if
             * provided, are attached to the collection directly: model and comparator.
             *
             * Pass null for models to create an empty Collection with options.
             *
             * @see http://backbonejs.org/#Collection-constructor
             *
             * @param {Array<Model>}   models   - An optional array of models to set.
             * @param {object}         options  - Optional parameters
             */

            function Collection() {
               var models = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
               var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

               _classCallCheck(this, Collection);

               _get(Object.getPrototypeOf(Collection.prototype), 'constructor', this).call(this);

               // Allows child classes to abort constructor execution.
               if (_.isBoolean(options.abortCtor) && options.abortCtor) {
                  return;
               }

               // Must detect if there are any getters defined in order to skip setting these values.
               var hasModelGetter = !_.isUndefined(this.model);
               var hasComparatorGetter = !_.isUndefined(this.comparator);

               // The default model for a collection is just a **Backbone.Model**. This should be overridden in most cases.
               if (!hasModelGetter) {
                  /**
                   * The default Backbone.Model class to use as a prototype for this collection.
                   * @type {Model}
                   */
                  this.model = Model;
               }

               if (options.model && !hasModelGetter) {
                  this.model = options.model;
               }

               if (options.comparator !== void 0 && !hasComparatorGetter) {
                  /**
                   * A comparator string indicating the attribute to sort.
                   * @type {string}
                   */
                  this.comparator = options.comparator;
               }

               // Allows child classes to postpone initialization.
               if (_.isBoolean(options.abortCtorInit) && options.abortCtorInit) {
                  return;
               }

               this._reset();

               this.initialize.apply(this, arguments);

               if (models) {
                  this.reset(models, _.extend({ silent: true }, options));
               }
            }

            // Underscore methods that we want to implement on the Collection. 90% of the core usefulness of Backbone Collections
            // is actually implemented right here:

            /**
             * Add a model (or an array of models) to the collection, firing an "add" event for each model, and an "update"
             * event afterwards. If a model property is defined, you may also pass raw attributes objects, and have them be
             * vivified as instances of the model. Returns the added (or preexisting, if duplicate) models. Pass {at: index} to
             * splice the model into the collection at the specified index. If you're adding models to the collection that are
             * already in the collection, they'll be ignored, unless you pass {merge: true}, in which case their attributes will
             * be merged into the corresponding models, firing any appropriate "change" events.
             *
             * Note that adding the same model (a model with the same id) to a collection more than once is a no-op.
             *
             * @example
             * var ships = new Backbone.Collection;
             *
             * ships.on("add", function(ship) {
             *    alert("Ahoy " + ship.get("name") + "!");
             * });
             *
             * ships.add([
             *    {name: "Flying Dutchman"},
             *    {name: "Black Pearl"}
             * ]);
             *
             * @see http://backbonejs.org/#Collection-add
             *
             * @param {Model|Array<Model>}   models   - A single model or an array of models to add.
             * @param {object}               options  - Optional parameters
             * @returns {*}
             */

            _createClass(Collection, [{
               key: 'add',
               value: function add(models, options) {
                  return this.set(models, _.extend({ merge: false }, options, s_ADD_OPTIONS));
               }

               /**
                * Get a model from a collection, specified by index. Useful if your collection is sorted, and if your collection
                * isn't sorted, at will still retrieve models in insertion order.
                *
                * @see http://backbonejs.org/#Collection-at
                *
                * @param {number}   index - Index for model to retrieve.
                * @returns {*}
                */
            }, {
               key: 'at',
               value: function at(index) {
                  if (index < 0) {
                     index += this.length;
                  }
                  return this.models[index];
               }

               /**
                * Returns a new instance of the collection with an identical list of models.
                *
                * @see http://backbonejs.org/#Collection-clone
                *
                * @returns {Collection} Returns a new collection with shared models.
                */
            }, {
               key: 'clone',
               value: function clone() {
                  return new this.constructor(this.models, {
                     model: this.model,
                     comparator: this.comparator
                  });
               }

               /**
                * Convenience to create a new instance of a model within a collection. Equivalent to instantiating a model with a
                * hash of attributes, saving the model to the server, and adding the model to the set after being successfully
                * created. Returns the new model. If client-side validation failed, the model will be unsaved, with validation
                * errors. In order for this to work, you should set the model property of the collection. The create method can
                * accept either an attributes hash or an existing, unsaved model object.
                *
                * Creating a model will cause an immediate "add" event to be triggered on the collection, a "request" event as the
                * new model is sent to the server, as well as a "sync" event, once the server has responded with the successful
                * creation of the model. Pass {wait: true} if you'd like to wait for the server before adding the new model to the
                * collection.
                *
                * @example
                * var Library = Backbone.Collection.extend({
                *     model: Book
                * });
                *
                * var nypl = new Library;
                *
                * var othello = nypl.create({
                *    title: "Othello",
                *    author: "William Shakespeare"
                * });
                *
                * @see http://backbonejs.org/#Collection-create
                *
                * @param {Model}    attrs    - Attributes hash for the new model
                * @param {object}   options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'create',
               value: function create(attrs, options) {
                  options = options ? _.clone(options) : {};
                  var wait = options.wait;
                  var model = this._prepareModel(attrs, options);

                  if (!model) {
                     return false;
                  }
                  if (!wait) {
                     this.add(model, options);
                  }

                  var collection = this;
                  var success = options.success;

                  options.success = function (model, resp, callbackOpts) {
                     if (wait) {
                        collection.add(model, callbackOpts);
                     }
                     if (success) {
                        success.call(callbackOpts.context, model, resp, callbackOpts);
                     }
                  };

                  model.save(null, options);

                  return model;
               }

               /**
                * Fetch the default set of models for this collection from the server, setting them on the collection when they
                * arrive. The options hash takes success and error callbacks which will both be passed (collection, response,
                * options) as arguments. When the model data returns from the server, it uses set to (intelligently) merge the
                * fetched models, unless you pass {reset: true}, in which case the collection will be (efficiently) reset.
                * Delegates to Backbone.sync under the covers for custom persistence strategies and returns a jqXHR. The server
                * handler for fetch requests should return a JSON array of models.
                *
                * The behavior of fetch can be customized by using the available set options. For example, to fetch a collection,
                * getting an "add" event for every new model, and a "change" event for every changed existing model, without
                * removing anything: collection.fetch({remove: false})
                *
                * jQuery.ajax options can also be passed directly as fetch options, so to fetch a specific page of a paginated
                * collection: Documents.fetch({data: {page: 3}})
                *
                * Note that fetch should not be used to populate collections on page load — all models needed at load time should
                * already be bootstrapped in to place. fetch is intended for lazily-loading models for interfaces that are not
                * needed immediately: for example, documents with collections of notes that may be toggled open and closed.
                *
                * @example
                * Backbone.sync = function(method, model) {
                *    alert(method + ": " + model.url);
                * };
                *
                * var accounts = new Backbone.Collection;
                * accounts.url = '/accounts';
                *
                * accounts.fetch();
                *
                * @see http://backbonejs.org/#Collection-fetch
                *
                * @param {object}   options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'fetch',
               value: function fetch(options) {
                  var _this = this;

                  options = _.extend({ parse: true }, options);
                  var success = options.success;

                  options.success = function (resp) {
                     var method = options.reset ? 'reset' : 'set';
                     Debug.log('Collection - fetch - success callback - method: ' + method, true);
                     _this[method](resp, options);

                     if (success) {
                        success.call(options.context, _this, resp, options);
                     }

                     _this.trigger('sync', _this, resp, options);
                  };

                  Utils.wrapError(this, options);

                  return this.sync('read', this, options);
               }

               /**
                * Just like `where`, but directly returns only the first model in the collection that matches the passed
                * attributes.
                *
                * @see http://backbonejs.org/#Collection-findWhere
                *
                * @param {object}   attrs - Attribute hash to match.
                * @returns {*}
                */
            }, {
               key: 'findWhere',
               value: function findWhere(attrs) {
                  return this.where(attrs, true);
               }

               /**
                * Get a model from a collection, specified by an id, a cid, or by passing in a model.
                *
                * @example
                * var book = library.get(110);
                *
                * @see http://backbonejs.org/#Collection-get
                *
                * @param {Model} obj   - An instance of a model to search for by object, id, or cid.
                * @returns {*}
                */
            }, {
               key: 'get',
               value: function get(obj) {
                  if (Utils.isNullOrUndef(obj)) {
                     return void 0;
                  }

                  var id = this.modelId(Utils.isModel(obj) ? obj.attributes : obj);

                  Debug.log('Collection - get - id: ' + id);

                  return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
               }

               /**
                * Initialize is an empty function by default. Override it with your own initialization logic.
                *
                * @see http://backbonejs.org/#Collection-constructor
                * @abstract
                */
            }, {
               key: 'initialize',
               value: function initialize() {}

               /**
                * Override this method to specify the attribute the collection will use to refer to its models in collection.get.
                * By default returns the idAttribute of the collection's model class or failing that, 'id'. If your collection uses
                * polymorphic models and those models have an idAttribute other than id you must override this method with your own
                * custom logic.
                *
                * @example
                * var Library = Backbone.Collection.extend({
                *    model: function(attrs, options) {
                *       if (condition) {
                *          return new PublicDocument(attrs, options);
                *       } else {
                *          return new PrivateDocument(attrs, options);
                *       }
                *    },
                *
                *    modelId: function(attrs) {
                *       return attrs.private ? 'private_id' : 'public_id';
                *    }
                * });
                *
                * @see http://backbonejs.org/#Collection-modelId
                *
                * @param {object}   attrs - Attributes hash
                * @returns {*}
                */
            }, {
               key: 'modelId',
               value: function modelId(attrs) {
                  Debug.log('Collection - modelId - 0 - this.model.prototype.idAttribute: ' + this.model.prototype.idAttribute, true);
                  Debug.log('Collection - modelId - 1 - attrs: ' + JSON.stringify(attrs));

                  return attrs[this.model.prototype.idAttribute || 'id'];
               }

               /* eslint-disable no-unused-vars */
               /**
                * `parse` is called by Backbone whenever a collection's models are returned by the server, in fetch. The function is
                * passed the raw response object, and should return the array of model attributes to be added to the collection.
                * The default implementation is a no-op, simply passing through the JSON response. Override this if you need to
                * work with a preexisting API, or better namespace your responses.
                *
                * @example
                * var Tweets = Backbone.Collection.extend({
                *    // The Twitter Search API returns tweets under "results".
                *    parse: function(response) {
                *       return response.results;
                *    }
                * });
                *
                * @see http://backbonejs.org/#Collection-parse
                *
                * @param {object}   resp - Usually a JSON object.
                * @param {object}   options - Unused optional parameters.
                * @returns {object} Pass through to set the attributes hash on the model.
                */
            }, {
               key: 'parse',
               value: function parse(resp, options) {
                  /* eslint-enable no-unused-vars */
                  return resp;
               }

               /**
                * Pluck an attribute from each model in the collection. Equivalent to calling map and returning a single attribute
                * from the iterator.
                *
                * @example
                * var stooges = new Backbone.Collection([
                *    {name: "Curly"},
                *    {name: "Larry"},
                *    {name: "Moe"}
                * ]);
                *
                * var names = stooges.pluck("name");
                *
                * alert(JSON.stringify(names));
                *
                * @see http://backbonejs.org/#Collection-pluck
                *
                * @param {string}   attr  - Attribute key
                * @returns {*}
                */
            }, {
               key: 'pluck',
               value: function pluck(attr) {
                  return _.invoke(this.models, 'get', attr);
               }

               /**
                * Remove and return the last model from a collection. Takes the same options as remove.
                *
                * @see http://backbonejs.org/#Collection-pop
                *
                * @param {object}   options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'pop',
               value: function pop(options) {
                  var model = this.at(this.length - 1);
                  return this.remove(model, options);
               }

               /**
                * Prepare a hash of attributes (or other model) to be added to this collection.
                *
                * @protected
                * @param {object}         attrs       - Attribute hash
                * @param {object}         options     - Optional parameters
                * @returns {*}
                */
            }, {
               key: '_prepareModel',
               value: function _prepareModel(attrs, options) {
                  if (Utils.isModel(attrs)) {
                     Debug.log('Collection - _prepareModel - 0', true);
                     if (!attrs.collection) {
                        attrs.collection = this;
                     }
                     return attrs;
                  }

                  options = options ? _.clone(options) : {};
                  options.collection = this;

                  Debug.log('Collection - _prepareModel - 1 - attrs.parseObject: ' + attrs.parseObject);

                  var model = new this.model(attrs, options);

                  if (!model.validationError) {
                     return model;
                  }

                  this.trigger('invalid', this, model.validationError, options);

                  return false;
               }

               /**
                * Add a model at the end of a collection. Takes the same options as `add`.
                *
                * @see http://backbonejs.org/#Collection-push
                *
                * @param {Model}    model    - A Model instance
                * @param {object}   options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'push',
               value: function push(model, options) {
                  return this.add(model, _.extend({ at: this.length }, options));
               }

               /**
                * Remove a model (or an array of models) from the collection, and return them. Each model can be a Model instance,
                * an id string or a JS object, any value acceptable as the id argument of collection.get. Fires a "remove" event
                * for each model, and a single "update" event afterwards. The model's index before removal is available to
                * listeners as options.index.
                *
                * @see http://backbonejs.org/#Collection-remove
                *
                * @param {Model|Array<Model>}   models   - An single model or an array of models to remove.
                * @param {object}               options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'remove',
               value: function remove(models, options) {
                  options = _.extend({}, options);
                  var singular = !_.isArray(models);
                  models = singular ? [models] : _.clone(models);
                  var removed = s_REMOVE_MODELS(this, models, options);

                  if (!options.silent && removed) {
                     this.trigger('update', this, options);
                  }

                  return singular ? removed[0] : removed;
               }

               /**
                * Resets all internal state. Called when the collection is first initialized or reset.
                * @protected
                */
            }, {
               key: '_reset',
               value: function _reset() {
                  /**
                   * The length of the models array.
                   * @type {number}
                   */
                  this.length = 0;

                  /**
                   * An array of models in the collection.
                   * @type {Array<Model>}
                   */
                  this.models = [];

                  this._byId = {};
               }

               /**
                * Adding and removing models one at a time is all well and good, but sometimes you have so many models to change
                * that you'd rather just update the collection in bulk. Use reset to replace a collection with a new list of models
                * (or attribute hashes), triggering a single "reset" event at the end. Returns the newly-set models. For
                * convenience, within a "reset" event, the list of any previous models is available as options.previousModels.
                * Pass null for models to empty your Collection with options.
                *
                * Calling collection.reset() without passing any models as arguments will empty the entire collection.
                *
                * Here's an example using reset to bootstrap a collection during initial page load, in a Rails application:
                * @example
                * <script>
                *    var accounts = new Backbone.Collection;
                *    accounts.reset(<%= @accounts.to_json %>);
                * </script>
                *
                * @see http://backbonejs.org/#Collection-reset
                *
                * @param {Array<Model>}   models   - An array of models to add silently after resetting.
                * @param {object}         options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'reset',
               value: function reset(models, options) {
                  options = options ? _.clone(options) : {};

                  for (var i = 0; i < this.models.length; i++) {
                     s_REMOVE_REFERENCE(this, this.models[i]);
                  }

                  options.previousModels = this.models;

                  this._reset();

                  models = this.add(models, _.extend({ silent: true }, options));

                  if (!options.silent) {
                     this.trigger('reset', this, options);
                  }

                  return models;
               }

               /**
                * The set method performs a "smart" update of the collection with the passed list of models. If a model in the list
                * isn't yet in the collection it will be added; if the model is already in the collection its attributes will be
                * merged; and if the collection contains any models that aren't present in the list, they'll be removed. All of the
                * appropriate "add", "remove", and "change" events are fired as this happens. Returns the touched models in the
                * collection. If you'd like to customize the behavior, you can disable it with options: {add: false},
                * {remove: false}, or {merge: false}.
                *
                * @example
                * var vanHalen = new Backbone.Collection([eddie, alex, stone, roth]);
                *
                * vanHalen.set([eddie, alex, stone, hagar]);
                *
                * // Fires a "remove" event for roth, and an "add" event for "hagar".
                * // Updates any of stone, alex, and eddie's attributes that may have
                * // changed over the years.
                *
                * @see http://backbonejs.org/#Collection-set
                *
                * @param {Array<Model>}   models   - An array of models to set.
                * @param {object}         options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'set',
               value: function set(models, options) {
                  Debug.log('Collection - set - 0', true);
                  if (Utils.isNullOrUndef(models)) {
                     return;
                  }

                  options = _.defaults({}, options, s_SET_OPTIONS);
                  if (options.parse && !Utils.isModel(models)) {
                     models = this.parse(models, options);
                  }

                  var singular = !_.isArray(models);
                  models = singular ? [models] : models.slice();

                  var at = options.at;
                  if (!Utils.isNullOrUndef(at)) {
                     at = +at;
                  }
                  if (at < 0) {
                     at += this.length + 1;
                  }

                  Debug.log('Collection - set - 1 - at: ' + at + '; models.length: ' + models.length);

                  var set = [];
                  var toAdd = [];
                  var toRemove = [];
                  var modelMap = {};

                  var add = options.add;
                  var merge = options.merge;
                  var remove = options.remove;

                  var sort = false;
                  var sortable = this.comparator && Utils.isNullOrUndef(at) && options.sort !== false;
                  var sortAttr = _.isString(this.comparator) ? this.comparator : null;

                  // Turn bare objects into model references, and prevent invalid models from being added.
                  var model = undefined;

                  for (var i = 0; i < models.length; i++) {
                     model = models[i];

                     // If a duplicate is found, prevent it from being added and optionally merge it into the existing model.
                     var existing = this.get(model);
                     if (existing) {
                        Debug.log('Collection - set - 2 - existing');

                        if (merge && model !== existing) {
                           Debug.log('Collection - set - 3 - merge && model !== existing');

                           var attrs = Utils.isModel(model) ? model.attributes : model;
                           if (options.parse) {
                              attrs = existing.parse(attrs, options);
                           }
                           existing.set(attrs, options);
                           if (sortable && !sort) {
                              sort = existing.hasChanged(sortAttr);
                           }
                        }

                        if (!modelMap[existing.cid]) {
                           Debug.log('Collection - set - 4 - !modelMap[existing.cid]');

                           modelMap[existing.cid] = true;
                           set.push(existing);
                        }

                        models[i] = existing;

                        // If this is a new, valid model, push it to the `toAdd` list.
                     } else if (add) {
                           Debug.log('Collection - set - 5 - add');

                           model = models[i] = this._prepareModel(model, options);

                           if (model) {
                              Debug.log('Collection - set - 6 - toAdd');

                              toAdd.push(model);
                              s_ADD_REFERENCE(this, model);
                              modelMap[model.cid] = true;
                              set.push(model);
                           }
                        }
                  }

                  // Remove stale models.
                  if (remove) {
                     for (var i = 0; i < this.length; i++) {
                        model = this.models[i];
                        if (!modelMap[model.cid]) {
                           Debug.log('Collection - set - 7 - toRemove push');
                           toRemove.push(model);
                        }
                     }

                     if (toRemove.length) {
                        Debug.log('Collection - set - 8 - before invoking s_REMOVE_MODELS');
                        s_REMOVE_MODELS(this, toRemove, options);
                     }
                  }

                  // See if sorting is needed, update `length` and splice in new models.
                  var orderChanged = false;
                  var replace = !sortable && add && remove;

                  if (set.length && replace) {
                     orderChanged = this.length !== set.length || _.some(this.models, function (model, index) {
                        return model !== set[index];
                     });

                     Debug.log('Collection - set - 9 - set.length > 0 && replace - orderChanged: ' + orderChanged);

                     this.models.length = 0;

                     s_SPLICE(this.models, set, 0);

                     this.length = this.models.length;
                  } else if (toAdd.length) {
                     if (sortable) {
                        sort = true;
                     }

                     Debug.log('Collection - set - 10 - toAdd.length > 0 - sort: ' + sort + '; at: ' + at);

                     s_SPLICE(this.models, toAdd, Utils.isNullOrUndef(at) ? this.length : at);

                     this.length = this.models.length;
                  }

                  // Silently sort the collection if appropriate.
                  if (sort) {
                     Debug.log('Collection - set - 11 - sorting silent');

                     this.sort({ silent: true });
                  }

                  // Unless silenced, it's time to fire all appropriate add/sort events.
                  if (!options.silent) {
                     Debug.log('Collection - set - 12 - !options.silent: ' + !options.silent);

                     for (var i = 0; i < toAdd.length; i++) {
                        if (!Utils.isNullOrUndef(at)) {
                           options.index = at + i;
                        }

                        model = toAdd[i];
                        model.trigger('add', model, this, options);
                     }

                     if (sort || orderChanged) {
                        this.trigger('sort', this, options);
                     }
                     if (toAdd.length || toRemove.length) {
                        this.trigger('update', this, options);
                     }
                  }

                  // Return the added (or merged) model (or models).
                  return singular ? models[0] : models;
               }

               /**
                * Remove and return the first model from a collection. Takes the same options as `remove`.
                *
                * @see http://backbonejs.org/#Collection-shift
                *
                * @param {object}   options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'shift',
               value: function shift(options) {
                  var model = this.at(0);
                  return this.remove(model, options);
               }

               /**
                * Return a shallow copy of this collection's models, using the same options as native `Array#slice`.
                *
                * @see http://backbonejs.org/#Collection-slice
                *
                * @returns {*}
                */
            }, {
               key: 'slice',
               value: function slice() {
                  return Array.prototype.slice.apply(this.models, arguments);
               }

               /**
                * Force a collection to re-sort itself. You don't need to call this under normal circumstances, as a collection
                * with a comparator will sort itself whenever a model is added. To disable sorting when adding a model, pass
                * {sort: false} to add. Calling sort triggers a "sort" event on the collection.
                *
                * @see http://backbonejs.org/#Collection-sort
                *
                * @param {object}   options  - Optional parameters
                * @returns {Collection}
                */
            }, {
               key: 'sort',
               value: function sort() {
                  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                  var comparator = this.comparator;

                  if (!comparator) {
                     throw new Error('Cannot sort a set without a comparator');
                  }

                  var length = comparator.length;

                  if (_.isFunction(comparator)) {
                     comparator = _.bind(comparator, this);
                  }

                  // Run sort based on type of `comparator`.
                  if (length === 1 || _.isString(comparator)) {
                     this.models = this.sortBy(comparator);
                  } else {
                     this.models.sort(comparator);
                  }

                  if (!options.silent) {
                     this.trigger('sort', this, options);
                  }

                  return this;
               }

               /**
                * Uses Backbone.sync to persist the state of a collection to the server. Can be overridden for custom behavior.
                *
                * @see http://backbonejs.org/#Collection-sync
                *
                * @returns {*}
                */
            }, {
               key: 'sync',
               value: function sync() {
                  Debug.log("Collection - sync", true);
                  return BackboneProxy.backbone.sync.apply(this, arguments);
               }

               /**
                * Return an array containing the attributes hash of each model (via toJSON) in the collection. This can be used to
                * serialize and persist the collection as a whole. The name of this method is a bit confusing, because it conforms
                * to JavaScript's JSON API.
                *
                * @example
                * var collection = new Backbone.Collection([
                *    {name: "Tim", age: 5},
                *    {name: "Ida", age: 26},
                *    {name: "Rob", age: 55}
                * ]);
                *
                * alert(JSON.stringify(collection));
                *
                * @see http://backbonejs.org/#Collection-toJSON
                *
                * @param {object}   options  - Optional parameters
                * @returns {object} JSON
                */
            }, {
               key: 'toJSON',
               value: function toJSON(options) {
                  return this.map(function (model) {
                     return model.toJSON(options);
                  });
               }

               /**
                * Add a model at the beginning of a collection. Takes the same options as `add`.
                *
                * @see http://backbonejs.org/#Collection-unshift
                *
                * @param {Model}    model    - A Model instance
                * @param {object}   options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'unshift',
               value: function unshift(model, options) {
                  return this.add(model, _.extend({ at: 0 }, options));
               }

               /**
                * Return an array of all the models in a collection that match the passed attributes. Useful for simple cases of
                * filter.
                *
                * @example
                * var friends = new Backbone.Collection([
                *    {name: "Athos",      job: "Musketeer"},
                *    {name: "Porthos",    job: "Musketeer"},
                *    {name: "Aramis",     job: "Musketeer"},
                *    {name: "d'Artagnan", job: "Guard"},
                * ]);
                *
                * var musketeers = friends.where({job: "Musketeer"});
                *
                * alert(musketeers.length);
                *
                * @see http://backbonejs.org/#Collection-where
                *
                * @param {object}   attrs - Attribute hash to match.
                * @param {boolean}  first - Retrieve first match or all matches.
                * @returns {*}
                */
            }, {
               key: 'where',
               value: function where(attrs, first) {
                  return this[first ? 'find' : 'filter'](attrs);
               }
            }]);

            return Collection;
         })(Events);

         collectionMethods = {
            forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
            foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
            select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
            contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
            head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
            without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
            isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
            sortBy: 3, indexBy: 3
         };

         // Mix in each Underscore method as a proxy to `Collection#models`.
         Utils.addUnderscoreMethods(Collection, collectionMethods, 'models');

         /**
          * Exports the Collection class.
          */

         _export('default', Collection);
      }
   };
});

$__System.register('47', ['10', 'c', 'd'], function (_export) {
   var _, _createClass, _classCallCheck, BackboneQuery, __slice, __hasProp, __indexOf, s_DETECT, s_FILTER, s_GET_CACHE, s_GET_SORTED_MODELS, s_GET_TYPE, s_ITERATOR, s_MAKE_OBJ, s_PAGE_MODELS, s_PARSE_SUB_QUERY, s_PARSE_QUERY, s_PERFORM_QUERY, s_PROCESS_QUERY, s_REJECT, s_RUN_QUERY, s_SORT_MODELS, s_TEST_MODEL_ATTRIBUTE, s_TEST_QUERY_VALUE;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {
         /**
          * A fork of Backbone Query...
          *
          * Backbone Query - A lightweight query API for Backbone Collections
          * (c)2012 - Dave Tonge
          * May be freely distributed according to MIT license.
          * https://github.com/davidgtonge/backbone_query
          *
          *
          * (c)2015-present Michael Leahy
          * https://github.com/typhonjs/typhonjs-core-backbone-query
          */

         /**
          * BackboneQuery -- Provides client side sorting based on a query API.
          * -------------
          *
          * Forked from https://github.com/davidgtonge/backbone_query
          *
          * A lightweight (3KB minified) utility for Backbone projects, that works in the Browser and on the Server. Adds the
          * ability to search for models with a Query API similar to MongoDB.
          *
          * The huge benefit of using BackboneQuery is that queries can be stored as JSON.
          *
          * Usage
          * -----
          *
          * The major difference of this implementation is that the API is not attached to a collection, but can be run against
          * any collection by invoking the methods with a target collection.
          *
          * Find
          * -----
          * **_ $equal _**
          *
          * Performs a strict equality test using ===. If no operator is provided and the query value isn't a regex then `$equal`
          * is assumed.
          *
          * If the attribute in the model is an array then the query value is searched for in the array in the same way as
          * `$contains`.
          *
          * If the query value is an object (including array) then a deep comparison is performed using underscores `_.isEqual`.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: "Test" });
          * // Returns all models which have a "title" attribute of "Test"
          *
          *
          * BackboneQuery.find(collection, { title: { $equal: "Test" } }); // Same as above
          * BackboneQuery.find(collection, { colors: "red" });
          * // Returns models which contain the value "red" in a "colors" attribute that is an array.
          *
          *
          * BackboneQuery.find(collection, { colors: ["red", "yellow"] });
          * // Returns models which contain a colors attribute with the array ["red", "yellow"]
          * ```
          *
          * **_ $contains _**
          *
          * Assumes that the model property is an array and searches for the query value in the array.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $contains: "red" } });
          * // Returns models which contain the value "red" in a "colors" attribute that is an array.
          * e.g. a model with this attribute colors:["red", "yellow", "blue"] would be returned.
          * ```
          *
          *
          * **_ $ne _**
          *
          * "Not equal", the opposite of $equal, returns all models which don't have the query value
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: { $ne: "Test" } });
          * // Returns all models which don't have a "title" attribute of "Test"
          * ```
          *
          *
          * **_ $lt, $lte, $gt, $gte _**
          *
          * These conditional operators can be used for greater than and less than comparisons in queries
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { likes: { $lt:10 } });
          * // Returns all models which have a "likes" attribute of less than 10
          *
          *
          * BackboneQuery.find(collection, { likes: { $lte:10 } });
          * // Returns all models which have a "likes" attribute of less than or equal to 10
          *
          *
          * BackboneQuery.find(collection, { likes: { $gt:10 } });
          * // Returns all models which have a "likes" attribute of greater than 10
          *
          *
          * BackboneQuery.find(collection, { likes: { $gte:10 } });
          * // Returns all models which have a "likes" attribute of greater than or equal to 10
          * ```
          *
          *
          * **_ $between _**
          *
          * To check if a value is in-between 2 query values use the $between operator and supply an array with the min and max
          * value.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { likes: { $between: [5, 15] } });
          * // Returns all models which have a "likes" attribute of greater than 5 and less then 15
          * ```
          *
          *
          * **_ $in _**
          *
          * An array of possible values can be supplied using $in, a model will be returned if any of the supplied values is
          * matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: { $in: ["About", "Home", "Contact"] } });
          * // Returns all models which have a title attribute of either "About", "Home", or "Contact"
          * ```
          *
          *
          * **_ $nin _**
          *
          * "Not in", the opposite of $in. A model will be returned if none of the supplied values is matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: { $nin: ["About", "Home", "Contact"] } });
          * // Returns all models which don't have a title attribute of either "About", "Home", or "Contact"
          * ```
          *
          *
          * **_ $all _**
          *
          * Assumes the model property is an array and only returns models where all supplied values are matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $all: ["red", "yellow"] } });
          * // Returns all models which have "red" and "yellow" in their colors attribute.
          * // A model with the attribute colors:["red","yellow","blue"] would be returned.
          * // But a model with the attribute colors:["red","blue"] would not be returned.
          * ```
          *
          *
          * **_ $any _**
          *
          * Assumes the model property is an array and returns models where any of the supplied values are matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $any: ["red", "yellow"] } });
          * // Returns models which have either "red" or "yellow" in their colors attribute.
          * ```
          *
          *
          * **_ $size _**
          *
          * Assumes the model property has a length (i.e. is either an array or a string). Only returns models the model
          * property's length matches the supplied values.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $size:2 } });
          * // Returns all models which 2 values in the colors attribute
          * ```
          *
          *
          * $exists or $has
          *
          * Checks for the existence of an attribute. Can be supplied either true or false.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $exists: true } });
          *
          * // Returns all models which have a "title" attribute
          *
          * BackboneQuery.find(collection, { title: { $has: false } });
          *
          * // Returns all models which don't have a "title" attribute
          *
          *
          *
          * $like
          *
          * Assumes the model attribute is a string and checks if the supplied query value is a substring of the property.
          * Uses indexOf rather than regex for performance reasons.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $like: "Test" } });
          *
          * //Returns all models which have a "title" attribute that
          *
          * //contains the string "Test", e.g. "Testing", "Tests", "Test", etc.
          *
          *
          *
          * $likeI
          *
          * The same as above but performs a case insensitive search using indexOf and toLowerCase (still faster than Regex).
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $likeI: "Test" } });
          *
          * //Returns all models which have a "title" attribute that
          *
          * //contains the string "Test", "test", "tEst","tesT", etc.
          *
          *
          *
          * $regex
          *
          * Checks if the model attribute matches the supplied regular expression. The regex query can be supplied without
          * the `$regex` keyword.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { content: { $regex: /coffeescript/gi } });
          *
          * // Checks for a regex match in the content attribute
          *
          * BackboneQuery.find(collection, { content: /coffeescript/gi });
          *
          * // Same as above
          *
          *
          *
          * $cb
          *
          * A callback function can be supplied as a test. The callback will receive the attribute and should return either
          * true or false. `this` will be set to the current model, this can help with tests against computed properties.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $cb: function(attr){ return attr.charAt(0) === "c"; } } });
          *
          * // Returns all models that have a title attribute that starts with "c"
          *
          * BackboneQuery.find(collection, { computed_test: { $cb: function(){ return this.computed_property() > 10; } } });
          *
          * // Returns all models where the computed_property method returns a value greater than 10.
          *
          * For callbacks that use `this` rather than the model attribute, the key name supplied is arbitrary and has no
          * effect on the results. If the only test you were performing was like the above test it would make more sense to
          * simply use `Collection.filter`. However if you are performing other tests or are using the
          * paging / sorting / caching options of backbone query, then this functionality is useful.
          *
          *
          *
          * $elemMatch
          *
          * This operator allows you to perform queries in nested arrays similar to MongoDB For example you may have a
          * collection of models in with this kind of data structure:
          *
          * Example:
          *
          * let posts = new Collection([
          *
          *    {title: "Home", comments:[
          *
          *       {text:"I like this post"},
          *
          *       {text:"I love this post"},
          *
          *       {text:"I hate this post"}
          *
          *    ]},
          *
          *    {title: "About", comments:[
          *
          *       {text:"I like this page"},
          *
          *       {text:"I love this page"},
          *
          *       {text:"I really like this page"}
          *
          *    ]}
          *
          * ]);
          *
          *
          * To search for posts which have the text "really" in any of the comments you could search like this:
          *
          * BackboneQuery.find(posts, {
          *
          *    comments: {
          *
          *       $elemMatch: {
          *
          *          text: /really/i
          *
          *       }
          *
          *    }
          *
          * });
          *
          *
          * All of the operators above can be performed on `$elemMatch` queries, e.g. `$all`, `$size` or `$lt`. `$elemMatch`
          * queries also accept compound operators, for example this query searches for all posts that have at least one
          * comment without the word "really" and with the word "totally".
          *
          * BackboneQuery.find(posts, {
          *
          *    comments: {
          *
          *       $elemMatch: {
          *
          *          $not: {
          *
          *             text: /really/i
          *
          *          },
          *
          *          $and: {
          *
          *             text: /totally/i
          *
          *          }
          *       }
          *
          *    }
          *
          * });
          *
          *
          *
          * $computed
          *
          * This operator allows you to perform queries on computed properties. For example you may want to perform a query
          * for a persons full name, even though the first and last name are stored separately in your db / model. For
          * example:
          *
          * Example:
          *
          * class TestModel extends Backbone.Model {
          *
          *    full_name() {
          *
          *       return (this.get('first_name')) + " " + (this.get('last_name'));
          *
          *    }
          *
          * });
          *
          * let a = new TestModel({
          *
          *    first_name: "Dave",
          *
          *    last_name: "Tonge"
          *
          * });
          *
          * let b = new TestModel({
          *
          *    first_name: "John",
          *
          *    last_name: "Smith"
          *
          * });
          *
          * let collection = new Collection([a, b]);
          *
          * BackboneQuery.find(collection, { full_name: { $computed: "Dave Tonge" } });
          *
          * // Returns the model with the computed `full_name` equal to Dave Tonge
          *
          * BackboneQuery.find(collection, { full_name: { $computed: { $likeI: "john smi" } } });
          *
          * // Any of the previous operators can be used (including elemMatch is required)
          *
          *
          *
          * Combined Queries
          * ----------------
          * Multiple queries can be combined together. By default all supplied queries use the `$and` operator. However it is
          * possible to specify either `$or`, `$nor`, `$not` to implement alternate logic.
          *
          *
          * $and
          *
          * BackboneQuery.find(collection, { $and: { title: { $like: "News" }, likes: { $gt: 10 }}});
          *
          * // Returns all models that contain "News" in the title and have more than 10 likes.
          *
          * BackboneQuery.find(collection, { title: { $like: "News" }, likes: { $gt: 10 } });
          *
          * // Same as above as $and is assumed if not supplied
          *
          *
          *
          * $or
          *
          * BackboneQuery.find(collection, { $or: { title: { $like: "News" }, likes: { $gt: 10 } } });
          *
          * // Returns all models that contain "News" in the title OR have more than 10 likes.
          *
          *
          * $nor
          *
          * The opposite of `$or`
          *
          * BackboneQuery.find(collection, { $nor: { title: { $like: "News" }, likes: { $gt: 10 } } });
          *
          * // Returns all models that don't contain "News" in the title NOR have more than 10 likes.
          *
          *
          * $not
          *
          * The opposite of `$and`
          *
          * BackboneQuery.find(collection, { $not: { title: { $like: "News" }, likes: { $gt: 10 } } });
          *
          * // Returns all models that don't contain "News" in the title AND DON'T have more than 10 likes.
          *
          *
          * If you need to perform multiple queries on the same key, then you can supply the query as an array:
          *
          * BackboneQuery.find(collection, {
          *
          *    $or:[
          *
          *       {title:"News"},
          *
          *       {title:"About"}
          *
          *    ]
          *
          * });
          *
          * // Returns all models with the title "News" or "About".
          *
          *
          * Compound Queries
          * ----------------
          * It is possible to use multiple combined queries, for example searching for models that have a specific title
          * attribute, and either a category of "abc" or a tag of "xyz".
          *
          * BackboneQuery.find(collection, {
          *
          *    $and: { title: { $like: "News" } },
          *
          *    $or: {likes: { $gt: 10 }, color: { $contains:"red" } }
          *
          * });
          *
          * //Returns models that have "News" in their title and either have more than 10 likes or contain the color red.
          *
          *
          * Sorting
          * -------
          * Optional `sortBy` and `order` attributes can be supplied as part of an options object. `sortBy` can either be a
          * model key or a callback function which will be called with each model in the array.
          *
          * BackboneQuery.find(collection, { title: { $like: "News" } }, { sortBy: "likes" });
          *
          * // Returns all models that contain "News" in the title, sorted according to their "likes" attribute (ascending)
          *
          * BackboneQuery.find(collection, { title: { $like: "News" } }, { sortBy: "likes", order: "desc" });
          *
          * // Same as above, but "descending"
          *
          * BackboneQuery.find(collection,
          *
          *    { title: { $like: "News" } },
          *
          *    { sortBy: function(model){ return model.get("title").charAt(1); } }
          *
          * );
          *
          * // Results sorted according to 2nd character of the title attribute
          *
          *
          *
          * Paging
          * ------
          * To return only a subset of the results paging properties can be supplied as part of an options object. A limit
          * property must be supplied and optionally a offset or a page property can be supplied.
          *
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit: 10 });
          *
          * // Returns the first 10 models that have more than 10 likes.
          *
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit: 10, offset: 5 });
          *
          * // Returns 10 models that have more than 10 likes starting at the 6th model in the results.
          *
          * BackboneQuery.find(collection, { likes: { $gt: 10 } }, { limit: 10, page: 2 });
          *
          * // Returns 10 models that have more than 10 likes starting at the 11th model in the results (page 2).
          *
          *
          * When using the paging functionality, you will normally need to know the number of pages so that you can render
          * the correct interface for the user. Backbone Query can send the number of pages of results to a supplied callback.
          * The callback should be passed as a pager property on the options object. This callback will also receive the
          * sliced models as a second variable.
          *
          * Here is an example of a simple paging setup using the pager callback option:
          *
          * TODO Provide example!
          *
          * Caching Results
          * ---------------
          * To enable caching set the cache flag to true in the options object. This can greatly improve performance when
          * paging through results as the unpaged results will be saved. This options is not enabled by default as if models
          * are changed, added to, or removed from the collection, then the query cache will be out of date. If you know that
          * your data is static and won't change then caching can be enabled without any problems. If your data is dynamic
          * (as in most Backbone Apps) then a helper cache reset method is provided: `reset_query_cache`. This method should
          * be bound to your collections change, add and remove events (depending on how your data can be changed).
          *
          * Cache will be saved in a `_query_cache` property on each collection where a cache query is performed.
          *
          * @example
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit: 10, page: 1, cache: true });
          * //The first query will operate as normal and return the first page of results
          *
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit:10, page: 2, cache: true });
          * //The second query has an identical query object to the first query, so therefore the results will be retrieved
          * //from the cache, before the paging parameters are applied.
          *
          * // Binding the reset_query_cache method
          * MyCollection extends Backbone.Collection {
          *    initialize() {
          *       this.bind("change", () => { BackboneQuery.resetQueryCache(this) }, this);
          *    }
          * });
          */
         'use strict';

         BackboneQuery = (function () {
            function BackboneQuery() {
               _classCallCheck(this, BackboneQuery);
            }

            // Private / internal methods ---------------------------------------------------------------------------------------

            _createClass(BackboneQuery, null, [{
               key: 'find',

               /**
                * Returns a sorted array of models from the collection that match the query.
                *
                * @param {Collection}  collection  - Target collection
                * @param {string}      query       - Query string
                * @param {Object}      options     - Optional parameters
                * @returns {*}
                */
               value: function find(collection, query) {
                  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                  var models = undefined;

                  if (options.cache) {
                     models = s_GET_CACHE(collection, query, options);
                  } else {
                     models = s_GET_SORTED_MODELS(collection, query, options);
                  }

                  if (options.limit) {
                     models = s_PAGE_MODELS(models, options);
                  }

                  return models;
               }

               /**
                * Returns the first model that matches the query.
                *
                * @param {Collection}  collection  - Target collection
                * @param {string}      query       - Query string
                * @returns {*}
                */
            }, {
               key: 'findOne',
               value: function findOne(collection, query) {
                  return BackboneQuery.find(collection, query)[0];
               }

               /**
                * Resets the query cache of the target collection.
                *
                * @param {Collection}  collection  - Target collection
                */
            }, {
               key: 'resetQueryCache',
               value: function resetQueryCache(collection) {
                  collection._queryCache = {};
               }

               /**
                * Returns a sorted array of all models from the collection that match the query.
                *
                * @param {Collection}  collection  - Target collection
                * @param {string}      query       - Query string
                * @returns {Array<*>}
                */
            }, {
               key: 'sortAll',
               value: function sortAll(collection, query) {
                  return s_SORT_MODELS(collection.models, query);
               }

               /**
                * Runs a query and returns a new collection with the results. Useful for chaining.
                *
                * @param {Collection}  collection     - Target collection
                * @param {string}      query          - Query string
                * @param {Object}      queryOptions   - Optional parameters for query.
                * @param {Object}      options        - Optional parameters (used to construct the new collection).
                * @returns {Collection}
                */
            }, {
               key: 'whereBy',
               value: function whereBy(collection, query) {
                  var queryOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

                  return new collection.constructor(BackboneQuery.find(collection, query, queryOptions), options);
               }
            }]);

            return BackboneQuery;
         })();

         _export('default', BackboneQuery);

         __slice = [].slice;
         __hasProp = ({}).hasOwnProperty;

         __indexOf = [].indexOf || function (item) {
            for (var i = 0, l = this.length; i < l; i++) {
               if (i in this && this[i] === item) {
                  return i;
               }
            }

            return -1;
         };

         /**
          * Detects if any value in the array matches a test.
          *
          * @param {Array<*>} array - An array to detect.
          * @param {function} test  - A test function.
          * @returns {boolean}
          */

         s_DETECT = function s_DETECT(array, test) {
            var _i = undefined,
                _len = undefined,
                val = undefined;

            for (_i = 0, _len = array.length; _i < _len; _i++) {
               val = array[_i];
               if (test(val)) {
                  return true;
               }
            }

            return false;
         };

         /**
          * Filters an array only adding results that `test` passes.
          *
          * @param {Array<*>} array - An array to filter.
          * @param {function} test  - A test function.
          * @returns {Array<*>}
          */

         s_FILTER = function s_FILTER(array, test) {
            var _results = [];
            var _i = undefined,
                _len = undefined,
                val = undefined;

            for (_i = 0, _len = array.length; _i < _len; _i++) {
               val = array[_i];
               if (test(val)) {
                  _results.push(val);
               }
            }

            return _results;
         };

         /**
          * Gets the query cache from a collection.
          *
          * @param {Collection}  collection  - Target collection
          * @param {string}      query       - A query
          * @param {Object}      options     - Optional parameters
          * @returns {*}
          */

         s_GET_CACHE = function s_GET_CACHE(collection, query, options) {
            var _ref = undefined,
                cache = undefined,
                models = undefined,
                queryString = undefined;
            queryString = JSON.stringify(query);
            cache = (_ref = collection._queryCache) !== null ? _ref : collection._queryCache = {};
            models = cache[queryString];

            if (!models) {
               models = s_GET_SORTED_MODELS(collection, query, options);
               cache[queryString] = models;
            }

            return models;
         };

         /**
          * Runs a query then sorts the models.
          *
          * @param {Collection}  collection  - Target collection
          * @param {string}      query       - A query
          * @param {Object}      options     - Optional parameters
          * @returns {*}
          */

         s_GET_SORTED_MODELS = function s_GET_SORTED_MODELS(collection, query, options) {
            var models = undefined;
            models = s_RUN_QUERY(collection.models, query);

            if (options.sortBy) {
               models = s_SORT_MODELS(models, options);
            }

            return models;
         };

         /**
          * Tests an item and returns a string representation of the type or `false` if no type matched.
          *
          * @param {*}  item  - Item to test.
          * @returns {string|boolean}
          */

         s_GET_TYPE = function s_GET_TYPE(item) {
            if (_.isRegExp(item)) {
               return '$regex';
            }

            if (_.isDate(item)) {
               return '$date';
            }

            if (_.isObject(item) && !_.isArray(item)) {
               return 'object';
            }

            if (_.isArray(item)) {
               return 'array';
            }

            if (_.isString(item)) {
               return 'string';
            }

            if (_.isNumber(item)) {
               return 'number';
            }

            if (_.isBoolean(item)) {
               return 'boolean';
            }

            if (_.isFunction(item)) {
               return 'function';
            }

            return false;
         };

         /**
          *
          * @param {Array<Model>}   models         -
          * @param {Array<*>}       query          - An array of sub-queries.
          * @param {boolean}        andOr          -
          * @param {function}       filterFunction -
          * @param {string}         itemType       -
          * @returns {*}
          */

         s_ITERATOR = function s_ITERATOR(models, query, andOr, filterFunction, itemType) {
            if (itemType === null) {
               itemType = false;
            }

            return filterFunction(models, function (model) {
               var _i = undefined,
                   _len = undefined,
                   attr = undefined,
                   q = undefined,
                   test = undefined;

               for (_i = 0, _len = query.length; _i < _len; _i++) {
                  q = query[_i];

                  attr = (function () {
                     switch (itemType) {
                        case 'elemMatch':
                           return model[q.key];
                        case 'computed':
                           return model[q.key]();
                        default:
                           return model.get(q.key);
                     }
                  })();

                  test = s_TEST_MODEL_ATTRIBUTE(q.type, attr);

                  if (test) {
                     test = s_PERFORM_QUERY(q.type, q.value, attr, model, q.key);
                  }

                  if (andOr === test) {
                     return andOr;
                  }
               }
               return !andOr;
            });
         };

         /**
          * @returns {{}|*}
          */

         s_MAKE_OBJ = function s_MAKE_OBJ() {
            var args = undefined,
                current = undefined,
                key = undefined,
                o = undefined,
                val = undefined;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            o = {};
            current = o;

            while (args.length) {
               key = args.shift();
               val = args.length === 1 ? args.shift() : {};
               current = current[key] = val;
            }

            return o;
         };

         /**
          * Pages models
          *
          * @param {Array<Model>}   models   - Array of models to page.
          * @param {Object}         options  - Optional parameters
          * @returns {*}
          */

         s_PAGE_MODELS = function s_PAGE_MODELS(models, options) {
            var end = undefined,
                sliced_models = undefined,
                start = undefined,
                total_pages = undefined;

            if (options.offset) {
               start = options.offset;
            } else if (options.page) {
               start = (options.page - 1) * options.limit;
            } else {
               start = 0;
            }

            end = start + options.limit;
            sliced_models = models.slice(start, end);

            if (options.pager && _.isFunction(options.pager)) {
               total_pages = Math.ceil(models.length / options.limit);
               options.pager(total_pages, sliced_models);
            }

            return sliced_models;
         };

         /**
          * Function to parse raw queries
          *
          * Allows queries of the following forms:
          * query
          * name: "test"
          * id: $gte: 10
          *
          * query [
          *    {name:"test"}
          *    {id:$gte:10}
          * ]
          *
          * @param {*}  rawQuery - raw query
          * @return {array} parsed query
          */

         s_PARSE_SUB_QUERY = function s_PARSE_SUB_QUERY(rawQuery) {
            var _i = undefined,
                _len = undefined,
                _results = undefined,
                key = undefined,
                o = undefined,
                paramType = undefined,
                q = undefined,
                query = undefined,
                queryArray = undefined,
                queryParam = undefined,
                type = undefined,
                val = undefined,
                value = undefined;

            if (_.isArray(rawQuery)) {
               queryArray = rawQuery;
            } else {
               queryArray = (function () {
                  var _results = undefined;
                  _results = [];
                  for (key in rawQuery) {
                     if (!__hasProp.call(rawQuery, key)) {
                        continue;
                     }
                     val = rawQuery[key];
                     _results.push(s_MAKE_OBJ(key, val));
                  }
                  return _results;
               })();
            }

            _results = [];

            for (_i = 0, _len = queryArray.length; _i < _len; _i++) {
               query = queryArray[_i];
               for (key in query) {
                  if (!__hasProp.call(query, key)) {
                     continue;
                  }

                  queryParam = query[key];
                  o = { key: key };

                  paramType = s_GET_TYPE(queryParam);
                  switch (paramType) {
                     case '$regex':
                     case '$date':
                        o.type = paramType;
                        o.value = queryParam;
                        break;
                     case 'object':
                        if (key === '$and' || key === '$or' || key === '$nor' || key === '$not') {
                           o.value = s_PARSE_SUB_QUERY(queryParam);
                           o.type = key;
                           o.key = null;
                        } else {
                           for (type in queryParam) {
                              value = queryParam[type];
                              if (s_TEST_QUERY_VALUE(type, value)) {
                                 o.type = type;
                                 switch (type) {
                                    case '$elemMatch':
                                    case '$relationMatch':
                                       o.value = s_PARSE_QUERY(value);
                                       break;
                                    case '$computed':
                                       q = s_MAKE_OBJ(key, value);
                                       o.value = s_PARSE_SUB_QUERY(q);
                                       break;
                                    default:
                                       o.value = value;
                                 }
                              }
                           }
                        }
                        break;
                     default:
                        o.type = '$equal';
                        o.value = queryParam;
                  }

                  if (o.type === '$equal' && (paramType === 'object' || paramType === 'array')) {
                     o.type = '$oEqual';
                  }
               }
               _results.push(o);
            }

            return _results;
         };

         /**
          * Parses query string.
          *
          * @param {string}   query - A query
          * @returns {*[]}
          */

         s_PARSE_QUERY = function s_PARSE_QUERY(query) {
            var compoundKeys = undefined,
                compoundQuery = undefined,
                key = undefined,
                queryKeys = undefined,
                type = undefined,
                val = undefined;
            queryKeys = _(query).keys();
            compoundKeys = ["$and", "$not", "$or", "$nor"];
            compoundQuery = _.intersection(compoundKeys, queryKeys);

            if (compoundQuery.length === 0) {
               return [{
                  type: "$and",
                  parsedQuery: s_PARSE_SUB_QUERY(query)
               }];
            } else {
               if (compoundQuery.length !== queryKeys.length) {
                  if (__indexOf.call(compoundQuery, "$and") < 0) {
                     query.$and = {};
                     compoundQuery.unshift("$and");
                  }
                  for (key in query) {
                     if (!__hasProp.call(query, key)) {
                        continue;
                     }
                     val = query[key];

                     if (!(__indexOf.call(compoundKeys, key) < 0)) {
                        continue;
                     }

                     query.$and[key] = val;
                     delete query[key];
                  }
               }

               return (function () {
                  var _i = undefined,
                      _len = undefined,
                      _results = undefined;
                  _results = [];

                  for (_i = 0, _len = compoundQuery.length; _i < _len; _i++) {
                     type = compoundQuery[_i];
                     _results.push({
                        type: type,
                        parsedQuery: s_PARSE_SUB_QUERY(query[type])
                     });
                  }
                  return _results;
               })();
            }
         };

         /**
          * Performs a query
          *
          * @param {string}   type  -
          * @param {*}        value -
          * @param {*}        attr  -
          * @param {*}        model -
          * @returns {*}
          */

         s_PERFORM_QUERY = function s_PERFORM_QUERY(type, value, attr, model) {
            switch (type) {
               case '$equal':
                  if (_(attr).isArray()) {
                     return __indexOf.call(attr, value) >= 0;
                  } else {
                     return attr === value;
                  }
                  break;
               case '$oEqual':
                  return _(attr).isEqual(value);
               case '$contains':
                  return __indexOf.call(attr, value) >= 0;
               case '$ne':
                  return attr !== value;
               case '$lt':
                  return attr < value;
               case '$gt':
                  return attr > value;
               case '$lte':
                  return attr <= value;
               case '$gte':
                  return attr >= value;
               case '$between':
                  return value[0] < attr && attr < value[1];
               case '$in':
                  return __indexOf.call(value, attr) >= 0;
               case '$nin':
                  return __indexOf.call(value, attr) < 0;
               case '$all':
                  return _(value).all(function (item) {
                     return __indexOf.call(attr, item) >= 0;
                  });
               case '$any':
                  return _(attr).any(function (item) {
                     return __indexOf.call(value, item) >= 0;
                  });
               case '$size':
                  return attr.length === value;
               case '$exists':
               case '$has':
                  return attr !== null === value;
               case '$like':
                  return attr.includes(value);
               case '$likeI':
                  return attr.toLowerCase().includes(value.toLowerCase());
               case '$regex':
                  return value.test(attr);
               case '$cb':
                  return value.call(model, attr);
               case '$elemMatch':
                  return s_RUN_QUERY(attr, value, 'elemMatch').length > 0;
               case '$relationMatch':
                  return s_RUN_QUERY(attr.models, value, 'relationMatch').length > 0;
               case '$computed':
                  return s_ITERATOR([model], value, false, s_DETECT, 'computed');
               case '$and':
               case '$or':
               case '$nor':
               case '$not':
                  return s_PROCESS_QUERY[type]([model], value).length === 1;
               default:
                  return false;
            }
         };

         /**
          * @type {{$and: Function, $or: Function, $nor: Function, $not: Function}}
          */
         s_PROCESS_QUERY = {
            $and: function $and(models, query, itemType) {
               return s_ITERATOR(models, query, false, s_FILTER, itemType);
            },
            $or: function $or(models, query, itemType) {
               return s_ITERATOR(models, query, true, s_FILTER, itemType);
            },
            $nor: function $nor(models, query, itemType) {
               return s_ITERATOR(models, query, true, s_REJECT, itemType);
            },
            $not: function $not(models, query, itemType) {
               return s_ITERATOR(models, query, false, s_REJECT, itemType);
            }
         };

         /**
          * Creates an array of rejected values of an array that doesn't match a test function.
          *
          * @param {Array<*>} array - An array to reject.
          * @param {function} test  - A test function.
          * @returns {Array<*>}
          */

         s_REJECT = function s_REJECT(array, test) {
            var _results = [];
            var _i = undefined,
                _len = undefined,
                val = undefined;

            for (_i = 0, _len = array.length; _i < _len; _i++) {
               val = array[_i];
               if (!test(val)) {
                  _results.push(val);
               }
            }

            return _results;
         };

         /**
          * Runs a query.
          *
          * @param {*}        items    -
          * @param {string}   query    - A query
          * @param {*}        itemType -
          * @returns {*}
          */

         s_RUN_QUERY = function s_RUN_QUERY(items, query, itemType) {
            var reduceIterator = undefined;

            if (!itemType) {
               query = s_PARSE_QUERY(query);
            }

            reduceIterator = function (memo, queryItem) {
               return s_PROCESS_QUERY[queryItem.type](memo, queryItem.parsedQuery, itemType);
            };

            return _.reduce(query, reduceIterator, items);
         };

         /**
          * Sorts models.
          *
          * @param {Array<Model>}   models   -
          * @param {string}         query    - A query
          * @returns {*}
          */

         s_SORT_MODELS = function s_SORT_MODELS(models, query) {
            if (_(query.sortBy).isString()) {
               var first = _(models).first();
               if (_.isUndefined(first) || first === null) {
                  return [];
               }

               var firstValue = first.get(query.sortBy);

               if (_.isString(firstValue)) {
                  models = _(models).sortBy(function (model) {
                     return model.get(query.sortBy).toLocaleLowerCase();
                  });
               } else {
                  models = _(models).sortBy(function (model) {
                     return model.get(query.sortBy);
                  });
               }
            } else if (_(query.sortBy).isFunction()) {
               models = _(models).sortBy(query.sortBy);
            }

            if (query.order === 'desc') {
               models = models.reverse();
            } else if (query.order === false) {
               models = models.reverse();
            }

            return models;
         };

         /**
          * Tests a model attribute based on the query type.
          *
          * @param {string}   type  - Query type
          * @param {*}        value - A value
          * @returns {*}
          */

         s_TEST_MODEL_ATTRIBUTE = function s_TEST_MODEL_ATTRIBUTE(type, value) {
            switch (type) {
               case '$like':
               case '$likeI':
               case '$regex':
                  return _(value).isString();
               case '$contains':
               case '$all':
               case '$any':
               case '$elemMatch':
                  return _(value).isArray();
               case '$size':
                  return _(value).isArray() || _(value).isString();
               case '$in':
               case '$nin':
                  return value !== null;
               case '$relationMatch':
                  return value !== null && value.models;
               default:
                  return true;
            }
         };

         /**
          * Tests a value based on the query type.
          *
          * @param {string}   type  - Query type
          * @param {*}        value - A value
          * @returns {*}
          */

         s_TEST_QUERY_VALUE = function s_TEST_QUERY_VALUE(type, value) {
            switch (type) {
               case '$in':
               case '$nin':
               case '$all':
               case '$any':
                  return _(value).isArray();
               case '$size':
                  return _(value).isNumber();
               case '$regex':
                  return _(value).isRegExp();
               case '$like':
               case '$likeI':
                  return _(value).isString();
               case '$between':
                  return _(value).isArray() && value.length === 2;
               case '$cb':
                  return _(value).isFunction();
               default:
                  return true;
            }
         };
      }
   };
});

$__System.register("48", ["47"], function (_export) {
  "use strict";

  return {
    setters: [function (_) {
      var _exportObj = {};

      for (var _key in _) {
        if (_key !== "default") _exportObj[_key] = _[_key];
      }

      _exportObj["default"] = _["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

$__System.register('49', ['10', '42', '45', '48', 'a', 'b', 'c', 'd', '4a'], function (_export) {
   var _, Collection, Debug, BackboneQuery, _get, _inherits, _createClass, _classCallCheck, Model, ParseCollection;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_3) {
         Collection = _3['default'];
      }, function (_5) {
         Debug = _5['default'];
      }, function (_4) {
         BackboneQuery = _4['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }, function (_a2) {
         Model = _a2['default'];
      }],
      execute: function () {

         /**
          * ParseCollection - Collections are ordered sets of models. (http://backbonejs.org/#Collection)
          * -------------------
          *
          * This implementation of Backbone.Collection provides a `parse` method which coverts the response of a Parse.Query
          * to ParseModels. One must set a Parse.Query instance as options.query or use a getter method such as "get query()".
          *
          * Please see the `Collection` documentation for relevant information about the parent class / implementation.
          *
          * In addition ParseCollection includes BackboneQuery support which supports local query / sorting of collections.
          * Additional methods: `find, findOne, resetQueryCache, sortAll, whereBy`.
          *
          * @example
          *
          * If using Backbone-ES6 by ES6 source one can create a module for a Backbone.Collection:
          * import Backbone   from 'backbone';
          * import Parse      from 'parse';
          *
          * export default new Backbone.Collection(null,
          * {
          *    model: Backbone.Model.extend(...),
          *    query: new Parse.Query('<TABLE_NAME>')
          * });
          *
          * or if importing a specific model class
          *
          * import Backbone   from 'backbone';
          * import Parse      from 'parse';
          * import Model      from '<MY-BACKBONE-MODEL>'
          *
          * export default new Backbone.Collection(null,
          * {
          *    model: Model,
          *    query: new Parse.Query('<TABLE_NAME>')
          * });
          *
          * or use full ES6 style by using a getter for "model":
          *
          * import Backbone   from 'backbone';
          * import Parse      from 'parse';
          * import Model      from '<MY-BACKBONE-MODEL>'
          *
          * const s_QUERY = new Parse.Query('<TABLE_NAME>');
          *
          * class MyCollection extends Backbone.Collection
          * {
          *    get model() { return Model; }
          *    get query() { return s_QUERY; }
          * }
          *
          * export default new MyCollection();   // If desired drop "new" to export the class itself and not an instance.
          */
         'use strict';

         ParseCollection = (function (_Collection) {
            _inherits(ParseCollection, _Collection);

            /**
             * When creating a Collection, you may choose to pass in the initial array of models. The collection's comparator
             * may be included as an option. Passing false as the comparator option will prevent sorting. If you define an
             * initialize function, it will be invoked when the collection is created. There are a couple of options that, if
             * provided, are attached to the collection directly: model, comparator and query.
             *
             * Pass null for models to create an empty Collection with options.
             *
             * @see http://backbonejs.org/#Collection-constructor
             *
             * @param {Array<Model>}   models   - An optional array of models to set.
             * @param {object}         options  - Optional parameters
             */

            function ParseCollection() {
               var models = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
               var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

               _classCallCheck(this, ParseCollection);

               _get(Object.getPrototypeOf(ParseCollection.prototype), 'constructor', this).call(this, models, _.extend({ abortCtor: true }, options));

               // Allows child classes to abort constructor execution.
               if (_.isBoolean(options.abortCtor) && options.abortCtor) {
                  return;
               }

               // Must detect if there are any getters defined in order to skip setting these values directly.
               var hasComparatorGetter = !_.isUndefined(this.comparator);
               var hasModelGetter = !_.isUndefined(this.model);
               var hasQueryGetter = !_.isUndefined(this.query);

               if (options.comparator !== void 0 && !hasComparatorGetter) {
                  /**
                   * A comparator string indicating the attribute to sort.
                   * @type {string}
                   */
                  this.comparator = options.comparator;
               }

               // The default model for a collection is just a **Backbone.Model**. This should be overridden in most cases.
               if (!hasModelGetter) {
                  /**
                   * The default Backbone.Model class to use as a prototype for this collection.
                   * @type {Model}
                   */
                  this.model = Model;
               }

               if (options.model && !hasModelGetter) {
                  if (!(options.model instanceof Model)) {
                     throw new TypeError('options.model is not an instance of ParseModel.');
                  }

                  this.model = options.model;
               }

               if (options.query && !hasQueryGetter) {
                  /**
                   * A Parse.Query instance
                   * @type {Parse.Query}
                   */
                  this.query = options.query;
               }

               // Allows child classes to postpone initialization.
               if (_.isBoolean(options.abortCtorInit) && options.abortCtorInit) {
                  return;
               }

               this._reset();

               this.initialize.apply(this, arguments);

               if (models) {
                  this.reset(models, _.extend({ silent: true }, options));
               }
            }

            /**
             * Exports the ParseCollection class.
             */

            /**
             * Returns a new instance of the collection with an identical list of models.
             *
             * @see http://backbonejs.org/#Collection-clone
             *
             * @returns {Collection} Returns a new collection with shared models.
             */

            _createClass(ParseCollection, [{
               key: 'clone',
               value: function clone() {
                  return new this.constructor(this.models, {
                     comparator: this.comparator,
                     model: this.model,
                     query: this.query
                  });
               }

               /**
                * Delegates to `BackboneQuery.find` to return an array of models that match the sort query.
                *
                * @param {string}   query    - A query string.
                * @param {Object}   options  - Optional parameters
                * @returns {Array<Model>}
                */
            }, {
               key: 'find',
               value: function find(query, options) {
                  return BackboneQuery.find(this, query, options);
               }

               /**
                * Delegates to `BackboneQuery.findOne` to return the first model that matches the sort query.
                *
                * @param {string}   query    - A query string.
                * @returns {Model}
                */
            }, {
               key: 'findOne',
               value: function findOne(query) {
                  return BackboneQuery.findOne(this, query);
               }

               /* eslint-disable no-unused-vars */
               /**
                * `parse` is called by Backbone whenever a collection's models are returned by the server, in fetch. The function is
                * passed the raw response object, and should return the array of model attributes to be added to the collection.
                * This implementation depends on `parseSync` which utilizes the Parse.Query attached to this collection to return
                * a response of Parse.Object(s) which are then parsed into ParseModels.
                *
                * @param {object}   resp - An array of Parse.Object(s).
                * @param {object}   options - Unused optional parameters.
                * @returns {object|Array[]} An array or single ParseModel(s).
                */
            }, {
               key: 'parse',
               value: function parse(resp, options) {
                  var _this = this;

                  /* eslint-enable no-unused-vars */

                  var output = undefined;

                  Debug.log('ParseCollection - parse - 0', true);

                  if (!_.isArray(resp)) {
                     var parseObject = resp;
                     output = new this.model({}, { parseObject: parseObject, updateParseObject: false });

                     Debug.log('ParseCollection - parse - 1 - toJSON: ' + JSON.stringify(parseObject.toJSON()));
                  } else {
                     output = [];

                     Debug.log('ParseCollection - parse - 2 - resp.length: ' + resp.length);

                     _.each(resp, function (parseObject) {
                        var model = new _this.model({}, { parseObject: parseObject, updateParseObject: false });
                        output.push(model);

                        Debug.log('ParseCollection - parse - 3 - parseObject: ' + JSON.stringify(model.toJSON()));
                     });
                  }

                  return output;
               }

               /**
                * Delegates to `BackboneQuery.resetQueryCache` to reset this collections query cache.
                */
            }, {
               key: 'resetQueryCache',
               value: function resetQueryCache() {
                  BackboneQuery.resetQueryCache(this);
               }

               /**
                * Delegates to `BackboneQuery.sortAll` to return all models that match the sort query.
                *
                * @param {string}   query    - A query string.
                * @returns {Array<Model>}
                */
            }, {
               key: 'sortAll',
               value: function sortAll(query) {
                  return BackboneQuery.sortAll(this, query);
               }

               /**
                * Delegates to `BackboneQuery.whereBy` to return a new collection with the models that match the sort query.
                *
                * @param {string}   query    - A query string.
                * @param {Object}   options  - Optional parameters
                * @returns {Collection}
                */
            }, {
               key: 'whereBy',
               value: function whereBy(query, options) {
                  return BackboneQuery.whereBy(this, query, options, {
                     model: this.model,
                     query: this.query,
                     comparator: this.comparator
                  });
               }
            }]);

            return ParseCollection;
         })(Collection);

         _export('default', ParseCollection);
      }
   };
});

$__System.register('37', ['10', '46', 'a', 'b', 'c', 'd', '4b'], function (_export) {
   var _, Events, _get, _inherits, _createClass, _classCallCheck, _Promise, TyphonEvents, s_EVENT_SPLITTER, s_EVENTS_API, s_TRIGGER_API, s_TRIGGER_FIRST_EVENTS, s_TRIGGER_RESULTS_EVENTS, s_TRIGGER_THEN_EVENTS;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_3) {
         Events = _3['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }, function (_b2) {
         _Promise = _b2['default'];
      }],
      execute: function () {

         /**
          * TyphonEvents adds new functionality for trigger events. The following are new trigger mechanisms:
          *
          * Please refer to the Events documentation for all inherited functionality.
          *
          * `triggerDefer` - Defers invoking `trigger`.
          *
          * `triggerFirst` - Only invokes the first target matched and passes back any result to the callee.
          *
          * `triggerResults` - Invokes all targets matched and passes back an array of results in an array to the callee.
          *
          * `triggerThen` - Invokes all targets matched and adds any returned results through `Promise.all` which returns
          *  a single promise to the callee.
          */
         'use strict';

         TyphonEvents = (function (_Events) {
            _inherits(TyphonEvents, _Events);

            function TyphonEvents() {
               _classCallCheck(this, TyphonEvents);

               _get(Object.getPrototypeOf(TyphonEvents.prototype), 'constructor', this).apply(this, arguments);
            }

            // Private / internal methods ---------------------------------------------------------------------------------------

            /**
             * Regular expression used to split event strings.
             * @type {RegExp}
             */

            _createClass(TyphonEvents, [{
               key: 'getEventbusName',

               /**
                * Returns the current eventbusName.
                *
                * @returns {string|*}
                */
               value: function getEventbusName() {
                  return this._eventbusName;
               }

               /**
                * Sets the eventbus name.
                *
                * @param {string}   name - The name for this eventbus.
                */
            }, {
               key: 'setEventbusName',
               value: function setEventbusName(name) {
                  this._eventbusName = name;
               }

               /**
                * Defers invoking `trigger`.
                *
                * @returns {TyphonEvents}
                */
            }, {
               key: 'triggerDefer',
               value: function triggerDefer() {
                  var _this = this,
                      _arguments = arguments;

                  setTimeout(function () {
                     _get(Object.getPrototypeOf(TyphonEvents.prototype), 'trigger', _this).apply(_this, _arguments);
                  }, 0);

                  return this;
               }

               /**
                * Provides `trigger` functionality that only invokes the first target matched and passes back any result to
                * the callee.
                *
                * @param {string}   name  - Event name(s)
                * @returns {*}
                */
            }, {
               key: 'triggerFirst',
               value: function triggerFirst(name) {
                  if (!this._events) {
                     return null;
                  }

                  var length = Math.max(0, arguments.length - 1);
                  var args = new Array(length);
                  for (var i = 0; i < length; i++) {
                     args[i] = arguments[i + 1];
                  }

                  return s_EVENTS_API(s_TRIGGER_API, s_TRIGGER_FIRST_EVENTS, this._events, name, void 0, args);
               }

               /**
                * Provides `trigger` functionality, but collects any returned results from invoked targets in an array and passes
                * back this array to the callee.
                *
                * @param {string}   name  - Event name(s)
                * @returns {Array<*>}
                */
            }, {
               key: 'triggerResults',
               value: function triggerResults(name) {
                  if (!this._events) {
                     return [];
                  }

                  var length = Math.max(0, arguments.length - 1);
                  var args = new Array(length);
                  for (var i = 0; i < length; i++) {
                     args[i] = arguments[i + 1];
                  }

                  return s_EVENTS_API(s_TRIGGER_API, s_TRIGGER_RESULTS_EVENTS, this._events, name, void 0, args);
               }

               /**
                * Provides `trigger` functionality, but collects any returned Promises from invoked targets and returns a
                * single Promise generated by `Promise.all`. This is a very useful mechanism to invoke asynchronous operations
                * over an eventbus.
                *
                * @param {string}   name  - Event name(s)
                * @returns {Promise}
                */
            }, {
               key: 'triggerThen',
               value: function triggerThen(name) {
                  if (!this._events) {
                     _Promise.all([]);
                  }

                  var length = Math.max(0, arguments.length - 1);
                  var args = new Array(length);
                  for (var i = 0; i < length; i++) {
                     args[i] = arguments[i + 1];
                  }

                  return s_EVENTS_API(s_TRIGGER_API, s_TRIGGER_THEN_EVENTS, this._events, name, void 0, args);
               }
            }]);

            return TyphonEvents;
         })(Events);

         _export('default', TyphonEvents);

         s_EVENT_SPLITTER = /\s+/;

         /**
          * Iterates over the standard `event, callback` (as well as the fancy multiple space-separated events `"change blur",
          * callback` and jQuery-style event maps `{event: callback}`).
          *
          * @param {function} iteratee       - Trigger API
          * @param {function} iterateeTarget - Internal function which is dispatched to.
          * @param {Array<*>} events         - Array of stored event callback data.
          * @param {string}   name           - Event name(s)
          * @param {function} callback       - callback
          * @param {Object}   opts           - Optional parameters
          * @returns {*}
          */

         s_EVENTS_API = function s_EVENTS_API(iteratee, iterateeTarget, events, name, callback, opts) {
            var i = 0,
                names = undefined;

            if (name && typeof name === 'object') {
               // Handle event maps.
               if (callback !== void 0 && 'context' in opts && opts.context === void 0) {
                  opts.context = callback;
               }
               for (names = _.keys(name); i < names.length; i++) {
                  events = s_EVENTS_API(iteratee, iterateeTarget, events, names[i], name[names[i]], opts);
               }
            } else if (name && s_EVENT_SPLITTER.test(name)) {
               // Handle space separated event names by delegating them individually.
               for (names = name.split(s_EVENT_SPLITTER); i < names.length; i++) {
                  events = iteratee(iterateeTarget, events, names[i], callback, opts);
               }
            } else {
               // Finally, standard events.
               events = iteratee(iterateeTarget, events, name, callback, opts);
            }

            return events;
         };

         /**
          * Handles triggering the appropriate event callbacks.
          *
          * @param {function} iterateeTarget - Internal function which is dispatched to.
          * @param {Array<*>} objEvents      - Array of stored event callback data.
          * @param {string}   name           - Event name(s)
          * @param {function} cb             - callback
          * @param {Array<*>} args           - Arguments supplied to a trigger method.
          * @returns {*}
          */

         s_TRIGGER_API = function s_TRIGGER_API(iterateeTarget, objEvents, name, cb, args) {
            var result = undefined;

            if (objEvents) {
               var events = objEvents[name];
               var allEvents = objEvents.all;
               if (events && allEvents) {
                  allEvents = allEvents.slice();
               }
               if (events) {
                  result = iterateeTarget(events, args);
               }
               if (allEvents) {
                  result = iterateeTarget(allEvents, [name].concat(args));
               }
            }

            return result;
         };

         /**
          * A difficult-to-believe, but optimized internal dispatch function for triggering events. Tries to keep the usual
          * cases speedy (most internal Backbone events have 3 arguments). This method stop event propagation after the first
          * target is invoked. It also passes back a return value from the target.
          *
          * @param {Array<*>} events   -  Array of stored event callback data.
          * @param {Array<*>} args     -  Arguments supplied to `triggerFirst`.
          * @returns {*}
          */

         s_TRIGGER_FIRST_EVENTS = function s_TRIGGER_FIRST_EVENTS(events, args) {
            var ev = undefined,
                i = -1;
            var a1 = args[0],
                a2 = args[1],
                a3 = args[2],
                l = events.length;

            var result = undefined;

            switch (args.length) {
               case 0:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        return result;
                     }
                  }
                  return;
               case 1:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx, a1);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        return result;
                     }
                  }
                  return;
               case 2:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx, a1, a2);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        return result;
                     }
                  }
                  return;
               case 3:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        return result;
                     }
                  }
                  return;
               default:
                  while (++i < l) {
                     result = (ev = events[i]).callback.apply(ev.ctx, args);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        return result;
                     }
                  }
                  return;
            }
         };

         /**
          * A difficult-to-believe, but optimized internal dispatch function for triggering events. Tries to keep the usual
          * cases speedy (most internal Backbone events have 3 arguments). This dispatch method passes back an array with
          * all results returned by any invoked targets.
          *
          * @param {Array<*>} events   -  Array of stored event callback data.
          * @param {Array<*>} args     -  Arguments supplied to `triggerResults`.
          * @returns {Array<*>}
          */

         s_TRIGGER_RESULTS_EVENTS = function s_TRIGGER_RESULTS_EVENTS(events, args) {
            var ev = undefined,
                i = -1;
            var a1 = args[0],
                a2 = args[1],
                a3 = args[2],
                l = events.length;

            var result = undefined;
            var results = [];

            switch (args.length) {
               case 0:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        results.push(result);
                     }
                  }
                  return results;
               case 1:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx, a1);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        results.push(result);
                     }
                  }
                  return results;
               case 2:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx, a1, a2);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        results.push(result);
                     }
                  }
                  return results;
               case 3:
                  while (++i < l) {
                     result = (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        results.push(result);
                     }
                  }
                  return results;
               default:
                  while (++i < l) {
                     result = (ev = events[i]).callback.apply(ev.ctx, args);

                     // If we received a valid result return immediately.
                     if (!_.isUndefined(result)) {
                        results.push(result);
                     }
                  }
                  return results;
            }
         };

         /**
          * A difficult-to-believe, but optimized internal dispatch function for triggering events. Tries to keep the usual
          * cases speedy (most internal Backbone events have 3 arguments). This dispatch method uses ES6 Promises and adds
          * any returned results to an array which is added to a Promise.all construction which passes back a Promise which
          * waits until all Promises complete. Any target invoked may return a Promise or any result. This is very useful to
          * use for any asynchronous operations.
          *
          * @param {Array<*>} events   -  Array of stored event callback data.
          * @param {Array<*>} args     -  Arguments supplied to `triggerThen`.
          * @returns {Promise}
          */

         s_TRIGGER_THEN_EVENTS = function s_TRIGGER_THEN_EVENTS(events, args) {
            var ev = undefined,
                i = -1;
            var a1 = args[0],
                a2 = args[1],
                a3 = args[2],
                l = events.length;

            var result = undefined;
            var results = [];

            try {
               switch (args.length) {
                  case 0:
                     while (++i < l) {
                        result = (ev = events[i]).callback.call(ev.ctx);

                        // If we received a valid result add it to the promises array.
                        if (!_.isUndefined(result)) {
                           results.push(result);
                        }
                     }
                     break;

                  case 1:
                     while (++i < l) {
                        result = (ev = events[i]).callback.call(ev.ctx, a1);

                        // If we received a valid result add it to the promises array.
                        if (!_.isUndefined(result)) {
                           results.push(result);
                        }
                     }
                     break;

                  case 2:
                     while (++i < l) {
                        result = (ev = events[i]).callback.call(ev.ctx, a1, a2);

                        // If we received a valid result add it to the promises array.
                        if (!_.isUndefined(result)) {
                           results.push(result);
                        }
                     }
                     break;

                  case 3:
                     while (++i < l) {
                        result = (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);

                        // If we received a valid result add it to the promises array.
                        if (!_.isUndefined(result)) {
                           results.push(result);
                        }
                     }
                     break;

                  default:
                     while (++i < l) {
                        result = (ev = events[i]).callback.apply(ev.ctx, args);

                        // If we received a valid result add it to the promises array.
                        if (!_.isUndefined(result)) {
                           results.push(result);
                        }
                     }
                     break;
               }
            } catch (error) {
               return _Promise.reject(error);
            }

            return _Promise.all(results);
         };
      }
   };
});

$__System.register('4c', ['10', '44', '46', 'a', 'b', 'c', 'd'], function (_export) {
   var _, Utils, Events, _get, _inherits, _createClass, _classCallCheck, s_ROUTE_STRIPPER, s_ROOT_STRIPPER, s_PATH_STRIPPER, s_UPDATE_HASH, History;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_4) {
         Utils = _4['default'];
      }, function (_3) {
         Events = _3['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         // Private / internal methods ---------------------------------------------------------------------------------------

         /**
          * Cached regex for stripping a leading hash/slash and trailing space.
          */
         'use strict';

         s_ROUTE_STRIPPER = /^[#\/]|\s+$/g;

         /**
          * Cached regex for stripping leading and trailing slashes.
          */
         s_ROOT_STRIPPER = /^\/+|\/+$/g;

         /**
          * Cached regex for stripping urls of hash.
          */
         s_PATH_STRIPPER = /#.*$/;

         /**
          * Update the hash location, either replacing the current entry, or adding a new one to the browser history.
          *
          * @param {object}   location - URL / current location
          * @param {string}   fragment - URL fragment
          * @param {boolean}  replace  - conditional replace
          */

         s_UPDATE_HASH = function s_UPDATE_HASH(location, fragment, replace) {
            if (replace) {
               var href = location.href.replace(/(javascript:|#).*$/, '');
               location.replace(href + '#' + fragment);
            } else {
               // Some browsers require that `hash` contains a leading #.
               location.hash = '#' + fragment;
            }
         };

         /**
          * Backbone.History - History serves as a global router. (http://backbonejs.org/#History)
          * ----------------
          *
          * History serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route,
          * and trigger callbacks. You shouldn't ever have to create one of these yourself since Backbone.history already
          * contains one.
          *
          * pushState support exists on a purely opt-in basis in Backbone. Older browsers that don't support pushState will
          * continue to use hash-based URL fragments, and if a hash URL is visited by a pushState-capable browser, it will be
          * transparently upgraded to the true URL. Note that using real URLs requires your web server to be able to correctly
          * render those pages, so back-end changes are required as well. For example, if you have a route of /documents/100,
          * your web server must be able to serve that page, if the browser visits that URL directly. For full search-engine
          * crawlability, it's best to have the server generate the complete HTML for the page ... but if it's a web application,
          * just rendering the same content you would have for the root URL, and filling in the rest with Backbone Views and
          * JavaScript works fine.
          *
          * Handles cross-browser history management, based on either [pushState](http://diveintohtml5.info/history.html) and
          * real URLs, or [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange) and URL fragments.
          * If the browser supports neither (old IE, natch), falls back to polling.
          */

         History = (function (_Events) {
            _inherits(History, _Events);

            /** */

            function History() {
               _classCallCheck(this, History);

               _get(Object.getPrototypeOf(History.prototype), 'constructor', this).call(this);

               /**
                * Stores route / callback pairs for validation.
                * @type {Array<Object<string, function>>}
                */
               this.handlers = [];
               this.checkUrl = _.bind(this.checkUrl, this);

               // Ensure that `History` can be used outside of the browser.
               if (typeof window !== 'undefined') {
                  /**
                   * Browser Location or URL string.
                   * @type {Location|String}
                   */
                  this.location = window.location;

                  /**
                   * Browser history
                   * @type {History}
                   */
                  this.history = window.history;
               }

               /**
                * Has the history handling already been started?
                * @type {boolean}
                */
               this.started = false;

               /**
                * The default interval to poll for hash changes, if necessary, is twenty times a second.
                * @type {number}
                */
               this.interval = 50;
            }

            /**
             * Are we at the app root?
             *
             * @returns {boolean}
             */

            _createClass(History, [{
               key: 'atRoot',
               value: function atRoot() {
                  var path = this.location.pathname.replace(/[^\/]$/, '$&/');
                  return path === this.root && !this.getSearch();
               }

               /**
                * Checks the current URL to see if it has changed, and if it has, calls `loadUrl`, normalizing across the
                * hidden iframe.
                *
                * @returns {boolean}
                */
            }, {
               key: 'checkUrl',
               value: function checkUrl() {
                  var current = this.getFragment();

                  // If the user pressed the back button, the iframe's hash will have changed and we should use that for comparison.
                  if (current === this.fragment && this.iframe) {
                     current = this.getHash(this.iframe.contentWindow);
                  }

                  if (current === this.fragment) {
                     return false;
                  }
                  if (this.iframe) {
                     this.navigate(current);
                  }
                  this.loadUrl();
               }

               /**
                * Unicode characters in `location.pathname` are percent encoded so they're decoded for comparison. `%25` should
                * not be decoded since it may be part of an encoded parameter.
                *
                * @param {string}   fragment - URL fragment
                * @return {string}
                */
            }, {
               key: 'decodeFragment',
               value: function decodeFragment(fragment) {
                  return decodeURI(fragment.replace(/%25/g, '%2525'));
               }

               /**
                * Get the cross-browser normalized URL fragment from the path or hash.
                *
                * @param {string} fragment   -- URL fragment
                * @returns {*|void|string|XML}
                */
            }, {
               key: 'getFragment',
               value: function getFragment(fragment) {
                  if (Utils.isNullOrUndef(fragment)) {
                     if (this._usePushState || !this._wantsHashChange) {
                        fragment = this.getPath();
                     } else {
                        fragment = this.getHash();
                     }
                  }
                  return fragment.replace(s_ROUTE_STRIPPER, '');
               }

               /**
                * Gets the true hash value. Cannot use location.hash directly due to bug in Firefox where location.hash will
                * always be decoded.
                *
                * @param {object}   window   - Browser `window`
                * @returns {*}
                */
            }, {
               key: 'getHash',
               value: function getHash(window) {
                  var match = (window || this).location.href.match(/#(.*)$/);
                  return match ? match[1] : '';
               }

               /**
                * Get the pathname and search params, without the root.
                *
                * @returns {*}
                */
            }, {
               key: 'getPath',
               value: function getPath() {
                  var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                  return path.charAt(0) === '/' ? path.slice(1) : path;
               }

               /**
                * In IE6, the hash fragment and search params are incorrect if the fragment contains `?`.
                *
                * @returns {string}
                */
            }, {
               key: 'getSearch',
               value: function getSearch() {
                  var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
                  return match ? match[0] : '';
               }

               /**
                * Attempt to load the current URL fragment. If a route succeeds with a match, returns `true`. If no defined routes
                * matches the fragment, returns `false`.
                *
                * @param {string}   fragment - URL fragment
                * @returns {boolean}
                */
            }, {
               key: 'loadUrl',
               value: function loadUrl(fragment) {
                  // If the root doesn't match, no routes can match either.
                  if (!this.matchRoot()) {
                     return false;
                  }
                  fragment = this.fragment = this.getFragment(fragment);
                  return _.some(this.handlers, function (handler) {
                     if (handler.route.test(fragment)) {
                        handler.callback(fragment);
                        return true;
                     }
                  });
               }

               /**
                * Does the pathname match the root?
                *
                * @returns {boolean}
                */
            }, {
               key: 'matchRoot',
               value: function matchRoot() {
                  var path = this.decodeFragment(this.location.pathname);
                  var root = path.slice(0, this.root.length - 1) + '/';
                  return root === this.root;
               }

               /**
                * Save a fragment into the hash history, or replace the URL state if the 'replace' option is passed. You are
                * responsible for properly URL-encoding the fragment in advance.
                *
                * The options object can contain `trigger: true` if you wish to have the route callback be fired (not usually
                * desirable), or `replace: true`, if you wish to modify the current URL without adding an entry to the history.
                *
                * @param {string}   fragment - String representing an URL fragment.
                * @param {object}   options - Optional hash containing parameters for navigate.
                * @returns {*}
                */
            }, {
               key: 'navigate',
               value: function navigate(fragment, options) {
                  if (!History.started) {
                     return false;
                  }
                  if (!options || options === true) {
                     options = { trigger: !!options };
                  }

                  // Normalize the fragment.
                  fragment = this.getFragment(fragment || '');

                  // Don't include a trailing slash on the root.
                  var root = this.root;

                  if (fragment === '' || fragment.charAt(0) === '?') {
                     root = root.slice(0, -1) || '/';
                  }

                  var url = root + fragment;

                  // Strip the hash and decode for matching.
                  fragment = this.decodeFragment(fragment.replace(s_PATH_STRIPPER, ''));

                  if (this.fragment === fragment) {
                     return;
                  }

                  /**
                   * URL fragment
                   * @type {*|void|string|XML}
                   */
                  this.fragment = fragment;

                  // If pushState is available, we use it to set the fragment as a real URL.
                  if (this._usePushState) {
                     this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

                     // If hash changes haven't been explicitly disabled, update the hash fragment to store history.
                  } else if (this._wantsHashChange) {
                        s_UPDATE_HASH(this.location, fragment, options.replace);

                        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
                           var iWindow = this.iframe.contentWindow;

                           // Opening and closing the iframe tricks IE7 and earlier to push a history
                           // entry on hash-tag change.  When replace is true, we don't want this.
                           if (!options.replace) {
                              iWindow.document.open();
                              iWindow.document.close();
                           }

                           s_UPDATE_HASH(iWindow.location, fragment, options.replace);
                        }

                        // If you've told us that you explicitly don't want fallback hashchange-
                        // based history, then `navigate` becomes a page refresh.
                     } else {
                           return this.location.assign(url);
                        }

                  if (options.trigger) {
                     return this.loadUrl(fragment);
                  }
               }

               /**
                * When all of your Routers have been created, and all of the routes are set up properly, call
                * Backbone.history.start() to begin monitoring hashchange events, and dispatching routes. Subsequent calls to
                * Backbone.history.start() will throw an error, and Backbone.History.started is a boolean value indicating whether
                * it has already been called.
                *
                * To indicate that you'd like to use HTML5 pushState support in your application, use
                * Backbone.history.start({pushState: true}). If you'd like to use pushState, but have browsers that don't support
                * it natively use full page refreshes instead, you can add {hashChange: false} to the options.
                *
                * If your application is not being served from the root url / of your domain, be sure to tell History where the
                * root really is, as an option: Backbone.history.start({pushState: true, root: "/public/search/"})
                *
                * When called, if a route succeeds with a match for the current URL, Backbone.history.start() returns true. If no
                * defined route matches the current URL, it returns false.
                *
                * If the server has already rendered the entire page, and you don't want the initial route to trigger when starting
                * History, pass silent: true.
                *
                * Because hash-based history in Internet Explorer relies on an <iframe>, be sure to call start() only after the DOM
                * is ready.
                *
                * @example
                * import WorkspaceRouter from 'WorkspaceRouter.js';
                * import HelpPaneRouter  from 'HelpPaneRouter.js';
                *
                * new WorkspaceRouter();
                * new HelpPaneRouter();
                * Backbone.history.start({pushState: true});
                *
                * @param {object}   options  - Optional parameters
                * @returns {*}
                */
            }, {
               key: 'start',
               value: function start(options) {
                  if (History.started) {
                     throw new Error('Backbone.history has already been started');
                  }

                  History.started = true;

                  /**
                   * Figure out the initial configuration. Do we need an iframe?
                   * @type {Object}
                   */
                  this.options = _.extend({ root: '/' }, this.options, options);

                  /**
                   * URL root
                   * @type {string}
                   */
                  this.root = this.options.root;

                  this._wantsHashChange = this.options.hashChange !== false;
                  this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
                  this._useHashChange = this._wantsHashChange && this._hasHashChange;

                  // Is pushState desired ... is it available?
                  this._wantsPushState = !!this.options.pushState;
                  this._hasPushState = !!(this.history && this.history.pushState);
                  this._usePushState = this._wantsPushState && this._hasPushState;

                  this.fragment = this.getFragment();

                  // Normalize root to always include a leading and trailing slash.
                  this.root = ('/' + this.root + '/').replace(s_ROOT_STRIPPER, '/');

                  // Transition from hashChange to pushState or vice versa if both are requested.
                  if (this._wantsHashChange && this._wantsPushState) {

                     // If we've started off with a route from a `pushState`-enabled
                     // browser, but we're currently in a browser that doesn't support it...
                     if (!this._hasPushState && !this.atRoot()) {
                        var root = this.root.slice(0, -1) || '/';
                        this.location.replace(root + '#' + this.getPath());

                        // Return immediately as browser will do redirect to new url
                        return true;

                        // Or if we've started out with a hash-based route, but we're currently
                        // in a browser where it could be `pushState`-based instead...
                     } else if (this._hasPushState && this.atRoot()) {
                           this.navigate(this.getHash(), { replace: true });
                        }
                  }

                  // Proxy an iframe to handle location events if the browser doesn't support the `hashchange` event, HTML5
                  // history, or the user wants `hashChange` but not `pushState`.
                  if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                     /**
                      * Proxy iframe
                      * @type {Element}
                      */
                     this.iframe = document.createElement('iframe');
                     this.iframe.src = 'javascript:0';
                     this.iframe.style.display = 'none';
                     this.iframe.tabIndex = -1;

                     var body = document.body;

                     // Using `appendChild` will throw on IE < 9 if the document is not ready.
                     var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
                     iWindow.document.open();
                     iWindow.document.close();
                     iWindow.location.hash = '#' + this.fragment;
                  }

                  // Add a cross-platform `addEventListener` shim for older browsers.
                  var addEventListener = window.addEventListener || function (eventName, listener) {
                     /* eslint-disable no-undef */
                     return attachEvent('on' + eventName, listener);
                     /* eslint-enable no-undef */
                  };

                  // Depending on whether we're using pushState or hashes, and whether
                  // 'onhashchange' is supported, determine how we check the URL state.
                  if (this._usePushState) {
                     addEventListener('popstate', this.checkUrl, false);
                  } else if (this._useHashChange && !this.iframe) {
                     addEventListener('hashchange', this.checkUrl, false);
                  } else if (this._wantsHashChange) {
                     this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
                  }

                  if (!this.options.silent) {
                     return this.loadUrl();
                  }
               }

               /**
                * Disable Backbone.history, perhaps temporarily. Not useful in a real app, but possibly useful for unit
                * testing Routers.
                */
            }, {
               key: 'stop',
               value: function stop() {
                  // Add a cross-platform `removeEventListener` shim for older browsers.
                  var removeEventListener = window.removeEventListener || function (eventName, listener) {
                     /* eslint-disable no-undef */
                     return detachEvent('on' + eventName, listener);
                     /* eslint-enable no-undef */
                  };

                  // Remove window listeners.
                  if (this._usePushState) {
                     removeEventListener('popstate', this.checkUrl, false);
                  } else if (this._useHashChange && !this.iframe) {
                     removeEventListener('hashchange', this.checkUrl, false);
                  }

                  // Clean up the iframe if necessary.
                  if (this.iframe) {
                     document.body.removeChild(this.iframe);
                     this.iframe = null;
                  }

                  // Some environments will throw when clearing an undefined interval.
                  if (this._checkUrlInterval) {
                     clearInterval(this._checkUrlInterval);
                  }
                  History.started = false;
               }

               /**
                * Add a route to be tested when the fragment changes. Routes added later may override previous routes.
                *
                * @param {string}   route    -  Route to add for checking.
                * @param {function} callback -  Callback function to invoke on match.
                */
            }, {
               key: 'route',
               value: function route(_route, callback) {
                  this.handlers.unshift({ route: _route, callback: callback });
               }
            }]);

            return History;
         })(Events);

         _export('default', History);
      }
   };
});

$__System.registerDynamic("4d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4e", ["4f", "50", "51"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('4f'),
      aFunction = $__require('50'),
      SPECIES = $__require('51')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("52", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("53", ["54"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('54').document && document.documentElement;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("55", ["13", "54"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('13'),
      document = $__require('54').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("56", ["1d", "52", "53", "55", "54", "57", "58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ctx = $__require('1d'),
        invoke = $__require('52'),
        html = $__require('53'),
        cel = $__require('55'),
        global = $__require('54'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('57')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("59", ["54", "56", "57", "58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = $__require('54'),
        macrotask = $__require('56').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('57')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("25", ["17", "1a", "26", "51"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('17'),
      $ = $__require('1a'),
      DESCRIPTORS = $__require('26'),
      SPECIES = $__require('51')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5a", ["1a", "5b", "54", "1d", "2a", "15", "13", "4f", "50", "1e", "20", "5c", "4d", "51", "4e", "59", "26", "1c", "5d", "25", "17", "5e", "58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = $__require('1a'),
        LIBRARY = $__require('5b'),
        global = $__require('54'),
        ctx = $__require('1d'),
        classof = $__require('2a'),
        $export = $__require('15'),
        isObject = $__require('13'),
        anObject = $__require('4f'),
        aFunction = $__require('50'),
        strictNew = $__require('1e'),
        forOf = $__require('20'),
        setProto = $__require('5c').set,
        same = $__require('4d'),
        SPECIES = $__require('51')('species'),
        speciesConstructor = $__require('4e'),
        asap = $__require('59'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('26')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('1c')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('5d')(P, PROMISE);
    $__require('25')(PROMISE);
    Wrapper = $__require('17')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('5e')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5f", ["2d", "2e", "2f", "5a", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('2d');
  $__require('2e');
  $__require('2f');
  $__require('5a');
  module.exports = $__require('17').Promise;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4b", ["5f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('5f'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.register('43', ['10', '41', '44', '46', 'a', 'b', 'c', 'd'], function (_export) {
   var _, BackboneProxy, Utils, Events, _get, _inherits, _createClass, _classCallCheck, Model, modelMethods;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_3) {
         BackboneProxy = _3['default'];
      }, function (_5) {
         Utils = _5['default'];
      }, function (_4) {
         Events = _4['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         /**
          * Backbone.Model - Models are the heart of any JavaScript application. (http://backbonejs.org/#Model)
          * --------------
          *
          * Models are the heart of any JavaScript application, containing the interactive data as well as a large part of the
          * logic surrounding it: conversions, validations, computed properties, and access control.
          *
          * Backbone-ES6 supports the older "extend" functionality of Backbone. You can still use "extend" to extend
          * Backbone.Model with your domain-specific methods, and Model provides a basic set of functionality for managing
          * changes.
          *
          * It is recommended though to use ES6 syntax for working with Backbone-ES6 foregoing the older "extend" mechanism.
          *
          * Create a new model with the specified attributes. A client id (`cid`) is automatically generated & assigned for you.
          *
          * If you pass a {collection: ...} as the options, the model gains a collection property that will be used to indicate
          * which collection the model belongs to, and is used to help compute the model's url. The model.collection property is
          * normally created automatically when you first add a model to a collection. Note that the reverse is not true, as
          * passing this option to the constructor will not automatically add the model to the collection. Useful, sometimes.
          *
          * If {parse: true} is passed as an option, the attributes will first be converted by parse before being set on the
          * model.
          *
          * Underscore methods available to Model:
          * @see http://underscorejs.org/#chain
          * @see http://underscorejs.org/#keys
          * @see http://underscorejs.org/#invert
          * @see http://underscorejs.org/#isEmpty
          * @see http://underscorejs.org/#omit
          * @see http://underscorejs.org/#pairs
          * @see http://underscorejs.org/#pick
          * @see http://underscorejs.org/#values
          *
          * @example
          * import Backbone from 'backbone';
          *
          * export default class MyModel extends Backbone.Model
          * {
          *    initialize() { alert('initialized!); }
          * }
          *
          * older extend example:
          * export default Backbone.Model.extend(
          * {
          *    initialize: { alert('initialized!); }
          * });
          *
          * @example
          * Another older extend example... The following is a contrived example, but it demonstrates defining a model with a
          * custom method, setting an attribute, and firing an event keyed to changes in that specific attribute. After running
          * this code once, sidebar will be available in your browser's console, so you can play around with it.
          *
          * var Sidebar = Backbone.Model.extend({
          *    promptColor: function() {
          *       var cssColor = prompt("Please enter a CSS color:");
          *       this.set({color: cssColor});
          *    }
          * });
          *
          * window.sidebar = new Sidebar;
          *
          * sidebar.on('change:color', function(model, color) {
          *    $('#sidebar').css({ background: color });
          * });
          *
          * sidebar.set({color: 'white'});
          *
          * sidebar.promptColor();
          *
          * @example
          * The above extend example converted to ES6:
          *
          * class Sidebar extends Backbone.Model {
          *    promptColor() {
          *       const cssColor = prompt("Please enter a CSS color:");
          *       this.set({ color: cssColor });
          *    }
          * }
          *
          * window.sidebar = new Sidebar();
          *
          * sidebar.on('change:color', (model, color) => {
          *    $('#sidebar').css({ background: color });
          * });
          *
          * sidebar.set({ color: 'white' });
          *
          * sidebar.promptColor();
          *
          * @example
          * Another older extend example:
          * extend correctly sets up the prototype chain, so subclasses created with extend can be further extended and
          * sub-classed as far as you like.
          *
          * var Note = Backbone.Model.extend({
          *    initialize: function() { ... },
          *
          *    author: function() { ... },
          *
          *    coordinates: function() { ... },
          *
          *    allowedToEdit: function(account) {
          *       return true;
          *    }
          * });
          *
          * var PrivateNote = Note.extend({
          *    allowedToEdit: function(account) {
          *       return account.owns(this);
          *    }
          * });
          *
          * @example
          * Converting the above example to ES6:
          *
          * class Note extends Backbone.Model {
          *    initialize() { ... }
          *
          *    author() { ... }
          *
          *    coordinates() { ... }
          *
          *    allowedToEdit(account) {
          *       return true;
          *    }
          * }
          *
          * class PrivateNote extends Note {
          *    allowedToEdit(account) {
          *       return account.owns(this);
          *    }
          * });
          *
          * let privateNote = new PrivateNote();
          *
          * @example
          * A huge benefit of using ES6 syntax is that one has access to 'super'
          *
          * class Note extends Backbone.Model {
          *    set(attributes, options) {
          *       super.set(attributes, options);
          *       ...
          *    }
          * });
          */
         'use strict';

         Model = (function (_Events) {
            _inherits(Model, _Events);

            /**
             * When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on
             * the model. If you define an initialize function, it will be invoked when the model is created.
             *
             * @example
             * new Book({
             *    title: "One Thousand and One Nights",
             *    author: "Scheherazade"
             * });
             *
             * @example
             * ES6 example: If you're looking to get fancy, you may want to override constructor, which allows you to replace
             * the actual constructor function for your model.
             *
             * class Library extends Backbone.Model {
             *    constructor() {
             *       super(...arguments);
             *       this.books = new Books();
             *    }
             *
             *    parse(data, options) {
             *       this.books.reset(data.books);
             *       return data.library;
             *    }
             * }
             *
             * @see http://backbonejs.org/#Model-constructor
             *
             * @param {object} attributes - Optional attribute hash of original keys / values to set.
             * @param {object} options    - Optional parameters
             */

            function Model() {
               var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
               var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

               _classCallCheck(this, Model);

               _get(Object.getPrototypeOf(Model.prototype), 'constructor', this).call(this);

               // Allows child classes to abort constructor execution.
               if (_.isBoolean(options.abortCtor) && options.abortCtor) {
                  return;
               }

               var attrs = attributes;

               /**
                * The prefix is used to create the client id which is used to identify models locally.
                * You may want to override this if you're experiencing name clashes with model ids.
                *
                * @type {string}
                */
               this.cidPrefix = 'c';

               /**
                * Client side ID
                * @type {number}
                */
               this.cid = _.uniqueId(this.cidPrefix);

               /**
                * The hash of attributes for this model.
                * @type {object}
                */
               this.attributes = {};

               if (options.collection) {
                  /**
                   * A potentially associated collection.
                   * @type {Collection}
                   */
                  this.collection = options.collection;
               }

               /**
                * A hash of attributes whose current and previous value differ.
                * @type {object}
                */
               this.changed = {};

               /**
                * The value returned during the last failed validation.
                * @type {*}
                */
               this.validationError = null;

               // Allows child classes to postpone initialization.
               if (_.isBoolean(options.abortCtorInit) && options.abortCtorInit) {
                  return;
               }

               if (options.parse) {
                  attrs = this.parse(attrs, options) || {};
               }

               attrs = _.defaults({}, attrs, _.result(this, 'defaults'));

               this.set(attrs, options);

               this.initialize(this, arguments);
            }

            // The default name for the JSON `id` attribute is `"id"`. MongoDB and CouchDB users may want to set this to `"_id"`.

            /**
             * Retrieve a hash of only the model's attributes that have changed since the last set, or false if there are none.
             * Optionally, an external attributes hash can be passed in, returning the attributes in that hash which differ from
             * the model. This can be used to figure out which portions of a view should be updated, or what calls need to be
             * made to sync the changes to the server.
             *
             * @see http://backbonejs.org/#Model-changedAttributes
             *
             * @param {object}   diff  - A hash of key / values to diff against this models attributes.
             * @returns {object|boolean}
             */

            _createClass(Model, [{
               key: 'changedAttributes',
               value: function changedAttributes(diff) {
                  if (!diff) {
                     return this.hasChanged() ? _.clone(this.changed) : false;
                  }
                  var old = this._changing ? this._previousAttributes : this.attributes;
                  var changed = {};
                  for (var attr in diff) {
                     var val = diff[attr];
                     if (_.isEqual(old[attr], val)) {
                        continue;
                     }
                     changed[attr] = val;
                  }
                  return _.size(changed) ? changed : false;
               }

               /**
                * Removes all attributes from the model, including the id attribute. Fires a "change" event unless silent is
                * passed as an option.
                *
                * @see http://backbonejs.org/#Model-clear
                *
                * @param {object}   options - Optional parameters.
                * @returns {*}
                */
            }, {
               key: 'clear',
               value: function clear(options) {
                  var attrs = {};
                  for (var key in this.attributes) {
                     attrs[key] = void 0;
                  }
                  return this.set(attrs, _.extend({}, options, { unset: true }));
               }

               /**
                * Returns a new instance of the model with identical attributes.
                *
                * @see http://backbonejs.org/#Model-clone
                *
                * @returns {*}
                */
            }, {
               key: 'clone',
               value: function clone() {
                  return new this.constructor(this.attributes);
               }

               /**
                * Destroys the model on the server by delegating an HTTP DELETE request to Backbone.sync. Returns a jqXHR object,
                * or false if the model isNew. Accepts success and error callbacks in the options hash, which will be passed
                * (model, response, options). Triggers a "destroy" event on the model, which will bubble up through any collections
                * that contain it, a "request" event as it begins the Ajax request to the server, and a "sync" event, after the
                * server has successfully acknowledged the model's deletion. Pass {wait: true} if you'd like to wait for the server
                * to respond before removing the model from the collection.
                *
                * @example
                * book.destroy({success: function(model, response) {
                *    ...
                * }});
                *
                * @see http://backbonejs.org/#Model-destroy
                *
                * @param {object}   options - Provides optional properties used in destroying a model.
                * @returns {boolean|XMLHttpRequest}
                */
            }, {
               key: 'destroy',
               value: function destroy(options) {
                  var _this = this;

                  options = options ? _.clone(options) : {};
                  var success = options.success;
                  var wait = options.wait;

                  var destroy = function destroy() {
                     _this.stopListening();
                     _this.trigger('destroy', _this, _this.collection, options);
                  };

                  options.success = function (resp) {
                     if (wait) {
                        destroy();
                     }
                     if (success) {
                        success.call(options.context, _this, resp, options);
                     }
                     if (!_this.isNew()) {
                        _this.trigger('sync', _this, resp, options);
                     }
                  };

                  var xhr = false;

                  if (this.isNew()) {
                     _.defer(options.success);
                  } else {
                     Utils.wrapError(this, options);
                     xhr = this.sync('delete', this, options);
                  }

                  if (!wait) {
                     destroy();
                  }

                  return xhr;
               }

               /**
                * Similar to get, but returns the HTML-escaped version of a model's attribute. If you're interpolating data from
                * the model into HTML, using escape to retrieve attributes will prevent XSS attacks.
                *
                * @example
                * let hacker = new Backbone.Model({
                *    name: "<script>alert('xss')</script>"
                * });
                *
                * alert(hacker.escape('name'));
                *
                * @see http://backbonejs.org/#Model-escape
                *
                * @param {*}  attr  - Defines a single attribute key to get and escape via Underscore.
                * @returns {string}
                */
            }, {
               key: 'escape',
               value: function escape(attr) {
                  return _.escape(this.get(attr));
               }

               /**
                * Merges the model's state with attributes fetched from the server by delegating to Backbone.sync. Returns a jqXHR.
                * Useful if the model has never been populated with data, or if you'd like to ensure that you have the latest
                * server state. Triggers a "change" event if the server's state differs from the current attributes. fetch accepts
                * success and error callbacks in the options hash, which are both passed (model, response, options) as arguments.
                *
                * @example
                * // Poll every 10 seconds to keep the channel model up-to-date.
                * setInterval(function() {
                *    channel.fetch();
                * }, 10000);
                *
                * @see http://backbonejs.org/#Model-fetch
                *
                * @param {object}   options  - Optional parameters.
                * @returns {*}
                */
            }, {
               key: 'fetch',
               value: function fetch(options) {
                  var _this2 = this;

                  options = _.extend({ parse: true }, options);
                  var success = options.success;
                  options.success = function (resp) {
                     var serverAttrs = options.parse ? _this2.parse(resp, options) : resp;
                     if (!_this2.set(serverAttrs, options)) {
                        return false;
                     }
                     if (success) {
                        success.call(options.context, _this2, resp, options);
                     }
                     _this2.trigger('sync', _this2, resp, options);
                  };
                  Utils.wrapError(this, options);
                  return this.sync('read', this, options);
               }

               /**
                * Get the current value of an attribute from the model.
                *
                * @example
                * For example:
                * note.get("title")
                *
                * @see http://backbonejs.org/#Model-get
                *
                * @param {*}  attr  - Defines a single attribute key to get a value from the model attributes.
                * @returns {*}
                */
            }, {
               key: 'get',
               value: function get(attr) {
                  return this.attributes[attr];
               }

               /**
                * Returns true if the attribute is set to a non-null or non-undefined value.
                *
                * @example
                * if (note.has("title")) {
                *    ...
                * }
                *
                * @see http://backbonejs.org/#Model-has
                *
                * @param {string}   attr  - Attribute key.
                * @returns {boolean}
                */
            }, {
               key: 'has',
               value: function has(attr) {
                  return !Utils.isNullOrUndef(this.get(attr));
               }

               /**
                * Has the model changed since its last set? If an attribute is passed, returns true if that specific attribute has
                * changed.
                *
                * Note that this method, and the following change-related ones, are only useful during the course of a "change"
                * event.
                *
                * @example
                * book.on("change", function() {
                *    if (book.hasChanged("title")) {
                *       ...
                *    }
                * });
                *
                * @see http://backbonejs.org/#Model-hasChanged
                *
                * @param {string}   attr  - Optional attribute key.
                * @returns {*}
                */
            }, {
               key: 'hasChanged',
               value: function hasChanged(attr) {
                  if (Utils.isNullOrUndef(attr)) {
                     return !_.isEmpty(this.changed);
                  }
                  return _.has(this.changed, attr);
               }

               /**
                * Initialize is an empty function by default. Override it with your own initialization logic.
                *
                * @see http://backbonejs.org/#Model-constructor
                * @abstract
                */
            }, {
               key: 'initialize',
               value: function initialize() {}

               /**
                * Has this model been saved to the server yet? If the model does not yet have an id, it is considered to be new.
                *
                * @see http://backbonejs.org/#Model-isNew
                *
                * @returns {boolean}
                */
            }, {
               key: 'isNew',
               value: function isNew() {
                  return !this.has(this.idAttribute);
               }

               /**
                * Run validate to check the model state.
                *
                * @see http://backbonejs.org/#Model-validate
                *
                * @example
                * class Chapter extends Backbone.Model {
                *    validate(attrs, options) {
                *       if (attrs.end < attrs.start) {
                *       return "can't end before it starts";
                *    }
                * }
                *
                * let one = new Chapter({
                *    title : "Chapter One: The Beginning"
                * });
                *
                * one.set({
                *    start: 15,
                *    end:   10
                * });
                *
                * if (!one.isValid()) {
                *    alert(one.get("title") + " " + one.validationError);
                * }
                *
                * @see http://backbonejs.org/#Model-isValid
                *
                * @param {object}   options  - Optional hash that may provide a `validationError` field to pass to `invalid` event.
                * @returns {boolean}
                */
            }, {
               key: 'isValid',
               value: function isValid(options) {
                  return this._validate({}, _.defaults({ validate: true }, options));
               }

               /**
                * Special-cased proxy to the `_.matches` function from Underscore.
                *
                * @see http://underscorejs.org/#iteratee
                *
                * @param {object|string}  attrs - Predicates to match
                * @returns {boolean}
                */
            }, {
               key: 'matches',
               value: function matches(attrs) {
                  return !!_.iteratee(attrs, this)(this.attributes);
               }

               /* eslint-disable no-unused-vars */
               /**
                * parse is called whenever a model's data is returned by the server, in fetch, and save. The function is passed the
                * raw response object, and should return the attributes hash to be set on the model. The default implementation is
                * a no-op, simply passing through the JSON response. Override this if you need to work with a preexisting API, or
                * better namespace your responses.
                *
                * @see http://backbonejs.org/#Model-parse
                *
                * @param {object}   resp - Usually a JSON object.
                * @param {object}   options - Unused
                * @returns {object} Pass through to set the attributes hash on the model.
                */
            }, {
               key: 'parse',
               value: function parse(resp, options) {
                  /* eslint-enable no-unused-vars */
                  return resp;
               }

               /**
                * During a "change" event, this method can be used to get the previous value of a changed attribute.
                *
                * @example
                * let bill = new Backbone.Model({
                *    name: "Bill Smith"
                * });
                *
                * bill.on("change:name", function(model, name) {
                *    alert("Changed name from " + bill.previous("name") + " to " + name);
                * });
                *
                * bill.set({name : "Bill Jones"});
                *
                * @see http://backbonejs.org/#Model-previous
                *
                * @param {string}   attr  - Attribute key used for lookup.
                * @returns {*}
                */
            }, {
               key: 'previous',
               value: function previous(attr) {
                  if (Utils.isNullOrUndef(attr) || !this._previousAttributes) {
                     return null;
                  }
                  return this._previousAttributes[attr];
               }

               /**
                * Return a copy of the model's previous attributes. Useful for getting a diff between versions of a model, or
                * getting back to a valid state after an error occurs.
                *
                * @see http://backbonejs.org/#Model-previousAttributes
                *
                * @returns {*}
                */
            }, {
               key: 'previousAttributes',
               value: function previousAttributes() {
                  return _.clone(this._previousAttributes);
               }

               /**
                * Save a model to your database (or alternative persistence layer), by delegating to Backbone.sync. Returns a jqXHR
                * if validation is successful and false otherwise. The attributes hash (as in set) should contain the attributes
                * you'd like to change — keys that aren't mentioned won't be altered — but, a complete representation of the
                * resource will be sent to the server. As with set, you may pass individual keys and values instead of a hash. If
                * the model has a validate method, and validation fails, the model will not be saved. If the model isNew, the save
                * will be a "create" (HTTP POST), if the model already exists on the server, the save will be an "update"
                * (HTTP PUT).
                *
                * If instead, you'd only like the changed attributes to be sent to the server, call model.save(attrs,
                * {patch: true}). You'll get an HTTP PATCH request to the server with just the passed-in attributes.
                *
                * Calling save with new attributes will cause a "change" event immediately, a "request" event as the Ajax request
                * begins to go to the server, and a "sync" event after the server has acknowledged the successful change. Pass
                * {wait: true} if you'd like to wait for the server before setting the new attributes on the model.
                *
                * In the following example, notice how our overridden version of Backbone.sync receives a "create" request the
                * first time the model is saved and an "update" request the second time.
                *
                * @example
                * Backbone.sync = (method, model) => {
                *    alert(method + ": " + JSON.stringify(model));
                *    model.set('id', 1);
                * };
                *
                * let book = new Backbone.Model({
                *    title: "The Rough Riders",
                *    author: "Theodore Roosevelt"
                * });
                *
                * book.save();
                *
                * book.save({author: "Teddy"});
                *
                * @see http://backbonejs.org/#Model-save
                *
                * @param {key|object}  key - Either a key defining the attribute to store or a hash of keys / values to store.
                * @param {*}           val - Any type to store in model.
                * @param {object}      options - Optional parameters.
                * @returns {*}
                */
            }, {
               key: 'save',
               value: function save(key, val, options) {
                  var _this3 = this;

                  // Handle both `"key", value` and `{key: value}` -style arguments.
                  var attrs = undefined;
                  if (Utils.isNullOrUndef(key) || typeof key === 'object') {
                     attrs = key;
                     options = val;
                  } else {
                     (attrs = {})[key] = val;
                  }

                  options = _.extend({ validate: true, parse: true }, options);
                  var wait = options.wait;

                  // If we're not waiting and attributes exist, save acts as
                  // `set(attr).save(null, opts)` with validation. Otherwise, check if
                  // the model will be valid when the attributes, if any, are set.
                  if (attrs && !wait) {
                     if (!this.set(attrs, options)) {
                        return false;
                     }
                  } else {
                     if (!this._validate(attrs, options)) {
                        return false;
                     }
                  }

                  // After a successful server-side save, the client is (optionally)
                  // updated with the server-side state.
                  var success = options.success;
                  var attributes = this.attributes;
                  options.success = function (resp) {
                     // Ensure attributes are restored during synchronous saves.
                     _this3.attributes = attributes;
                     var serverAttrs = options.parse ? _this3.parse(resp, options) : resp;
                     if (wait) {
                        serverAttrs = _.extend({}, attrs, serverAttrs);
                     }
                     if (serverAttrs && !_this3.set(serverAttrs, options)) {
                        return false;
                     }
                     if (success) {
                        success.call(options.context, _this3, resp, options);
                     }
                     _this3.trigger('sync', _this3, resp, options);
                  };
                  Utils.wrapError(this, options);

                  // Set temporary attributes if `{wait: true}` to properly find new ids.
                  if (attrs && wait) {
                     this.attributes = _.extend({}, attributes, attrs);
                  }

                  var method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
                  if (method === 'patch' && !options.attrs) {
                     options.attrs = attrs;
                  }
                  var xhr = this.sync(method, this, options);

                  // Restore attributes.
                  this.attributes = attributes;

                  return xhr;
               }

               /**
                * Set a hash of attributes (one or many) on the model. If any of the attributes change the model's state, a "change"
                * event will be triggered on the model. Change events for specific attributes are also triggered, and you can bind
                * to those as well, for example: change:title, and change:content. You may also pass individual keys and values.
                *
                * @example
                * note.set({ title: "March 20", content: "In his eyes she eclipses..." });
                *
                * book.set("title", "A Scandal in Bohemia");
                *
                * @see http://backbonejs.org/#Model-set
                *
                * @param {object|string}  key      - Either a string defining a key or a key / value hash.
                * @param {*|object}       val      - Either any type to store or the shifted options hash.
                * @param {object}         options  - Optional parameters.
                * @returns {*}
                */
            }, {
               key: 'set',
               value: function set(key, val) {
                  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                  if (Utils.isNullOrUndef(key)) {
                     return this;
                  }

                  // Handle both `"key", value` and `{key: value}` -style arguments.
                  var attrs = undefined;
                  if (typeof key === 'object') {
                     attrs = key;
                     options = val || {};
                  } else {
                     (attrs = {})[key] = val;
                  }

                  // Run validation.
                  if (!this._validate(attrs, options)) {
                     return false;
                  }

                  // Extract attributes and options.
                  var unset = options.unset;
                  var silent = options.silent;
                  var changes = [];
                  var changing = this._changing;
                  this._changing = true;

                  if (!changing) {
                     this._previousAttributes = _.clone(this.attributes);
                     this.changed = {};
                  }

                  var current = this.attributes;
                  var changed = this.changed;
                  var prev = this._previousAttributes;

                  // For each `set` attribute, update or delete the current value.
                  for (var attr in attrs) {
                     val = attrs[attr];
                     if (!_.isEqual(current[attr], val)) {
                        changes.push(attr);
                     }

                     if (!_.isEqual(prev[attr], val)) {
                        changed[attr] = val;
                     } else {
                        delete changed[attr];
                     }

                     if (unset) {
                        delete current[attr];
                     } else {
                        current[attr] = val;
                     }
                  }

                  /**
                   * Update the `id`.
                   * @type {*}
                   */
                  this.id = this.get(this.idAttribute);

                  // Trigger all relevant attribute changes.
                  if (!silent) {
                     if (changes.length) {
                        this._pending = options;
                     }
                     for (var i = 0; i < changes.length; i++) {
                        this.trigger('change:' + changes[i], this, current[changes[i]], options);
                     }
                  }

                  // You might be wondering why there's a `while` loop here. Changes can
                  // be recursively nested within `"change"` events.
                  if (changing) {
                     return this;
                  }
                  if (!silent) {
                     while (this._pending) {
                        options = this._pending;
                        this._pending = false;
                        this.trigger('change', this, options);
                     }
                  }
                  this._pending = false;
                  this._changing = false;
                  return this;
               }

               /**
                * Uses Backbone.sync to persist the state of a model to the server. Can be overridden for custom behavior.
                *
                * @see http://backbonejs.org/#Model-sync
                *
                * @returns {*}
                */
            }, {
               key: 'sync',
               value: function sync() {
                  return BackboneProxy.backbone.sync.apply(this, arguments);
               }

               /**
                * Return a shallow copy of the model's attributes for JSON stringification. This can be used for persistence,
                * serialization, or for augmentation before being sent to the server. The name of this method is a bit confusing,
                * as it doesn't actually return a JSON string — but I'm afraid that it's the way that the JavaScript API for
                * JSON.stringify works.
                *
                * @example
                * let artist = new Backbone.Model({
                *    firstName: "Wassily",
                *    lastName: "Kandinsky"
                * });
                *
                * artist.set({ birthday: "December 16, 1866" });
                *
                * alert(JSON.stringify(artist));
                *
                * @see http://backbonejs.org/#Model-toJSON
                *
                * @returns {object} JSON representation of this model.
                */
            }, {
               key: 'toJSON',
               value: function toJSON() {
                  return _.clone(this.attributes);
               }

               /**
                * Remove an attribute by deleting it from the internal attributes hash. Fires a "change" event unless silent is
                * passed as an option.
                *
                * @see http://backbonejs.org/#Model-unset
                *
                * @param {object|string}  attr - Either a key defining the attribute or a hash of keys / values to unset.
                * @param {object}         options - Optional parameters.
                * @returns {*}
                */
            }, {
               key: 'unset',
               value: function unset(attr, options) {
                  return this.set(attr, void 0, _.extend({}, options, { unset: true }));
               }

               /**
                * Returns the relative URL where the model's resource would be located on the server. If your models are located
                * somewhere else, override this method with the correct logic. Generates URLs of the form: "[collection.url]/[id]"
                * by default, but you may override by specifying an explicit urlRoot if the model's collection shouldn't be taken
                * into account.
                *
                * Delegates to Collection#url to generate the URL, so make sure that you have it defined, or a urlRoot property,
                * if all models of this class share a common root URL. A model with an id of 101, stored in a Backbone.Collection
                * with a url of "/documents/7/notes", would have this URL: "/documents/7/notes/101"
                *
                * @see http://backbonejs.org/#Model-url
                * @see http://backbonejs.org/#Model-urlRoot
                *
                * @returns {string}
                */
            }, {
               key: 'url',
               value: function url() {
                  var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || Utils.urlError();
                  if (this.isNew()) {
                     return base;
                  }
                  var id = this.get(this.idAttribute);
                  return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
               }

               /**
                * Run validation against the next complete set of model attributes, returning `true` if all is well. Otherwise,
                * fire an `"invalid"` event.
                *
                * @protected
                * @param {object}   attrs    - attribute hash
                * @param {object}   options  - Optional parameters
                * @returns {boolean}
                */
            }, {
               key: '_validate',
               value: function _validate(attrs, options) {
                  if (!options.validate || !this.validate) {
                     return true;
                  }
                  attrs = _.extend({}, this.attributes, attrs);
                  var error = this.validationError = this.validate(attrs, options) || null;
                  if (!error) {
                     return true;
                  }
                  this.trigger('invalid', this, error, _.extend(options, { validationError: error }));
                  return false;
               }
            }]);

            return Model;
         })(Events);

         Model.prototype.idAttribute = 'id';

         // Underscore methods that we want to implement on the Model, mapped to the number of arguments they take.
         modelMethods = {
            keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
            omit: 0, chain: 1, isEmpty: 1
         };

         // Mix in each Underscore method as a proxy to `Model#attributes`.
         Utils.addUnderscoreMethods(Model, modelMethods, 'attributes');

         /**
          * Exports the Model class.
          */

         _export('default', Model);
      }
   };
});

$__System.register('44', ['10', '41', '60', 'c', 'd'], function (_export) {
   var _, BackboneProxy, _toConsumableArray, _createClass, _classCallCheck, s_ADD_METHOD, s_CB, s_MODEL_MATCHER, Utils;

   return {
      setters: [function (_3) {
         _ = _3['default'];
      }, function (_4) {
         BackboneProxy = _4['default'];
      }, function (_2) {
         _toConsumableArray = _2['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         // Private / internal methods ---------------------------------------------------------------------------------------

         /**
          * Creates an optimized function that dispatches to an associated Underscore function.
          *
          * @param {number}   length      - Length of variables for given Underscore method to dispatch.
          * @param {string}   method      - Function name of Underscore to invoke.
          * @param {string}   attribute   - Attribute to associate with the Underscore function invoked.
          * @returns {Function}
          */
         'use strict';

         s_ADD_METHOD = function s_ADD_METHOD(length, method, attribute) {
            switch (length) {
               case 1:
                  return function () {
                     return _[method](this[attribute]);
                  };
               case 2:
                  return function (value) {
                     return _[method](this[attribute], value);
                  };
               case 3:
                  return function (iteratee, context) {
                     return _[method](this[attribute], s_CB(iteratee), context);
                  };
               case 4:
                  return function (iteratee, defaultVal, context) {
                     return _[method](this[attribute], s_CB(iteratee), defaultVal, context);
                  };
               default:
                  return function () {
                     var args = Array.prototype.slice.call(arguments);
                     args.unshift(this[attribute]);
                     return _[method].apply(_, _toConsumableArray(args));
                  };
            }
         };

         /**
          * Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
          *
          * @param {*} iteratee  -
          * @returns {*}
          */

         s_CB = function s_CB(iteratee) {
            if (_.isFunction(iteratee)) {
               return iteratee;
            }
            if (_.isObject(iteratee) && !Utils.isModel(iteratee)) {
               return s_MODEL_MATCHER(iteratee);
            }
            if (_.isString(iteratee)) {
               return function (model) {
                  return model.get(iteratee);
               };
            }
            return iteratee;
         };

         /**
          * Creates a matching function against `attrs`.
          *
          * @param {*} attrs -
          * @returns {Function}
          */

         s_MODEL_MATCHER = function s_MODEL_MATCHER(attrs) {
            var matcher = _.matches(attrs);
            return function (model) {
               return matcher(model.attributes);
            };
         };

         /**
          * Provides static utility functions.
          * --------
          *
          * Proxy Backbone class methods to Underscore functions, wrapping the model's `attributes` object or collection's
          * `models` array behind the scenes.
          *
          * `Function#apply` can be slow so we use the method's arg count, if we know it.
          *
          * @example
          * collection.filter(function(model) { return model.get('age') > 10 });
          * collection.each(this.addView);
          */

         Utils = (function () {
            function Utils() {
               _classCallCheck(this, Utils);
            }

            _createClass(Utils, null, [{
               key: 'addUnderscoreMethods',

               /**
                * Adds Underscore methods if they exist from keys of the `methods` hash to `Class` running against the variable
                * defined by `attribute`
                *
                * @param {Class}    Class       -  Class to add Underscore methods to.
                * @param {object}   methods     -  Hash with keys as method names and values as argument length.
                * @param {string}   attribute   -  The variable to run Underscore methods against. Often "attributes"
                */
               value: function addUnderscoreMethods(Class, methods, attribute) {
                  _.each(methods, function (length, method) {
                     if (_[method]) {
                        Class.prototype[method] = s_ADD_METHOD(length, method, attribute);
                     }
                  });
               }

               /**
                * Method for checking whether an unknown variable is an instance of `Backbone.Model`.
                *
                * @param {*}  unknown - Variable to test.
                * @returns {boolean}
                */
            }, {
               key: 'isModel',
               value: function isModel(unknown) {
                  return unknown instanceof BackboneProxy.backbone.Model;
               }

               /**
                * Method for checking whether a variable is undefined or null.
                *
                * @param {*}  unknown - Variable to test.
                * @returns {boolean}
                */
            }, {
               key: 'isNullOrUndef',
               value: function isNullOrUndef(unknown) {
                  return unknown === null || typeof unknown === 'undefined';
               }

               /**
                * Throw an error when a URL is needed, and none is supplied.
                */
            }, {
               key: 'urlError',
               value: function urlError() {
                  throw new Error('A "url" property or function must be specified');
               }

               /**
                * Wrap an optional error callback with a fallback error event.
                *
                * @param {Model|Collection}  model    - Model or Collection target to construct and error callback against.
                * @param {object}            options  - Options hash to store error callback inside.
                */
            }, {
               key: 'wrapError',
               value: function wrapError(model, options) {
                  var error = options.error;
                  options.error = function (resp) {
                     if (error) {
                        error.call(options.context, model, resp, options);
                     }
                     model.trigger('error', model, resp, options);
                  };
               }
            }]);

            return Utils;
         })();

         _export('default', Utils);
      }
   };
});

$__System.register('61', ['4', '62', 'a', 'b', 'c', 'd'], function (_export) {
   var Parse, encode, _get, _inherits, _createClass, _classCallCheck, BackboneParseObject;

   return {
      setters: [function (_) {
         Parse = _['default'];
      }, function (_2) {
         encode = _2['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         /**
          * Provides overrides necessary to integrate Parse serialization / deserialization with Backbone.
          */
         'use strict';

         BackboneParseObject = (function (_Parse$Object) {
            _inherits(BackboneParseObject, _Parse$Object);

            /**
             * Provides a constructor for clone.
             *
             * @param {string | object}   className - class name of object that has className field.
             * @param {object}            attributes - attributes hash.
             * @param {object}            options - Optional parameters
             */

            function BackboneParseObject(className, attributes, options) {
               _classCallCheck(this, BackboneParseObject);

               _get(Object.getPrototypeOf(BackboneParseObject.prototype), 'constructor', this).call(this, className, attributes, options);
            }

            /**
             * Creates a new BackboneParseObject with identical attributes to this one.
             * @method clone
             * @return {BackboneParseObject}
             */

            _createClass(BackboneParseObject, [{
               key: 'clone',
               value: function clone() {
                  var clone = new this.constructor();

                  if (!clone.className) {
                     clone.className = this.className;
                  }
                  if (clone.set) {
                     clone.set(this.attributes);
                  }

                  return clone;
               }

               /**
                * Defers to Parse.Object _getSaveJSON for serializing and then filters all results assigning associated
                * `parseObject` entries which indicate a serialized Backbone.Model (ParseModel) to the entry itself which is
                * what Parse expects to receive.
                *
                * @returns {*}
                * @private
                */
            }, {
               key: '_getSaveJSON',
               value: function _getSaveJSON() {
                  var json = _get(Object.getPrototypeOf(BackboneParseObject.prototype), '_getSaveJSON', this).call(this);

                  for (var attr in json) {
                     if (typeof json[attr].parseObject === 'object') {
                        json[attr] = json[attr].parseObject;
                     }
                  }

                  return json;
               }

               /**
                * Returns a JSON version of the object suitable for saving to Parse.
                *
                * There is a subtle difference in this version which is if `attrs[attr].parseObject === 'object'` then the
                * associated `parseObject` is encoded directly.
                *
                * @param {*}  seen - Provides an array of previously seen entries.
                * @return {Object}
                * @override
                */
            }, {
               key: 'toJSON',
               value: function toJSON(seen) {
                  var seenEntry = this.id ? this.className + ':' + this.id : this;
                  seen = seen || [seenEntry];

                  var json = {};
                  var attrs = this.attributes;

                  for (var attr in attrs) {
                     if ((attr === 'createdAt' || attr === 'updatedAt') && attrs[attr].toJSON) {
                        json[attr] = attrs[attr].toJSON();
                     } else if (typeof attrs[attr].parseObject === 'object') {
                        json[attr] = encode(attrs[attr].parseObject, false, false, seen);
                     } else {
                        json[attr] = encode(attrs[attr], false, false, seen);
                     }
                  }
                  var pending = this._getPendingOps();
                  for (var attr in pending[0]) {
                     json[attr] = pending[0][attr].toJSON();
                  }

                  if (this.id) {
                     json.objectId = this.id;
                  }
                  return json;
               }
            }]);

            return BackboneParseObject;
         })(Parse.Object);

         _export('default', BackboneParseObject);
      }
   };
});

$__System.register('4a', ['4', '10', '36', '43', '44', '45', '61', 'a', 'b', 'c', 'd', '4b'], function (_export) {
   var Parse, _, Utils, Model, BBUtils, Debug, BackboneParseObject, _get, _inherits, _createClass, _classCallCheck, _Promise, ParseModel;

   return {
      setters: [function (_3) {
         Parse = _3['default'];
      }, function (_2) {
         _ = _2['default'];
      }, function (_7) {
         Utils = _7['default'];
      }, function (_4) {
         Model = _4['default'];
      }, function (_5) {
         BBUtils = _5['default'];
      }, function (_8) {
         Debug = _8['default'];
      }, function (_6) {
         BackboneParseObject = _6['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }, function (_b2) {
         _Promise = _b2['default'];
      }],
      execute: function () {

         /**
          * ParseModel - Models are the heart of any JavaScript application. (http://backbonejs.org/#Model)
          * --------------
          *
          * This implementation of Backbone.Model is backed by a ParseObject. If a ParseObject is not provided in `options`
          * then a `className` for the associated table must be defined as options.className or a getter method such as
          * `get className() { return '<CLASSNAME>'; }`. All methods that trigger synchronization return an ES6 Promise or a
          * ParsePromise. This includes the following methods: destroy, fetch, save. Rather than passing in a error or success
          * callback one can use promises to post a follow up chain of actions to complete.
          *
          * Models are the heart of any JavaScript application, containing the interactive data as well as a large part of the
          * logic surrounding it: conversions, validations, computed properties, and access control.
          *
          * Backbone-Parse-ES6 supports the older "extend" functionality of the Parse SDK. You can still use "extend" to extend
          * Backbone.Model with your domain-specific methods, and Model provides a basic set of functionality for managing
          * changes. Refer to `modelExtend` which provides the "extend" functionality for ParseModel. It differs from the
          * standard Backbone extend functionality such that the first parameter requires a class name string for the
          * associated table.
          *
          * It is recommended though to use ES6 syntax for working with Backbone-Parse-ES6 foregoing the older "extend"
          * mechanism.
          *
          * Create a new model with the specified attributes. A client id (`cid`) is automatically generated & assigned for you.
          *
          * If you pass a {collection: ...} as the options, the model gains a collection property that will be used to indicate
          * which collection the model belongs to, and is used to help compute the model's url. The model.collection property is
          * normally created automatically when you first add a model to a collection. Note that the reverse is not true, as
          * passing this option to the constructor will not automatically add the model to the collection. Useful, sometimes.
          *
          * If {parse: true} is passed as an option, the attributes will first be converted by parse before being set on the
          * model.
          *
          * Please see the `Model` documentation for relevant information about the parent class / implementation.
          *
          * @example
          * import Backbone from 'backbone';
          *
          * export default class MyModel extends Backbone.Model
          * {
          *    initialize() { alert('initialized!); }
          * }
          *
          * older extend example:
          * export default Backbone.Model.extend('<CLASSNAME>',
          * {
          *    initialize: { alert('initialized!); }
          * });
          *
          * @example
          * The following methods return a promise - destroy, fetch, save. An example on using promises for save:
          *
          * model.save().then(() =>
          * {
          *    // success
          * },
          * (error) =>
          * {
          *    // error
          * });
          */
         'use strict';

         ParseModel = (function (_Model) {
            _inherits(ParseModel, _Model);

            /**
             * When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on
             * the model. If you define an initialize function, it will be invoked when the model is created.
             *
             * @param {object}   attributes - Optional attribute hash of original values to set.
             * @param {object}   options    - Optional parameters
             */

            function ParseModel() {
               var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
               var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

               _classCallCheck(this, ParseModel);

               _get(Object.getPrototypeOf(ParseModel.prototype), 'constructor', this).call(this, attributes, _.extend({ abortCtor: true }, options));

               // Allows child classes to abort constructor execution.
               if (_.isBoolean(options.abortCtor) && options.abortCtor) {
                  return;
               }

               var hasClassNameGetter = !_.isUndefined(this.className);
               var hasCollectionGetter = !_.isUndefined(this.collection);
               var hasSubclassGetter = !_.isUndefined(this.subClasses);

               if (hasClassNameGetter) {
                  if (!_.isString(this.className)) {
                     throw new TypeError('ctor - getter for className is not a string.');
                  }
               }

               if (options.subClasses && !hasSubclassGetter) {
                  /**
                   * Object hash of name / class to register as sub classes.
                   * @type {object}
                   */
                  this.subClasses = options.subClasses;
               }

               // Verify any sub class data.
               if (this.subClasses) {
                  if (!_.isObject(this.subClasses)) {
                     throw new TypeError('ctor - subClasses is not an object hash.');
                  }

                  _.each(this.subClasses, function (value, key) {
                     if (!_.isString(key)) {
                        throw new TypeError('ctor - subClass key is not a string.');
                     }

                     if (!Utils.isTypeOf(value, ParseModel)) {
                        throw new TypeError('ctor - subClass is not a sub class of ParseModel for key: ' + key);
                     }
                  });
               }

               var adjustedClassName = undefined;

               var classNameOrParseObject = options.parseObject || options.className;

               Debug.log('ParseModel - ctor - 0 - options.parseObject: ' + options.parseObject, true);

               if (classNameOrParseObject instanceof Parse.Object) {
                  var parseObject = classNameOrParseObject;

                  // Insure that any getter for className is the same as the Parse.Object
                  if (hasClassNameGetter && this.className !== parseObject.className) {
                     throw new Error('ctor - getter className \'' + this.className + '\n             \' does not equal \'parseObject\' className \'' + parseObject.className + '\'.');
                  }

                  if (!(parseObject instanceof BackboneParseObject)) {
                     /**
                      * Parse proxy ParseObject
                      * @type {BackboneParseObject}
                      */
                     this.parseObject = new BackboneParseObject(parseObject.className, parseObject.attributes);
                     this.parseObject.id = parseObject.id;
                     this.parseObject._localId = parseObject._localId;
                  } else {
                     this.parseObject = parseObject;
                  }

                  adjustedClassName = this.parseObject.className;
               } else // Attempt to create Parse.Object from classNameOrParseObject, getter, or from "extend" construction.
                  {
                     if (_.isString(classNameOrParseObject)) {
                        adjustedClassName = classNameOrParseObject;
                        this.parseObject = new BackboneParseObject(adjustedClassName, attributes);
                     }
                     // Check for getter "get className()" usage.
                     else if (hasClassNameGetter) {
                           this.parseObject = new BackboneParseObject(this.className, attributes);
                        }
                        // Check for className via "extend" usage.
                        else if (!_.isUndefined(this.__proto__ && _.isString(this.__proto__.constructor.className))) {
                              adjustedClassName = this.__proto__.constructor.className;
                              this.parseObject = new BackboneParseObject(adjustedClassName, attributes);
                           }
                  }

               if (_.isUndefined(this.parseObject)) {
                  throw new TypeError('ctor - classNameOrParseObject is not a string or BackboneParseObject.');
               }

               if (!hasClassNameGetter) {
                  /**
                   * Parse class name
                   * @type {string}
                   */
                  this.className = adjustedClassName;
               }

               // Register the given subClasses if an object hash exists.
               if (this.subClasses) {
                  _.each(this.subClasses, function (value, key) {
                     Parse.Object.registerSubclass(key, value);
                  });
               }

               var attrs = attributes || {};

               options.parse = true;
               options.updateParseObject = _.isBoolean(options.updateParseObject) ? options.updateParseObject : true;

               /**
                * The prefix is used to create the client id which is used to identify models locally.
                * You may want to override this if you're experiencing name clashes with model ids.
                *
                * @type {string}
                */
               this.cidPrefix = 'c';

               /**
                * Client side ID
                * @type {number}
                */
               this.cid = _.uniqueId(this.cidPrefix);

               /**
                * The hash of attributes for this model.
                * @type {object}
                */
               this.attributes = {};

               if (options.collection && !hasCollectionGetter) {
                  /**
                   * A potentially associated collection.
                   * @type {Collection}
                   */
                  this.collection = options.collection;
               }

               /**
                * A hash of attributes whose current and previous value differ.
                * @type {object}
                */
               this.changed = {};

               /**
                * The value returned during the last failed validation.
                * @type {*}
                */
               this.validationError = null;

               // Allows child classes to postpone initialization.
               if (_.isBoolean(options.abortCtorInit) && options.abortCtorInit) {
                  return;
               }

               if (options.parse) {
                  attrs = this.parse(this.parseObject, options) || {};
               }

               attrs = _.defaults({}, attrs, _.result(this, 'defaults'));

               this.set(attrs, options);

               this.initialize(this, arguments);
            }

            // The Parse.Object id is set in Backbone.Model attributes to _parseObjectId. In set any change to _parseObjectId is not
            // propagated to the associated Parse.Object. Note that the Parse.Object id is also set to this.id in "parse()".

            /**
             * Returns a new instance of the model with identical attributes.
             *
             * @see http://backbonejs.org/#Model-clone
             *
             * @returns {*}
             */

            _createClass(ParseModel, [{
               key: 'clone',
               value: function clone() {
                  return new this.constructor({}, { parseObject: this.parseObject.clone() });
               }

               /**
                * Destroys the model on the server by delegating delete request to Backbone.sync and the associated ParseObject.
                * Returns ParsePromise or ES6 Promise if the model isNew. Accepts success and error callbacks in the options hash,
                * which will be passed (model, response, options). Triggers a "destroy" event on the model, which will bubble up
                * through any collections that contain it, and a "sync" event, after the server has successfully acknowledged the
                * model's deletion. Pass {wait: true} if you'd like to wait for the server to respond before removing the model
                * from the collection.
                *
                * @example
                * book.destroy().then(() => {
                *    // do something
                * };
                *
                * @see http://backbonejs.org/#Model-destroy
                *
                * @param {object}   options - Provides optional properties used in destroying a model.
                * @returns {Promise|ParsePromise}
                */
            }, {
               key: 'destroy',
               value: function destroy(options) {
                  var _this = this;

                  options = options ? _.clone(options) : {};
                  var success = options.success;
                  var wait = options.wait;

                  var destroy = function destroy() {
                     _this.stopListening();
                     _this.trigger('destroy', _this, _this.collection, options);
                  };

                  options.success = function (resp) {
                     if (wait) {
                        destroy();
                     }
                     if (success) {
                        success.call(options.context, _this, resp, options);
                     }
                     if (!_this.isNew()) {
                        _this.trigger('sync', _this, resp, options);
                     }
                  };

                  var xhr = undefined;

                  if (this.isNew()) {
                     xhr = new _Promise(function (resolve) {
                        _.defer(options.success);
                        resolve();
                     });
                  } else {
                     BBUtils.wrapError(this, options);
                     xhr = this.sync('delete', this, options);
                  }

                  if (!wait) {
                     destroy();
                  }

                  return xhr;
               }

               /**
                * Has this model been saved to the server yet? If the model does not yet have an id, it is considered to be new.
                *
                * @see http://backbonejs.org/#Model-isNew
                *
                * @returns {boolean}
                */
            }, {
               key: 'isNew',
               value: function isNew() {
                  return _.isUndefined(this.id);
               }

               /* eslint-disable no-unused-vars */
               /**
                * parse is called whenever a model's data is returned by the server, in fetch, and save. The function is passed the
                * raw response object, and should return the attributes hash to be set on the model. This implementation
                * requires a ParseObject and the attributes are directly taken from the attributes of the ParseObject. To keep
                * parity with the Parse SDK the ID of the ParseObject is set as `this.id`.
                *
                * @see http://backbonejs.org/#Model-parse
                *
                * @param {object}   resp - ParseObject
                * @param {object}   options - May include options.parseObject.
                * @returns {object} Attributes from the ParseObject.
                */
            }, {
               key: 'parse',
               value: function parse(resp, options) {
                  /* eslint-enable no-unused-vars */

                  Debug.log('ParseModel - parse - 0 - resp instanceof Parse.Object: ' + (resp instanceof Parse.Object), true);
                  Debug.log('ParseModel - parse - 1 - ParseModel.prototype.idAttribute: ' + ParseModel.prototype.idAttribute);

                  var merged = undefined;

                  if (resp instanceof Parse.Object) {
                     /**
                      * Update the `id`.
                      * @type {*}
                      */
                     this.id = resp._getId();

                     // Store the parse ID in local attributes; Note that it won't be propagated in "set()"
                     var mergeId = {};
                     mergeId[ParseModel.prototype.idAttribute] = this.id;

                     Debug.log('ParseModel - parse - 2 - mergeId: ' + mergeId[ParseModel.prototype.idAttribute]);

                     merged = _.extend(mergeId, resp.attributes);

                     Debug.log('ParseModel - parse - 3 - merged: ' + JSON.stringify(merged));
                  } else if (_.isObject(resp)) {
                     var parseObjectId = resp[ParseModel.prototype.idAttribute];

                     Debug.log('ParseModel - parse - 4 - resp is an Object / existing model - parseObjectId: ' + parseObjectId + '; resp: ' + JSON.stringify(resp));

                     if (!_.isUndefined(parseObjectId) && this.id !== parseObjectId) {
                        Debug.log('ParseModel - parse - 5 - this.id !== parseObjectId; this.id: ' + this.id + '; parseObjectId: ' + parseObjectId);

                        this.id = parseObjectId;
                     }

                     merged = resp;
                  }

                  return merged;
               }

               /**
                * Save a model to your database (or alternative persistence layer), by delegating to Backbone.sync. Returns a
                * Promise. The attributes hash (as in set) should contain the attributes you'd like to change — keys that aren't
                * mentioned won't be altered — but, a complete representation of the resource will be sent to the server. As with
                * set, you may pass individual keys and values instead of a hash. If the model has a validate method, and validation
                * fails, the model will not be saved. If the model isNew, the save will be a "create" (HTTP POST), if the model
                * already exists on the server, the save will be an "update" (HTTP PUT).
                *
                * If instead, you'd only like the changed attributes to be sent to the server, call model.save(attrs,
                * {patch: true}). You'll get an HTTP PATCH request to the server with just the passed-in attributes.
                *
                * Calling save with new attributes will cause a "change" event immediately, a "request" event as the Ajax request
                * begins to go to the server, and a "sync" event after the server has acknowledged the successful change. Pass
                * {wait: true} if you'd like to wait for the server before setting the new attributes on the model.
                *
                * In particular this method is overridden to be able to support resolving Parse.Pointer deserializing which
                * requires the deserialized data to be parsed by the associated models.
                *
                * @example
                * const book = new Backbone.Model({
                *    title: 'The Rough Riders',
                *    author: 'Theodore Roosevelt'
                *    className: 'Book'
                * });
                *
                * book.save();
                *
                * book.save({author: "Teddy"});
                *
                * or use full ES6 syntax:
                *
                * class Book extends Backbone.Model
                * {
                *    get className() { return 'Book'; }
                *    get subClass() { return Book; }     // If subClass is set this class will be registered with Parse.
                * }                                      // Object.registerSubclass()
                *
                * const book = new Book({
                *    title: 'The Rough Riders',
                *    author: 'Theodore Roosevelt'
                * });
                *
                * @see http://backbonejs.org/#Model-save
                *
                * @param {key|object}  key - Either a key defining the attribute to store or a hash of keys / values to store.
                * @param {*}           val - Any type to store in model.
                * @param {object}      options - Optional parameters.
                * @returns {Promise}
                */
            }, {
               key: 'save',
               value: function save(key, val, options) {
                  var _this2 = this;

                  var attrs = undefined;

                  if (Utils.isNullOrUndef(key) || typeof key === 'object') {
                     Debug.log('ParseModel - save - 0');

                     attrs = key;
                     options = val;
                  } else {
                     Debug.log('ParseModel - save - 1');

                     (attrs = {})[key] = val;
                  }

                  // Save any previous options.success function.
                  var success = !Utils.isNullOrUndef(options) ? options.success : undefined;

                  Debug.log('ParseModel - save - 2 - options.success defined: ' + (success !== undefined));

                  options = options || {};

                  options.success = function (model, resp, options) {
                     // Execute previously cached success function. Must do this first before resolving any potential
                     // child object changes.
                     if (success) {
                        Debug.log('ParseModel - save - 3 - invoking original options.success.');
                        success.call(options.context, _this2, resp, options);
                     }

                     Debug.log('ParseModel - save - 4 - invoking ParseModel success.');

                     var modelAttrs = _this2.attributes;
                     for (var attr in modelAttrs) {
                        var field = modelAttrs[attr];

                        // Here is the key part as if the associated Parse.Object id is different than the model id it
                        // needs to be parsed and data set to the Backbone.Model.
                        if (field.parseObject && field.parseObject.id !== field.id) {
                           field.set(field.parse(field.parseObject), options);
                        }
                     }
                  };

                  return _get(Object.getPrototypeOf(ParseModel.prototype), 'save', this).call(this, attrs, options);
               }

               /**
                * Set a hash of attributes (one or many) on the model and potentially on the associated ParseObject. If any of the
                * attributes change the model's state, a "change" event will be triggered on the model. Change events for specific
                * attributes are also triggered, and you can bind to those as well, for example: change:title, and change:content.
                * You may also pass individual keys and values. In addition option.updateParseObject may contain a boolean to
                * indicate whether the associated ParseObject should be updated.
                *
                * @example
                * note.set({ title: "March 20", content: "In his eyes she eclipses..." });
                *
                * book.set("title", "A Scandal in Bohemia");
                *
                * @see http://backbonejs.org/#Model-set
                *
                * @param {object|string}  key      - Either a string defining a key or a key / value hash.
                * @param {*|object}       val      - Either any type to store or the shifted options hash.
                * @param {object}         options  - Optional parameters.
                * @returns {*}
                */
            }, {
               key: 'set',
               value: function set(key, val) {
                  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                  if (Utils.isNullOrUndef(key)) {
                     return this;
                  }

                  // Handle both `"key", value` and `{key: value}` -style arguments.
                  var attrs = undefined;
                  if (typeof key === 'object') {
                     attrs = key;
                     options = val || {};
                  } else {
                     (attrs = {})[key] = val;
                  }

                  // Run validation.
                  if (!this._validate(attrs, options)) {
                     return false;
                  }

                  // Extract attributes and options.
                  var unset = options.unset;
                  var silent = options.silent;
                  var updateParseObject = !_.isUndefined(options.updateParseObject) ? options.updateParseObject : true;

                  var changes = [];
                  var changing = this._changing;
                  this._changing = true;

                  Debug.log('ParseModel - set - 0 - changing: ' + changing + '; attrs: ' + JSON.stringify(attrs) + '; options: ' + JSON.stringify(options), true);

                  if (!changing) {
                     this._previousAttributes = _.clone(this.attributes);
                     this.changed = {};
                  }

                  var current = this.attributes;
                  var changed = this.changed;
                  var prev = this._previousAttributes;

                  // For each `set` attribute, update or delete the current value.
                  for (var attr in attrs) {
                     val = attrs[attr];

                     if (!_.isEqual(current[attr], val)) {
                        Debug.log('ParseModel - set - 1 - current[attr] != val for key: ' + attr);
                        changes.push(attr);
                     }

                     var actuallyChanged = false;

                     if (!_.isEqual(prev[attr], val)) {
                        Debug.log('ParseModel - set - 2 - prev[attr] != val for key: ' + attr);

                        changed[attr] = val;
                        actuallyChanged = true;
                     } else {
                        Debug.log('ParseModel - set - 3 - prev[attr] == val delete changed for key: ' + attr);
                        delete changed[attr];
                     }

                     if (unset) {
                        var unsetSuccess = !updateParseObject;

                        // Ignore any change to the Parse.Object id
                        if (attr === ParseModel.prototype.idAttribute) {
                           continue;
                        }

                        if (updateParseObject && this.parseObject !== null && attr !== ParseModel.prototype.idAttribute) {
                           // Parse.Object returns itself on success
                           unsetSuccess = this.parseObject === this.parseObject.unset(attr);

                           Debug.log('ParseModel - set - 4 - unset Parse.Object - attr: ' + attr + '; unsetSuccess: ' + unsetSuccess);
                        }

                        if (unsetSuccess) {
                           delete current[attr];
                        }
                     } else {
                        var setSuccess = !updateParseObject || attr === ParseModel.prototype.idAttribute;

                        if (actuallyChanged && updateParseObject && this.parseObject !== null && attr !== ParseModel.prototype.idAttribute) {
                           // Parse.Object returns itself on success
                           setSuccess = this.parseObject === this.parseObject.set(attr, val, options);

                           Debug.log('ParseModel - set - 5 - set Parse.Object - attr: ' + attr + '; setSuccess: ' + setSuccess);
                        }

                        if (actuallyChanged && setSuccess) {
                           current[attr] = val;
                        }
                     }
                  }

                  // Trigger all relevant attribute changes.
                  if (!silent) {
                     if (changes.length) {
                        this._pending = options;
                     }
                     for (var i = 0; i < changes.length; i++) {
                        this.trigger('change:' + changes[i], this, current[changes[i]], options);
                        Debug.log('ParseModel - set - 6 - trigger - changeKey: ' + changes[i]);
                     }
                  }

                  // You might be wondering why there's a `while` loop here. Changes can
                  // be recursively nested within `"change"` events.
                  if (changing) {
                     return this;
                  }
                  if (!silent) {
                     while (this._pending) {
                        options = this._pending;
                        this._pending = false;
                        this.trigger('change', this, options);
                        Debug.log('ParseModel - set - 7 - trigger - change');
                     }
                  }
                  this._pending = false;
                  this._changing = false;
                  return this;
               }

               /**
                * Return a copy of the model's `attributes` object.
                *
                * @returns {object} JSON representation of this model.
                */
            }, {
               key: 'toJSON',
               value: function toJSON() {
                  return this.parseObject.toJSON();
               }

               /**
                * This is an unsupported operation for backbone-parse-es6.
                */
            }, {
               key: 'url',
               value: function url() {
                  throw new Error('ParseModel - url() - Unsupported Operation.');
               }
            }]);

            return ParseModel;
         })(Model);

         ParseModel.prototype.idAttribute = '_parseObjectId';

         /**
          * Exports the ParseModel class.
          */

         _export('default', ParseModel);
      }
   };
});

$__System.registerDynamic("63", ["64", "1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('64'),
      defined = $__require('1f');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2e", ["63", "21"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $at = $__require('63')(true);
  $__require('21')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5e", ["51"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ITERATOR = $__require('51')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("65", ["1d", "15", "66", "67", "68", "69", "6a", "5e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('1d'),
      $export = $__require('15'),
      toObject = $__require('66'),
      call = $__require('67'),
      isArrayIter = $__require('68'),
      toLength = $__require('69'),
      getIterFn = $__require('6a');
  $export($export.S + $export.F * !$__require('5e')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping)
        mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6b", ["2e", "65", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('2e');
  $__require('65');
  module.exports = $__require('17').Array.from;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6c", ["6b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('6b'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("60", ["6c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Array$from = $__require('6c')["default"];
  exports["default"] = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];
      return arr2;
    } else {
      return _Array$from(arr);
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register('6d', ['10', '41', '46', '60', 'a', 'b', 'c', 'd'], function (_export) {
   var _, BackboneProxy, Events, _toConsumableArray, _get, _inherits, _createClass, _classCallCheck, s_ESCAPE_REGEX, s_NAMED_PARAM, s_OPTIONAL_PARAM, s_SPLAT_PARAM, s_BIND_ROUTES, s_EXTRACT_PARAMETERS, s_ROUTE_TO_REGEX, Router;

   return {
      setters: [function (_3) {
         _ = _3['default'];
      }, function (_4) {
         BackboneProxy = _4['default'];
      }, function (_5) {
         Events = _5['default'];
      }, function (_2) {
         _toConsumableArray = _2['default'];
      }, function (_a) {
         _get = _a['default'];
      }, function (_b) {
         _inherits = _b['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         // Private / internal methods ---------------------------------------------------------------------------------------

         /**
          * Cached regular expressions for matching named param parts and splatted parts of route strings.
          * @type {RegExp}
          */
         'use strict';

         s_ESCAPE_REGEX = /[\-{}\[\]+?.,\\\^$|#\s]/g;
         s_NAMED_PARAM = /(\(\?)?:\w+/g;
         s_OPTIONAL_PARAM = /\((.*?)\)/g;
         s_SPLAT_PARAM = /\*\w+/g;

         /**
          * Bind all defined routes to `Backbone.history`. We have to reverse the order of the routes here to support behavior
          * where the most general routes can be defined at the bottom of the route map.
          *
          * @param {Router}   router   - Instance of `Backbone.Router`.
          */

         s_BIND_ROUTES = function s_BIND_ROUTES(router) {
            if (!router.routes) {
               return;
            }

            router.routes = _.result(router, 'routes');

            _.each(_.keys(router.routes), function (route) {
               router.route(route, router.routes[route]);
            });
         };

         /**
          * Given a route, and a URL fragment that it matches, return the array of extracted decoded parameters. Empty or
          * unmatched parameters will be treated as `null` to normalize cross-browser behavior.
          *
          * @param {string}   route - A route string or regex.
          * @param {string}   fragment - URL fragment.
          * @returns {*}
          */

         s_EXTRACT_PARAMETERS = function s_EXTRACT_PARAMETERS(route, fragment) {
            var params = route.exec(fragment).slice(1);

            return _.map(params, function (param, i) {
               // Don't decode the search params.
               if (i === params.length - 1) {
                  return param || null;
               }
               return param ? decodeURIComponent(param) : null;
            });
         };

         /**
          * Convert a route string into a regular expression, suitable for matching against the current location hash.
          *
          * @param {string}   route - A route string or regex.
          * @returns {RegExp}
          */

         s_ROUTE_TO_REGEX = function s_ROUTE_TO_REGEX(route) {
            route = route.replace(s_ESCAPE_REGEX, '\\$&').replace(s_OPTIONAL_PARAM, '(?:$1)?').replace(s_NAMED_PARAM, function (match, optional) {
               return optional ? match : '([^/?]+)';
            }).replace(s_SPLAT_PARAM, '([^?]*?)');
            return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
         };

         /**
          * Backbone.Router - Provides methods for routing client-side pages, and connecting them to actions and events.
          * (http://backbonejs.org/#Router)
          * ---------------
          * Web applications often provide linkable, bookmarkable, shareable URLs for important locations in the app. Until
          * recently, hash fragments (#page) were used to provide these permalinks, but with the arrival of the History API,
          * it's now possible to use standard URLs (/page). Backbone.Router provides methods for routing client-side pages, and
          * connecting them to actions and events. For browsers which don't yet support the History API, the Router handles
          * graceful fallback and transparent translation to the fragment version of the URL.
          *
          * During page load, after your application has finished creating all of its routers, be sure to call
          * Backbone.history.start() or Backbone.history.start({pushState: true}) to route the initial URL.
          *
          * routes - router.routes
          * The routes hash maps URLs with parameters to functions on your router (or just direct function definitions, if you
          * prefer), similar to the View's events hash. Routes can contain parameter parts, :param, which match a single URL
          * component between slashes; and splat parts *splat, which can match any number of URL components. Part of a route can
          * be made optional by surrounding it in parentheses (/:optional).
          *
          * For example, a route of "search/:query/p:page" will match a fragment of #search/obama/p2, passing "obama" and "2" to
          * the action.
          *
          * A route of "file/*path" will match #file/nested/folder/file.txt, passing "nested/folder/file.txt" to the action.
          *
          * A route of "docs/:section(/:subsection)" will match #docs/faq and #docs/faq/installing, passing "faq" to the action
          * in the first case, and passing "faq" and "installing" to the action in the second.
          *
          * Trailing slashes are treated as part of the URL, and (correctly) treated as a unique route when accessed. docs and
          * docs/ will fire different callbacks. If you can't avoid generating both types of URLs, you can define a "docs(/)"
          * matcher to capture both cases.
          *
          * When the visitor presses the back button, or enters a URL, and a particular route is matched, the name of the action
          * will be fired as an event, so that other objects can listen to the router, and be notified. In the following example,
          * visiting #help/uploading will fire a route:help event from the router.
          *
          * @example
          * routes: {
          *    "help/:page":         "help",
          *    "download/*path":     "download",
          *    "folder/:name":       "openFolder",
          *    "folder/:name-:mode": "openFolder"
          * }
          *
          * router.on("route:help", function(page) {
          *    ...
          * });
          *
          * @example
          * Old extend - Backbone.Router.extend(properties, [classProperties])
          * Get started by creating a custom router class. Define actions that are triggered when certain URL fragments are
          * matched, and provide a routes hash that pairs routes to actions. Note that you'll want to avoid using a leading
          * slash in your route definitions:
          *
          * var Workspace = Backbone.Router.extend({
          *    routes: {
          *       "help":                 "help",    // #help
          *       "search/:query":        "search",  // #search/kiwis
          *       "search/:query/p:page": "search"   // #search/kiwis/p7
          *    },
          *
          *    help: function() {
          *       ...
          *    },
          *
          *    search: function(query, page) {
          *       ...
          *    }
          * });
          *
          * @example
          * Converting the above example to ES6 using a getter method for `routes`:
          * class Workspace extends Backbone.Router {
          *    get routes() {
          *       return {
          *          "help":                 "help",    // #help
          *          "search/:query":        "search",  // #search/kiwis
          *          "search/:query/p:page": "search"   // #search/kiwis/p7
          *       };
          *    }
          *
          *    help() {
          *       ...
          *    },
          *
          *    search(query, page) {
          *       ...
          *    }
          * }
          *
          * @example
          * Basic default "no route router":
          * new Backbone.Router({ routes: { '*actions': 'defaultRoute' } });
          */

         Router = (function (_Events) {
            _inherits(Router, _Events);

            /**
             * When creating a new router, you may pass its routes hash directly as an option, if you choose. All options will
             * also be passed to your initialize function, if defined.
             *
             * @see http://backbonejs.org/#Router-constructor
             *
             * @param {object}   options  - Optional parameters which may contain a "routes" object literal.
             */

            function Router() {
               var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

               _classCallCheck(this, Router);

               _get(Object.getPrototypeOf(Router.prototype), 'constructor', this).call(this);

               // Must detect if there are any getters defined in order to skip setting this value.
               var hasRoutesGetter = !_.isUndefined(this.routes);

               if (!hasRoutesGetter && options.routes) {
                  /**
                   * Stores the routes hash.
                   * @type {object}
                   */
                  this.routes = options.routes;
               }

               s_BIND_ROUTES(this);

               this.initialize.apply(this, arguments);
            }

            /* eslint-disable no-unused-vars */
            /**
             * Execute a route handler with the provided parameters.  This is an excellent place to do pre-route setup or
             * post-route cleanup.
             *
             * @see http://backbonejs.org/#Router-execute
             *
             * @param {function} callback - Callback function to execute.
             * @param {*[]}      args     - Arguments to apply to callback.
             * @param {string}   name     - Named route.
             */

            _createClass(Router, [{
               key: 'execute',
               value: function execute(callback, args, name) {
                  /* eslint-enable no-unused-vars */
                  if (callback) {
                     callback.apply(this, args);
                  }
               }

               /**
                * Initialize is an empty function by default. Override it with your own initialization logic.
                *
                * @see http://backbonejs.org/#Router-constructor
                * @abstract
                */
            }, {
               key: 'initialize',
               value: function initialize() {}

               /**
                * Simple proxy to `Backbone.history` to save a fragment into the history.
                *
                * @see http://backbonejs.org/#Router-navigate
                * @see History
                *
                * @param {string}   fragment - String representing an URL fragment.
                * @param {object}   options - Optional hash containing parameters for navigate.
                * @returns {Router}
                */
            }, {
               key: 'navigate',
               value: function navigate(fragment, options) {
                  BackboneProxy.backbone.history.navigate(fragment, options);
                  return this;
               }

               /**
                * Manually bind a single named route to a callback. For example:
                *
                * @example
                * this.route('search/:query/p:num', 'search', function(query, num)
                * {
                *    ...
                * });
                *
                * @see http://backbonejs.org/#Router-route
                *
                * @param {string|RegExp}  route    -  A route string or regex.
                * @param {string}         name     -  A name for the route.
                * @param {function}       callback -  A function to invoke when the route is matched.
                * @returns {Router}
                */
            }, {
               key: 'route',
               value: function route(_route, name, callback) {
                  var _this = this;

                  if (!_.isRegExp(_route)) {
                     _route = s_ROUTE_TO_REGEX(_route);
                  }
                  if (_.isFunction(name)) {
                     callback = name;
                     name = '';
                  }
                  if (!callback) {
                     callback = this[name];
                  }

                  BackboneProxy.backbone.history.route(_route, function (fragment) {
                     var args = s_EXTRACT_PARAMETERS(_route, fragment);

                     if (_this.execute(callback, args, name) !== false) {
                        _this.trigger.apply(_this, _toConsumableArray(['route:' + name].concat(args)));
                        _this.trigger('route', name, args);
                        BackboneProxy.backbone.history.trigger('route', _this, name, args);
                     }
                  });

                  return this;
               }
            }]);

            return Router;
         })(Events);

         _export('default', Router);
      }
   };
});

$__System.register('46', ['10', 'c', 'd'], function (_export) {
   var _, _createClass, _classCallCheck, s_EVENT_SPLITTER, s_EVENTS_API, s_INTERNAL_ON, s_OFF_API, s_ON_API, s_ONCE_MAP, s_TRIGGER_API, s_TRIGGER_EVENTS, Events;

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {

         // Private / internal methods ---------------------------------------------------------------------------------------

         /**
          * Regular expression used to split event strings.
          * @type {RegExp}
          */
         'use strict';

         s_EVENT_SPLITTER = /\s+/;

         /**
          * Iterates over the standard `event, callback` (as well as the fancy multiple space-separated events `"change blur",
          * callback` and jQuery-style event maps `{event: callback}`).
          *
          * @param {function} iteratee    - Event operation to invoke.
          * @param {Object.<{callback: function, context: object, ctx: object, listening:{}}>} events - Events object
          * @param {string|object} name   - A single event name, compound event names, or a hash of event names.
          * @param {function} callback    - Event callback function
          * @param {object}   opts        - Optional parameters
          * @returns {*}
          */

         s_EVENTS_API = function s_EVENTS_API(iteratee, events, name, callback, opts) {
            var i = 0,
                names = undefined;
            if (name && typeof name === 'object') {
               // Handle event maps.
               if (callback !== void 0 && 'context' in opts && opts.context === void 0) {
                  opts.context = callback;
               }
               for (names = _.keys(name); i < names.length; i++) {
                  events = s_EVENTS_API(iteratee, events, names[i], name[names[i]], opts);
               }
            } else if (name && s_EVENT_SPLITTER.test(name)) {
               // Handle space separated event names by delegating them individually.
               for (names = name.split(s_EVENT_SPLITTER); i < names.length; i++) {
                  events = iteratee(events, names[i], callback, opts);
               }
            } else {
               // Finally, standard events.
               events = iteratee(events, name, callback, opts);
            }
            return events;
         };

         /**
          * Guard the `listening` argument from the public API.
          *
          * @param {Events}   obj      - The Events instance
          * @param {string}   name     - Event name
          * @param {function} callback - Event callback
          * @param {object}   context  - Event context
          * @param {Object.<{obj: object, objId: string, id: string, listeningTo: object, count: number}>} listening -
          *                              Listening object
          * @returns {*}
          */

         s_INTERNAL_ON = function s_INTERNAL_ON(obj, name, callback, context, listening) {
            obj._events = s_EVENTS_API(s_ON_API, obj._events || {}, name, callback, { context: context, ctx: obj, listening: listening });

            if (listening) {
               var listeners = obj._listeners || (obj._listeners = {});
               listeners[listening.id] = listening;
            }

            return obj;
         };

         /**
          * The reducing API that removes a callback from the `events` object.
          *
          * @param {Object.<{callback: function, context: object, ctx: object, listening:{}}>} events - Events object
          * @param {string}   name     - Event name
          * @param {function} callback - Event callback
          * @param {object}   options  - Optional parameters
          * @returns {*}
          */

         s_OFF_API = function s_OFF_API(events, name, callback, options) {
            if (!events) {
               return;
            }

            var i = 0,
                listening = undefined;
            var context = options.context,
                listeners = options.listeners;

            // Delete all events listeners and "drop" events.
            if (!name && !callback && !context) {
               var ids = _.keys(listeners);
               for (; i < ids.length; i++) {
                  listening = listeners[ids[i]];
                  delete listeners[listening.id];
                  delete listening.listeningTo[listening.objId];
               }
               return;
            }

            var names = name ? [name] : _.keys(events);
            for (; i < names.length; i++) {
               name = names[i];
               var handlers = events[name];

               // Bail out if there are no events stored.
               if (!handlers) {
                  break;
               }

               // Replace events if there are any remaining.  Otherwise, clean up.
               var remaining = [];
               for (var j = 0; j < handlers.length; j++) {
                  var handler = handlers[j];
                  if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
                     remaining.push(handler);
                  } else {
                     listening = handler.listening;
                     if (listening && --listening.count === 0) {
                        delete listeners[listening.id];
                        delete listening.listeningTo[listening.objId];
                     }
                  }
               }

               // Update tail event if the list has any events.  Otherwise, clean up.
               if (remaining.length) {
                  events[name] = remaining;
               } else {
                  delete events[name];
               }
            }
            if (_.size(events)) {
               return events;
            }
         };

         /**
          * The reducing API that adds a callback to the `events` object.
          *
          * @param {Object.<{callback: function, context: object, ctx: object, listening:{}}>} events - Events object
          * @param {string}   name     - Event name
          * @param {function} callback - Event callback
          * @param {object}   options  - Optional parameters
          * @returns {*}
          */

         s_ON_API = function s_ON_API(events, name, callback, options) {
            if (callback) {
               var handlers = events[name] || (events[name] = []);
               var context = options.context,
                   ctx = options.ctx,
                   listening = options.listening;

               if (listening) {
                  listening.count++;
               }

               handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
            }
            return events;
         };

         /**
          * Reduces the event callbacks into a map of `{event: onceWrapper}`. `offer` unbinds the `onceWrapper` after
          * it has been called.
          *
          * @param {Object.<{callback: function, context: object, ctx: object, listening:{}}>} map - Events object
          * @param {string}   name     - Event name
          * @param {function} callback - Event callback
          * @param {function} offer    - Function to invoke after event has been triggered once; `off()`
          * @returns {*}
          */

         s_ONCE_MAP = function s_ONCE_MAP(map, name, callback, offer) {
            if (callback) {
               (function () {
                  var once = map[name] = _.once(function () {
                     offer(name, once);
                     callback.apply(this, arguments);
                  });
                  once._callback = callback;
               })();
            }
            return map;
         };

         /**
          * Handles triggering the appropriate event callbacks.
          *
          * @param {Object.<{callback: function, context: object, ctx: object, listening:{}}>} objEvents - Events object
          * @param {string}   name  - Event name
          * @param {function} cb    - Event callback
          * @param {Array<*>} args  - Event arguments
          * @returns {*}
          */

         s_TRIGGER_API = function s_TRIGGER_API(objEvents, name, cb, args) {
            if (objEvents) {
               var events = objEvents[name];
               var allEvents = objEvents.all;
               if (events && allEvents) {
                  allEvents = allEvents.slice();
               }
               if (events) {
                  s_TRIGGER_EVENTS(events, args);
               }
               if (allEvents) {
                  s_TRIGGER_EVENTS(allEvents, [name].concat(args));
               }
            }
            return objEvents;
         };

         /**
          * A difficult-to-believe, but optimized internal dispatch function for triggering events. Tries to keep the usual
          * cases speedy (most internal Backbone events have 3 arguments).
          *
          * @param {Object.<{callback: function, context: object, ctx: object, listening:{}}>}  events - events array
          * @param {Array<*>} args - event argument array
          */

         s_TRIGGER_EVENTS = function s_TRIGGER_EVENTS(events, args) {
            var ev = undefined,
                i = -1;
            var a1 = args[0],
                a2 = args[1],
                a3 = args[2],
                l = events.length;

            switch (args.length) {
               case 0:
                  while (++i < l) {
                     (ev = events[i]).callback.call(ev.ctx);
                  }
                  return;
               case 1:
                  while (++i < l) {
                     (ev = events[i]).callback.call(ev.ctx, a1);
                  }
                  return;
               case 2:
                  while (++i < l) {
                     (ev = events[i]).callback.call(ev.ctx, a1, a2);
                  }
                  return;
               case 3:
                  while (++i < l) {
                     (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                  }
                  return;
               default:
                  while (++i < l) {
                     (ev = events[i]).callback.apply(ev.ctx, args);
                  }
                  return;
            }
         };

         /**
          * Backbone.Events - Provides the ability to bind and trigger custom named events. (http://backbonejs.org/#Events)
          * ---------------
          *
          * An important consideration of Backbone-ES6 is that Events are no longer an object literal, but a full blown ES6
          * class. This is the biggest potential breaking change for Backbone-ES6 when compared to the original Backbone.
          *
          * Previously Events could be mixed in to any object. This is no longer possible with Backbone-ES6 when working from
          * source or the bundled versions. It should be noted that Events is also no longer mixed into Backbone itself, so
          * Backbone is not a Global events instance.
          *
          * Catalog of Events:
          * Here's the complete list of built-in Backbone events, with arguments. You're also free to trigger your own events on
          * Models, Collections and Views as you see fit.
          *
          * "add" (model, collection, options) — when a model is added to a collection.
          * "remove" (model, collection, options) — when a model is removed from a collection.
          * "update" (collection, options) — single event triggered after any number of models have been added or removed from a
          * collection.
          * "reset" (collection, options) — when the collection's entire contents have been replaced.
          * "sort" (collection, options) — when the collection has been re-sorted.
          * "change" (model, options) — when a model's attributes have changed.
          * "change:[attribute]" (model, value, options) — when a specific attribute has been updated.
          * "destroy" (model, collection, options) — when a model is destroyed.
          * "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
          * "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the
          * server.
          * "error" (model_or_collection, resp, options) — when a model's or collection's request to the server has failed.
          * "invalid" (model, error, options) — when a model's validation fails on the client.
          * "route:[name]" (params) — Fired by the router when a specific route is matched.
          * "route" (route, params) — Fired by the router when any route has been matched.
          * "route" (router, route, params) — Fired by history when any route has been matched.
          * "all" — this special event fires for any triggered event, passing the event name as the first argument.
          *
          * Generally speaking, when calling a function that emits an event (model.set, collection.add, and so on...), if you'd
          * like to prevent the event from being triggered, you may pass {silent: true} as an option. Note that this is rarely,
          * perhaps even never, a good idea. Passing through a specific flag in the options for your event callback to look at,
          * and choose to ignore, will usually work out better.
          *
          * @example
          * This no longer works:
          *
          * let object = {};
          * _.extend(object, Backbone.Events);
          * object.on('expand', function(){ alert('expanded'); });
          * object.trigger('expand');
          *
          * One must now use ES6 extends syntax for Backbone.Events when inheriting events functionality:
          * import Backbone from 'backbone';
          *
          * class MyClass extends Backbone.Events {}
          *
          * @example
          * A nice ES6 pattern for creating a named events instance is the following:
          *
          * import Backbone from 'backbone';
          *
          * export default new Backbone.Events();
          *
          * This module / Events instance can then be imported by full path or if consuming in a modular runtime by creating
          * a mapped path to it.
          */

         Events = (function () {
            /** */

            function Events() {
               _classCallCheck(this, Events);
            }

            /**
             * Delegates to `on`.
             *
             * @returns {*}
             */

            _createClass(Events, [{
               key: 'bind',
               value: function bind() {
                  return this.on.apply(this, arguments);
               }

               /**
                * Tell an object to listen to a particular event on an other object. The advantage of using this form, instead of
                * other.on(event, callback, object), is that listenTo allows the object to keep track of the events, and they can
                * be removed all at once later on. The callback will always be called with object as context.
                *
                * @example
                * view.listenTo(model, 'change', view.render);
                *
                * @see http://backbonejs.org/#Events-listenTo
                *
                * @param {object}   obj      - Event context
                * @param {string}   name     - Event name(s)
                * @param {function} callback - Event callback function
                * @returns {Events}
                */
            }, {
               key: 'listenTo',
               value: function listenTo(obj, name, callback) {
                  if (!obj) {
                     return this;
                  }
                  var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
                  var listeningTo = this._listeningTo || (this._listeningTo = {});
                  var listening = listeningTo[id];

                  // This object is not listening to any other events on `obj` yet.
                  // Setup the necessary references to track the listening callbacks.
                  if (!listening) {
                     var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
                     listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
                  }

                  // Bind callbacks on obj, and keep track of them on listening.
                  s_INTERNAL_ON(obj, name, callback, this, listening);
                  return this;
               }

               /**
                * Just like `listenTo`, but causes the bound callback to fire only once before being removed.
                *
                * @see http://backbonejs.org/#Events-listenToOnce
                *
                * @param {object}   obj      - Event context
                * @param {string}   name     - Event name(s)
                * @param {function} callback - Event callback function
                * @returns {Events}
                */
            }, {
               key: 'listenToOnce',
               value: function listenToOnce(obj, name, callback) {
                  // Map the event into a `{event: once}` object.
                  var events = s_EVENTS_API(s_ONCE_MAP, {}, name, callback, _.bind(this.stopListening, this, obj));
                  return this.listenTo(obj, events, void 0);
               }

               /**
                * Remove a previously-bound callback function from an object. If no context is specified, all of the versions of
                * the callback with different contexts will be removed. If no callback is specified, all callbacks for the event
                * will be removed. If no event is specified, callbacks for all events will be removed.
                *
                * Note that calling model.off(), for example, will indeed remove all events on the model — including events that
                * Backbone uses for internal bookkeeping.
                *
                * @example
                * // Removes just the `onChange` callback.
                * object.off("change", onChange);
                *
                * // Removes all "change" callbacks.
                * object.off("change");
                *
                * // Removes the `onChange` callback for all events.
                * object.off(null, onChange);
                *
                * // Removes all callbacks for `context` for all events.
                * object.off(null, null, context);
                *
                * // Removes all callbacks on `object`.
                * object.off();
                *
                * @see http://backbonejs.org/#Events-off
                *
                * @param {string}   name     - Event name(s)
                * @param {function} callback - Event callback function
                * @param {object}   context  - Event context
                * @returns {Events}
                */
            }, {
               key: 'off',
               value: function off(name, callback, context) {
                  if (!this._events) {
                     return this;
                  }
                  this._events = s_EVENTS_API(s_OFF_API, this._events, name, callback, { context: context, listeners: this._listeners });
                  return this;
               }

               /**
                * Bind a callback function to an object. The callback will be invoked whenever the event is fired. If you have a
                * large number of different events on a page, the convention is to use colons to namespace them: "poll:start", or
                * "change:selection".
                *
                * To supply a context value for this when the callback is invoked, pass the optional last argument:
                * model.on('change', this.render, this) or model.on({change: this.render}, this).
                *
                * @example
                * The event string may also be a space-delimited list of several events...
                * book.on("change:title change:author", ...);
                *
                * @example
                * Callbacks bound to the special "all" event will be triggered when any event occurs, and are passed the name of
                * the event as the first argument. For example, to proxy all events from one object to another:
                * proxy.on("all", function(eventName) {
                *    object.trigger(eventName);
                * });
                *
                * @example
                * All Backbone event methods also support an event map syntax, as an alternative to positional arguments:
                * book.on({
                *    "change:author": authorPane.update,
                *    "change:title change:subtitle": titleView.update,
                *    "destroy": bookView.remove
                * });
                *
                * @see http://backbonejs.org/#Events-on
                *
                * @param {string}   name     - Event name(s)
                * @param {function} callback - Event callback function
                * @param {object}   context  - Event context
                * @returns {*}
                */
            }, {
               key: 'on',
               value: function on(name, callback, context) {
                  return s_INTERNAL_ON(this, name, callback, context, void 0);
               }

               /**
                * Just like `on`, but causes the bound callback to fire only once before being removed. Handy for saying "the next
                * time that X happens, do this". When multiple events are passed in using the space separated syntax, the event
                * will fire once for every event you passed in, not once for a combination of all events
                *
                * @see http://backbonejs.org/#Events-once
                *
                * @param {string}   name     - Event name(s)
                * @param {function} callback - Event callback function
                * @param {object}   context  - Event context
                * @returns {*}
                */
            }, {
               key: 'once',
               value: function once(name, callback, context) {
                  // Map the event into a `{event: once}` object.
                  var events = s_EVENTS_API(s_ONCE_MAP, {}, name, callback, _.bind(this.off, this));
                  return this.on(events, void 0, context);
               }

               /**
                * Tell an object to stop listening to events. Either call stopListening with no arguments to have the object remove
                * all of its registered callbacks ... or be more precise by telling it to remove just the events it's listening to
                * on a specific object, or a specific event, or just a specific callback.
                *
                * @example
                * view.stopListening();
                *
                * view.stopListening(model);
                *
                * @see http://backbonejs.org/#Events-stopListening
                *
                * @param {object}   obj      - Event context
                * @param {string}   name     - Event name(s)
                * @param {function} callback - Event callback function
                * @returns {Events}
                */
            }, {
               key: 'stopListening',
               value: function stopListening(obj, name, callback) {
                  var listeningTo = this._listeningTo;
                  if (!listeningTo) {
                     return this;
                  }

                  var ids = obj ? [obj._listenId] : _.keys(listeningTo);

                  for (var i = 0; i < ids.length; i++) {
                     var listening = listeningTo[ids[i]];

                     // If listening doesn't exist, this object is not currently listening to obj. Break out early.
                     if (!listening) {
                        break;
                     }

                     listening.obj.off(name, callback, this);
                  }
                  if (_.isEmpty(listeningTo)) {
                     this._listeningTo = void 0;
                  }

                  return this;
               }

               /**
                * Trigger callbacks for the given event, or space-delimited list of events. Subsequent arguments to trigger will be
                * passed along to the event callbacks.
                *
                * @see http://backbonejs.org/#Events-trigger
                *
                * @param {string}   name  - Event name(s)
                * @returns {Events}
                */
            }, {
               key: 'trigger',
               value: function trigger(name) {
                  if (!this._events) {
                     return this;
                  }

                  var length = Math.max(0, arguments.length - 1);
                  var args = new Array(length);

                  for (var i = 0; i < length; i++) {
                     args[i] = arguments[i + 1];
                  }

                  s_EVENTS_API(s_TRIGGER_API, this._events, name, void 0, args);

                  return this;
               }

               /**
                * Delegates to `off`.
                *
                * @returns {*}
                */
            }, {
               key: 'unbind',
               value: function unbind() {
                  return this.off.apply(this, arguments);
               }
            }]);

            return Events;
         })();

         _export('default', Events);
      }
   };
});

$__System.register('6e', ['10', '41', '46', 'a', 'b', 'c', 'd'], function (_export) {
  var _, BackboneProxy, Events, _get, _inherits, _createClass, _classCallCheck, s_DELEGATE_EVENT_SPLITTER, s_VIEW_OPTIONS, View;

  return {
    setters: [function (_2) {
      _ = _2['default'];
    }, function (_3) {
      BackboneProxy = _3['default'];
    }, function (_4) {
      Events = _4['default'];
    }, function (_a) {
      _get = _a['default'];
    }, function (_b) {
      _inherits = _b['default'];
    }, function (_c) {
      _createClass = _c['default'];
    }, function (_d) {
      _classCallCheck = _d['default'];
    }],
    execute: function () {

      // Private / internal methods ---------------------------------------------------------------------------------------

      /**
       * Cached regex to split keys for `delegate`.
       * @type {RegExp}
       */
      'use strict';

      s_DELEGATE_EVENT_SPLITTER = /^(\S+)\s*(.*)$/;

      /**
       * List of view options to be set as properties.
       * @type {string[]}
       */
      s_VIEW_OPTIONS = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

      /**
       * Backbone.View - Represents a logical chunk of UI in the DOM. (http://backbonejs.org/#View)
       * -------------
       *
       * Backbone Views are almost more convention than they are actual code. A View is simply a JavaScript object that
       * represents a logical chunk of UI in the DOM. This might be a single item, an entire list, a sidebar or panel, or
       * even the surrounding frame which wraps your whole app. Defining a chunk of UI as a **View** allows you to define
       * your DOM events declaratively, without having to worry about render order ... and makes it easy for the view to
       * react to specific changes in the state of your models.
       *
       * Creating a Backbone.View creates its initial element outside of the DOM, if an existing element is not provided...
       *
       * Example if working with Backbone as ES6 source:
       * @example
       *
       * import Backbone from 'backbone';
       *
       * export default class MyView extends Backbone.View
       * {
       *    constructor(options)
       *    {
       *       super(options);
       *       ...
       *    }
       *
       *    initialize()
       *    {
       *       ...
       *    }
       *    ...
       * }
       *
       * @example
       *
       * To use a custom $el / element define it by a getter method:
       *
       *    get el() { return 'my-element'; }
       *
       * Likewise with events define it by a getter method:
       *
       *    get events()
       *    {
       *       return {
       *         'submit form.login-form': 'logIn',
       *         'click .sign-up': 'signUp',
       *         'click .forgot-password': 'forgotPassword'
       *       }
       *    }
       */

      View = (function (_Events) {
        _inherits(View, _Events);

        _createClass(View, [{
          key: 'tagName',

          /**
           * The default `tagName` of a View's element is `"div"`.
           *
           * @returns {string}
           */
          get: function get() {
            return 'div';
          }

          /**
           * There are several special options that, if passed, will be attached directly to the view: model, collection, el,
           * id, className, tagName, attributes and events. If the view defines an initialize function, it will be called when
           * the view is first created. If you'd like to create a view that references an element already in the DOM, pass in
           * the element as an option: new View({el: existingElement})
           *
           * @see http://backbonejs.org/#View-constructor
           *
           * @param {object} options - Default options which are mixed into this class as properties via `_.pick` against
           *                           s_VIEW_OPTIONS. Options also is passed onto the `initialize()` function.
           */
        }]);

        function View(options) {
          _classCallCheck(this, View);

          _get(Object.getPrototypeOf(View.prototype), 'constructor', this).call(this);

          /**
           * Client ID
           * @type {number}
           */
          this.cid = _.uniqueId('view');

          _.extend(this, _.pick(options, s_VIEW_OPTIONS));

          this._ensureElement();
          this.initialize.apply(this, arguments);
        }

        /**
         * If jQuery is included on the page, each view has a $ function that runs queries scoped within the view's element.
         * If you use this scoped jQuery function, you don't have to use model ids as part of your query to pull out specific
         * elements in a list, and can rely much more on HTML class attributes. It's equivalent to running:
         * view.$el.find(selector)
         *
         * @see https://api.jquery.com/find/
         *
         * @example
         * class Chapter extends Backbone.View {
         *    serialize() {
         *       return {
         *          title: this.$(".title").text(),
         *          start: this.$(".start-page").text(),
         *          end:   this.$(".end-page").text()
         *       };
         *    }
         * }
         *
         * @see http://backbonejs.org/#View-dollar
         * @see https://api.jquery.com/find/
         *
         * @param {string}   selector - A string containing a selector expression to match elements against.
         * @returns {Element|$}
         */

        _createClass(View, [{
          key: '$',
          value: function $(selector) {
            return this.$el.find(selector);
          }

          /**
           * Produces a DOM element to be assigned to your view. Exposed for subclasses using an alternative DOM
           * manipulation API.
           *
           * @protected
           * @param {string}   tagName  - Name of the tag element to create.
           * @returns {Element}
           *
           * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
           */
        }, {
          key: '_createElement',
          value: function _createElement(tagName) {
            return document.createElement(tagName);
          }

          /**
           * Add a single event listener to the view's element (or a child element using `selector`). This only works for
           * delegate-able events: not `focus`, `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
           *
           * @see http://backbonejs.org/#View-delegateEvents
           * @see http://api.jquery.com/on/
           *
           * @param {string}   eventName   - One or more space-separated event types and optional namespaces.
           * @param {string}   selector    - A selector string to filter the descendants of the selected elements that trigger
           *                                 the event.
           * @param {function} listener    - A function to execute when the event is triggered.
           * @returns {View}
           */
        }, {
          key: 'delegate',
          value: function delegate(eventName, selector, listener) {
            this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
          }

          /**
           * Uses jQuery's on function to provide declarative callbacks for DOM events within a view. If an events hash is not
           * passed directly, uses this.events as the source. Events are written in the format {"event selector": "callback"}.
           * The callback may be either the name of a method on the view, or a direct function body. Omitting the selector
           * causes the event to be bound to the view's root element (this.el). By default, delegateEvents is called within
           * the View's constructor for you, so if you have a simple events hash, all of your DOM events will always already
           * be connected, and you will never have to call this function yourself.
           *
           * The events property may also be defined as a function that returns an events hash, to make it easier to
           * programmatically define your events, as well as inherit them from parent views.
           *
           * Using delegateEvents provides a number of advantages over manually using jQuery to bind events to child elements
           * during render. All attached callbacks are bound to the view before being handed off to jQuery, so when the
           * callbacks are invoked, this continues to refer to the view object. When delegateEvents is run again, perhaps with
           * a different events hash, all callbacks are removed and delegated afresh — useful for views which need to behave
           * differently when in different modes.
           *
           * A single-event version of delegateEvents is available as delegate. In fact, delegateEvents is simply a multi-event
           * wrapper around delegate. A counterpart to undelegateEvents is available as undelegate.
           *
           * Callbacks will be bound to the view, with `this` set properly. Uses event delegation for efficiency.
           * Omitting the selector binds the event to `this.el`.
           *
           * @example
           * Older `extend` example:
           * var DocumentView = Backbone.View.extend({
           *    events: {
           *       "dblclick"                : "open",
           *       "click .icon.doc"         : "select",
           *       "contextmenu .icon.doc"   : "showMenu",
           *       "click .show_notes"       : "toggleNotes",
           *       "click .title .lock"      : "editAccessLevel",
           *       "mouseover .title .date"  : "showTooltip"
           *    },
           *
           *    render: function() {
           *       this.$el.html(this.template(this.model.attributes));
           *       return this;
           *    },
           *
           *    open: function() {
           *       window.open(this.model.get("viewer_url"));
           *    },
           *
           *    select: function() {
           *       this.model.set({selected: true});
           *    },
           *
           *   ...
           * });
           *
           * @example
           * Converting the above `extend` example to ES6:
           * class DocumentView extends Backbone.View {
           *    get events() {
           *       return {
           *          "dblclick"                : "open",
           *          "click .icon.doc"         : "select",
           *          "contextmenu .icon.doc"   : "showMenu",
           *          "click .show_notes"       : "toggleNotes",
           *          "click .title .lock"      : "editAccessLevel",
           *          "mouseover .title .date"  : "showTooltip"
           *       };
           *    }
           *
           *    render() {
           *       this.$el.html(this.template(this.model.attributes));
           *       return this;
           *    }
           *
           *    open() {
           *       window.open(this.model.get("viewer_url"));
           *    }
           *
           *    select() {
           *       this.model.set({selected: true});
           *    }
           *    ...
           * }
           *
           * @see http://backbonejs.org/#View-delegateEvents
           * @see http://api.jquery.com/on/
           *
           * @param {object}   events   - hash of event descriptions to bind.
           * @returns {View}
           */
        }, {
          key: 'delegateEvents',
          value: function delegateEvents(events) {
            events = events || _.result(this, 'events');
            if (!events) {
              return this;
            }
            this.undelegateEvents();
            for (var key in events) {
              var method = events[key];
              if (!_.isFunction(method)) {
                method = this[method];
              }
              if (!method) {
                continue;
              }
              var match = key.match(s_DELEGATE_EVENT_SPLITTER);
              this.delegate(match[1], match[2], _.bind(method, this));
            }
            return this;
          }

          /**
           * Ensure that the View has a DOM element to render into. If `this.el` is a string, pass it through `$()`, take
           * the first matching element, and re-assign it to `el`. Otherwise, create an element from the `id`, `className`
           * and `tagName` properties.
           *
           * @protected
           */
        }, {
          key: '_ensureElement',
          value: function _ensureElement() {
            if (!this.el) {
              var attrs = _.extend({}, _.result(this, 'attributes'));
              if (this.id) {
                attrs.id = _.result(this, 'id');
              }
              if (this.className) {
                attrs['class'] = _.result(this, 'className');
              }
              this.setElement(this._createElement(_.result(this, 'tagName')));
              this._setAttributes(attrs);
            } else {
              this.setElement(_.result(this, 'el'));
            }
          }

          /**
           * Initialize is an empty function by default. Override it with your own initialization logic.
           *
           * @see http://backbonejs.org/#View-constructor
           * @abstract
           */
        }, {
          key: 'initialize',
          value: function initialize() {}

          /**
           * Removes a view and its el from the DOM, and calls stopListening to remove any bound events that the view has
           * listenTo'd.
           *
           * @see http://backbonejs.org/#View-remove
           * @see {@link _removeElement}
           * @see {@link stopListening}
           *
           * @returns {View}
           */
        }, {
          key: 'remove',
          value: function remove() {
            this._removeElement();
            this.stopListening();
            return this;
          }

          /**
           * Remove this view's element from the document and all event listeners attached to it. Exposed for subclasses
           * using an alternative DOM manipulation API.
           *
           * @protected
           * @see https://api.jquery.com/remove/
           */
        }, {
          key: '_removeElement',
          value: function _removeElement() {
            this.$el.remove();
          }

          /**
           * The default implementation of render is a no-op. Override this function with your code that renders the view
           * template from model data, and updates this.el with the new HTML. A good convention is to return this at the end
           * of render to enable chained calls.
           *
           * Backbone is agnostic with respect to your preferred method of HTML templating. Your render function could even
           * munge together an HTML string, or use document.createElement to generate a DOM tree. However, we suggest choosing
           * a nice JavaScript templating library. Mustache.js, Haml-js, and Eco are all fine alternatives. Because
           * Underscore.js is already on the page, _.template is available, and is an excellent choice if you prefer simple
           * interpolated-JavaScript style templates.
           *
           * Whatever templating strategy you end up with, it's nice if you never have to put strings of HTML in your
           * JavaScript. At DocumentCloud, we use Jammit in order to package up JavaScript templates stored in /app/views as
           * part of our main core.js asset package.
           *
           * @example
           * class Bookmark extends Backbone.View {
           *    get template() { return _.template(...); }
           *
           *    render() {
           *       this.$el.html(this.template(this.model.attributes));
           *       return this;
           *    }
           * }
           *
           * @see http://backbonejs.org/#View-render
           *
           * @abstract
           * @returns {View}
           */
        }, {
          key: 'render',
          value: function render() {
            return this;
          }

          /**
           * Set attributes from a hash on this view's element.  Exposed for subclasses using an alternative DOM
           * manipulation API.
           *
           * @protected
           * @param {object}   attributes - An object defining attributes to associate with `this.$el`.
           */
        }, {
          key: '_setAttributes',
          value: function _setAttributes(attributes) {
            this.$el.attr(attributes);
          }

          /**
           * Creates the `this.el` and `this.$el` references for this view using the given `el`. `el` can be a CSS selector
           * or an HTML string, a jQuery context or an element. Subclasses can override this to utilize an alternative DOM
           * manipulation API and are only required to set the `this.el` property.
           *
           * @protected
           * @param {string|object}  el - A CSS selector or an HTML string, a jQuery context or an element.
           */
        }, {
          key: '_setElement',
          value: function _setElement(el) {
            /**
             * Cached jQuery context for element.
             * @type {object}
             */
            this.$el = el instanceof BackboneProxy.backbone.$ ? el : BackboneProxy.backbone.$(el);

            /**
             * Cached element
             * @type {Element}
             */
            this.el = this.$el[0];
          }

          /**
           * If you'd like to apply a Backbone view to a different DOM element, use setElement, which will also create the
           * cached $el reference and move the view's delegated events from the old element to the new one.
           *
           * @see http://backbonejs.org/#View-setElement
           * @see {@link undelegateEvents}
           * @see {@link _setElement}
           * @see {@link delegateEvents}
           *
           * @param {string|object}  element  - A CSS selector or an HTML string, a jQuery context or an element.
           * @returns {View}
           */
        }, {
          key: 'setElement',
          value: function setElement(element) {
            this.undelegateEvents();
            this._setElement(element);
            this.delegateEvents();
            return this;
          }

          /**
           * A finer-grained `undelegateEvents` for removing a single delegated event. `selector` and `listener` are
           * both optional.
           *
           * @see http://backbonejs.org/#View-undelegateEvents
           * @see http://api.jquery.com/off/
           *
           * @param {string}   eventName   - One or more space-separated event types and optional namespaces.
           * @param {string}   selector    - A selector which should match the one originally passed to `.delegate()`.
           * @param {function} listener    - A handler function previously attached for the event(s).
           * @returns {View}
           */
        }, {
          key: 'undelegate',
          value: function undelegate(eventName, selector, listener) {
            this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
          }

          /**
           * Removes all of the view's delegated events. Useful if you want to disable or remove a view from the DOM
           * temporarily.
           *
           * @see http://backbonejs.org/#View-undelegateEvents
           * @see http://api.jquery.com/off/
           *
           * @returns {View}
           */
        }, {
          key: 'undelegateEvents',
          value: function undelegateEvents() {
            if (this.$el) {
              this.$el.off('.delegateEvents' + this.cid);
            }
            return this;
          }
        }]);

        return View;
      })(Events);

      _export('default', View);
    }
  };
});

$__System.register('41', [], function (_export) {
  /**
   * BackboneProxy -- Provides a proxy for the actual created Backbone instance. This is initialized in the constructor
   * for Backbone (backbone-es6/src/Backbone.js). Anywhere a reference is needed for the composed Backbone instance
   * import BackboneProxy and access it by "BackboneProxy.backbone".
   *
   * @example
   * import BackboneProxy from 'backbone-es6/src/BackboneProxy.js';
   *
   * BackboneProxy.backbone.sync(...)
   */

  'use strict';

  /**
   * Defines a proxy Object to hold a reference of the Backbone object instantiated.
   *
   * @type {{backbone: null}}
   */
  var BackboneProxy;
  return {
    setters: [],
    execute: function () {
      BackboneProxy = {
        backbone: null
      };

      _export('default', BackboneProxy);
    }
  };
});

$__System.register('45', ['c', 'd'], function (_export) {
   var _createClass, _classCallCheck, s_DEBUG_LOG, s_DEBUG_TRACE, Debug;

   return {
      setters: [function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {
         'use strict';

         s_DEBUG_LOG = false;
         s_DEBUG_TRACE = false;

         /* eslint-disable no-console */

         /**
          * Debug.js - Provides basic logging functionality that can be turned on via setting s_DEBUG_LOG = true;
          *
          * This is temporary until stability is fully tested.
          */

         Debug = (function () {
            function Debug() {
               _classCallCheck(this, Debug);
            }

            _createClass(Debug, null, [{
               key: 'log',

               /**
                * Posts a log message to console.
                *
                * @param {string}   message  - A message to log
                * @param {boolean}  trace    - A boolean indicating whether to also log `console.trace()`
                */
               value: function log(message) {
                  var trace = arguments.length <= 1 || arguments[1] === undefined ? s_DEBUG_TRACE : arguments[1];

                  if (s_DEBUG_LOG) {
                     console.log(message);
                  }

                  if (s_DEBUG_LOG && trace) {
                     console.trace();
                  }
               }
            }]);

            return Debug;
         })();

         _export('default', Debug);
      }
   };
});

$__System.register('6f', ['10', '41', '45'], function (_export) {

   /**
    * Syncs a Backbone.Collection via an associated Parse.Query.
    *
    * @param {string}      method      - A string that defines the synchronization action to perform.
    * @param {Collection}  collection  - The model or collection instance to synchronize.
    * @param {object}      options     - Optional parameters
    * @returns {*|ParsePromise}
    */
   'use strict';

   var _, BackboneProxy, Debug, syncCollection, syncModel;

   _export('default', parseSync);

   /**
    * parseSync - Persists models to the server. (http://backbonejs.org/#Sync)
    * ---------
    *
    * This version of sync uses Parse 1.6+ and ParseObject for Backbone.Model or Parse.Query for Backbone.Collections. You
    * will be passed back a ParsePromise and can use it in a similar manner as one would with Parse SDK itself.
    *
    * Dispatches to Model or Collection sync methods.
    *
    * @param {string}            method   - A string that defines the synchronization action to perform.
    * @param {Model|Collection}  model    - The model or collection instance to synchronize.
    * @param {object}            options  - Optional parameters.
    * @returns {*|ParsePromise}
    */

   function parseSync(method, model, options) {
      if (model instanceof BackboneProxy.backbone.Model) {
         return syncModel(method, model, options);
      } else if (model instanceof BackboneProxy.backbone.Collection) {
         return syncCollection(method, model, options);
      } else {
         throw new TypeError('sync - unknown model type.');
      }
   }

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_3) {
         BackboneProxy = _3['default'];
      }, function (_4) {
         Debug = _4['default'];
      }],
      execute: function () {
         syncCollection = function syncCollection(method, collection, options) {
            Debug.log('sync - syncCollection - 0 - method: ' + method + '; collection.query: ' + collection.query.toJSON(), true);

            switch (method) {
               case 'create':
               case 'delete':
               case 'patch':
               case 'update':
                  throw new Error('syncCollection - unsupported method: ' + method);

               case 'read':
                  Debug.log('sync - sync(Collection) -- read');

                  if (_.isUndefined(collection.query) || collection.query === null) {
                     throw new Error('syncCollection - collection.query is undefined or null.');
                  }

                  return collection.query.find(options);
            }
         };

         /**
          * Syncs a Backbone.Model via the associated Parse.Object.
          *
          * @param {string}   method   - A string that defines the synchronization action to perform.
          * @param {Model}    model    - The model instance to synchronize.
          * @param {object}   options  - Optional parameters
          * @returns {*|ParsePromise}
          */

         syncModel = function syncModel(method, model, options) {
            Debug.log('sync - syncModel - 0 - method: ' + method, true);

            if (_.isUndefined(model.parseObject) || model.parseObject === null) {
               throw new Error('syncModel - model.parseObject is undefined or null.');
            }

            switch (method) {
               case 'create':
                  return model.parseObject.save(null, options);

               case 'delete':
                  return model.parseObject.destroy(options);

               case 'patch':
                  return model.parseObject.save(null, options);

               case 'read':
                  return model.parseObject.fetch(options);

               case 'update':
                  return model.parseObject.save(null, options);
            }
         };
      }
   };
});

$__System.registerDynamic("70", ["73", "5", "71", "72"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  var _Storage = $__require('72');
  var _Storage2 = _interopRequireDefault(_Storage);
  var iidCache = null;
  function hexOctet() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  function generateId() {
    return hexOctet() + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + hexOctet() + hexOctet();
  }
  module.exports = {
    currentInstallationId: function currentInstallationId() {
      if (typeof iidCache === 'string') {
        return _ParsePromise2['default'].as(iidCache);
      }
      var path = _Storage2['default'].generatePath('installationId');
      return _Storage2['default'].getItemAsync(path).then(function(iid) {
        if (!iid) {
          iid = generateId();
          return _Storage2['default'].setItemAsync(path, iid).then(function() {
            iidCache = iid;
            return iid;
          });
        }
        iidCache = iid;
        return iid;
      });
    },
    _clearCache: function _clearCache() {
      iidCache = null;
    },
    _setInstallationIdCache: function _setInstallationIdCache(iid) {
      iidCache = iid;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("74", ["73", "5", "75", "71", "72", "58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var _interopRequireDefault = $__require('73')['default'];
    Object.defineProperty(exports, '__esModule', {value: true});
    var _CoreManager = $__require('5');
    var _CoreManager2 = _interopRequireDefault(_CoreManager);
    var _ParseError = $__require('75');
    var _ParseError2 = _interopRequireDefault(_ParseError);
    var _ParsePromise = $__require('71');
    var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
    var _Storage = $__require('72');
    var _Storage2 = _interopRequireDefault(_Storage);
    var XHR = null;
    if (typeof XMLHttpRequest !== 'undefined') {
      XHR = XMLHttpRequest;
    }
    var useXDomainRequest = false;
    if (typeof XDomainRequest !== 'undefined' && !('withCredentials' in new XMLHttpRequest())) {
      useXDomainRequest = true;
    }
    function ajaxIE9(method, url, data) {
      var promise = new _ParsePromise2['default']();
      var xdr = new XDomainRequest();
      xdr.onload = function() {
        var response;
        try {
          response = JSON.parse(xdr.responseText);
        } catch (e) {
          promise.reject(e);
        }
        if (response) {
          promise.resolve(response);
        }
      };
      xdr.onerror = xdr.ontimeout = function() {
        var fakeResponse = {responseText: JSON.stringify({
            code: _ParseError2['default'].X_DOMAIN_REQUEST,
            error: 'IE\'s XDomainRequest does not supply error info.'
          })};
        promise.reject(fakeResponse);
      };
      xdr.onprogress = function() {};
      xdr.open(method, url);
      xdr.send(data);
      return promise;
    }
    var RESTController = {
      ajax: function ajax(method, url, data, headers) {
        if (useXDomainRequest) {
          return ajaxIE9(method, url, data, headers);
        }
        var promise = new _ParsePromise2['default']();
        var attempts = 0;
        var dispatch = function dispatch() {
          if (XHR == null) {
            throw new Error('Cannot make a request: No definition of XMLHttpRequest was found.');
          }
          var handled = false;
          var xhr = new XHR();
          xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4 || handled) {
              return;
            }
            handled = true;
            if (xhr.status >= 200 && xhr.status < 300) {
              var response;
              try {
                response = JSON.parse(xhr.responseText);
              } catch (e) {
                promise.reject(e.toString());
              }
              if (response) {
                promise.resolve(response, xhr.status, xhr);
              }
            } else if (xhr.status >= 500 || xhr.status === 0) {
              if (++attempts < _CoreManager2['default'].get('REQUEST_ATTEMPT_LIMIT')) {
                var delay = Math.round(Math.random() * 125 * Math.pow(2, attempts));
                setTimeout(dispatch, delay);
              } else if (xhr.status === 0) {
                promise.reject('Unable to connect to the Parse API');
              } else {
                promise.reject(xhr);
              }
            } else {
              promise.reject(xhr);
            }
          };
          headers = headers || {};
          headers['Content-Type'] = 'text/plain';
          if (_CoreManager2['default'].get('IS_NODE')) {
            headers['User-Agent'] = 'Parse/' + _CoreManager2['default'].get('VERSION') + ' (NodeJS ' + process.versions.node + ')';
          }
          xhr.open(method, url, true);
          for (var h in headers) {
            xhr.setRequestHeader(h, headers[h]);
          }
          xhr.send(data);
        };
        dispatch();
        return promise;
      },
      request: function request(method, path, data, options) {
        options = options || {};
        var url = _CoreManager2['default'].get('SERVER_URL');
        if (url[url.length - 1] !== '/') {
          url += '/';
        }
        url += path;
        var payload = {};
        if (data && typeof data === 'object') {
          for (var k in data) {
            payload[k] = data[k];
          }
        }
        if (method !== 'POST') {
          payload._method = method;
          method = 'POST';
        }
        payload._ApplicationId = _CoreManager2['default'].get('APPLICATION_ID');
        payload._JavaScriptKey = _CoreManager2['default'].get('JAVASCRIPT_KEY');
        payload._ClientVersion = _CoreManager2['default'].get('VERSION');
        var useMasterKey = options.useMasterKey;
        if (typeof useMasterKey === 'undefined') {
          useMasterKey = _CoreManager2['default'].get('USE_MASTER_KEY');
        }
        if (useMasterKey) {
          if (_CoreManager2['default'].get('MASTER_KEY')) {
            delete payload._JavaScriptKey;
            payload._MasterKey = _CoreManager2['default'].get('MASTER_KEY');
          } else {
            throw new Error('Cannot use the Master Key, it has not been provided.');
          }
        }
        if (_CoreManager2['default'].get('FORCE_REVOCABLE_SESSION')) {
          payload._RevocableSession = '1';
        }
        var installationController = _CoreManager2['default'].getInstallationController();
        return installationController.currentInstallationId().then(function(iid) {
          payload._InstallationId = iid;
          var userController = _CoreManager2['default'].getUserController();
          if (options && typeof options.sessionToken === 'string') {
            return _ParsePromise2['default'].as(options.sessionToken);
          } else if (userController) {
            return userController.currentUserAsync().then(function(user) {
              if (user) {
                return _ParsePromise2['default'].as(user.getSessionToken());
              }
              return _ParsePromise2['default'].as(null);
            });
          }
          return _ParsePromise2['default'].as(null);
        }).then(function(token) {
          if (token) {
            payload._SessionToken = token;
          }
          var payloadString = JSON.stringify(payload);
          return RESTController.ajax(method, url, payloadString);
        }).then(null, function(response) {
          var error;
          if (response && response.responseText) {
            try {
              var errorJSON = JSON.parse(response.responseText);
              error = new _ParseError2['default'](errorJSON.code, errorJSON.error);
            } catch (e) {
              error = new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'Received an error with invalid JSON from Parse: ' + response.responseText);
            }
          } else {
            error = new _ParseError2['default'](_ParseError2['default'].CONNECTION_FAILED, 'XMLHttpRequest failed: ' + JSON.stringify(response));
          }
          return _ParsePromise2['default'].error(error);
        });
      },
      _setXHR: function _setXHR(xhr) {
        XHR = xhr;
      }
    };
    module.exports = RESTController;
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("76", ["73", "5"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports.track = track;
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  function track(name, dimensions, options) {
    name = name || '';
    name = name.replace(/^\s*/, '');
    name = name.replace(/\s*$/, '');
    if (name.length === 0) {
      throw new TypeError('A name for the custom event must be provided');
    }
    for (var key in dimensions) {
      if (typeof key !== 'string' || typeof dimensions[key] !== 'string') {
        throw new TypeError('track() dimensions expects keys and values of type "string".');
      }
    }
    options = options || {};
    return _CoreManager2['default'].getAnalyticsController().track(name, dimensions)._thenRunCallbacks(options);
  }
  _CoreManager2['default'].setAnalyticsController({track: function track(name, dimensions) {
      var RESTController = _CoreManager2['default'].getRESTController();
      return RESTController.request('POST', 'events/' + name, {dimensions: dimensions});
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("77", ["73", "5", "78", "62", "75", "71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports.run = run;
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _decode = $__require('78');
  var _decode2 = _interopRequireDefault(_decode);
  var _encode = $__require('62');
  var _encode2 = _interopRequireDefault(_encode);
  var _ParseError = $__require('75');
  var _ParseError2 = _interopRequireDefault(_ParseError);
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  function run(name, data, options) {
    options = options || {};
    if (typeof name !== 'string' || name.length === 0) {
      throw new TypeError('Cloud function name must be a string.');
    }
    var requestOptions = {};
    if (options.useMasterKey) {
      requestOptions.useMasterKey = options.useMasterKey;
    }
    if (options.sessionToken) {
      requestOptions.sessionToken = options.sessionToken;
    }
    return _CoreManager2['default'].getCloudController().run(name, data, requestOptions)._thenRunCallbacks(options);
  }
  _CoreManager2['default'].setCloudController({run: function run(name, data, options) {
      var RESTController = _CoreManager2['default'].getRESTController();
      var payload = (0, _encode2['default'])(data, true);
      var requestOptions = {};
      if (options.hasOwnProperty('useMasterKey')) {
        requestOptions.useMasterKey = options.useMasterKey;
      }
      if (options.hasOwnProperty('sessionToken')) {
        requestOptions.sessionToken = options.sessionToken;
      }
      var request = RESTController.request('POST', 'functions/' + name, payload, requestOptions);
      return request.then(function(res) {
        var decoded = (0, _decode2['default'])(res);
        if (decoded && decoded.hasOwnProperty('result')) {
          return _ParsePromise2['default'].as(decoded.result);
        }
        return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'The server returned an invalid response.'));
      })._thenRunCallbacks(options);
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("79", ["c", "d", "73", "5", "78", "62", "7a", "75", "71", "72"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _decode = $__require('78');
  var _decode2 = _interopRequireDefault(_decode);
  var _encode = $__require('62');
  var _encode2 = _interopRequireDefault(_encode);
  var _escape2 = $__require('7a');
  var _escape3 = _interopRequireDefault(_escape2);
  var _ParseError = $__require('75');
  var _ParseError2 = _interopRequireDefault(_ParseError);
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  var _Storage = $__require('72');
  var _Storage2 = _interopRequireDefault(_Storage);
  var ParseConfig = (function() {
    function ParseConfig() {
      _classCallCheck(this, ParseConfig);
      this.attributes = {};
      this._escapedAttributes = {};
    }
    _createClass(ParseConfig, [{
      key: 'get',
      value: function get(attr) {
        return this.attributes[attr];
      }
    }, {
      key: 'escape',
      value: function escape(attr) {
        var html = this._escapedAttributes[attr];
        if (html) {
          return html;
        }
        var val = this.attributes[attr];
        var escaped = '';
        if (val != null) {
          escaped = (0, _escape3['default'])(val.toString());
        }
        this._escapedAttributes[attr] = escaped;
        return escaped;
      }
    }], [{
      key: 'current',
      value: function current() {
        var controller = _CoreManager2['default'].getConfigController();
        return controller.current();
      }
    }, {
      key: 'get',
      value: function get(options) {
        options = options || {};
        var controller = _CoreManager2['default'].getConfigController();
        return controller.get()._thenRunCallbacks(options);
      }
    }]);
    return ParseConfig;
  })();
  exports['default'] = ParseConfig;
  var currentConfig = null;
  var CURRENT_CONFIG_KEY = 'currentConfig';
  function decodePayload(data) {
    try {
      var json = JSON.parse(data);
      if (json && typeof json === 'object') {
        return (0, _decode2['default'])(json);
      }
    } catch (e) {
      return null;
    }
  }
  _CoreManager2['default'].setConfigController({
    current: function current() {
      if (currentConfig) {
        return currentConfig;
      }
      var config = new ParseConfig();
      var storagePath = _Storage2['default'].generatePath(CURRENT_CONFIG_KEY);
      var configData;
      if (!_Storage2['default'].async()) {
        configData = _Storage2['default'].getItem(storagePath);
        if (configData) {
          var attributes = decodePayload(configData);
          if (attributes) {
            config.attributes = attributes;
            currentConfig = config;
          }
        }
        return config;
      }
      return _Storage2['default'].getItemAsync(storagePath).then(function(configData) {
        if (configData) {
          var attributes = decodePayload(configData);
          if (attributes) {
            config.attributes = attributes;
            currentConfig = config;
          }
        }
        return config;
      });
    },
    get: function get() {
      var RESTController = _CoreManager2['default'].getRESTController();
      return RESTController.request('GET', 'config', {}, {}).then(function(response) {
        if (!response || !response.params) {
          var error = new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'Config JSON response invalid.');
          return _ParsePromise2['default'].error(error);
        }
        var config = new ParseConfig();
        config.attributes = {};
        for (var attr in response.params) {
          config.attributes[attr] = (0, _decode2['default'])(response.params[attr]);
        }
        currentConfig = config;
        return _Storage2['default'].setItemAsync(_Storage2['default'].generatePath(CURRENT_CONFIG_KEY), JSON.stringify(response.params)).then(function() {
          return config;
        });
      });
    }
  });
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7b", ["73", "7c", "7d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _parseDate = $__require('7c');
  var _parseDate2 = _interopRequireDefault(_parseDate);
  var _ParseUser = $__require('7d');
  var _ParseUser2 = _interopRequireDefault(_ParseUser);
  var initialized = false;
  var requestedPermissions;
  var initOptions;
  exports['default'] = {
    init: function init(options) {
      if (typeof FB === 'undefined') {
        throw new Error('The Facebook JavaScript SDK must be loaded before calling init.');
      }
      initOptions = {};
      if (options) {
        for (var key in options) {
          initOptions[key] = options[key];
        }
      }
      if (initOptions.status && typeof console !== 'undefined') {
        var warn = console.warn || console.log || function() {};
        warn.call(console, 'The "status" flag passed into' + ' FB.init, when set to true, can interfere with Parse Facebook' + ' integration, so it has been suppressed. Please call' + ' FB.getLoginStatus() explicitly if you require this behavior.');
      }
      initOptions.status = false;
      FB.init(initOptions);
      _ParseUser2['default']._registerAuthenticationProvider({
        authenticate: function authenticate(options) {
          var _this = this;
          if (typeof FB === 'undefined') {
            options.error(this, 'Facebook SDK not found.');
          }
          FB.login(function(response) {
            if (response.authResponse) {
              if (options.success) {
                options.success(_this, {
                  id: response.authResponse.userID,
                  access_token: response.authResponse.accessToken,
                  expiration_date: new Date(response.authResponse.expiresIn * 1000 + new Date().getTime()).toJSON()
                });
              }
            } else {
              if (options.error) {
                options.error(_this, response);
              }
            }
          }, {scope: requestedPermissions});
        },
        restoreAuthentication: function restoreAuthentication(authData) {
          if (authData) {
            var expiration = (0, _parseDate2['default'])(authData.expiration_date);
            var expiresIn = expiration ? (expiration.getTime() - new Date().getTime()) / 1000 : 0;
            var authResponse = {
              userID: authData.id,
              accessToken: authData.access_token,
              expiresIn: expiresIn
            };
            var newOptions = {};
            if (initOptions) {
              for (var key in initOptions) {
                newOptions[key] = initOptions[key];
              }
            }
            newOptions.authResponse = authResponse;
            newOptions.status = false;
            var existingResponse = FB.getAuthResponse();
            if (existingResponse && existingResponse.userID !== authResponse.userID) {
              FB.logout();
            }
            FB.init(newOptions);
          }
          return true;
        },
        getAuthType: function getAuthType() {
          return 'facebook';
        },
        deauthenticate: function deauthenticate() {
          this.restoreAuthentication(null);
        }
      });
      initialized = true;
    },
    isLinked: function isLinked(user) {
      return user._isLinked('facebook');
    },
    logIn: function logIn(permissions, options) {
      if (!permissions || typeof permissions === 'string') {
        if (!initialized) {
          throw new Error('You must initialize FacebookUtils before calling logIn.');
        }
        requestedPermissions = permissions;
        return _ParseUser2['default']._logInWith('facebook', options);
      } else {
        var newOptions = {};
        if (options) {
          for (var key in options) {
            newOptions[key] = options[key];
          }
        }
        newOptions.authData = permissions;
        return _ParseUser2['default']._logInWith('facebook', newOptions);
      }
    },
    link: function link(user, permissions, options) {
      if (!permissions || typeof permissions === 'string') {
        if (!initialized) {
          throw new Error('You must initialize FacebookUtils before calling link.');
        }
        requestedPermissions = permissions;
        return user._linkWith('facebook', options);
      } else {
        var newOptions = {};
        if (options) {
          for (var key in options) {
            newOptions[key] = options[key];
          }
        }
        newOptions.authData = permissions;
        return user._linkWith('facebook', newOptions);
      }
    },
    unlink: function unlink(user, options) {
      if (!initialized) {
        throw new Error('You must initialize FacebookUtils before calling unlink.');
      }
      return user._unlinkFrom('facebook', options);
    }
  };
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7e", ["a", "b", "d", "73", "7f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _get = $__require('a')['default'];
  var _inherits = $__require('b')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _ParseObject2 = $__require('7f');
  var _ParseObject3 = _interopRequireDefault(_ParseObject2);
  var Installation = (function(_ParseObject) {
    _inherits(Installation, _ParseObject);
    function Installation(attributes) {
      _classCallCheck(this, Installation);
      _get(Object.getPrototypeOf(Installation.prototype), 'constructor', this).call(this, '_Installation');
      if (attributes && typeof attributes === 'object') {
        if (!this.set(attributes || {})) {
          throw new Error('Can\'t create an invalid Session');
        }
      }
    }
    return Installation;
  })(_ParseObject3['default']);
  exports['default'] = Installation;
  _ParseObject3['default'].registerSubclass('_Installation', Installation);
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("80", ["73", "5", "81"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports.send = send;
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _ParseQuery = $__require('81');
  var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
  function send(data, options) {
    options = options || {};
    if (data.where && data.where instanceof _ParseQuery2['default']) {
      data.where = data.where.toJSON().where;
    }
    if (data.push_time && typeof data.push_time === 'object') {
      data.push_time = data.push_time.toJSON();
    }
    if (data.expiration_time && typeof data.expiration_time === 'object') {
      data.expiration_time = data.expiration_time.toJSON();
    }
    if (data.expiration_time && data.expiration_interval) {
      throw new Error('expiration_time and expiration_interval cannot both be set.');
    }
    return _CoreManager2['default'].getPushController().send(data, {useMasterKey: options.useMasterKey})._thenRunCallbacks(options);
  }
  _CoreManager2['default'].setPushController({send: function send(data, options) {
      var RESTController = _CoreManager2['default'].getRESTController();
      var request = RESTController.request('POST', 'push', data, {useMasterKey: !!options.useMasterKey});
      return request._thenRunCallbacks(options);
    }});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("82", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = isRevocableSession;
  function isRevocableSession(token) {
    return token.indexOf('r:') > -1;
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("83", ["13", "84"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('13');
  $__require('84')('freeze', function($freeze) {
    return function freeze(it) {
      return $freeze && isObject(it) ? $freeze(it) : it;
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("85", ["83", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('83');
  module.exports = $__require('17').Object.freeze;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("86", ["85"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('85'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("87", ["73", "88", "7f", "89"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = canBeSerialized;
  var _ParseFile = $__require('88');
  var _ParseFile2 = _interopRequireDefault(_ParseFile);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  var _ParseRelation = $__require('89');
  var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
  function canBeSerialized(obj) {
    if (!(obj instanceof _ParseObject2['default'])) {
      return true;
    }
    var attributes = obj.attributes;
    for (var attr in attributes) {
      var val = attributes[attr];
      if (!canBeSerializedHelper(val)) {
        return false;
      }
    }
    return true;
  }
  function canBeSerializedHelper(value) {
    if (typeof value !== 'object') {
      return true;
    }
    if (value instanceof _ParseRelation2['default']) {
      return true;
    }
    if (value instanceof _ParseObject2['default']) {
      return !!value.id;
    }
    if (value instanceof _ParseFile2['default']) {
      if (value.url()) {
        return true;
      }
      return false;
    }
    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        if (!canBeSerializedHelper(value[i])) {
          return false;
        }
      }
      return true;
    }
    for (var k in value) {
      if (!canBeSerializedHelper(value[k])) {
        return false;
      }
    }
    return true;
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8a", ["8d", "73", "8b", "88", "8c", "7f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$keys = $__require('8d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = equals;
  var _ParseACL = $__require('8b');
  var _ParseACL2 = _interopRequireDefault(_ParseACL);
  var _ParseFile = $__require('88');
  var _ParseFile2 = _interopRequireDefault(_ParseFile);
  var _ParseGeoPoint = $__require('8c');
  var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  function equals(a, b) {
    if (typeof a !== typeof b) {
      return false;
    }
    if (!a || typeof a !== 'object') {
      return a === b;
    }
    if (Array.isArray(a) || Array.isArray(b)) {
      if (!Array.isArray(a) || !Array.isArray(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      for (var i = a.length; i--; ) {
        if (!equals(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof _ParseACL2['default'] || a instanceof _ParseFile2['default'] || a instanceof _ParseGeoPoint2['default'] || a instanceof _ParseObject2['default']) {
      return a.equals(b);
    }
    if (_Object$keys(a).length !== _Object$keys(b).length) {
      return false;
    }
    for (var k in a) {
      if (!equals(a[k], b[k])) {
        return false;
      }
    }
    return true;
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7a", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = escape;
  function escape(str) {
    return str.replace(/[&<>\/'"]/g, function(char) {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '/': '&#x2F;',
        '\'': '&#x27;',
        '"': '&quot;'
      })[char];
    });
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7c", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = parseDate;
  function parseDate(iso8601) {
    var regexp = new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})' + 'T' + '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})' + '(.([0-9]+))?' + 'Z$');
    var match = regexp.exec(iso8601);
    if (!match) {
      return null;
    }
    var year = match[1] || 0;
    var month = (match[2] || 1) - 1;
    var day = match[3] || 0;
    var hour = match[4] || 0;
    var minute = match[5] || 0;
    var second = match[6] || 0;
    var milli = match[8] || 0;
    return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8e", ["90", "8f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireWildcard = $__require('90')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports.getState = getState;
  exports.initializeState = initializeState;
  exports.removeState = removeState;
  exports.getServerData = getServerData;
  exports.setServerData = setServerData;
  exports.getPendingOps = getPendingOps;
  exports.setPendingOp = setPendingOp;
  exports.pushPendingState = pushPendingState;
  exports.popPendingState = popPendingState;
  exports.mergeFirstPendingState = mergeFirstPendingState;
  exports.getObjectCache = getObjectCache;
  exports.estimateAttribute = estimateAttribute;
  exports.estimateAttributes = estimateAttributes;
  exports.commitServerChanges = commitServerChanges;
  exports.enqueueTask = enqueueTask;
  exports.clearAllState = clearAllState;
  var _ObjectStateMutations = $__require('8f');
  var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);
  var objectState = {};
  function getState(obj) {
    var classData = objectState[obj.className];
    if (classData) {
      return classData[obj.id] || null;
    }
    return null;
  }
  function initializeState(obj, initial) {
    var state = getState(obj);
    if (state) {
      return state;
    }
    if (!objectState[obj.className]) {
      objectState[obj.className] = {};
    }
    if (!initial) {
      initial = ObjectStateMutations.defaultState();
    }
    state = objectState[obj.className][obj.id] = initial;
    return state;
  }
  function removeState(obj) {
    var state = getState(obj);
    if (state === null) {
      return null;
    }
    delete objectState[obj.className][obj.id];
    return state;
  }
  function getServerData(obj) {
    var state = getState(obj);
    if (state) {
      return state.serverData;
    }
    return {};
  }
  function setServerData(obj, attributes) {
    var serverData = initializeState(obj).serverData;
    ObjectStateMutations.setServerData(serverData, attributes);
  }
  function getPendingOps(obj) {
    var state = getState(obj);
    if (state) {
      return state.pendingOps;
    }
    return [{}];
  }
  function setPendingOp(obj, attr, op) {
    var pendingOps = initializeState(obj).pendingOps;
    ObjectStateMutations.setPendingOp(pendingOps, attr, op);
  }
  function pushPendingState(obj) {
    var pendingOps = initializeState(obj).pendingOps;
    ObjectStateMutations.pushPendingState(pendingOps);
  }
  function popPendingState(obj) {
    var pendingOps = initializeState(obj).pendingOps;
    return ObjectStateMutations.popPendingState(pendingOps);
  }
  function mergeFirstPendingState(obj) {
    var pendingOps = getPendingOps(obj);
    ObjectStateMutations.mergeFirstPendingState(pendingOps);
  }
  function getObjectCache(obj) {
    var state = getState(obj);
    if (state) {
      return state.objectCache;
    }
    return {};
  }
  function estimateAttribute(obj, attr) {
    var serverData = getServerData(obj);
    var pendingOps = getPendingOps(obj);
    return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
  }
  function estimateAttributes(obj) {
    var serverData = getServerData(obj);
    var pendingOps = getPendingOps(obj);
    return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
  }
  function commitServerChanges(obj, changes) {
    var state = initializeState(obj);
    ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
  }
  function enqueueTask(obj, task) {
    var state = initializeState(obj);
    return state.tasks.enqueue(task);
  }
  function clearAllState() {
    objectState = {};
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("91", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("92", ["1a", "93", "5d", "1b", "51"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a'),
      descriptor = $__require('93'),
      setToStringTag = $__require('5d'),
      IteratorPrototype = {};
  $__require('1b')(IteratorPrototype, $__require('51')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("21", ["5b", "15", "94", "1b", "24", "95", "92", "5d", "1a", "51"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var LIBRARY = $__require('5b'),
      $export = $__require('15'),
      redefine = $__require('94'),
      hide = $__require('1b'),
      has = $__require('24'),
      Iterators = $__require('95'),
      $iterCreate = $__require('92'),
      setToStringTag = $__require('5d'),
      getProto = $__require('1a').getProto,
      ITERATOR = $__require('51')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("96", ["91", "22", "95", "97", "21"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var addToUnscopables = $__require('91'),
      step = $__require('22'),
      Iterators = $__require('95'),
      toIObject = $__require('97');
  module.exports = $__require('21')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2f", ["96", "95"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('96');
  var Iterators = $__require('95');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("98", ["57"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('57');
  module.exports = Array.isArray || function(arg) {
    return cof(arg) == 'Array';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("99", ["13", "98", "51"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('13'),
      isArray = $__require('98'),
      SPECIES = $__require('51')('species');
  module.exports = function(original, length) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
        C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null)
          C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9a", ["1d", "9b", "66", "69", "99"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('1d'),
      IObject = $__require('9b'),
      toObject = $__require('66'),
      toLength = $__require('69'),
      asc = $__require('99');
  module.exports = function(TYPE) {
    var IS_MAP = TYPE == 1,
        IS_FILTER = TYPE == 2,
        IS_SOME = TYPE == 3,
        IS_EVERY = TYPE == 4,
        IS_FIND_INDEX = TYPE == 6,
        NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that) {
      var O = toObject($this),
          self = IObject(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined,
          val,
          res;
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP)
              result[index] = res;
            else if (res)
              switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return index;
                case 2:
                  result.push(val);
              }
            else if (IS_EVERY)
              return false;
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9c", ["1b", "1c", "4f", "13", "1e", "20", "9a", "24", "23"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hide = $__require('1b'),
      redefineAll = $__require('1c'),
      anObject = $__require('4f'),
      isObject = $__require('13'),
      strictNew = $__require('1e'),
      forOf = $__require('20'),
      createArrayMethod = $__require('9a'),
      $has = $__require('24'),
      WEAK = $__require('23')('weak'),
      isExtensible = Object.isExtensible || isObject,
      arrayFind = createArrayMethod(5),
      arrayFindIndex = createArrayMethod(6),
      id = 0;
  var frozenStore = function(that) {
    return that._l || (that._l = new FrozenStore);
  };
  var FrozenStore = function() {
    this.a = [];
  };
  var findFrozen = function(store, key) {
    return arrayFind(store.a, function(it) {
      return it[0] === key;
    });
  };
  FrozenStore.prototype = {
    get: function(key) {
      var entry = findFrozen(this, key);
      if (entry)
        return entry[1];
    },
    has: function(key) {
      return !!findFrozen(this, key);
    },
    set: function(key, value) {
      var entry = findFrozen(this, key);
      if (entry)
        entry[1] = value;
      else
        this.a.push([key, value]);
    },
    'delete': function(key) {
      var index = arrayFindIndex(this.a, function(it) {
        return it[0] === key;
      });
      if (~index)
        this.a.splice(index, 1);
      return !!~index;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = id++;
        that._l = undefined;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        'delete': function(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this)['delete'](key);
          return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
        },
        has: function has(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this).has(key);
          return $has(key, WEAK) && $has(key[WEAK], this._i);
        }
      });
      return C;
    },
    def: function(that, key, value) {
      if (!isExtensible(anObject(key))) {
        frozenStore(that).set(key, value);
      } else {
        $has(key, WEAK) || hide(key, WEAK, {});
        key[WEAK][that._i] = value;
      }
      return that;
    },
    frozenStore: frozenStore,
    WEAK: WEAK
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("93", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1b", ["1a", "93", "26"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a'),
      createDesc = $__require('93');
  module.exports = $__require('26') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("94", ["1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1b');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1c", ["94"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var redefine = $__require('94');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("67", ["4f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('4f');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("68", ["95", "51"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = $__require('95'),
      ITERATOR = $__require('51')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("64", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("69", ["64"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('64'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2a", ["57", "51"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('57'),
      TAG = $__require('51')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("95", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6a", ["2a", "51", "95", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('2a'),
      ITERATOR = $__require('51')('iterator'),
      Iterators = $__require('95');
  module.exports = $__require('17').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("20", ["1d", "67", "68", "4f", "69", "6a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('1d'),
      call = $__require('67'),
      isArrayIter = $__require('68'),
      anObject = $__require('4f'),
      toLength = $__require('69'),
      getIterFn = $__require('6a');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1e", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("24", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9d", ["54"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('54'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("23", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("51", ["9d", "23", "54"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = $__require('9d')('wks'),
      uid = $__require('23'),
      Symbol = $__require('54').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5d", ["1a", "24", "51"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var def = $__require('1a').setDesc,
      has = $__require('24'),
      TAG = $__require('51')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("26", ["9e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !$__require('9e')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("28", ["1a", "54", "15", "9e", "1b", "1c", "20", "1e", "13", "5d", "26"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a'),
      global = $__require('54'),
      $export = $__require('15'),
      fails = $__require('9e'),
      hide = $__require('1b'),
      redefineAll = $__require('1c'),
      forOf = $__require('20'),
      strictNew = $__require('1e'),
      isObject = $__require('13'),
      setToStringTag = $__require('5d'),
      DESCRIPTORS = $__require('26');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9f", ["1a", "94", "9c", "13", "24", "28"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a'),
      redefine = $__require('94'),
      weak = $__require('9c'),
      isObject = $__require('13'),
      has = $__require('24'),
      frozenStore = weak.frozenStore,
      WEAK = weak.WEAK,
      isExtensible = Object.isExtensible || isObject,
      tmp = {};
  var $WeakMap = $__require('28')('WeakMap', function(get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      if (isObject(key)) {
        if (!isExtensible(key))
          return frozenStore(this).get(key);
        if (has(key, WEAK))
          return key[WEAK][this._i];
      }
    },
    set: function set(key, value) {
      return weak.def(this, key, value);
    }
  }, weak, true, true);
  if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
    $.each.call(['delete', 'has', 'get', 'set'], function(key) {
      var proto = $WeakMap.prototype,
          method = proto[key];
      redefine(proto, key, function(a, b) {
        if (isObject(a) && !isExtensible(a)) {
          var result = frozenStore(this)[key](a, b);
          return key == 'set' ? this : result;
        }
        return method.call(this, a, b);
      });
    });
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a0", ["2d", "2f", "9f", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('2d');
  $__require('2f');
  $__require('9f');
  module.exports = $__require('17').WeakMap;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a1", ["a0"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('a0'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("90", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj["default"] = obj;
      return newObj;
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8f", ["73", "62", "88", "7f", "71", "89", "a2", "a3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports.defaultState = defaultState;
  exports.setServerData = setServerData;
  exports.setPendingOp = setPendingOp;
  exports.pushPendingState = pushPendingState;
  exports.popPendingState = popPendingState;
  exports.mergeFirstPendingState = mergeFirstPendingState;
  exports.estimateAttribute = estimateAttribute;
  exports.estimateAttributes = estimateAttributes;
  exports.commitServerChanges = commitServerChanges;
  var _encode = $__require('62');
  var _encode2 = _interopRequireDefault(_encode);
  var _ParseFile = $__require('88');
  var _ParseFile2 = _interopRequireDefault(_ParseFile);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  var _ParseRelation = $__require('89');
  var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
  var _TaskQueue = $__require('a2');
  var _TaskQueue2 = _interopRequireDefault(_TaskQueue);
  var _ParseOp = $__require('a3');
  function defaultState() {
    return {
      serverData: {},
      pendingOps: [{}],
      objectCache: {},
      tasks: new _TaskQueue2['default'](),
      existed: false
    };
  }
  function setServerData(serverData, attributes) {
    for (var _attr in attributes) {
      if (typeof attributes[_attr] !== 'undefined') {
        serverData[_attr] = attributes[_attr];
      } else {
        delete serverData[_attr];
      }
    }
  }
  function setPendingOp(pendingOps, attr, op) {
    var last = pendingOps.length - 1;
    if (op) {
      pendingOps[last][attr] = op;
    } else {
      delete pendingOps[last][attr];
    }
  }
  function pushPendingState(pendingOps) {
    pendingOps.push({});
  }
  function popPendingState(pendingOps) {
    var first = pendingOps.shift();
    if (!pendingOps.length) {
      pendingOps[0] = {};
    }
    return first;
  }
  function mergeFirstPendingState(pendingOps) {
    var first = popPendingState(pendingOps);
    var next = pendingOps[0];
    for (var _attr2 in first) {
      if (next[_attr2] && first[_attr2]) {
        var merged = next[_attr2].mergeWith(first[_attr2]);
        if (merged) {
          next[_attr2] = merged;
        }
      } else {
        next[_attr2] = first[_attr2];
      }
    }
  }
  function estimateAttribute(serverData, pendingOps, className, id, attr) {
    var value = serverData[attr];
    for (var i = 0; i < pendingOps.length; i++) {
      if (pendingOps[i][attr]) {
        if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
          value = pendingOps[i][attr].applyTo(value, {
            className: className,
            id: id
          }, attr);
        } else {
          value = pendingOps[i][attr].applyTo(value);
        }
      }
    }
    return value;
  }
  function estimateAttributes(serverData, pendingOps, className, id) {
    var data = {};
    var attr = undefined;
    for (attr in serverData) {
      data[attr] = serverData[attr];
    }
    for (var i = 0; i < pendingOps.length; i++) {
      for (attr in pendingOps[i]) {
        if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
          data[attr] = pendingOps[i][attr].applyTo(data[attr], {
            className: className,
            id: id
          }, attr);
        } else {
          data[attr] = pendingOps[i][attr].applyTo(data[attr]);
        }
      }
    }
    return data;
  }
  function commitServerChanges(serverData, objectCache, changes) {
    for (var _attr3 in changes) {
      var val = changes[_attr3];
      serverData[_attr3] = val;
      if (val && typeof val === 'object' && !(val instanceof _ParseObject2['default']) && !(val instanceof _ParseFile2['default']) && !(val instanceof _ParseRelation2['default'])) {
        var json = (0, _encode2['default'])(val, false, true);
        objectCache[_attr3] = JSON.stringify(json);
      }
    }
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a2", ["c", "d", "73", "71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  module.exports = (function() {
    function TaskQueue() {
      _classCallCheck(this, TaskQueue);
      this.queue = [];
    }
    _createClass(TaskQueue, [{
      key: 'enqueue',
      value: function enqueue(task) {
        var _this = this;
        var taskComplete = new _ParsePromise2['default']();
        this.queue.push({
          task: task,
          _completion: taskComplete
        });
        if (this.queue.length === 1) {
          task().then(function() {
            _this._dequeue();
            taskComplete.resolve();
          }, function(error) {
            _this._dequeue();
            taskComplete.reject(error);
          });
        }
        return taskComplete;
      }
    }, {
      key: '_dequeue',
      value: function _dequeue() {
        var _this2 = this;
        this.queue.shift();
        if (this.queue.length) {
          var next = this.queue[0];
          next.task().then(function() {
            _this2._dequeue();
            next._completion.resolve();
          }, function(error) {
            _this2._dequeue();
            next._completion.reject(error);
          });
        }
      }
    }]);
    return TaskQueue;
  })();
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a4", ["a1", "90", "73", "8f", "a2"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _WeakMap = $__require('a1')['default'];
  var _interopRequireWildcard = $__require('90')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports.getState = getState;
  exports.initializeState = initializeState;
  exports.removeState = removeState;
  exports.getServerData = getServerData;
  exports.setServerData = setServerData;
  exports.getPendingOps = getPendingOps;
  exports.setPendingOp = setPendingOp;
  exports.pushPendingState = pushPendingState;
  exports.popPendingState = popPendingState;
  exports.mergeFirstPendingState = mergeFirstPendingState;
  exports.getObjectCache = getObjectCache;
  exports.estimateAttribute = estimateAttribute;
  exports.estimateAttributes = estimateAttributes;
  exports.commitServerChanges = commitServerChanges;
  exports.enqueueTask = enqueueTask;
  exports.clearAllState = clearAllState;
  var _ObjectStateMutations = $__require('8f');
  var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);
  var _TaskQueue = $__require('a2');
  var _TaskQueue2 = _interopRequireDefault(_TaskQueue);
  var objectState = new _WeakMap();
  function getState(obj) {
    var classData = objectState.get(obj);
    return classData || null;
  }
  function initializeState(obj, initial) {
    var state = getState(obj);
    if (state) {
      return state;
    }
    if (!initial) {
      initial = {
        serverData: {},
        pendingOps: [{}],
        objectCache: {},
        tasks: new _TaskQueue2['default'](),
        existed: false
      };
    }
    state = initial;
    objectState.set(obj, state);
    return state;
  }
  function removeState(obj) {
    var state = getState(obj);
    if (state === null) {
      return null;
    }
    objectState['delete'](obj);
    return state;
  }
  function getServerData(obj) {
    var state = getState(obj);
    if (state) {
      return state.serverData;
    }
    return {};
  }
  function setServerData(obj, attributes) {
    var serverData = initializeState(obj).serverData;
    ObjectStateMutations.setServerData(serverData, attributes);
  }
  function getPendingOps(obj) {
    var state = getState(obj);
    if (state) {
      return state.pendingOps;
    }
    return [{}];
  }
  function setPendingOp(obj, attr, op) {
    var pendingOps = initializeState(obj).pendingOps;
    ObjectStateMutations.setPendingOp(pendingOps, attr, op);
  }
  function pushPendingState(obj) {
    var pendingOps = initializeState(obj).pendingOps;
    ObjectStateMutations.pushPendingState(pendingOps);
  }
  function popPendingState(obj) {
    var pendingOps = initializeState(obj).pendingOps;
    return ObjectStateMutations.popPendingState(pendingOps);
  }
  function mergeFirstPendingState(obj) {
    var pendingOps = getPendingOps(obj);
    ObjectStateMutations.mergeFirstPendingState(pendingOps);
  }
  function getObjectCache(obj) {
    var state = getState(obj);
    if (state) {
      return state.objectCache;
    }
    return {};
  }
  function estimateAttribute(obj, attr) {
    var serverData = getServerData(obj);
    var pendingOps = getPendingOps(obj);
    return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
  }
  function estimateAttributes(obj) {
    var serverData = getServerData(obj);
    var pendingOps = getPendingOps(obj);
    return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
  }
  function commitServerChanges(obj, changes) {
    var state = initializeState(obj);
    ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
  }
  function enqueueTask(obj, task) {
    var state = initializeState(obj);
    return state.tasks.enqueue(task);
  }
  function clearAllState() {
    objectState = new _WeakMap();
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("66", ["1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var defined = $__require('1f');
  module.exports = function(it) {
    return Object(defined(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a5", ["66", "84"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = $__require('66');
  $__require('84')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a6", ["a5", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('a5');
  module.exports = $__require('17').Object.keys;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8d", ["a6"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('a6'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("57", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9b", ["57"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('57');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("97", ["9b", "1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = $__require('9b'),
      defined = $__require('1f');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9e", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("84", ["15", "17", "9e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('15'),
      core = $__require('17'),
      fails = $__require('9e');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a7", ["97", "84"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = $__require('97');
  $__require('84')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a8", ["1a", "a7"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a');
  $__require('a7');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a9", ["a8"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('a8'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", ["a9"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$getOwnPropertyDescriptor = $__require('a9')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("aa", ["1a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ab", ["aa"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('aa'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("54", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15", ["54", "17", "1d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('54'),
      core = $__require('17'),
      ctx = $__require('1d'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4f", ["13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('13');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("50", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1d", ["50"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = $__require('50');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5c", ["1a", "13", "4f", "1d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = $__require('1a').getDesc,
      isObject = $__require('13'),
      anObject = $__require('4f');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('1d')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ac", ["15", "5c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('15');
  $export($export.S, 'Object', {setPrototypeOf: $__require('5c').set});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ad", ["ac", "17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('ac');
  module.exports = $__require('17').Object.setPrototypeOf;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ae", ["ad"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('ad'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b", ["ab", "ae"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$create = $__require('ab')["default"];
  var _Object$setPrototypeOf = $__require('ae')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("af", ["a", "b", "c", "d", "73", "8b", "75", "7f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _get = $__require('a')['default'];
  var _inherits = $__require('b')['default'];
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _ParseACL = $__require('8b');
  var _ParseACL2 = _interopRequireDefault(_ParseACL);
  var _ParseError = $__require('75');
  var _ParseError2 = _interopRequireDefault(_ParseError);
  var _ParseObject2 = $__require('7f');
  var _ParseObject3 = _interopRequireDefault(_ParseObject2);
  var ParseRole = (function(_ParseObject) {
    _inherits(ParseRole, _ParseObject);
    function ParseRole(name, acl) {
      _classCallCheck(this, ParseRole);
      _get(Object.getPrototypeOf(ParseRole.prototype), 'constructor', this).call(this, '_Role');
      if (typeof name === 'string' && acl instanceof _ParseACL2['default']) {
        this.setName(name);
        this.setACL(acl);
      }
    }
    _createClass(ParseRole, [{
      key: 'getName',
      value: function getName() {
        return this.get('name');
      }
    }, {
      key: 'setName',
      value: function setName(name, options) {
        return this.set('name', name, options);
      }
    }, {
      key: 'getUsers',
      value: function getUsers() {
        return this.relation('users');
      }
    }, {
      key: 'getRoles',
      value: function getRoles() {
        return this.relation('roles');
      }
    }, {
      key: 'validate',
      value: function validate(attrs, options) {
        var isInvalid = _get(Object.getPrototypeOf(ParseRole.prototype), 'validate', this).call(this, attrs, options);
        if (isInvalid) {
          return isInvalid;
        }
        if ('name' in attrs && attrs.name !== this.getName()) {
          var newName = attrs.name;
          if (this.id && this.id !== attrs.objectId) {
            return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name can only be set before it has been saved.');
          }
          if (typeof newName !== 'string') {
            return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name must be a String.');
          }
          if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
            return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name can be only contain alphanumeric characters, _, ' + '-, and spaces.');
          }
        }
        return false;
      }
    }]);
    return ParseRole;
  })(_ParseObject3['default']);
  exports['default'] = ParseRole;
  _ParseObject3['default'].registerSubclass('_Role', ParseRole);
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8b", ["c", "d", "8d", "73", "af", "7d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _Object$keys = $__require('8d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _ParseRole = $__require('af');
  var _ParseRole2 = _interopRequireDefault(_ParseRole);
  var _ParseUser = $__require('7d');
  var _ParseUser2 = _interopRequireDefault(_ParseUser);
  var PUBLIC_KEY = '*';
  var ParseACL = (function() {
    function ParseACL(arg1) {
      _classCallCheck(this, ParseACL);
      this.permissionsById = {};
      if (arg1 && typeof arg1 === 'object') {
        if (arg1 instanceof _ParseUser2['default']) {
          this.setReadAccess(arg1, true);
          this.setWriteAccess(arg1, true);
        } else {
          for (var userId in arg1) {
            var accessList = arg1[userId];
            if (typeof userId !== 'string') {
              throw new TypeError('Tried to create an ACL with an invalid user id.');
            }
            this.permissionsById[userId] = {};
            for (var permission in accessList) {
              var allowed = accessList[permission];
              if (permission !== 'read' && permission !== 'write') {
                throw new TypeError('Tried to create an ACL with an invalid permission type.');
              }
              if (typeof allowed !== 'boolean') {
                throw new TypeError('Tried to create an ACL with an invalid permission value.');
              }
              this.permissionsById[userId][permission] = allowed;
            }
          }
        }
      } else if (typeof arg1 === 'function') {
        throw new TypeError('ParseACL constructed with a function. Did you forget ()?');
      }
    }
    _createClass(ParseACL, [{
      key: 'toJSON',
      value: function toJSON() {
        var permissions = {};
        for (var p in this.permissionsById) {
          permissions[p] = this.permissionsById[p];
        }
        return permissions;
      }
    }, {
      key: 'equals',
      value: function equals(other) {
        if (!(other instanceof ParseACL)) {
          return false;
        }
        var users = _Object$keys(this.permissionsById);
        var otherUsers = _Object$keys(other.permissionsById);
        if (users.length !== otherUsers.length) {
          return false;
        }
        for (var u in this.permissionsById) {
          if (!other.permissionsById[u]) {
            return false;
          }
          if (this.permissionsById[u].read !== other.permissionsById[u].read) {
            return false;
          }
          if (this.permissionsById[u].write !== other.permissionsById[u].write) {
            return false;
          }
        }
        return true;
      }
    }, {
      key: '_setAccess',
      value: function _setAccess(accessType, userId, allowed) {
        if (userId instanceof _ParseUser2['default']) {
          userId = userId.id;
        } else if (userId instanceof _ParseRole2['default']) {
          userId = 'role:' + userId.getName();
        }
        if (typeof userId !== 'string') {
          throw new TypeError('userId must be a string.');
        }
        if (typeof allowed !== 'boolean') {
          throw new TypeError('allowed must be either true or false.');
        }
        var permissions = this.permissionsById[userId];
        if (!permissions) {
          if (!allowed) {
            return;
          } else {
            permissions = {};
            this.permissionsById[userId] = permissions;
          }
        }
        if (allowed) {
          this.permissionsById[userId][accessType] = true;
        } else {
          delete permissions[accessType];
          if (_Object$keys(permissions).length === 0) {
            delete this.permissionsById[userId];
          }
        }
      }
    }, {
      key: '_getAccess',
      value: function _getAccess(accessType, userId) {
        if (userId instanceof _ParseUser2['default']) {
          userId = userId.id;
        } else if (userId instanceof _ParseRole2['default']) {
          userId = 'role:' + userId.getName();
        }
        var permissions = this.permissionsById[userId];
        if (!permissions) {
          return false;
        }
        return !!permissions[accessType];
      }
    }, {
      key: 'setReadAccess',
      value: function setReadAccess(userId, allowed) {
        this._setAccess('read', userId, allowed);
      }
    }, {
      key: 'getReadAccess',
      value: function getReadAccess(userId) {
        return this._getAccess('read', userId);
      }
    }, {
      key: 'setWriteAccess',
      value: function setWriteAccess(userId, allowed) {
        this._setAccess('write', userId, allowed);
      }
    }, {
      key: 'getWriteAccess',
      value: function getWriteAccess(userId) {
        return this._getAccess('write', userId);
      }
    }, {
      key: 'setPublicReadAccess',
      value: function setPublicReadAccess(allowed) {
        this.setReadAccess(PUBLIC_KEY, allowed);
      }
    }, {
      key: 'getPublicReadAccess',
      value: function getPublicReadAccess() {
        return this.getReadAccess(PUBLIC_KEY);
      }
    }, {
      key: 'setPublicWriteAccess',
      value: function setPublicWriteAccess(allowed) {
        this.setWriteAccess(PUBLIC_KEY, allowed);
      }
    }, {
      key: 'getPublicWriteAccess',
      value: function getPublicWriteAccess() {
        return this.getWriteAccess(PUBLIC_KEY);
      }
    }, {
      key: 'getRoleReadAccess',
      value: function getRoleReadAccess(role) {
        if (role instanceof _ParseRole2['default']) {
          role = role.getName();
        }
        if (typeof role !== 'string') {
          throw new TypeError('role must be a ParseRole or a String');
        }
        return this.getReadAccess('role:' + role);
      }
    }, {
      key: 'getRoleWriteAccess',
      value: function getRoleWriteAccess(role) {
        if (role instanceof _ParseRole2['default']) {
          role = role.getName();
        }
        if (typeof role !== 'string') {
          throw new TypeError('role must be a ParseRole or a String');
        }
        return this.getWriteAccess('role:' + role);
      }
    }, {
      key: 'setRoleReadAccess',
      value: function setRoleReadAccess(role, allowed) {
        if (role instanceof _ParseRole2['default']) {
          role = role.getName();
        }
        if (typeof role !== 'string') {
          throw new TypeError('role must be a ParseRole or a String');
        }
        this.setReadAccess('role:' + role, allowed);
      }
    }, {
      key: 'setRoleWriteAccess',
      value: function setRoleWriteAccess(role, allowed) {
        if (role instanceof _ParseRole2['default']) {
          role = role.getName();
        }
        if (typeof role !== 'string') {
          throw new TypeError('role must be a ParseRole or a String');
        }
        this.setWriteAccess('role:' + role, allowed);
      }
    }]);
    return ParseACL;
  })();
  exports['default'] = ParseACL;
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("88", ["c", "d", "73", "5", "71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  function b64Digit(number) {
    if (number < 26) {
      return String.fromCharCode(65 + number);
    }
    if (number < 52) {
      return String.fromCharCode(97 + (number - 26));
    }
    if (number < 62) {
      return String.fromCharCode(48 + (number - 52));
    }
    if (number === 62) {
      return '+';
    }
    if (number === 63) {
      return '/';
    }
    throw new TypeError('Tried to encode large digit ' + number + ' in base64.');
  }
  var ParseFile = (function() {
    function ParseFile(name, data, type) {
      _classCallCheck(this, ParseFile);
      var specifiedType = type || '';
      this._name = name;
      if (Array.isArray(data)) {
        this._source = {
          format: 'base64',
          base64: ParseFile.encodeBase64(data),
          type: specifiedType
        };
      } else if (typeof File !== 'undefined' && data instanceof File) {
        this._source = {
          format: 'file',
          file: data,
          type: specifiedType
        };
      } else if (data && data.hasOwnProperty('base64')) {
        var matches = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/.exec(data.base64);
        if (matches && matches.length > 0) {
          this._source = {
            format: 'base64',
            base64: matches.length === 4 ? matches[3] : matches[2],
            type: matches[1]
          };
        } else {
          this._source = {
            format: 'base64',
            base64: data.base64,
            type: specifiedType
          };
        }
      } else if (typeof data !== 'undefined') {
        throw new TypeError('Cannot create a Parse.File with that data.');
      }
    }
    _createClass(ParseFile, [{
      key: 'name',
      value: function name() {
        return this._name;
      }
    }, {
      key: 'url',
      value: function url() {
        return this._url;
      }
    }, {
      key: 'save',
      value: function save(options) {
        var _this = this;
        options = options || {};
        var controller = _CoreManager2['default'].getFileController();
        if (!this._previousSave) {
          if (this._source.format === 'file') {
            this._previousSave = controller.saveFile(this._name, this._source).then(function(res) {
              _this._name = res.name;
              _this._url = res.url;
              return _this;
            });
          } else {
            this._previousSave = controller.saveBase64(this._name, this._source).then(function(res) {
              _this._name = res.name;
              _this._url = res.url;
              return _this;
            });
          }
        }
        if (this._previousSave) {
          return this._previousSave._thenRunCallbacks(options);
        }
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {
          __type: 'File',
          name: this._name,
          url: this._url
        };
      }
    }, {
      key: 'equals',
      value: function equals(other) {
        if (this === other) {
          return true;
        }
        return other instanceof ParseFile && this.name() === other.name() && this.url() === other.url() && typeof this.url() !== 'undefined';
      }
    }], [{
      key: 'fromJSON',
      value: function fromJSON(obj) {
        if (obj.__type !== 'File') {
          throw new TypeError('JSON object does not represent a ParseFile');
        }
        var file = new ParseFile(obj.name);
        file._url = obj.url;
        return file;
      }
    }, {
      key: 'encodeBase64',
      value: function encodeBase64(bytes) {
        var chunks = [];
        chunks.length = Math.ceil(bytes.length / 3);
        for (var i = 0; i < chunks.length; i++) {
          var b1 = bytes[i * 3];
          var b2 = bytes[i * 3 + 1] || 0;
          var b3 = bytes[i * 3 + 2] || 0;
          var has2 = i * 3 + 1 < bytes.length;
          var has3 = i * 3 + 2 < bytes.length;
          chunks[i] = [b64Digit(b1 >> 2 & 0x3F), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0F), has2 ? b64Digit(b2 << 2 & 0x3C | b3 >> 6 & 0x03) : '=', has3 ? b64Digit(b3 & 0x3F) : '='].join('');
        }
        return chunks.join('');
      }
    }]);
    return ParseFile;
  })();
  exports['default'] = ParseFile;
  _CoreManager2['default'].setFileController({
    saveFile: function saveFile(name, source) {
      if (source.format !== 'file') {
        throw new Error('saveFile can only be used with File-type sources.');
      }
      var headers = {
        'X-Parse-Application-ID': _CoreManager2['default'].get('APPLICATION_ID'),
        'X-Parse-JavaScript-Key': _CoreManager2['default'].get('JAVASCRIPT_KEY')
      };
      var url = _CoreManager2['default'].get('SERVER_URL');
      if (url[url.length - 1] !== '/') {
        url += '/';
      }
      url += 'files/' + name;
      return _CoreManager2['default'].getRESTController().ajax('POST', url, source.file, headers);
    },
    saveBase64: function saveBase64(name, source) {
      if (source.format !== 'base64') {
        throw new Error('saveBase64 can only be used with Base64-type sources.');
      }
      var data = {base64: source.base64};
      if (source.type) {
        data._ContentType = source.type;
      }
      return _CoreManager2['default'].getRESTController().request('POST', 'files/' + name, data);
    }
  });
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("78", ["73", "8b", "88", "8c", "7f", "a3", "89"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = decode;
  var _ParseACL = $__require('8b');
  var _ParseACL2 = _interopRequireDefault(_ParseACL);
  var _ParseFile = $__require('88');
  var _ParseFile2 = _interopRequireDefault(_ParseFile);
  var _ParseGeoPoint = $__require('8c');
  var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  var _ParseOp = $__require('a3');
  var _ParseRelation = $__require('89');
  var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
  function decode(value) {
    if (value === null || typeof value !== 'object') {
      return value;
    }
    if (Array.isArray(value)) {
      var dup = [];
      value.forEach(function(v, i) {
        dup[i] = decode(v);
      });
      return dup;
    }
    if (typeof value.__op === 'string') {
      return (0, _ParseOp.opFromJSON)(value);
    }
    if (value.__type === 'Pointer' && value.className) {
      return _ParseObject2['default'].fromJSON(value);
    }
    if (value.__type === 'Object' && value.className) {
      return _ParseObject2['default'].fromJSON(value);
    }
    if (value.__type === 'Relation') {
      var relation = new _ParseRelation2['default'](null, null);
      relation.targetClassName = value.className;
      return relation;
    }
    if (value.__type === 'Date') {
      return new Date(value.iso);
    }
    if (value.__type === 'File') {
      return _ParseFile2['default'].fromJSON(value);
    }
    if (value.__type === 'GeoPoint') {
      return new _ParseGeoPoint2['default']({
        latitude: value.latitude,
        longitude: value.longitude
      });
    }
    var copy = {};
    for (var k in value) {
      copy[k] = decode(value[k]);
    }
    return copy;
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b0", ["73", "7f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = arrayContainsObject;
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  function arrayContainsObject(array, object) {
    if (array.indexOf(object) > -1) {
      return true;
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] instanceof _ParseObject2['default'] && array[i].className === object.className && array[i]._getId() === object._getId()) {
        return true;
      }
    }
    return false;
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b1", ["73", "b0", "7f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = unique;
  var _arrayContainsObject = $__require('b0');
  var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  function unique(arr) {
    var uniques = [];
    arr.forEach(function(value) {
      if (value instanceof _ParseObject2['default']) {
        if (!(0, _arrayContainsObject2['default'])(uniques, value)) {
          uniques.push(value);
        }
      } else {
        if (uniques.indexOf(value) < 0) {
          uniques.push(value);
        }
      }
    });
    return uniques;
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a3", ["c", "d", "a", "b", "73", "b0", "78", "62", "7f", "89", "b1"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _get = $__require('a')['default'];
  var _inherits = $__require('b')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports.opFromJSON = opFromJSON;
  var _arrayContainsObject = $__require('b0');
  var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);
  var _decode = $__require('78');
  var _decode2 = _interopRequireDefault(_decode);
  var _encode = $__require('62');
  var _encode2 = _interopRequireDefault(_encode);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  var _ParseRelation = $__require('89');
  var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
  var _unique = $__require('b1');
  var _unique2 = _interopRequireDefault(_unique);
  function opFromJSON(json) {
    if (!json || !json.__op) {
      return null;
    }
    switch (json.__op) {
      case 'Delete':
        return new UnsetOp();
      case 'Increment':
        return new IncrementOp(json.amount);
      case 'Add':
        return new AddOp((0, _decode2['default'])(json.objects));
      case 'AddUnique':
        return new AddUniqueOp((0, _decode2['default'])(json.objects));
      case 'Remove':
        return new RemoveOp((0, _decode2['default'])(json.objects));
      case 'AddRelation':
        var toAdd = (0, _decode2['default'])(json.objects);
        if (!Array.isArray(toAdd)) {
          return new RelationOp([], []);
        }
        return new RelationOp(toAdd, []);
      case 'RemoveRelation':
        var toRemove = (0, _decode2['default'])(json.objects);
        if (!Array.isArray(toRemove)) {
          return new RelationOp([], []);
        }
        return new RelationOp([], toRemove);
      case 'Batch':
        var toAdd = [];
        var toRemove = [];
        for (var i = 0; i < json.ops.length; i++) {
          if (json.ops[i].__op === 'AddRelation') {
            toAdd = toAdd.concat((0, _decode2['default'])(json.ops[i].objects));
          } else if (json.ops[i].__op === 'RemoveRelation') {
            toRemove = toRemove.concat((0, _decode2['default'])(json.ops[i].objects));
          }
        }
        return new RelationOp(toAdd, toRemove);
    }
    return null;
  }
  var Op = (function() {
    function Op() {
      _classCallCheck(this, Op);
    }
    _createClass(Op, [{
      key: 'applyTo',
      value: function applyTo(value) {}
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {}
    }, {
      key: 'toJSON',
      value: function toJSON() {}
    }]);
    return Op;
  })();
  exports.Op = Op;
  var SetOp = (function(_Op) {
    _inherits(SetOp, _Op);
    function SetOp(value) {
      _classCallCheck(this, SetOp);
      _get(Object.getPrototypeOf(SetOp.prototype), 'constructor', this).call(this);
      this._value = value;
    }
    _createClass(SetOp, [{
      key: 'applyTo',
      value: function applyTo(value) {
        return this._value;
      }
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {
        return new SetOp(this._value);
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return (0, _encode2['default'])(this._value, false, true);
      }
    }]);
    return SetOp;
  })(Op);
  exports.SetOp = SetOp;
  var UnsetOp = (function(_Op2) {
    _inherits(UnsetOp, _Op2);
    function UnsetOp() {
      _classCallCheck(this, UnsetOp);
      _get(Object.getPrototypeOf(UnsetOp.prototype), 'constructor', this).apply(this, arguments);
    }
    _createClass(UnsetOp, [{
      key: 'applyTo',
      value: function applyTo(value) {
        return undefined;
      }
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {
        return new UnsetOp();
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {__op: 'Delete'};
      }
    }]);
    return UnsetOp;
  })(Op);
  exports.UnsetOp = UnsetOp;
  var IncrementOp = (function(_Op3) {
    _inherits(IncrementOp, _Op3);
    function IncrementOp(amount) {
      _classCallCheck(this, IncrementOp);
      _get(Object.getPrototypeOf(IncrementOp.prototype), 'constructor', this).call(this);
      if (typeof amount !== 'number') {
        throw new TypeError('Increment Op must be initialized with a numeric amount.');
      }
      this._amount = amount;
    }
    _createClass(IncrementOp, [{
      key: 'applyTo',
      value: function applyTo(value) {
        if (typeof value === 'undefined') {
          return this._amount;
        }
        if (typeof value !== 'number') {
          throw new TypeError('Cannot increment a non-numeric value.');
        }
        return this._amount + value;
      }
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {
        if (!previous) {
          return this;
        }
        if (previous instanceof SetOp) {
          return new SetOp(this.applyTo(previous._value));
        }
        if (previous instanceof UnsetOp) {
          return new SetOp(this._amount);
        }
        if (previous instanceof IncrementOp) {
          return new IncrementOp(this.applyTo(previous._amount));
        }
        throw new Error('Cannot merge Increment Op with the previous Op');
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {
          __op: 'Increment',
          amount: this._amount
        };
      }
    }]);
    return IncrementOp;
  })(Op);
  exports.IncrementOp = IncrementOp;
  var AddOp = (function(_Op4) {
    _inherits(AddOp, _Op4);
    function AddOp(value) {
      _classCallCheck(this, AddOp);
      _get(Object.getPrototypeOf(AddOp.prototype), 'constructor', this).call(this);
      this._value = Array.isArray(value) ? value : [value];
    }
    _createClass(AddOp, [{
      key: 'applyTo',
      value: function applyTo(value) {
        if (value == null) {
          return this._value;
        }
        if (Array.isArray(value)) {
          return value.concat(this._value);
        }
        throw new Error('Cannot add elements to a non-array value');
      }
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {
        if (!previous) {
          return this;
        }
        if (previous instanceof SetOp) {
          return new SetOp(this.applyTo(previous._value));
        }
        if (previous instanceof UnsetOp) {
          return new SetOp(this._value);
        }
        if (previous instanceof AddOp) {
          return new AddOp(this.applyTo(previous._value));
        }
        throw new Error('Cannot merge Add Op with the previous Op');
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {
          __op: 'Add',
          objects: (0, _encode2['default'])(this._value, false, true)
        };
      }
    }]);
    return AddOp;
  })(Op);
  exports.AddOp = AddOp;
  var AddUniqueOp = (function(_Op5) {
    _inherits(AddUniqueOp, _Op5);
    function AddUniqueOp(value) {
      _classCallCheck(this, AddUniqueOp);
      _get(Object.getPrototypeOf(AddUniqueOp.prototype), 'constructor', this).call(this);
      this._value = (0, _unique2['default'])(Array.isArray(value) ? value : [value]);
    }
    _createClass(AddUniqueOp, [{
      key: 'applyTo',
      value: function applyTo(value) {
        if (value == null) {
          return this._value || [];
        }
        if (Array.isArray(value)) {
          var valueCopy = value;
          var toAdd = [];
          this._value.forEach(function(v) {
            if (v instanceof _ParseObject2['default']) {
              if (!(0, _arrayContainsObject2['default'])(valueCopy, v)) {
                toAdd.push(v);
              }
            } else {
              if (valueCopy.indexOf(v) < 0) {
                toAdd.push(v);
              }
            }
          });
          return value.concat(toAdd);
        }
        throw new Error('Cannot add elements to a non-array value');
      }
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {
        if (!previous) {
          return this;
        }
        if (previous instanceof SetOp) {
          return new SetOp(this.applyTo(previous._value));
        }
        if (previous instanceof UnsetOp) {
          return new SetOp(this._value);
        }
        if (previous instanceof AddUniqueOp) {
          return new AddUniqueOp(this.applyTo(previous._value));
        }
        throw new Error('Cannot merge AddUnique Op with the previous Op');
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {
          __op: 'AddUnique',
          objects: (0, _encode2['default'])(this._value, false, true)
        };
      }
    }]);
    return AddUniqueOp;
  })(Op);
  exports.AddUniqueOp = AddUniqueOp;
  var RemoveOp = (function(_Op6) {
    _inherits(RemoveOp, _Op6);
    function RemoveOp(value) {
      _classCallCheck(this, RemoveOp);
      _get(Object.getPrototypeOf(RemoveOp.prototype), 'constructor', this).call(this);
      this._value = (0, _unique2['default'])(Array.isArray(value) ? value : [value]);
    }
    _createClass(RemoveOp, [{
      key: 'applyTo',
      value: function applyTo(value) {
        if (value == null) {
          return [];
        }
        if (Array.isArray(value)) {
          var i = value.indexOf(this._value);
          var removed = value.concat([]);
          for (var i = 0; i < this._value.length; i++) {
            var index = removed.indexOf(this._value[i]);
            while (index > -1) {
              removed.splice(index, 1);
              index = removed.indexOf(this._value[i]);
            }
            if (this._value[i] instanceof _ParseObject2['default'] && this._value[i].id) {
              for (var j = 0; j < removed.length; j++) {
                if (removed[j] instanceof _ParseObject2['default'] && this._value[i].id === removed[j].id) {
                  removed.splice(j, 1);
                  j--;
                }
              }
            }
          }
          return removed;
        }
        throw new Error('Cannot remove elements from a non-array value');
      }
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {
        if (!previous) {
          return this;
        }
        if (previous instanceof SetOp) {
          return new SetOp(this.applyTo(previous._value));
        }
        if (previous instanceof UnsetOp) {
          return new UnsetOp();
        }
        if (previous instanceof RemoveOp) {
          var uniques = previous._value.concat([]);
          for (var i = 0; i < this._value.length; i++) {
            if (this._value[i] instanceof _ParseObject2['default']) {
              if (!(0, _arrayContainsObject2['default'])(uniques, this._value[i])) {
                uniques.push(this._value[i]);
              }
            } else {
              if (uniques.indexOf(this._value[i]) < 0) {
                uniques.push(this._value[i]);
              }
            }
          }
          return new RemoveOp(uniques);
        }
        throw new Error('Cannot merge Remove Op with the previous Op');
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {
          __op: 'Remove',
          objects: (0, _encode2['default'])(this._value, false, true)
        };
      }
    }]);
    return RemoveOp;
  })(Op);
  exports.RemoveOp = RemoveOp;
  var RelationOp = (function(_Op7) {
    _inherits(RelationOp, _Op7);
    function RelationOp(adds, removes) {
      _classCallCheck(this, RelationOp);
      _get(Object.getPrototypeOf(RelationOp.prototype), 'constructor', this).call(this);
      this._targetClassName = null;
      if (Array.isArray(adds)) {
        this.relationsToAdd = (0, _unique2['default'])(adds.map(this._extractId, this));
      }
      if (Array.isArray(removes)) {
        this.relationsToRemove = (0, _unique2['default'])(removes.map(this._extractId, this));
      }
    }
    _createClass(RelationOp, [{
      key: '_extractId',
      value: function _extractId(obj) {
        if (typeof obj === 'string') {
          return obj;
        }
        if (!obj.id) {
          throw new Error('You cannot add or remove an unsaved Parse Object from a relation');
        }
        if (!this._targetClassName) {
          this._targetClassName = obj.className;
        }
        if (this._targetClassName !== obj.className) {
          throw new Error('Tried to create a Relation with 2 different object types: ' + this._targetClassName + ' and ' + obj.className + '.');
        }
        return obj.id;
      }
    }, {
      key: 'applyTo',
      value: function applyTo(value, object, key) {
        if (!value) {
          var parent = new _ParseObject2['default'](object.className);
          if (object.id && object.id.indexOf('local') === 0) {
            parent._localId = object.id;
          } else if (object.id) {
            parent.id = object.id;
          }
          var relation = new _ParseRelation2['default'](parent, key);
          relation.targetClassName = this._targetClassName;
          return relation;
        }
        if (value instanceof _ParseRelation2['default']) {
          if (this._targetClassName) {
            if (value.targetClassName) {
              if (this._targetClassName !== value.targetClassName) {
                throw new Error('Related object must be a ' + value.targetClassName + ', but a ' + this._targetClassName + ' was passed in.');
              }
            } else {
              value.targetClassName = this._targetClassName;
            }
          }
          return value;
        } else {
          throw new Error('Relation cannot be applied to a non-relation field');
        }
      }
    }, {
      key: 'mergeWith',
      value: function mergeWith(previous) {
        if (!previous) {
          return this;
        } else if (previous instanceof UnsetOp) {
          throw new Error('You cannot modify a relation after deleting it.');
        } else if (previous instanceof RelationOp) {
          if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
            throw new Error('Related object must be of class ' + previous._targetClassName + ', but ' + (this._targetClassName || 'null') + ' was passed in.');
          }
          var newAdd = previous.relationsToAdd.concat([]);
          this.relationsToRemove.forEach(function(r) {
            var index = newAdd.indexOf(r);
            if (index > -1) {
              newAdd.splice(index, 1);
            }
          });
          this.relationsToAdd.forEach(function(r) {
            var index = newAdd.indexOf(r);
            if (index < 0) {
              newAdd.push(r);
            }
          });
          var newRemove = previous.relationsToRemove.concat([]);
          this.relationsToAdd.forEach(function(r) {
            var index = newRemove.indexOf(r);
            if (index > -1) {
              newRemove.splice(index, 1);
            }
          });
          this.relationsToRemove.forEach(function(r) {
            var index = newRemove.indexOf(r);
            if (index < 0) {
              newRemove.push(r);
            }
          });
          var newRelation = new RelationOp(newAdd, newRemove);
          newRelation._targetClassName = this._targetClassName;
          return newRelation;
        }
        throw new Error('Cannot merge Relation Op with the previous Op');
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        var _this = this;
        var idToPointer = function idToPointer(id) {
          return {
            __type: 'Pointer',
            className: _this._targetClassName,
            objectId: id
          };
        };
        var adds = null;
        var removes = null;
        var pointers = null;
        if (this.relationsToAdd.length > 0) {
          pointers = this.relationsToAdd.map(idToPointer);
          adds = {
            __op: 'AddRelation',
            objects: pointers
          };
        }
        if (this.relationsToRemove.length > 0) {
          pointers = this.relationsToRemove.map(idToPointer);
          removes = {
            __op: 'RemoveRelation',
            objects: pointers
          };
        }
        if (adds && removes) {
          return {
            __op: 'Batch',
            ops: [adds, removes]
          };
        }
        return adds || removes || {};
      }
    }]);
    return RelationOp;
  })(Op);
  exports.RelationOp = RelationOp;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("62", ["8d", "73", "8b", "88", "8c", "7f", "a3", "89"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$keys = $__require('8d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _ParseACL = $__require('8b');
  var _ParseACL2 = _interopRequireDefault(_ParseACL);
  var _ParseFile = $__require('88');
  var _ParseFile2 = _interopRequireDefault(_ParseFile);
  var _ParseGeoPoint = $__require('8c');
  var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  var _ParseOp = $__require('a3');
  var _ParseRelation = $__require('89');
  var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
  var toString = Object.prototype.toString;
  function encode(value, disallowObjects, forcePointers, seen) {
    if (value instanceof _ParseObject2['default']) {
      if (disallowObjects) {
        throw new Error('Parse Objects not allowed here');
      }
      var seenEntry = value.id ? value.className + ':' + value.id : value;
      if (forcePointers || !seen || seen.indexOf(seenEntry) > -1 || value.dirty() || _Object$keys(value._getServerData()).length < 1) {
        return value.toPointer();
      }
      seen = seen.concat(seenEntry);
      return value._toFullJSON(seen);
    }
    if (value instanceof _ParseOp.Op || value instanceof _ParseACL2['default'] || value instanceof _ParseGeoPoint2['default'] || value instanceof _ParseRelation2['default']) {
      return value.toJSON();
    }
    if (value instanceof _ParseFile2['default']) {
      if (!value.url()) {
        throw new Error('Tried to encode an unsaved file.');
      }
      return value.toJSON();
    }
    if (toString.call(value) === '[object Date]') {
      if (isNaN(value)) {
        throw new Error('Tried to encode an invalid date.');
      }
      return {
        __type: 'Date',
        iso: value.toJSON()
      };
    }
    if (toString.call(value) === '[object RegExp]' && typeof value.source === 'string') {
      return value.source;
    }
    if (Array.isArray(value)) {
      return value.map(function(v) {
        return encode(v, disallowObjects, forcePointers, seen);
      });
    }
    if (value && typeof value === 'object') {
      var output = {};
      for (var k in value) {
        output[k] = encode(value[k], disallowObjects, forcePointers, seen);
      }
      return output;
    }
    return value;
  }
  exports['default'] = function(value, disallowObjects, forcePointers, seen) {
    return encode(value, !!disallowObjects, !!forcePointers, seen || []);
  };
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("75", ["d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _classCallCheck = $__require('d')["default"];
  Object.defineProperty(exports, "__esModule", {value: true});
  var ParseError = function ParseError(code, message) {
    _classCallCheck(this, ParseError);
    this.code = code;
    this.message = message;
  };
  ;
  exports["default"] = ParseError;
  ParseError.OTHER_CAUSE = -1;
  ParseError.INTERNAL_SERVER_ERROR = 1;
  ParseError.CONNECTION_FAILED = 100;
  ParseError.OBJECT_NOT_FOUND = 101;
  ParseError.INVALID_QUERY = 102;
  ParseError.INVALID_CLASS_NAME = 103;
  ParseError.MISSING_OBJECT_ID = 104;
  ParseError.INVALID_KEY_NAME = 105;
  ParseError.INVALID_POINTER = 106;
  ParseError.INVALID_JSON = 107;
  ParseError.COMMAND_UNAVAILABLE = 108;
  ParseError.NOT_INITIALIZED = 109;
  ParseError.INCORRECT_TYPE = 111;
  ParseError.INVALID_CHANNEL_NAME = 112;
  ParseError.PUSH_MISCONFIGURED = 115;
  ParseError.OBJECT_TOO_LARGE = 116;
  ParseError.OPERATION_FORBIDDEN = 119;
  ParseError.CACHE_MISS = 120;
  ParseError.INVALID_NESTED_KEY = 121;
  ParseError.INVALID_FILE_NAME = 122;
  ParseError.INVALID_ACL = 123;
  ParseError.TIMEOUT = 124;
  ParseError.INVALID_EMAIL_ADDRESS = 125;
  ParseError.MISSING_CONTENT_TYPE = 126;
  ParseError.MISSING_CONTENT_LENGTH = 127;
  ParseError.INVALID_CONTENT_LENGTH = 128;
  ParseError.FILE_TOO_LARGE = 129;
  ParseError.FILE_SAVE_ERROR = 130;
  ParseError.DUPLICATE_VALUE = 137;
  ParseError.INVALID_ROLE_NAME = 139;
  ParseError.EXCEEDED_QUOTA = 140;
  ParseError.SCRIPT_FAILED = 141;
  ParseError.VALIDATION_ERROR = 142;
  ParseError.INVALID_IMAGE_DATA = 143;
  ParseError.UNSAVED_FILE_ERROR = 151;
  ParseError.INVALID_PUSH_TIME_ERROR = 152;
  ParseError.FILE_DELETE_ERROR = 153;
  ParseError.REQUEST_LIMIT_EXCEEDED = 155;
  ParseError.INVALID_EVENT_NAME = 160;
  ParseError.USERNAME_MISSING = 200;
  ParseError.PASSWORD_MISSING = 201;
  ParseError.USERNAME_TAKEN = 202;
  ParseError.EMAIL_TAKEN = 203;
  ParseError.EMAIL_MISSING = 204;
  ParseError.EMAIL_NOT_FOUND = 205;
  ParseError.SESSION_MISSING = 206;
  ParseError.MUST_CREATE_USER_THROUGH_SIGNUP = 207;
  ParseError.ACCOUNT_ALREADY_LINKED = 208;
  ParseError.INVALID_SESSION_TOKEN = 209;
  ParseError.LINKED_ID_MISSING = 250;
  ParseError.INVALID_LINKED_SESSION = 251;
  ParseError.UNSUPPORTED_SERVICE = 252;
  ParseError.AGGREGATE_ERROR = 600;
  ParseError.FILE_READ_ERROR = 601;
  ParseError.X_DOMAIN_REQUEST = 602;
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8c", ["c", "d", "73", "71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  var ParseGeoPoint = (function() {
    function ParseGeoPoint(arg1, arg2) {
      _classCallCheck(this, ParseGeoPoint);
      if (Array.isArray(arg1)) {
        ParseGeoPoint._validate(arg1[0], arg1[1]);
        this._latitude = arg1[0];
        this._longitude = arg1[1];
      } else if (typeof arg1 === 'object') {
        ParseGeoPoint._validate(arg1.latitude, arg1.longitude);
        this._latitude = arg1.latitude;
        this._longitude = arg1.longitude;
      } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        ParseGeoPoint._validate(arg1, arg2);
        this._latitude = arg1;
        this._longitude = arg2;
      } else {
        this._latitude = 0;
        this._longitude = 0;
      }
    }
    _createClass(ParseGeoPoint, [{
      key: 'toJSON',
      value: function toJSON() {
        ParseGeoPoint._validate(this._latitude, this._longitude);
        return {
          __type: 'GeoPoint',
          latitude: this._latitude,
          longitude: this._longitude
        };
      }
    }, {
      key: 'equals',
      value: function equals(other) {
        return other instanceof ParseGeoPoint && this.latitude === other.latitude && this.longitude === other.longitude;
      }
    }, {
      key: 'radiansTo',
      value: function radiansTo(point) {
        var d2r = Math.PI / 180.0;
        var lat1rad = this.latitude * d2r;
        var long1rad = this.longitude * d2r;
        var lat2rad = point.latitude * d2r;
        var long2rad = point.longitude * d2r;
        var sinDeltaLatDiv2 = Math.sin((lat1rad - lat2rad) / 2);
        var sinDeltaLongDiv2 = Math.sin((long1rad - long2rad) / 2);
        var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
        a = Math.min(1.0, a);
        return 2 * Math.asin(Math.sqrt(a));
      }
    }, {
      key: 'kilometersTo',
      value: function kilometersTo(point) {
        return this.radiansTo(point) * 6371.0;
      }
    }, {
      key: 'milesTo',
      value: function milesTo(point) {
        return this.radiansTo(point) * 3958.8;
      }
    }, {
      key: 'latitude',
      get: function get() {
        return this._latitude;
      },
      set: function set(val) {
        ParseGeoPoint._validate(val, this.longitude);
        this._latitude = val;
      }
    }, {
      key: 'longitude',
      get: function get() {
        return this._longitude;
      },
      set: function set(val) {
        ParseGeoPoint._validate(this.latitude, val);
        this._longitude = val;
      }
    }], [{
      key: '_validate',
      value: function _validate(latitude, longitude) {
        if (latitude !== latitude || longitude !== longitude) {
          throw new TypeError('GeoPoint latitude and longitude must be valid numbers');
        }
        if (latitude < -90.0) {
          throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' < -90.0.');
        }
        if (latitude > 90.0) {
          throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' > 90.0.');
        }
        if (longitude < -180.0) {
          throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' < -180.0.');
        }
        if (longitude > 180.0) {
          throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' > 180.0.');
        }
      }
    }, {
      key: 'current',
      value: function current(options) {
        var promise = new _ParsePromise2['default']();
        navigator.geolocation.getCurrentPosition(function(location) {
          promise.resolve(new ParseGeoPoint(location.coords.latitude, location.coords.longitude));
        }, function(error) {
          promise.reject(error);
        });
        return promise._thenRunCallbacks(options);
      }
    }]);
    return ParseGeoPoint;
  })();
  exports['default'] = ParseGeoPoint;
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("81", ["c", "d", "73", "5", "62", "75", "8c", "7f", "71", "58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var _createClass = $__require('c')['default'];
    var _classCallCheck = $__require('d')['default'];
    var _interopRequireDefault = $__require('73')['default'];
    Object.defineProperty(exports, '__esModule', {value: true});
    var _CoreManager = $__require('5');
    var _CoreManager2 = _interopRequireDefault(_CoreManager);
    var _encode = $__require('62');
    var _encode2 = _interopRequireDefault(_encode);
    var _ParseError = $__require('75');
    var _ParseError2 = _interopRequireDefault(_ParseError);
    var _ParseGeoPoint = $__require('8c');
    var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
    var _ParseObject = $__require('7f');
    var _ParseObject2 = _interopRequireDefault(_ParseObject);
    var _ParsePromise = $__require('71');
    var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
    function quote(s) {
      return '\\Q' + s.replace('\\E', '\\E\\\\E\\Q') + '\\E';
    }
    var ParseQuery = (function() {
      function ParseQuery(objectClass) {
        _classCallCheck(this, ParseQuery);
        if (typeof objectClass === 'string') {
          if (objectClass === 'User' && _CoreManager2['default'].get('PERFORM_USER_REWRITE')) {
            this.className = '_User';
          } else {
            this.className = objectClass;
          }
        } else if (objectClass instanceof _ParseObject2['default']) {
          this.className = objectClass.className;
        } else if (typeof objectClass === 'function') {
          if (typeof objectClass.className === 'string') {
            this.className = objectClass.className;
          } else {
            var obj = new objectClass();
            this.className = obj.className;
          }
        } else {
          throw new TypeError('A ParseQuery must be constructed with a ParseObject or class name.');
        }
        this._where = {};
        this._include = [];
        this._limit = -1;
        this._skip = 0;
        this._extraOptions = {};
      }
      _createClass(ParseQuery, [{
        key: '_orQuery',
        value: function _orQuery(queries) {
          var queryJSON = queries.map(function(q) {
            return q.toJSON().where;
          });
          this._where.$or = queryJSON;
          return this;
        }
      }, {
        key: '_addCondition',
        value: function _addCondition(key, condition, value) {
          if (!this._where[key] || typeof this._where[key] === 'string') {
            this._where[key] = {};
          }
          this._where[key][condition] = (0, _encode2['default'])(value, false, true);
          return this;
        }
      }, {
        key: 'toJSON',
        value: function toJSON() {
          var params = {where: this._where};
          if (this._include.length) {
            params.include = this._include.join(',');
          }
          if (this._select) {
            params.keys = this._select.join(',');
          }
          if (this._limit >= 0) {
            params.limit = this._limit;
          }
          if (this._skip > 0) {
            params.skip = this._skip;
          }
          if (this._order) {
            params.order = this._order.join(',');
          }
          for (var key in this._extraOptions) {
            params[key] = this._extraOptions[key];
          }
          return params;
        }
      }, {
        key: 'get',
        value: function get(objectId, options) {
          this.equalTo('objectId', objectId);
          var firstOptions = {};
          if (options && options.hasOwnProperty('useMasterKey')) {
            firstOptions.useMasterKey = options.useMasterKey;
          }
          if (options && options.hasOwnProperty('sessionToken')) {
            firstOptions.sessionToken = options.sessionToken;
          }
          return this.first(firstOptions).then(function(response) {
            if (response) {
              return response;
            }
            var errorObject = new _ParseError2['default'](_ParseError2['default'].OBJECT_NOT_FOUND, 'Object not found.');
            return _ParsePromise2['default'].error(errorObject);
          })._thenRunCallbacks(options, null);
        }
      }, {
        key: 'find',
        value: function find(options) {
          var _this = this;
          options = options || {};
          var findOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            findOptions.useMasterKey = options.useMasterKey;
          }
          if (options.hasOwnProperty('sessionToken')) {
            findOptions.sessionToken = options.sessionToken;
          }
          var controller = _CoreManager2['default'].getQueryController();
          return controller.find(this.className, this.toJSON(), findOptions).then(function(response) {
            return response.results.map(function(data) {
              var override = response.className || _this.className;
              if (!data.className) {
                data.className = override;
              }
              return _ParseObject2['default'].fromJSON(data);
            });
          })._thenRunCallbacks(options);
        }
      }, {
        key: 'count',
        value: function count(options) {
          options = options || {};
          var findOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            findOptions.useMasterKey = options.useMasterKey;
          }
          if (options.hasOwnProperty('sessionToken')) {
            findOptions.sessionToken = options.sessionToken;
          }
          var controller = _CoreManager2['default'].getQueryController();
          var params = this.toJSON();
          params.limit = 0;
          params.count = 1;
          return controller.find(this.className, params, findOptions).then(function(result) {
            return result.count;
          })._thenRunCallbacks(options);
        }
      }, {
        key: 'first',
        value: function first(options) {
          var _this2 = this;
          options = options || {};
          var findOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            findOptions.useMasterKey = options.useMasterKey;
          }
          if (options.hasOwnProperty('sessionToken')) {
            findOptions.sessionToken = options.sessionToken;
          }
          var controller = _CoreManager2['default'].getQueryController();
          var params = this.toJSON();
          params.limit = 1;
          return controller.find(this.className, params, findOptions).then(function(response) {
            var objects = response.results;
            if (!objects[0]) {
              return undefined;
            }
            if (!objects[0].className) {
              objects[0].className = _this2.className;
            }
            return _ParseObject2['default'].fromJSON(objects[0]);
          })._thenRunCallbacks(options);
        }
      }, {
        key: 'each',
        value: function each(callback, options) {
          options = options || {};
          if (this._order || this._skip || this._limit >= 0) {
            return _ParsePromise2['default'].error('Cannot iterate on a query with sort, skip, or limit.')._thenRunCallbacks(options);
          }
          var promise = new _ParsePromise2['default']();
          var query = new ParseQuery(this.className);
          query._limit = options.batchSize || 100;
          query._include = this._include.map(function(i) {
            return i;
          });
          if (this._select) {
            query._select = this._select.map(function(s) {
              return s;
            });
          }
          query._where = {};
          for (var attr in this._where) {
            var val = this._where[attr];
            if (Array.isArray(val)) {
              query._where[attr] = val.map(function(v) {
                return v;
              });
            } else if (val && typeof val === 'object') {
              var conditionMap = {};
              query._where[attr] = conditionMap;
              for (var cond in val) {
                conditionMap[cond] = val[cond];
              }
            } else {
              query._where[attr] = val;
            }
          }
          query.ascending('objectId');
          var findOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            findOptions.useMasterKey = options.useMasterKey;
          }
          if (options.hasOwnProperty('sessionToken')) {
            findOptions.sessionToken = options.sessionToken;
          }
          var finished = false;
          return _ParsePromise2['default']._continueWhile(function() {
            return !finished;
          }, function() {
            return query.find(findOptions).then(function(results) {
              var callbacksDone = _ParsePromise2['default'].as();
              results.forEach(function(result) {
                callbacksDone = callbacksDone.then(function() {
                  return callback(result);
                });
              });
              return callbacksDone.then(function() {
                if (results.length >= query._limit) {
                  query.greaterThan('objectId', results[results.length - 1].id);
                } else {
                  finished = true;
                }
              });
            });
          })._thenRunCallbacks(options);
        }
      }, {
        key: 'equalTo',
        value: function equalTo(key, value) {
          if (typeof value === 'undefined') {
            return this.doesNotExist(key);
          }
          this._where[key] = (0, _encode2['default'])(value, false, true);
          return this;
        }
      }, {
        key: 'notEqualTo',
        value: function notEqualTo(key, value) {
          return this._addCondition(key, '$ne', value);
        }
      }, {
        key: 'lessThan',
        value: function lessThan(key, value) {
          return this._addCondition(key, '$lt', value);
        }
      }, {
        key: 'greaterThan',
        value: function greaterThan(key, value) {
          return this._addCondition(key, '$gt', value);
        }
      }, {
        key: 'lessThanOrEqualTo',
        value: function lessThanOrEqualTo(key, value) {
          return this._addCondition(key, '$lte', value);
        }
      }, {
        key: 'greaterThanOrEqualTo',
        value: function greaterThanOrEqualTo(key, value) {
          return this._addCondition(key, '$gte', value);
        }
      }, {
        key: 'containedIn',
        value: function containedIn(key, value) {
          return this._addCondition(key, '$in', value);
        }
      }, {
        key: 'notContainedIn',
        value: function notContainedIn(key, value) {
          return this._addCondition(key, '$nin', value);
        }
      }, {
        key: 'containsAll',
        value: function containsAll(key, values) {
          return this._addCondition(key, '$all', values);
        }
      }, {
        key: 'exists',
        value: function exists(key) {
          return this._addCondition(key, '$exists', true);
        }
      }, {
        key: 'doesNotExist',
        value: function doesNotExist(key) {
          return this._addCondition(key, '$exists', false);
        }
      }, {
        key: 'matches',
        value: function matches(key, regex, modifiers) {
          this._addCondition(key, '$regex', regex);
          if (!modifiers) {
            modifiers = '';
          }
          if (regex.ignoreCase) {
            modifiers += 'i';
          }
          if (regex.multiline) {
            modifiers += 'm';
          }
          if (modifiers.length) {
            this._addCondition(key, '$options', modifiers);
          }
          return this;
        }
      }, {
        key: 'matchesQuery',
        value: function matchesQuery(key, query) {
          var queryJSON = query.toJSON();
          queryJSON.className = query.className;
          return this._addCondition(key, '$inQuery', queryJSON);
        }
      }, {
        key: 'doesNotMatchQuery',
        value: function doesNotMatchQuery(key, query) {
          var queryJSON = query.toJSON();
          queryJSON.className = query.className;
          return this._addCondition(key, '$notInQuery', queryJSON);
        }
      }, {
        key: 'matchesKeyInQuery',
        value: function matchesKeyInQuery(key, queryKey, query) {
          var queryJSON = query.toJSON();
          queryJSON.className = query.className;
          return this._addCondition(key, '$select', {
            key: queryKey,
            query: queryJSON
          });
        }
      }, {
        key: 'doesNotMatchKeyInQuery',
        value: function doesNotMatchKeyInQuery(key, queryKey, query) {
          var queryJSON = query.toJSON();
          queryJSON.className = query.className;
          return this._addCondition(key, '$dontSelect', {
            key: queryKey,
            query: queryJSON
          });
        }
      }, {
        key: 'contains',
        value: function contains(key, value) {
          if (typeof value !== 'string') {
            throw new Error('The value being searched for must be a string.');
          }
          return this._addCondition(key, '$regex', quote(value));
        }
      }, {
        key: 'startsWith',
        value: function startsWith(key, value) {
          if (typeof value !== 'string') {
            throw new Error('The value being searched for must be a string.');
          }
          return this._addCondition(key, '$regex', '^' + quote(value));
        }
      }, {
        key: 'endsWith',
        value: function endsWith(key, value) {
          if (typeof value !== 'string') {
            throw new Error('The value being searched for must be a string.');
          }
          return this._addCondition(key, '$regex', quote(value) + '$');
        }
      }, {
        key: 'near',
        value: function near(key, point) {
          if (!(point instanceof _ParseGeoPoint2['default'])) {
            point = new _ParseGeoPoint2['default'](point);
          }
          return this._addCondition(key, '$nearSphere', point);
        }
      }, {
        key: 'withinRadians',
        value: function withinRadians(key, point, distance) {
          this.near(key, point);
          return this._addCondition(key, '$maxDistance', distance);
        }
      }, {
        key: 'withinMiles',
        value: function withinMiles(key, point, distance) {
          return this.withinRadians(key, point, distance / 3958.8);
        }
      }, {
        key: 'withinKilometers',
        value: function withinKilometers(key, point, distance) {
          return this.withinRadians(key, point, distance / 6371.0);
        }
      }, {
        key: 'withinGeoBox',
        value: function withinGeoBox(key, southwest, northeast) {
          if (!(southwest instanceof _ParseGeoPoint2['default'])) {
            southwest = new _ParseGeoPoint2['default'](southwest);
          }
          if (!(northeast instanceof _ParseGeoPoint2['default'])) {
            northeast = new _ParseGeoPoint2['default'](northeast);
          }
          this._addCondition(key, '$within', {'$box': [southwest, northeast]});
          return this;
        }
      }, {
        key: 'ascending',
        value: function ascending() {
          this._order = [];
          for (var _len = arguments.length,
              keys = Array(_len),
              _key = 0; _key < _len; _key++) {
            keys[_key] = arguments[_key];
          }
          return this.addAscending.apply(this, keys);
        }
      }, {
        key: 'addAscending',
        value: function addAscending() {
          var _this3 = this;
          if (!this._order) {
            this._order = [];
          }
          for (var _len2 = arguments.length,
              keys = Array(_len2),
              _key2 = 0; _key2 < _len2; _key2++) {
            keys[_key2] = arguments[_key2];
          }
          keys.forEach(function(key) {
            if (Array.isArray(key)) {
              key = key.join();
            }
            _this3._order = _this3._order.concat(key.replace(/\s/g, '').split(','));
          });
          return this;
        }
      }, {
        key: 'descending',
        value: function descending() {
          this._order = [];
          for (var _len3 = arguments.length,
              keys = Array(_len3),
              _key3 = 0; _key3 < _len3; _key3++) {
            keys[_key3] = arguments[_key3];
          }
          return this.addDescending.apply(this, keys);
        }
      }, {
        key: 'addDescending',
        value: function addDescending() {
          var _this4 = this;
          if (!this._order) {
            this._order = [];
          }
          for (var _len4 = arguments.length,
              keys = Array(_len4),
              _key4 = 0; _key4 < _len4; _key4++) {
            keys[_key4] = arguments[_key4];
          }
          keys.forEach(function(key) {
            if (Array.isArray(key)) {
              key = key.join();
            }
            _this4._order = _this4._order.concat(key.replace(/\s/g, '').split(',').map(function(k) {
              return '-' + k;
            }));
          });
          return this;
        }
      }, {
        key: 'skip',
        value: function skip(n) {
          if (typeof n !== 'number' || n < 0) {
            throw new Error('You can only skip by a positive number');
          }
          this._skip = n;
          return this;
        }
      }, {
        key: 'limit',
        value: function limit(n) {
          if (typeof n !== 'number') {
            throw new Error('You can only set the limit to a numeric value');
          }
          this._limit = n;
          return this;
        }
      }, {
        key: 'include',
        value: function include() {
          var _this5 = this;
          for (var _len5 = arguments.length,
              keys = Array(_len5),
              _key5 = 0; _key5 < _len5; _key5++) {
            keys[_key5] = arguments[_key5];
          }
          keys.forEach(function(key) {
            if (Array.isArray(key)) {
              _this5._include = _this5._include.concat(key);
            } else {
              _this5._include.push(key);
            }
          });
          return this;
        }
      }, {
        key: 'select',
        value: function select() {
          var _this6 = this;
          if (!this._select) {
            this._select = [];
          }
          for (var _len6 = arguments.length,
              keys = Array(_len6),
              _key6 = 0; _key6 < _len6; _key6++) {
            keys[_key6] = arguments[_key6];
          }
          keys.forEach(function(key) {
            if (Array.isArray(key)) {
              _this6._select = _this6._select.concat(key);
            } else {
              _this6._select.push(key);
            }
          });
          return this;
        }
      }], [{
        key: 'or',
        value: function or() {
          var className = null;
          for (var _len7 = arguments.length,
              queries = Array(_len7),
              _key7 = 0; _key7 < _len7; _key7++) {
            queries[_key7] = arguments[_key7];
          }
          queries.forEach(function(q) {
            if (!className) {
              className = q.className;
            }
            if (className !== q.className) {
              throw new Error('All queries must be for the same class.');
            }
          });
          var query = new ParseQuery(className);
          query._orQuery(queries);
          return query;
        }
      }]);
      return ParseQuery;
    })();
    exports['default'] = ParseQuery;
    _CoreManager2['default'].setQueryController({find: function find(className, params, options) {
        var RESTController = _CoreManager2['default'].getRESTController();
        return RESTController.request('GET', 'classes/' + className, params, options);
      }});
    module.exports = exports['default'];
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("89", ["c", "d", "73", "a3", "7f", "81"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _ParseOp = $__require('a3');
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  var _ParseQuery = $__require('81');
  var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
  var ParseRelation = (function() {
    function ParseRelation(parent, key) {
      _classCallCheck(this, ParseRelation);
      this.parent = parent;
      this.key = key;
      this.targetClassName = null;
    }
    _createClass(ParseRelation, [{
      key: '_ensureParentAndKey',
      value: function _ensureParentAndKey(parent, key) {
        this.key = this.key || key;
        if (this.key !== key) {
          throw new Error('Internal Error. Relation retrieved from two different keys.');
        }
        if (this.parent) {
          if (this.parent.className !== parent.className) {
            throw new Error('Internal Error. Relation retrieved from two different Objects.');
          }
          if (this.parent.id) {
            if (this.parent.id !== parent.id) {
              throw new Error('Internal Error. Relation retrieved from two different Objects.');
            }
          } else if (parent.id) {
            this.parent = parent;
          }
        } else {
          this.parent = parent;
        }
      }
    }, {
      key: 'add',
      value: function add(objects) {
        if (!Array.isArray(objects)) {
          objects = [objects];
        }
        var change = new _ParseOp.RelationOp(objects, []);
        this.parent.set(this.key, change);
        this.targetClassName = change._targetClassName;
        return this.parent;
      }
    }, {
      key: 'remove',
      value: function remove(objects) {
        if (!Array.isArray(objects)) {
          objects = [objects];
        }
        var change = new _ParseOp.RelationOp([], objects);
        this.parent.set(this.key, change);
        this.targetClassName = change._targetClassName;
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {
          __type: 'Relation',
          className: this.targetClassName
        };
      }
    }, {
      key: 'query',
      value: function query() {
        var query;
        if (!this.targetClassName) {
          query = new _ParseQuery2['default'](this.parent.className);
          query._extraOptions.redirectClassNameForKey = this.key;
        } else {
          query = new _ParseQuery2['default'](this.targetClassName);
        }
        query._addCondition('$relatedTo', 'object', {
          __type: 'Pointer',
          className: this.parent.className,
          objectId: this.parent.id
        });
        query._addCondition('$relatedTo', 'key', this.key);
        return query;
      }
    }]);
    return ParseRelation;
  })();
  exports['default'] = ParseRelation;
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b2", ["73", "88", "7f", "89"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = unsavedChildren;
  var _ParseFile = $__require('88');
  var _ParseFile2 = _interopRequireDefault(_ParseFile);
  var _ParseObject = $__require('7f');
  var _ParseObject2 = _interopRequireDefault(_ParseObject);
  var _ParseRelation = $__require('89');
  var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
  function unsavedChildren(obj, allowDeepUnsaved) {
    var encountered = {
      objects: {},
      files: []
    };
    var identifier = obj.className + ':' + obj._getId();
    encountered.objects[identifier] = obj.dirty() ? obj : true;
    var attributes = obj.attributes;
    for (var attr in attributes) {
      if (typeof attributes[attr] === 'object') {
        traverse(attributes[attr], encountered, false, !!allowDeepUnsaved);
      }
    }
    var unsaved = [];
    for (var id in encountered.objects) {
      if (id !== identifier && encountered.objects[id] !== true) {
        unsaved.push(encountered.objects[id]);
      }
    }
    return unsaved.concat(encountered.files);
  }
  function traverse(obj, encountered, shouldThrow, allowDeepUnsaved) {
    if (obj instanceof _ParseObject2['default']) {
      if (!obj.id && shouldThrow) {
        throw new Error('Cannot create a pointer to an unsaved Object.');
      }
      var identifier = obj.className + ':' + obj._getId();
      if (!encountered.objects[identifier]) {
        encountered.objects[identifier] = obj.dirty() ? obj : true;
        var attributes = obj.attributes;
        for (var attr in attributes) {
          if (typeof attributes[attr] === 'object') {
            traverse(attributes[attr], encountered, !allowDeepUnsaved, allowDeepUnsaved);
          }
        }
      }
      return;
    }
    if (obj instanceof _ParseFile2['default']) {
      if (!obj.url() && encountered.files.indexOf(obj) < 0) {
        encountered.files.push(obj);
      }
      return;
    }
    if (obj instanceof _ParseRelation2['default']) {
      return;
    }
    if (Array.isArray(obj)) {
      obj.forEach(function(el) {
        traverse(el, encountered, shouldThrow, allowDeepUnsaved);
      });
    }
    for (var k in obj) {
      if (typeof obj[k] === 'object') {
        traverse(obj[k], encountered, shouldThrow, allowDeepUnsaved);
      }
    }
  }
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7f", ["c", "d", "8d", "86", "ab", "b3", "73", "90", "5", "87", "78", "62", "8a", "7a", "8b", "7c", "75", "88", "a3", "71", "81", "89", "8e", "b1", "a4", "b2"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _Object$keys = $__require('8d')['default'];
  var _Object$freeze = $__require('86')['default'];
  var _Object$create = $__require('ab')['default'];
  var _Object$defineProperty = $__require('b3')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  var _interopRequireWildcard = $__require('90')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _canBeSerialized = $__require('87');
  var _canBeSerialized2 = _interopRequireDefault(_canBeSerialized);
  var _decode = $__require('78');
  var _decode2 = _interopRequireDefault(_decode);
  var _encode = $__require('62');
  var _encode2 = _interopRequireDefault(_encode);
  var _equals = $__require('8a');
  var _equals2 = _interopRequireDefault(_equals);
  var _escape2 = $__require('7a');
  var _escape3 = _interopRequireDefault(_escape2);
  var _ParseACL = $__require('8b');
  var _ParseACL2 = _interopRequireDefault(_ParseACL);
  var _parseDate = $__require('7c');
  var _parseDate2 = _interopRequireDefault(_parseDate);
  var _ParseError = $__require('75');
  var _ParseError2 = _interopRequireDefault(_ParseError);
  var _ParseFile = $__require('88');
  var _ParseFile2 = _interopRequireDefault(_ParseFile);
  var _ParseOp = $__require('a3');
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  var _ParseQuery = $__require('81');
  var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
  var _ParseRelation = $__require('89');
  var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
  var _SingleInstanceStateController = $__require('8e');
  var SingleInstanceStateController = _interopRequireWildcard(_SingleInstanceStateController);
  var _unique = $__require('b1');
  var _unique2 = _interopRequireDefault(_unique);
  var _UniqueInstanceStateController = $__require('a4');
  var UniqueInstanceStateController = _interopRequireWildcard(_UniqueInstanceStateController);
  var _unsavedChildren = $__require('b2');
  var _unsavedChildren2 = _interopRequireDefault(_unsavedChildren);
  var classMap = {};
  var localCount = 0;
  var objectCount = 0;
  var singleInstance = !_CoreManager2['default'].get('IS_NODE');
  if (singleInstance) {
    _CoreManager2['default'].setObjectStateController(SingleInstanceStateController);
  } else {
    _CoreManager2['default'].setObjectStateController(UniqueInstanceStateController);
  }
  function getServerUrlPath() {
    var serverUrl = _CoreManager2['default'].get('SERVER_URL');
    if (serverUrl[serverUrl.length - 1] !== '/') {
      serverUrl += '/';
    }
    var url = serverUrl.replace(/https?:\/\//, '');
    return url.substr(url.indexOf('/'));
  }
  var ParseObject = (function() {
    function ParseObject(className, attributes, options) {
      _classCallCheck(this, ParseObject);
      if (typeof this.initialize === 'function') {
        this.initialize.apply(this, arguments);
      }
      var toSet = null;
      this._objCount = objectCount++;
      if (typeof className === 'string') {
        this.className = className;
        if (attributes && typeof attributes === 'object') {
          toSet = attributes;
        }
      } else if (className && typeof className === 'object') {
        this.className = className.className;
        toSet = {};
        for (var attr in className) {
          if (attr !== 'className') {
            toSet[attr] = className[attr];
          }
        }
        if (attributes && typeof attributes === 'object') {
          options = attributes;
        }
      }
      if (toSet && !this.set(toSet, options)) {
        throw new Error('Can\'t create an invalid Parse Object');
      }
    }
    _createClass(ParseObject, [{
      key: '_getId',
      value: function _getId() {
        if (typeof this.id === 'string') {
          return this.id;
        }
        if (typeof this._localId === 'string') {
          return this._localId;
        }
        var localId = 'local' + String(localCount++);
        this._localId = localId;
        return localId;
      }
    }, {
      key: '_getStateIdentifier',
      value: function _getStateIdentifier() {
        if (singleInstance) {
          var id = this.id;
          if (!id) {
            id = this._getId();
          }
          return {
            id: id,
            className: this.className
          };
        } else {
          return this;
        }
      }
    }, {
      key: '_getServerData',
      value: function _getServerData() {
        var stateController = _CoreManager2['default'].getObjectStateController();
        return stateController.getServerData(this._getStateIdentifier());
      }
    }, {
      key: '_clearServerData',
      value: function _clearServerData() {
        var serverData = this._getServerData();
        var unset = {};
        for (var attr in serverData) {
          unset[attr] = undefined;
        }
        var stateController = _CoreManager2['default'].getObjectStateController();
        stateController.setServerData(this._getStateIdentifier(), unset);
      }
    }, {
      key: '_getPendingOps',
      value: function _getPendingOps() {
        var stateController = _CoreManager2['default'].getObjectStateController();
        return stateController.getPendingOps(this._getStateIdentifier());
      }
    }, {
      key: '_clearPendingOps',
      value: function _clearPendingOps() {
        var pending = this._getPendingOps();
        var latest = pending[pending.length - 1];
        var keys = _Object$keys(latest);
        keys.forEach(function(key) {
          delete latest[key];
        });
      }
    }, {
      key: '_getDirtyObjectAttributes',
      value: function _getDirtyObjectAttributes() {
        var attributes = this.attributes;
        var stateController = _CoreManager2['default'].getObjectStateController();
        var objectCache = stateController.getObjectCache(this._getStateIdentifier());
        var dirty = {};
        for (var attr in attributes) {
          var val = attributes[attr];
          if (val && typeof val === 'object' && !(val instanceof ParseObject) && !(val instanceof _ParseFile2['default']) && !(val instanceof _ParseRelation2['default'])) {
            try {
              var json = (0, _encode2['default'])(val, false, true);
              var stringified = JSON.stringify(json);
              if (objectCache[attr] !== stringified) {
                dirty[attr] = val;
              }
            } catch (e) {
              dirty[attr] = val;
            }
          }
        }
        return dirty;
      }
    }, {
      key: '_toFullJSON',
      value: function _toFullJSON(seen) {
        var json = this.toJSON(seen);
        json.__type = 'Object';
        json.className = this.className;
        return json;
      }
    }, {
      key: '_getSaveJSON',
      value: function _getSaveJSON() {
        var pending = this._getPendingOps();
        var dirtyObjects = this._getDirtyObjectAttributes();
        var json = {};
        var attr;
        for (attr in dirtyObjects) {
          json[attr] = new _ParseOp.SetOp(dirtyObjects[attr]).toJSON();
        }
        for (attr in pending[0]) {
          json[attr] = pending[0][attr].toJSON();
        }
        return json;
      }
    }, {
      key: '_getSaveParams',
      value: function _getSaveParams() {
        var method = this.id ? 'PUT' : 'POST';
        var body = this._getSaveJSON();
        var path = 'classes/' + this.className;
        if (this.id) {
          path += '/' + this.id;
        } else if (this.className === '_User') {
          path = 'users';
        }
        return {
          method: method,
          body: body,
          path: path
        };
      }
    }, {
      key: '_finishFetch',
      value: function _finishFetch(serverData) {
        if (!this.id && serverData.objectId) {
          this.id = serverData.objectId;
        }
        var stateController = _CoreManager2['default'].getObjectStateController();
        stateController.initializeState(this._getStateIdentifier());
        var decoded = {};
        for (var attr in serverData) {
          if (attr === 'ACL') {
            decoded[attr] = new _ParseACL2['default'](serverData[attr]);
          } else if (attr !== 'objectId') {
            decoded[attr] = (0, _decode2['default'])(serverData[attr]);
            if (decoded[attr] instanceof _ParseRelation2['default']) {
              decoded[attr]._ensureParentAndKey(this, attr);
            }
          }
        }
        if (decoded.createdAt && typeof decoded.createdAt === 'string') {
          decoded.createdAt = (0, _parseDate2['default'])(decoded.createdAt);
        }
        if (decoded.updatedAt && typeof decoded.updatedAt === 'string') {
          decoded.updatedAt = (0, _parseDate2['default'])(decoded.updatedAt);
        }
        if (!decoded.updatedAt && decoded.createdAt) {
          decoded.updatedAt = decoded.createdAt;
        }
        stateController.commitServerChanges(this._getStateIdentifier(), decoded);
      }
    }, {
      key: '_setExisted',
      value: function _setExisted(existed) {
        var stateController = _CoreManager2['default'].getObjectStateController();
        var state = stateController.getState(this._getStateIdentifier());
        if (state) {
          state.existed = existed;
        }
      }
    }, {
      key: '_migrateId',
      value: function _migrateId(serverId) {
        if (this._localId && serverId) {
          if (singleInstance) {
            var stateController = _CoreManager2['default'].getObjectStateController();
            var oldState = stateController.removeState(this._getStateIdentifier());
            this.id = serverId;
            delete this._localId;
            if (oldState) {
              stateController.initializeState(this._getStateIdentifier(), oldState);
            }
          } else {
            this.id = serverId;
            delete this._localId;
          }
        }
      }
    }, {
      key: '_handleSaveResponse',
      value: function _handleSaveResponse(response, status) {
        var changes = {};
        var attr;
        var stateController = _CoreManager2['default'].getObjectStateController();
        var pending = stateController.popPendingState(this._getStateIdentifier());
        for (attr in pending) {
          if (pending[attr] instanceof _ParseOp.RelationOp) {
            changes[attr] = pending[attr].applyTo(undefined, this, attr);
          } else if (!(attr in response)) {
            changes[attr] = pending[attr].applyTo(undefined);
          }
        }
        for (attr in response) {
          if ((attr === 'createdAt' || attr === 'updatedAt') && typeof response[attr] === 'string') {
            changes[attr] = (0, _parseDate2['default'])(response[attr]);
          } else if (attr === 'ACL') {
            changes[attr] = new _ParseACL2['default'](response[attr]);
          } else if (attr !== 'objectId') {
            changes[attr] = (0, _decode2['default'])(response[attr]);
          }
        }
        if (changes.createdAt && !changes.updatedAt) {
          changes.updatedAt = changes.createdAt;
        }
        this._migrateId(response.objectId);
        if (status !== 201) {
          this._setExisted(true);
        }
        stateController.commitServerChanges(this._getStateIdentifier(), changes);
      }
    }, {
      key: '_handleSaveError',
      value: function _handleSaveError() {
        var pending = this._getPendingOps();
        var stateController = _CoreManager2['default'].getObjectStateController();
        stateController.mergeFirstPendingState(this._getStateIdentifier());
      }
    }, {
      key: 'initialize',
      value: function initialize() {}
    }, {
      key: 'toJSON',
      value: function toJSON(seen) {
        var seenEntry = this.id ? this.className + ':' + this.id : this;
        var seen = seen || [seenEntry];
        var json = {};
        var attrs = this.attributes;
        for (var attr in attrs) {
          if ((attr === 'createdAt' || attr === 'updatedAt') && attrs[attr].toJSON) {
            json[attr] = attrs[attr].toJSON();
          } else {
            json[attr] = (0, _encode2['default'])(attrs[attr], false, false, seen);
          }
        }
        var pending = this._getPendingOps();
        for (var attr in pending[0]) {
          json[attr] = pending[0][attr].toJSON();
        }
        if (this.id) {
          json.objectId = this.id;
        }
        return json;
      }
    }, {
      key: 'equals',
      value: function equals(other) {
        if (this === other) {
          return true;
        }
        return other instanceof ParseObject && this.className === other.className && this.id === other.id && typeof this.id !== 'undefined';
      }
    }, {
      key: 'dirty',
      value: function dirty(attr) {
        if (!this.id) {
          return true;
        }
        var pendingOps = this._getPendingOps();
        var dirtyObjects = this._getDirtyObjectAttributes();
        if (attr) {
          if (dirtyObjects.hasOwnProperty(attr)) {
            return true;
          }
          for (var i = 0; i < pendingOps.length; i++) {
            if (pendingOps[i].hasOwnProperty(attr)) {
              return true;
            }
          }
          return false;
        }
        if (_Object$keys(pendingOps[0]).length !== 0) {
          return true;
        }
        if (_Object$keys(dirtyObjects).length !== 0) {
          return true;
        }
        return false;
      }
    }, {
      key: 'dirtyKeys',
      value: function dirtyKeys() {
        var pendingOps = this._getPendingOps();
        var keys = {};
        for (var i = 0; i < pendingOps.length; i++) {
          for (var attr in pendingOps[i]) {
            keys[attr] = true;
          }
        }
        var dirtyObjects = this._getDirtyObjectAttributes();
        for (var attr in dirtyObjects) {
          keys[attr] = true;
        }
        return _Object$keys(keys);
      }
    }, {
      key: 'toPointer',
      value: function toPointer() {
        if (!this.id) {
          throw new Error('Cannot create a pointer to an unsaved ParseObject');
        }
        return {
          __type: 'Pointer',
          className: this.className,
          objectId: this.id
        };
      }
    }, {
      key: 'get',
      value: function get(attr) {
        return this.attributes[attr];
      }
    }, {
      key: 'relation',
      value: function relation(attr) {
        var value = this.get(attr);
        if (value) {
          if (!(value instanceof _ParseRelation2['default'])) {
            throw new Error('Called relation() on non-relation field ' + attr);
          }
          value._ensureParentAndKey(this, attr);
          return value;
        }
        return new _ParseRelation2['default'](this, attr);
      }
    }, {
      key: 'escape',
      value: function escape(attr) {
        var val = this.attributes[attr];
        if (val == null) {
          return '';
        }
        var str = val;
        if (typeof val !== 'string') {
          if (typeof val.toString !== 'function') {
            return '';
          }
          val = val.toString();
        }
        return (0, _escape3['default'])(val);
      }
    }, {
      key: 'has',
      value: function has(attr) {
        var attributes = this.attributes;
        if (attributes.hasOwnProperty(attr)) {
          return attributes[attr] != null;
        }
        return false;
      }
    }, {
      key: 'set',
      value: function set(key, value, options) {
        var changes = {};
        var newOps = {};
        if (key && typeof key === 'object') {
          changes = key;
          options = value;
        } else if (typeof key === 'string') {
          changes[key] = value;
        } else {
          return this;
        }
        options = options || {};
        var readonly = [];
        if (typeof this.constructor.readOnlyAttributes === 'function') {
          readonly = readonly.concat(this.constructor.readOnlyAttributes());
        }
        for (var k in changes) {
          if (k === 'createdAt' || k === 'updatedAt') {
            continue;
          }
          if (readonly.indexOf(k) > -1) {
            throw new Error('Cannot modify readonly attribute: ' + k);
          }
          if (options.unset) {
            newOps[k] = new _ParseOp.UnsetOp();
          } else if (changes[k] instanceof _ParseOp.Op) {
            newOps[k] = changes[k];
          } else if (changes[k] && typeof changes[k] === 'object' && typeof changes[k].__op === 'string') {
            newOps[k] = (0, _ParseOp.opFromJSON)(changes[k]);
          } else if (k === 'objectId' || k === 'id') {
            this.id = changes[k];
          } else if (k === 'ACL' && typeof changes[k] === 'object' && !(changes[k] instanceof _ParseACL2['default'])) {
            newOps[k] = new _ParseOp.SetOp(new _ParseACL2['default'](changes[k]));
          } else {
            newOps[k] = new _ParseOp.SetOp(changes[k]);
          }
        }
        var currentAttributes = this.attributes;
        var newValues = {};
        for (var attr in newOps) {
          if (newOps[attr] instanceof _ParseOp.RelationOp) {
            newValues[attr] = newOps[attr].applyTo(currentAttributes[attr], this, attr);
          } else if (!(newOps[attr] instanceof _ParseOp.UnsetOp)) {
            newValues[attr] = newOps[attr].applyTo(currentAttributes[attr]);
          }
        }
        if (!options.ignoreValidation) {
          var validation = this.validate(newValues);
          if (validation) {
            if (typeof options.error === 'function') {
              options.error(this, validation);
            }
            return false;
          }
        }
        var pendingOps = this._getPendingOps();
        var last = pendingOps.length - 1;
        var stateController = _CoreManager2['default'].getObjectStateController();
        for (var attr in newOps) {
          var nextOp = newOps[attr].mergeWith(pendingOps[last][attr]);
          stateController.setPendingOp(this._getStateIdentifier(), attr, nextOp);
        }
        return this;
      }
    }, {
      key: 'unset',
      value: function unset(attr, options) {
        options = options || {};
        options.unset = true;
        return this.set(attr, null, options);
      }
    }, {
      key: 'increment',
      value: function increment(attr, amount) {
        if (typeof amount === 'undefined') {
          amount = 1;
        }
        if (typeof amount !== 'number') {
          throw new Error('Cannot increment by a non-numeric amount.');
        }
        return this.set(attr, new _ParseOp.IncrementOp(amount));
      }
    }, {
      key: 'add',
      value: function add(attr, item) {
        return this.set(attr, new _ParseOp.AddOp([item]));
      }
    }, {
      key: 'addUnique',
      value: function addUnique(attr, item) {
        return this.set(attr, new _ParseOp.AddUniqueOp([item]));
      }
    }, {
      key: 'remove',
      value: function remove(attr, item) {
        return this.set(attr, new _ParseOp.RemoveOp([item]));
      }
    }, {
      key: 'op',
      value: function op(attr) {
        var pending = this._getPendingOps();
        for (var i = pending.length; i--; ) {
          if (pending[i][attr]) {
            return pending[i][attr];
          }
        }
      }
    }, {
      key: 'clone',
      value: function clone() {
        var clone = new this.constructor();
        if (!clone.className) {
          clone.className = this.className;
        }
        if (clone.set) {
          clone.set(this.attributes);
        }
        return clone;
      }
    }, {
      key: 'isNew',
      value: function isNew() {
        return !this.id;
      }
    }, {
      key: 'existed',
      value: function existed() {
        if (!this.id) {
          return false;
        }
        var stateController = _CoreManager2['default'].getObjectStateController();
        var state = stateController.getState(this._getStateIdentifier());
        if (state) {
          return state.existed;
        }
        return false;
      }
    }, {
      key: 'isValid',
      value: function isValid() {
        return !this.validate(this.attributes);
      }
    }, {
      key: 'validate',
      value: function validate(attrs) {
        if (attrs.hasOwnProperty('ACL') && !(attrs.ACL instanceof _ParseACL2['default'])) {
          return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'ACL must be a Parse ACL.');
        }
        for (var key in attrs) {
          if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(key)) {
            return new _ParseError2['default'](_ParseError2['default'].INVALID_KEY_NAME);
          }
        }
        return false;
      }
    }, {
      key: 'getACL',
      value: function getACL() {
        var acl = this.get('ACL');
        if (acl instanceof _ParseACL2['default']) {
          return acl;
        }
        return null;
      }
    }, {
      key: 'setACL',
      value: function setACL(acl, options) {
        return this.set('ACL', acl, options);
      }
    }, {
      key: 'revert',
      value: function revert() {
        this._clearPendingOps();
      }
    }, {
      key: 'clear',
      value: function clear() {
        var attributes = this.attributes;
        var erasable = {};
        var readonly = ['createdAt', 'updatedAt'];
        if (typeof this.constructor.readOnlyAttributes === 'function') {
          readonly = readonly.concat(this.constructor.readOnlyAttributes());
        }
        for (var attr in attributes) {
          if (readonly.indexOf(attr) < 0) {
            erasable[attr] = true;
          }
        }
        return this.set(erasable, {unset: true});
      }
    }, {
      key: 'fetch',
      value: function fetch(options) {
        options = options || {};
        var fetchOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          fetchOptions.useMasterKey = options.useMasterKey;
        }
        if (options.hasOwnProperty('sessionToken')) {
          fetchOptions.sessionToken = options.sessionToken;
        }
        var controller = _CoreManager2['default'].getObjectController();
        return controller.fetch(this, true, fetchOptions)._thenRunCallbacks(options);
      }
    }, {
      key: 'save',
      value: function save(arg1, arg2, arg3) {
        var _this = this;
        var attrs;
        var options;
        if (typeof arg1 === 'object' || typeof arg1 === 'undefined') {
          attrs = arg1;
          if (typeof arg2 === 'object') {
            options = arg2;
          }
        } else {
          attrs = {};
          attrs[arg1] = arg2;
          options = arg3;
        }
        if (!options && attrs) {
          options = {};
          if (typeof attrs.success === 'function') {
            options.success = attrs.success;
            delete attrs.success;
          }
          if (typeof attrs.error === 'function') {
            options.error = attrs.error;
            delete attrs.error;
          }
        }
        if (attrs) {
          var validation = this.validate(attrs);
          if (validation) {
            if (options && typeof options.error === 'function') {
              options.error(this, validation);
            }
            return _ParsePromise2['default'].error(validation);
          }
          this.set(attrs, options);
        }
        options = options || {};
        var saveOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          saveOptions.useMasterKey = options.useMasterKey;
        }
        if (options.hasOwnProperty('sessionToken')) {
          saveOptions.sessionToken = options.sessionToken;
        }
        var controller = _CoreManager2['default'].getObjectController();
        var unsaved = (0, _unsavedChildren2['default'])(this);
        return controller.save(unsaved, saveOptions).then(function() {
          return controller.save(_this, saveOptions);
        })._thenRunCallbacks(options, this);
      }
    }, {
      key: 'destroy',
      value: function destroy(options) {
        options = options || {};
        var destroyOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          destroyOptions.useMasterKey = options.useMasterKey;
        }
        if (options.hasOwnProperty('sessionToken')) {
          destroyOptions.sessionToken = options.sessionToken;
        }
        if (!this.id) {
          return _ParsePromise2['default'].as()._thenRunCallbacks(options);
        }
        return _CoreManager2['default'].getObjectController().destroy(this, destroyOptions)._thenRunCallbacks(options);
      }
    }, {
      key: 'attributes',
      get: function get() {
        var stateController = _CoreManager2['default'].getObjectStateController();
        return _Object$freeze(stateController.estimateAttributes(this._getStateIdentifier()));
      }
    }, {
      key: 'createdAt',
      get: function get() {
        return this._getServerData().createdAt;
      }
    }, {
      key: 'updatedAt',
      get: function get() {
        return this._getServerData().updatedAt;
      }
    }], [{
      key: '_clearAllState',
      value: function _clearAllState() {
        var stateController = _CoreManager2['default'].getObjectStateController();
        stateController.clearAllState();
      }
    }, {
      key: 'fetchAll',
      value: function fetchAll(list, options) {
        var options = options || {};
        var queryOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          queryOptions.useMasterKey = options.useMasterKey;
        }
        if (options.hasOwnProperty('sessionToken')) {
          queryOptions.sessionToken = options.sessionToken;
        }
        return _CoreManager2['default'].getObjectController().fetch(list, true, queryOptions)._thenRunCallbacks(options);
      }
    }, {
      key: 'fetchAllIfNeeded',
      value: function fetchAllIfNeeded(list, options) {
        var options = options || {};
        var queryOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          queryOptions.useMasterKey = options.useMasterKey;
        }
        if (options.hasOwnProperty('sessionToken')) {
          queryOptions.sessionToken = options.sessionToken;
        }
        return _CoreManager2['default'].getObjectController().fetch(list, false, queryOptions)._thenRunCallbacks(options);
      }
    }, {
      key: 'destroyAll',
      value: function destroyAll(list, options) {
        var options = options || {};
        var destroyOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          destroyOptions.useMasterKey = options.useMasterKey;
        }
        if (options.hasOwnProperty('sessionToken')) {
          destroyOptions.sessionToken = options.sessionToken;
        }
        return _CoreManager2['default'].getObjectController().destroy(list, destroyOptions)._thenRunCallbacks(options);
      }
    }, {
      key: 'saveAll',
      value: function saveAll(list, options) {
        var options = options || {};
        var saveOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          saveOptions.useMasterKey = options.useMasterKey;
        }
        if (options.hasOwnProperty('sessionToken')) {
          saveOptions.sessionToken = options.sessionToken;
        }
        return _CoreManager2['default'].getObjectController().save(list, saveOptions)._thenRunCallbacks(options);
      }
    }, {
      key: 'createWithoutData',
      value: function createWithoutData(id) {
        var obj = new this();
        obj.id = id;
        return obj;
      }
    }, {
      key: 'fromJSON',
      value: function fromJSON(json) {
        if (!json.className) {
          throw new Error('Cannot create an object without a className');
        }
        var constructor = classMap[json.className];
        var o = constructor ? new constructor() : new ParseObject(json.className);
        var otherAttributes = {};
        for (var attr in json) {
          if (attr !== 'className' && attr !== '__type') {
            otherAttributes[attr] = json[attr];
          }
        }
        o._finishFetch(otherAttributes);
        if (json.objectId) {
          o._setExisted(true);
        }
        return o;
      }
    }, {
      key: 'registerSubclass',
      value: function registerSubclass(className, constructor) {
        if (typeof className !== 'string') {
          throw new TypeError('The first argument must be a valid class name.');
        }
        if (typeof constructor === 'undefined') {
          throw new TypeError('You must supply a subclass constructor.');
        }
        if (typeof constructor !== 'function') {
          throw new TypeError('You must register the subclass constructor. ' + 'Did you attempt to register an instance of the subclass?');
        }
        classMap[className] = constructor;
        if (!constructor.className) {
          constructor.className = className;
        }
      }
    }, {
      key: 'extend',
      value: function extend(className, protoProps, classProps) {
        if (typeof className !== 'string') {
          if (className && typeof className.className === 'string') {
            return ParseObject.extend(className.className, className, protoProps);
          } else {
            throw new Error('Parse.Object.extend\'s first argument should be the className.');
          }
        }
        var adjustedClassName = className;
        if (adjustedClassName === 'User' && _CoreManager2['default'].get('PERFORM_USER_REWRITE')) {
          adjustedClassName = '_User';
        }
        var parentProto = ParseObject.prototype;
        if (this.hasOwnProperty('__super__') && this.__super__) {
          parentProto = this.prototype;
        } else if (classMap[adjustedClassName]) {
          parentProto = classMap[adjustedClassName].prototype;
        }
        var ParseObjectSubclass = function ParseObjectSubclass(attributes, options) {
          if (typeof this.initialize === 'function') {
            this.initialize.apply(this, arguments);
          }
          this.className = adjustedClassName;
          this._objCount = objectCount++;
          if (attributes && typeof attributes === 'object') {
            if (!this.set(attributes || {}, options)) {
              throw new Error('Can\'t create an invalid Parse Object');
            }
          }
        };
        ParseObjectSubclass.className = adjustedClassName;
        ParseObjectSubclass.__super__ = parentProto;
        ParseObjectSubclass.prototype = _Object$create(parentProto, {constructor: {
            value: ParseObjectSubclass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (protoProps) {
          for (var prop in protoProps) {
            if (prop !== 'className') {
              _Object$defineProperty(ParseObjectSubclass.prototype, prop, {
                value: protoProps[prop],
                enumerable: false,
                writable: true,
                configurable: true
              });
            }
          }
        }
        if (classProps) {
          for (var prop in classProps) {
            if (prop !== 'className') {
              _Object$defineProperty(ParseObjectSubclass, prop, {
                value: classProps[prop],
                enumerable: false,
                writable: true,
                configurable: true
              });
            }
          }
        }
        ParseObjectSubclass.extend = function(name, protoProps, classProps) {
          if (typeof name === 'string') {
            return ParseObject.extend.call(ParseObjectSubclass, name, protoProps, classProps);
          }
          return ParseObject.extend.call(ParseObjectSubclass, adjustedClassName, name, protoProps);
        };
        ParseObjectSubclass.createWithoutData = ParseObject.createWithoutData;
        classMap[adjustedClassName] = ParseObjectSubclass;
        return ParseObjectSubclass;
      }
    }, {
      key: 'enableSingleInstance',
      value: function enableSingleInstance() {
        singleInstance = true;
        _CoreManager2['default'].setObjectStateController(SingleInstanceStateController);
      }
    }, {
      key: 'disableSingleInstance',
      value: function disableSingleInstance() {
        singleInstance = false;
        _CoreManager2['default'].setObjectStateController(UniqueInstanceStateController);
      }
    }]);
    return ParseObject;
  })();
  exports['default'] = ParseObject;
  _CoreManager2['default'].setObjectController({
    fetch: function fetch(target, forceFetch, options) {
      if (Array.isArray(target)) {
        if (target.length < 1) {
          return _ParsePromise2['default'].as([]);
        }
        var objs = [];
        var ids = [];
        var className = null;
        var results = [];
        var error = null;
        target.forEach(function(el, i) {
          if (error) {
            return;
          }
          if (!className) {
            className = el.className;
          }
          if (className !== el.className) {
            error = new _ParseError2['default'](_ParseError2['default'].INVALID_CLASS_NAME, 'All objects should be of the same class');
          }
          if (!el.id) {
            error = new _ParseError2['default'](_ParseError2['default'].MISSING_OBJECT_ID, 'All objects must have an ID');
          }
          if (forceFetch || _Object$keys(el._getServerData()).length === 0) {
            ids.push(el.id);
            objs.push(el);
          }
          results.push(el);
        });
        if (error) {
          return _ParsePromise2['default'].error(error);
        }
        var query = new _ParseQuery2['default'](className);
        query.containedIn('objectId', ids);
        query._limit = ids.length;
        return query.find(options).then(function(objects) {
          var idMap = {};
          objects.forEach(function(o) {
            idMap[o.id] = o;
          });
          for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (!obj || !obj.id || !idMap[obj.id]) {
              if (forceFetch) {
                return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OBJECT_NOT_FOUND, 'All objects must exist on the server.'));
              }
            }
          }
          if (!singleInstance) {
            for (var i = 0; i < results.length; i++) {
              var obj = results[i];
              if (obj && obj.id && idMap[obj.id]) {
                var id = obj.id;
                obj._finishFetch(idMap[id].toJSON());
                results[i] = idMap[id];
              }
            }
          }
          return _ParsePromise2['default'].as(results);
        });
      } else {
        var RESTController = _CoreManager2['default'].getRESTController();
        return RESTController.request('GET', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function(response, status, xhr) {
          if (target instanceof ParseObject) {
            target._clearPendingOps();
            target._finishFetch(response);
          }
          return target;
        });
      }
    },
    destroy: function destroy(target, options) {
      var RESTController = _CoreManager2['default'].getRESTController();
      if (Array.isArray(target)) {
        if (target.length < 1) {
          return _ParsePromise2['default'].as([]);
        }
        var batches = [[]];
        target.forEach(function(obj) {
          if (!obj.id) {
            return;
          }
          batches[batches.length - 1].push(obj);
          if (batches[batches.length - 1].length >= 20) {
            batches.push([]);
          }
        });
        if (batches[batches.length - 1].length === 0) {
          batches.pop();
        }
        var deleteCompleted = _ParsePromise2['default'].as();
        var errors = [];
        batches.forEach(function(batch) {
          deleteCompleted = deleteCompleted.then(function() {
            return RESTController.request('POST', 'batch', {requests: batch.map(function(obj) {
                return {
                  method: 'DELETE',
                  path: getServerUrlPath() + 'classes/' + obj.className + '/' + obj._getId(),
                  body: {}
                };
              })}, options).then(function(results) {
              for (var i = 0; i < results.length; i++) {
                if (results[i] && results[i].hasOwnProperty('error')) {
                  var err = new _ParseError2['default'](results[i].error.code, results[i].error.error);
                  err.object = batch[i];
                  errors.push(err);
                }
              }
            });
          });
        });
        return deleteCompleted.then(function() {
          if (errors.length) {
            var aggregate = new _ParseError2['default'](_ParseError2['default'].AGGREGATE_ERROR);
            aggregate.errors = errors;
            return _ParsePromise2['default'].error(aggregate);
          }
          return _ParsePromise2['default'].as(target);
        });
      } else if (target instanceof ParseObject) {
        return RESTController.request('DELETE', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function() {
          return _ParsePromise2['default'].as(target);
        });
      }
      return _ParsePromise2['default'].as(target);
    },
    save: function save(target, options) {
      var RESTController = _CoreManager2['default'].getRESTController();
      var stateController = _CoreManager2['default'].getObjectStateController();
      if (Array.isArray(target)) {
        if (target.length < 1) {
          return _ParsePromise2['default'].as([]);
        }
        var unsaved = target.concat();
        for (var i = 0; i < target.length; i++) {
          if (target[i] instanceof ParseObject) {
            unsaved = unsaved.concat((0, _unsavedChildren2['default'])(target[i], true));
          }
        }
        unsaved = (0, _unique2['default'])(unsaved);
        var filesSaved = _ParsePromise2['default'].as();
        var pending = [];
        unsaved.forEach(function(el) {
          if (el instanceof _ParseFile2['default']) {
            filesSaved = filesSaved.then(function() {
              return el.save();
            });
          } else if (el instanceof ParseObject) {
            pending.push(el);
          }
        });
        return filesSaved.then(function() {
          var objectError = null;
          return _ParsePromise2['default']._continueWhile(function() {
            return pending.length > 0;
          }, function() {
            var batch = [];
            var nextPending = [];
            pending.forEach(function(el) {
              if (batch.length < 20 && (0, _canBeSerialized2['default'])(el)) {
                batch.push(el);
              } else {
                nextPending.push(el);
              }
            });
            pending = nextPending;
            if (batch.length < 1) {
              return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
            }
            var batchReturned = new _ParsePromise2['default']();
            var batchReady = [];
            var batchTasks = [];
            batch.forEach(function(obj, index) {
              var ready = new _ParsePromise2['default']();
              batchReady.push(ready);
              var task = function task() {
                ready.resolve();
                return batchReturned.then(function(responses, status) {
                  if (responses[index].hasOwnProperty('success')) {
                    obj._handleSaveResponse(responses[index].success, status);
                  } else {
                    if (!objectError && responses[index].hasOwnProperty('error')) {
                      var serverError = responses[index].error;
                      objectError = new _ParseError2['default'](serverError.code, serverError.error);
                      pending = [];
                    }
                    obj._handleSaveError();
                  }
                });
              };
              stateController.pushPendingState(obj._getStateIdentifier());
              batchTasks.push(stateController.enqueueTask(obj._getStateIdentifier(), task));
            });
            _ParsePromise2['default'].when(batchReady).then(function() {
              return RESTController.request('POST', 'batch', {requests: batch.map(function(obj) {
                  var params = obj._getSaveParams();
                  params.path = getServerUrlPath() + params.path;
                  return params;
                })}, options);
            }).then(function(response, status, xhr) {
              batchReturned.resolve(response, status);
            });
            return _ParsePromise2['default'].when(batchTasks);
          }).then(function() {
            if (objectError) {
              return _ParsePromise2['default'].error(objectError);
            }
            return _ParsePromise2['default'].as(target);
          });
        });
      } else if (target instanceof ParseObject) {
        var targetCopy = target;
        var task = function task() {
          var params = targetCopy._getSaveParams();
          return RESTController.request(params.method, params.path, params.body, options).then(function(response, status) {
            targetCopy._handleSaveResponse(response, status);
          }, function(error) {
            targetCopy._handleSaveError();
            return _ParsePromise2['default'].error(error);
          });
        };
        stateController.pushPendingState(target._getStateIdentifier());
        return stateController.enqueueTask(target._getStateIdentifier(), task).then(function() {
          return target;
        }, function(error) {
          return _ParsePromise2['default'].error(error);
        });
      }
      return _ParsePromise2['default'].as();
    }
  });
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b4", ["a", "b", "c", "d", "73", "5", "82", "7f", "71", "7d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _get = $__require('a')['default'];
  var _inherits = $__require('b')['default'];
  var _createClass = $__require('c')['default'];
  var _classCallCheck = $__require('d')['default'];
  var _interopRequireDefault = $__require('73')['default'];
  Object.defineProperty(exports, '__esModule', {value: true});
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _isRevocableSession = $__require('82');
  var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);
  var _ParseObject2 = $__require('7f');
  var _ParseObject3 = _interopRequireDefault(_ParseObject2);
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  var _ParseUser = $__require('7d');
  var _ParseUser2 = _interopRequireDefault(_ParseUser);
  var ParseSession = (function(_ParseObject) {
    _inherits(ParseSession, _ParseObject);
    function ParseSession(attributes) {
      _classCallCheck(this, ParseSession);
      _get(Object.getPrototypeOf(ParseSession.prototype), 'constructor', this).call(this, '_Session');
      if (attributes && typeof attributes === 'object') {
        if (!this.set(attributes || {})) {
          throw new Error('Can\'t create an invalid Session');
        }
      }
    }
    _createClass(ParseSession, [{
      key: 'getSessionToken',
      value: function getSessionToken() {
        return this.get('sessionToken');
      }
    }], [{
      key: 'readOnlyAttributes',
      value: function readOnlyAttributes() {
        return ['createdWith', 'expiresAt', 'installationId', 'restricted', 'sessionToken', 'user'];
      }
    }, {
      key: 'current',
      value: function current(options) {
        options = options || {};
        var controller = _CoreManager2['default'].getSessionController();
        var sessionOptions = {};
        if (options.hasOwnProperty('useMasterKey')) {
          sessionOptions.useMasterKey = options.useMasterKey;
        }
        return _ParseUser2['default'].currentAsync().then(function(user) {
          if (!user) {
            return _ParsePromise2['default'].error('There is no current user.');
          }
          var token = user.getSessionToken();
          sessionOptions.sessionToken = user.getSessionToken();
          return controller.getSession(sessionOptions);
        });
      }
    }, {
      key: 'isCurrentSessionRevocable',
      value: function isCurrentSessionRevocable() {
        var currentUser = _ParseUser2['default'].current();
        if (currentUser) {
          return (0, _isRevocableSession2['default'])(currentUser.getSessionToken() || '');
        }
        return false;
      }
    }]);
    return ParseSession;
  })(_ParseObject3['default']);
  exports['default'] = ParseSession;
  _ParseObject3['default'].registerSubclass('_Session', ParseSession);
  _CoreManager2['default'].setSessionController({getSession: function getSession(options) {
      var RESTController = _CoreManager2['default'].getRESTController();
      var session = new ParseSession();
      return RESTController.request('GET', 'sessions/me', {}, options).then(function(sessionData) {
        session._finishFetch(sessionData);
        session._setExisted(true);
        return session;
      });
    }});
  module.exports = exports['default'];
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", ["58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var config = {
      IS_NODE: typeof process !== 'undefined' && !!process.versions && !!process.versions.node,
      REQUEST_ATTEMPT_LIMIT: 5,
      SERVER_URL: 'https://api.parse.com/1',
      VERSION: 'js' + '1.7.0',
      APPLICATION_ID: null,
      JAVASCRIPT_KEY: null,
      MASTER_KEY: null,
      USE_MASTER_KEY: false,
      PERFORM_USER_REWRITE: true,
      FORCE_REVOCABLE_SESSION: false
    };
    module.exports = {
      get: function get(key) {
        if (config.hasOwnProperty(key)) {
          return config[key];
        }
        throw new Error('Configuration key not found: ' + key);
      },
      set: function set(key, value) {
        config[key] = value;
      },
      setAnalyticsController: function setAnalyticsController(controller) {
        if (typeof controller.track !== 'function') {
          throw new Error('AnalyticsController must implement track()');
        }
        config['AnalyticsController'] = controller;
      },
      getAnalyticsController: function getAnalyticsController() {
        return config['AnalyticsController'];
      },
      setCloudController: function setCloudController(controller) {
        if (typeof controller.run !== 'function') {
          throw new Error('CloudController must implement run()');
        }
        config['CloudController'] = controller;
      },
      getCloudController: function getCloudController() {
        return config['CloudController'];
      },
      setConfigController: function setConfigController(controller) {
        if (typeof controller.current !== 'function') {
          throw new Error('ConfigController must implement current()');
        }
        if (typeof controller.get !== 'function') {
          throw new Error('ConfigController must implement get()');
        }
        config['ConfigController'] = controller;
      },
      getConfigController: function getConfigController() {
        return config['ConfigController'];
      },
      setFileController: function setFileController(controller) {
        if (typeof controller.saveFile !== 'function') {
          throw new Error('FileController must implement saveFile()');
        }
        if (typeof controller.saveBase64 !== 'function') {
          throw new Error('FileController must implement saveBase64()');
        }
        config['FileController'] = controller;
      },
      getFileController: function getFileController() {
        return config['FileController'];
      },
      setInstallationController: function setInstallationController(controller) {
        if (typeof controller.currentInstallationId !== 'function') {
          throw new Error('InstallationController must implement currentInstallationId()');
        }
        config['InstallationController'] = controller;
      },
      getInstallationController: function getInstallationController() {
        return config['InstallationController'];
      },
      setObjectController: function setObjectController(controller) {
        if (typeof controller.save !== 'function') {
          throw new Error('ObjectController must implement save()');
        }
        if (typeof controller.fetch !== 'function') {
          throw new Error('ObjectController must implement fetch()');
        }
        if (typeof controller.destroy !== 'function') {
          throw new Error('ObjectController must implement destroy()');
        }
        config['ObjectController'] = controller;
      },
      getObjectController: function getObjectController() {
        return config['ObjectController'];
      },
      setObjectStateController: function setObjectStateController(controller) {
        if (typeof controller.getState !== 'function') {
          throw new Error('ObjectStateController must implement getState()');
        }
        if (typeof controller.initializeState !== 'function') {
          throw new Error('ObjectStateController must implement initializeState()');
        }
        if (typeof controller.removeState !== 'function') {
          throw new Error('ObjectStateController must implement removeState()');
        }
        if (typeof controller.getServerData !== 'function') {
          throw new Error('ObjectStateController must implement getServerData()');
        }
        if (typeof controller.setServerData !== 'function') {
          throw new Error('ObjectStateController must implement setServerData()');
        }
        if (typeof controller.getPendingOps !== 'function') {
          throw new Error('ObjectStateController must implement getPendingOps()');
        }
        if (typeof controller.setPendingOp !== 'function') {
          throw new Error('ObjectStateController must implement setPendingOp()');
        }
        if (typeof controller.pushPendingState !== 'function') {
          throw new Error('ObjectStateController must implement pushPendingState()');
        }
        if (typeof controller.popPendingState !== 'function') {
          throw new Error('ObjectStateController must implement popPendingState()');
        }
        if (typeof controller.mergeFirstPendingState !== 'function') {
          throw new Error('ObjectStateController must implement mergeFirstPendingState()');
        }
        if (typeof controller.getObjectCache !== 'function') {
          throw new Error('ObjectStateController must implement getObjectCache()');
        }
        if (typeof controller.estimateAttribute !== 'function') {
          throw new Error('ObjectStateController must implement estimateAttribute()');
        }
        if (typeof controller.estimateAttributes !== 'function') {
          throw new Error('ObjectStateController must implement estimateAttributes()');
        }
        if (typeof controller.commitServerChanges !== 'function') {
          throw new Error('ObjectStateController must implement commitServerChanges()');
        }
        if (typeof controller.enqueueTask !== 'function') {
          throw new Error('ObjectStateController must implement enqueueTask()');
        }
        if (typeof controller.clearAllState !== 'function') {
          throw new Error('ObjectStateController must implement clearAllState()');
        }
        config['ObjectStateController'] = controller;
      },
      getObjectStateController: function getObjectStateController() {
        return config['ObjectStateController'];
      },
      setPushController: function setPushController(controller) {
        if (typeof controller.send !== 'function') {
          throw new Error('PushController must implement send()');
        }
        config['PushController'] = controller;
      },
      getPushController: function getPushController() {
        return config['PushController'];
      },
      setQueryController: function setQueryController(controller) {
        if (typeof controller.find !== 'function') {
          throw new Error('QueryController must implement find()');
        }
        config['QueryController'] = controller;
      },
      getQueryController: function getQueryController() {
        return config['QueryController'];
      },
      setRESTController: function setRESTController(controller) {
        if (typeof controller.request !== 'function') {
          throw new Error('RESTController must implement request()');
        }
        if (typeof controller.ajax !== 'function') {
          throw new Error('RESTController must implement ajax()');
        }
        config['RESTController'] = controller;
      },
      getRESTController: function getRESTController() {
        return config['RESTController'];
      },
      setSessionController: function setSessionController(controller) {
        if (typeof controller.getSession !== 'function') {
          throw new Error('A SessionController must implement getSession()');
        }
        config['SessionController'] = controller;
      },
      getSessionController: function getSessionController() {
        return config['SessionController'];
      },
      setStorageController: function setStorageController(controller) {
        if (controller.async) {
          if (typeof controller.getItemAsync !== 'function') {
            throw new Error('An async StorageController must implement getItemAsync()');
          }
          if (typeof controller.setItemAsync !== 'function') {
            throw new Error('An async StorageController must implement setItemAsync()');
          }
          if (typeof controller.removeItemAsync !== 'function') {
            throw new Error('An async StorageController must implement removeItemAsync()');
          }
        } else {
          if (typeof controller.getItem !== 'function') {
            throw new Error('A synchronous StorageController must implement getItem()');
          }
          if (typeof controller.setItem !== 'function') {
            throw new Error('A synchronous StorageController must implement setItem()');
          }
          if (typeof controller.removeItem !== 'function') {
            throw new Error('A synchonous StorageController must implement removeItem()');
          }
        }
        config['StorageController'] = controller;
      },
      getStorageController: function getStorageController() {
        return config['StorageController'];
      },
      setUserController: function setUserController(controller) {
        if (typeof controller.setCurrentUser !== 'function') {
          throw new Error('A UserController must implement setCurrentUser()');
        }
        if (typeof controller.currentUser !== 'function') {
          throw new Error('A UserController must implement currentUser()');
        }
        if (typeof controller.currentUserAsync !== 'function') {
          throw new Error('A UserController must implement currentUserAsync()');
        }
        if (typeof controller.signUp !== 'function') {
          throw new Error('A UserController must implement signUp()');
        }
        if (typeof controller.logIn !== 'function') {
          throw new Error('A UserController must implement logIn()');
        }
        if (typeof controller.become !== 'function') {
          throw new Error('A UserController must implement become()');
        }
        if (typeof controller.logOut !== 'function') {
          throw new Error('A UserController must implement logOut()');
        }
        if (typeof controller.requestPasswordReset !== 'function') {
          throw new Error('A UserController must implement requestPasswordReset()');
        }
        if (typeof controller.upgradeToRevocableSession !== 'function') {
          throw new Error('A UserController must implement upgradeToRevocableSession()');
        }
        if (typeof controller.linkWith !== 'function') {
          throw new Error('A UserController must implement linkWith()');
        }
        config['UserController'] = controller;
      },
      getUserController: function getUserController() {
        return config['UserController'];
      }
    };
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("73", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("71", ["c", "d", "58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var _createClass = $__require('c')['default'];
    var _classCallCheck = $__require('d')['default'];
    Object.defineProperty(exports, '__esModule', {value: true});
    var _isPromisesAPlusCompliant = true;
    var ParsePromise = (function() {
      function ParsePromise(executor) {
        _classCallCheck(this, ParsePromise);
        this._resolved = false;
        this._rejected = false;
        this._resolvedCallbacks = [];
        this._rejectedCallbacks = [];
        if (typeof executor === 'function') {
          executor(this.resolve.bind(this), this.reject.bind(this));
        }
      }
      _createClass(ParsePromise, [{
        key: 'resolve',
        value: function resolve() {
          if (this._resolved || this._rejected) {
            throw new Error('A promise was resolved even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
          }
          this._resolved = true;
          for (var _len = arguments.length,
              results = Array(_len),
              _key = 0; _key < _len; _key++) {
            results[_key] = arguments[_key];
          }
          this._result = results;
          for (var i = 0; i < this._resolvedCallbacks.length; i++) {
            this._resolvedCallbacks[i].apply(this, results);
          }
          this._resolvedCallbacks = [];
          this._rejectedCallbacks = [];
        }
      }, {
        key: 'reject',
        value: function reject(error) {
          if (this._resolved || this._rejected) {
            throw new Error('A promise was resolved even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
          }
          this._rejected = true;
          this._error = error;
          for (var i = 0; i < this._rejectedCallbacks.length; i++) {
            this._rejectedCallbacks[i](error);
          }
          this._resolvedCallbacks = [];
          this._rejectedCallbacks = [];
        }
      }, {
        key: 'then',
        value: function then(resolvedCallback, rejectedCallback) {
          var _this = this;
          var promise = new ParsePromise();
          var wrappedResolvedCallback = function wrappedResolvedCallback() {
            for (var _len2 = arguments.length,
                results = Array(_len2),
                _key2 = 0; _key2 < _len2; _key2++) {
              results[_key2] = arguments[_key2];
            }
            if (typeof resolvedCallback === 'function') {
              if (_isPromisesAPlusCompliant) {
                try {
                  results = [resolvedCallback.apply(this, results)];
                } catch (e) {
                  results = [ParsePromise.error(e)];
                }
              } else {
                results = [resolvedCallback.apply(this, results)];
              }
            }
            if (results.length === 1 && ParsePromise.is(results[0])) {
              results[0].then(function() {
                promise.resolve.apply(promise, arguments);
              }, function(error) {
                promise.reject(error);
              });
            } else {
              promise.resolve.apply(promise, results);
            }
          };
          var wrappedRejectedCallback = function wrappedRejectedCallback(error) {
            var result = [];
            if (typeof rejectedCallback === 'function') {
              if (_isPromisesAPlusCompliant) {
                try {
                  result = [rejectedCallback(error)];
                } catch (e) {
                  result = [ParsePromise.error(e)];
                }
              } else {
                result = [rejectedCallback(error)];
              }
              if (result.length === 1 && ParsePromise.is(result[0])) {
                result[0].then(function() {
                  promise.resolve.apply(promise, arguments);
                }, function(error) {
                  promise.reject(error);
                });
              } else {
                if (_isPromisesAPlusCompliant) {
                  promise.resolve.apply(promise, result);
                } else {
                  promise.reject(result[0]);
                }
              }
            } else {
              promise.reject(error);
            }
          };
          var runLater = function runLater(fn) {
            fn.call();
          };
          if (_isPromisesAPlusCompliant) {
            if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
              runLater = function(fn) {
                process.nextTick(fn);
              };
            } else if (typeof setTimeout === 'function') {
              runLater = function(fn) {
                setTimeout(fn, 0);
              };
            }
          }
          if (this._resolved) {
            runLater(function() {
              wrappedResolvedCallback.apply(_this, _this._result);
            });
          } else if (this._rejected) {
            runLater(function() {
              wrappedRejectedCallback(_this._error);
            });
          } else {
            this._resolvedCallbacks.push(wrappedResolvedCallback);
            this._rejectedCallbacks.push(wrappedRejectedCallback);
          }
          return promise;
        }
      }, {
        key: 'always',
        value: function always(callback) {
          return this.then(callback, callback);
        }
      }, {
        key: 'done',
        value: function done(callback) {
          return this.then(callback);
        }
      }, {
        key: 'fail',
        value: function fail(callback) {
          return this.then(null, callback);
        }
      }, {
        key: '_thenRunCallbacks',
        value: function _thenRunCallbacks(optionsOrCallback, model) {
          var options = {};
          if (typeof optionsOrCallback === 'function') {
            options.success = function(result) {
              optionsOrCallback(result, null);
            };
            options.error = function(error) {
              optionsOrCallback(null, error);
            };
          } else if (typeof optionsOrCallback === 'object') {
            if (typeof optionsOrCallback.success === 'function') {
              options.success = optionsOrCallback.success;
            }
            if (typeof optionsOrCallback.error === 'function') {
              options.error = optionsOrCallback.error;
            }
          }
          return this.then(function() {
            for (var _len3 = arguments.length,
                results = Array(_len3),
                _key3 = 0; _key3 < _len3; _key3++) {
              results[_key3] = arguments[_key3];
            }
            if (options.success) {
              options.success.apply(this, results);
            }
            return ParsePromise.as.apply(ParsePromise, arguments);
          }, function(error) {
            if (options.error) {
              if (typeof model !== 'undefined') {
                options.error(model, error);
              } else {
                options.error(error);
              }
            }
            return ParsePromise.error(error);
          });
        }
      }, {
        key: '_continueWith',
        value: function _continueWith(continuation) {
          return this.then(function() {
            return continuation(arguments, null);
          }, function(error) {
            return continuation(null, error);
          });
        }
      }], [{
        key: 'is',
        value: function is(promise) {
          return promise != null && typeof promise.then === 'function';
        }
      }, {
        key: 'as',
        value: function as() {
          var promise = new ParsePromise();
          for (var _len4 = arguments.length,
              values = Array(_len4),
              _key4 = 0; _key4 < _len4; _key4++) {
            values[_key4] = arguments[_key4];
          }
          promise.resolve.apply(promise, values);
          return promise;
        }
      }, {
        key: 'resolve',
        value: function resolve(value) {
          return new ParsePromise(function(resolve, reject) {
            if (ParsePromise.is(value)) {
              value.then(resolve, reject);
            } else {
              resolve(value);
            }
          });
        }
      }, {
        key: 'error',
        value: function error() {
          var promise = new ParsePromise();
          for (var _len5 = arguments.length,
              errors = Array(_len5),
              _key5 = 0; _key5 < _len5; _key5++) {
            errors[_key5] = arguments[_key5];
          }
          promise.reject.apply(promise, errors);
          return promise;
        }
      }, {
        key: 'reject',
        value: function reject() {
          for (var _len6 = arguments.length,
              errors = Array(_len6),
              _key6 = 0; _key6 < _len6; _key6++) {
            errors[_key6] = arguments[_key6];
          }
          return ParsePromise.error.apply(null, errors);
        }
      }, {
        key: 'when',
        value: function when(promises) {
          var objects;
          var arrayArgument = Array.isArray(promises);
          if (arrayArgument) {
            objects = promises;
          } else {
            objects = arguments;
          }
          var total = objects.length;
          var hadError = false;
          var results = [];
          var returnValue = arrayArgument ? [results] : results;
          var errors = [];
          results.length = objects.length;
          errors.length = objects.length;
          if (total === 0) {
            return ParsePromise.as.apply(this, returnValue);
          }
          var promise = new ParsePromise();
          var resolveOne = function resolveOne() {
            total--;
            if (total <= 0) {
              if (hadError) {
                promise.reject(errors);
              } else {
                promise.resolve.apply(promise, returnValue);
              }
            }
          };
          var chain = function chain(object, index) {
            if (ParsePromise.is(object)) {
              object.then(function(result) {
                results[index] = result;
                resolveOne();
              }, function(error) {
                errors[index] = error;
                hadError = true;
                resolveOne();
              });
            } else {
              results[i] = object;
              resolveOne();
            }
          };
          for (var i = 0; i < objects.length; i++) {
            chain(objects[i], i);
          }
          return promise;
        }
      }, {
        key: '_continueWhile',
        value: function _continueWhile(predicate, asyncFunction) {
          if (predicate()) {
            return asyncFunction().then(function() {
              return ParsePromise._continueWhile(predicate, asyncFunction);
            });
          }
          return ParsePromise.as();
        }
      }, {
        key: 'isPromisesAPlusCompliant',
        value: function isPromisesAPlusCompliant() {
          return _isPromisesAPlusCompliant;
        }
      }, {
        key: 'enableAPlusCompliant',
        value: function enableAPlusCompliant() {
          _isPromisesAPlusCompliant = true;
        }
      }, {
        key: 'disableAPlusCompliant',
        value: function disableAPlusCompliant() {
          _isPromisesAPlusCompliant = false;
        }
      }]);
      return ParsePromise;
    })();
    exports['default'] = ParsePromise;
    module.exports = exports['default'];
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b5", ["73", "71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  module.exports = {
    async: 0,
    getItem: function getItem(path) {
      return localStorage.getItem(path);
    },
    setItem: function setItem(path, value) {
      try {
        localStorage.setItem(path, value);
      } catch (e) {}
    },
    removeItem: function removeItem(path) {
      localStorage.removeItem(path);
    },
    clear: function clear() {
      localStorage.clear();
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("72", ["73", "5", "71", "b5"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _ParsePromise = $__require('71');
  var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
  module.exports = {
    async: function async() {
      var controller = _CoreManager2['default'].getStorageController();
      return !!controller.async;
    },
    getItem: function getItem(path) {
      var controller = _CoreManager2['default'].getStorageController();
      if (controller.async === 1) {
        throw new Error('Synchronous storage is not supported by the current storage controller');
      }
      return controller.getItem(path);
    },
    getItemAsync: function getItemAsync(path) {
      var controller = _CoreManager2['default'].getStorageController();
      if (controller.async === 1) {
        return controller.getItemAsync(path);
      }
      return _ParsePromise2['default'].as(controller.getItem(path));
    },
    setItem: function setItem(path, value) {
      var controller = _CoreManager2['default'].getStorageController();
      if (controller.async === 1) {
        throw new Error('Synchronous storage is not supported by the current storage controller');
      }
      return controller.setItem(path, value);
    },
    setItemAsync: function setItemAsync(path, value) {
      var controller = _CoreManager2['default'].getStorageController();
      if (controller.async === 1) {
        return controller.setItemAsync(path, value);
      }
      return _ParsePromise2['default'].as(controller.setItem(path, value));
    },
    removeItem: function removeItem(path) {
      var controller = _CoreManager2['default'].getStorageController();
      if (controller.async === 1) {
        throw new Error('Synchronous storage is not supported by the current storage controller');
      }
      return controller.removeItem(path);
    },
    removeItemAsync: function removeItemAsync(path) {
      var controller = _CoreManager2['default'].getStorageController();
      if (controller.async === 1) {
        return controller.removeItemAsync(path);
      }
      return _ParsePromise2['default'].as(controller.removeItem(path));
    },
    generatePath: function generatePath(path) {
      if (!_CoreManager2['default'].get('APPLICATION_ID')) {
        throw new Error('You need to call Parse.initialize before using Parse.');
      }
      if (typeof path !== 'string') {
        throw new Error('Tried to get a Storage path that was not a String.');
      }
      if (path[0] === '/') {
        path = path.substr(1);
      }
      return 'Parse/' + _CoreManager2['default'].get('APPLICATION_ID') + '/' + path;
    },
    _clear: function _clear() {
      var controller = _CoreManager2['default'].getStorageController();
      if (controller.hasOwnProperty('clear')) {
        controller.clear();
      }
    }
  };
  _CoreManager2['default'].setStorageController($__require('b5'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b6", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b7", ["b6"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('b6');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b8", ["b7"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? process : $__require('b7');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("58", ["b8"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('b8');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7d", ["a", "b", "c", "d", "b3", "73", "5", "82", "75", "7f", "71", "b4", "72", "58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var _get = $__require('a')['default'];
    var _inherits = $__require('b')['default'];
    var _createClass = $__require('c')['default'];
    var _classCallCheck = $__require('d')['default'];
    var _Object$defineProperty = $__require('b3')['default'];
    var _interopRequireDefault = $__require('73')['default'];
    Object.defineProperty(exports, '__esModule', {value: true});
    var _CoreManager = $__require('5');
    var _CoreManager2 = _interopRequireDefault(_CoreManager);
    var _isRevocableSession = $__require('82');
    var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);
    var _ParseError = $__require('75');
    var _ParseError2 = _interopRequireDefault(_ParseError);
    var _ParseObject2 = $__require('7f');
    var _ParseObject3 = _interopRequireDefault(_ParseObject2);
    var _ParsePromise = $__require('71');
    var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
    var _ParseSession = $__require('b4');
    var _ParseSession2 = _interopRequireDefault(_ParseSession);
    var _Storage = $__require('72');
    var _Storage2 = _interopRequireDefault(_Storage);
    var CURRENT_USER_KEY = 'currentUser';
    var canUseCurrentUser = !_CoreManager2['default'].get('IS_NODE');
    var currentUserCacheMatchesDisk = false;
    var currentUserCache = null;
    var authProviders = {};
    var ParseUser = (function(_ParseObject) {
      _inherits(ParseUser, _ParseObject);
      function ParseUser(attributes) {
        _classCallCheck(this, ParseUser);
        _get(Object.getPrototypeOf(ParseUser.prototype), 'constructor', this).call(this, '_User');
        if (attributes && typeof attributes === 'object') {
          if (!this.set(attributes || {})) {
            throw new Error('Can\'t create an invalid Parse User');
          }
        }
      }
      _createClass(ParseUser, [{
        key: '_upgradeToRevocableSession',
        value: function _upgradeToRevocableSession(options) {
          options = options || {};
          var upgradeOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            upgradeOptions.useMasterKey = options.useMasterKey;
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.upgradeToRevocableSession(this, upgradeOptions)._thenRunCallbacks(options);
        }
      }, {
        key: '_linkWith',
        value: function _linkWith(provider, options) {
          var _this = this;
          var authType;
          if (typeof provider === 'string') {
            authType = provider;
            provider = authProviders[provider];
          } else {
            authType = provider.getAuthType();
          }
          if (options && options.hasOwnProperty('authData')) {
            var authData = this.get('authData') || {};
            authData[authType] = options.authData;
            var controller = _CoreManager2['default'].getUserController();
            return controller.linkWith(this, authData)._thenRunCallbacks(options, this);
          } else {
            var promise = new _ParsePromise2['default']();
            provider.authenticate({
              success: function success(provider, result) {
                var opts = {};
                opts.authData = result;
                if (options.success) {
                  opts.success = options.success;
                }
                if (options.error) {
                  opts.error = options.error;
                }
                _this._linkWith(provider, opts).then(function() {
                  promise.resolve(_this);
                }, function(error) {
                  promise.reject(error);
                });
              },
              error: function error(provider, _error) {
                if (options.error) {
                  options.error(_this, _error);
                }
                promise.reject(_error);
              }
            });
            return promise;
          }
        }
      }, {
        key: '_synchronizeAuthData',
        value: function _synchronizeAuthData(provider) {
          if (!this.isCurrent() || !provider) {
            return;
          }
          var authType;
          if (typeof provider === 'string') {
            authType = provider;
            provider = authProviders[authType];
          } else {
            authType = provider.getAuthType();
          }
          var authData = this.get('authData');
          if (!provider || typeof authData !== 'object') {
            return;
          }
          var success = provider.restoreAuthentication(authData[authType]);
          if (!success) {
            this._unlinkFrom(provider);
          }
        }
      }, {
        key: '_synchronizeAllAuthData',
        value: function _synchronizeAllAuthData() {
          var authData = this.get('authData');
          if (typeof authData !== 'object') {
            return;
          }
          for (var key in authData) {
            this._synchronizeAuthData(key);
          }
        }
      }, {
        key: '_cleanupAuthData',
        value: function _cleanupAuthData() {
          if (!this.isCurrent()) {
            return;
          }
          var authData = this.get('authData');
          if (typeof authData !== 'object') {
            return;
          }
          for (var key in authData) {
            if (!authData[key]) {
              delete authData[key];
            }
          }
        }
      }, {
        key: '_unlinkFrom',
        value: function _unlinkFrom(provider, options) {
          var _this2 = this;
          var authType;
          if (typeof provider === 'string') {
            authType = provider;
            provider = authProviders[provider];
          } else {
            authType = provider.getAuthType();
          }
          return this._linkWith(provider, {authData: null}).then(function() {
            _this2._synchronizeAuthData(provider);
            return _ParsePromise2['default'].as(_this2);
          })._thenRunCallbacks(options);
        }
      }, {
        key: '_isLinked',
        value: function _isLinked(provider) {
          var authType;
          if (typeof provider === 'string') {
            authType = provider;
          } else {
            authType = provider.getAuthType();
          }
          var authData = this.get('authData') || {};
          return !!authData[authType];
        }
      }, {
        key: '_logOutWithAll',
        value: function _logOutWithAll() {
          var authData = this.get('authData');
          if (typeof authData !== 'object') {
            return;
          }
          for (var key in authData) {
            this._logOutWith(key);
          }
        }
      }, {
        key: '_logOutWith',
        value: function _logOutWith(provider) {
          if (!this.isCurrent()) {
            return;
          }
          if (typeof provider === 'string') {
            provider = authProviders[provider];
          }
          if (provider && provider.deauthenticate) {
            provider.deauthenticate();
          }
        }
      }, {
        key: 'isCurrent',
        value: function isCurrent() {
          var current = ParseUser.current();
          return !!current && current.id === this.id;
        }
      }, {
        key: 'getUsername',
        value: function getUsername() {
          return this.get('username');
        }
      }, {
        key: 'setUsername',
        value: function setUsername(username) {
          var authData = this.get('authData');
          if (authData && authData.hasOwnProperty('anonymous')) {
            authData.anonymous = null;
          }
          this.set('username', username);
        }
      }, {
        key: 'setPassword',
        value: function setPassword(password) {
          this.set('password', password);
        }
      }, {
        key: 'getEmail',
        value: function getEmail() {
          return this.get('email');
        }
      }, {
        key: 'setEmail',
        value: function setEmail(email) {
          this.set('email', email);
        }
      }, {
        key: 'getSessionToken',
        value: function getSessionToken() {
          return this.get('sessionToken');
        }
      }, {
        key: 'authenticated',
        value: function authenticated() {
          var current = ParseUser.current();
          return !!this.get('sessionToken') && !!current && current.id === this.id;
        }
      }, {
        key: 'signUp',
        value: function signUp(attrs, options) {
          options = options || {};
          var signupOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            signupOptions.useMasterKey = options.useMasterKey;
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.signUp(this, attrs, signupOptions)._thenRunCallbacks(options, this);
        }
      }, {
        key: 'logIn',
        value: function logIn(options) {
          options = options || {};
          var loginOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            loginOptions.useMasterKey = options.useMasterKey;
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.logIn(this, loginOptions)._thenRunCallbacks(options, this);
        }
      }, {
        key: 'save',
        value: function save() {
          var _this3 = this;
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _get(Object.getPrototypeOf(ParseUser.prototype), 'save', this).apply(this, args).then(function() {
            if (_this3.isCurrent()) {
              return _CoreManager2['default'].getUserController().updateUserOnDisk(_this3);
            }
            return _this3;
          });
        }
      }, {
        key: 'fetch',
        value: function fetch() {
          var _this4 = this;
          for (var _len2 = arguments.length,
              args = Array(_len2),
              _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _get(Object.getPrototypeOf(ParseUser.prototype), 'fetch', this).apply(this, args).then(function() {
            if (_this4.isCurrent()) {
              return _CoreManager2['default'].getUserController().updateUserOnDisk(_this4);
            }
            return _this4;
          });
        }
      }], [{
        key: 'readOnlyAttributes',
        value: function readOnlyAttributes() {
          return ['sessionToken'];
        }
      }, {
        key: 'extend',
        value: function extend(protoProps, classProps) {
          if (protoProps) {
            for (var prop in protoProps) {
              if (prop !== 'className') {
                _Object$defineProperty(ParseUser.prototype, prop, {
                  value: protoProps[prop],
                  enumerable: false,
                  writable: true,
                  configurable: true
                });
              }
            }
          }
          if (classProps) {
            for (var prop in classProps) {
              if (prop !== 'className') {
                _Object$defineProperty(ParseUser, prop, {
                  value: classProps[prop],
                  enumerable: false,
                  writable: true,
                  configurable: true
                });
              }
            }
          }
          return ParseUser;
        }
      }, {
        key: 'current',
        value: function current() {
          if (!canUseCurrentUser) {
            return null;
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.currentUser();
        }
      }, {
        key: 'currentAsync',
        value: function currentAsync() {
          if (!canUseCurrentUser) {
            return _ParsePromise2['default'].as(null);
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.currentUserAsync();
        }
      }, {
        key: 'signUp',
        value: function signUp(username, password, attrs, options) {
          attrs = attrs || {};
          attrs.username = username;
          attrs.password = password;
          var user = new ParseUser(attrs);
          return user.signUp({}, options);
        }
      }, {
        key: 'logIn',
        value: function logIn(username, password, options) {
          var user = new ParseUser();
          user._finishFetch({
            username: username,
            password: password
          });
          return user.logIn(options);
        }
      }, {
        key: 'become',
        value: function become(sessionToken, options) {
          if (!canUseCurrentUser) {
            throw new Error('It is not memory-safe to become a user in a server environment');
          }
          options = options || {};
          var becomeOptions = {sessionToken: sessionToken};
          if (options.hasOwnProperty('useMasterKey')) {
            becomeOptions.useMasterKey = options.useMasterKey;
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.become(becomeOptions)._thenRunCallbacks(options);
        }
      }, {
        key: 'logInWith',
        value: function logInWith(provider, options) {
          return ParseUser._logInWith(provider, options);
        }
      }, {
        key: 'logOut',
        value: function logOut() {
          if (!canUseCurrentUser) {
            throw new Error('There is no current user user on a node.js server environment.');
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.logOut();
        }
      }, {
        key: 'requestPasswordReset',
        value: function requestPasswordReset(email, options) {
          options = options || {};
          var requestOptions = {};
          if (options.hasOwnProperty('useMasterKey')) {
            requestOptions.useMasterKey = options.useMasterKey;
          }
          var controller = _CoreManager2['default'].getUserController();
          return controller.requestPasswordReset(email, requestOptions)._thenRunCallbacks(options);
        }
      }, {
        key: 'allowCustomUserClass',
        value: function allowCustomUserClass(isAllowed) {
          _CoreManager2['default'].set('PERFORM_USER_REWRITE', !isAllowed);
        }
      }, {
        key: 'enableRevocableSession',
        value: function enableRevocableSession(options) {
          options = options || {};
          _CoreManager2['default'].set('FORCE_REVOCABLE_SESSION', true);
          if (canUseCurrentUser) {
            var current = ParseUser.current();
            if (current) {
              return current._upgradeToRevocableSession(options);
            }
          }
          return _ParsePromise2['default'].as()._thenRunCallbacks(options);
        }
      }, {
        key: 'enableUnsafeCurrentUser',
        value: function enableUnsafeCurrentUser() {
          canUseCurrentUser = true;
        }
      }, {
        key: 'disableUnsafeCurrentUser',
        value: function disableUnsafeCurrentUser() {
          canUseCurrentUser = false;
        }
      }, {
        key: '_registerAuthenticationProvider',
        value: function _registerAuthenticationProvider(provider) {
          authProviders[provider.getAuthType()] = provider;
          ParseUser.currentAsync().then(function(current) {
            if (current) {
              current._synchronizeAuthData(provider.getAuthType());
            }
          });
        }
      }, {
        key: '_logInWith',
        value: function _logInWith(provider, options) {
          var user = new ParseUser();
          return user._linkWith(provider, options);
        }
      }, {
        key: '_clearCache',
        value: function _clearCache() {
          currentUserCache = null;
          currentUserCacheMatchesDisk = false;
        }
      }, {
        key: '_setCurrentUserCache',
        value: function _setCurrentUserCache(user) {
          currentUserCache = user;
        }
      }]);
      return ParseUser;
    })(_ParseObject3['default']);
    exports['default'] = ParseUser;
    _ParseObject3['default'].registerSubclass('_User', ParseUser);
    var DefaultController = {
      updateUserOnDisk: function updateUserOnDisk(user) {
        var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
        var json = user.toJSON();
        json.className = '_User';
        return _Storage2['default'].setItemAsync(path, JSON.stringify(json)).then(function() {
          return user;
        });
      },
      setCurrentUser: function setCurrentUser(user) {
        currentUserCache = user;
        user._cleanupAuthData();
        user._synchronizeAllAuthData();
        return DefaultController.updateUserOnDisk(user);
      },
      currentUser: function currentUser() {
        if (currentUserCache) {
          return currentUserCache;
        }
        if (currentUserCacheMatchesDisk) {
          return null;
        }
        if (_Storage2['default'].async()) {
          throw new Error('Cannot call currentUser() when using a platform with an async ' + 'storage system. Call currentUserAsync() instead.');
        }
        var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
        var userData = _Storage2['default'].getItem(path);
        currentUserCacheMatchesDisk = true;
        if (!userData) {
          currentUserCache = null;
          return null;
        }
        userData = JSON.parse(userData);
        if (!userData.className) {
          userData.className = '_User';
        }
        if (userData._id) {
          if (userData.objectId !== userData._id) {
            userData.objectId = userData._id;
          }
          delete userData._id;
        }
        if (userData._sessionToken) {
          userData.sessionToken = userData._sessionToken;
          delete userData._sessionToken;
        }
        var current = _ParseObject3['default'].fromJSON(userData);
        currentUserCache = current;
        current._synchronizeAllAuthData();
        return current;
      },
      currentUserAsync: function currentUserAsync() {
        if (currentUserCache) {
          return _ParsePromise2['default'].as(currentUserCache);
        }
        if (currentUserCacheMatchesDisk) {
          return _ParsePromise2['default'].as(null);
        }
        var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
        return _Storage2['default'].getItemAsync(path).then(function(userData) {
          currentUserCacheMatchesDisk = true;
          if (!userData) {
            currentUserCache = null;
            return _ParsePromise2['default'].as(null);
          }
          userData = JSON.parse(userData);
          if (!userData.className) {
            userData.className = '_User';
          }
          if (userData._id) {
            if (userData.objectId !== userData._id) {
              userData.objectId = userData._id;
            }
            delete userData._id;
          }
          if (userData._sessionToken) {
            userData.sessionToken = userData._sessionToken;
            delete userData._sessionToken;
          }
          var current = _ParseObject3['default'].fromJSON(userData);
          currentUserCache = current;
          current._synchronizeAllAuthData();
          return _ParsePromise2['default'].as(current);
        });
      },
      signUp: function signUp(user, attrs, options) {
        var username = attrs && attrs.username || user.get('username');
        var password = attrs && attrs.password || user.get('password');
        if (!username || !username.length) {
          return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Cannot sign up user with an empty name.'));
        }
        if (!password || !password.length) {
          return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Cannot sign up user with an empty password.'));
        }
        return user.save(attrs, options).then(function() {
          user._finishFetch({password: undefined});
          if (canUseCurrentUser) {
            return DefaultController.setCurrentUser(user);
          }
          return user;
        });
      },
      logIn: function logIn(user, options) {
        var RESTController = _CoreManager2['default'].getRESTController();
        var stateController = _CoreManager2['default'].getObjectStateController();
        var auth = {
          username: user.get('username'),
          password: user.get('password')
        };
        return RESTController.request('GET', 'login', auth, options).then(function(response, status) {
          user._migrateId(response.objectId);
          user._setExisted(true);
          stateController.setPendingOp(user._getStateIdentifier(), 'username', undefined);
          stateController.setPendingOp(user._getStateIdentifier(), 'password', undefined);
          response.password = undefined;
          user._finishFetch(response);
          if (!canUseCurrentUser) {
            return _ParsePromise2['default'].as(user);
          }
          return DefaultController.setCurrentUser(user);
        });
      },
      become: function become(options) {
        var user = new ParseUser();
        var RESTController = _CoreManager2['default'].getRESTController();
        return RESTController.request('GET', 'users/me', {}, options).then(function(response, status) {
          user._finishFetch(response);
          user._setExisted(true);
          return DefaultController.setCurrentUser(user);
        });
      },
      logOut: function logOut() {
        return DefaultController.currentUserAsync().then(function(currentUser) {
          var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
          var promise = _Storage2['default'].removeItemAsync(path);
          var RESTController = _CoreManager2['default'].getRESTController();
          if (currentUser !== null) {
            var currentSession = currentUser.getSessionToken();
            if (currentSession && (0, _isRevocableSession2['default'])(currentSession)) {
              promise = promise.then(function() {
                return RESTController.request('POST', 'logout', {}, {sessionToken: currentSession});
              });
            }
            currentUser._logOutWithAll();
            currentUser._finishFetch({sessionToken: undefined});
          }
          currentUserCacheMatchesDisk = true;
          currentUserCache = null;
          return promise;
        });
      },
      requestPasswordReset: function requestPasswordReset(email, options) {
        var RESTController = _CoreManager2['default'].getRESTController();
        return RESTController.request('POST', 'requestPasswordReset', {email: email}, options);
      },
      upgradeToRevocableSession: function upgradeToRevocableSession(user, options) {
        var token = user.getSessionToken();
        if (!token) {
          return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].SESSION_MISSING, 'Cannot upgrade a user with no session token'));
        }
        options.sessionToken = token;
        var RESTController = _CoreManager2['default'].getRESTController();
        return RESTController.request('POST', 'upgradeToRevocableSession', {}, options).then(function(result) {
          var session = new _ParseSession2['default']();
          session._finishFetch(result);
          user._finishFetch({sessionToken: session.getSessionToken()});
          if (user.isCurrent()) {
            return DefaultController.setCurrentUser(user);
          }
          return _ParsePromise2['default'].as(user);
        });
      },
      linkWith: function linkWith(user, authData) {
        return user.save({authData: authData}).then(function() {
          if (canUseCurrentUser) {
            return DefaultController.setCurrentUser(user);
          }
          return user;
        });
      }
    };
    _CoreManager2['default'].setUserController(DefaultController);
    module.exports = exports['default'];
  })($__require('58'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b9", ["73", "90", "78", "62", "5", "70", "a3", "74", "8b", "76", "77", "79", "75", "7b", "88", "8c", "7e", "7f", "71", "80", "81", "89", "af", "b4", "72", "7d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _interopRequireDefault = $__require('73')['default'];
  var _interopRequireWildcard = $__require('90')['default'];
  var _decode = $__require('78');
  var _decode2 = _interopRequireDefault(_decode);
  var _encode = $__require('62');
  var _encode2 = _interopRequireDefault(_encode);
  var _CoreManager = $__require('5');
  var _CoreManager2 = _interopRequireDefault(_CoreManager);
  var _InstallationController = $__require('70');
  var _InstallationController2 = _interopRequireDefault(_InstallationController);
  var _ParseOp = $__require('a3');
  var ParseOp = _interopRequireWildcard(_ParseOp);
  var _RESTController = $__require('74');
  var _RESTController2 = _interopRequireDefault(_RESTController);
  var Parse = {
    initialize: function initialize(applicationId, javaScriptKey) {
      if ('browser' === 'browser' && _CoreManager2['default'].get('IS_NODE')) {
        console.log('It looks like you\'re using the browser version of the SDK in a ' + 'node.js environment. You should require(\'parse/node\') instead.');
      }
      Parse._initialize(applicationId, javaScriptKey);
    },
    _initialize: function _initialize(applicationId, javaScriptKey, masterKey) {
      _CoreManager2['default'].set('APPLICATION_ID', applicationId);
      _CoreManager2['default'].set('JAVASCRIPT_KEY', javaScriptKey);
      _CoreManager2['default'].set('MASTER_KEY', masterKey);
      _CoreManager2['default'].set('USE_MASTER_KEY', false);
    }
  };
  Object.defineProperty(Parse, 'applicationId', {
    get: function get() {
      return _CoreManager2['default'].get('APPLICATION_ID');
    },
    set: function set(value) {
      _CoreManager2['default'].set('APPLICATION_ID', value);
    }
  });
  Object.defineProperty(Parse, 'javaScriptKey', {
    get: function get() {
      return _CoreManager2['default'].get('JAVASCRIPT_KEY');
    },
    set: function set(value) {
      _CoreManager2['default'].set('JAVASCRIPT_KEY', value);
    }
  });
  Object.defineProperty(Parse, 'masterKey', {
    get: function get() {
      return _CoreManager2['default'].get('MASTER_KEY');
    },
    set: function set(value) {
      _CoreManager2['default'].set('MASTER_KEY', value);
    }
  });
  Object.defineProperty(Parse, 'serverURL', {
    get: function get() {
      return _CoreManager2['default'].get('SERVER_URL');
    },
    set: function set(value) {
      _CoreManager2['default'].set('SERVER_URL', value);
    }
  });
  Parse.ACL = $__require('8b');
  Parse.Analytics = $__require('76');
  Parse.Cloud = $__require('77');
  Parse.CoreManager = $__require('5');
  Parse.Config = $__require('79');
  Parse.Error = $__require('75');
  Parse.FacebookUtils = $__require('7b');
  Parse.File = $__require('88');
  Parse.GeoPoint = $__require('8c');
  Parse.Installation = $__require('7e');
  Parse.Object = $__require('7f');
  Parse.Op = {
    Set: ParseOp.SetOp,
    Unset: ParseOp.UnsetOp,
    Increment: ParseOp.IncrementOp,
    Add: ParseOp.AddOp,
    Remove: ParseOp.RemoveOp,
    AddUnique: ParseOp.AddUniqueOp,
    Relation: ParseOp.RelationOp
  };
  Parse.Promise = $__require('71');
  Parse.Push = $__require('80');
  Parse.Query = $__require('81');
  Parse.Relation = $__require('89');
  Parse.Role = $__require('af');
  Parse.Session = $__require('b4');
  Parse.Storage = $__require('72');
  Parse.User = $__require('7d');
  Parse._request = function() {
    for (var _len = arguments.length,
        args = Array(_len),
        _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _CoreManager2['default'].getRESTController().request.apply(null, args);
  };
  Parse._ajax = function() {
    for (var _len2 = arguments.length,
        args = Array(_len2),
        _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return _CoreManager2['default'].getRESTController().ajax.apply(null, args);
  };
  Parse._decode = function(_, value) {
    return (0, _decode2['default'])(value);
  };
  Parse._encode = function(value, _, disallowObjects) {
    return (0, _encode2['default'])(value, disallowObjects);
  };
  Parse._getInstallationId = function() {
    return _CoreManager2['default'].getInstallationController().currentInstallationId();
  };
  _CoreManager2['default'].setInstallationController(_InstallationController2['default']);
  _CoreManager2['default'].setRESTController(_RESTController2['default']);
  Parse.Parse = Parse;
  module.exports = Parse;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("ba", ["b9"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('b9');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["ba"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('ba');
  global.define = __define;
  return module.exports;
});

$__System.register('bb', ['10'], function (_export) {

   /**
    * Provides older "extend" functionality for Backbone. While it is still accessible it is recommended
    * to adopt the new Backbone-ES6 patterns and ES6 sub-classing via "extends".
    *
    * Helper function to correctly set up the prototype chain for subclasses. Similar to `goog.inherits`, but uses a hash
    * of prototype properties and class properties to be extended.
    *
    * @see http://backbonejs.org/#Collection-extend
    * @see http://backbonejs.org/#Model-extend
    * @see http://backbonejs.org/#Router-extend
    * @see http://backbonejs.org/#View-extend
    *
    * @param {object}   protoProps  - instance properties
    * @param {object}   staticProps - class properties
    * @returns {*}      Subclass of parent class.
    */
   'use strict';

   var _;

   _export('default', extend);

   function extend(protoProps, staticProps) {
      var parent = this;
      var child = undefined;

      // The constructor function for the new subclass is either defined by you (the "constructor" property in your
      // `extend` definition), or defaulted by us to simply call the parent constructor.
      if (protoProps && _.has(protoProps, 'constructor')) {
         child = protoProps.constructor;
      } else {
         child = function () {
            return parent.apply(this, arguments);
         };
      }

      // Add static properties to the constructor function, if supplied.
      _.extend(child, parent, staticProps);

      // Set the prototype chain to inherit from `parent`, without calling `parent` constructor function.
      var Surrogate = function Surrogate() {
         this.constructor = child;
      };

      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate();

      // Add prototype properties (instance properties) to the subclass, if supplied.
      if (protoProps) {
         _.extend(child.prototype, protoProps);

         // backbone-es6 addition: Because View defines a getter for tagName we must actually redefine this getter
         // from the `protoProps.tagName` if it exists.
         if (protoProps.tagName) {
            Object.defineProperty(child.prototype, 'tagName', { get: function get() {
                  return protoProps.tagName;
               } });
         }
      }

      // Set a convenience property in case the parent's prototype is needed later.
      child.__super__ = parent.prototype;

      return child;
   }

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }],
      execute: function () {}
   };
});

$__System.register('bc', ['bb'], function (_export) {

   /**
    * Provides extend functionality for Model that is compatible to the Parse SDK.
    *
    * @param {string|object}  className   - Class name or object hash w/ className key
    * @param {object}         protoProps  - instance properties
    * @param {object}         staticProps - class properties
    * @returns {*}            Subclass of parent class.
    */
   'use strict';

   var extend;

   _export('default', modelExtend);

   function modelExtend(_x, _x2, _x3) {
      var _this = this;

      var _again = true;

      _function: while (_again) {
         var className = _x,
             protoProps = _x2,
             staticProps = _x3;
         _again = false;

         if (typeof className !== 'string') {
            if (className && typeof className.className === 'string') {
               _x = className.className;
               _x2 = className;
               _x3 = protoProps;
               _again = true;
               continue _function;
            } else {
               throw new Error('(Parse) Backbone.Model.extend - the first argument should be the className.');
            }
         }

         var child = extend.call(_this, protoProps, staticProps);

         child.className = className;

         return child;
      }
   }

   return {
      setters: [function (_bb) {
         extend = _bb['default'];
      }],
      execute: function () {}
   };
});

$__System.register('bd', ['4', '10', 'bb', 'bc'], function (_export) {

   // Add HTTPS image fetch substitution to Parse.Object ---------------------------------------------------------------

   /**
    * It turns out that we can get an HTTPS link from S3 for any given parse file URL by string substitution.
    *
    * @param {string}   key   - Attribute key
    * @returns {XML|string|void}
    */
   'use strict';

   var Parse, _, extend, modelExtend;

   _export('default', parseExtend);

   /**
    * Provides support for older "extend" functionality in addition to adding a utility
    * method, "getHTTPSUrl" to retrieve an HTTPS url for Parse.Object and Backbone.Model.
    *
    * @param {Backbone} Backbone - Backbone instance
    */

   function parseExtend(Backbone) {
      // Set up inheritance for the model, collection, router, view and history.
      Backbone.Model.extend = modelExtend;

      Backbone.Collection.extend = Backbone.Router.extend = Backbone.View.extend = Backbone.History.extend = extend;

      // Add HTTPS image fetch substitution to Backbone.Model -------------------------------------------------------------

      /**
       * It turns out that we can get an HTTPS link from S3 for any given parse file URL by string substitution.
       *
       * @param {string}   key   - Attribute key
       * @returns {XML|string|void}
       */
      Backbone.Model.prototype.getHTTPSUrl = function (key) {
         var urlRequest = this.get(key);

         if (!_.isUndefined(urlRequest) && urlRequest !== null && !_.isUndefined(urlRequest.url)) {
            return urlRequest.url().replace('http://files.parsetfss.com/', 'https://s3.amazonaws.com/files.parsetfss.com/');
         }
      };
   }

   return {
      setters: [function (_2) {
         Parse = _2['default'];
      }, function (_3) {
         _ = _3['default'];
      }, function (_bb) {
         extend = _bb['default'];
      }, function (_bc) {
         modelExtend = _bc['default'];
      }],
      execute: function () {
         Parse.Object.prototype.getHTTPSUrl = function (key) {
            var urlRequest = this.get(key);

            if (!_.isUndefined(urlRequest) && urlRequest !== null && !_.isUndefined(urlRequest.url)) {
               return urlRequest.url().replace('http://files.parsetfss.com/', 'https://s3.amazonaws.com/files.parsetfss.com/');
            }
         };
      }
   };
});

$__System.registerDynamic("be", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function() {
    var root = this;
    var previousUnderscore = root._;
    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype;
    var push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create;
    var Ctor = function() {};
    var _ = function(obj) {
      if (obj instanceof _)
        return obj;
      if (!(this instanceof _))
        return new _(obj);
      this._wrapped = obj;
    };
    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = _;
      }
      exports._ = _;
    } else {
      root._ = _;
    }
    _.VERSION = '1.8.3';
    var optimizeCb = function(func, context, argCount) {
      if (context === void 0)
        return func;
      switch (argCount == null ? 3 : argCount) {
        case 1:
          return function(value) {
            return func.call(context, value);
          };
        case 2:
          return function(value, other) {
            return func.call(context, value, other);
          };
        case 3:
          return function(value, index, collection) {
            return func.call(context, value, index, collection);
          };
        case 4:
          return function(accumulator, value, index, collection) {
            return func.call(context, accumulator, value, index, collection);
          };
      }
      return function() {
        return func.apply(context, arguments);
      };
    };
    var cb = function(value, context, argCount) {
      if (value == null)
        return _.identity;
      if (_.isFunction(value))
        return optimizeCb(value, context, argCount);
      if (_.isObject(value))
        return _.matcher(value);
      return _.property(value);
    };
    _.iteratee = function(value, context) {
      return cb(value, context, Infinity);
    };
    var createAssigner = function(keysFunc, undefinedOnly) {
      return function(obj) {
        var length = arguments.length;
        if (length < 2 || obj == null)
          return obj;
        for (var index = 1; index < length; index++) {
          var source = arguments[index],
              keys = keysFunc(source),
              l = keys.length;
          for (var i = 0; i < l; i++) {
            var key = keys[i];
            if (!undefinedOnly || obj[key] === void 0)
              obj[key] = source[key];
          }
        }
        return obj;
      };
    };
    var baseCreate = function(prototype) {
      if (!_.isObject(prototype))
        return {};
      if (nativeCreate)
        return nativeCreate(prototype);
      Ctor.prototype = prototype;
      var result = new Ctor;
      Ctor.prototype = null;
      return result;
    };
    var property = function(key) {
      return function(obj) {
        return obj == null ? void 0 : obj[key];
      };
    };
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property('length');
    var isArrayLike = function(collection) {
      var length = getLength(collection);
      return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };
    _.each = _.forEach = function(obj, iteratee, context) {
      iteratee = optimizeCb(iteratee, context);
      var i,
          length;
      if (isArrayLike(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
          iteratee(obj[i], i, obj);
        }
      } else {
        var keys = _.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
          iteratee(obj[keys[i]], keys[i], obj);
        }
      }
      return obj;
    };
    _.map = _.collect = function(obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          results = Array(length);
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        results[index] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
    };
    function createReduce(dir) {
      function iterator(obj, iteratee, memo, keys, index, length) {
        for (; index >= 0 && index < length; index += dir) {
          var currentKey = keys ? keys[index] : index;
          memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
      }
      return function(obj, iteratee, memo, context) {
        iteratee = optimizeCb(iteratee, context, 4);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            index = dir > 0 ? 0 : length - 1;
        if (arguments.length < 3) {
          memo = obj[keys ? keys[index] : index];
          index += dir;
        }
        return iterator(obj, iteratee, memo, keys, index, length);
      };
    }
    _.reduce = _.foldl = _.inject = createReduce(1);
    _.reduceRight = _.foldr = createReduce(-1);
    _.find = _.detect = function(obj, predicate, context) {
      var key;
      if (isArrayLike(obj)) {
        key = _.findIndex(obj, predicate, context);
      } else {
        key = _.findKey(obj, predicate, context);
      }
      if (key !== void 0 && key !== -1)
        return obj[key];
    };
    _.filter = _.select = function(obj, predicate, context) {
      var results = [];
      predicate = cb(predicate, context);
      _.each(obj, function(value, index, list) {
        if (predicate(value, index, list))
          results.push(value);
      });
      return results;
    };
    _.reject = function(obj, predicate, context) {
      return _.filter(obj, _.negate(cb(predicate)), context);
    };
    _.every = _.all = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length;
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (!predicate(obj[currentKey], currentKey, obj))
          return false;
      }
      return true;
    };
    _.some = _.any = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length;
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (predicate(obj[currentKey], currentKey, obj))
          return true;
      }
      return false;
    };
    _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
      if (!isArrayLike(obj))
        obj = _.values(obj);
      if (typeof fromIndex != 'number' || guard)
        fromIndex = 0;
      return _.indexOf(obj, item, fromIndex) >= 0;
    };
    _.invoke = function(obj, method) {
      var args = slice.call(arguments, 2);
      var isFunc = _.isFunction(method);
      return _.map(obj, function(value) {
        var func = isFunc ? method : value[method];
        return func == null ? func : func.apply(value, args);
      });
    };
    _.pluck = function(obj, key) {
      return _.map(obj, _.property(key));
    };
    _.where = function(obj, attrs) {
      return _.filter(obj, _.matcher(attrs));
    };
    _.findWhere = function(obj, attrs) {
      return _.find(obj, _.matcher(attrs));
    };
    _.max = function(obj, iteratee, context) {
      var result = -Infinity,
          lastComputed = -Infinity,
          value,
          computed;
      if (iteratee == null && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0,
            length = obj.length; i < length; i++) {
          value = obj[i];
          if (value > result) {
            result = value;
          }
        }
      } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function(value, index, list) {
          computed = iteratee(value, index, list);
          if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
            result = value;
            lastComputed = computed;
          }
        });
      }
      return result;
    };
    _.min = function(obj, iteratee, context) {
      var result = Infinity,
          lastComputed = Infinity,
          value,
          computed;
      if (iteratee == null && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0,
            length = obj.length; i < length; i++) {
          value = obj[i];
          if (value < result) {
            result = value;
          }
        }
      } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function(value, index, list) {
          computed = iteratee(value, index, list);
          if (computed < lastComputed || computed === Infinity && result === Infinity) {
            result = value;
            lastComputed = computed;
          }
        });
      }
      return result;
    };
    _.shuffle = function(obj) {
      var set = isArrayLike(obj) ? obj : _.values(obj);
      var length = set.length;
      var shuffled = Array(length);
      for (var index = 0,
          rand; index < length; index++) {
        rand = _.random(0, index);
        if (rand !== index)
          shuffled[index] = shuffled[rand];
        shuffled[rand] = set[index];
      }
      return shuffled;
    };
    _.sample = function(obj, n, guard) {
      if (n == null || guard) {
        if (!isArrayLike(obj))
          obj = _.values(obj);
        return obj[_.random(obj.length - 1)];
      }
      return _.shuffle(obj).slice(0, Math.max(0, n));
    };
    _.sortBy = function(obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      return _.pluck(_.map(obj, function(value, index, list) {
        return {
          value: value,
          index: index,
          criteria: iteratee(value, index, list)
        };
      }).sort(function(left, right) {
        var a = left.criteria;
        var b = right.criteria;
        if (a !== b) {
          if (a > b || a === void 0)
            return 1;
          if (a < b || b === void 0)
            return -1;
        }
        return left.index - right.index;
      }), 'value');
    };
    var group = function(behavior) {
      return function(obj, iteratee, context) {
        var result = {};
        iteratee = cb(iteratee, context);
        _.each(obj, function(value, index) {
          var key = iteratee(value, index, obj);
          behavior(result, value, key);
        });
        return result;
      };
    };
    _.groupBy = group(function(result, value, key) {
      if (_.has(result, key))
        result[key].push(value);
      else
        result[key] = [value];
    });
    _.indexBy = group(function(result, value, key) {
      result[key] = value;
    });
    _.countBy = group(function(result, value, key) {
      if (_.has(result, key))
        result[key]++;
      else
        result[key] = 1;
    });
    _.toArray = function(obj) {
      if (!obj)
        return [];
      if (_.isArray(obj))
        return slice.call(obj);
      if (isArrayLike(obj))
        return _.map(obj, _.identity);
      return _.values(obj);
    };
    _.size = function(obj) {
      if (obj == null)
        return 0;
      return isArrayLike(obj) ? obj.length : _.keys(obj).length;
    };
    _.partition = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var pass = [],
          fail = [];
      _.each(obj, function(value, key, obj) {
        (predicate(value, key, obj) ? pass : fail).push(value);
      });
      return [pass, fail];
    };
    _.first = _.head = _.take = function(array, n, guard) {
      if (array == null)
        return void 0;
      if (n == null || guard)
        return array[0];
      return _.initial(array, array.length - n);
    };
    _.initial = function(array, n, guard) {
      return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };
    _.last = function(array, n, guard) {
      if (array == null)
        return void 0;
      if (n == null || guard)
        return array[array.length - 1];
      return _.rest(array, Math.max(0, array.length - n));
    };
    _.rest = _.tail = _.drop = function(array, n, guard) {
      return slice.call(array, n == null || guard ? 1 : n);
    };
    _.compact = function(array) {
      return _.filter(array, _.identity);
    };
    var flatten = function(input, shallow, strict, startIndex) {
      var output = [],
          idx = 0;
      for (var i = startIndex || 0,
          length = getLength(input); i < length; i++) {
        var value = input[i];
        if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
          if (!shallow)
            value = flatten(value, shallow, strict);
          var j = 0,
              len = value.length;
          output.length += len;
          while (j < len) {
            output[idx++] = value[j++];
          }
        } else if (!strict) {
          output[idx++] = value;
        }
      }
      return output;
    };
    _.flatten = function(array, shallow) {
      return flatten(array, shallow, false);
    };
    _.without = function(array) {
      return _.difference(array, slice.call(arguments, 1));
    };
    _.uniq = _.unique = function(array, isSorted, iteratee, context) {
      if (!_.isBoolean(isSorted)) {
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
      }
      if (iteratee != null)
        iteratee = cb(iteratee, context);
      var result = [];
      var seen = [];
      for (var i = 0,
          length = getLength(array); i < length; i++) {
        var value = array[i],
            computed = iteratee ? iteratee(value, i, array) : value;
        if (isSorted) {
          if (!i || seen !== computed)
            result.push(value);
          seen = computed;
        } else if (iteratee) {
          if (!_.contains(seen, computed)) {
            seen.push(computed);
            result.push(value);
          }
        } else if (!_.contains(result, value)) {
          result.push(value);
        }
      }
      return result;
    };
    _.union = function() {
      return _.uniq(flatten(arguments, true, true));
    };
    _.intersection = function(array) {
      var result = [];
      var argsLength = arguments.length;
      for (var i = 0,
          length = getLength(array); i < length; i++) {
        var item = array[i];
        if (_.contains(result, item))
          continue;
        for (var j = 1; j < argsLength; j++) {
          if (!_.contains(arguments[j], item))
            break;
        }
        if (j === argsLength)
          result.push(item);
      }
      return result;
    };
    _.difference = function(array) {
      var rest = flatten(arguments, true, true, 1);
      return _.filter(array, function(value) {
        return !_.contains(rest, value);
      });
    };
    _.zip = function() {
      return _.unzip(arguments);
    };
    _.unzip = function(array) {
      var length = array && _.max(array, getLength).length || 0;
      var result = Array(length);
      for (var index = 0; index < length; index++) {
        result[index] = _.pluck(array, index);
      }
      return result;
    };
    _.object = function(list, values) {
      var result = {};
      for (var i = 0,
          length = getLength(list); i < length; i++) {
        if (values) {
          result[list[i]] = values[i];
        } else {
          result[list[i][0]] = list[i][1];
        }
      }
      return result;
    };
    function createPredicateIndexFinder(dir) {
      return function(array, predicate, context) {
        predicate = cb(predicate, context);
        var length = getLength(array);
        var index = dir > 0 ? 0 : length - 1;
        for (; index >= 0 && index < length; index += dir) {
          if (predicate(array[index], index, array))
            return index;
        }
        return -1;
      };
    }
    _.findIndex = createPredicateIndexFinder(1);
    _.findLastIndex = createPredicateIndexFinder(-1);
    _.sortedIndex = function(array, obj, iteratee, context) {
      iteratee = cb(iteratee, context, 1);
      var value = iteratee(obj);
      var low = 0,
          high = getLength(array);
      while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (iteratee(array[mid]) < value)
          low = mid + 1;
        else
          high = mid;
      }
      return low;
    };
    function createIndexFinder(dir, predicateFind, sortedIndex) {
      return function(array, item, idx) {
        var i = 0,
            length = getLength(array);
        if (typeof idx == 'number') {
          if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
          } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
          }
        } else if (sortedIndex && idx && length) {
          idx = sortedIndex(array, item);
          return array[idx] === item ? idx : -1;
        }
        if (item !== item) {
          idx = predicateFind(slice.call(array, i, length), _.isNaN);
          return idx >= 0 ? idx + i : -1;
        }
        for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
          if (array[idx] === item)
            return idx;
        }
        return -1;
      };
    }
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
    _.range = function(start, stop, step) {
      if (stop == null) {
        stop = start || 0;
        start = 0;
      }
      step = step || 1;
      var length = Math.max(Math.ceil((stop - start) / step), 0);
      var range = Array(length);
      for (var idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
      }
      return range;
    };
    var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
      if (!(callingContext instanceof boundFunc))
        return sourceFunc.apply(context, args);
      var self = baseCreate(sourceFunc.prototype);
      var result = sourceFunc.apply(self, args);
      if (_.isObject(result))
        return result;
      return self;
    };
    _.bind = function(func, context) {
      if (nativeBind && func.bind === nativeBind)
        return nativeBind.apply(func, slice.call(arguments, 1));
      if (!_.isFunction(func))
        throw new TypeError('Bind must be called on a function');
      var args = slice.call(arguments, 2);
      var bound = function() {
        return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
      };
      return bound;
    };
    _.partial = function(func) {
      var boundArgs = slice.call(arguments, 1);
      var bound = function() {
        var position = 0,
            length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
          args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length)
          args.push(arguments[position++]);
        return executeBound(func, bound, this, this, args);
      };
      return bound;
    };
    _.bindAll = function(obj) {
      var i,
          length = arguments.length,
          key;
      if (length <= 1)
        throw new Error('bindAll must be passed function names');
      for (i = 1; i < length; i++) {
        key = arguments[i];
        obj[key] = _.bind(obj[key], obj);
      }
      return obj;
    };
    _.memoize = function(func, hasher) {
      var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!_.has(cache, address))
          cache[address] = func.apply(this, arguments);
        return cache[address];
      };
      memoize.cache = {};
      return memoize;
    };
    _.delay = function(func, wait) {
      var args = slice.call(arguments, 2);
      return setTimeout(function() {
        return func.apply(null, args);
      }, wait);
    };
    _.defer = _.partial(_.delay, _, 1);
    _.throttle = function(func, wait, options) {
      var context,
          args,
          result;
      var timeout = null;
      var previous = 0;
      if (!options)
        options = {};
      var later = function() {
        previous = options.leading === false ? 0 : _.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout)
          context = args = null;
      };
      return function() {
        var now = _.now();
        if (!previous && options.leading === false)
          previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout)
            context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    };
    _.debounce = function(func, wait, immediate) {
      var timeout,
          args,
          context,
          timestamp,
          result;
      var later = function() {
        var last = _.now() - timestamp;
        if (last < wait && last >= 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            if (!timeout)
              context = args = null;
          }
        }
      };
      return function() {
        context = this;
        args = arguments;
        timestamp = _.now();
        var callNow = immediate && !timeout;
        if (!timeout)
          timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }
        return result;
      };
    };
    _.wrap = function(func, wrapper) {
      return _.partial(wrapper, func);
    };
    _.negate = function(predicate) {
      return function() {
        return !predicate.apply(this, arguments);
      };
    };
    _.compose = function() {
      var args = arguments;
      var start = args.length - 1;
      return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--)
          result = args[i].call(this, result);
        return result;
      };
    };
    _.after = function(times, func) {
      return function() {
        if (--times < 1) {
          return func.apply(this, arguments);
        }
      };
    };
    _.before = function(times, func) {
      var memo;
      return function() {
        if (--times > 0) {
          memo = func.apply(this, arguments);
        }
        if (times <= 1)
          func = null;
        return memo;
      };
    };
    _.once = _.partial(_.before, 2);
    var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
    function collectNonEnumProps(obj, keys) {
      var nonEnumIdx = nonEnumerableProps.length;
      var constructor = obj.constructor;
      var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
      var prop = 'constructor';
      if (_.has(obj, prop) && !_.contains(keys, prop))
        keys.push(prop);
      while (nonEnumIdx--) {
        prop = nonEnumerableProps[nonEnumIdx];
        if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
          keys.push(prop);
        }
      }
    }
    _.keys = function(obj) {
      if (!_.isObject(obj))
        return [];
      if (nativeKeys)
        return nativeKeys(obj);
      var keys = [];
      for (var key in obj)
        if (_.has(obj, key))
          keys.push(key);
      if (hasEnumBug)
        collectNonEnumProps(obj, keys);
      return keys;
    };
    _.allKeys = function(obj) {
      if (!_.isObject(obj))
        return [];
      var keys = [];
      for (var key in obj)
        keys.push(key);
      if (hasEnumBug)
        collectNonEnumProps(obj, keys);
      return keys;
    };
    _.values = function(obj) {
      var keys = _.keys(obj);
      var length = keys.length;
      var values = Array(length);
      for (var i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
      }
      return values;
    };
    _.mapObject = function(obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      var keys = _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
    };
    _.pairs = function(obj) {
      var keys = _.keys(obj);
      var length = keys.length;
      var pairs = Array(length);
      for (var i = 0; i < length; i++) {
        pairs[i] = [keys[i], obj[keys[i]]];
      }
      return pairs;
    };
    _.invert = function(obj) {
      var result = {};
      var keys = _.keys(obj);
      for (var i = 0,
          length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
      }
      return result;
    };
    _.functions = _.methods = function(obj) {
      var names = [];
      for (var key in obj) {
        if (_.isFunction(obj[key]))
          names.push(key);
      }
      return names.sort();
    };
    _.extend = createAssigner(_.allKeys);
    _.extendOwn = _.assign = createAssigner(_.keys);
    _.findKey = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = _.keys(obj),
          key;
      for (var i = 0,
          length = keys.length; i < length; i++) {
        key = keys[i];
        if (predicate(obj[key], key, obj))
          return key;
      }
    };
    _.pick = function(object, oiteratee, context) {
      var result = {},
          obj = object,
          iteratee,
          keys;
      if (obj == null)
        return result;
      if (_.isFunction(oiteratee)) {
        keys = _.allKeys(obj);
        iteratee = optimizeCb(oiteratee, context);
      } else {
        keys = flatten(arguments, false, false, 1);
        iteratee = function(value, key, obj) {
          return key in obj;
        };
        obj = Object(obj);
      }
      for (var i = 0,
          length = keys.length; i < length; i++) {
        var key = keys[i];
        var value = obj[key];
        if (iteratee(value, key, obj))
          result[key] = value;
      }
      return result;
    };
    _.omit = function(obj, iteratee, context) {
      if (_.isFunction(iteratee)) {
        iteratee = _.negate(iteratee);
      } else {
        var keys = _.map(flatten(arguments, false, false, 1), String);
        iteratee = function(value, key) {
          return !_.contains(keys, key);
        };
      }
      return _.pick(obj, iteratee, context);
    };
    _.defaults = createAssigner(_.allKeys, true);
    _.create = function(prototype, props) {
      var result = baseCreate(prototype);
      if (props)
        _.extendOwn(result, props);
      return result;
    };
    _.clone = function(obj) {
      if (!_.isObject(obj))
        return obj;
      return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };
    _.tap = function(obj, interceptor) {
      interceptor(obj);
      return obj;
    };
    _.isMatch = function(object, attrs) {
      var keys = _.keys(attrs),
          length = keys.length;
      if (object == null)
        return !length;
      var obj = Object(object);
      for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj))
          return false;
      }
      return true;
    };
    var eq = function(a, b, aStack, bStack) {
      if (a === b)
        return a !== 0 || 1 / a === 1 / b;
      if (a == null || b == null)
        return a === b;
      if (a instanceof _)
        a = a._wrapped;
      if (b instanceof _)
        b = b._wrapped;
      var className = toString.call(a);
      if (className !== toString.call(b))
        return false;
      switch (className) {
        case '[object RegExp]':
        case '[object String]':
          return '' + a === '' + b;
        case '[object Number]':
          if (+a !== +a)
            return +b !== +b;
          return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
          return +a === +b;
      }
      var areArrays = className === '[object Array]';
      if (!areArrays) {
        if (typeof a != 'object' || typeof b != 'object')
          return false;
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
          return false;
        }
      }
      aStack = aStack || [];
      bStack = bStack || [];
      var length = aStack.length;
      while (length--) {
        if (aStack[length] === a)
          return bStack[length] === b;
      }
      aStack.push(a);
      bStack.push(b);
      if (areArrays) {
        length = a.length;
        if (length !== b.length)
          return false;
        while (length--) {
          if (!eq(a[length], b[length], aStack, bStack))
            return false;
        }
      } else {
        var keys = _.keys(a),
            key;
        length = keys.length;
        if (_.keys(b).length !== length)
          return false;
        while (length--) {
          key = keys[length];
          if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack)))
            return false;
        }
      }
      aStack.pop();
      bStack.pop();
      return true;
    };
    _.isEqual = function(a, b) {
      return eq(a, b);
    };
    _.isEmpty = function(obj) {
      if (obj == null)
        return true;
      if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)))
        return obj.length === 0;
      return _.keys(obj).length === 0;
    };
    _.isElement = function(obj) {
      return !!(obj && obj.nodeType === 1);
    };
    _.isArray = nativeIsArray || function(obj) {
      return toString.call(obj) === '[object Array]';
    };
    _.isObject = function(obj) {
      var type = typeof obj;
      return type === 'function' || type === 'object' && !!obj;
    };
    _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
      _['is' + name] = function(obj) {
        return toString.call(obj) === '[object ' + name + ']';
      };
    });
    if (!_.isArguments(arguments)) {
      _.isArguments = function(obj) {
        return _.has(obj, 'callee');
      };
    }
    if (typeof/./ != 'function' && typeof Int8Array != 'object') {
      _.isFunction = function(obj) {
        return typeof obj == 'function' || false;
      };
    }
    _.isFinite = function(obj) {
      return isFinite(obj) && !isNaN(parseFloat(obj));
    };
    _.isNaN = function(obj) {
      return _.isNumber(obj) && obj !== +obj;
    };
    _.isBoolean = function(obj) {
      return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };
    _.isNull = function(obj) {
      return obj === null;
    };
    _.isUndefined = function(obj) {
      return obj === void 0;
    };
    _.has = function(obj, key) {
      return obj != null && hasOwnProperty.call(obj, key);
    };
    _.noConflict = function() {
      root._ = previousUnderscore;
      return this;
    };
    _.identity = function(value) {
      return value;
    };
    _.constant = function(value) {
      return function() {
        return value;
      };
    };
    _.noop = function() {};
    _.property = property;
    _.propertyOf = function(obj) {
      return obj == null ? function() {} : function(key) {
        return obj[key];
      };
    };
    _.matcher = _.matches = function(attrs) {
      attrs = _.extendOwn({}, attrs);
      return function(obj) {
        return _.isMatch(obj, attrs);
      };
    };
    _.times = function(n, iteratee, context) {
      var accum = Array(Math.max(0, n));
      iteratee = optimizeCb(iteratee, context, 1);
      for (var i = 0; i < n; i++)
        accum[i] = iteratee(i);
      return accum;
    };
    _.random = function(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    };
    _.now = Date.now || function() {
      return new Date().getTime();
    };
    var escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };
    var unescapeMap = _.invert(escapeMap);
    var createEscaper = function(map) {
      var escaper = function(match) {
        return map[match];
      };
      var source = '(?:' + _.keys(map).join('|') + ')';
      var testRegexp = RegExp(source);
      var replaceRegexp = RegExp(source, 'g');
      return function(string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
      };
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);
    _.result = function(object, property, fallback) {
      var value = object == null ? void 0 : object[property];
      if (value === void 0) {
        value = fallback;
      }
      return _.isFunction(value) ? value.call(object) : value;
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
    };
    _.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/;
    var escapes = {
      "'": "'",
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function(match) {
      return '\\' + escapes[match];
    };
    _.template = function(text, settings, oldSettings) {
      if (!settings && oldSettings)
        settings = oldSettings;
      settings = _.defaults({}, settings, _.templateSettings);
      var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
      var index = 0;
      var source = "__p+='";
      text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset).replace(escaper, escapeChar);
        index = offset + match.length;
        if (escape) {
          source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
        } else if (interpolate) {
          source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        } else if (evaluate) {
          source += "';\n" + evaluate + "\n__p+='";
        }
        return match;
      });
      source += "';\n";
      if (!settings.variable)
        source = 'with(obj||{}){\n' + source + '}\n';
      source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
      try {
        var render = new Function(settings.variable || 'obj', '_', source);
      } catch (e) {
        e.source = source;
        throw e;
      }
      var template = function(data) {
        return render.call(this, data, _);
      };
      var argument = settings.variable || 'obj';
      template.source = 'function(' + argument + '){\n' + source + '}';
      return template;
    };
    _.chain = function(obj) {
      var instance = _(obj);
      instance._chain = true;
      return instance;
    };
    var result = function(instance, obj) {
      return instance._chain ? _(obj).chain() : obj;
    };
    _.mixin = function(obj) {
      _.each(_.functions(obj), function(name) {
        var func = _[name] = obj[name];
        _.prototype[name] = function() {
          var args = [this._wrapped];
          push.apply(args, arguments);
          return result(this, func.apply(_, args));
        };
      });
    };
    _.mixin(_);
    _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        method.apply(obj, arguments);
        if ((name === 'shift' || name === 'splice') && obj.length === 0)
          delete obj[0];
        return result(this, obj);
      };
    });
    _.each(['concat', 'join', 'slice'], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        return result(this, method.apply(this._wrapped, arguments));
      };
    });
    _.prototype.value = function() {
      return this._wrapped;
    };
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() {
      return '' + this._wrapped;
    };
    if (typeof define === 'function' && define.amd) {
      define('underscore', [], function() {
        return _;
      });
    }
  }.call(this));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10", ["be"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('be');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("bf", ["1a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('1a');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b3", ["bf"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('bf'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c", ["b3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('b3')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register('36', ['c', 'd'], function (_export) {
   var _createClass, _classCallCheck, Utils, s_GET_PROTO, s_WALK_PROTO;

   return {
      setters: [function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }],
      execute: function () {
         /**
          * Provides static common utility methods.
          */
         'use strict';

         Utils = (function () {
            function Utils() {
               _classCallCheck(this, Utils);
            }

            // Private utility methods ------------------------------------------------------------------------------------------

            _createClass(Utils, null, [{
               key: 'isNullOrUndef',

               /**
                * Method for checking whether a variable is undefined or null.
                *
                * @param {*}  unknown - Variable to test.
                * @returns {boolean}
                */
               value: function isNullOrUndef(unknown) {
                  return unknown === null || typeof unknown === 'undefined';
               }

               /**
                * Method for checking if a given child is a type of the parent.
                *
                * @param {*}  childType - Child type to test.
                * @param {*}  parentType - Parent type to match against child prototype.
                * @returns {boolean}
                */
            }, {
               key: 'isTypeOf',
               value: function isTypeOf(childType, parentType) {
                  return childType === parentType ? true : s_WALK_PROTO(childType, parentType);
               }
            }]);

            return Utils;
         })();

         _export('default', Utils);

         s_GET_PROTO = Object.getPrototypeOf.bind(Object);

         /**
          * Walks to prototype chain of given child and parent types. If the child type eventually matches the parent type
          * the child is a type of the parent.
          *
          * @param {*}  childType - Child type to test.
          * @param {*}  parentType - Parent type to match against child prototype.
          * @returns {boolean}
          */

         s_WALK_PROTO = function s_WALK_PROTO(childType, parentType) {
            var proto = s_GET_PROTO(childType);

            for (; proto !== null; proto = s_GET_PROTO(proto)) {
               if (proto === parentType) {
                  return true;
               }
            }

            return false;
         };
      }
   };
});

$__System.register('c0', ['10', '36'], function (_export) {

   /**
    * Provides support for TyphonJS adding several methods to Backbone.
    *
    * @param {Backbone} Backbone - Backbone instance
    */
   'use strict';

   var _, Utils;

   _export('default', typhonExtend);

   function typhonExtend(Backbone) {
      Backbone.isCollection = function (collection) {
         return !Utils.isNullOrUndef(collection) && collection instanceof Backbone.Collection;
      };

      Backbone.isEventbus = function (eventbus) {
         return !Utils.isNullOrUndef(eventbus) && (eventbus instanceof Backbone.Events || eventbus instanceof Backbone.Events.constructor);
      };

      Backbone.isViewCtor = function (viewCtor) {
         return !Utils.isNullOrUndef(viewCtor) && viewCtor instanceof Backbone.View.constructor;
      };

      Backbone.isModel = function (model) {
         return !Utils.isNullOrUndef(model) && model instanceof Backbone.Model;
      };

      // Add ViewController support to Backbone.View ----------------------------------------------------------------------

      Backbone.View.prototype.close = function () {
         var remove = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

         if (!_.isBoolean(remove)) {
            throw new TypeError('close - remove is not a boolean.');
         }

         if (this.onBeforeClose) {
            // onBeforeClose may veto closing
            var closeable = this.onBeforeClose();
            closeable = _.isBoolean(closeable) ? closeable : true;

            if (!closeable) {
               return false;
            }
         }

         this.stopListening();
         this.unbind();
         this.undelegateEvents();

         if (remove) {
            this.$el.remove();
         } else {
            this.$el.empty();
         }

         if (this.onDestroy) {
            this.onDestroy();
         }

         return true;
      };

      // Empty function that gets called by ViewController.setCurrentView when the same view is requested to be shown;
      // useful for passing messages to views.
      Backbone.View.prototype.onContinue = function () {};

      // The following functions provide lifecycle events used in various group views like tab-view-group.js
      Backbone.View.prototype.onStart = function () {
         this.render();
      };

      Backbone.View.prototype.onResume = function () {
         this.render();
      };

      Backbone.View.prototype.onPause = function () {
         this.undelegateEvents();
      };
   }

   return {
      setters: [function (_2) {
         _ = _2['default'];
      }, function (_3) {
         Utils = _3['default'];
      }],
      execute: function () {}
   };
});

$__System.register('c1', ['37', '40', '49', '4c', '4a', '6d', '6e', '6f', 'bd', 'c0'], function (_export) {
  /**
   * ModuleRuntime.js (Parse) -- Provides the standard / default configuration that is the same as Backbone 1.2.3
   */

  'use strict';

  var TyphonEvents, Backbone, ParseCollection, History, Model, Router, View, parseSync, parseExtend, typhonExtend, options, backbone;
  return {
    setters: [function (_3) {
      TyphonEvents = _3['default'];
    }, function (_) {
      Backbone = _['default'];
    }, function (_2) {
      ParseCollection = _2['default'];
    }, function (_c) {
      History = _c['default'];
    }, function (_a) {
      Model = _a['default'];
    }, function (_d) {
      Router = _d['default'];
    }, function (_e) {
      View = _e['default'];
    }, function (_f) {
      parseSync = _f['default'];
    }, function (_bd) {
      parseExtend = _bd['default'];
    }, function (_c0) {
      typhonExtend = _c0['default'];
    }],
    execute: function () {
      options = {
        // Current version of the library. Keep in sync with Backbone version supported.
        VERSION: '1.2.3'
      };
      backbone = new Backbone(ParseCollection, TyphonEvents, History, Model, Router, View, parseSync, options);

      parseExtend(backbone);
      typhonExtend(backbone);

      _export('default', backbone);
    }
  };
});

$__System.register("9", ["c1"], function (_export) {
  "use strict";

  return {
    setters: [function (_c1) {
      var _exportObj = {};

      for (var _key in _c1) {
        if (_key !== "default") _exportObj[_key] = _c1[_key];
      }

      _exportObj["default"] = _c1["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

$__System.register('c2', ['9', 'a', 'b', 'c', 'd'], function (_export) {
  var Backbone, _get, _inherits, _createClass, _classCallCheck, Item;

  return {
    setters: [function (_) {
      Backbone = _['default'];
    }, function (_a) {
      _get = _a['default'];
    }, function (_b) {
      _inherits = _b['default'];
    }, function (_c) {
      _createClass = _c['default'];
    }, function (_d) {
      _classCallCheck = _d['default'];
    }],
    execute: function () {

      /**
       * Our basic todos Item model has `content`, `order`, and `done` attributes. When creating a new Item instance in
       * `App.js->createItem` the current Parse user is also associated with the item instance along with a
       * Parse.ACL (access control list) instance which ensures that the item is only accessible by that given user.
       */
      'use strict';

      Item = (function (_Backbone$Model) {
        _inherits(Item, _Backbone$Model);

        function Item() {
          _classCallCheck(this, Item);

          _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Item, [{
          key: 'initialize',

          /**
           * Ensure that each item created has `content`.
           */
          value: function initialize() {
            if (!this.get('content')) {
              this.set({ 'content': this.defaults.content });
            }
          }

          /**
           * Toggle the `done` state of this item.
           */
        }, {
          key: 'toggle',
          value: function toggle() {
            this.save({ done: !this.get('done') });
          }
        }, {
          key: 'className',

          /**
           * Returns the `className` which is the table stored in Parse.
           *
           * @returns {string}
           */
          get: function get() {
            return 'Item';
          }

          /**
           * Default attributes for the item.
           *
           * @returns {object}
           */
        }, {
          key: 'defaults',
          get: function get() {
            return { content: 'empty todo...', done: false };
          }
        }]);

        return Item;
      })(Backbone.Model);

      _export('default', Item);
    }
  };
});

$__System.register('3e', ['9', '60', 'a', 'b', 'c', 'd', 'c2'], function (_export) {
  var Backbone, _toConsumableArray, _get, _inherits, _createClass, _classCallCheck, Item, TodoList;

  return {
    setters: [function (_2) {
      Backbone = _2['default'];
    }, function (_) {
      _toConsumableArray = _['default'];
    }, function (_a) {
      _get = _a['default'];
    }, function (_b) {
      _inherits = _b['default'];
    }, function (_c) {
      _createClass = _c['default'];
    }, function (_d) {
      _classCallCheck = _d['default'];
    }, function (_c2) {
      Item = _c2['default'];
    }],
    execute: function () {

      /**
       * This module defines a `Backbone.Collection` which stores todos `Items` and provides utility methods to filter, sort,
       * and retrieve the next order number used to sort `Items`. Instead of exporting the class itself an instance of the
       * the class is exported. This allows the instance to be imported anywhere access to the collection is necessary.
       * Multiple views may access this instance, but in this demo only `ManageTodosView` displays data from the collection.
       *
       * Please note that the Parse.Query is generated in `App.js` during user login using the current user ID to retrieve
       * `Items` associated with the current user.
       */
      'use strict';

      TodoList = (function (_Backbone$Collection) {
        _inherits(TodoList, _Backbone$Collection);

        function TodoList() {
          _classCallCheck(this, TodoList);

          _get(Object.getPrototypeOf(TodoList.prototype), 'constructor', this).apply(this, arguments);
        }

        /**
         * Exports an instance of TodoList.
         */

        _createClass(TodoList, [{
          key: 'comparator',

          /**
           * Todos are sorted by their original insertion order.
           *
           * @param {Item} item - item model.
           * @returns {number}
           */
          value: function comparator(item) {
            return item.get('order');
          }

          /**
           * Filter down the list of all todos items that are finished.
           *
           * @returns {*}
           */
        }, {
          key: 'done',
          value: function done() {
            return this.filter(function (item) {
              return item.get('done');
            });
          }

          /**
           * We keep the todos Items in sequential order, despite being saved by unordered GUID in the database. This
           * generates the next order number for new items.
           *
           * @returns {number}
           */
        }, {
          key: 'nextOrder',
          value: function nextOrder() {
            if (!this.length) {
              return 1;
            }
            return this.last().get('order') + 1;
          }

          /**
           * Filter down the list to only todos items that are still not finished.
           *
           * @returns {*}
           */
        }, {
          key: 'remaining',
          value: function remaining() {
            return this.without.apply(this, _toConsumableArray(this.done()));
          }
        }, {
          key: 'model',

          /**
           * Reference to this collection's model.
           *
           * @returns {Item}
           */
          get: function get() {
            return Item;
          }
        }]);

        return TodoList;
      })(Backbone.Collection);

      _export('default', new TodoList());
    }
  };
});

$__System.register('c3', ['4', '7', '8', '9', '11', 'c', 'd', 'f', '3c', '3e'], function (_export) {
   var Parse, AppRouter, appState, Backbone, eventbus, _createClass, _classCallCheck, LogInView, ManageTodosView, todoList, App, s_INITIALIZE_ROUTE;

   return {
      setters: [function (_2) {
         Parse = _2['default'];
      }, function (_4) {
         AppRouter = _4['default'];
      }, function (_5) {
         appState = _5['default'];
      }, function (_) {
         Backbone = _['default'];
      }, function (_3) {
         eventbus = _3['default'];
      }, function (_c) {
         _createClass = _c['default'];
      }, function (_d) {
         _classCallCheck = _d['default'];
      }, function (_f) {
         LogInView = _f['default'];
      }, function (_c2) {
         ManageTodosView = _c2['default'];
      }, function (_e) {
         todoList = _e['default'];
      }],
      execute: function () {

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
         'use strict';

         App = (function () {
            /**
             * Wires up the main eventbus, invokes the private s_INITIALIZE_ROUTE function which creates `AppRouter` and sets up
             * a catch all handler then invokes `Backbone.history.start` with the root path and finally the constructor shows the
             * proper view based on whether there is a current logged in user.
             */

            function App() {
               _classCallCheck(this, App);

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
               var user = Parse.User.current();

               /**
                * Creates the initial displayed view based given if a user is currently logged into the app.
                *
                * @type {View} Stores the current active view.
                */
               this.currentView = user !== null ? this.showTodos(user.escape('username')) : new LogInView();
            }

            /**
             * A private function in the module scope, but outside of the class which initializes the `AppRouter`, adds a default
             * catch all handler, and start `Backbone.history`.
             */

            /**
             * Creates a new Item in the todos list. Note the addition of user which becomes a Parse pointer and an
             * Parse.ACL (access control list) which limits the item to be only accessible to the current user.
             *
             * @param {string}   content - The text for the item.
             */

            _createClass(App, [{
               key: 'createItem',
               value: function createItem(content) {
                  var user = Parse.User.current();

                  // Ensure that content is a string and there is a currently logged in user. If so then create a new
                  // `Item` entry in `todoList`.
                  if (typeof content === 'string' && user !== null) {
                     todoList.create({
                        content: content,
                        order: todoList.nextOrder(),
                        done: false,
                        user: user, // Current user is assigned as a pointer.
                        ACL: new Parse.ACL(user) // An ACL with the current user ensures that it is only accessible by this user.
                     });
                  }
               }

               /**
                * Invokes `showTodos` if there is a current user.
                */
            }, {
               key: 'logInUser',
               value: function logInUser() {
                  var user = Parse.User.current();
                  if (user !== null) {
                     this.showTodos(user.escape('username'));
                  }
               }

               /**
                * Logs out the user and shows the login view.
                */
            }, {
               key: 'logOutUser',
               value: function logOutUser() {
                  var _this = this;

                  // Close any current view and create the LogInView on success.
                  Parse.User.logOut().then(function () {
                     if (_this.currentView) {
                        _this.currentView.stopListening();
                        _this.currentView.off();
                        _this.currentView.undelegateEvents();

                        // Removes any child views.
                        if (_this.currentView.clearAll) {
                           _this.currentView.clearAll();
                        }

                        delete _this.currentView;
                     }
                     _this.currentView = new LogInView();
                     appState.set('filter', 'all');
                  });
               }

               /**
                * Sets the app state with the new filter type and updates `Backbone.History`.
                *
                * @param {string}   filter - Filter type to select.
                */
            }, {
               key: 'selectFilter',
               value: function selectFilter(filter) {
                  // When setting a value on a `Backbone.Model` if the value is the same as what is being set a change event will
                  // not be fired. In this case we set the new state with the `silent` option which won't fire any events then
                  // we manually trigger a change event so that any listeners respond regardless of the original state value.
                  appState.set({ filter: filter }, { silent: true });
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
            }, {
               key: 'showTodos',
               value: function showTodos(username) {
                  if (this.currentView) {
                     this.currentView.stopListening();
                     this.currentView.off();
                     this.currentView.undelegateEvents();
                     delete this.currentView;
                  }

                  Backbone.history.navigate(appState.get('filter'), { replace: true });

                  // Create a new ManageTodosView and pass in the username via optional parameters. In a Backbone.View additional
                  // options are available via `this.options.<key>`.
                  this.currentView = new ManageTodosView({ username: username });

                  // Set the `todoList` query which is necessary for Parse backed collections. The `equalTo` qualifier returns
                  // items that are associated with the current user.
                  todoList.query = new Parse.Query(todoList.model);
                  todoList.query.equalTo('user', Parse.User.current());

                  // Fetch all the todos items for this user. Any listeners for `todoList` reset events will be invoked.
                  todoList.fetch({ reset: true });

                  return this.currentView;
               }
            }]);

            return App;
         })();

         _export('default', App);

         s_INITIALIZE_ROUTE = function s_INITIALIZE_ROUTE() {
            new AppRouter();

            // Defines a catch all handler for all non-matched routes (anything that isn't `all`, `active` or `completed`). If
            // a user is logged in the catch all navigates to `all` triggering the route and replacing the invalid route in
            // the browser history.
            Backbone.history.handlers.push({
               route: /(.*)/,
               callback: function callback() {
                  if (Parse.User.current() !== null) {
                     Backbone.history.navigate('all', { trigger: true, replace: true });
                  } else {
                     Backbone.history.navigate('', { replace: true });
                  }
               }
            });

            // This regex matches the root path, so that it can be set in `Backbone.history.start`
            var root = undefined,
                urlMatch = undefined;

            // Construct the root path to the web app which is the path above the domain that may include `index.html` or
            // `indexSrc.html` depending on the runtime. For instance in WebStorm when creating a local server `index.html` is
            // included in the URL. Running on an actual web server often `index.html` is not put into the URL. When running the
            // app from source code transpiled in the browser `indexSrc.html` is always in the URL.
            if (typeof window.location !== 'undefined') {
               var windowLocation = window.location.toString();

               if (windowLocation.includes('.html')) {
                  urlMatch = windowLocation.match(/\/\/[\s\S]*\/([\s\S]*\/)([\s\S]*\.html)/i);
                  root = urlMatch && urlMatch.length >= 3 ? '' + urlMatch[1] + urlMatch[2] : undefined;
               } else {
                  urlMatch = windowLocation.match(/\/\/[\s\S]*\/([\s\S]*\/)/i);
                  root = urlMatch && urlMatch.length >= 2 ? urlMatch[1] : undefined;
               }
            }

            Backbone.history.start({ root: root });
         };
      }
   };
});

$__System.register('1', ['6', 'c3'], function (_export) {
  /**
   * Provides the main entry point to the web app first invoking `typhonjs-core-parse-init` which is a component mapped
   * via `package.json->jspm->dependencies`. `typhonjs-core-parse-init` will initialize the Parse API by
   * loading `production-config.js` which is mapped to `parseconfig` in `config-app-paths.js`. Please see `indexSrc.html`
   * and notice that `config-app-paths.js` is loaded after `config.js` is loaded.
   */

  // Uncomment to turn off eventbus logging.
  // import logger  from 'typhonjs-core-logging';
  // logger.setLogLevel('off');

  // Create and initialize the app
  'use strict';

  var App;
  return {
    setters: [function (_) {}, function (_c3) {
      App = _c3['default'];
    }],
    execute: function () {
      new App();
    }
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});