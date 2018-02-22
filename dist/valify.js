// [AIV]  Valify Build version: 4.2.2  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("valify", [], factory);
	else if(typeof exports === 'object')
		exports["valify"] = factory();
	else
		root["valify"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// [AIV]  beJS Build version: 2.0.0  
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["be"] = factory();else root["be"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 5);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      var Helpers = __webpack_require__(2);
      var AssertionError = __webpack_require__(7);
      var Interface = {};

      /**
       * Check if is array
       * @param object {Object} object
       * @returns {boolean}
       */
      Interface._isArray = function (object) {
        return Helpers.objectToString(object) === '[object Array]';
      };

      /**
       * Returns formatted arguments
       * @param args {Array}
       * @param pos {number}
       * @returns {string}
       */
      Interface._printArgs = function () {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var out = '';
        for (var i = 0; i < args.length; i++) {
          if (Interface._isArray(args[i])) {
            out += Interface._printArgs(args[i], i);
          } else {
            out += 'args[' + (i + pos) + ']: ' + args[i] + '\n';
          }
        }
        return out;
      };

      /**
       * Create interface all and any
       * @param obj {Object} object
       * @returns {Object}
       */
      Interface.create = function (obj) {
        /**
         * @interface all
         * @description
         * All checks must be satisfied, can accept array or arguments
         * @example
         * be.all.true(true, true, false) // false;
         *
         */
        obj.all = {};

        /**
         * @interface any
         * @description
         * Also just one check can be satisfied, can accept array or arguments
         * @example
         * be.any.true(true, true, false) // true;
         *
         */
        obj.any = {};

        /**
         * @interface not
         * @description
         * return "logical not" of called method, accept one argument
         * @example
         * be.not.true(true) // false;
         *
         */
        obj.not = {};

        /**
         * @interface err
         * @description
         * Throw an Error if assertions are not satisfied
         * @param msg {string} optional error message
         * @param callback {function} optional function callback
         * @returns {error|void}
         * @since 1.8.0
         * @example
         * be.err.true(false) // Error;
         * be.err('an error message').true(false) // Error;
         * be.err().all.true(false, 1) // Error;
         * be.err(callback).all.true(false, 1) // Error;
         * be.err('your message', callback).all.boolean(false, true) // callback invoked;
         *
         */
        obj.err = function () {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (typeof msg === 'function') {
            obj.err.__last_error_message = '';
            obj.err.__last_error_callback = msg;
          } else {
            obj.err.__last_error_message = msg;
            obj.err.__last_error_callback = callback;
          }
          return obj.err;
        };

        /**
         * Last error message
         * @type {string}
         * @private
         */
        obj.err.__last_error_message = '';

        var _loop = function _loop(i) {
          if (obj.hasOwnProperty(i) && typeof obj[i] === 'function' && typeof obj[i]._ofBe === 'undefined') {
            obj.not[i] = function () {
              for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
              }

              return !obj[i].apply(undefined, params);
            };

            if (typeof obj[i].multiple === 'undefined') {
              obj.all[i] = function () {
                for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  params[_key2] = arguments[_key2];
                }

                var args = params;

                if (Interface._isArray(args[0]) && args.length === 1) args = args[0];

                if (!args.length) return false;

                for (var a in args) {
                  if (args.hasOwnProperty(a) && !obj[i].call(undefined, args[a])) return false;
                }
                return true;
              };

              obj.any[i] = function () {
                for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  params[_key3] = arguments[_key3];
                }

                var args = params;
                if (Interface._isArray(args[0]) && args.length === 1) args = args[0];

                for (var a in args) {
                  if (args.hasOwnProperty(a) && obj[i].call(undefined, args[a])) return true;
                }
                return false;
              };
            }
          }

          // Build err
          if (typeof obj[i]._ofBe === 'undefined') if (_typeof(obj[i]) === 'object') {
            var _loop2 = function _loop2(j) {
              if (!obj.err[i]) obj.err[i] = {};
              if (obj[i].hasOwnProperty(j)) {
                obj.err[i][j] = function () {
                  for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    params[_key4] = arguments[_key4];
                  }

                  if (!obj[i][j].apply(undefined, params)) {
                    var errorMessage = obj.err.__last_error_message + '';
                    obj.err.__last_error_message = '';
                    //console.log(params.toString());
                    throw new AssertionError(errorMessage ? errorMessage : i + '.' + j + ' is not satisfied\n\n' + Interface._printArgs(params) + '\n');
                  } else if (typeof obj.err.__last_error_callback === 'function') {
                    obj.err.__last_error_callback();
                    obj.err.__last_error_callback = null;
                  }
                };
              }
            };

            for (var j in obj[i]) {
              _loop2(j);
            }
          } else {
            obj.err[i] = function () {
              for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                params[_key5] = arguments[_key5];
              }

              if (!obj[i].apply(undefined, params)) {
                var errorMessage = obj.err.__last_error_message + '';
                obj.err.__last_error_message = '';
                throw new AssertionError(errorMessage ? errorMessage : i + ' is not satisfied\n\n' + Interface._printArgs(params) + '\n');
              } else if (typeof obj.err.__last_error_callback === 'function') {
                obj.err.__last_error_callback();
                obj.err.__last_error_callback = null;
              }
            };
          }
        };

        for (var i in obj) {
          _loop(i);
        }

        return obj;
      };

      module.exports = Interface;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {

        /**
         * @fileOverview Types checks.
         * @module Types
         */

        var Helpers = __webpack_require__(2);
        var Interface = __webpack_require__(0);
        var Types = {};

        /**
         * Check [object ?] class
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name classOf
         * @param object {Mixed} object
         * @param className {string} class name
         * @returns {boolean}
         * @example
         * be.classOf(2, 'number') // true
         * be.classOf([1, 2, 3], 'array') // true
         * be.classOf({a: 1, b: 2}, 'object') // true
         * be.classOf({a: 1, b: 2}, 'array') // false
         * be.classOf(/hello/, 'regexp') // true
         * be.classOf(true, 'boolean') // true
         */
        Types.classOf = function (object, className) {
          return Helpers.objectToString(object).toLowerCase() === '[object ' + className + ']'.toLowerCase();
        };

        Types.classOf.multiple = false;

        /**
         * Check type of (alias of classOf)
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name of
         * @param object {Mixed} object
         * @param className {string} class name
         * @returns {boolean}
         * @since 1.11.0
         * @example
         * be.of(2, 'number') // true
         * be.of([1, 2, 3], 'array') // true
         * be.of({a: 1, b: 2}, 'object') // true
         * be.of({a: 1, b: 2}, 'array') // false
         * be.of(/hello/, 'regexp') // true
         * be.of(true, 'boolean') // true
         */
        Types.of = Types.classOf;

        Types.of.multiple = false;

        /**
         * Check if is valid boolean
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name boolean
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.boolean(false) // true
         * be.boolean('true') // false
         */
        Types.boolean = function (value) {
          return Types.classOf(value, 'boolean');
        };

        /**
         * Alias of `be.false`
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name booleanFalse
         * @alias false
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.3.1
         * @example
         * be.booleanFalse(false) // true
         * be.booleanFalse(true) // false
         */
        Types.booleanFalse = function (value) {
          return Types.false(value);
        };

        /**
         * Check if is false boolean type
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name false
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.booleanFalse(false) // true
         * be.booleanFalse(true) // false
         */
        Types.false = function (value) {
          return Types.boolean(value) && value === false;
        };

        /**
         * Alias of `be.true`
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name booleanTrue
         * @alias true
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.3.1
         * @example
         * be.booleanTrue(true) // true
         * be.booleanTrue(false) // false
         */
        Types.booleanTrue = function (value) {
          return Types.true(value);
        };

        /**
         * Check if is true boolean type
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name true
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.booleanTrue(true) // true
         * be.booleanTrue(false) // false
         */
        Types.true = function (value) {
          return Types.boolean(value) && value === true;
        };

        /**
         * Check if is valid number
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name number
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.number(1) // true
         * be.number(false) // false
         */
        Types.number = function (value) {
          return Types.classOf(value, 'number') && !isNaN(value);
        };

        /**
         * Check if is valid string
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name string
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.string('hello') // true
         * be.string(false) // false
         */
        Types.string = function (value) {
          return Types.classOf(value, 'string');
        };

        /**
         * Check if is undefined value
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name undefined
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.undefined(undefined) // true
         * be.undefined(null) // false
         */
        Types.undefined = function (value) {
          return Types.classOf(value, 'undefined');
        };

        /**
         * Check if is null
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name null
         * @alias null
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.null(null) // true
         * be.null(undefined) // false
         */
        Types['null'] = function (value) {
          return Types.classOf(value, 'null');
        };

        /**
         * Check if is null or undefined
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name nil
         * @alias nil
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.12.1
         * @example
         * be.nil(null) // true
         * be.nil(undefined) // true
         */
        Types.nil = function (value) {
          return Types.null(value) || Types.undefined(value);
        };

        /**
         * Check if is a object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.object({a: 1, b: 2}) // true
         * be.object([1, 2, 3]) // false
         */
        Types.object = function (value) {
          return Types.classOf(value, 'object') && !Types.array(value);
        };

        /**
         * Check if is an array
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name array
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.array([1, 2, 3]) // true
         * be.array({a: 1, b: 2}) // false
         */
        Types.array = function (value) {
          return Types.classOf(value, 'array');
        };

        /**
         * Check if is a JSON string
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name json
         * @param value {Mixed} json string
         * @returns {boolean}
         * @example
         * be.json('{"a": 1, "b": 2}') // true
         * be.json({a: 1, b: 2}) // false
         */
        Types.json = function (value) {
          try {
            return !!JSON.parse(value);
          } catch (e) {
            return false;
          }
        };

        /**
         * Check if is date object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name date
         * @param value {Mixed} date object
         * @returns {boolean}
         * @example
         * be.date(new Date()) // true
         * be.date('2017-12-25') // false
         */
        Types.date = function (value) {
          return Types.classOf(value, 'date');
        };

        /**
         * Check if is a function
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name function
         * @alias function
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.function(function(){return 1 + 2}) // true
         * be.function(new Date()) // false
         */
        Types['function'] = function (value) {
          return Types.classOf(value, 'function');
        };

        /**
         * Check if is a valid RegExp
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name regexp
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.regexp(/hello/) // true
         * be.regexp('hello') // false
         * be.regexp(new RegExp(/hello/)) // true
         */
        Types.regexp = function (value) {
          return Types.classOf(value, 'regexp');
        };

        /**
         * Check if both arguments are same type
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name sameType
         * @param value {Mixed} first
         * @param other {Mixed} second
         * @returns {boolean}
         * @example
         * be.sameType(1, 1) // true
         * be.sameType(1, '1') // false
         */
        Types.sameType = function (value, other) {
          return Helpers.objectToString(value) === Helpers.objectToString(other);
        };

        Types.sameType.multiple = false;

        /**
         * Check if is empty
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name empty
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.empty('') // true
         * be.empty(' ') // false
         * be.empty({}) // true
         * be.empty([]) // true
         */
        Types.empty = function (value) {
          if (Types.null(value) || Types.undefined(value)) return true;
          if (Types.number(value) || Types.function(value) || Types.boolean(value)) return false;

          if (Types.object(value) || Types.array(value)) {
            if (value.length > 0) return false;
            if (value.length === 0) return true;

            for (var key in value) {
              if (Object.prototype.hasOwnProperty.call(value, key)) return false;
            }
          }

          return !(Types.string(value) && value.length > 0);
        };

        /**
         * Check if a falsy value
         * https://developer.mozilla.org/it/docs/Glossary/Falsy
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name falsy
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.falsy(false) // true
         * be.falsy(null) // true
         * be.falsy() // true
         * be.falsy(0) // true
         * be.falsy(true) // false
         */
        Types.falsy = function (value) {
          return !value;
        };

        /**
         * Check if a truthy value
         * https://developer.mozilla.org/en-US/docs/Glossary/Truthy
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name truthy
         * @param value {Mixed}
         * @returns {boolean}
         * @example
         * be.truthy('hello') // true
         * be.truthy({}) // true
         * be.truthy([]) // true
         * be.truthy(2) // true
         * be.truthy(false) // false
         * be.truthy(null) // false
         * be.truthy(undefined) // false
         */
        Types.truthy = function (value) {
          return !Types.falsy(value);
        };

        /**
         * Check if is an error object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name error
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.error(new Error('my error')) // true
         * be.error({}) // false
         */
        Types.error = function (value) {
          return Types.classOf(value, 'error');
        };

        /**
         * Check if is an arguments
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name argument
         * @param value {Mixed} value
         * @returns {boolean}
         * @example
         * be.argument(arguments) // true
         * be.argument({}) // false
         */
        Types.argument = function (value) {
          return Types.classOf(value, 'arguments') || Types.object(value) && 'callee' in value;
        };

        /**
         * Check if is a primitive object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name primitive
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.3.1
         * @example
         * be.primitive(20) // true
         * be.primitive(new Number(20)) // false
         */
        Types.primitive = function (value) {
          return value !== Object(value);
        };

        /**
         * Check if is a primitive object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name promise
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.3.1
         * @example
         * var p = new Promise((resolve, reject) => {resolve()});
         * be.promise(p) // true
         */
        Types.promise = function (value) {
          return Types.classOf(value, 'promise');
        };

        /**
         * Check if is a buffer
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name buffer
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.3.1
         * @example
         * var b = new Buffer('hello');
         * be.buffer(b) // true
         */
        Types.buffer = function (value) {
          return Buffer && value instanceof Buffer;
        };

        /**
         * Check if is iterable
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name iterable
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.3.1
         * @example
         * be.iterable([1, 2, 3]) // true
         * be.iterable('hello') // true
         * be.iterable({a: 1}) // false
         */
        Types.iterable = function (value) {
          return Types.function(value[Symbol.iterator]);
        };

        /**
         * Check if is symbol
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name symbol
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.4.0
         * @example
         * be.symbol(Symbol('hello')) // true
         * be.symbol({a: 1}) // false
         */
        Types.symbol = function (value) {
          return !Types.undefined(Symbol) && Types.classOf(value, 'symbol');
        };

        /**
         * Check if is defined
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name defined
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.4.0
         * @example
         * var param = 'hello';
         * be.defined(param) // true
         * var param2;
         * be.defined(param2) // false
         */
        Types.defined = function (value) {
          return !Types.undefined(value);
        };

        /**
         * Check if is Set object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name set
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.set(new Set()) // true
         */
        Types.set = function (value) {
          return Types.classOf(value, 'set');
        };

        /**
         * Check if is WeakSet object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name weakSet
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.weakSet(new WeakSet()) // true
         */
        Types.weakSet = function (value) {
          return Types.classOf(value, 'weakset');
        };

        /**
         * Check if is Map object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name map
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.map(new Map()) // true
         */
        Types.map = function (value) {
          return Types.classOf(value, 'map');
        };

        /**
         * Check if is WeakMap object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name weakMap
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.weakMap(new WeakMap()) // true
         */
        Types.weakMap = function (value) {
          return Types.classOf(value, 'weakmap');
        };

        /**
         * Check if is Map Iterator object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name mapIterator
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.mapIterator(new Map().values()) // true
         */
        Types.mapIterator = function (value) {
          return Types.classOf(value, 'map iterator');
        };

        /**
         * Check if is Set Iterator object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name setIterator
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.setIterator(new Set().values()) // true
         */
        Types.setIterator = function (value) {
          return Types.classOf(value, 'set iterator');
        };

        /**
         * Check if is Int8Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name int8Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.int8Array(new Int8Array()) // true
         */
        Types.int8Array = function (value) {
          return Types.classOf(value, 'int8array');
        };

        /**
         * Check if is Uint8Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name uint8Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.uint8Array(new Uint8Array()) // true
         */
        Types.uint8Array = function (value) {
          return Types.classOf(value, 'uint8array');
        };

        /**
         * Check if is Uint8ClampedArray object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name uint8ClampedArray
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.uint8ClampedArray(new Uint8ClampedArray()) // true
         */
        Types.uint8ClampedArray = function (value) {
          return Types.classOf(value, 'uint8clampedarray');
        };

        /**
         * Check if is Int16Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name int16Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.int16Array(new Int16Array()) // true
         */
        Types.int16Array = function (value) {
          return Types.classOf(value, 'int16array');
        };

        /**
         * Check if is Uint16Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name uint16Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.uint16Array(new Uint16Array()) // true
         */
        Types.uint16Array = function (value) {
          return Types.classOf(value, 'uint16array');
        };

        /**
         * Check if is Int32Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name int32Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.int32Array(new Int32Array()) // true
         */
        Types.int32Array = function (value) {
          return Types.classOf(value, 'int32array');
        };

        /**
         * Check if is Uint32Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name uint32Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.uint32Array(new Uint32Array()) // true
         */
        Types.uint32Array = function (value) {
          return Types.classOf(value, 'uint32array');
        };

        /**
         * Check if is Float32Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name float32Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.float32Array(new Float32Array()) // true
         */
        Types.float32Array = function (value) {
          return Types.classOf(value, 'float32array');
        };

        /**
         * Check if is Float64Array object
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name float64Array
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.5.0
         * @example
         * be.float64Array(new Float64Array()) // true
         */
        Types.float64Array = function (value) {
          return Types.classOf(value, 'float64array');
        };

        /**
         * Check if is async Function
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name asyncFunction
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.6.3
         * @example
         * be.asyncFunction(async function test(){}) // true
         */
        Types.asyncFunction = function (value) {
          return Types.classOf(value, 'asyncfunction');
        };

        /**
         * Check if is GeneratorFunction
         *
         * **Interfaces**: `all`, `any`, `not`, `err`
         *
         * @function
         * @name generatorFunction
         * @param value {Mixed} value
         * @returns {boolean}
         * @since 1.10.0
         * @example
         * be.generatorFunction(function* test(){}) // true
         */
        Types.generatorFunction = function (value) {
          return Types.classOf(value, 'generatorfunction');
        };

        Types = Interface.create(Types);

        module.exports = Types;
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(9).Buffer);

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @module helpers
       */

      /**
       * Helpers class
       */

      var Helpers = {};

      /**
       * Convert object to string
       * @param object {*}
       * @returns {*}
       */
      Helpers.objectToString = function (object) {
        return Object.prototype.toString.call(object);
      };

      /**
       * Distance between the two given strings
       * @see https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
       * @param a {string}
       * @param b {string}
       * @returns {*}
       */
      Helpers.getEditDistance = function (a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;

        var matrix = [];

        // increment along the first column of each row
        var i = void 0;
        for (i = 0; i <= b.length; i++) {
          matrix[i] = [i];
        }

        // increment each column in the first row
        var j = void 0;
        for (j = 0; j <= a.length; j++) {
          matrix[0][j] = j;
        }

        // Fill in the rest of the matrix
        for (i = 1; i <= b.length; i++) {
          for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
              matrix[i][j] = matrix[i - 1][j - 1];
            } else {
              matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
              Math.min(matrix[i][j - 1] + 1, // insertion
              matrix[i - 1][j] + 1)); // deletion
            }
          }
        }

        return matrix[b.length][a.length];
      };

      /**
       * Comparators methods
       */
      Helpers.comparators = {
        '==': function _(a, b) {
          return Helpers.compareVersions(a, b) === 0;
        },
        '<': function _(a, b) {
          return Helpers.compareVersions(a, b) < 0;
        },
        '<=': function _(a, b) {
          return Helpers.compareVersions(a, b) <= 0;
        },
        '>': function _(a, b) {
          return Helpers.compareVersions(a, b) > 0;
        },
        '>=': function _(a, b) {
          return Helpers.compareVersions(a, b) >= 0;
        }
      };

      /**
       * Compare version number
       * @see https://stackoverflow.com/questions/6832596/how-to-compare-software-version-number-using-js-only-number
       * @param a {string} version number
       * @param b {string} version number
       * @returns {int}
       */
      Helpers.compareVersions = function (a, b) {
        var diff = void 0;
        var regExStrip0 = /(\.0+)+$/;
        var segmentsA = a.replace(regExStrip0, '').split('.');
        var segmentsB = b.replace(regExStrip0, '').split('.');
        var l = Math.min(segmentsA.length, segmentsB.length);

        for (var i = 0; i < l; i++) {
          diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
          if (diff) {
            return diff;
          }
        }
        return segmentsA.length - segmentsB.length;
      };

      /**
       * Get operator and version number
       * @param value {string} string like <=1.0.0
       * @returns {*}
       */
      Helpers.operatorVersion = function (value) {
        if (!value) return false;
        var match = value.match(/(==|<=?|>=?)(?:\s+)?(\d+((\.\d+)+)?)?/);
        if (!match) return false;
        return [match[1], match[2]];
      };

      /**
       * Create RegExp methods
       * @param obj {object} object
       * @param methods {object} RegExp object
       * @returns {*}
       */
      Helpers.createRegExpMethods = function (obj, methods) {
        var _loop = function _loop(i) {
          if (methods.hasOwnProperty(i)) obj[i] = function (value) {
            return methods[i].test(value);
          };
        };

        for (var i in methods) {
          _loop(i);
        }
        return obj;
      };

      module.exports = Helpers;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Numbers checks.
       * @module Numbers
       */

      var Types = __webpack_require__(1);
      var Interface = __webpack_require__(0);

      var Numbers = {};

      /**
       * Check if a number is integer
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name int
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.int(2) // true
       * be.int(1.5) // false
       * be.all.int(1, 4, 5) // true
       */
      Numbers.int = function (value) {
        return Types.number(value) && isFinite(value) && Math.floor(value) === value;
      };

      /**
       * Check if is float number
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name float
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.float(1.5) // true
       * be.float(1) // false
       * be.all.float(1.5, 4.2, 5) // false
       */
      Numbers.float = function (value) {
        return Types.number(value) && !Numbers.int(value);
      };

      /**
       * Check if is NaN
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name nan
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.nan('s') // true
       */
      Numbers.nan = function (value) {
        return isNaN(value);
      };

      /**
       * Check if is a even number
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name even
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.even(2) // true
       * be.even(3) // false
       */
      Numbers.even = function (value) {
        return Types.number(value) && value % 2 === 0;
      };

      /**
       * Check if is an odd number
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name odd
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.odd(3) // true
       * be.odd(4) // false
       */
      Numbers.odd = function (value) {
        return Types.number(value) && !Numbers.even(value);
      };

      /**
       * Check if is a positive number
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name positive
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.positive(2) // true
       * be.positive(-3) // false
       */
      Numbers.positive = function (value) {
        return Types.number(value) && (value > 0 || Numbers.positiveZero(value));
      };

      /**
       * Check if is a negative number
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name negative
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.negative(-2) // true
       * be.negative(2) // false
       */
      Numbers.negative = function (value) {
        return Types.number(value) && (value < 0 || Numbers.negativeZero(value));
      };

      /**
       * Check if is negative zero
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name negativeZero
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.negativeZero(-0) // true
       * be.negativeZero(0) // false
       */
      Numbers.negativeZero = function (value) {
        return Types.number(value) && value === 0 && 1 / value === Number.NEGATIVE_INFINITY;
      };

      /**
       * Check if is negative zero
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name positiveZero
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.positiveZero(+0) // true
       * be.positiveZero(0) // true
       */
      Numbers.positiveZero = function (value) {
        return Types.number(value) && value === 0 && 1 / value === Number.POSITIVE_INFINITY;
      };

      /**
       * Check if number is infinity
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name infinity
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.infinity(1.7976931348623157E+10308) // true
       */
      Numbers.infinity = function (value) {
        return Numbers.infinityPositive(value) || Numbers.infinityNegative(value);
      };

      /**
       * Check if number is infinity positive
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name infinityPositive
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.infinityPositive(1.7976931348623157E+10308) // true
       * be.infinityPositive(-1.7976931348623157E+10308) // false
       */
      Numbers.infinityPositive = function (value) {
        return value === Number.POSITIVE_INFINITY;
      };

      /**
       * Check if number is infinity positive
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name infinityNegative
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.infinityNegative(-1.7976931348623157E+10308) // true
       * be.infinityNegative(1.7976931348623157E+10308) // false
       */
      Numbers.infinityNegative = function (value) {
        return value === Number.NEGATIVE_INFINITY;
      };

      /**
       * Check if number is between min and max
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name between
       * @param num {number} number
       * @param min {number} number min
       * @param max {number} number max
       * @returns {boolean}
       * @example
       * be.between(4, 1, 10) // true
       */
      Numbers.between = function (num, min, max) {
        return Types.all.number(num, min, max) && num >= min && num <= max;
      };

      Numbers.between.multiple = false;

      /**
       * Checks if number is greater then an other
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name greater
       * @param value {number} value to check
       * @param num {number} number target
       * @returns {boolean}
       * @example
       * be.greater(10, 5) // true
       * be.greater(2, 8) // false
       */
      Numbers.greater = function (value, num) {
        return Types.all.number(value, num) && value > num;
      };

      Numbers.greater.multiple = false;

      /**
       * Checks if number is lesser then an other
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name lesser
       * @param value {number} value to check
       * @param num {number} number target
       * @returns {boolean}
       * @example
       * be.lesser(10, 5) // false
       * be.lesser(2, 8) // true
       */
      Numbers.lesser = function (value, num) {
        return Types.all.number(value, num) && value < num;
      };

      Numbers.lesser.multiple = false;

      /**
       * Checks if is a number as string or number type
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name numeric
       * @param value {number} number
       * @returns {boolean}
       * @example
       * be.numeric(100) // true
       * be.numeric('100') // true
       */
      Numbers.numeric = function (value) {
        return (Types.number(value) || Types.string(value)) && !isNaN(value - parseFloat(value));
      };

      Numbers = Interface.create(Numbers);

      module.exports = Numbers;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Various checks.
       * @module Mixed
       */

      var Helpers = __webpack_require__(2);
      var Types = __webpack_require__(1);
      var Interface = __webpack_require__(0);
      var Mixed = {};

      var regExp = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        hex: /^(?:0x)?[a-f0-9]+$/,
        ipv4: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        ipv6: /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/,
        base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        semVer: /^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i,
        fiscalCodeIT: /^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/,
        macAddress: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
        uuid1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        uuid3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        uuid4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        uuid5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        isrc: /^([A-Z]{2}-[0-9A-Z]{3}-\d{2}-\d{5}|[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5})$/,
        iswc: /^T-(\d{9}|\d{3}.\d{3}.\d{3})-[A-Za-z0-9]$/
      };

      Mixed = Helpers.createRegExpMethods(Mixed, regExp);

      /**
       * Check if is ISWC
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name iswc
       * @param value {string} ISWC code
       * @returns {boolean}
       * @since 1.7.0
       * @example
       * be.iswc('T-000000001-0') // true
       */

      /**
       * Check if is ISRC
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name isrc
       * @param value {string} ISRC code
       * @returns {boolean}
       * @since 1.7.0
       * @example
       * be.isrc('JMK401400212') // true
       */

      /**
       * Check if is UUID
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name uuid
       * @param value {string} UUID code
       * @returns {boolean}
       * @since 1.7.0
       * @example
       * be.uuid('9e3a0460-d72d-11e4-a631-c8e0eb141dab') // true
       */

      /**
       * Check if is UUID ver 1
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name uuid1
       * @param value {string} UUID code
       * @returns {boolean}
       * @since 1.7.0
       * @example
       * be.uuid1('9e3a0460-d72d-11e4-a631-c8e0eb141dab') // true
       */

      /**
       * Check if is UUID ver 3
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name uuid3
       * @param value {string} UUID code
       * @returns {boolean}
       * @since 1.7.0
       * @example
       * be.uuid3('2c1d43b8-e6d7-376e-af7f-d4bde997cc3f') // true
       */

      /**
       * Check if is UUID ver 4
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name uuid4
       * @param value {string} UUID code
       * @returns {boolean}
       * @since 1.7.0
       * @example
       * be.uuid4('366a77ba-d506-4a03-a730-318b8e6be8c5') // true
       */

      /**
       * Check if is UUID ver 5
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name uuid5
       * @param value {string} UUID code
       * @returns {boolean}
       * @since 1.7.0
       * @example
       * be.uuid5('39888f87-fb62-5988-a425-b2ea63f5b81e') // true
       */

      /**
       * Check if is valid email
       * https://emailregex.com/
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name email
       * @param value {string} email
       * @returns {boolean}
       * @example
       * be.email('fabio@rica.li') // true
       * be.not.email('fabiorica.li') // true
       */

      /**
       * Check if is a hexadecimal
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name hex
       * @param value {string} hex string
       * @returns {boolean}
       * @example
       * be.hex('fff') // true
       */

      /**
       * Check if is a valid IPv4
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name ipv4
       * @param value {string} ip string
       * @returns {boolean}
       * @example
       * be.ipv4('127.0.0.1') // true
       */

      /**
       * Check if is a valid IPv6
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name ipv6
       * @param value {string} ip string
       * @returns {boolean}
       * @example
       * be.ipv6('FF01:0:0:0:0:0:0:1') // true
       */

      /**
       * Check if is base64 encoded string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name base64
       * @param value {string} base64 string
       * @returns {boolean}
       * @example
       * be.base64('aGVsbG8=') // true
       */

      /**
       * Check if is a valid semver string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name semVer
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.semVer('1.0.0') // true
       */

      /**
       * Check if is an IT fiscal code
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name fiscalCodeIT
       * @param value {string} code string
       * @returns {boolean}
       * @example
       * be.fiscalCodeIT('OLEFBA97C64F158X') // true
       */

      /**
       * Check if is a valid MAC address
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name macAddress
       * @param value {string} MAC string
       * @returns {boolean}
       * @example
       * be.macAddress('3D:F2:C9:A6:B3:4F') // true
       */

      /**
       * Check if is a valid ip string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name ip
       * @param value {string} ip string
       * @returns {boolean}
       * @example
       * be.ip('127.0.0.1') // true
       */
      Mixed.ip = function (value) {
        return Mixed.ipv4(value) || Mixed.ipv6(value);
      };

      /**
       * Checks if equal
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name equal
       * @param value {Number|String|Boolean|RegExp|Array|Object} first
       * @param other {Number|String|Boolean|RegExp|Array|Object} second
       * @returns {boolean}
       * @example
       * be.equal('hello', 'hello') // true
       * be.equal('hello', 'hellow') // false
       * be.equal(true, 'true') // false
       * be.equal([1,2,3], [1,1,1]) // false
       * be.equal({a:1}, {a:1}) // true
       */
      Mixed.equal = function (value, other) {
        if (Types.all.number(value, other)) return value === other && 1 / value === 1 / other;else if (Types.all.string(value, other) || Types.all.regexp(value, other)) return value.toString() === other.toString();else if (Types.all.boolean(value, other)) return value === other;else if (Types.all.object(value, other) || Types.all.array(value, other)) {
          if (Object.keys(value).length !== Object.keys(other).length) return false;
          for (var prop in value) {
            if (value.hasOwnProperty(prop) && other.hasOwnProperty(prop)) {
              if (!Mixed.equal(value[prop], other[prop])) return false;
            } else return false;
          }
          return true;
        } else return false;
      };

      Mixed.equal.multiple = false;

      /**
       * Check if is a hexadecimal color
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name hexColor
       * @param value {string} hex color string
       * @returns {boolean}
       * @example
       * be.hexColor('#ff0000') // true
       */
      Mixed.hexColor = function (value) {
        try {
          value = value.replace('#', '');
          return Mixed.hex(value) && (value.length === 3 || value.length === 6);
        } catch (e) {
          return false;
        }
      };

      /**
       * Compare two version number
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name compareVersion
       * @param a {string} version a
       * @param operator {string} operator "==", "<", "<=", ">", ">="
       * @param b {string} version b
       * @param major {boolean} consider major only
       * @returns {boolean}
       * @since 1.6.0
       * @example
       * be.compareVersion('1.0.2', '==', '1.0.3') // false
       * //Consider major only
       * be.compareVersion('1.0.2', '==', '1.0.3', true) // true
       */
      Mixed.compareVersion = function (a, operator, b, major) {
        if (major) {
          a = a.split('.')[0];
          b = b.split('.')[0];
        }
        return Helpers.comparators[operator](a, b);
      };

      /**
       * Checks if string length or if a number value is greater or equal than a given number
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name max
       * @param value {string|number} value to check
       * @param num {number} number target
       * @returns {boolean}
       * @since 1.16.0
       * @example
       * be.max(10, 2) // false
       * be.max('hello', 5) // true
       */
      Mixed.max = function (value, num) {
        if (Types.string(value)) value = value.length;
        return Types.all.number(value, num) && value <= num;
      };

      Mixed.max.multiple = false;

      /**
       * Checks if string length or if a number value is lesser or equal than a given number
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name min
       * @param value {string|number} value to check
       * @param num {number} number target
       * @returns {boolean}
       * @since 1.16.0
       * @example
       * be.min(10, 2) // true
       * be.min('hello', 3) // true
       */
      Mixed.min = function (value, num) {
        if (Types.string(value)) value = value.length;
        return Types.all.number(value, num) && value >= num;
      };

      Mixed.min.multiple = false;

      Mixed = Interface.create(Mixed);

      module.exports = Mixed;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Created by Fabio on 17/06/2017.
       */

      module.exports = __webpack_require__(6);

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview
       * beJS has the following interfaces:
       *
       * - `all`, all checks must be satisfied
       * - `any`, also just one check can be satisfied
       * - `not`, return "logical not" of called method
       *
       * `all`, `any` can accept array or arguments
       *
       * You can access the methods directly from "be.boolean" or from the class eg "be.Types.boolean".
       * Also the classes supports `all`, `any`, `not`
       * @namespace be
       * @example
       * // call a method
       * be.boolean(true);
       *
       * // call interface "not"
       * be.not.boolean(1);
       *
       * // call interface "all" and passing arguments
       * be.all.boolean(true, false, true);
       *
       * // call interface "all" and passing array
       * be.all.boolean([true, false, true]);
       *
       * // call interface "any" and passing arguments
       * be.any.boolean(true, false, 1);
       *
       **/

      var Helpers = __webpack_require__(2);
      var Interface = __webpack_require__(0);
      var version = '2.0.0';

      /**
       * be class
       * @type {Object}
       * @ignore
       * @private
       */
      var be = {};

      /**
       * Helpers class
       * @type {Object}
       * @private
       * @ignore
       */
      be._helpers = Helpers;

      /**
       * Collection of checks
       * @type {Object}
       * @ignore
       * @private
       */
      var Checks = {
        Strings: __webpack_require__(8),
        Types: __webpack_require__(1),
        Numbers: __webpack_require__(3),
        Envs: __webpack_require__(14),
        Objects: __webpack_require__(17),
        Mixed: __webpack_require__(4),
        Arrays: __webpack_require__(18),
        Dates: __webpack_require__(19),
        Urls: __webpack_require__(20),
        Hashes: __webpack_require__(21),
        CreditCards: __webpack_require__(22),
        PostalCodes: __webpack_require__(23),
        DOM: __webpack_require__(24)
      };

      /**
       * Get version of framework
       * @function
       * @name be#getVersion
       * @memberOf be
       * @returns {string}
       */
      be.getVersion = function () {
        if (Checks.Envs.commonjsEnv()) return __webpack_require__(25).version;else return version;
      };

      be.getVersion._ofBe = true;

      /**
       * Set new/overwrite method
       * @function
       * @name be#setAssert
       * @memberOf be
       * @param name {string} assertion name
       * @param func {function} function
       * @since 1.4.1
       * @example
       * be.setAssert('myAssert', (a, b) => {
       *      return a === b;
       * });
       * be.myAssert(true, true) // true
       */
      be.setAssert = function (name, func) {
        be[name] = func;
      };

      be.setAssert._ofBe = true;

      /**
       * Add all methods to "be"
       */

      var _loop = function _loop(c) {
        if (Checks.hasOwnProperty(c)) {
          var _loop2 = function _loop2(f) {
            if (Checks[c].hasOwnProperty(f) && Checks.Types.function(Checks[c][f])) {
              be[f] = function () {
                for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                  params[_key] = arguments[_key];
                }

                return Checks[c][f].apply(null, params);
              };
            }
          };

          for (var f in Checks[c]) {
            _loop2(f);
          }
        }
      };

      for (var c in Checks) {
        _loop(c);
      }

      /**
       * @ignore
       * @type {be}
       */
      be = Interface.create(be);

      /**
       * After add checks class
       */
      for (var m in Checks) {
        if (Checks.hasOwnProperty(m)) {
          be[m] = Checks[m];
        }
      }

      module.exports = be;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var ExtendableError = function (_Error) {
        _inherits(ExtendableError, _Error);

        function ExtendableError() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          _classCallCheck(this, ExtendableError);

          // extending Error is weird and does not propagate `message`
          var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

          Object.defineProperty(_this, 'message', {
            configurable: true,
            enumerable: false,
            value: message,
            writable: true
          });

          Object.defineProperty(_this, 'name', {
            configurable: true,
            enumerable: false,
            value: _this.constructor.name,
            writable: true
          });

          if (Error.hasOwnProperty('captureStackTrace')) {
            Error.captureStackTrace(_this, _this.constructor);
            return _possibleConstructorReturn(_this);
          }

          Object.defineProperty(_this, 'stack', {
            configurable: true,
            enumerable: false,
            value: new Error(message).stack,
            writable: true
          });
          return _this;
        }

        return ExtendableError;
      }(Error);

      var AssertionError = function (_ExtendableError) {
        _inherits(AssertionError, _ExtendableError);

        function AssertionError() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error has occurred';

          _classCallCheck(this, AssertionError);

          return _possibleConstructorReturn(this, (AssertionError.__proto__ || Object.getPrototypeOf(AssertionError)).call(this, message));
        }

        return AssertionError;
      }(ExtendableError);

      module.exports = AssertionError;

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Strings checks.
       * @module Strings
       */

      var Helpers = __webpack_require__(2);
      var Interface = __webpack_require__(0);
      var Types = __webpack_require__(1);
      var Numbers = __webpack_require__(3);

      var Strings = {};

      /**
       * Check if string is in camelCase format
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name camelCase
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.camelCase('testTest') // true
       * be.camelCase('test_test') // false
       */
      Strings.camelCase = function (value) {
        return Types.string(value) && !Strings.upperCase(value) && Strings.alphanumeric(value) && Strings.spaces(value.replace(/([A-Z])/g, ' $1'));
      };

      /**
       * Check if string is in snake_case format
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name snakeCase
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.snakeCase('test_test') // true
       * be.snakeCase('testTest') // false
       */
      Strings.snakeCase = function (value) {
        return Strings.lowerCase(value) && /^[0-9a-z]*_[0-9a-z]/ig.test(value);
      };

      /**
       * Check if string is in kebab-case format
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name kebabCase
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.kebabCase('test-test') // true
       * be.kebabCase('testTest') // false
       */
      Strings.kebabCase = function (value) {
        return Strings.lowerCase(value) && /^[0-9a-z]*-[0-9a-z]/ig.test(value);
      };

      /**
       * Check similarity between two string
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name similarity
       * @param string1 {string} string
       * @param string2 {string} string target
       * @param threshold {int|float} 0 to 1
       * @returns {boolean}
       * @example
       * be.similarity('hello', 'hello', 1) // true
       * be.similarity('hello', 'hello world', 1) // false
       */
      Strings.similarity = function (string1, string2, threshold) {
        //if(!Types.string(string1) || !Types.string(string2)) return false;
        if (!Types.all.string(string1, string2)) return false;

        if (!Types.number(threshold) || threshold < 0 || threshold > 1) threshold = 1;

        var longer = string1;
        var shorter = string2;

        if (string1.length < string2.length) {
          longer = string2;
          shorter = string1;
        }
        var longerLength = longer.length;

        return (longerLength - Helpers.getEditDistance(longer, shorter)) / parseFloat(longerLength) >= threshold;
      };

      Strings.similarity.multiple = false;

      /**
       * Check if string contains a value
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name contains
       * @param string {string} string
       * @param value {string} string target
       * @returns {boolean}
       * @example
       * be.contains('hello', 'hello world') // true
       */
      Strings.contains = function (string, value) {
        if (!Types.string(string)) return false;
        return string.indexOf(value) > -1;
      };

      Strings.contains.multiple = false;

      /**
       * Check if string is lower case
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name lowerCase
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.lowerCase('hello') // true
       */
      Strings.lowerCase = function (value) {
        if (!Types.string(value)) return false;
        return value.toLowerCase() === value;
      };

      /**
       * Check if string is upper case
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name upperCase
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.upperCase('HELLO') // true
       */
      Strings.upperCase = function (value) {
        if (!Types.string(value)) return false;
        return value.toUpperCase() === value;
      };

      /**
       * Check if is a word
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name word
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.word('hello') // true
       * be.word('hello world') // false
       */
      Strings.word = function (value) {
        if (!Types.string(value)) return false;
        var trimmed = value.trim();
        return trimmed.length > 0 && trimmed.split(' ').length === 1;
      };

      /**
       * Check if string is capitalized
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name capitalized
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.capitalized('Hello World') // true
       * be.capitalized('hello world') // false
       */
      Strings.capitalized = function (value) {
        if (!Types.string(value)) return false;
        var trimmed = value.trim();
        if (trimmed.length === 0) return false;
        var words = value.trim().split(' ');
        for (var i in words) {
          var char = words[i].charAt(0);
          if (char !== char.toUpperCase()) return false;
        }
        return true;
      };

      /**
       * Check if string is empty
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name emptyString
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.emptyString('') // true
       */
      Strings.emptyString = function (value) {
        return Types.string(value) && value.length === 0;
      };

      /**
       * Check if is alphanumeric string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name alphanumeric
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.alphanumeric('hello123456') // true
       */
      Strings.alphanumeric = function (value) {
        return (/^[a-z0-9]+$/i.test(value) && Types.string(value)
        );
      };

      /**
       * Check if is alpha string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name alpha
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.alpha('hello123456') // false
       */
      Strings.alpha = function (value) {
        return (/^[a-z]+$/i.test(value) && Types.string(value)
        );
      };

      /**
       * Check if string start with a value
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name startWith
       * @param value {string} start string
       * @param string {string} string target
       * @param insensitive {boolean} case sensitive
       * @returns {boolean}
       * @example
       * be.startWith('hello', 'hello world') // true
       * be.startWith('hello', 'HELLO world', true) // false
       */
      Strings.startWith = function (value, string, insensitive) {
        if (!Types.any.string(value, string)) {
          value += '';
          string += '';
        }
        if (Types.truthy(insensitive)) {
          value = value.toLocaleLowerCase();
          string = string.toLocaleLowerCase();
        }
        return string.indexOf(value) === 0;
      };

      Strings.startWith.multiple = false;

      /**
       * Check if string end with a value
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name endWith
       * @param value {string} start string
       * @param string {string} string target
       * @param insensitive {boolean} case sensitive
       * @returns {boolean}
       * @since 1.4.1
       * @example
       * be.endWith('world', 'hello world') // true
       * be.endWith('world', 'hello WORLD', true) // false
       */
      Strings.endWith = function (value, string, insensitive) {
        if (!Types.any.string(value, string)) {
          value += '';
          string += '';
        }
        if (Types.truthy(insensitive)) {
          value = value.toLocaleLowerCase();
          string = string.toLocaleLowerCase();
        }
        var pos = string.length - value.length;
        return pos >= 0 && string.indexOf(value, pos) === pos;
      };

      Strings.endWith.multiple = false;

      /**
       * Check if a string is palindrome
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name palindrome
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.palindrome('A but tuba') // true
       */
      Strings.palindrome = function (value) {
        if (!Types.string(value)) return false;
        value = value.replace(/\s/g, '').toLowerCase();
        return value === value.split('').reverse().join('');
      };

      /**
       * Check if value is a single char
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name char
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.char('a') // true
       * be.char('ab') // false
       */
      Strings.char = function (value) {
        return Types.string(value) && value.length === 1;
      };

      /**
       * Check if string is a space
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name space
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.space(' ') // true
       * be.space('a') // false
       */
      Strings.space = function (value) {
        return Strings.char(value) && /\s/.test(value);
      };

      /**
       * Check if exists spaces in string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name spaces
       * @param value {string} string
       * @returns {boolean}
       * @example
       * be.spaces('hello world') // true
       * be.spaces('helloworld') // false
       */
      Strings.spaces = function (value) {
        return (/\s/.test(value)
        );
      };

      /**
       * Check string length range
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name stringRange
       * @param value {string} string
       * @param min=0 {number}
       * @param max {number}
       * @since 1.13.0
       * @returns {boolean}
       */
      Strings.stringRange = function (value) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var max = arguments[2];

        return Types.string(value) && Numbers.between(value.length, min, max || value.length);
      };

      Strings.stringRange.multiple = false;

      /**
       * Check string length
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name stringLength
       * @param value {string} string
       * @param num {number}
       * @since 1.13.0
       * @returns {boolean}
       */
      Strings.stringLength = function (value, num) {
        return Types.string(value) && value.length === num;
      };

      Strings = Interface.create(Strings);

      module.exports = Strings;

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (global) {
        /*!
        * The buffer module from node.js, for the browser.
        *
        * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
        * @license  MIT
        */
        /* eslint-disable no-proto */

        var base64 = __webpack_require__(11);
        var ieee754 = __webpack_require__(12);
        var isArray = __webpack_require__(13);

        exports.Buffer = Buffer;
        exports.SlowBuffer = SlowBuffer;
        exports.INSPECT_MAX_BYTES = 50;

        /**
         * If `Buffer.TYPED_ARRAY_SUPPORT`:
         *   === true    Use Uint8Array implementation (fastest)
         *   === false   Use Object implementation (most compatible, even IE6)
         *
         * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
         * Opera 11.6+, iOS 4.2+.
         *
         * Due to various browser bugs, sometimes the Object implementation will be used even
         * when the browser supports typed arrays.
         *
         * Note:
         *
         *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
         *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
         *
         *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
         *
         *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
         *     incorrect length in some situations.
        
         * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
         * get the Object implementation, which is slower but behaves correctly.
         */
        Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

        /*
         * Export kMaxLength after typed array support is determined.
         */
        exports.kMaxLength = kMaxLength();

        function typedArraySupport() {
          try {
            var arr = new Uint8Array(1);
            arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
                return 42;
              } };
            return arr.foo() === 42 && // typed array instances can be augmented
            typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
            arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
          } catch (e) {
            return false;
          }
        }

        function kMaxLength() {
          return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
        }

        function createBuffer(that, length) {
          if (kMaxLength() < length) {
            throw new RangeError('Invalid typed array length');
          }
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            that = new Uint8Array(length);
            that.__proto__ = Buffer.prototype;
          } else {
            // Fallback: Return an object instance of the Buffer class
            if (that === null) {
              that = new Buffer(length);
            }
            that.length = length;
          }

          return that;
        }

        /**
         * The Buffer constructor returns instances of `Uint8Array` that have their
         * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
         * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
         * and the `Uint8Array` methods. Square bracket notation works as expected -- it
         * returns a single octet.
         *
         * The `Uint8Array` prototype remains unmodified.
         */

        function Buffer(arg, encodingOrOffset, length) {
          if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
            return new Buffer(arg, encodingOrOffset, length);
          }

          // Common case.
          if (typeof arg === 'number') {
            if (typeof encodingOrOffset === 'string') {
              throw new Error('If encoding is specified then the first argument must be a string');
            }
            return allocUnsafe(this, arg);
          }
          return from(this, arg, encodingOrOffset, length);
        }

        Buffer.poolSize = 8192; // not used by this implementation

        // TODO: Legacy, not needed anymore. Remove in next major version.
        Buffer._augment = function (arr) {
          arr.__proto__ = Buffer.prototype;
          return arr;
        };

        function from(that, value, encodingOrOffset, length) {
          if (typeof value === 'number') {
            throw new TypeError('"value" argument must not be a number');
          }

          if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
            return fromArrayBuffer(that, value, encodingOrOffset, length);
          }

          if (typeof value === 'string') {
            return fromString(that, value, encodingOrOffset);
          }

          return fromObject(that, value);
        }

        /**
         * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
         * if value is a number.
         * Buffer.from(str[, encoding])
         * Buffer.from(array)
         * Buffer.from(buffer)
         * Buffer.from(arrayBuffer[, byteOffset[, length]])
         **/
        Buffer.from = function (value, encodingOrOffset, length) {
          return from(null, value, encodingOrOffset, length);
        };

        if (Buffer.TYPED_ARRAY_SUPPORT) {
          Buffer.prototype.__proto__ = Uint8Array.prototype;
          Buffer.__proto__ = Uint8Array;
          if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
            // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
            Object.defineProperty(Buffer, Symbol.species, {
              value: null,
              configurable: true
            });
          }
        }

        function assertSize(size) {
          if (typeof size !== 'number') {
            throw new TypeError('"size" argument must be a number');
          } else if (size < 0) {
            throw new RangeError('"size" argument must not be negative');
          }
        }

        function alloc(that, size, fill, encoding) {
          assertSize(size);
          if (size <= 0) {
            return createBuffer(that, size);
          }
          if (fill !== undefined) {
            // Only pay attention to encoding if it's a string. This
            // prevents accidentally sending in a number that would
            // be interpretted as a start offset.
            return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
          }
          return createBuffer(that, size);
        }

        /**
         * Creates a new filled Buffer instance.
         * alloc(size[, fill[, encoding]])
         **/
        Buffer.alloc = function (size, fill, encoding) {
          return alloc(null, size, fill, encoding);
        };

        function allocUnsafe(that, size) {
          assertSize(size);
          that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
          if (!Buffer.TYPED_ARRAY_SUPPORT) {
            for (var i = 0; i < size; ++i) {
              that[i] = 0;
            }
          }
          return that;
        }

        /**
         * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
         * */
        Buffer.allocUnsafe = function (size) {
          return allocUnsafe(null, size);
        };
        /**
         * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
         */
        Buffer.allocUnsafeSlow = function (size) {
          return allocUnsafe(null, size);
        };

        function fromString(that, string, encoding) {
          if (typeof encoding !== 'string' || encoding === '') {
            encoding = 'utf8';
          }

          if (!Buffer.isEncoding(encoding)) {
            throw new TypeError('"encoding" must be a valid string encoding');
          }

          var length = byteLength(string, encoding) | 0;
          that = createBuffer(that, length);

          var actual = that.write(string, encoding);

          if (actual !== length) {
            // Writing a hex string, for example, that contains invalid characters will
            // cause everything after the first invalid character to be ignored. (e.g.
            // 'abxxcd' will be treated as 'ab')
            that = that.slice(0, actual);
          }

          return that;
        }

        function fromArrayLike(that, array) {
          var length = array.length < 0 ? 0 : checked(array.length) | 0;
          that = createBuffer(that, length);
          for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255;
          }
          return that;
        }

        function fromArrayBuffer(that, array, byteOffset, length) {
          array.byteLength; // this throws if `array` is not a valid ArrayBuffer

          if (byteOffset < 0 || array.byteLength < byteOffset) {
            throw new RangeError('\'offset\' is out of bounds');
          }

          if (array.byteLength < byteOffset + (length || 0)) {
            throw new RangeError('\'length\' is out of bounds');
          }

          if (byteOffset === undefined && length === undefined) {
            array = new Uint8Array(array);
          } else if (length === undefined) {
            array = new Uint8Array(array, byteOffset);
          } else {
            array = new Uint8Array(array, byteOffset, length);
          }

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            that = array;
            that.__proto__ = Buffer.prototype;
          } else {
            // Fallback: Return an object instance of the Buffer class
            that = fromArrayLike(that, array);
          }
          return that;
        }

        function fromObject(that, obj) {
          if (Buffer.isBuffer(obj)) {
            var len = checked(obj.length) | 0;
            that = createBuffer(that, len);

            if (that.length === 0) {
              return that;
            }

            obj.copy(that, 0, 0, len);
            return that;
          }

          if (obj) {
            if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
              if (typeof obj.length !== 'number' || isnan(obj.length)) {
                return createBuffer(that, 0);
              }
              return fromArrayLike(that, obj);
            }

            if (obj.type === 'Buffer' && isArray(obj.data)) {
              return fromArrayLike(that, obj.data);
            }
          }

          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
        }

        function checked(length) {
          // Note: cannot use `length < kMaxLength()` here because that fails when
          // length is NaN (which is otherwise coerced to zero.)
          if (length >= kMaxLength()) {
            throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
          }
          return length | 0;
        }

        function SlowBuffer(length) {
          if (+length != length) {
            // eslint-disable-line eqeqeq
            length = 0;
          }
          return Buffer.alloc(+length);
        }

        Buffer.isBuffer = function isBuffer(b) {
          return !!(b != null && b._isBuffer);
        };

        Buffer.compare = function compare(a, b) {
          if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
            throw new TypeError('Arguments must be Buffers');
          }

          if (a === b) return 0;

          var x = a.length;
          var y = b.length;

          for (var i = 0, len = Math.min(x, y); i < len; ++i) {
            if (a[i] !== b[i]) {
              x = a[i];
              y = b[i];
              break;
            }
          }

          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };

        Buffer.isEncoding = function isEncoding(encoding) {
          switch (String(encoding).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return true;
            default:
              return false;
          }
        };

        Buffer.concat = function concat(list, length) {
          if (!isArray(list)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }

          if (list.length === 0) {
            return Buffer.alloc(0);
          }

          var i;
          if (length === undefined) {
            length = 0;
            for (i = 0; i < list.length; ++i) {
              length += list[i].length;
            }
          }

          var buffer = Buffer.allocUnsafe(length);
          var pos = 0;
          for (i = 0; i < list.length; ++i) {
            var buf = list[i];
            if (!Buffer.isBuffer(buf)) {
              throw new TypeError('"list" argument must be an Array of Buffers');
            }
            buf.copy(buffer, pos);
            pos += buf.length;
          }
          return buffer;
        };

        function byteLength(string, encoding) {
          if (Buffer.isBuffer(string)) {
            return string.length;
          }
          if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
            return string.byteLength;
          }
          if (typeof string !== 'string') {
            string = '' + string;
          }

          var len = string.length;
          if (len === 0) return 0;

          // Use a for loop to avoid recursion
          var loweredCase = false;
          for (;;) {
            switch (encoding) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return len;
              case 'utf8':
              case 'utf-8':
              case undefined:
                return utf8ToBytes(string).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return len * 2;
              case 'hex':
                return len >>> 1;
              case 'base64':
                return base64ToBytes(string).length;
              default:
                if (loweredCase) return utf8ToBytes(string).length; // assume utf8
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        }
        Buffer.byteLength = byteLength;

        function slowToString(encoding, start, end) {
          var loweredCase = false;

          // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
          // property of a typed array.

          // This behaves neither like String nor Uint8Array in that we set start/end
          // to their upper/lower bounds if the value passed is out of range.
          // undefined is handled specially as per ECMA-262 6th Edition,
          // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
          if (start === undefined || start < 0) {
            start = 0;
          }
          // Return early if start > this.length. Done here to prevent potential uint32
          // coercion fail below.
          if (start > this.length) {
            return '';
          }

          if (end === undefined || end > this.length) {
            end = this.length;
          }

          if (end <= 0) {
            return '';
          }

          // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
          end >>>= 0;
          start >>>= 0;

          if (end <= start) {
            return '';
          }

          if (!encoding) encoding = 'utf8';

          while (true) {
            switch (encoding) {
              case 'hex':
                return hexSlice(this, start, end);

              case 'utf8':
              case 'utf-8':
                return utf8Slice(this, start, end);

              case 'ascii':
                return asciiSlice(this, start, end);

              case 'latin1':
              case 'binary':
                return latin1Slice(this, start, end);

              case 'base64':
                return base64Slice(this, start, end);

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return utf16leSlice(this, start, end);

              default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
            }
          }
        }

        // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
        // Buffer instances.
        Buffer.prototype._isBuffer = true;

        function swap(b, n, m) {
          var i = b[n];
          b[n] = b[m];
          b[m] = i;
        }

        Buffer.prototype.swap16 = function swap16() {
          var len = this.length;
          if (len % 2 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          }
          for (var i = 0; i < len; i += 2) {
            swap(this, i, i + 1);
          }
          return this;
        };

        Buffer.prototype.swap32 = function swap32() {
          var len = this.length;
          if (len % 4 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          }
          for (var i = 0; i < len; i += 4) {
            swap(this, i, i + 3);
            swap(this, i + 1, i + 2);
          }
          return this;
        };

        Buffer.prototype.swap64 = function swap64() {
          var len = this.length;
          if (len % 8 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          }
          for (var i = 0; i < len; i += 8) {
            swap(this, i, i + 7);
            swap(this, i + 1, i + 6);
            swap(this, i + 2, i + 5);
            swap(this, i + 3, i + 4);
          }
          return this;
        };

        Buffer.prototype.toString = function toString() {
          var length = this.length | 0;
          if (length === 0) return '';
          if (arguments.length === 0) return utf8Slice(this, 0, length);
          return slowToString.apply(this, arguments);
        };

        Buffer.prototype.equals = function equals(b) {
          if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
          if (this === b) return true;
          return Buffer.compare(this, b) === 0;
        };

        Buffer.prototype.inspect = function inspect() {
          var str = '';
          var max = exports.INSPECT_MAX_BYTES;
          if (this.length > 0) {
            str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
            if (this.length > max) str += ' ... ';
          }
          return '<Buffer ' + str + '>';
        };

        Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
          if (!Buffer.isBuffer(target)) {
            throw new TypeError('Argument must be a Buffer');
          }

          if (start === undefined) {
            start = 0;
          }
          if (end === undefined) {
            end = target ? target.length : 0;
          }
          if (thisStart === undefined) {
            thisStart = 0;
          }
          if (thisEnd === undefined) {
            thisEnd = this.length;
          }

          if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
            throw new RangeError('out of range index');
          }

          if (thisStart >= thisEnd && start >= end) {
            return 0;
          }
          if (thisStart >= thisEnd) {
            return -1;
          }
          if (start >= end) {
            return 1;
          }

          start >>>= 0;
          end >>>= 0;
          thisStart >>>= 0;
          thisEnd >>>= 0;

          if (this === target) return 0;

          var x = thisEnd - thisStart;
          var y = end - start;
          var len = Math.min(x, y);

          var thisCopy = this.slice(thisStart, thisEnd);
          var targetCopy = target.slice(start, end);

          for (var i = 0; i < len; ++i) {
            if (thisCopy[i] !== targetCopy[i]) {
              x = thisCopy[i];
              y = targetCopy[i];
              break;
            }
          }

          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };

        // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
        // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
        //
        // Arguments:
        // - buffer - a Buffer to search
        // - val - a string, Buffer, or number
        // - byteOffset - an index into `buffer`; will be clamped to an int32
        // - encoding - an optional encoding, relevant is val is a string
        // - dir - true for indexOf, false for lastIndexOf
        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
          // Empty buffer means no match
          if (buffer.length === 0) return -1;

          // Normalize byteOffset
          if (typeof byteOffset === 'string') {
            encoding = byteOffset;
            byteOffset = 0;
          } else if (byteOffset > 0x7fffffff) {
            byteOffset = 0x7fffffff;
          } else if (byteOffset < -0x80000000) {
            byteOffset = -0x80000000;
          }
          byteOffset = +byteOffset; // Coerce to Number.
          if (isNaN(byteOffset)) {
            // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
            byteOffset = dir ? 0 : buffer.length - 1;
          }

          // Normalize byteOffset: negative offsets start from the end of the buffer
          if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
          if (byteOffset >= buffer.length) {
            if (dir) return -1;else byteOffset = buffer.length - 1;
          } else if (byteOffset < 0) {
            if (dir) byteOffset = 0;else return -1;
          }

          // Normalize val
          if (typeof val === 'string') {
            val = Buffer.from(val, encoding);
          }

          // Finally, search either indexOf (if dir is true) or lastIndexOf
          if (Buffer.isBuffer(val)) {
            // Special case: looking for empty string/buffer always fails
            if (val.length === 0) {
              return -1;
            }
            return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
          } else if (typeof val === 'number') {
            val = val & 0xFF; // Search for a byte value [0-255]
            if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
              if (dir) {
                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
              } else {
                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
              }
            }
            return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
          }

          throw new TypeError('val must be string, number or Buffer');
        }

        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
          var indexSize = 1;
          var arrLength = arr.length;
          var valLength = val.length;

          if (encoding !== undefined) {
            encoding = String(encoding).toLowerCase();
            if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
              if (arr.length < 2 || val.length < 2) {
                return -1;
              }
              indexSize = 2;
              arrLength /= 2;
              valLength /= 2;
              byteOffset /= 2;
            }
          }

          function read(buf, i) {
            if (indexSize === 1) {
              return buf[i];
            } else {
              return buf.readUInt16BE(i * indexSize);
            }
          }

          var i;
          if (dir) {
            var foundIndex = -1;
            for (i = byteOffset; i < arrLength; i++) {
              if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) foundIndex = i;
                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
              } else {
                if (foundIndex !== -1) i -= i - foundIndex;
                foundIndex = -1;
              }
            }
          } else {
            if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
            for (i = byteOffset; i >= 0; i--) {
              var found = true;
              for (var j = 0; j < valLength; j++) {
                if (read(arr, i + j) !== read(val, j)) {
                  found = false;
                  break;
                }
              }
              if (found) return i;
            }
          }

          return -1;
        }

        Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
          return this.indexOf(val, byteOffset, encoding) !== -1;
        };

        Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
        };

        Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
        };

        function hexWrite(buf, string, offset, length) {
          offset = Number(offset) || 0;
          var remaining = buf.length - offset;
          if (!length) {
            length = remaining;
          } else {
            length = Number(length);
            if (length > remaining) {
              length = remaining;
            }
          }

          // must be an even number of digits
          var strLen = string.length;
          if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

          if (length > strLen / 2) {
            length = strLen / 2;
          }
          for (var i = 0; i < length; ++i) {
            var parsed = parseInt(string.substr(i * 2, 2), 16);
            if (isNaN(parsed)) return i;
            buf[offset + i] = parsed;
          }
          return i;
        }

        function utf8Write(buf, string, offset, length) {
          return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
        }

        function asciiWrite(buf, string, offset, length) {
          return blitBuffer(asciiToBytes(string), buf, offset, length);
        }

        function latin1Write(buf, string, offset, length) {
          return asciiWrite(buf, string, offset, length);
        }

        function base64Write(buf, string, offset, length) {
          return blitBuffer(base64ToBytes(string), buf, offset, length);
        }

        function ucs2Write(buf, string, offset, length) {
          return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
        }

        Buffer.prototype.write = function write(string, offset, length, encoding) {
          // Buffer#write(string)
          if (offset === undefined) {
            encoding = 'utf8';
            length = this.length;
            offset = 0;
            // Buffer#write(string, encoding)
          } else if (length === undefined && typeof offset === 'string') {
            encoding = offset;
            length = this.length;
            offset = 0;
            // Buffer#write(string, offset[, length][, encoding])
          } else if (isFinite(offset)) {
            offset = offset | 0;
            if (isFinite(length)) {
              length = length | 0;
              if (encoding === undefined) encoding = 'utf8';
            } else {
              encoding = length;
              length = undefined;
            }
            // legacy write(string, encoding, offset, length) - remove in v0.13
          } else {
            throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          }

          var remaining = this.length - offset;
          if (length === undefined || length > remaining) length = remaining;

          if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
            throw new RangeError('Attempt to write outside buffer bounds');
          }

          if (!encoding) encoding = 'utf8';

          var loweredCase = false;
          for (;;) {
            switch (encoding) {
              case 'hex':
                return hexWrite(this, string, offset, length);

              case 'utf8':
              case 'utf-8':
                return utf8Write(this, string, offset, length);

              case 'ascii':
                return asciiWrite(this, string, offset, length);

              case 'latin1':
              case 'binary':
                return latin1Write(this, string, offset, length);

              case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ucs2Write(this, string, offset, length);

              default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        };

        Buffer.prototype.toJSON = function toJSON() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };

        function base64Slice(buf, start, end) {
          if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf);
          } else {
            return base64.fromByteArray(buf.slice(start, end));
          }
        }

        function utf8Slice(buf, start, end) {
          end = Math.min(buf.length, end);
          var res = [];

          var i = start;
          while (i < end) {
            var firstByte = buf[i];
            var codePoint = null;
            var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

            if (i + bytesPerSequence <= end) {
              var secondByte, thirdByte, fourthByte, tempCodePoint;

              switch (bytesPerSequence) {
                case 1:
                  if (firstByte < 0x80) {
                    codePoint = firstByte;
                  }
                  break;
                case 2:
                  secondByte = buf[i + 1];
                  if ((secondByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                    if (tempCodePoint > 0x7F) {
                      codePoint = tempCodePoint;
                    }
                  }
                  break;
                case 3:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];
                  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                    if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                      codePoint = tempCodePoint;
                    }
                  }
                  break;
                case 4:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];
                  fourthByte = buf[i + 3];
                  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                    if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                      codePoint = tempCodePoint;
                    }
                  }
              }
            }

            if (codePoint === null) {
              // we did not generate a valid codePoint so insert a
              // replacement char (U+FFFD) and advance only 1 byte
              codePoint = 0xFFFD;
              bytesPerSequence = 1;
            } else if (codePoint > 0xFFFF) {
              // encode to utf16 (surrogate pair dance)
              codePoint -= 0x10000;
              res.push(codePoint >>> 10 & 0x3FF | 0xD800);
              codePoint = 0xDC00 | codePoint & 0x3FF;
            }

            res.push(codePoint);
            i += bytesPerSequence;
          }

          return decodeCodePointsArray(res);
        }

        // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety
        var MAX_ARGUMENTS_LENGTH = 0x1000;

        function decodeCodePointsArray(codePoints) {
          var len = codePoints.length;
          if (len <= MAX_ARGUMENTS_LENGTH) {
            return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
          }

          // Decode in chunks to avoid "call stack size exceeded".
          var res = '';
          var i = 0;
          while (i < len) {
            res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
          }
          return res;
        }

        function asciiSlice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);

          for (var i = start; i < end; ++i) {
            ret += String.fromCharCode(buf[i] & 0x7F);
          }
          return ret;
        }

        function latin1Slice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);

          for (var i = start; i < end; ++i) {
            ret += String.fromCharCode(buf[i]);
          }
          return ret;
        }

        function hexSlice(buf, start, end) {
          var len = buf.length;

          if (!start || start < 0) start = 0;
          if (!end || end < 0 || end > len) end = len;

          var out = '';
          for (var i = start; i < end; ++i) {
            out += toHex(buf[i]);
          }
          return out;
        }

        function utf16leSlice(buf, start, end) {
          var bytes = buf.slice(start, end);
          var res = '';
          for (var i = 0; i < bytes.length; i += 2) {
            res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
          }
          return res;
        }

        Buffer.prototype.slice = function slice(start, end) {
          var len = this.length;
          start = ~~start;
          end = end === undefined ? len : ~~end;

          if (start < 0) {
            start += len;
            if (start < 0) start = 0;
          } else if (start > len) {
            start = len;
          }

          if (end < 0) {
            end += len;
            if (end < 0) end = 0;
          } else if (end > len) {
            end = len;
          }

          if (end < start) end = start;

          var newBuf;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            newBuf = this.subarray(start, end);
            newBuf.__proto__ = Buffer.prototype;
          } else {
            var sliceLen = end - start;
            newBuf = new Buffer(sliceLen, undefined);
            for (var i = 0; i < sliceLen; ++i) {
              newBuf[i] = this[i + start];
            }
          }

          return newBuf;
        };

        /*
         * Need to make sure that buffer isn't trying to write out of bounds.
         */
        function checkOffset(offset, ext, length) {
          if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
          if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
        }

        Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);

          var val = this[offset];
          var mul = 1;
          var i = 0;
          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }

          return val;
        };

        Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
          }

          var val = this[offset + --byteLength];
          var mul = 1;
          while (byteLength > 0 && (mul *= 0x100)) {
            val += this[offset + --byteLength] * mul;
          }

          return val;
        };

        Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 1, this.length);
          return this[offset];
        };

        Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] | this[offset + 1] << 8;
        };

        Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] << 8 | this[offset + 1];
        };

        Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
        };

        Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        };

        Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);

          var val = this[offset];
          var mul = 1;
          var i = 0;
          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }
          mul *= 0x80;

          if (val >= mul) val -= Math.pow(2, 8 * byteLength);

          return val;
        };

        Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);

          var i = byteLength;
          var mul = 1;
          var val = this[offset + --i];
          while (i > 0 && (mul *= 0x100)) {
            val += this[offset + --i] * mul;
          }
          mul *= 0x80;

          if (val >= mul) val -= Math.pow(2, 8 * byteLength);

          return val;
        };

        Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 1, this.length);
          if (!(this[offset] & 0x80)) return this[offset];
          return (0xff - this[offset] + 1) * -1;
        };

        Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          var val = this[offset] | this[offset + 1] << 8;
          return val & 0x8000 ? val | 0xFFFF0000 : val;
        };

        Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          var val = this[offset + 1] | this[offset] << 8;
          return val & 0x8000 ? val | 0xFFFF0000 : val;
        };

        Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        };

        Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        };

        Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, true, 23, 4);
        };

        Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, false, 23, 4);
        };

        Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, true, 52, 8);
        };

        Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, false, 52, 8);
        };

        function checkInt(buf, value, offset, ext, max, min) {
          if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
          if (offset + ext > buf.length) throw new RangeError('Index out of range');
        }

        Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) {
            var maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
          }

          var mul = 1;
          var i = 0;
          this[offset] = value & 0xFF;
          while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = value / mul & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) {
            var maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
          }

          var i = byteLength - 1;
          var mul = 1;
          this[offset + i] = value & 0xFF;
          while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = value / mul & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
          if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
          this[offset] = value & 0xff;
          return offset + 1;
        };

        function objectWriteUInt16(buf, value, offset, littleEndian) {
          if (value < 0) value = 0xffff + value + 1;
          for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
            buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
          }
        }

        Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
          } else {
            objectWriteUInt16(this, value, offset, true);
          }
          return offset + 2;
        };

        Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 8;
            this[offset + 1] = value & 0xff;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }
          return offset + 2;
        };

        function objectWriteUInt32(buf, value, offset, littleEndian) {
          if (value < 0) value = 0xffffffff + value + 1;
          for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
            buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
          }
        }

        Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset + 3] = value >>> 24;
            this[offset + 2] = value >>> 16;
            this[offset + 1] = value >>> 8;
            this[offset] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, true);
          }
          return offset + 4;
        };

        Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }
          return offset + 4;
        };

        Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);

            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }

          var i = 0;
          var mul = 1;
          var sub = 0;
          this[offset] = value & 0xFF;
          while (++i < byteLength && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
              sub = 1;
            }
            this[offset + i] = (value / mul >> 0) - sub & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);

            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }

          var i = byteLength - 1;
          var mul = 1;
          var sub = 0;
          this[offset + i] = value & 0xFF;
          while (--i >= 0 && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
              sub = 1;
            }
            this[offset + i] = (value / mul >> 0) - sub & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
          if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
          if (value < 0) value = 0xff + value + 1;
          this[offset] = value & 0xff;
          return offset + 1;
        };

        Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
          } else {
            objectWriteUInt16(this, value, offset, true);
          }
          return offset + 2;
        };

        Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 8;
            this[offset + 1] = value & 0xff;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }
          return offset + 2;
        };

        Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
            this[offset + 2] = value >>> 16;
            this[offset + 3] = value >>> 24;
          } else {
            objectWriteUInt32(this, value, offset, true);
          }
          return offset + 4;
        };

        Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
          if (value < 0) value = 0xffffffff + value + 1;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }
          return offset + 4;
        };

        function checkIEEE754(buf, value, offset, ext, max, min) {
          if (offset + ext > buf.length) throw new RangeError('Index out of range');
          if (offset < 0) throw new RangeError('Index out of range');
        }

        function writeFloat(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
          }
          ieee754.write(buf, value, offset, littleEndian, 23, 4);
          return offset + 4;
        }

        Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
          return writeFloat(this, value, offset, true, noAssert);
        };

        Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
          return writeFloat(this, value, offset, false, noAssert);
        };

        function writeDouble(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
          }
          ieee754.write(buf, value, offset, littleEndian, 52, 8);
          return offset + 8;
        }

        Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
          return writeDouble(this, value, offset, true, noAssert);
        };

        Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
          return writeDouble(this, value, offset, false, noAssert);
        };

        // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
        Buffer.prototype.copy = function copy(target, targetStart, start, end) {
          if (!start) start = 0;
          if (!end && end !== 0) end = this.length;
          if (targetStart >= target.length) targetStart = target.length;
          if (!targetStart) targetStart = 0;
          if (end > 0 && end < start) end = start;

          // Copy 0 bytes; we're done
          if (end === start) return 0;
          if (target.length === 0 || this.length === 0) return 0;

          // Fatal error conditions
          if (targetStart < 0) {
            throw new RangeError('targetStart out of bounds');
          }
          if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
          if (end < 0) throw new RangeError('sourceEnd out of bounds');

          // Are we oob?
          if (end > this.length) end = this.length;
          if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start;
          }

          var len = end - start;
          var i;

          if (this === target && start < targetStart && targetStart < end) {
            // descending copy from end
            for (i = len - 1; i >= 0; --i) {
              target[i + targetStart] = this[i + start];
            }
          } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
            // ascending copy from start
            for (i = 0; i < len; ++i) {
              target[i + targetStart] = this[i + start];
            }
          } else {
            Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
          }

          return len;
        };

        // Usage:
        //    buffer.fill(number[, offset[, end]])
        //    buffer.fill(buffer[, offset[, end]])
        //    buffer.fill(string[, offset[, end]][, encoding])
        Buffer.prototype.fill = function fill(val, start, end, encoding) {
          // Handle string cases:
          if (typeof val === 'string') {
            if (typeof start === 'string') {
              encoding = start;
              start = 0;
              end = this.length;
            } else if (typeof end === 'string') {
              encoding = end;
              end = this.length;
            }
            if (val.length === 1) {
              var code = val.charCodeAt(0);
              if (code < 256) {
                val = code;
              }
            }
            if (encoding !== undefined && typeof encoding !== 'string') {
              throw new TypeError('encoding must be a string');
            }
            if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
              throw new TypeError('Unknown encoding: ' + encoding);
            }
          } else if (typeof val === 'number') {
            val = val & 255;
          }

          // Invalid ranges are not set to a default, so can range check early.
          if (start < 0 || this.length < start || this.length < end) {
            throw new RangeError('Out of range index');
          }

          if (end <= start) {
            return this;
          }

          start = start >>> 0;
          end = end === undefined ? this.length : end >>> 0;

          if (!val) val = 0;

          var i;
          if (typeof val === 'number') {
            for (i = start; i < end; ++i) {
              this[i] = val;
            }
          } else {
            var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
            var len = bytes.length;
            for (i = 0; i < end - start; ++i) {
              this[i + start] = bytes[i % len];
            }
          }

          return this;
        };

        // HELPER FUNCTIONS
        // ================

        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

        function base64clean(str) {
          // Node strips out invalid characters like \n and \t from the string, base64-js does not
          str = stringtrim(str).replace(INVALID_BASE64_RE, '');
          // Node converts strings with length < 2 to ''
          if (str.length < 2) return '';
          // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
          while (str.length % 4 !== 0) {
            str = str + '=';
          }
          return str;
        }

        function stringtrim(str) {
          if (str.trim) return str.trim();
          return str.replace(/^\s+|\s+$/g, '');
        }

        function toHex(n) {
          if (n < 16) return '0' + n.toString(16);
          return n.toString(16);
        }

        function utf8ToBytes(string, units) {
          units = units || Infinity;
          var codePoint;
          var length = string.length;
          var leadSurrogate = null;
          var bytes = [];

          for (var i = 0; i < length; ++i) {
            codePoint = string.charCodeAt(i);

            // is surrogate component
            if (codePoint > 0xD7FF && codePoint < 0xE000) {
              // last char was a lead
              if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                  // unexpected trail
                  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                } else if (i + 1 === length) {
                  // unpaired lead
                  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                }

                // valid lead
                leadSurrogate = codePoint;

                continue;
              }

              // 2 leads in a row
              if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
              }

              // valid surrogate pair
              codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
            } else if (leadSurrogate) {
              // valid bmp char, but last char was a lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            }

            leadSurrogate = null;

            // encode utf8
            if (codePoint < 0x80) {
              if ((units -= 1) < 0) break;
              bytes.push(codePoint);
            } else if (codePoint < 0x800) {
              if ((units -= 2) < 0) break;
              bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x10000) {
              if ((units -= 3) < 0) break;
              bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x110000) {
              if ((units -= 4) < 0) break;
              bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else {
              throw new Error('Invalid code point');
            }
          }

          return bytes;
        }

        function asciiToBytes(str) {
          var byteArray = [];
          for (var i = 0; i < str.length; ++i) {
            // Node's code seems to be doing this and not & 0x7F..
            byteArray.push(str.charCodeAt(i) & 0xFF);
          }
          return byteArray;
        }

        function utf16leToBytes(str, units) {
          var c, hi, lo;
          var byteArray = [];
          for (var i = 0; i < str.length; ++i) {
            if ((units -= 2) < 0) break;

            c = str.charCodeAt(i);
            hi = c >> 8;
            lo = c % 256;
            byteArray.push(lo);
            byteArray.push(hi);
          }

          return byteArray;
        }

        function base64ToBytes(str) {
          return base64.toByteArray(base64clean(str));
        }

        function blitBuffer(src, dst, offset, length) {
          for (var i = 0; i < length; ++i) {
            if (i + offset >= dst.length || i >= src.length) break;
            dst[i + offset] = src[i];
          }
          return i;
        }

        function isnan(val) {
          return val !== val; // eslint-disable-line no-self-compare
        }
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(10));

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;

      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function placeHoldersCount(b64) {
        var len = b64.length;
        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        }

        // the number of equal signs (place holders)
        // if there are two placeholders, than the two characters before it
        // represent one byte
        // if there is only one, then the three characters before it represent 2 bytes
        // this is just a cheap hack to not do indexOf twice
        return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
      }

      function byteLength(b64) {
        // base64 is 4/3 + up to two characters of the original data
        return b64.length * 3 / 4 - placeHoldersCount(b64);
      }

      function toByteArray(b64) {
        var i, l, tmp, placeHolders, arr;
        var len = b64.length;
        placeHolders = placeHoldersCount(b64);

        arr = new Arr(len * 3 / 4 - placeHolders);

        // if there are placeholders, only get up to the last complete 4 chars
        l = placeHolders > 0 ? len - 4 : len;

        var L = 0;

        for (i = 0; i < l; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[L++] = tmp >> 16 & 0xFF;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        if (placeHolders === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[L++] = tmp & 0xFF;
        } else if (placeHolders === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
          output.push(tripletToBase64(tmp));
        }
        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
        var output = '';
        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3

        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        }

        // pad the end with zeros, but make sure to not forget the extra bytes
        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          output += lookup[tmp >> 2];
          output += lookup[tmp << 4 & 0x3F];
          output += '==';
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          output += lookup[tmp >> 10];
          output += lookup[tmp >> 4 & 0x3F];
          output += lookup[tmp << 2 & 0x3F];
          output += '=';
        }

        parts.push(output);

        return parts.join('');
      }

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];

        i += d;

        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var toString = {}.toString;

      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        /**
         * @fileOverview Environments checks.
         * @module Envs
         */

        var Helpers = __webpack_require__(2);
        var Mixed = __webpack_require__(4);
        var Interface = __webpack_require__(0);
        var Envs = {};

        /**
         * Check if server environment
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name commonjsEnv
         * @returns {boolean}
         * @example
         * be.commonjsEnv() // true
         */
        Envs.commonjsEnv = function () {
          return typeof process !== 'undefined';
        };

        Envs.commonjsEnv.multiple = false;

        /**
         * Check if browser environment
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name browserEnv
         * @returns {boolean}
         * @example
         * be.browserEnv() // true
         */
        Envs.browserEnv = function () {
          return typeof window !== 'undefined';
        };

        Envs.browserEnv.multiple = false;

        /**
         * Check if AMD environment
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name amdEnv
         * @returns {boolean}
         * @example
         * be.amdEnv() // true
         */
        Envs.amdEnv = function () {
          return "function" === 'function' && __webpack_require__(16);
        };

        Envs.amdEnv.multiple = false;

        /**
         * Check if exists navigator object
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name navigator
         * @returns {boolean}
         * @example
         * be.navigator() // true
         */
        Envs.navigator = function () {
          return Envs.browserEnv() && typeof window.navigator !== 'undefined';
        };

        Envs.navigator.multiple = false;

        /**
         * Check if is on line
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name online
         * @returns {boolean}
         * @example
         * be.onLine() // true
         */
        Envs.onLine = function () {
          return Envs.navigator() && navigator.onLine;
        };

        Envs.onLine.multiple = false;

        var regExp = {
          android: /^(?:(?!Windows).)*(Android)(?:\s)(\d+((\.\d+)+)?)?/,
          androidTablet: /(Android)(?:\s)(\d+((\.\d+)+)?)?(?!.*Mobile)/,
          androidPhone: /(Android)(?:\s)(\d+((\.\d+)+)?)?(?:.*Mobile)/,
          chrome: /(Chrome|Crios)\/(\d+((\.\d+)+)?)?\s+(Safari)\/(\d+((\.\d+)+)?)?$/,
          chromeIOS: /(CriOS)\/(\d+((\.\d+)+)?)?/,
          opera: /(Opera|OPR)(?:[\/\s])(\d+((\.\d+)+)?)?/,
          firefox: /(Firefox)\/(\d+((\.\d+)+)?)?$/,
          edge: /(Edge)\/(\d+((\.\d+)+)?)?$/,
          safari: /^(?:(?!Chrome).)*(Safari)\/(\d+((\.\d+)+)?)?/,
          safariMobile: /^(?:(?!CriOS).)*(?:Mobile\/.*)(Safari)\/(\d+((\.\d+)+)?)?/,
          ie: /(MSIE|rv)(?:[\s:])(\d+((\.\d+)+)?)?/,
          windowsPhone: /(Windows Phone)(?:\s)(\d+((\.\d+)+)?)?/,
          windowsTablet: /(Windows NT)(?:\s)(\d+((\.\d+)+)?)?(?:.*Touch)/,
          blackberry: /BlackBerry|BB10/,
          iphone: /iPhone/,
          ipad: /iPad/,
          ipod: /iPod/,
          ios: /iPhone|iPad|iPod/,
          mac: /Mac/,
          linux: /Linux/,
          windows: /Windows/
        };

        var _loop = function _loop(i) {
          Envs[i] = function (range, agent) {
            var rangePart = Helpers.operatorVersion(range);
            agent = !rangePart && !agent && range ? range : agent || navigator.userAgent;
            var match = agent.match(regExp[i]);
            if (rangePart && match && match[2]) {
              return Mixed.compareVersion(match[2], rangePart[0], rangePart[1], true);
            }
            return match !== null;
          };
          Envs[i].multiple = false;
        };

        for (var i in regExp) {
          _loop(i);
        }

        /**
         * Check if is mobile device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name mobile
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.mobile() // true
         */
        Envs.mobile = function (agent) {
          agent = agent || navigator.userAgent;
          return Envs.iphone(agent) || Envs.ipod(agent) || Envs.androidPhone(agent) || Envs.blackberry(agent) || Envs.windowsPhone(agent);
        };

        /**
         * Check if is tablet device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name tablet
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.tablet() // true
         */
        Envs.tablet = function (agent) {
          agent = agent || navigator.userAgent;
          return Envs.ipad(agent) || Envs.windowsTablet(agent) || Envs.androidTablet(agent);
        };

        /**
         * Check if is desktop device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name desktop
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.desktop() // true
         */
        Envs.desktop = function (agent) {
          agent = agent || navigator.userAgent;
          return Envs.not.tablet(agent) && Envs.not.mobile(agent);
        };

        /**
         * Check if is Android tablet
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name androidTablet
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.androidTablet() // true
         */

        /**
         * Check if is Android phone
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name androidPhone
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.androidPhone() // true
         */

        /**
         * Check if is Windows Phone
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name windowsPhone
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.windowsPhone() // true
         */

        /**
         * Check if is Windows Tablet
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name windowsTablet
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.windowsTablet() // true
         */

        /**
         * Check if is BlackBerry device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name blackberry
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.blackberry() // true
         */

        /**
         * Check if is iOS device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name ios
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.ios() // true
         */

        /**
         * Check if is iPad device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name ipad
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.ipad() // true
         */

        /**
         * Check if is iPod device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name ipod
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.ipod() // true
         */

        /**
         * Check if is iPhone device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name iphone
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.iphone() // true
         */

        /**
         * Check if is Android device
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name android
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.android() // true
         * be.android('==4') // true
         */

        /**
         * Firefox detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name firefox
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.firefox() // true
         * be.firefox('==30') // true
         */

        /**
         * Chrome detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name chrome
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.chrome() // true
         * be.chrome('==59') // true
         */

        /**
         * Chrome iOS detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name chromeIOS
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.chromeIOS() // true
         * be.chromeIOS('==59') // true
         */

        /**
         * Safari detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name safari
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.safari() // true
         * be.safari('<=7') // true
         */

        /**
         * Safari mobile detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name safariMobile
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.safariMobile() // true
         * be.safariMobile('<=7') // true
         */

        /**
         * Edge detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name edge
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.edge() // true
         * be.edge('>=12') // true
         */

        /**
         * Explorer detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name ie
         * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.ie() // true
         * be.ie('==9') // true
         */

        /**
         * Mac detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name mac
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.mac() // true
         */

        /**
         * Windows detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name windows
         * @param agent {string} user agent string
         * @returns {boolean}
         * @example
         * be.windows() // true
         */

        /**
         * Linux detecting
         *
         * **Interfaces**: `not`, `err`
         *
         * @function
         * @name linux
         * @param agent {string} user agent string
         * @returns {boolean}
         * @since 1.6.0
         * @example
         * be.linux() // true
         */

        Envs = Interface.create(Envs);

        module.exports = Envs;
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(15));

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // shim for using process in browser

      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
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
        var timeout = runTimeout(cleanUpNextTick);
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
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 16 */
    /***/function (module, exports) {

      /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
        /* globals __webpack_amd_options__ */
        module.exports = __webpack_amd_options__;

        /* WEBPACK VAR INJECTION */
      }).call(exports, {});

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Objects checks.
       * @module Objects
       */

      var Types = __webpack_require__(1);
      var Interface = __webpack_require__(0);
      var Objects = {};

      /**
       * Check if is a property of an object
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name propertyOf
       * @param value {Mixed} property that you want to search
       * @param object {Object} object target
       * @returns {boolean}
       * @example
       * be.propertyOf('firstName', {firstName: 'Teddy', lastName: 'Red'}) // true
       */
      Objects.propertyOf = function (value, object) {
        if (!Types.object(object)) return false;
        return object.hasOwnProperty(value);
      };

      Objects.propertyOf.multiple = false;

      /**
       * Count properties of an object
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name propertyCount
       * @param object {Object} object
       * @param value {Integer} count
       * @returns {boolean}
       * @example
       * be.propertyCount({a: 1, b: 2, c: 3}, 3) // true
       */
      Objects.propertyCount = function (object, value) {
        if (!Types.object(object) || !Types.number(value)) return false;
        var n = 0;
        for (var i in object) {
          if (object.hasOwnProperty(i) && ++n > value) return false;
        }
        return n === value;
      };

      Objects.propertyCount.multiple = false;

      Objects = Interface.create(Objects);

      module.exports = Objects;

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Arrays asserts.
       * @module Array
       */

      var Types = __webpack_require__(1);
      var Numbers = __webpack_require__(3);
      var Interface = __webpack_require__(0);
      var Arrays = {};

      /**
       * Check if an element is in the array
       *
       * **Interfaces**: `not`, `err`
       *
       * @param value {Mixed} element to search
       * @param array {array} array where search
       * @function
       * @name inArray
       * @return {boolean}
       * @example
       *  be.inArray('hello', ['hello', 'world']) //true
       *  be.inArray('ciao', ['hello', 'world']) //false
       *  be.inArray(1, true) //false
       *  be.not.inArray(1, true) //true
       *  be.Arrays.inArray(1, [1, 2, 3]) //true
       */
      Arrays.inArray = function (value, array) {
        if (!Types.array(array)) return false;
        for (var i in array) {
          if (array.hasOwnProperty(i) && array[i] === value) return true;
        }
        return false;
      };

      Arrays.inArray.multiple = false;

      /**
       * Check if is an array of strings
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @param value {array} array
       * @function
       * @name arrayOfStrings
       * @returns {*|boolean}
       * @example
       * be.arrayOfStrings(['hello', 'world']) // true
       * be.all.arrayOfStrings([
       *     ['hello', 'world'],
       *     ['ciao', 'mondo']
       * ]) // true
       */
      Arrays.arrayOfStrings = function (value) {
        return Types.all.string(value);
      };

      /**
       * Check if is an array of objects
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name arrayOfObjects
       * @param value {array} array
       * @returns {*|boolean}
       * @example
       * be.arrayOfObjects([{a:1},{b:2}]) // true
       * be.all.arrayOfObjects([
       *      {a: 1},
       *      {b: 2},
       *      [1, 2, 3]
       * ]) // false
       */
      Arrays.arrayOfObjects = function (value) {
        return Types.all.object(value);
      };

      /**
       * Check if is an array of booleans
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name arrayOfBooleans
       * @param value {array} array
       * @returns {*|boolean}
       * @since 1.3.1
       * @example
       * be.arrayOfBooleans([true, false]) // true
       * be.all.arrayOfBooleans([
       *      true,
       *      false,
       *      [1, 2, 3]
       * ]) // false
       */
      Arrays.arrayOfBooleans = function (value) {
        return Types.all.boolean(value);
      };

      /**
       * Check if is an array of numbers
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name arrayOfNumbers
       * @param value {array} array
       * @returns {*|boolean}
       * @since 1.4.0
       * @example
       * be.arrayOfNumbers([1, 2]) // true
       * be.all.arrayOfNumbers([
       *      true,
       *      false,
       *      [1, 2, 3]
       * ]) // false
       */
      Arrays.arrayOfNumbers = function (value) {
        return Types.all.number(value);
      };

      /**
       * Check if is an array of numeric
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name arrayOfNumeric
       * @param value {array} array
       * @returns {*|boolean}
       * @since 1.13.0
       * @example
       * be.arrayOfNumeric([1, "2"]) // true
       * be.all.arrayOfNumeric([
       *      12,
       *      "two"
       * ]) // false
       */
      Arrays.arrayOfNumeric = function (value) {
        return Numbers.all.numeric(value);
      };

      /**
       * Check if is an array of dates
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name arrayOfDates
       * @param value {array} array
       * @returns {*|boolean}
       * @since 1.4.0
       * @example
       * be.arrayOfDates([new Date(), new Date('2017-07-06')]) // true
       * be.all.arrayOfDates([
       *      true,
       *      false,
       *      new Date()
       * ]) // false
       */
      Arrays.arrayOfDates = function (value) {
        return Types.all.date(value);
      };

      /**
       * Check if is an array of functions
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name arrayOfFunctions
       * @param value {array} array
       * @returns {*|boolean}
       * @since 1.4.0
       * @example
       * be.arrayOfFunctions([function(){return 1}, function(){return 2}]) // true
       * be.all.arrayOfFunctions([
       *      true,
       *      false,
       *      function(){return 1}
       * ]) // false
       */
      Arrays.arrayOfFunctions = function (value) {
        return Types.all.function(value);
      };

      /**
       * Check if is a key of an object with determined value is in array
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name objValueInArray
       * @param array {Array} array
       * @param key {string} object key that you are looking for
       * @param value {any}  the value of the key that you are looking for
       * @returns {*|boolean}
       * @since 1.10.0
       * @example
       * be.objValueInArray([{ id: 1, name: '...'}], 'id', 1) // true
       */
      Arrays.objValueInArray = function (array, key, value) {
        var result = [];
        if (Types.all.object(array)) {
          result = array.map(function (a) {
            return a.hasOwnProperty(key) && a[key] === value;
          });
        }
        return Types.any.booleanTrue(result);
      };

      Arrays.objValueInArray.multiple = false;

      Arrays = Interface.create(Arrays);

      module.exports = Arrays;

      /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Dates checks.
       * @module Dates
       */

      var Types = __webpack_require__(1);
      var Numbers = __webpack_require__(3);
      var Interface = __webpack_require__(0);
      var Dates = {};

      var _days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

      var _months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

      /**
       * Check if is date string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name dateString
       * @param value {string} string date
       * @returns {boolean}
       * @example
       * be.dateString('2017-06-20') // true
       * be.dateString('hello') // false
       */
      Dates.dateString = function (value) {
        var date = Date.parse(value);
        return !isNaN(date);
      };

      /**
       * Check if is time string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name timeString
       * @param value {string} string time
       * @returns {boolean}
       * @example
       * be.timeString('22:06:50') // true
       */
      Dates.timeString = function (value) {
        return (/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(value)
        );
      };

      /**
       * Check if date is today
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name today
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * be.today(new Date()) // true
       */
      Dates.today = function (date) {
        var now = new Date();
        return Types.date(date) && now.toDateString() === date.toDateString();
      };

      /**
       * Check if date is tomorrow
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name tomorrow
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * let now = new Date();
       * let tomorrow = now.setDate(now.getDate() + 1);
       * be.tomorrow(tomorrow) // true
       */
      Dates.tomorrow = function (date) {
        var now = new Date();
        now.setDate(now.getDate() + 1);
        return Types.date(date) && now.toDateString() === date.toDateString();
      };

      /**
       * Check if date is yesterday
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name yesterday
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * let now = new Date();
       * let yesterday = now.setDate(now.getDate() - 1);
       * be.yesterday(yesterday) // true
       */
      Dates.yesterday = function (date) {
        var now = new Date();
        now.setDate(now.getDate() - 1);
        return Types.date(date) && now.toDateString() === date.toDateString();
      };

      /**
       * Check if date is past
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name past
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * be.past(new Date('1980-02-05')) // true
       */
      Dates.past = function (date) {
        var now = new Date().getTime();
        return Types.date(date) && now > date.getTime();
      };

      /**
       * Check if date is future
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name future
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * be.future(new Date('2117-06-24')) // true
       * be.all.future(new Date('2117-06-24'), new Date('2007-06-25')) // false
       * be.any.future(new Date('2117-06-24'), new Date('2007-06-25')) // true
       * be.not.future(new Date('2117-06-24')) // false
       */
      Dates.future = function (date) {
        return Types.date(date) && !Dates.past(date);
      };

      /**
       * Check if date is day specified
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name day
       * @param date {Date} date object
       * @param day {string} day can be 'sunday','monday','tuesday','wednesday','thursday','friday','saturday'
       * @returns {boolean}
       * @example
       * be.day(new Date('2017-06-24'), 'saturday') // true
       * be.day(new Date('2017-06-25'), 'monday') // false
       * be.not.day(new Date('2017-06-25'), 'monday') // true
       */
      Dates.day = function (date, day) {
        return Types.date(date) && Types.string(day) && _days[date.getDay()] === day.toLowerCase();
      };

      Dates.day.multiple = false;

      /**
       * Check if date is month specified
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name month
       * @param date {Date} date object
       * @param month {string} month can be 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
       * @returns {boolean}
       * @example
       * be.month(new Date('2017-06-24'), 'june') // true
       * be.month(new Date('2017-02-25'), 'march') // false
       * be.not.month(new Date('2017-02-25'), 'march') // true
       */
      Dates.month = function (date, month) {
        return Types.date(date) && Types.string(month) && _months[date.getMonth()] === month.toLowerCase();
      };

      Dates.month.multiple = false;

      /**
       * Check if date is the year specified
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name year
       * @param date {Date} date object
       * @param year {number} year
       * @returns {boolean}
       * @example
       * be.year(new Date('2017-06-06'), 2017) // true
       * be.not.year(new Date('2017-06-06'), 2017) // false
       */
      Dates.year = function (date, year) {
        return Types.date(date) && Types.number(year) && date.getFullYear() === year;
      };

      Dates.year.multiple = false;

      /**
       * Check if is leap year
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name leapYear
       * @param year {number} year
       * @returns {boolean}
       * @example
       * be.leapYear(2016) // true
       * be.leapYear(2017) // false
       * be.not.leapYear(2017) // true
       * be.all.leapYear(2012, 2016) // true
       * be.any.leapYear(2015, 2016) // true
       */
      Dates.leapYear = function (year) {
        return Types.number(year) && year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      };

      /**
       * Check if date is weekend
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name weekend
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * be.weekend(new Date('2017-06-24')) // true
       * be.not.weekend(new Date('2017-06-24')) // false
       * be.all.weekend(new Date('2017-06-24'), new Date('2017-06-25')) // true
       * be.any.weekend(new Date('2017-06-24'), new Date('2017-06-26')) // true
       */
      Dates.weekend = function (date) {
        return Dates.day(date, 'saturday') || Dates.day(date, 'sunday');
      };

      /**
       * Check if date is weekday
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name weekday
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * be.weekday(new Date('2017-06-26')) // true
       * be.not.weekday(new Date('2017-06-24')) // true
       * be.all.weekday(new Date('2017-06-26'), new Date('2017-06-27')) // true
       * be.any.weekday(new Date('2017-06-24'), new Date('2017-06-26')) // true
       */
      Dates.weekday = function (date) {
        return Types.date(date) && !Dates.weekend(date);
      };

      /**
       * Check if number is in week, between 0 and 6
       * @function
       * @name numberInWeek
       * @param number {number} number
       * @returns {boolean}
       * @example
       * be.numberInWeek(0) // true, is sunday
       * be.numberInWeek(1) // true, is monday
       * be.numberInWeek(7) // false, the days are between 0 and 6
       */
      Dates.numberInWeek = function (number) {
        return Types.number(number) && Numbers.between(number, 0, 6);
      };

      /**
       * Check if date is between start date and end date
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name dateBetween
       * @param date {Date} date object
       * @param startDate {Date} start date object
       * @param endDate {Date} end date object
       * @returns {boolean}
       * @example
       * be.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // true
       * be.not.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // false
       */
      Dates.dateBetween = function (date, startDate, endDate) {
        return Types.all.date(date, startDate, endDate) && Numbers.between(date.getTime(), startDate.getTime(), endDate.getTime());
      };

      Dates.dateBetween.multiple = false;

      /**
       * Check if date is DST
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name dayLightSavingTime
       * @param date {Date} date object
       * @returns {boolean}
       * @example
       * be.dayLightSavingTime(new Date('2017-06-24')) // true
       * be.dayLightSavingTime(new Date('2017-10-30')) // false
       */
      Dates.dayLightSavingTime = function (date) {
        if (!Types.date(date)) return false;
        var jan = new Date(date.getFullYear(), 0, 1);
        var jul = new Date(date.getFullYear(), 6, 1);
        var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
        return date.getTimezoneOffset() < stdTimezoneOffset;
      };

      Dates = Interface.create(Dates);

      module.exports = Dates;

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Urls checks.
       * @module Urls
       */

      var Interface = __webpack_require__(0);
      var Urls = {};

      /**
       * Check if is valid string url
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name url
       * @param value {string} url
       * @returns {boolean}
       * @example
       * be.url('http://www.google.com') // true;
       * be.not.url('http://www.google.com') // false;
       * be.any.url('http://www.google.com', 'http://') // true;
       * be.all.url('http://www.google.com', 'http://') // false;
       */
      Urls.url = function (value) {
        return (/^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)
        );
      };

      /**
       * Check if is a HTTP url
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name httpUrl
       * @param value {string} url
       * @returns {boolean}
       * @example
       * be.httpUrl('http://www.google.com') // true;
       * be.not.httpUrl('http://www.google.com') // false;
       * be.any.httpUrl('http://www.google.com', 'http://') // true;
       * be.all.httpUrl('http://www.google.com', 'http://') // false;
      */
      Urls.httpUrl = function (value) {
        return Urls.url(value) && /^http:/i.test(value);
      };

      /**
       * Check if is a HTTPS url
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name httpsUrl
       * @param value {string} url
       * @returns {boolean}
       * @example
       * be.httpsUrl('https://www.google.com') // true;
       * be.not.httpsUrl('https://www.google.com') // false;
       * be.any.httpsUrl('https://www.google.com', 'http://') // true;
       * be.all.httpsUrl('https://www.google.com', 'http://') // false;
       */
      Urls.httpsUrl = function (value) {
        return Urls.url(value) && /^https:/i.test(value);
      };

      /**
       * Check if url is encoded
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name urlEncoded
       * @param value {string} url encoded
       * @returns {boolean}
       * @example
       * be.urlEncoded('http://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8') // true
       */
      Urls.urlEncoded = function (value) {
        return (/%[0-9a-f]{2}/i.test(value)
        );
      };

      /**
       * Check if is a FTP urls
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name ftpUrl
       * @param value {string} url
       * @returns {boolean}
       * @example
       * be.ftpUrl('ftp://ftp.google.com') // true;
       * be.not.ftpUrl('ftp://ftp.google.com') // false;
       * be.any.ftpUrl('ftp://ftp.google.com', 'http://') // true;
       * be.all.ftpUrl('ftp://ftp.google.com', 'http://') // false;
       */
      Urls.ftpUrl = function (value) {
        return Urls.url(value) && /^ftp:/i.test(value);
      };

      /**
       * Check if is a FTPS urls
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name ftpsUrl
       * @param value {string} url
       * @returns {boolean}
       * @example
       * be.ftpsUrl('ftps://ftp.google.com') // true;
       * be.not.ftpsUrl('ftps://ftp.google.com') // false;
       * be.any.ftpsUrl('ftps://ftp.google.com', 'http://') // true;
       * be.all.ftpsUrl('ftps://ftp.google.com', 'http://') // false;
       */
      Urls.ftpsUrl = function (value) {
        return Urls.url(value) && /^ftps:/i.test(value);
      };

      /**
       * Check if is a valid domain
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name domain
       * @param value {string} url
       * @returns {boolean}
       * @see https://github.com/johnotander/domain-regex
       * @example
       * be.domain('google.com') // true;
       * be.domain('image.google.com') // true;
       */
      Urls.domain = function (value) {
        return (/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/.test(value)
        );
      };

      Urls = Interface.create(Urls);

      module.exports = Urls;

      /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Hashes checks.
       * @module Hashes
       */

      var Interface = __webpack_require__(0);
      var Hashes = {};

      /**
       * Check if is a valid MD5 hash string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name md5
       * @param value {string} hash string
       * @returns {boolean}
       * @example
       * be.md5('00236a2ae558018ed13b5222ef1bd977') // true
       * be.not.md5('00236a2ae558018ed13b5222ef1bd977') // false
       */
      Hashes.md5 = function (value) {
        return (/^[a-f0-9]{32}$/i.test(value)
        );
      };

      /**
       * Check if is a valid SHA1 hash string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name sha1
       * @param value {string} hash string
       * @returns {boolean}
       * @example
       * be.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // true
       * be.not.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // false
       */
      Hashes.sha1 = function (value) {
        return (/^[a-f0-9]{40}$/i.test(value)
        );
      };

      /**
       * Check if is a valid SHA256 hash string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name sha256
       * @param value {string} hash string
       * @returns {boolean}
       * @since 1.9.0
       * @example
       * be.256('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069') // true
       * be.not.256('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069') // false
       */
      Hashes.sha256 = function (value) {
        return (/^[a-f0-9]{64}$/i.test(value)
        );
      };

      /**
       * Check if is a valid SHA512 hash string
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name sha512
       * @param value {string} hash string
       * @returns {boolean}
       * @since 1.9.0
       * @example
       * be.sha512('aeae379a6e857728e44164267fdb7a0e27b205d757cc19899586c89dbb221930f1813d02ff93a661859bc17065eac4d6edf3c38a034e6283a84754d52917e5b0') // true
       * be.not.sha512('aeae379a6e857728e44164267fdb7a0e27b205d757cc19899586c89dbb221930f1813d02ff93a661859bc17065eac4d6edf3c38a034e6283a84754d52917e5b0') // false
       */
      Hashes.sha512 = function (value) {
        return (/^[a-f0-9]{128}$/i.test(value)
        );
      };

      Hashes = Interface.create(Hashes);

      module.exports = Hashes;

      /***/
    },
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Credit cards checks.
       * @module CreditCard
       */

      var Interface = __webpack_require__(0);
      var CreditCard = {};

      /**
       * Check if is a valid credit card
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name creditCard
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.creditCard('4242424242424242') // true
       */
      CreditCard.creditCard = function (value) {
        return (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(value)
        );
      };

      /**
       * Check if is a valid American Express credit card
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name amex
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.amex('378282246310005') // true
       */
      CreditCard.amex = function (value) {
        return (/^3[47][0-9]{13}$/.test(value)
        );
      };

      /**
       * Check if is a valid Diner’s Club credit card
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name dinersClub
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.dinersClub('30569309025904') // true
       */
      CreditCard.dinersClub = function (value) {
        return (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(value)
        );
      };

      /**
       * Check if is a valid Discover credit card
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name discover
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.discover('6011111111111117') // true
       */
      CreditCard.discover = function (value) {
        return (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value)
        );
      };

      /**
       * Check if is a valid Mastercard credit card
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name mastercard
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.mastercard('5555555555554444') // true
       */
      CreditCard.mastercard = function (value) {
        return (/^5[1-5][0-9]{14}$/.test(value)
        );
      };

      /**
       * Check if is a valid Visa credit card
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name visa
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.visa('4242424242424242') // true
       */
      CreditCard.visa = function (value) {
        return (/^4[0-9]{12}(?:[0-9]{3})?$/.test(value)
        );
      };

      CreditCard = Interface.create(CreditCard);

      module.exports = CreditCard;

      /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * @fileOverview Postal codes checks.
       * @module PostalCodes
       */

      var Helpers = __webpack_require__(2);
      var Interface = __webpack_require__(0);
      var PostalCodes = {};

      var regExp = {
        postalCodeES: /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/,
        postalCodeUK: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
        postalCodeUS: /(\d{5}([\-]\d{4})?)$/,
        postalCodeIT: /^\d{5}$/,
        postalCodeDE: /\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b/,
        postalCodeNL: /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/
      };

      PostalCodes = Helpers.createRegExpMethods(PostalCodes, regExp);

      /**
       * Check if is an ES postal code
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name postalCodeES
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.postalCodeES('03160') // true
       */

      /**
       * Check if is an UK postal code
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name postalCodeUK
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.postalCodeUk('BN519EJ') // true
       */

      /**
       * Check if is an US postal code
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name postalCodeUS
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.postalCodeUS('36784') // true
       */

      /**
       * Check if is an IT postal code
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name postalCodeIT
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.postalCodeIT('98023') // true
       */

      /**
       * Check if is an DE postal code
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name postalCodeDE
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.postalCodeDE('10117') // true
       */

      /**
       * Check if is an NL postal code
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name postalCodeNL
       * @param value {string} version string
       * @returns {boolean}
       * @example
       * be.postalCodeNL('1001 AD') // true
       */

      PostalCodes = Interface.create(PostalCodes);

      module.exports = PostalCodes;

      /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      /**
       * @fileOverview DOM checks.
       * @module DOM
       */

      var Interface = __webpack_require__(0);
      var Types = __webpack_require__(1);
      var DOM = {};

      /**
       * Check if is a valid DOM element
       *
       * **Interfaces**: `all`, `any`, `not`, `err`
       *
       * @function
       * @name domElement
       * @param element {object} element object
       * @returns {boolean}
       * @example
       * be.domElement(document.getElementById('test')) // true
       */
      DOM.domElement = function (element) {
        return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? element instanceof HTMLElement : element && (typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element.nodeType === 1 && typeof element.nodeName === 'string';
      };

      /**
       * Check if element is a specific tag
       *
       * **Interfaces**: `not`, `err`
       *
       * @function
       * @name domElementTag
       * @param element {object} element object
       * @param tag {string} tag name
       * @returns {boolean}
       * @example
       * be.domElementTag(document.getElementsByTagName('body')[0], 'ul') // false
       */
      DOM.domElementTag = function (element, tag) {
        return DOM.domElement(element) && Types.string(tag) && element.tagName.toLowerCase() === tag.toLowerCase();
      };

      DOM.domElementTag.multiple = false;

      DOM = Interface.create(DOM);

      module.exports = DOM;

      /***/
    },
    /* 25 */
    /***/function (module, exports) {

      module.exports = { "name": "bejs", "version": "2.0.0", "description": "Simple, light-weight assertions framework for javascript", "homepage": "https://be.js.org", "main": "index.js", "browser": "dist/be.js", "scripts": { "version:major": "webpack --env.major && npm run-script doc && version-to-tag.sh && npm publish", "version:minor": "webpack --env.minor && npm run-script doc && version-to-tag.sh && npm publish", "version:patch": "webpack --env.patch && npm run-script doc && version-to-tag.sh && npm publish", "build": "webpack --progress", "doc": "./node_modules/.bin/jsdoc --configure .jsdoc.json --verbose", "test": "istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage" }, "keywords": ["asserts", "assertions", "test", "is", "boolean", "url", "number", "string", "email", "object", "check", "float", "alphanumeric", "mocha", "testing", "validation", "test unit", "valid", "type"], "author": { "name": "Fabio Ricali", "email": "fabio@rica.li" }, "contributors": [{ "name": "Davide Polano", "email": "info@mdslab.org" }], "license": "MIT", "devDependencies": { "babel-core": "^6.26.0", "babel-loader": "^7.1.2", "babel-preset-es2015": "^6.24.1", "coveralls": "^2.13.1", "docdash": "^0.4.0", "istanbul": "^0.4.5", "jsdoc": "^3.5.5", "jsdom": "^11.2.0", "koa": "^2.3.0", "minami": "^1.2.3", "mocha": "^3.5.0", "mocha-lcov-reporter": "^1.3.0", "request": "^2.81.0", "unminified-webpack-plugin": "^1.2.0", "webpack": "^3.5.5", "webpack-auto-inject-version": "^0.5.14" }, "repository": { "type": "git", "url": "https://github.com/fabioricali/beJS" }

        /***/ };
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @type {{ALPHANUMERIC: string, ARGUMENT: string, ARRAY: string, BOOLEAN: string, BUFFER: string, DATE: string, ERROR: string, FLOAT: string, FLOAT32ARRAY: string, FLOAT64ARRAY: string, FUNCTION: string, GENERATORFUNCTION: string, INT: string, INT16ARRAY: string, INT32ARRAY: string, INT8ARRAY: string, MAP: string, NULL: string, NUMBER: string, OBJECT: string, PROMISE: string, REGEXP: string, SET: string, STRING: string, SYMBOL: string, UINT16ARRAY: string, UINT32ARRAY: string, UINT8ARRAY: string, UINT8CLAMPEDARRAY: string, UNDEFINED: string, WEAKMAP: string, WEAKSET: string}}
 */
module.exports = {
    ARGUMENTS: 'arguments',
    ARRAY: 'array',
    BOOLEAN: 'boolean',
    BUFFER: 'buffer',
    DATE: 'date',
    ERROR: 'error',
    FLOAT32ARRAY: 'float32array',
    FLOAT64ARRAY: 'float64array',
    FUNCTION: 'function',
    GENERATORFUNCTION: 'generatorfunction',
    INT16ARRAY: 'int16array',
    INT32ARRAY: 'int32array',
    INT8ARRAY: 'int8array',
    MAP: 'map',
    NULL: 'null',
    NUMBER: 'number',
    OBJECT: 'object',
    PROMISE: 'promise',
    REGEXP: 'regexp',
    SET: 'set',
    STRING: 'string',
    SYMBOL: 'symbol',
    UINT16ARRAY: 'uint16array',
    UINT32ARRAY: 'uint32array',
    UINT8ARRAY: 'uint8array',
    UINT8CLAMPEDARRAY: 'uint8clampedarray',
    UNDEFINED: 'undefined',
    WEAKMAP: 'weakmap',
    WEAKSET: 'weakset',

    // Extra
    ALPHA: 'alpha',
    ALPHANUMERIC: 'alphanumeric',
    ANY: 'any',
    DATESTRING: 'datestring',
    EMAIL: 'email',
    FLOAT: 'float',
    INT: 'int',
    IP: 'ip',
    TIMESTRING: 'timestring',
    UUID: 'uuid',
    URL: 'url'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(5);
var ValifyError = __webpack_require__(6);
var check = __webpack_require__(7);
var types = __webpack_require__(2);
var locale = Object.assign({}, __webpack_require__(8));
var extend = __webpack_require__(9);
var format = __webpack_require__(10);
var be = __webpack_require__(0);
var deprecate = __webpack_require__(11);
var clone = __webpack_require__(12);
var detectType = __webpack_require__(18);

/**
 * @class Valify
 */

var Valify = function () {

    /**
     *
     * @param model
     * @param opts
     * @returns {*|Promise}
     */
    function Valify(model) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Valify);

        if (!be.object(model)) throw new Error('Model must be an object');

        if (!be.object(opts)) throw new Error('Options must be an object');

        this.opts = extend.copy(opts, {
            usePromise: false,
            detectUnknown: false,
            autoCast: false
        });

        this.model = clone(model);

        /**
         * Errors list
         * @type {{last: string, fields: Array}}
         * @ignore
         */
        this.errors = {
            message: '',
            fields: []
        };

        this.path = [];

        this._valid_ = this.valid.bind(this);
        this._valid_.owner = this;

        return this._valid_;
    }

    /**
     * Add error to list
     * @param message
     * @param obj
     */


    _createClass(Valify, [{
        key: 'addError',
        value: function addError(message) {
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


            obj.path = Object.assign([], this.path);

            if (obj.field !== undefined) obj.path.push(obj.field);

            if (obj.index !== undefined) obj.path.push(obj.index);

            obj.path = obj.path.join('.');

            message = format(message, obj);

            if (this.errors.message === '') this.errors.message = message;

            if (obj.field === undefined) return;

            this.errors.fields.push({
                path: obj.path,
                message: message,
                field: obj.field,
                type: this.model[obj.field].type
            });

            if (be.function(this.model[obj.field].onError)) {
                this.model[obj.field].onError.call(this, message);
            }
        }

        /**
         * Catch error
         * @param errors
         */

    }, {
        key: 'catchError',
        value: function catchError(errors) {
            if (this.errors.message === '') this.errors.message = errors.message;
            for (var i in errors.fields) {
                if (errors.fields.hasOwnProperty(i) && !this.errors.fields.includes(errors.fields[i])) this.errors.fields.push(errors.fields[i]);
            }
        }

        /**
         * Validation
         * @param data
         * @param nested
         * @returns {*|Promise}
         */

    }, {
        key: 'valid',
        value: function valid(data, nested) {
            var _this = this;

            var type = void 0;

            if (nested) {
                this.path = Object.assign([], nested);
            }

            if (!be.object(data)) this.addError(locale.DATA_REQUIRED);else {

                if (typeof data.hasOwnProperty === 'undefined') throw new TypeError('Data object must be created with prototype, otherwise copy object with Object.assign({}, yourDataObject)');

                for (var field in this.model) {

                    if (!this.model.hasOwnProperty(field)) continue;

                    this.model[field] = this.normalize(field);
                    type = this.model[field].type;

                    // #1 detect short required string
                    type = this.detectShortRequired(type, field);

                    if (this.opts.autoCast) Valify.castToPrimitiveType(field, data);

                    // #2 apply convert function
                    this.applyConvert(field, data);

                    // #3 check allow null
                    if (this.checkAllowNull(field, data)) continue;

                    // #4 check unknown type
                    if (this.checkUnknownType(type, field)) continue;

                    // #5 check required
                    if (this.checkRequired(field, data)) continue;

                    // #6 check type
                    this.checkType(type, field, data);

                    // #7 check empty
                    this.checkAllowEmpty(field, data);
                }

                if (this.opts.detectUnknown) {
                    var unknown = [];
                    for (var i in data) {
                        if (data.hasOwnProperty(i) && !this.model[i]) unknown.push(i);
                    }
                    if (unknown.length) {
                        this.addError(locale.UNKNOWN_DETECTED, { unknown: unknown.join(', ') });
                    }
                }
            }

            if (this.opts.usePromise && !nested) {
                return new Promise(function (resolve, reject) {
                    if (_this.errors.message !== '') reject(_this.errors);else resolve(data);
                });
            } else {
                if (this.errors.message !== '') {
                    throw new ValifyError(this.errors.message, this.errors.fields);
                } else return data;
            }
        }

        /**
         * Detect if string type has symbol "?" set required property to false
         * @param type
         * @param field
         * @returns {*}
         */

    }, {
        key: 'detectShortRequired',
        value: function detectShortRequired(type, field) {
            var sType = void 0;

            if (be.string(type)) {
                sType = type;
            } else if (be.array(type) && type.length === 1 && be.string(type[0])) {
                sType = type[0];
            }

            if (sType !== undefined && sType.endsWith('?')) {
                this.model[field].required = false;
                return sType.slice(0, -1);
            } else return type;
        }

        /**
         * Check allow empty
         * @param field
         * @param data
         * @private
         * @ignore
         */

    }, {
        key: 'checkAllowEmpty',
        value: function checkAllowEmpty(field, data) {
            if (!this.model[field].allowEmpty && be.empty(data[field])) {
                this.addError(this.model[field].locale.FIELD_CANNOT_EMPTY || locale.FIELD_CANNOT_EMPTY, { field: field });
            }
        }

        /**
         * Check allow null
         * @param field
         * @param data
         * @returns {boolean}
         * @private
         * @ignore
         */

    }, {
        key: 'checkAllowNull',
        value: function checkAllowNull(field, data) {
            return this.model[field].allowNull && data[field] === null;
        }

        /**
         * Check unknown type
         * @param type
         * @param field
         * @returns {boolean}
         * @private
         * @ignore
         */

    }, {
        key: 'checkUnknownType',
        value: function checkUnknownType(type, field) {
            if (!Valify.typeExists(type) && !be.function(type) && !be.array(type)) {
                this.addError(locale.UNKNOWN_TYPE, { type: type, field: field });
                return true;
            }

            return false;
        }

        /**
         * Apply convert function
         * @param field
         * @param data
         * @private
         * @ignore
         */

    }, {
        key: 'applyConvert',
        value: function applyConvert(field, data) {
            if (be.function(this.model[field].convert)) data[field] = this.model[field].convert.call(this, data[field], clone(data), be);
        }

        /**
         * Check if is required
         * @param field
         * @param data
         * @returns {boolean}
         * @private
         * @ignore
         */

    }, {
        key: 'checkRequired',
        value: function checkRequired(field, data) {
            if (!data.hasOwnProperty(field)) {
                if (this.model[field].default === null && this.model[field].required) {
                    this.addError(this.model[field].locale.FIELD_REQUIRED || locale.FIELD_REQUIRED, { field: field });
                    return true;
                } else if (this.model[field].required === false) {
                    return true;
                } else {
                    data[field] = this.model[field].default;
                }
            }

            return false;
        }

        /**
         * Check over type
         * @param type
         * @param field
         * @param data
         * @param parent
         * @private
         * @ignore
         */

    }, {
        key: 'checkType',
        value: function checkType(type, field, data, parent) {

            var index = void 0;
            if (be.object(parent)) {
                index = parent.index;
            }

            if (be.string(type)) {
                try {
                    if (!Valify.stringAsError(check[type](data[field], be))) {
                        if (be.object(parent)) {
                            type = parent.type;
                            field = parent.field;
                            data = parent.data;
                        }
                        this.addError(this.model[field].locale.TYPE_FAIL || locale.TYPE_FAIL, {
                            field: field,
                            type: type,
                            dataField: JSON.stringify(data[field]),
                            index: index
                        });
                    }
                } catch (errors) {
                    this.addError(errors.message, { field: field, index: index });
                }
            } else if (be.function(type)) {
                if (Valify.isInstance(type)) {
                    try {
                        var path = Object.assign([], this.path);
                        if (parent) path.push(parent.field);
                        path.push(field);
                        type.call(this, data[field], path);
                    } catch (errors) {
                        this.catchError(errors);
                    }
                } else {
                    try {

                        if (!Valify.stringAsError(type.call(this, data[field], clone(data), be))) {
                            if (be.object(parent)) {
                                field = parent.field;
                                data = parent.data;
                            }
                            this.addError(this.model[field].locale.TYPE_FAIL || locale.TYPE_FUNCTION_FAIL, {
                                field: field,
                                dataField: JSON.stringify(data[field]),
                                index: index
                            });
                        }
                    } catch (errors) {
                        if (be.object(parent)) {
                            field = parent.field;
                        }
                        this.addError(errors.message, { field: field, index: index });
                    }
                }
            } else if (be.array(type)) {

                if (type.length === 1) {

                    if (!be.array(data[field])) {
                        this.addError(this.model[field].locale.TYPE_ARRAY_FAIL || locale.TYPE_ARRAY_FAIL, {
                            field: field,
                            type: type,
                            dataField: JSON.stringify(data[field]),
                            index: index
                        });
                    } else {
                        for (var i in data[field]) {
                            if (data[field].hasOwnProperty(i)) {
                                this.checkType(type[0], i, data[field], { type: type, field: field, data: data, index: i });
                            }
                        }
                    }
                } else {

                    deprecate('multi-type function is deprecated, please use a custom type function with more rules');

                    for (var _i in type) {
                        if (type.hasOwnProperty(_i) && (be.object(type[_i]) || be.function(type[_i]))) {

                            if (be.undefined(type[_i].fn)) {
                                type[_i] = {
                                    fn: type[_i],
                                    message: type[parseInt(_i) + 1]
                                };
                            }

                            if (!be.string(type[_i].message)) type[_i].message = this.model[field].locale.TYPE_FAIL || locale.TYPE_FUNCTION_FAIL;

                            if (!Valify.stringAsError(type[_i].fn.call(this, data[field], data, be))) {
                                this.addError(type[_i].message, {
                                    field: field,
                                    dataField: JSON.stringify(data[field]),
                                    index: index
                                });
                            }
                        }
                    }
                }
            }
        }

        /**
         * Checks if is a Valify model
         * @param field
         * @returns {boolean}
         */

    }, {
        key: 'isModel',
        value: function isModel(field) {
            return _typeof(this.model[field]) === 'object' && this.model[field].hasOwnProperty('type');
        }

        /**
         * Normalize model field
         * @param field
         * @returns {*}
         */

    }, {
        key: 'normalize',
        value: function normalize(field) {

            if (!this.isModel(field)) {
                this.model[field] = { type: this.model[field] };
            }

            return extend(this.model[field], {
                type: null,
                required: true,
                default: null,
                convert: null,
                onError: null,
                allowNull: null,
                allowEmpty: true,
                locale: {
                    FIELD_REQUIRED: null,
                    TYPE_FAIL: null,
                    TYPE_ARRAY_FAIL: null,
                    FIELD_CANNOT_EMPTY: null
                }
            });
        }
    }], [{
        key: 'stringAsError',
        value: function stringAsError(value) {
            if (be.string(value)) {
                throw new Error(value);
            } else return value;
        }

        /**
         * Check if is nested model
         * @param type
         * @returns {boolean}
         */

    }, {
        key: 'isInstance',
        value: function isInstance(type) {
            return type.owner instanceof Valify;
        }

        /**
         * Checks if type exists
         * @param type
         * @returns {boolean}
         */

    }, {
        key: 'typeExists',
        value: function typeExists(type) {
            return check.hasOwnProperty(type);
        }

        /**
         * Adds custom type
         * @param name
         * @param fn
         */

    }, {
        key: 'addType',
        value: function addType(name, fn) {
            if (!be.string(name)) throw new TypeError('name must be a string');

            if (be.emptyString(name)) throw new Error('Name cannot be empty');

            if (Valify.typeExists(name)) throw new Error('Type ' + name + ' already exists');

            if (!be.function(fn)) throw new TypeError('fn must be a function');

            check[name] = fn.bind(this);
        }

        /**
         * Adds multiple types
         * @param types
         */

    }, {
        key: 'addTypes',
        value: function addTypes() {
            var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (!be.array(types)) throw new TypeError('types must be an array');

            types.forEach(function (type) {
                if (!be.object(type)) throw new TypeError('type must be an object');
                Valify.addType(type.name, type.fn);
            });
        }

        /**
         * Set locale
         * @param obj
         */

    }, {
        key: 'setLocale',
        value: function setLocale(obj) {
            for (var param in obj) {
                if (obj.hasOwnProperty(param)) {
                    if (be.emptyString(obj[param])) throw new Error('Description cannot be empty');
                    locale[param] = obj[param];
                }
            }
        }

        /**
         * Returns printable arguments
         * @param args
         * @returns {*}
         */

    }, {
        key: 'printArgs',
        value: function printArgs(args) {
            for (var i in args) {
                if (!args.hasOwnProperty(i)) continue;
                args[i] = JSON.stringify(args[i]);
            }
            return args;
        }

        /**
         * Cast a string (where possible) to a primitive type
         * @param field
         * @param data
         */

    }, {
        key: 'castToPrimitiveType',
        value: function castToPrimitiveType(field, data) {
            if (data.hasOwnProperty(field)) data[field] = detectType(data[field]);
        }
    }]);

    return Valify;
}();

module.exports = Valify;
module.exports.TYPES = types;
module.exports.LOCALE = locale;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value(target, firstSource) {
            'use strict';

            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValifyError = function (_Error) {
    _inherits(ValifyError, _Error);

    function ValifyError() {
        var _ref;

        _classCallCheck(this, ValifyError);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ValifyError.__proto__ || Object.getPrototypeOf(ValifyError)).call.apply(_ref, [this].concat(args)));

        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ValifyError);
        }
        _this.fields = args[1];
        return _this;
    }

    return ValifyError;
}(Error);

module.exports = ValifyError;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var be = __webpack_require__(0);
var TYPES = __webpack_require__(2);

var check = [];

check[TYPES.ARGUMENTS] = be.argument.bind(undefined);
check[TYPES.ARRAY] = be.array.bind(undefined);
check[TYPES.BOOLEAN] = be.boolean.bind(undefined);
check[TYPES.BUFFER] = be.buffer.bind(undefined);
check[TYPES.DATE] = be.date.bind(undefined);
check[TYPES.ERROR] = be.error.bind(undefined);
check[TYPES.FLOAT32ARRAY] = be.float32Array.bind(undefined);
check[TYPES.FLOAT64ARRAY] = be.float64Array.bind(undefined);
check[TYPES.FUNCTION] = be.function.bind(undefined);
check[TYPES.GENERATORFUNCTION] = be.generatorFunction.bind(undefined);
check[TYPES.INT8ARRAY] = be.int8Array.bind(undefined);
check[TYPES.INT16ARRAY] = be.int16Array.bind(undefined);
check[TYPES.INT32ARRAY] = be.int32Array.bind(undefined);
check[TYPES.MAP] = be.map.bind(undefined);
check[TYPES.NULL] = be.null.bind(undefined);
check[TYPES.NUMBER] = be.number.bind(undefined);
check[TYPES.OBJECT] = be.object.bind(undefined);
check[TYPES.PROMISE] = be.promise.bind(undefined);
check[TYPES.REGEXP] = be.regexp.bind(undefined);
check[TYPES.SET] = be.set.bind(undefined);
check[TYPES.STRING] = be.string.bind(undefined);
check[TYPES.SYMBOL] = be.symbol.bind(undefined);
check[TYPES.UINT16ARRAY] = be.uint16Array.bind(undefined);
check[TYPES.UINT32ARRAY] = be.uint32Array.bind(undefined);
check[TYPES.UINT8ARRAY] = be.uint8Array.bind(undefined);
check[TYPES.UINT8CLAMPEDARRAY] = be.uint8ClampedArray.bind(undefined);
check[TYPES.UNDEFINED] = be.undefined.bind(undefined);
check[TYPES.WEAKMAP] = be.weakMap.bind(undefined);
check[TYPES.WEAKSET] = be.weakSet.bind(undefined);

check[TYPES.ALPHANUMERIC] = be.alphanumeric.bind(undefined);
check[TYPES.ANY] = function () {
  return true;
};
check[TYPES.DATESTRING] = be.dateString.bind(undefined);
check[TYPES.EMAIL] = be.email.bind(undefined);
check[TYPES.FLOAT] = be.float.bind(undefined);
check[TYPES.INT] = be.int.bind(undefined);
check[TYPES.IP] = be.ip.bind(undefined);
check[TYPES.TIMESTRING] = be.timeString.bind(undefined);
check[TYPES.UUID] = be.uuid.bind(undefined);
check[TYPES.URL] = be.url.bind(undefined);

module.exports = check;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    UNKNOWN_TYPE: 'Unknown type: "{type}"',
    TYPE_FAIL: '"{path}" expects "{type}" type but receives: {dataField}',
    TYPE_ARRAY_FAIL: '"{path}" expects array of "{type}" type but receives: {dataField}',
    TYPE_FUNCTION_FAIL: '"{path}" receives: {dataField}',
    FIELD_REQUIRED: '"{path}" is required',
    FIELD_CANNOT_EMPTY: '"{path}" cannot be empty',
    DATA_REQUIRED: 'Data is required and must be an object',
    UNKNOWN_DETECTED: 'Unknown fields were detected: {unknown}'
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/**
 * Copies deep missing properties to the target object
 * @param targetObj {Object} target object
 * @param defaultObj {Object} default object
 * @param exclude {Array} exclude properties from copy
 * @returns {*}
 */

var defaulty = function defaulty(targetObj, defaultObj) {
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    for (var i in defaultObj) {
        /* istanbul ignore else  */
        if (defaultObj.hasOwnProperty(i) && exclude.indexOf(i) === -1) {
            if (!targetObj.hasOwnProperty(i) || typeof targetObj[i] === 'undefined') {
                targetObj[i] = defaultObj[i];
            } else if (_typeof(targetObj[i]) === 'object') {
                defaulty(targetObj[i], defaultObj[i]);
            }
        }
    }
    return targetObj;
};

/**
 * Creates new target object and copies deep missing properties to the target object
 * @param args[0] {Object} target object
 * @param args[1] {Object} default object
 * @param args[2] {Array} exclude properties from copy
 * @returns {*}
 */
var copy = function copy() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    args[0] = Object.assign({}, args[0]);
    return defaulty.apply(undefined, args);
};

module.exports = defaulty;
module.exports.copy = copy;
//# sourceMappingURL=defaulty.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var nargs = /\{([0-9a-zA-Z_]+)\}/g;

module.exports = template;

function template(string) {
    var args;

    if (arguments.length === 2 && _typeof(arguments[1]) === "object") {
        args = arguments[1];
    } else {
        args = new Array(arguments.length - 1);
        for (var i = 1; i < arguments.length; ++i) {
            args[i - 1] = arguments[i];
        }
    }

    if (!args || !args.hasOwnProperty) {
        args = {};
    }

    return string.replace(nargs, function replaceArg(match, i, index) {
        var result;

        if (string[index - 1] === "{" && string[index + match.length] === "}") {
            return i;
        } else {
            result = args.hasOwnProperty(i) ? args[i] : null;
            if (result === null || result === undefined) {
                return "";
            }

            return result;
        }
    });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _list = [];

/**
 * Simple deprecate
 * @param prop {*}
 * @param msg {string}
 * @returns {boolean}
 */
var deprecate = function deprecate(prop, msg) {
    if (typeof prop !== 'undefined') {
        msg = msg || prop;

        if (!_list.includes(msg)) _list.push(msg);

        console.warn('[' + deprecate.title + ']', msg);
        return true;
    }
    return false;
};

deprecate.title = 'DeprecationWarning';

/**
 * Calls only once same deprecation
 * @param args
 * @returns {boolean}
 */
var once = function once() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (_list.includes(args[1] || args[0])) return false;
    return deprecate.apply(undefined, args);
};

module.exports = deprecate;
module.exports.once = once;
module.exports._list = _list;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function nativeMap() {};
  }

  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function nativeSet() {};
  }

  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function nativePromise() {};
  }

  /**
   * Clones (copies) an Object using deep copying.
   *
   * This function supports circular references by default, but if you are certain
   * there are no circular references in your object, you can save some CPU time
   * by calling clone(obj, false).
   *
   * Caution: if `circular` is false and `parent` contains circular references,
   * your program may enter an infinite loop and crash.
   *
   * @param `parent` - the object to be cloned
   * @param `circular` - set to true if the object to be cloned may contain
   *    circular references. (optional - true by default)
   * @param `depth` - set to a number if the object is only to be cloned to
   *    a particular depth. (optional - defaults to Infinity)
   * @param `prototype` - sets the prototype to be used when cloning an object.
   *    (optional - defaults to parent prototype).
   * @param `includeNonEnumerable` - set to true if the non-enumerable properties
   *    should be cloned as well. Non-enumerable properties on the prototype
   *    chain will be ignored. (optional - false by default)
  */
  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if ((typeof circular === 'undefined' ? 'undefined' : _typeof(circular)) === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined') circular = true;

    if (typeof depth == 'undefined') depth = Infinity;

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null) return null;

      if (depth === 0) return parent;

      var child;
      var proto;
      if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        child = new Buffer(parent.length);
        parent.copy(child);
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);
          var valueChild = _clone(value, depth - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);
          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs;
        if (proto) {
          attrs = Object.getOwnPropertyDescriptor(proto, i);
        }

        if (attrs && attrs.set == null) {
          continue;
        }
        child[i] = _clone(parent[i], depth - 1);
      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);
        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent[symbol], depth - 1);
          if (!descriptor.enumerable) {
            Object.defineProperty(child, symbol, {
              enumerable: false
            });
          }
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, {
            enumerable: false
          });
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }

  /**
   * Simple flat clone using prototype, accepts only objects, usefull for property
   * override on FLAT configuration object (no nested props).
   *
   * USE WITH CAUTION! This may not behave as you wish if you do not know how this
   * works.
   */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null) return null;

    var c = function c() {};
    c.prototype = parent;
    return new c();
  };

  // private utility functions

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Date]';
  }
  clone.__isDate = __isDate;

  function __isArray(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Array]';
  }
  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object RegExp]';
  }
  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }
  clone.__getRegExpFlags = __getRegExpFlags;

  return clone;
}();

if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
  module.exports = clone;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).Buffer, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(15);
var ieee754 = __webpack_require__(16);
var isArray = __webpack_require__(17);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0; i < l; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stereotype = function stereotype(obj) {

  if (typeof obj !== 'string') {
    return obj;
  }

  switch (obj) {
    case 'undefined':
      return undefined;
    case 'null':
      return null;
    case 'NaN':
      return NaN;
    case 'Infinity':
      return Infinity;
    case 'true':
      return true;
    case 'false':
      return false;
  }

  var num = parseFloat(obj);
  if (!isNaN(num) && isFinite(obj)) {
    if (obj.toLowerCase().indexOf('0x') === 0) {
      return parseInt(obj, 16);
    }
    return num;
  }

  return obj;
};

exports = module.exports = stereotype;

/***/ })
/******/ ]);
}); 