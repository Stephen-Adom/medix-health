(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~schedules"],{

/***/ "./node_modules/vue-cal/dist/vuecal.common.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-cal/dist/vuecal.common.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		38: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "vuecal.common." + ({"0":"i18n/ar","1":"i18n/bg","2":"i18n/bn","3":"i18n/bs","4":"i18n/ca","5":"i18n/cs","6":"i18n/da","7":"i18n/de","8":"i18n/el","9":"i18n/es","10":"i18n/fa","11":"i18n/fr","12":"i18n/he","13":"i18n/hr","14":"i18n/hu","15":"i18n/id","16":"i18n/is","17":"i18n/it","18":"i18n/ja","19":"i18n/ka","20":"i18n/ko","21":"i18n/lt","22":"i18n/nl","23":"i18n/no","24":"i18n/pl","25":"i18n/pt-br","26":"i18n/ro","27":"i18n/ru","28":"i18n/sk","29":"i18n/sl","30":"i18n/sr","31":"i18n/sv","32":"i18n/tr","33":"i18n/uk","34":"i18n/vi","35":"i18n/zh-cn","36":"i18n/zh-hk","37":"drag-and-drop"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpvuecal"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvuecal"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00aa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "1516":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "1790":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": [
		"bd5b",
		0
	],
	"./ar.json": [
		"bd5b",
		0
	],
	"./bg": [
		"3e48",
		1
	],
	"./bg.json": [
		"3e48",
		1
	],
	"./bn": [
		"e160",
		2
	],
	"./bn.json": [
		"e160",
		2
	],
	"./bs": [
		"53fe",
		3
	],
	"./bs.json": [
		"53fe",
		3
	],
	"./ca": [
		"36ee",
		4
	],
	"./ca.json": [
		"36ee",
		4
	],
	"./cs": [
		"e3ad",
		5
	],
	"./cs.json": [
		"e3ad",
		5
	],
	"./da": [
		"e5bc",
		6
	],
	"./da.json": [
		"e5bc",
		6
	],
	"./de": [
		"8d7d",
		7
	],
	"./de.json": [
		"8d7d",
		7
	],
	"./el": [
		"9e70",
		8
	],
	"./el.json": [
		"9e70",
		8
	],
	"./en": [
		"7213"
	],
	"./en.json": [
		"7213"
	],
	"./es": [
		"e240",
		9
	],
	"./es.json": [
		"e240",
		9
	],
	"./fa": [
		"d53b",
		10
	],
	"./fa.json": [
		"d53b",
		10
	],
	"./fr": [
		"0699",
		11
	],
	"./fr.json": [
		"0699",
		11
	],
	"./he": [
		"616e",
		12
	],
	"./he.json": [
		"616e",
		12
	],
	"./hr": [
		"7cd4",
		13
	],
	"./hr.json": [
		"7cd4",
		13
	],
	"./hu": [
		"e131",
		14
	],
	"./hu.json": [
		"e131",
		14
	],
	"./id": [
		"2147",
		15
	],
	"./id.json": [
		"2147",
		15
	],
	"./is": [
		"503f",
		16
	],
	"./is.json": [
		"503f",
		16
	],
	"./it": [
		"eed7",
		17
	],
	"./it.json": [
		"eed7",
		17
	],
	"./ja": [
		"39f7",
		18
	],
	"./ja.json": [
		"39f7",
		18
	],
	"./ka": [
		"acbd",
		19
	],
	"./ka.json": [
		"acbd",
		19
	],
	"./ko": [
		"50dc",
		20
	],
	"./ko.json": [
		"50dc",
		20
	],
	"./lt": [
		"8ed2",
		21
	],
	"./lt.json": [
		"8ed2",
		21
	],
	"./nl": [
		"b258",
		22
	],
	"./nl.json": [
		"b258",
		22
	],
	"./no": [
		"f1ef",
		23
	],
	"./no.json": [
		"f1ef",
		23
	],
	"./pl": [
		"6079",
		24
	],
	"./pl.json": [
		"6079",
		24
	],
	"./pt-br": [
		"89f4",
		25
	],
	"./pt-br.json": [
		"89f4",
		25
	],
	"./ro": [
		"abf5",
		26
	],
	"./ro.json": [
		"abf5",
		26
	],
	"./ru": [
		"a65a",
		27
	],
	"./ru.json": [
		"a65a",
		27
	],
	"./sk": [
		"a39e",
		28
	],
	"./sk.json": [
		"a39e",
		28
	],
	"./sl": [
		"c9a5",
		29
	],
	"./sl.json": [
		"c9a5",
		29
	],
	"./sr": [
		"7981",
		30
	],
	"./sr.json": [
		"7981",
		30
	],
	"./sv": [
		"2a6b",
		31
	],
	"./sv.json": [
		"2a6b",
		31
	],
	"./tr": [
		"278e",
		32
	],
	"./tr.json": [
		"278e",
		32
	],
	"./uk": [
		"7405",
		33
	],
	"./uk.json": [
		"7405",
		33
	],
	"./vi": [
		"c5f8",
		34
	],
	"./vi.json": [
		"c5f8",
		34
	],
	"./zh-cn": [
		"88b4",
		35
	],
	"./zh-cn.json": [
		"88b4",
		35
	],
	"./zh-hk": [
		"cb46",
		36
	],
	"./zh-hk.json": [
		"cb46",
		36
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "1790";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1a4e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2029":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("725e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3835":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js








function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "38c4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "38cf":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var repeat = __webpack_require__("1148");

// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "45fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $some = __webpack_require__("b727").some;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5530":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4de4");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e439");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dbb4");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("b64b");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ade3");









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6062":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("0366");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7213":
/***/ (function(module) {

module.exports = JSON.parse("{\"weekDays\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\"months\":[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],\"years\":\"Years\",\"year\":\"Year\",\"month\":\"Month\",\"week\":\"Week\",\"day\":\"Day\",\"today\":\"Today\",\"noEvent\":\"No Event\",\"allDay\":\"All day\",\"deleteEvent\":\"Delete\",\"createEvent\":\"Create an event\",\"dateFormat\":\"dddd MMMM D{S}, YYYY\"}");

/***/ }),

/***/ "725e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "9ff5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1516");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ade3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bee2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c96a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.small` method
// https://tc39.github.io/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
  }
});


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d011":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("38c4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d4ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "da8a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a4e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ab45d6c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=template&id=e7081090&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vuecal",staticClass:"vuecal__flex vuecal",class:_vm.cssClasses,attrs:{"column":"","lang":_vm.locale}},[_c('vuecal-header',{attrs:{"options":_vm.$props,"edit-events":_vm.editEvents,"view-props":{ views: _vm.views, weekDaysInHeader: _vm.weekDaysInHeader },"week-days":_vm.weekDays,"has-splits":_vm.hasSplits,"day-splits":_vm.daySplits,"switch-to-narrower-view":_vm.switchToNarrowerView},scopedSlots:_vm._u([{key:"arrow-prev",fn:function(){return [_vm._t("arrow-prev",[_vm._v(" "),_c('i',{staticClass:"angle"}),_vm._v(" ")])]},proxy:true},{key:"arrow-next",fn:function(){return [_vm._t("arrow-next",[_vm._v(" "),_c('i',{staticClass:"angle"}),_vm._v(" ")])]},proxy:true},{key:"today-button",fn:function(){return [_vm._t("today-button",[_c('span',{staticClass:"default"},[_vm._v(_vm._s(_vm.texts.today))])])]},proxy:true},{key:"title",fn:function(){return [_vm._t("title",[_vm._v(_vm._s(_vm.viewTitle))],{"title":_vm.viewTitle,"view":_vm.view})]},proxy:true},{key:"weekday-heading",fn:function(ref){
var heading = ref.heading;
var view = ref.view;
return [_vm._t("weekday-heading",null,{"heading":heading,"view":view})]}}],null,true)}),(!_vm.hideBody)?_c('div',{staticClass:"vuecal__flex vuecal__body",attrs:{"grow":""}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.transitions}},[_c('div',{key:_vm.transitions ? _vm.view.id : false,staticClass:"vuecal__flex",staticStyle:{"min-width":"100%"},attrs:{"column":""}},[(_vm.showAllDayEvents && _vm.hasTimeColumn)?_c('div',{staticClass:"vuecal__flex vuecal__all-day"},[_c('span',{staticStyle:{"width":"3em"}},[_c('span',[_vm._v(_vm._s(_vm.texts.allDay))])]),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),attrs:{"grow":"","wrap":(!_vm.minCellWidth && !_vm.minSplitWidth) || _vm.view.id !== 'week',"column":!!_vm.minCellWidth || !!_vm.minSplitWidth}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.$props,"edit-events":_vm.editEvents,"data":cell,"all-day":true,"cell-width":_vm.hideWeekdays.length && ['month', 'week'].includes(_vm.view.id) && _vm.cellWidth,"min-timestamp":_vm.minTimestamp,"max-timestamp":_vm.maxTimestamp,"cell-splits":_vm.hasSplits && _vm.daySplits || []},scopedSlots:_vm._u([{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",[(_vm.editEvents.title && event.title)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),(event.content && _vm.showAllDayEvents !== 'short' && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()],{"view":view,"event":event})]}}],null,true)},[_vm._t("no-event",null,{"slot":"no-event"})],2)}),1)]):_vm._e(),_c('div',{staticClass:"vuecal__bg",class:{ vuecal__flex: !_vm.hasTimeColumn },attrs:{"column":""}},[_c('div',{staticClass:"vuecal__flex",attrs:{"row":"","grow":""}},[(_vm.hasTimeColumn)?_c('div',{staticClass:"vuecal__time-column"},_vm._l((_vm.timeCells),function(cell,i){return _c('div',{key:i,staticClass:"vuecal__time-cell",style:(("height: " + _vm.timeCellHeight + "px"))},[_vm._t("time-cell",[_c('span',{staticClass:"line"}),_c('span',{staticClass:"label"},[_vm._v(_vm._s(cell.label))])],{"hours":cell.hours,"minutes":cell.minutes})],2)}),0):_vm._e(),(_vm.showWeekNumbers && _vm.view.id === 'month')?_c('div',{staticClass:"vuecal__flex vuecal__week-numbers",attrs:{"column":""}},_vm._l((6),function(i){return _c('div',{key:i,staticClass:"vuecal__flex vuecal__week-number-cell",attrs:{"grow":""}},[_vm._t("week-number-cell",[_vm._v(_vm._s(_vm.getWeekNumber(i - 1)))],{"week":_vm.getWeekNumber(i - 1)})],2)}),0):_vm._e(),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),attrs:{"grow":"","wrap":(!_vm.minCellWidth && !_vm.minSplitWidth) || _vm.view.id !== 'week',"column":!!_vm.minCellWidth || !!_vm.minSplitWidth}},[((_vm.minCellWidth || (_vm.hasSplits && _vm.minSplitWidth)) && _vm.view.id === 'week')?_c('weekdays-headings',{style:(_vm.contentMinWidth ? ("min-width: " + _vm.contentMinWidth + "px") : ''),attrs:{"transition-direction":_vm.transitionDirection,"week-days":_vm.weekDays,"switch-to-narrower-view":_vm.switchToNarrowerView},scopedSlots:_vm._u([{key:"weekday-heading",fn:function(ref){
var heading = ref.heading;
var view = ref.view;
return [_vm._t("weekday-heading",null,{"heading":heading,"view":view})]}}],null,true)}):(_vm.hasSplits && _vm.stickySplitLabels && _vm.minSplitWidth)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers",style:(_vm.contentMinWidth ? ("min-width: " + _vm.contentMinWidth + "px") : '')},_vm._l((_vm.daySplits),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._v(_vm._s(split.label))])}),0):_vm._e(),_c('div',{ref:"cells",staticClass:"vuecal__flex",style:(_vm.contentMinWidth ? ("min-width: " + _vm.contentMinWidth + "px") : ''),attrs:{"grow":"","wrap":(!_vm.minCellWidth && !_vm.minSplitWidth) || _vm.view.id !== 'week'}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.$props,"edit-events":_vm.editEvents,"data":cell,"cell-width":_vm.hideWeekdays.length && ['month', 'week'].includes(_vm.view.id) && _vm.cellWidth,"min-timestamp":_vm.minTimestamp,"max-timestamp":_vm.maxTimestamp,"cell-splits":_vm.hasSplits && _vm.daySplits || []},scopedSlots:_vm._u([{key:"cell-content",fn:function(ref){
var events = ref.events;
var split = ref.split;
var selectCell = ref.selectCell;
return [_vm._t("cell-content",[(split && !_vm.stickySplitLabels)?_c('div',{staticClass:"split-label",domProps:{"innerHTML":_vm._s(split.label)}}):_vm._e(),(cell.content)?_c('div',{staticClass:"vuecal__cell-date",domProps:{"innerHTML":_vm._s(cell.content)}}):_vm._e(),(((_vm.view.id === 'month' && !_vm.eventsOnMonthView) || (['years', 'year'].includes(_vm.view.id) && _vm.eventsCountOnYearView)) && events.length)?_c('div',{staticClass:"vuecal__cell-events-count"},[_vm._t("events-count",[_vm._v(_vm._s(events.length))],{"view":_vm.view,"events":events})],2):_vm._e(),(!events.length && ['week', 'day'].includes(_vm.view.id))?_c('div',{staticClass:"vuecal__no-event"},[_vm._t("no-event",[_vm._v(_vm._s(_vm.texts.noEvent))])],2):_vm._e()],{"cell":cell,"view":_vm.view,"goNarrower":selectCell,"events":events})]}},{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",[(_vm.editEvents.title && event.title)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),(_vm.time && !event.allDay && !(view === 'month' && (event.allDay || _vm.showAllDayEvents === 'short')) && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-time"},[_vm._v(_vm._s(event.startDate.formatTime())),(event.endTimeMinutes)?_c('span',[_vm._v(" - "+_vm._s(event.endDate.formatTime()))]):_vm._e(),(event.daysCount > 1 && (event.segments[cell.formattedDate] || {}).isFirstDay)?_c('small',{staticClass:"days-to-end"},[_vm._v(" +"+_vm._s(event.daysCount - 1)+_vm._s((_vm.texts.day[0] || '').toLowerCase()))]):_vm._e()]):_vm._e(),(event.content && !(view === 'month' && event.allDay && _vm.showAllDayEvents === 'short') && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()],{"view":view,"event":event})]}}],null,true)},[_vm._t("default")],2)}),1)],1)])])])]),(!_vm.ready)?_c('div',{staticClass:"vuecal__scrollbar-check"},[_c('div')]):_vm._e()],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=template&id=e7081090&lang=pug&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.repeat.js
var es_string_repeat = __webpack_require__("38cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__("c96a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js









function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// CONCATENATED MODULE: ./src/components/vue-cal/utils/date.js










/**
 * Date Utils & prototypes.
 *
 * Waiting for VS Code to support JavaScript private fields.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
 * Meantime keep `_` for private.
 */
var now, todayDate, todayF, date_self;
var _dateObject = {};
var _timeObject = {}; // Cache Today's date (to a maximum) for better isToday() performances. Formatted without leading 0.
// We still need to update Today's date when Today changes without page refresh.

var todayFormatted = function todayFormatted() {
  if (todayDate !== new Date().getDate()) {
    now = new Date();
    todayDate = now.getDate();
    todayF = "".concat(now.getFullYear(), "-").concat(now.getMonth(), "-").concat(now.getDate());
  }

  return todayF;
};

var date_DateUtils = /*#__PURE__*/function () {
  function DateUtils() {
    Object(classCallCheck["a" /* default */])(this, DateUtils);

    Object(defineProperty["a" /* default */])(this, "dateToMinutes", function (date) {
      return date.getHours() * 60 + date.getMinutes();
    });

    date_self = this; // For use in Date prototypes.
    // Add prototypes ASAP.

    if (Date && !Date.prototype.addDays) this._initDatePrototypes();
  }

  Object(createClass["a" /* default */])(DateUtils, [{
    key: "_initDatePrototypes",
    value: function _initDatePrototypes() {
      Date.texts = {
        weekDays: Array(7).fill(''),
        months: Array(12).fill('')
      }; // eslint-disable-next-line

      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      }; // eslint-disable-next-line


      Date.prototype.subtractDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() - days);
        return date;
      }; // eslint-disable-next-line


      Date.prototype.addHours = function (hours) {
        var date = new Date(this.valueOf());
        date.setHours(date.getHours() + hours);
        return date;
      }; // eslint-disable-next-line


      Date.prototype.subtractHours = function (hours) {
        var date = new Date(this.valueOf());
        date.setHours(date.getHours() - hours);
        return date;
      }; // eslint-disable-next-line


      Date.prototype.addMinutes = function (minutes) {
        var date = new Date(this.valueOf());
        date.setMinutes(date.getMinutes() + minutes);
        return date;
      }; // eslint-disable-next-line


      Date.prototype.subtractMinutes = function (minutes) {
        var date = new Date(this.valueOf());
        date.setMinutes(date.getMinutes() - minutes);
        return date;
      }; // eslint-disable-next-line


      Date.prototype.getWeek = function () {
        var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
        var dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
      }; // eslint-disable-next-line


      Date.prototype.isToday = function () {
        return "".concat(this.getFullYear(), "-").concat(this.getMonth(), "-").concat(this.getDate()) === todayFormatted();
      }; // eslint-disable-next-line


      Date.prototype.isLeapYear = function () {
        var year = this.getFullYear();
        return !(year % 400) || year % 100 && !(year % 4);
      }; // eslint-disable-next-line


      Date.prototype.format = function () {
        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD';
        return date_self.formatDate(this, format, Date.texts);
      }; // eslint-disable-next-line


      Date.prototype.formatTime = function () {
        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'HH:mm';
        if (format === 'HH:mm') return date_self.formatTimeLite(this);
        return date_self.formatTime(date_self.dateToMinutes(this), format, Date.texts);
      };
    }
  }, {
    key: "updateDateTexts",
    value: function updateDateTexts(texts) {
      Date.texts = texts;
    } // Returns today if it's FirstDayOfWeek (Monday or Sunday) or previous FirstDayOfWeek otherwise.

  }, {
    key: "getPreviousFirstDayOfWeek",
    value: function getPreviousFirstDayOfWeek() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var weekStartsOnSunday = arguments.length > 1 ? arguments[1] : undefined;
      var prevFirstDayOfWeek = date && new Date(date.valueOf()) || new Date();
      var dayModifier = weekStartsOnSunday ? 7 : 6;
      prevFirstDayOfWeek.setDate(prevFirstDayOfWeek.getDate() - (prevFirstDayOfWeek.getDay() + dayModifier) % 7);
      return prevFirstDayOfWeek;
    }
  }, {
    key: "_nth",
    value: function _nth(d) {
      if (d > 3 && d < 21) return 'th';

      switch (d % 10) {
        case 1:
          return 'st';

        case 2:
          return 'nd';

        case 3:
          return 'rd';

        default:
          return 'th';
      }
    }
  }, {
    key: "_hydrateDateObject",
    value: function _hydrateDateObject(date, texts) {
      var _this = this;

      if (_dateObject.D) return _dateObject;
      var YYYY = date.getFullYear();
      var M = date.getMonth() + 1;
      var D = date.getDate();
      var day = date.getDay(); // Day of the week.

      var dayNumber = (day - 1 + 7) % 7; // Day of the week. 0 to 6 with 6 = Sunday.
      // Some of this props are functions, to only calculate on demand.

      _dateObject = {
        // Year.
        YYYY: YYYY,
        // 2019.
        YY: function YY() {
          return YYYY.toString().substring(2);
        },
        // 19.
        // Month.
        M: M,
        // 1 to 12.
        MM: function MM() {
          return (M < 10 ? '0' : '') + M;
        },
        // 01 to 12.
        MMM: function MMM() {
          return texts.months[M - 1].substring(0, 3);
        },
        // Jan to Dec.
        MMMM: function MMMM() {
          return texts.months[M - 1];
        },
        // January to December.
        MMMMG: function MMMMG() {
          return (texts.monthsGenitive || texts.months)[M - 1];
        },
        // January to December in genitive form (Greek...)
        // Day.
        D: D,
        // 1 to 31.
        DD: function DD() {
          return (D < 10 ? '0' : '') + D;
        },
        // 01 to 31.
        S: function S() {
          return _this._nth(D);
        },
        // st, nd, rd, th.
        // Day of the week.
        d: dayNumber + 1,
        // 1 to 7 with 7 = Sunday.
        dd: function dd() {
          return texts.weekDays[dayNumber][0];
        },
        // M to S.
        ddd: function ddd() {
          return texts.weekDays[dayNumber].substr(0, 3);
        },
        // Mon to Sun.
        dddd: function dddd() {
          return texts.weekDays[dayNumber];
        } // Monday to Sunday.

      };
      return _dateObject;
    }
  }, {
    key: "_hydrateTimeObject",
    value: function _hydrateTimeObject(date, texts) {
      if (_timeObject.am) return _timeObject;
      var H, m;

      if (date instanceof Date) {
        H = date.getHours();
        m = date.getMinutes();
      } else {
        H = Math.floor(date / 60);
        m = Math.floor(date % 60);
      }

      var h = H % 12 ? H % 12 : 12;
      var am = (texts || {
        am: 'am',
        pm: 'pm'
      })[H === 24 || H < 12 ? 'am' : 'pm'];
      _timeObject = {
        H: H,
        h: h,
        HH: (H < 10 ? '0' : '') + H,
        hh: (h < 10 ? '0' : '') + h,
        am: am,
        AM: am.toUpperCase(),
        m: m,
        mm: (m < 10 ? '0' : '') + m
      };
      return _timeObject;
    }
    /**
     * Formats a time to the given format and returns the formatted string.
     *
     * @param {Number} time in minutes.
     * @param {String} format the wanted format.
     * @param {Object} texts the vue-cal localized texts object.
     * @return {String} the formatted time.
     */

  }, {
    key: "formatTime",
    value: function formatTime(time) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm';
      var texts = arguments.length > 2 ? arguments[2] : undefined;
      _timeObject = {}; // Reinit the time object on each function call.

      var timeObj = this._hydrateTimeObject(time, texts);

      return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
        var result = timeObj[contents.replace(/\{|\}/g, '')];
        return result !== undefined ? result : contents;
      });
    }
    /**
     * Formats a time to 'HH:mm' from a Date and returns the formatted string.
     *
     * @param {Date} date a JavaScript Date object to format.
     * @return {String} the formatted time.
     */

  }, {
    key: "formatTimeLite",
    value: function formatTimeLite(date) {
      var h = date.getHours();
      var m = date.getMinutes();
      return "".concat((h < 10 ? '0' : '') + h, ":").concat((m < 10 ? '0' : '') + m);
    }
    /**
     * Formats a date/time to the given format and returns the formatted string.
     *
     * @param {Date} date a JavaScript Date object to format.
     * @param {String} format the wanted format.
     * @param {Object} texts the vue-cal localized texts object.
     * @return {String} the formatted date.
     */

  }, {
    key: "formatDate",
    value: function formatDate(date) {
      var _this2 = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
      var texts = arguments.length > 2 ? arguments[2] : undefined;
      if (!format) format = 'YYYY-MM-DD'; // Allows passing null for default format.

      if (format === 'YYYY-MM-DD') return this.formatDateLite(date); // Reinit the date and time object on each function call.

      _dateObject = {};
      _timeObject = {}; // Each keyword is a function to load the dateObject or timeObject on demand: no wasted resource.

      var dateObj = {
        YYYY: function YYYY() {
          return _this2._hydrateDateObject(date, texts).YYYY;
        },
        YY: function YY() {
          return _this2._hydrateDateObject(date, texts).YY();
        },
        M: function M() {
          return _this2._hydrateDateObject(date, texts).M;
        },
        MM: function MM() {
          return _this2._hydrateDateObject(date, texts).MM();
        },
        MMM: function MMM() {
          return _this2._hydrateDateObject(date, texts).MMM();
        },
        MMMM: function MMMM() {
          return _this2._hydrateDateObject(date, texts).MMMM();
        },
        MMMMG: function MMMMG() {
          return _this2._hydrateDateObject(date, texts).MMMMG();
        },
        D: function D() {
          return _this2._hydrateDateObject(date, texts).D;
        },
        DD: function DD() {
          return _this2._hydrateDateObject(date, texts).DD();
        },
        S: function S() {
          return _this2._hydrateDateObject(date, texts).S();
        },
        d: function d() {
          return _this2._hydrateDateObject(date, texts).d;
        },
        dd: function dd() {
          return _this2._hydrateDateObject(date, texts).dd();
        },
        ddd: function ddd() {
          return _this2._hydrateDateObject(date, texts).ddd();
        },
        dddd: function dddd() {
          return _this2._hydrateDateObject(date, texts).dddd();
        },
        HH: function HH() {
          return _this2._hydrateTimeObject(date, texts).HH;
        },
        H: function H() {
          return _this2._hydrateTimeObject(date, texts).H;
        },
        hh: function hh() {
          return _this2._hydrateTimeObject(date, texts).hh;
        },
        h: function h() {
          return _this2._hydrateTimeObject(date, texts).h;
        },
        am: function am() {
          return _this2._hydrateTimeObject(date, texts).am;
        },
        AM: function AM() {
          return _this2._hydrateTimeObject(date, texts).AM;
        },
        mm: function mm() {
          return _this2._hydrateTimeObject(date, texts).mm;
        },
        m: function m() {
          return _this2._hydrateTimeObject(date, texts).m;
        }
      };
      return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
        var result = dateObj[contents.replace(/\{|\}/g, '')];
        return result !== undefined ? result() : contents;
      });
    } // More performant function to convert a Date to `YYYY-MM-DD` formatted string only.

  }, {
    key: "formatDateLite",
    value: function formatDateLite(date) {
      var m = date.getMonth() + 1;
      var d = date.getDate();
      return "".concat(date.getFullYear(), "-").concat(m < 10 ? '0' : '').concat(m, "-").concat(d < 10 ? '0' : '').concat(d);
    }
    /**
     * Converts a string to a Javascript Date object. If a Date object is passed, return it as is.
     *
     * @param {String | Date} date the string to convert to Date.
     * @return {Date} the equivalent Javascript Date object.
     */

  }, {
    key: "stringToDate",
    value: function stringToDate(date) {
      if (date instanceof Date) return date; // Regexp way is less performant: https://jsperf.com/string-to-date-regexp-vs-new-date
      // const [, y, m, d, h = 0, min = 0] = date.match(/(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?/)
      // return new Date(y, parseInt(m) - 1, d, h, min)

      return new Date(date.replace(/-/g, '/')); // replace '-' with '/' for Safari.
    }
    /**
     * Simply takes a Date and returns the associated time in minutes (sum of hours + minutes).
     *
     * @param {Date} date the JavaScript Date to extract minutes from.
     * @return {Number} the number of minutes (total of hours plus minutes).
     */

  }, {
    key: "countDays",

    /**
     * Count the number of days this date range spans onto.
     * E.g. countDays(2019-11-02 18:00, 2019-11-03 02:00) = 2
     *
     * @param {String | Date} start the start date
     * @param {String | Date} end the end date
     * @return {Integer} The number of days this date range involves
     */
    value: function countDays(start, end) {
      // replace '-' with '/' for Safari.
      if (typeof start === 'string') start = start.replace(/-/g, '/');
      if (typeof end === 'string') end = end.replace(/-/g, '/'); // Set start & end at midnight then compare the delta. Don't modify the original dates.

      start = new Date(start).setHours(0, 0, 0, 0); // Set end at midnight plus 1 sec, so Math.ceil will round it up to a full day.

      end = new Date(end).setHours(0, 0, 1, 0); // Remove the potential daylight saving delta.

      var timezoneDiffMs = (new Date(end).getTimezoneOffset() - new Date(start).getTimezoneOffset()) * 60 * 1000;
      return Math.ceil((end - start - timezoneDiffMs) / (24 * 3600 * 1000));
    }
    /**
     * Take 2 dates and check if within the same time step (useful in overlapping events).
     *
     * @return {Boolean} `true` if their time is included in the same time step,
     *                   this means these 2 dates are very close.
     */

  }, {
    key: "datesInSameTimeStep",
    value: function datesInSameTimeStep(date1, date2, timeStep) {
      return Math.abs(date1.getTime() - date2.getTime()) <= timeStep * 60 * 1000;
    }
  }]);

  return DateUtils;
}();


// CONCATENATED MODULE: ./src/components/vue-cal/utils/cell.js




/**
 * Cell Utils.
 *
 * Waiting for VS Code to support JavaScript private fields.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
 * Meantime keep `_` for private.
 */
var cell_CellUtils = function CellUtils(vuecal) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, CellUtils);

  Object(defineProperty["a" /* default */])(this, "_vuecal", null);

  Object(defineProperty["a" /* default */])(this, "selectCell", function () {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var date = arguments.length > 1 ? arguments[1] : undefined;
    var split = arguments.length > 2 ? arguments[2] : undefined;

    // Cell-click event returns a date and time at cursor position.
    _this._vuecal.$emit('cell-click', split ? {
      date: date,
      split: split
    } : date); // Switch to narrower view.


    if (_this._vuecal.clickToNavigate || force) _this._vuecal.switchToNarrowerView(); // Handle double click manually for touch devices.
    else if (_this._vuecal.dblclickToNavigate && 'ontouchstart' in window) {
        _this._vuecal.domEvents.dblTapACell.taps++;
        setTimeout(function () {
          return _this._vuecal.domEvents.dblTapACell.taps = 0;
        }, _this._vuecal.domEvents.dblTapACell.timeout);

        if (_this._vuecal.domEvents.dblTapACell.taps >= 2) {
          _this._vuecal.domEvents.dblTapACell.taps = 0;

          _this._vuecal.switchToNarrowerView();

          _this._vuecal.$emit('cell-dblclick', split ? {
            date: date,
            split: split
          } : date);
        }
      }
  });

  Object(defineProperty["a" /* default */])(this, "keyPressEnterCell", function (date, split) {
    // Cell-key-press-enter event returns a date and time at cursor position.
    _this._vuecal.$emit('cell-keypress-enter', split ? {
      date: date,
      split: split
    } : date); // Switch to narrower view.


    _this._vuecal.switchToNarrowerView();
  });

  Object(defineProperty["a" /* default */])(this, "getPosition", function (e) {
    var _this$_vuecal$$refs$c = _this._vuecal.$refs.cells.getBoundingClientRect(),
        left = _this$_vuecal$$refs$c.left,
        top = _this$_vuecal$$refs$c.top;

    var _ref = 'ontouchstart' in window && e.touches ? e.touches[0] : e,
        clientX = _ref.clientX,
        clientY = _ref.clientY;

    return {
      x: clientX - left,
      y: clientY - top
    };
  });

  Object(defineProperty["a" /* default */])(this, "minutesAtCursor", function (e) {
    var minutes = 0;
    var cursorCoords = {
      x: 0,
      y: 0
    };
    if (typeof e === 'number') minutes = e;else if (_typeof(e) === 'object') {
      cursorCoords = _this.getPosition(e);
      minutes = Math.round(cursorCoords.y * _this._vuecal.$props.timeStep / parseInt(_this._vuecal.$props.timeCellHeight) + _this._vuecal.$props.timeFrom);
    }
    return {
      minutes: minutes,
      cursorCoords: cursorCoords
    };
  });

  this._vuecal = vuecal;
}
/**
 * Select a cell and go to narrower view on double click or single click according to vuecalProps option.
 *
 * @param {Boolean} force Force switching to narrower view.
 * @param {Date} date The selected cell date at the exact time where it was clicked (through cursor coords).
 * @param {Integer} split The selected cell split if any.
 */
;


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/components/vue-cal/utils/event.js























/**
 * Events Utils.
 *
 * Waiting for VS Code to support JavaScript private fields.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
 * Meantime keep `_` for private.
 */

var defaultEventDuration = 2; // In hours.

var minutesInADay = 24 * 60; // Don't do the maths every time.

var event_formatDateLite, event_stringToDate, event_formatTimeLite, event_countDays, datesInSameTimeStep, event_dateToMinutes; // Event overlaps: only for the current view, recreated on view change.

var _cellOverlaps, _comparisonArray; // This is an approximation, it will not work with DLS time.
// const approxDayMilliseconds = minutesInADay * 60 * 1000
// This is an approximate minimum we can get in a year. Purposely stay bellow 365 but close.
// const minYearMilliseconds = 364 * approxDayMilliseconds // Don't do the maths every time.


var event_EventUtils = /*#__PURE__*/function () {
  function EventUtils(vuecal, dateUtils) {
    Object(classCallCheck["a" /* default */])(this, EventUtils);

    Object(defineProperty["a" /* default */])(this, "_vuecal", null);

    Object(defineProperty["a" /* default */])(this, "eventDefaults", {
      _eid: null,
      start: '',
      // Externally given formatted date & time.
      startDate: '',
      // Date object.
      startTimeMinutes: 0,
      end: '',
      // Externally given formatted date & time.
      endDate: '',
      // Date object.
      endTimeMinutes: 0,
      title: '',
      content: '',
      background: false,
      allDay: false,
      segments: null,
      repeat: null,
      daysCount: 1,
      deletable: true,
      deleting: false,
      resizable: true,
      resizing: false,
      draggable: true,
      dragging: false,
      draggingStatic: false,
      // Controls the CSS class of the static clone while dragging.
      focused: false,
      top: 0,
      height: 0,
      class: ''
    });

    this._vuecal = vuecal;
    event_formatDateLite = dateUtils.formatDateLite;
    event_stringToDate = dateUtils.stringToDate;
    event_formatTimeLite = dateUtils.formatTimeLite;
    event_countDays = dateUtils.countDays;
    datesInSameTimeStep = dateUtils.datesInSameTimeStep;
    event_dateToMinutes = dateUtils.dateToMinutes;
  }
  /**
   * Create an event at the given date and time, and allow overriding
   * event attributes through the eventOptions object.
   *
   * @param {Date | String} dateTime The date and time of the new event start.
   * @param {Number} duration the event duration in minutes.
   * @param {Object} eventOptions some options to override the `eventDefaults` - optional.
   */


  Object(createClass["a" /* default */])(EventUtils, [{
    key: "createAnEvent",
    value: function createAnEvent(dateTime, duration, eventOptions) {
      var _this = this;

      if (typeof dateTime === 'string') dateTime = event_stringToDate(dateTime);
      if (!(dateTime instanceof Date)) return false;
      var startTimeMinutes = event_dateToMinutes(dateTime);
      duration = duration * 1 || defaultEventDuration * 60;
      var endTimeMinutes = startTimeMinutes + duration;
      var start = event_formatDateLite(dateTime) + (this._vuecal.time ? " ".concat(event_formatTimeLite(dateTime)) : '');
      var end = event_formatDateLite(dateTime) + (this._vuecal.time ? " ".concat(event_formatTimeLite(dateTime.addMinutes(duration))) : ''); // Automatically add the required endTimeMinutes when passing an endDate.

      if (eventOptions.endDate) eventOptions.endTimeMinutes = event_dateToMinutes(eventOptions.endDate);

      var event = Object(objectSpread2["a" /* default */])({}, this.eventDefaults, {
        _eid: "".concat(this._vuecal._uid, "_").concat(this._vuecal.eventIdIncrement++),
        start: start,
        startDate: dateTime,
        startTimeMinutes: startTimeMinutes,
        end: end,
        endDate: event_stringToDate(end),
        endTimeMinutes: endTimeMinutes,
        segments: null
      }, eventOptions); // If the onEventCreate() function is given as a parameter to vue-cal:
      // 1. give it access to the created event & the deleteAnEvent() function.
      // 2. Prevent creation of the event if this function returns false.


      if (typeof this._vuecal.onEventCreate === 'function') {
        if (!this._vuecal.onEventCreate(event, function () {
          return _this.deleteAnEvent(event);
        })) return;
      } // Check if event is a multiple day event and update days count.


      if (event.start.substr(0, 10) !== event.end.substr(0, 10)) {
        event.daysCount = event_countDays(event.startDate, event.endDate);
      } // Add event to the mutableEvents array.


      this._vuecal.mutableEvents.push(event); // Add the new event to the current view.
      // The event may have been edited on the fly to become a multiple-day event,
      // the method addEventsToView makes sure the segments are created.


      this._vuecal.addEventsToView([event]);

      this._vuecal.emitWithEvent('event-create', event);

      this._vuecal.$emit('event-change', {
        event: this._vuecal.cleanupEvent(event),
        originalEvent: null
      });

      return event;
    }
    /**
     * Add an event segment (= day) to a multiple-day event.
     *
     * @param {Object} e the multiple-day event to add segment in.
     */

  }, {
    key: "addEventSegment",
    value: function addEventSegment(e) {
      if (!e.segments) {
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e, 'segments', {});
        e.segments[e.start.substr(0, 10)] = {
          startDate: e.startDate,
          start: e.start.substr(0, 10),
          startTimeMinutes: e.startTimeMinutes,
          endTimeMinutes: minutesInADay,
          isFirstDay: true,
          isLastDay: false,
          height: 0,
          top: 0
        };
      } // Modify the last segment - which is no more the last one.


      var previousSegment = e.segments[event_formatDateLite(e.endDate)]; // previousSegment might not exist when dragging too fast, prevent errors.

      if (previousSegment) {
        previousSegment.isLastDay = false;
        previousSegment.endTimeMinutes = minutesInADay;
      } else {} // @todo: when moving fast might lose the previousSegment.
      // Trying to update it would then result in an error, but do nothing would create a visual bug.
      // Create the new last segment.


      var startDate = e.endDate.addDays(1);
      var endDate = new Date(startDate);
      var formattedDate = event_formatDateLite(startDate);
      startDate.setHours(0, 0, 0, 0);
      e.segments[formattedDate] = {
        startDate: startDate,
        start: formattedDate,
        startTimeMinutes: 0,
        endTimeMinutes: e.endTimeMinutes,
        isFirstDay: false,
        isLastDay: true,
        height: 0,
        top: 0
      };
      e.daysCount = Object.keys(e.segments).length;
      e.endDate = endDate;
      e.end = "".concat(formattedDate, " ").concat(event_formatTimeLite(e.endDate));
      return formattedDate;
    }
    /**
     * Remove an event segment (= day) from a multiple-day event.
     *
     * @param {Object} e the multiple-day event to remove segments from.
     */

  }, {
    key: "removeEventSegment",
    value: function removeEventSegment(e) {
      var segmentsCount = Object.keys(e.segments).length;
      if (segmentsCount <= 1) return e.end.substr(0, 10); // Remove the last segment.

      delete e.segments[e.end.substr(0, 10)];
      segmentsCount--;
      var endDate = e.endDate.subtractDays(1);
      var formattedDate = event_formatDateLite(endDate);
      var previousSegment = e.segments[formattedDate]; // If no more segments, reset the segments attribute to null.

      if (!segmentsCount) e.segments = null; // previousSegment might not exist when dragging too fast, prevent errors.
      else if (previousSegment) {
          // Modify the new last segment.
          previousSegment.isLastDay = true;
          previousSegment.endTimeMinutes = e.endTimeMinutes;
        } else {// @todo: when moving fast might lose the previousSegment.
          // Trying to update it would then result in an error, but do nothing would create a visual bug.
        }
      e.daysCount = segmentsCount || 1;
      e.endDate = endDate;
      e.end = "".concat(formattedDate, " ").concat(event_formatTimeLite(e.endDate));
      return formattedDate;
    }
    /**
     * Create 1 segment per day of the given event, but only within the current view.
     * (It won't create segments for all the days in view that are not in the event!)
     *
     * An event segment is a piece of event per day that contains more day-specific data.
     *
     * @param {Object} e the multiple-day event to create segments for.
     * @param {Date} viewStartDate the starting date of the view.
     * @param {Date} viewEndDate the ending date of the view.
     */

  }, {
    key: "createEventSegments",
    value: function createEventSegments(e, viewStartDate, viewEndDate) {
      var viewStartTimestamp = viewStartDate.getTime();
      var viewEndTimestamp = viewEndDate.getTime();
      var eventStart = e.startDate.getTime();
      var eventEnd = e.endDate.getTime();
      var repeatedEventStartFound = false;
      var timestamp, end, eventStartAtMidnight; // @todo: I don't think we still need that:
      // Removing 1 sec when ending at 00:00, so that we don't create a segment for nothing on last day.

      if (!e.endDate.getHours() && !e.endDate.getMinutes()) eventEnd -= 1000;
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e, 'segments', {}); // The goal is to create 1 segment per day in the event, but only within the current view.

      if (!e.repeat) {
        // Simple case first.
        timestamp = Math.max(viewStartTimestamp, eventStart);
        end = Math.min(viewEndTimestamp, eventEnd);
      } else {
        // Start at the beginning of the range, and end at soonest between `repeat.until` if any or range end.
        // This range will most likely be too large (e.g. whole week) and we need to narrow it
        // down in the while loop bellow.
        // We must not create unused segments, it would break the render or result in weird behaviors.
        timestamp = viewStartTimestamp;
        end = Math.min(viewEndTimestamp, e.repeat.until ? event_stringToDate(e.repeat.until).getTime() : viewEndTimestamp);
      }

      while (timestamp <= end) {
        var createSegment = false; // Be careful not to simply add 24 hours!
        // In case of DLS, that would cause the event to never end and browser to hang.
        // So use `addDays(1)` instead.

        var nextMidnight = new Date(timestamp).addDays(1).setHours(0, 0, 0, 0);
        var isFirstDay = void 0,
            isLastDay = void 0,
            startDate = void 0,
            formattedDate = void 0;

        if (e.repeat) {
          var tmpDate = new Date(timestamp);
          var tmpDateFormatted = event_formatDateLite(tmpDate); // If the current day in loop is a known date of the repeated event (in `e.occurrences`),
          // then we found the first day of the event repetition, now update the `eventStart` and
          // the end of the loop at current day + event days count.

          if (repeatedEventStartFound || e.occurrences && e.occurrences[tmpDateFormatted]) {
            if (!repeatedEventStartFound) {
              eventStart = e.occurrences[tmpDateFormatted].start;
              eventStartAtMidnight = new Date(eventStart).setHours(0, 0, 0, 0);
              eventEnd = e.occurrences[tmpDateFormatted].end;
            }

            repeatedEventStartFound = true;
            createSegment = true;
          }

          isFirstDay = timestamp === eventStartAtMidnight;
          isLastDay = tmpDateFormatted === event_formatDateLite(new Date(eventEnd));
          startDate = isFirstDay ? new Date(eventStart) : new Date(timestamp);
          formattedDate = event_formatDateLite(startDate); // We want to find any potential other repetition of event in same range.

          if (isLastDay) repeatedEventStartFound = false;
        } else {
          createSegment = true;
          isFirstDay = timestamp === eventStart;
          isLastDay = end === eventEnd && nextMidnight > end;
          startDate = isFirstDay ? e.startDate : new Date(timestamp);
          formattedDate = isFirstDay ? e.start.substr(0, 10) : event_formatDateLite(startDate);
        }

        if (createSegment) {
          e.segments[formattedDate] = {
            startDate: startDate,
            start: formattedDate,
            startTimeMinutes: isFirstDay ? e.startTimeMinutes : 0,
            endTimeMinutes: isLastDay ? e.endTimeMinutes : minutesInADay,
            isFirstDay: isFirstDay,
            isLastDay: isLastDay,
            height: 0,
            top: 0
          };
        }

        timestamp = nextMidnight;
      }

      return e;
    }
    /**
     * Delete an event.
     *
     * @param {Object} event the calendar event to delete.
     */

  }, {
    key: "deleteAnEvent",
    value: function deleteAnEvent(event) {
      this._vuecal.emitWithEvent('event-delete', event); // Delete the event globally.


      this._vuecal.mutableEvents = this._vuecal.mutableEvents.filter(function (e) {
        return e._eid !== event._eid;
      }); // Delete the event from the current view.
      // checkCellOverlappingEvents() will be re-run automatically from the cell computed events.

      this._vuecal.view.events = this._vuecal.view.events.filter(function (e) {
        return e._eid !== event._eid;
      });
    } // EVENT OVERLAPS.
    // ===================================================================
    // Will recalculate all the overlaps of the current cell OR split.
    // cellEvents will contain only the current split events if in a split.

  }, {
    key: "checkCellOverlappingEvents",
    value: function checkCellOverlappingEvents(cellEvents, options) {
      var _this2 = this;

      _comparisonArray = cellEvents.slice(0);
      _cellOverlaps = {}; // Can't filter background events before calling this function otherwise
      // when an event is changed to background it would not update its previous overlaps.

      cellEvents.forEach(function (e) {
        // For performance, never compare the current event in the next loops.
        // The array is smaller and smaller as we loop.
        _comparisonArray.shift();

        if (!_cellOverlaps[e._eid]) external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(_cellOverlaps, e._eid, {
          overlaps: [],
          start: e.start,
          position: 0
        });
        _cellOverlaps[e._eid].position = 0;

        _comparisonArray.forEach(function (e2) {
          if (!_cellOverlaps[e2._eid]) external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(_cellOverlaps, e2._eid, {
            overlaps: [],
            start: e2.start,
            position: 0
          });

          var eventIsInRange = _this2.eventInRange(e2, e.startDate, e.endDate);

          var eventsInSameTimeStep = options.overlapsPerTimeStep ? datesInSameTimeStep(e.startDate, e2.startDate, options.timeStep) : 1; // Add to the overlaps array if overlapping.

          if (!e.background && !e.allDay && !e2.background && !e2.allDay && eventIsInRange && eventsInSameTimeStep) {
            _cellOverlaps[e._eid].overlaps.push(e2._eid);

            _cellOverlaps[e._eid].overlaps = _toConsumableArray(new Set(_cellOverlaps[e._eid].overlaps)); // Dedupe, most performant way.

            _cellOverlaps[e2._eid].overlaps.push(e._eid);

            _cellOverlaps[e2._eid].overlaps = _toConsumableArray(new Set(_cellOverlaps[e2._eid].overlaps)); // Dedupe, most performant way.

            _cellOverlaps[e2._eid].position++;
          } // Remove from the overlaps array if not overlapping or if 1 of the 2 events is background or all-day long.
          else {
              var pos1, pos2;
              if ((pos1 = (_cellOverlaps[e._eid] || {
                overlaps: []
              }).overlaps.indexOf(e2._eid)) > -1) _cellOverlaps[e._eid].overlaps.splice(pos1, 1);
              if ((pos2 = (_cellOverlaps[e2._eid] || {
                overlaps: []
              }).overlaps.indexOf(e._eid)) > -1) _cellOverlaps[e2._eid].overlaps.splice(pos2, 1);
              _cellOverlaps[e2._eid].position--;
            }
        });
      }); // Overlaps streak is the longest horizontal set of simultaneous events.
      // This is determining the width of events in a streak.
      // e.g. 3 overlapping events in a cell:
      //  ___   ___
      // | 1 | |_2_|  1 overlaps 2 & 3; 2 & 3 don't overlap;
      // |   |  ___   => streak = 2; each width = 50% not 33%.
      // |___| |_3_|

      var longestStreak = 0;

      var _loop = function _loop(id) {
        var item = _cellOverlaps[id]; // Calculate the position of each event in current streak (determines the CSS left property).

        var overlapsRow = item.overlaps.map(function (id2) {
          return {
            id: id2,
            start: _cellOverlaps[id2].start
          };
        });
        overlapsRow.push({
          id: id,
          start: item.start
        });
        overlapsRow.sort(function (a, b) {
          return a.start < b.start ? -1 : a.start > b.start ? 1 : a.id > b.id ? -1 : 1;
        });
        item.position = overlapsRow.findIndex(function (e) {
          return e.id === id;
        });
        longestStreak = Math.max(_this2.getOverlapsStreak(item, _cellOverlaps), longestStreak);
      };

      for (var id in _cellOverlaps) {
        _loop(id);
      }

      return [_cellOverlaps, longestStreak];
    }
    /**
     * Overlaps streak is the longest horizontal set of simultaneous events.
     * This is determining the width of each events in this streak.
     * E.g. 3 overlapping events [1, 2, 3]; 1 overlaps 2 & 3; 2 & 3 don't overlap;
     *      => streak = 2; each width = 50% not 33%.
     *
     * @param {Object} event The current event we are checking among all the events of the current cell.
     * @param {Object} cellOverlaps An indexed array of all the events overlaps for the current cell.
     * @return {Number} The number of simultaneous event for this event.
     */

  }, {
    key: "getOverlapsStreak",
    value: function getOverlapsStreak(event) {
      var cellOverlaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var streak = event.overlaps.length + 1;
      var removeFromStreak = [];
      event.overlaps.forEach(function (id) {
        if (!removeFromStreak.includes(id)) {
          var overlapsWithoutSelf = event.overlaps.filter(function (id2) {
            return id2 !== id;
          });
          overlapsWithoutSelf.forEach(function (id3) {
            if (!cellOverlaps[id3].overlaps.includes(id)) removeFromStreak.push(id3);
          });
        }
      });
      removeFromStreak = _toConsumableArray(new Set(removeFromStreak)); // Dedupe, most performant way.

      streak -= removeFromStreak.length;
      return streak;
    }
    /**
     * Update the event top and height CSS properties of each event as long as vuecal.time is true.
     *
     * @param {Object} event The event to update position (top & height) of.
     */

  }, {
    key: "updateEventPosition",
    value: function updateEventPosition(event) {
      var startTimeMinutes = event.startTimeMinutes,
          endTimeMinutes = event.endTimeMinutes; // Top of event.

      var minutesFromTop = startTimeMinutes - this._vuecal.timeFrom;
      var top = Math.round(minutesFromTop * this._vuecal.timeCellHeight / this._vuecal.timeStep); // Bottom of event.

      minutesFromTop = Math.min(endTimeMinutes, this._vuecal.timeTo) - this._vuecal.timeFrom;
      var bottom = Math.round(minutesFromTop * this._vuecal.timeCellHeight / this._vuecal.timeStep);
      event.top = Math.max(top, 0);
      event.height = Math.max(bottom - event.top, 5); // Min height is 5px.
    }
    /**
     * Tells whether an event is in a given date range, even partially.
     *
     * @param {Object} event The event to test.
     * @param {Date} start The start of range date object.
     * @param {Date} end The end of range date object.
     * @return {Boolean} true if in range, even partially.
     */

  }, {
    key: "eventInRange",
    value: function eventInRange(event, start, end) {
      // Check if all-day or timeless event (if date but no time there won't be a `:` in event.start).
      if (event.allDay || event.start.indexOf(':') === -1) {
        // Get the date and discard the time if any, then check it's within the date range.
        var eventStart = new Date(event.startDate).setHours(0, 0, 0, 0);
        return eventStart >= new Date(start).setHours(0, 0, 0, 0) && eventStart <= new Date(end).setHours(0, 0, 0, 0);
      }

      var startTimestamp = event.startDate.getTime();
      var endTimestamp = event.endDate.getTime();
      return startTimestamp < end.getTime() && endTimestamp > start.getTime();
    }
  }]);

  return EventUtils;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ab45d6c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/header.vue?vue&type=template&id=74110c50&lang=pug&
var headervue_type_template_id_74110c50_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__header"},[(!_vm.options.hideViewSelector)?_c('div',{staticClass:"vuecal__flex vuecal__menu",attrs:{"role":"tablist","aria-label":"Calendar views navigation"}},_vm._l((_vm.viewProps.views),function(v,id){return (v.enabled)?_c('button',{staticClass:"vuecal__view-btn",class:{ 'vuecal__view-btn--active': _vm.view.id === id, 'vuecal__view-btn--highlighted': _vm.highlightedControl === id },attrs:{"aria-label":((v.label) + " view")},on:{"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, id, _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, id, _vm.$data)},"click":function($event){return _vm.switchView(id, null, true)}}},[_vm._v(_vm._s(v.label))]):_vm._e()}),0):_vm._e(),(!_vm.options.hideTitleBar)?_c('div',{staticClass:"vuecal__title-bar"},[_c('button',{staticClass:"vuecal__arrow vuecal__arrow--prev",class:{ 'vuecal__arrow--highlighted': _vm.highlightedControl === 'previous' },attrs:{"aria-label":("Previous " + (_vm.view.id))},on:{"click":_vm.previous,"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, 'previous', _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, 'previous', _vm.$data)}}},[_vm._t("arrow-prev")],2),_c('div',{staticClass:"vuecal__flex vuecal__title",attrs:{"grow":""}},[_c(_vm.options.transitions ? 'transition' : 'div',{tag:"component",attrs:{"name":("slide-fade--" + _vm.transitionDirection)}},[_c(!!_vm.broaderView ? 'button' : 'span',{key:("" + (_vm.view.id) + (_vm.view.startDate.toString())),tag:"component",attrs:{"aria-label":!!_vm.broaderView ? ("Go to " + _vm.broaderView + " view") : false},on:{"click":_vm.switchToBroaderView}},[_vm._t("title")],2)],1)],1),(_vm.options.todayButton)?_c('button',{staticClass:"vuecal__today-btn",class:{ 'vuecal__today-btn--highlighted': _vm.highlightedControl === 'today' },attrs:{"aria-label":"Today"},on:{"click":_vm.goToToday,"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, 'today', _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, 'today', _vm.$data)}}},[_vm._t("today-button")],2):_vm._e(),_c('button',{staticClass:"vuecal__arrow vuecal__arrow--next",class:{ 'vuecal__arrow--highlighted': _vm.highlightedControl === 'next' },attrs:{"aria-label":("Next " + (_vm.view.id))},on:{"click":_vm.next,"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, 'next', _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, 'next', _vm.$data)}}},[_vm._t("arrow-next")],2)]):_vm._e(),(_vm.viewProps.weekDaysInHeader)?_c('weekdays-headings',{attrs:{"week-days":_vm.weekDays,"transition-direction":_vm.transitionDirection,"switch-to-narrower-view":_vm.switchToNarrowerView},scopedSlots:_vm._u([{key:"weekday-heading",fn:function(ref){
var heading = ref.heading;
var view = ref.view;
return [_vm._t("weekday-heading",null,{"heading":heading,"view":view})]}}],null,true)}):_vm._e(),_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection)}},[(_vm.view.id === 'day' && _vm.hasSplits && _vm.options.stickySplitLabels && !_vm.options.minSplitWidth)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers"},_vm._l((_vm.daySplits),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._v(_vm._s(split.label))])}),0):_vm._e()])],1)}
var headervue_type_template_id_74110c50_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/header.vue?vue&type=template&id=74110c50&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ab45d6c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/weekdays-headings.vue?vue&type=template&id=19815b9f&lang=pug&
var weekdays_headingsvue_type_template_id_19815b9f_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__flex vuecal__weekdays-headings"},_vm._l((_vm.headings),function(heading,i){return (!heading.hide)?_c('div',{key:i,staticClass:"vuecal__flex vuecal__heading",class:{ today: heading.today, clickable: _vm.cellHeadingsClickable },style:(_vm.weekdayCellStyles),on:{"click":function($event){_vm.view.id === 'week' && _vm.selectCell(heading.date, $event)},"dblclick":function($event){_vm.view.id === 'week' && _vm.vuecal.dblclickToNavigate && _vm.switchToNarrowerView()}}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.vuecal.transitions}},[_c('div',{key:_vm.vuecal.transitions ? (i + "-" + (heading.dayOfMonth)) : false,staticClass:"vuecal__flex",attrs:{"column":""}},[_c('div',{staticClass:"vuecal__flex weekday-label",attrs:{"grow":""}},[_vm._t("weekday-heading",[_c('span',{staticClass:"full"},[_vm._v(_vm._s(heading.full))]),_c('span',{staticClass:"small"},[_vm._v(_vm._s(heading.small))]),_c('span',{staticClass:"xsmall"},[_vm._v(_vm._s(heading.xsmall))]),(heading.dayOfMonth)?_c('span',[_vm._v(" "+_vm._s(heading.dayOfMonth))]):_vm._e()],{"heading":_vm.cleanupHeading(heading),"view":_vm.view})],2),(_vm.vuecal.hasSplits && _vm.vuecal.stickySplitLabels)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers",attrs:{"grow":""}},_vm._l((_vm.vuecal.daySplits),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._v(_vm._s(split.label))])}),0):_vm._e()])])],1):_vm._e()}),0)}
var weekdays_headingsvue_type_template_id_19815b9f_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=template&id=19815b9f&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var weekdays_headingsvue_type_script_lang_js_ = ({
  inject: ['vuecal', 'utils', 'view'],
  props: {
    transitionDirection: {
      type: String,
      default: 'right'
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    selectCell: function selectCell(date, DOMEvent) {
      if (date.getTime() !== this.view.selectedDate.getTime()) {
        this.view.selectedDate = date;
      }

      this.utils.cell.selectCell(false, date, DOMEvent);
    },
    cleanupHeading: function cleanupHeading(heading) {
      return Object(objectSpread2["a" /* default */])({
        label: heading.full,
        date: heading.date
      }, heading.today ? {
        today: heading.today
      } : {});
    }
  },
  computed: {
    headings: function headings() {
      var _this = this;

      if (!['month', 'week'].includes(this.view.id)) return [];
      var todayFound = false;
      var headings = this.weekDays.map(function (cell, i) {
        var date = _this.view.startDate.addDays(i);

        return Object(objectSpread2["a" /* default */])({
          hide: cell.hide,
          full: cell.label,
          // If defined in i18n file, weekDaysShort overrides default truncation of
          // week days when does not fit on screen or with small/xsmall options.
          small: cell.short || cell.label.substr(0, 3),
          xsmall: cell.short || cell.label.substr(0, 1)
        }, _this.view.id === 'week' ? {
          dayOfMonth: date.getDate(),
          date: date,
          today: !todayFound && date.isToday() && !todayFound++
        } : {});
      });
      return headings;
    },
    cellWidth: function cellWidth() {
      return 100 / (7 - this.weekDays.reduce(function (total, day) {
        return total + day.hide;
      }, 0));
    },
    weekdayCellStyles: function weekdayCellStyles() {
      return Object(objectSpread2["a" /* default */])({}, this.vuecal.hideWeekdays.length ? {
        width: "".concat(this.cellWidth, "%")
      } : {});
    },
    cellHeadingsClickable: function cellHeadingsClickable() {
      return this.view.id === 'week' && (this.vuecal.clickToNavigate || this.vuecal.dblclickToNavigate);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_weekdays_headingsvue_type_script_lang_js_ = (weekdays_headingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=style&index=0&lang=scss&
var weekdays_headingsvue_type_style_index_0_lang_scss_ = __webpack_require__("2029");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue






/* normalize component */

var component = normalizeComponent(
  vue_cal_weekdays_headingsvue_type_script_lang_js_,
  weekdays_headingsvue_type_template_id_19815b9f_lang_pug_render,
  weekdays_headingsvue_type_template_id_19815b9f_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var weekdays_headings = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/header.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var headervue_type_script_lang_js_ = ({
  inject: ['vuecal', 'previous', 'next', 'switchView', 'updateSelectedDate', 'modules', 'view'],
  components: {
    WeekdaysHeadings: weekdays_headings
  },
  props: {
    // Vuecal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    editEvents: {
      type: Object,
      required: true
    },
    hasSplits: {
      type: [Boolean, Number],
      default: false
    },
    daySplits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    viewProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      highlightedControl: null
    };
  },
  methods: {
    goToToday: function goToToday() {
      // Last midnight.
      this.updateSelectedDate(new Date(new Date().setHours(0, 0, 0, 0)));
    },
    switchToBroaderView: function switchToBroaderView() {
      this.transitionDirection = 'left';
      if (this.broaderView) this.switchView(this.broaderView);
    }
  },
  computed: {
    transitionDirection: {
      get: function get() {
        return this.vuecal.transitionDirection;
      },
      set: function set(direction) {
        this.vuecal.transitionDirection = direction;
      }
    },
    broaderView: function broaderView() {
      var _this = this;

      var views = Object.keys(this.viewProps.views);
      views = views.slice(0, views.indexOf(this.view.id));
      views.reverse();
      return views.find(function (v) {
        return _this.viewProps.views[v].enabled;
      });
    },
    // Drag & drop module.
    dnd: function dnd() {
      return this.modules.dnd;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/header.vue?vue&type=style&index=0&lang=scss&
var headervue_type_style_index_0_lang_scss_ = __webpack_require__("da8a");

// CONCATENATED MODULE: ./src/components/vue-cal/header.vue






/* normalize component */

var header_component = normalizeComponent(
  vue_cal_headervue_type_script_lang_js_,
  headervue_type_template_id_74110c50_lang_pug_render,
  headervue_type_template_id_74110c50_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ab45d6c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=template&id=436fa088&lang=pug&
var cellvue_type_template_id_436fa088_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"vuecal__cell",class:_vm.cssClasses,style:(_vm.cellStyles),attrs:{"name":("slide-fade--" + _vm.transitionDirection),"tag":"div","appear":_vm.options.transitions}},[_vm._l(((_vm.splitsCount ? _vm.splits : 1)),function(split,i){return _c('div',{key:_vm.options.transitions ? ((_vm.view.id) + "-" + (_vm.data.content) + "-" + i) : i,staticClass:"vuecal__flex vuecal__cell-content",class:_vm.splitsCount && ("vuecal__cell-split " + (split.class) + (_vm.highlightedSplit === split.id ? ' vuecal__cell-split--highlighted' : '')),attrs:{"data-split":_vm.splitsCount ? split.id : false,"column":"","tabindex":"0","aria-label":_vm.data.content},on:{"focus":function($event){return _vm.onCellFocus($event)},"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onCellkeyPressEnter($event)},"touchstart":function($event){!_vm.isDisabled && _vm.onCellTouchStart($event, _vm.splitsCount ? split.id : null)},"mousedown":function($event){!_vm.isDisabled && _vm.onCellMouseDown($event, _vm.splitsCount ? split.id : null)},"click":function($event){!_vm.isDisabled && _vm.selectCell($event)},"dblclick":function($event){!_vm.isDisabled && _vm.onCellDblClick($event)},"contextmenu":function($event){!_vm.isDisabled && _vm.options.cellContextmenu && _vm.onCellContextMenu($event)},"dragenter":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragEnter($event, _vm.$data, _vm.data.startDate)},"dragover":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragOver($event, _vm.$data, _vm.data.startDate, _vm.splitsCount ? split.id : null)},"dragleave":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragLeave($event, _vm.$data, _vm.data.startDate)},"drop":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragDrop($event, _vm.$data, _vm.data.startDate, _vm.splitsCount ? split.id : null)}}},[(_vm.isWeekOrDayView && !_vm.allDay && _vm.specialHours.from !== null)?_c('div',{staticClass:"vuecal__special-hours",class:("vuecal__special-hours--day" + (_vm.specialHours.day) + " " + (_vm.specialHours.class)),style:(("height: " + (_vm.specialHours.height) + "px;top: " + (_vm.specialHours.top) + "px"))}):_vm._e(),_vm._t("cell-content",null,{"events":_vm.events,"selectCell":function ($event) { return _vm.selectCell($event, true); },"split":_vm.splitsCount ? split : false}),(_vm.eventsCount && (_vm.isWeekOrDayView || (_vm.view.id === 'month' && _vm.options.eventsOnMonthView)))?_c('div',{staticClass:"vuecal__cell-events"},_vm._l(((_vm.splitsCount ? split.events : _vm.events)),function(event,j){return _c('event',{key:j,attrs:{"cell-formatted-date":_vm.data.formattedDate,"event":event,"all-day":_vm.allDay,"cell-events":_vm.splitsCount ? split.events : _vm.events,"overlaps":((_vm.splitsCount ? split.overlaps[event._eid] : _vm.cellOverlaps[event._eid]) || []).overlaps,"event-position":((_vm.splitsCount ? split.overlaps[event._eid] : _vm.cellOverlaps[event._eid]) || []).position,"overlaps-streak":_vm.splitsCount ? split.overlapsStreak : _vm.cellOverlapsStreak},scopedSlots:_vm._u([{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",null,{"view":view,"event":event})]}}],null,true)})}),1):_vm._e()],2)}),(_vm.timelineVisible)?_c('div',{key:_vm.options.transitions ? ((_vm.view.id) + "-now-line") : 'now-line',staticClass:"vuecal__now-line",style:(("top: " + _vm.todaysTimePosition + "px")),attrs:{"title":_vm.vuecal.now.formatTime()}}):_vm._e()],2)}
var cellvue_type_template_id_436fa088_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=template&id=436fa088&lang=pug&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("3835");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ab45d6c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/event.vue?vue&type=template&id=0402d1a9&lang=pug&
var eventvue_type_template_id_0402d1a9_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__event",class:_vm.eventClasses,style:(_vm.eventStyles),attrs:{"tabindex":"0","draggable":_vm.draggable},on:{"focus":_vm.focusEvent,"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();return _vm.onClick($event)},"mouseenter":_vm.onMouseEnter,"mouseleave":_vm.onMouseLeave,"touchstart":function($event){$event.stopPropagation();return _vm.onTouchStart($event)},"mousedown":function($event){_vm.onMouseDown($event) /* Don't stop mousedown propagation & trigger cell mousedown */},"click":_vm.onClick,"dblclick":_vm.onDblClick,"dragstart":function($event){_vm.draggable && _vm.onDragStart($event)},"dragend":function($event){_vm.draggable && _vm.onDragEnd()}}},[(_vm.vuecal.editEvents.delete && _vm.event.deletable)?_c('div',{staticClass:"vuecal__event-delete",on:{"click":function($event){$event.stopPropagation();return _vm.deleteEvent($event)},"touchstart":function($event){$event.stopPropagation();return _vm.touchDeleteEvent($event)}}},[_vm._v(_vm._s(_vm.vuecal.texts.deleteEvent))]):_vm._e(),_vm._t("event",null,{"event":_vm.event,"view":_vm.view.id}),(_vm.resizable)?_c('div',{staticClass:"vuecal__event-resize-handle",attrs:{"contenteditable":"false"},on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onResizeHandleMouseDown($event)},"touchstart":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onResizeHandleMouseDown($event)}}}):_vm._e()],2)}
var eventvue_type_template_id_0402d1a9_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/event.vue?vue&type=template&id=0402d1a9&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/event.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var eventvue_type_script_lang_js_ = ({
  inject: ['vuecal', 'utils', 'modules', 'view', 'domEvents'],
  props: {
    cellFormattedDate: {
      type: String,
      default: ''
    },
    event: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    cellEvents: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlaps: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    eventPosition: {
      type: Number,
      default: 0
    },
    overlapsStreak: {
      type: Number,
      default: 0
    },
    allDay: {
      type: Boolean,
      default: false
    } // Is the event displayed in the all-day bar.

  },
  methods: {
    // On an event.
    onMouseDown: function onMouseDown(e) {
      var _this = this;

      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var _this$domEvents = this.domEvents,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent,
          focusAnEvent = _this$domEvents.focusAnEvent,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          dragAnEvent = _this$domEvents.dragAnEvent; // If the delete button is already out and event is on focus then delete event.

      if (focusAnEvent._eid === this.event._eid && clickHoldAnEvent._eid === this.event._eid) {
        return true;
      } // Focus the clicked event.


      this.focusEvent();
      clickHoldAnEvent._eid = null; // Reinit click hold on each click.
      // Show event delete button.

      if (this.vuecal.editEvents.delete && this.event.deletable) {
        clickHoldAnEvent.timeoutId = setTimeout(function () {
          if (!resizeAnEvent._eid && !dragAnEvent._eid) {
            clickHoldAnEvent._eid = _this.event._eid;
            _this.event.deleting = true;
          }
        }, clickHoldAnEvent.timeout);
      }
    },
    onMouseEnter: function onMouseEnter(e) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-enter', this.event);
    },
    onMouseLeave: function onMouseLeave(e) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-leave', this.event);
    },
    onTouchStart: function onTouchStart(e) {
      // Prevent the text selection prompt on touch device if editable events - unless on title.
      // So the delete button will show up nicely without the text prompt.
      if (this.vuecal.editEvents.drag && !e.target.className.includes('vuecal__event-title')) {
        e.returnValue = false;
      }

      this.onMouseDown(e, true);
    },
    onClick: function onClick(e) {
      if (typeof this.vuecal.onEventClick === 'function') return this.vuecal.onEventClick(this.event, e);
    },
    onDblClick: function onDblClick(e) {
      if (typeof this.vuecal.onEventDblclick === 'function') return this.vuecal.onEventDblclick(this.event, e);
    },
    onDragStart: function onDragStart(e) {
      this.dnd && this.dnd.eventDragStart(e, this.event);
    },
    onDragEnd: function onDragEnd() {
      this.dnd && this.dnd.eventDragEnd(this.event);
    },
    onResizeHandleMouseDown: function onResizeHandleMouseDown() {
      this.domEvents.dragAnEvent._eid = null;
      this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
        _eid: this.event._eid,
        start: (this.segment || this.event).start,
        split: this.event.split || null,
        segment: !!this.segment && this.segment.start,
        originalEndDate: new Date((this.segment || this.event).endDate),
        originalEndTimeMinutes: this.event.endTimeMinutes
      });
      this.event.resizing = true;
    },
    deleteEvent: function deleteEvent() {
      var touch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      this.utils.event.deleteAnEvent(this.event);
    },
    touchDeleteEvent: function touchDeleteEvent(event) {
      this.deleteEvent(true);
    },
    cancelDeleteEvent: function cancelDeleteEvent() {
      this.event.deleting = false;
    },
    focusEvent: function focusEvent() {
      var focusAnEvent = this.domEvents.focusAnEvent;
      var onFocus = focusAnEvent._eid;
      if (onFocus === this.event._eid) return;
      this.vuecal.emitWithEvent('event-focus', this.event); // Unfocus previous event if any.

      if (onFocus && onFocus !== this.event._eid) {
        var event = this.view.events.find(function (e) {
          return e._eid === focusAnEvent._eid;
        });
        if (event) event.focused = false;
      } // Cancel delete on previous event if any.


      this.vuecal.cancelDelete();
      focusAnEvent._eid = this.event._eid;
      this.event.focused = true;
    }
  },
  computed: {
    // Don't rely on global variables otherwise whenever it would change all the events would be redrawn.
    eventStyles: function eventStyles() {
      if (this.event.allDay || !this.vuecal.time || !this.event.endTimeMinutes || this.view.id === 'month' || this.allDay) return {};
      var width = 100 / Math.min(this.overlaps.length + 1, this.overlapsStreak);
      var left = 100 / (this.overlaps.length + 1) * this.eventPosition;

      if (this.vuecal.minEventWidth && width < this.vuecal.minEventWidth) {
        width = this.vuecal.minEventWidth;
        left = (100 - this.vuecal.minEventWidth) / this.overlaps.length * this.eventPosition;
      }

      return {
        top: "".concat((this.segment || this.event).top, "px"),
        height: "".concat((this.segment || this.event).height, "px"),
        width: "".concat(width, "%"),
        left: this.event.left && "".concat(this.event.left, "px") || "".concat(left, "%")
      };
    },
    // Don't rely on global variables otherwise whenever it would change all the events would be redrawn.
    eventClasses: function eventClasses() {
      var _ref2;

      var _ref = this.segment || {},
          isFirstDay = _ref.isFirstDay,
          isLastDay = _ref.isLastDay;

      return _ref2 = {}, Object(defineProperty["a" /* default */])(_ref2, this.event.class, true), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--focus', this.event.focused), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--resizing', this.event.resizing), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--background', this.event.background), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--deletable', this.event.deleting), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--all-day', this.event.allDay), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--dragging', !this.event.draggingStatic && this.event.dragging), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--static', this.event.dragging && this.event.draggingStatic), Object(defineProperty["a" /* default */])(_ref2, 'vuecal__event--multiple-days', !!this.segment), Object(defineProperty["a" /* default */])(_ref2, 'event-start', this.segment && isFirstDay && !isLastDay), Object(defineProperty["a" /* default */])(_ref2, 'event-middle', this.segment && !isFirstDay && !isLastDay), Object(defineProperty["a" /* default */])(_ref2, 'event-end', this.segment && isLastDay && !isFirstDay), _ref2;
    },
    // When multiple-day events, a segment is a portion of event spanning on 1 day.
    segment: function segment() {
      return this.event.segments && this.event.segments[this.cellFormattedDate] || null;
    },
    draggable: function draggable() {
      var _this$event = this.event,
          draggable = _this$event.draggable,
          background = _this$event.background,
          daysCount = _this$event.daysCount;
      return this.vuecal.editEvents.drag && draggable && !background && daysCount === 1;
    },
    resizable: function resizable() {
      var _this$vuecal = this.vuecal,
          editEvents = _this$vuecal.editEvents,
          time = _this$vuecal.time;
      return editEvents.resize && this.event.resizable && time && !this.allDay && (!this.segment || this.segment && this.segment.isLastDay) && this.view.id !== 'month';
    },
    // Drag & drop module.
    dnd: function dnd() {
      return this.modules.dnd;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/event.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_eventvue_type_script_lang_js_ = (eventvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/event.vue?vue&type=style&index=0&lang=scss&
var eventvue_type_style_index_0_lang_scss_ = __webpack_require__("9ff5");

// CONCATENATED MODULE: ./src/components/vue-cal/event.vue






/* normalize component */

var event_component = normalizeComponent(
  vue_cal_eventvue_type_script_lang_js_,
  eventvue_type_template_id_0402d1a9_lang_pug_render,
  eventvue_type_template_id_0402d1a9_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_event = (event_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=script&lang=js&














//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  inject: ['vuecal', 'utils', 'modules', 'view', 'domEvents'],
  components: {
    Event: vue_cal_event
  },
  props: {
    // Vue-cal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    editEvents: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    cellSplits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    minTimestamp: {
      type: [Number, null],
      default: null
    },
    maxTimestamp: {
      type: [Number, null],
      default: null
    },
    cellWidth: {
      type: [Number, Boolean],
      default: false
    },
    allDay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      cellOverlaps: {},
      cellOverlapsStreak: 1,
      // Largest amount of simultaneous events in cell.
      // On mouse down, save the time at cursor so it can be reused on cell focus event
      // where there is no cursor coords.
      timeAtCursor: null,
      highlighted: false,
      // On event drag over.
      highlightedSplit: null
    };
  },
  methods: {
    getSplitAtCursor: function getSplitAtCursor(DOMEvent) {
      var split = DOMEvent.target.classList.contains('vuecal__cell-split') && DOMEvent.target || this.vuecal.findAncestor(DOMEvent.target, 'vuecal__cell-split');
      return split && split.attributes['data-split'].value || null;
    },
    checkCellOverlappingEvents: function checkCellOverlappingEvents() {
      // If splits, checkCellOverlappingEvents() is called from within computed splits.
      if (this.options.time && this.eventsCount && !this.splitsCount) {
        if (this.eventsCount === 1) {
          this.cellOverlaps = [];
          this.cellOverlapsStreak = 1;
        } // If only 1 event remains re-init the overlaps.
        else {
            var _this$utils$event$che = this.utils.event.checkCellOverlappingEvents(this.events, this.options);

            var _this$utils$event$che2 = Object(slicedToArray["a" /* default */])(_this$utils$event$che, 2);

            this.cellOverlaps = _this$utils$event$che2[0];
            this.cellOverlapsStreak = _this$utils$event$che2[1];
          }
      }
    },
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return this.vuecal.isDOMElementAnEvent(el);
    },
    selectCell: function selectCell(DOMEvent) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.isSelected) this.onCellFocus(DOMEvent); // If splitting days, also return the clicked split on cell click when emitting event.

      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.utils.cell.selectCell(force, this.timeAtCursor, split);
      this.timeAtCursor = null;
    },
    onCellkeyPressEnter: function onCellkeyPressEnter(DOMEvent) {
      if (!this.isSelected) this.onCellFocus(DOMEvent); // If splitting days, also return the clicked split on cell keypress when emitting event.

      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.utils.cell.keyPressEnterCell(this.timeAtCursor, split);
      this.timeAtCursor = null;
    },

    /**
     * On cell focus, from tab key or from click, emit the cell-focus event with
     * the date of the cell start when focusing from tab or the date & time at cursor
     * if click/touch.
     */
    onCellFocus: function onCellFocus(DOMEvent) {
      if (!this.isSelected) {
        this.isSelected = this.data.startDate; // If splitting days, also return the clicked split on cell focus when emitting event.

        var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null; // Cell-focus event returns the cell start date (at midnight) if triggered from tab key,
        // or cursor coords time if clicked.

        var date = this.timeAtCursor || this.data.startDate;
        this.vuecal.$emit('cell-focus', split ? {
          date: date,
          split: split
        } : date);
      }
    },
    onCellMouseDown: function onCellMouseDown(DOMEvent) {
      var _this = this;

      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var touch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var _this$domEvents = this.domEvents,
          clickHoldACell = _this$domEvents.clickHoldACell,
          focusAnEvent = _this$domEvents.focusAnEvent; // Reinit the click trigger on each mousedown.
      // In some cases we explicitly set this flag to prevent the click event to trigger,
      // and cancel event creation.

      this.domEvents.cancelClickEventCreation = false;
      this.timeAtCursor = new Date(this.data.startDate);
      this.timeAtCursor.setMinutes(this.vuecal.minutesAtCursor(DOMEvent).minutes);
      var mouseDownOnEvent = this.isDOMElementAnEvent(DOMEvent.target); // Unfocus an event if any is focused and clicking on cell outside of an event.

      if (!mouseDownOnEvent && focusAnEvent._eid) {
        (this.view.events.find(function (e) {
          return e._eid === focusAnEvent._eid;
        }) || {}).focused = false;
      } // If the cellClickHold option is true and not mousedown on an event, click & hold to create an event.


      if (this.editEvents.create && this.options.cellClickHold && !mouseDownOnEvent && ['month', 'week', 'day'].includes(this.view.id)) {
        clickHoldACell.cellId = "".concat(this.vuecal._uid, "_").concat(this.data.formattedDate);
        clickHoldACell.split = split;
        clickHoldACell.timeoutId = setTimeout(function () {
          if (clickHoldACell.cellId && !_this.domEvents.cancelClickEventCreation) {
            _this.utils.event.createAnEvent(_this.timeAtCursor, null, clickHoldACell.split ? {
              split: clickHoldACell.split
            } : {});
          }
        }, clickHoldACell.timeout);
      }
    },
    onCellTouchStart: function onCellTouchStart(DOMEvent) {
      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // If not mousedown on an event.
      this.onCellMouseDown(DOMEvent, split, true);
    },
    onCellDblClick: function onCellDblClick(DOMEvent) {
      var date = new Date(this.data.startDate);
      date.setMinutes(this.vuecal.minutesAtCursor(DOMEvent).minutes); // If splitting days, also return the clicked split on cell dblclick when emitting event.

      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.vuecal.$emit('cell-dblclick', split ? {
        date: date,
        split: split
      } : date);
      if (this.options.dblclickToNavigate) this.vuecal.switchToNarrowerView();
    },
    onCellContextMenu: function onCellContextMenu(DOMEvent) {
      DOMEvent.stopPropagation();
      DOMEvent.preventDefault();
      var date = new Date(this.data.startDate);

      var _this$vuecal$minutesA = this.vuecal.minutesAtCursor(DOMEvent),
          cursorCoords = _this$vuecal$minutesA.cursorCoords,
          minutes = _this$vuecal$minutesA.minutes;

      date.setMinutes(minutes); // If splitting days, also return the clicked split on cell contextmenu when emitting event.

      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.vuecal.$emit('cell-contextmenu', Object(objectSpread2["a" /* default */])({
        date: date
      }, cursorCoords, {}, split || {}));
    }
  },
  computed: {
    // Drag & drop module.
    dnd: function dnd() {
      return this.modules.dnd;
    },
    nowInMinutes: function nowInMinutes() {
      return this.utils.date.dateToMinutes(this.vuecal.now);
    },
    isBeforeMinDate: function isBeforeMinDate() {
      return this.minTimestamp !== null && this.minTimestamp > this.data.endDate.getTime();
    },
    isAfterMaxDate: function isAfterMaxDate() {
      return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime();
    },
    // Is the current cell disabled or not.
    isDisabled: function isDisabled() {
      return this.isBeforeMinDate || this.isAfterMaxDate;
    },
    // Is the current cell selected or not.
    isSelected: {
      get: function get() {
        var selected = false;
        var selectedDate = this.view.selectedDate;

        if (this.view.id === 'years') {
          selected = selectedDate.getFullYear() === this.data.startDate.getFullYear();
        } else if (this.view.id === 'year') {
          selected = selectedDate.getFullYear() === this.data.startDate.getFullYear() && selectedDate.getMonth() === this.data.startDate.getMonth();
        } else selected = selectedDate.getTime() === this.data.startDate.getTime();

        return selected;
      },
      set: function set(date) {
        this.view.selectedDate = date;
      }
    },
    // Cache result for performance.
    isWeekOrDayView: function isWeekOrDayView() {
      return ['week', 'day'].includes(this.view.id);
    },
    transitionDirection: function transitionDirection() {
      return this.vuecal.transitionDirection;
    },
    specialHours: function specialHours() {
      var _this$data$specialHou = this.data.specialHours,
          from = _this$data$specialHou.from,
          to = _this$data$specialHou.to;
      from = Math.max(from, this.options.timeFrom);
      to = Math.min(to, this.options.timeTo);
      return Object(objectSpread2["a" /* default */])({}, this.data.specialHours, {
        height: (to - from) * this.timeScale,
        top: (from - this.options.timeFrom) * this.timeScale
      });
    },
    events: function events() {
      var _this2 = this;

      var _this$data = this.data,
          cellStart = _this$data.startDate,
          cellEnd = _this$data.endDate;
      var events = []; // Calculate events on month/week/day views or years/year if eventsCountOnYearView.

      if (!(['years', 'year'].includes(this.view.id) && !this.options.eventsCountOnYearView)) {
        // Means that when vuecal.view.events changes all the cells will be looking up new value. :/
        // Also clone array to prevent modifying original.
        events = this.view.events.slice(0);

        if (this.view.id === 'month') {
          var _events;

          (_events = events).push.apply(_events, _toConsumableArray(this.view.outOfScopeEvents));
        } // Only keep events in cell time range.


        events = events.filter(function (e) {
          return _this2.utils.event.eventInRange(e, cellStart, cellEnd);
        });
        if (this.options.showAllDayEvents && this.view.id !== 'month') events = events.filter(function (e) {
          return !!e.allDay === _this2.allDay;
        }); // From events in view, filter the ones that are out of `time-from`-`time-to` range in this cell.

        if (this.options.time && this.isWeekOrDayView && !this.allDay) {
          var _this$options = this.options,
              timeFrom = _this$options.timeFrom,
              timeTo = _this$options.timeTo;
          events = events.filter(function (e) {
            var segment = e.daysCount > 1 && e.segments[_this2.data.formattedDate] || {};
            var singleDayInRange = e.daysCount === 1 && e.startTimeMinutes < timeTo && e.endTimeMinutes > timeFrom;
            var multipleDayInRange = e.daysCount > 1 && segment.startTimeMinutes < timeTo && segment.endTimeMinutes > timeFrom;
            var recurrMultDayInRange = false; // e.daysCount > 1 && e.repeat && recurringEventInRange(e, cellStart, cellEnd)

            return e.allDay || singleDayInRange || multipleDayInRange || recurrMultDayInRange;
          });
        } // Position events with time in the timeline when there is a timeline and not in allDay slot.


        if (this.options.time && this.isWeekOrDayView && !(this.options.showAllDayEvents && this.allDay)) {
          events.forEach(function (event) {
            // all-day events are positionned via css: top-0 & bottom-0.
            // So they behave as background events if not in allDay slot.
            // @todo: Do we want this or not?
            var eventToUpdate = event.segments && event.segments[_this2.data.formattedDate] || event;
            if ((event.startTimeMinutes || event.endTimeMinutes) && !event.allDay) _this2.utils.event.updateEventPosition(eventToUpdate);
          }); // Sort events in chronological order.

          events.sort(function (a, b) {
            return a.start < b.start ? -1 : 1;
          });
        } // If splits, checkCellOverlappingEvents() is called from within computed splits.


        if (!this.cellSplits.length) this.$nextTick(this.checkCellOverlappingEvents);
      }

      return events;
    },
    eventsCount: function eventsCount() {
      return this.events.length;
    },
    splits: function splits() {
      var _this3 = this;

      return this.cellSplits.map(function (item, i) {
        var events = _this3.events.filter(function (e) {
          return e.split === item.id;
        });

        var _this3$utils$event$ch = _this3.utils.event.checkCellOverlappingEvents(events.filter(function (e) {
          return !e.background && !e.allDay;
        }), _this3.options),
            _this3$utils$event$ch2 = Object(slicedToArray["a" /* default */])(_this3$utils$event$ch, 2),
            overlaps = _this3$utils$event$ch2[0],
            streak = _this3$utils$event$ch2[1];

        return Object(objectSpread2["a" /* default */])({}, item, {
          overlaps: overlaps,
          overlapsStreak: streak,
          events: events
        });
      });
    },
    splitsCount: function splitsCount() {
      return this.splits.length;
    },
    cssClasses: function cssClasses() {
      return {
        'vuecal__cell--current': this.data.current,
        // E.g. Current year in years view.
        'vuecal__cell--today': this.data.today,
        'vuecal__cell--out-of-scope': this.data.outOfScope,
        'vuecal__cell--before-min': this.isDisabled && this.isBeforeMinDate,
        'vuecal__cell--after-max': this.isDisabled && this.isAfterMaxDate,
        'vuecal__cell--disabled': this.isDisabled,
        'vuecal__cell--selected': this.isSelected,
        'vuecal__cell--highlighted': this.highlighted,
        'vuecal__cell--has-splits': this.splitsCount,
        'vuecal__cell--has-events': this.eventsCount
      };
    },
    cellStyles: function cellStyles() {
      return Object(objectSpread2["a" /* default */])({}, this.cellWidth ? {
        width: "".concat(this.cellWidth, "%")
      } : {});
    },
    timelineVisible: function timelineVisible() {
      if (!this.data.today || !this.options.time || this.allDay || !this.isWeekOrDayView) return;
      return this.nowInMinutes <= this.options.timeTo;
    },
    todaysTimePosition: function todaysTimePosition() {
      // Skip the Maths if not relevant.
      if (!this.data.today || !this.options.time) return;
      var minutesFromTop = this.nowInMinutes - this.options.timeFrom;
      return Math.round(minutesFromTop * this.timeScale);
    },
    timeScale: function timeScale() {
      return this.options.timeCellHeight / this.options.timeStep;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/cell.vue?vue&type=style&index=0&lang=scss&
var cellvue_type_style_index_0_lang_scss_ = __webpack_require__("d011");

// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue






/* normalize component */

var cell_component = normalizeComponent(
  vue_cal_cellvue_type_script_lang_js_,
  cellvue_type_template_id_436fa088_lang_pug_render,
  cellvue_type_template_id_436fa088_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_cell = (cell_component.exports);
// EXTERNAL MODULE: ./src/components/vue-cal/styles.scss
var styles = __webpack_require__("00aa");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=script&lang=js&
























//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var vue_calvue_type_script_lang_js_dateUtils = new date_DateUtils();
var vue_calvue_type_script_lang_js_minutesInADay = 24 * 60; // Don't do the maths every time.

var textsDefaults = {
  weekDays: Array(7).fill(''),
  weekDaysShort: [],
  months: Array(12).fill(''),
  years: '',
  year: '',
  month: '',
  week: '',
  day: '',
  today: '',
  noEvent: '',
  allDay: '',
  deleteEvent: '',
  createEvent: '',
  dateFormat: 'dddd MMMM D, YYYY',
  am: 'am',
  pm: 'pm'
};
/* harmony default export */ var vue_calvue_type_script_lang_js_ = ({
  name: 'vue-cal',
  components: {
    'vuecal-cell': vue_cal_cell,
    'vuecal-header': header,
    WeekdaysHeadings: weekdays_headings
  },
  // By Vue design, passing props loses the reactivity unless it's a method or reactive OBJECT.
  provide: function provide() {
    return {
      vuecal: this,
      utils: this.utils,
      modules: this.modules,
      // Methods.
      previous: this.previous,
      next: this.next,
      switchView: this.switchView,
      updateSelectedDate: this.updateSelectedDate,
      // Objects.
      view: this.view,
      domEvents: this.domEvents
    };
  },
  props: {
    cellClickHold: {
      type: Boolean,
      default: true
    },
    cellContextmenu: {
      type: Boolean,
      default: false
    },
    clickToNavigate: {
      type: Boolean,
      default: false
    },
    dblclickToNavigate: {
      type: Boolean,
      default: true
    },
    defaultView: {
      type: String,
      default: 'week'
    },
    disableViews: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    editableEvents: {
      type: [Boolean, Object],
      default: false
    },
    events: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    eventsCountOnYearView: {
      type: Boolean,
      default: false
    },
    eventsOnMonthView: {
      type: [Boolean, String],
      default: false
    },
    hideBody: {
      type: Boolean,
      default: false
    },
    hideTitleBar: {
      type: Boolean,
      default: false
    },
    hideViewSelector: {
      type: Boolean,
      default: false
    },
    hideWeekdays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hideWeekends: {
      type: Boolean,
      default: false
    },
    locale: {
      type: String,
      default: 'en'
    },
    maxDate: {
      type: [String, Date],
      default: ''
    },
    minCellWidth: {
      type: Number,
      default: 0
    },
    minDate: {
      type: [String, Date],
      default: ''
    },
    minEventWidth: {
      type: Number,
      default: 0
    },
    minSplitWidth: {
      type: Number,
      default: 0
    },
    onEventClick: {
      type: [Function, null],
      default: null
    },
    onEventCreate: {
      type: [Function, null],
      default: null
    },
    onEventDblclick: {
      type: [Function, null],
      default: null
    },
    overlapsPerTimeStep: {
      type: Boolean,
      default: false
    },
    resizeX: {
      type: Boolean,
      default: false
    },
    selectedDate: {
      type: [String, Date],
      default: ''
    },
    showAllDayEvents: {
      type: [Boolean, String],
      default: false
    },
    showWeekNumbers: {
      type: [Boolean, String],
      default: false
    },
    snapToTime: {
      type: Number,
      default: 0
    },
    small: {
      type: Boolean,
      default: false
    },
    specialHours: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    splitDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startWeekOnSunday: {
      type: Boolean,
      default: false
    },
    stickySplitLabels: {
      type: Boolean,
      default: false
    },
    time: {
      type: Boolean,
      default: true
    },
    timeCellHeight: {
      type: Number,
      default: 40
    },
    // In pixels.
    timeFormat: {
      type: String,
      default: ''
    },
    timeFrom: {
      type: Number,
      default: 0
    },
    // In minutes.
    timeStep: {
      type: Number,
      default: 60
    },
    // In minutes.
    timeTo: {
      type: Number,
      default: vue_calvue_type_script_lang_js_minutesInADay
    },
    // In minutes.
    todayButton: {
      type: Boolean,
      default: false
    },
    transitions: {
      type: Boolean,
      default: true
    },
    twelveHour: {
      type: Boolean,
      default: false
    },
    watchRealTime: {
      type: Boolean,
      default: false
    },
    // Expensive, so only trigger on demand.
    xsmall: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      ready: false,
      // Is vue-cal ready.
      // Make texts reactive before a locale is loaded.
      texts: Object(objectSpread2["a" /* default */])({}, textsDefaults),
      utils: {
        date: vue_calvue_type_script_lang_js_dateUtils,
        cell: null,
        event: null
      },
      modules: {
        dnd: null
      },
      // At any time this object will be filled with current view, visible events and selected date.
      view: {
        id: '',
        title: '',
        startDate: null,
        endDate: null,
        firstCellDate: null,
        lastCellDate: null,
        selectedDate: null,
        // All the events are stored in the mutableEvents array, but subset of visible ones are passed
        // Into the current view for fast lookup and manipulation.
        events: []
      },
      eventIdIncrement: 1,
      // Internal unique id.
      // Preset at now date on load, but updated every minute if watchRealTime,
      // or updated at least on each cells rerender, in order to keep Today's date accurate.
      now: new Date(),
      // Useful when watchRealTime = true, 2 timeouts: 1 to snap to round minutes, then 1 every minute.
      timeTickerIds: [null, null],
      // All the possible events/cells interractions:
      // e.g. focus, click, click & hold, resize, drag & drop (coming).
      domEvents: {
        resizeAnEvent: {
          _eid: null,
          // Only one at a time.
          start: null,
          split: null,
          segment: null,
          originalEndTimeMinutes: 0,
          originalEndDate: null,
          endDate: null,
          startCell: null,
          endCell: null
        },
        dragAnEvent: {
          // Only one at a time, only needed for vuecal dragging-event class.
          _eid: null
        },
        focusAnEvent: {
          _eid: null // Only one at a time.

        },
        clickHoldAnEvent: {
          _eid: null,
          // Only one at a time.
          timeout: 1200,
          // Hold for 1.2s to delete an event.
          timeoutId: null
        },
        dblTapACell: {
          taps: 0,
          timeout: 500 // Allowed latency between first and second click.

        },
        clickHoldACell: {
          cellId: null,
          split: null,
          timeout: 1200,
          // Hold for 1.2s to create an event.
          timeoutId: null
        },
        // A single click can trigger event creation if the user decides so.
        // But prevent this to happen on click & hold, on event click and on resize event.
        cancelClickEventCreation: false
      },
      // The events source of truth.
      // An array of mutable events updated each time given external events array changes.
      mutableEvents: [],
      // Transition when switching view. left when going toward the past, right when going toward future.
      transitionDirection: 'right'
    };
  },
  methods: {
    /**
     * Only import locale on demand to keep a small library weight.
     *
     * @param {String} locale the language user whishes to have on vue-cal
     */
    loadLocale: function loadLocale(locale) {
      var _this = this;

      if (this.locale === 'en') this.texts = Object.assign({}, textsDefaults, __webpack_require__("7213"));else {
        __webpack_require__("1790")("./".concat(locale)).then(function (response) {
          _this.texts = Object.assign({}, textsDefaults, response.default);

          _this.utils.date.updateDateTexts(_this.texts);
        });
      }
    },

    /**
     * Only import drag and drop module on demand to keep a small library weight.
     */
    loadDragAndDrop: function loadDragAndDrop() {
      var _this2 = this;

      __webpack_require__.e(/* import() | drag-and-drop */ 37).then(__webpack_require__.bind(null, "7051")).then(function (response) {
        var DragAndDrop = response.DragAndDrop;
        _this2.modules.dnd = new DragAndDrop(_this2);
      }).catch(function () {
        return console.warn('Vue Cal: Missing drag & drop module.');
      });
    },

    /**
     * On click/dblclick of a cell go to a narrower view if available.
     * E.g. Click on month cell takes you to week view if not hidden, otherwise on day view if not hidden.
     *
     * @param {String | Date} date A starting date for the view, if none, fallbacks to the selected date,
     *                             If also empty fallbacks to the current view start date.
     */
    switchToNarrowerView: function switchToNarrowerView() {
      var _this3 = this;

      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.transitionDirection = 'right';
      var views = Object.keys(this.views);
      views = views.slice(views.indexOf(this.view.id) + 1);
      var view = views.find(function (v) {
        return _this3.views[v].enabled;
      });
      if (view) this.switchView(view, date);
    },

    /**
     * Switches to the specified view on view selector click, or programmatically form external call (via $refs).
     * If a date is given, it will be selected and if the view does not contain it, it will go to that date.
     *
     * @param {String} view the view to go to. Among `years`, `year`, `month`, `week`, `day`.
     * @param {String | Date} date A starting date for the view, if none, fallbacks to the selected date,
     *                             If also empty fallbacks to the current view start date.
     * @param {Boolean} fromViewSelector to know if the caller is the built-in view selector.
     */
    switchView: function switchView(view) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fromViewSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.transitions && fromViewSelector) {
        var views = Object.keys(this.views);
        this.transitionDirection = views.indexOf(this.view.id) > views.indexOf(view) ? 'left' : 'right';
      }

      this.view.events = [];
      this.view.id = view;
      this.view.firstCellDate = null; // For month view, if filling cells before 1st of month.

      this.view.lastCellDate = null; // For month view, if filling cells after current month.

      if (!date) {
        date = this.view.selectedDate || this.view.startDate;
        if (view === 'week') date = this.utils.date.getPreviousFirstDayOfWeek(date, this.startWeekOnSunday);
      }

      switch (view) {
        case 'years':
          {
            // Always fill first cell with a multiple of 25 years, E.g. year 2000, or 2025.
            this.view.startDate = new Date(Math.floor(date.getFullYear() / 25) * 25 || 2000, 0, 1);
            this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.

            break;
          }

        case 'year':
          {
            this.view.startDate = new Date(date.getFullYear(), 0, 1);
            this.view.endDate = new Date(date.getFullYear() + 1, 0, 1);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.

            break;
          }

        case 'month':
          {
            this.view.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
            this.view.endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.
            // If the first day of the month is not a FirstDayOfWeek (Monday or Sunday), prepend missing days to the days array.

            var startDate = new Date(this.view.startDate);

            if (startDate.getDay() !== (this.startWeekOnSunday ? 0 : 1)) {
              startDate = this.utils.date.getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday);
            } // Used in viewCells computed array & returned in emitted events.


            this.view.firstCellDate = startDate;
            this.view.lastCellDate = startDate.addDays(41);
            this.view.lastCellDate.setHours(23, 59, 59, 0);

            if (this.hideWeekends) {
              // Remove first weekend from firstCellDate if hide-weekends.
              if ([0, 6].includes(this.view.firstCellDate.getDay())) {
                var daysToAdd = this.view.firstCellDate.getDay() === 6 && !this.startWeekOnSunday ? 2 : 1;
                this.view.firstCellDate = this.view.firstCellDate.addDays(daysToAdd);
              } // Remove first weekend from startDate if hide-weekends.


              if ([0, 6].includes(this.view.startDate.getDay())) {
                var _daysToAdd = this.view.startDate.getDay() === 6 ? 2 : 1;

                this.view.startDate = this.view.startDate.addDays(_daysToAdd);
              } // Remove last weekend from lastCellDate if hide-weekends.


              if ([0, 6].includes(this.view.lastCellDate.getDay())) {
                var daysToSubtract = this.view.lastCellDate.getDay() === 0 && !this.startWeekOnSunday ? 2 : 1;
                this.view.lastCellDate = this.view.lastCellDate.subtractDays(daysToSubtract);
              } // Remove last weekend from endDate if hide-weekends.


              if ([0, 6].includes(this.view.endDate.getDay())) {
                var _daysToSubtract = this.view.endDate.getDay() === 0 ? 2 : 1;

                this.view.endDate = this.view.endDate.subtractDays(_daysToSubtract);
              }
            }

            break;
          }

        case 'week':
          {
            var weekDaysCount = this.hideWeekends ? 5 : 7;
            this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? date.addDays(1) : date;
            this.view.startDate.setHours(0, 0, 0, 0);
            this.view.endDate = date.addDays(weekDaysCount);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.

            break;
          }

        case 'day':
          {
            this.view.startDate = date;
            this.view.startDate.setHours(0, 0, 0, 0);
            this.view.endDate = new Date(date);
            this.view.endDate.setHours(23, 59, 59, 0); // End at 23:59:59.

            break;
          }
      }

      this.addEventsToView();

      if (this.ready) {
        var _startDate = this.view.startDate;

        var params = Object(objectSpread2["a" /* default */])({
          view: view,
          startDate: _startDate,
          endDate: this.view.endDate
        }, this.view.id === 'month' ? {
          firstCellDate: this.view.firstCellDate,
          lastCellDate: this.view.lastCellDate,
          outOfScopeEvents: this.view.outOfScopeEvents.map(this.cleanupEvent)
        } : {}, {
          events: this.view.events.map(this.cleanupEvent)
        }, this.view.id === 'week' ? {
          week: this.startWeekOnSunday ? _startDate.addDays(1).getWeek() : _startDate.getWeek()
        } : {});

        this.$emit('view-change', params);
      }
    },

    /**
     * Shorthand function for external call (via $refs).
     */
    previous: function previous() {
      this.previousNext(false);
    },

    /**
     * Shorthand function for external call (via $refs).
     */
    next: function next() {
      this.previousNext();
    },

    /**
     * On click on previous or next arrow, update the calendar visible date range.
     *
     * @param {Boolean} next
     */
    previousNext: function previousNext() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.transitionDirection = next ? 'right' : 'left';
      var modifier = next ? 1 : -1;
      var firstCellDate = null;
      var _this$view = this.view,
          startDate = _this$view.startDate,
          viewId = _this$view.id;

      switch (viewId) {
        case 'years':
          firstCellDate = new Date(startDate.getFullYear() + 25 * modifier, 0, 1);
          break;

        case 'year':
          firstCellDate = new Date(startDate.getFullYear() + 1 * modifier, 1, 1);
          break;

        case 'month':
          firstCellDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1 * modifier, 1);
          break;

        case 'week':
          firstCellDate = this.utils.date.getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday)[next ? 'addDays' : 'subtractDays'](7);
          break;

        case 'day':
          firstCellDate = startDate[next ? 'addDays' : 'subtractDays'](1);
          break;
      }

      if (firstCellDate) this.switchView(viewId, firstCellDate);
    },

    /**
     * Add events (subset from mutableEvents) to the current view (in `this.view.events`).
     * This is done for performance, so that all the cells have a quick lookup of only what's needed.
     *
     * @param {Array} events
     */
    addEventsToView: function addEventsToView() {
      var _this$view$events,
          _this4 = this;

      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$utils$event = this.utils.event,
          eventInRange = _this$utils$event.eventInRange,
          createEventSegments = _this$utils$event.createEventSegments;
      var _this$view2 = this.view,
          id = _this$view2.id,
          startDate = _this$view2.startDate,
          endDate = _this$view2.endDate,
          firstCellDate = _this$view2.firstCellDate,
          lastCellDate = _this$view2.lastCellDate; // Clear the current view if not explicitely giving an array of events to add.

      if (!events.length) this.view.events = []; // @todo: remove the code that explicitely updates this.mutableEvents (e.g on event resize).
      // as we are already mutating the event from mutableEvents.

      events = events.length ? events : _toConsumableArray(this.mutableEvents); // In no event or if on years/year view and eventsCountOnYearView is false
      // then don't add events to view.

      if (!events || ['years', 'year'].includes(id) && !this.eventsCountOnYearView) return; // First remove the events that are not in view.
      // Keep the unfiltered array of events for outOfScopeEvents bellow.

      var filteredEvents = events.filter(function (e) {
        return eventInRange(e, startDate, endDate);
      }); // For each multiple-day event and only if needed, create its segments (= days) for rendering in the view.
      // If we don't display the event on month view (eventsOnMonthView = false) then don't create segments.

      if (['month', 'week', 'day'].includes(id) && !(id === 'month' && !this.eventsOnMonthView)) {
        filteredEvents = filteredEvents.map(function (e) {
          return e.daysCount > 1 ? createEventSegments(e, firstCellDate || startDate, lastCellDate || endDate) : e;
        });
      }

      (_this$view$events = this.view.events).push.apply(_this$view$events, _toConsumableArray(filteredEvents));

      if (id === 'month') {
        // Save out of scope events into the view object separated from the array of in-scope events.
        this.view.outOfScopeEvents = [];
        events.forEach(function (e) {
          if (eventInRange(e, firstCellDate, startDate) || eventInRange(e, endDate, lastCellDate)) {
            // Only add events to the view.outOfScopeEvents array if not already in view.events
            // (multiple-day events case).
            if (!_this4.view.events.some(function (e2) {
              return e2._eid === e._eid;
            })) _this4.view.outOfScopeEvents.push(e);
          }
        });
      }
    },

    /**
     * find a DOM ancestor of a given DOM node `el` matching given class name.
     *
     * @param {Object} el a DOM node to find ancestor from.
     * @param {String} Class the CSS class name of the ancestor.
     * @return {Object} The matched DOM node or null if no match.
     */
    findAncestor: function findAncestor(el, Class) {
      while ((el = el.parentElement) && !el.classList.contains(Class)) {}

      return el;
    },

    /**
     * Tells whether a clicked DOM node is or is within a calendar event.
     *
     * @param {Object} el a DOM node to check if event.
     * @return {Boolean} true if the given DOM node is - or is in - an event.
     */
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return el.classList.contains('vuecal__event') || this.findAncestor(el, 'vuecal__event');
    },

    /**
     * Capture mousemove anywhere in the page.
     * If resizing an event was started earlier, this will update event end.
     * If resizing was not started, this method is calculation is avoided with a premature return.
     * Notes: Event resizing is started in cell component (onMouseDown) but place onMouseMove & onMouseUp
     *        handlers in the single-instance parent for performance.
     *
     * @param {Object} e the native DOM event object.
     */
    onMouseMove: function onMouseMove(e) {
      var _this$domEvents = this.domEvents,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          dragAnEvent = _this$domEvents.dragAnEvent;
      if (resizeAnEvent._eid === null && dragAnEvent._eid === null) return;
      var _this$utils$date = this.utils.date,
          formatDateLite = _this$utils$date.formatDateLite,
          formatTimeLite = _this$utils$date.formatTimeLite,
          countDays = _this$utils$date.countDays;
      e.preventDefault();

      if (resizeAnEvent._eid) {
        var event = this.view.events.find(function (e) {
          return e._eid === resizeAnEvent._eid;
        }) || {
          segments: {}
        };

        var _this$minutesAtCursor = this.minutesAtCursor(e),
            minutes = _this$minutesAtCursor.minutes,
            cursorCoords = _this$minutesAtCursor.cursorCoords;

        var segment = event.segments && event.segments[resizeAnEvent.segment]; // Don't allow time above 24 hours.

        event.endTimeMinutes = resizeAnEvent.endTimeMinutes = Math.min(minutes, vue_calvue_type_script_lang_js_minutesInADay); // Prevent reducing event duration to less than 1 min so it does not disappear.

        event.endTimeMinutes = resizeAnEvent.endTimeMinutes = Math.max(event.endTimeMinutes, this.timeFrom + 1, (segment || event).startTimeMinutes + 1); // On resize, snap to time every X minutes if the option is on.

        if (this.snapToTime) {
          var plusHalfSnapTime = event.endTimeMinutes + this.snapToTime / 2;
          event.endTimeMinutes = plusHalfSnapTime - plusHalfSnapTime % this.snapToTime;
        }

        if (segment) segment.endTimeMinutes = event.endTimeMinutes;
        event.endDate.setHours(0, event.endTimeMinutes, event.endTimeMinutes === vue_calvue_type_script_lang_js_minutesInADay ? -1 : 0, // Remove 1 second if time is 24:00.
        0);
        event.end = "".concat(formatDateLite(event.endDate), " ").concat(formatTimeLite(event.endDate)); // Resize events horizontally if resize-x is enabled (add/remove segments).

        if (this.resizeX && this.view.id === 'week') {
          event.daysCount = countDays(event.startDate, event.endDate);
          var cells = this.$refs.cells;
          var cellWidth = cells.offsetWidth / cells.childElementCount;
          var endCell = Math.floor(cursorCoords.x / cellWidth);

          if (!resizeAnEvent.startCell) {
            resizeAnEvent.startCell = endCell - (event.daysCount - 1);
          }

          if (resizeAnEvent.endCell !== endCell) {
            resizeAnEvent.endCell = endCell;
            var endDate = event.startDate.addDays(endCell - resizeAnEvent.startCell);
            var newDaysCount = countDays(event.startDate, endDate);

            if (newDaysCount !== event.daysCount) {
              var _this$utils$event2 = this.utils.event,
                  addEventSegment = _this$utils$event2.addEventSegment,
                  removeEventSegment = _this$utils$event2.removeEventSegment; // Check that all segments are up to date.

              var lastSegmentFormattedDate = null;
              if (newDaysCount > event.daysCount) lastSegmentFormattedDate = addEventSegment(event);else lastSegmentFormattedDate = removeEventSegment(event);
              resizeAnEvent.segment = lastSegmentFormattedDate;
              event.endTimeMinutes += 0.001; // Force updating the current event.
            }
          }
        }
      }
    },

    /**
     * Capture mouseup anywhere in the page, not only on a cell or event.
     * Then end up any resize, drag & drop, click & hold or event or cell.
     * Notes: Mouseup can never cancel a click with preventDefault or stopPropagation,
     *        But it always happens before the click event.
     *
     * @param {Object} e the native DOM event object.
     */
    onMouseUp: function onMouseUp(e) {
      var _this$domEvents2 = this.domEvents,
          resizeAnEvent = _this$domEvents2.resizeAnEvent,
          clickHoldAnEvent = _this$domEvents2.clickHoldAnEvent,
          clickHoldACell = _this$domEvents2.clickHoldACell; // On event resize end, emit event if duration has changed.

      if (resizeAnEvent._eid) {
        this.domEvents.cancelClickEventCreation = true;
        var event = this.view.events.find(function (e) {
          return e._eid === resizeAnEvent._eid;
        });
        var originalEndDate = resizeAnEvent.originalEndDate; // When resizing the endTime changes but the day may change too when resizing horizontally.
        // So compare timestamps instead of only endTimeMinutes.

        if (event && event.endDate.getTime() !== originalEndDate.getTime()) {
          // Update the modified event in the mutable events array.
          var mutableEvent = this.mutableEvents.find(function (e) {
            return e._eid === resizeAnEvent._eid;
          });
          mutableEvent.endTimeMinutes = event.endTimeMinutes;
          mutableEvent.end = event.end;
          mutableEvent.endDate = event.endDate;
          var cleanEvent = this.cleanupEvent(event);

          var originalEvent = Object(objectSpread2["a" /* default */])({}, this.cleanupEvent(event), {
            endDate: originalEndDate,
            end: "".concat(originalEndDate.format(), " ").concat(originalEndDate.formatTime()),
            endTimeMinutes: event.originalEndTimeMinutes
          });

          this.$emit('event-duration-change', {
            event: cleanEvent,
            oldDate: resizeAnEvent.originalEndDate
          });
          this.$emit('event-change', {
            event: cleanEvent,
            originalEvent: originalEvent
          });
        }

        if (event) event.resizing = false;
        resizeAnEvent._eid = null;
        resizeAnEvent.start = null;
        resizeAnEvent.split = null;
        resizeAnEvent.segment = null;
        resizeAnEvent.originalEndTimeMinutes = null;
        resizeAnEvent.originalEndDate = null;
        resizeAnEvent.endTimeMinutes = null;
        resizeAnEvent.startCell = null;
        resizeAnEvent.endCell = null;
      }

      if (this.isDOMElementAnEvent(e.target)) this.domEvents.cancelClickEventCreation = true; // If not mouse up on an event, unfocus any event except if just dragged.
      else if (!resizeAnEvent._eid) this.unfocusEvent(); // Prevent showing delete button if click and hold was not long enough.
      // Click & hold timeout is initiated in onMouseDown() in event component.

      if (clickHoldAnEvent.timeoutId && !clickHoldAnEvent._eid) {
        clearTimeout(clickHoldAnEvent.timeoutId);
        clickHoldAnEvent.timeoutId = null;
      } // Prevent creating an event if click and hold was not long enough.


      if (clickHoldACell.timeoutId) {
        clearTimeout(clickHoldACell.timeoutId);
        clickHoldACell.timeoutId = null;
      }
    },

    /**
     * Capture `escape` keypress when delete button is visible, and cancel deletion.
     *
     * @param {Object} e the native DOM event object.
     */
    onKeyUp: function onKeyUp(e) {
      if (e.keyCode === 27) this.cancelDelete(); // Escape key.
    },

    /**
     * Unfocus an event (e.g. when clicking outside of focused event).
     */
    unfocusEvent: function unfocusEvent() {
      var _this$domEvents3 = this.domEvents,
          focusAnEvent = _this$domEvents3.focusAnEvent,
          clickHoldAnEvent = _this$domEvents3.clickHoldAnEvent;
      var event = this.view.events.find(function (e) {
        return e._eid === (focusAnEvent._eid || clickHoldAnEvent._eid);
      });
      focusAnEvent._eid = null; // Cancel event focus.

      clickHoldAnEvent._eid = null; // Hide delete button.

      if (event) {
        event.focused = false;
        event.deleting = false;
      }
    },

    /**
     * Cancel an event deletion (e.g. when clicking outside of visible delete button).
     */
    cancelDelete: function cancelDelete() {
      var clickHoldAnEvent = this.domEvents.clickHoldAnEvent;

      if (clickHoldAnEvent._eid) {
        var event = this.view.events.find(function (e) {
          return e._eid === clickHoldAnEvent._eid;
        });
        if (event) event.deleting = false;
        clickHoldAnEvent._eid = null;
        clickHoldAnEvent.timeoutId = null;
      }
    },

    /**
     * After editing an event title (if `this.editable`), save the new string into the event object
     * and emit event to the outside world.
     *
     * @param {Object} e the native DOM event object.
     * @param {Object} event the vue-cal event object.
     */
    onEventTitleBlur: function onEventTitleBlur(e, event) {
      // If no change cancel action.
      if (event.title === e.target.innerHTML) return;
      var cleanEvent = this.cleanupEvent(event);
      var oldTitle = event.title;
      event.title = e.target.innerHTML;
      this.$emit('event-title-change', {
        event: cleanEvent,
        oldTitle: oldTitle
      });
      this.$emit('event-change', {
        event: cleanEvent,
        originalEvent: {
          cleanEvent: cleanEvent,
          title: oldTitle
        }
      });
    },

    /**
     * The `mutableEvents` array of events is the source of truth.
     * It is first populated from the `events` prop and every time the `events` prop changes.
     * When the user updates an event through interractions, the event gets updated here.
     * Notes: mutableEvents couldn't be a computed variable based on this.events, because we add
     *        items to the array. (Cannot mutate props)
     */
    updateMutableEvents: function updateMutableEvents() {
      var _this5 = this;

      var _this$utils$date2 = this.utils.date,
          formatDateLite = _this$utils$date2.formatDateLite,
          formatTimeLite = _this$utils$date2.formatTimeLite,
          stringToDate = _this$utils$date2.stringToDate,
          dateToMinutes = _this$utils$date2.dateToMinutes,
          countDays = _this$utils$date2.countDays;
      this.mutableEvents = []; // For each event of the `events` prop, prepare the event for vue-cal:
      // Populate missing keys: start, startDate, startTimeMinutes, end, endDate, endTimeMinutes, daysCount.
      // Lots of these variables may look redundant but are here for performance as a cached result of calculation. :)

      this.events.forEach(function (event) {
        // `event.startDate` accepts a Date object, and `event.start` accepts a formatted string.
        var startDate, startDateF;

        if (event.startDate && event.startDate instanceof Date) {
          startDate = event.startDate;
          startDateF = formatDateLite(event.startDate);
        } else if (event.start) {
          startDate = stringToDate(event.start);
          startDateF = event.start.split(' ')[0]; // Isolate date without time.
        }

        var startTimeMinutes = dateToMinutes(startDate);
        var start = event.start || "".concat(startDateF, " ").concat(formatTimeLite(startDate)); // `event.endDate` accepts a Date object, and`event.end` accepts a formatted string.

        var endDate, endDateF;

        if (event.endDate && event.endDate instanceof Date) {
          endDate = event.endDate;
          endDateF = formatDateLite(event.endDate);
        } else if (event.end) {
          endDate = stringToDate(event.end);
          endDateF = event.end.split(' ')[0]; // Isolate date without time.
        }

        var endTimeMinutes = dateToMinutes(endDate);
        var end = event.end || "".concat(endDateF, " ").concat(formatTimeLite(endDate)); // Correct the common practice to end at 00:00 or 24:00 to count a full day.

        if (!endTimeMinutes || endTimeMinutes === vue_calvue_type_script_lang_js_minutesInADay) {
          endDate.setSeconds(-1); // End at 23:59:59.

          endDateF = formatDateLite(endDate);
          endTimeMinutes = vue_calvue_type_script_lang_js_minutesInADay;
        }

        var multipleDays = startDateF !== endDateF;
        event = Object.assign(Object(objectSpread2["a" /* default */])({}, _this5.utils.event.eventDefaults, {
          // Keep the event ids scoped to this calendar instance.
          _eid: "".concat(_this5._uid, "_").concat(_this5.eventIdIncrement++),
          segments: multipleDays ? {} : null,
          start: start,
          startDate: startDate,
          startTimeMinutes: startTimeMinutes,
          end: end,
          endDate: endDate,
          endTimeMinutes: endTimeMinutes,
          daysCount: multipleDays ? countDays(startDate, endDate) : 1,
          class: event.class
        }), event);

        _this5.mutableEvents.push(event);
      });
    },

    /**
     * Get the number of minutes from the top to the mouse cursor.
     *
     * @param {Object} e the native DOM event object.
     * @return {Object} containing { minutes: {Number}, cursorCoords: { x: {Number}, y: {Number} } }
     */
    minutesAtCursor: function minutesAtCursor(e) {
      return this.utils.cell.minutesAtCursor(e);
    },

    /**
     * Creates a new event in vue-cal memory (in the mutableEvents array) starting at the given date & time.
     * Proxy method to allow call from cell click & hold or external call (via $refs).
     * Notes: Event duration is by default 2 hours. You can override the event end through eventOptions.
     *
     * @param {String | Date} dateTime date & time at which the event will start.
     * @param {Number} duration the event duration in minutes.
     * @param {Object} eventOptions an object of options to override the event creation defaults.
     *                              (can be any key allowed in an event object)
     * @return {Object} the created event.
     */
    createEvent: function createEvent(dateTime, duration) {
      var eventOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.utils.event.createAnEvent(dateTime, duration, eventOptions, this);
    },

    /**
     * Remove all the vue-cal private vars from the event (before returning it through $emit()).
     *
     * @param {Object} event the event object to cleanup.
     */
    cleanupEvent: function cleanupEvent(event) {
      event = Object(objectSpread2["a" /* default */])({}, event); // Delete vue-cal specific props instead of returning a set of props so user
      // can place whatever they want inside an event and see it returned.

      var discardProps = ['height', 'top', 'segments', 'deletable', 'deleting', 'resizable', 'resizing', 'draggable', 'dragging', 'draggingStatic', 'focused'];
      discardProps.forEach(function (prop) {
        if (prop in event) delete event[prop];
      });
      if (!event.repeat) delete event.repeat; // If empty we don't need it.

      return event;
    },

    /**
     * Emits an event (custom DOM event) to the outside world.
     * This event has an event name and a clean calendar event as a parameter.
     *
     * @param {String} eventName the name of the custom emitted event (e.g. `event-focus`).
     * @param {Object} event the event to return to the outside world.
     */
    emitWithEvent: function emitWithEvent(eventName, event) {
      this.$emit(eventName, this.cleanupEvent(event));
    },

    /**
     * Update the selected date:
     * - on created, from given selectedDate prop
     * - on click/dblClick of another cell
     * - from external call (via $refs)
     * - when the given selectedDate prop changes.
     * If date is not in the view, the view will change to show it.
     *
     * @param {String | Date} date The date to select.
     */
    updateSelectedDate: function updateSelectedDate(date) {
      if (date && typeof date === 'string') date = this.utils.date.stringToDate(date);else date = new Date(date); // Clone to keep original untouched.

      if (date && date instanceof Date) {
        var selectedDate = this.view.selectedDate;
        if (selectedDate) this.transitionDirection = selectedDate.getTime() > date.getTime() ? 'left' : 'right'; // Select the day at midnight in order to allow fetching events on whole day.
        // Setting milliseconds to 0 is critical as well for timestamp comparison.

        date.setHours(0, 0, 0, 0);
        if (!selectedDate || selectedDate.getTime() !== date.getTime()) this.view.selectedDate = date;
        this.switchView(this.view.id);
      }
    },

    /**
     * Formats a time and returns the formatted string.
     * Shorthand function, to avoid passing the common format.
     *
     * @param {Number} time the time to format in minutes.
     * @param {String} format the wanted format.
     * @return {String} the formatted time.
     */
    formatTime: function formatTime(time, format) {
      return this.utils.date.formatTime(time, format || this.timeFormat || (this.twelveHour ? 'h:mm{am}' : 'HH:mm'), this.texts);
    },

    /**
     * Double checks the week number is correct. Read bellow to understand!
     * this is a wrapper around the `getWeek()` function for performance:
     * As this is called multiple times from the template and cannot be in computed since there is
     * a parameter, this wrapper function avoids the `getWeek()` function call 5 times out of 6
     * using the computed `firstCellDateWeekNumber`.
     *
     * Reason why:
     * Getting the week number is not that straightforward as there might be a 53rd week in the year.
     * Whenever the year starts on a Thursday or any leap year starting on a Wednesday, this week will be 53.
     *
     * @param {Number} weekFromFirstCell Number from 0 to 6.
     */
    getWeekNumber: function getWeekNumber(weekFromFirstCell) {
      var firstCellWeekNumber = this.firstCellDateWeekNumber;
      var currentWeekNumber = firstCellWeekNumber + weekFromFirstCell;
      var modifier = this.startWeekOnSunday ? 1 : 0;

      if (currentWeekNumber > 52) {
        return this.view.firstCellDate.addDays(7 * weekFromFirstCell + modifier).getWeek();
      } else return currentWeekNumber;
    },

    /**
     * Only if watchRealTime is true.
     * Pull the current time from user machine every minute to keep vue-cal accurate even when idle.
     * This will redraw the now line every minute and ensure that Today's date is always accurate.
     */
    timeTick: function timeTick() {
      // Updating `now` will re-trigger the computed `todaysTimePosition` in cell.vue.
      this.now = new Date();
      this.timeTickerIds[1] = setTimeout(this.timeTick, 60 * 1000); // Every minute.
    },

    /**
     * Updates the localized texts in use in the Date prototypes. (E.g. new Date().format())
     * Callable from outside of Vue Cal.
     */
    updateDateTexts: function updateDateTexts() {
      this.utils.date.updateDateTexts(this.texts);
    },

    /**
     * On Windows devices, the .vuecal__bg's vertical scrollbar takes space and pushes the content.
     * This function will also push the weekdays-headings and all-day bar to have them properly aligned.
     * The calculated style will be placed in the docment head in a style tag so it's only done once
     * (the scrollbar width never changes).
     * Ref. https://github.com/antoniandre/vue-cal/issues/221
     */
    alignWithScrollbar: function alignWithScrollbar() {
      // If already done from another instance, exit.
      if (document.getElementById('vuecal-align-with-scrollbar')) return;
      var bg = this.$refs.vuecal.getElementsByClassName('vuecal__scrollbar-check')[0];
      var scrollbarWidth = bg.offsetWidth - bg.children[0].offsetWidth; // Only add a style tag once and if a scrollbar width is detected.

      if (scrollbarWidth) {
        var style = document.createElement('style');
        style.id = 'vuecal-align-with-scrollbar';
        style.type = 'text/css';
        style.innerHTML = ".vuecal__weekdays-headings,.vuecal__all-day {padding-right: ".concat(scrollbarWidth, "px}");
        document.head.appendChild(style);
      }
    }
  },
  created: function created() {
    this.utils.cell = new cell_CellUtils(this);
    this.utils.event = new event_EventUtils(this, this.utils.date);
    this.loadLocale(this.locale);
    this.updateDateTexts();
    if (this.editEvents.drag) this.loadDragAndDrop(); // Init the array of events, then keep listening for changes in watcher.

    this.updateMutableEvents(this.events);
    this.view.id = this.defaultView;
    if (this.selectedDate) this.updateSelectedDate(this.selectedDate);else {
      this.view.selectedDate = new Date();
      this.switchView(this.defaultView);
    } // Timers are expensive, this should only trigger on demand.

    if (this.time && this.watchRealTime) {
      // Snap the time ticker on sharp minutes (when seconds = 0), so that we can set
      // the time ticker interval to 60 seconds and spare some function calls.
      this.timeTickerIds[0] = setTimeout(this.timeTick, (60 - this.now.getSeconds()) * 1000);
    }
  },
  mounted: function mounted() {
    var hasTouch = 'ontouchstart' in window;

    if (this.editEvents.resize || this.editEvents.drag) {
      window.addEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
        passive: false
      });
      window.addEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
    }

    if (this.editEvents.title) window.addEventListener('keyup', this.onKeyUp); // Disable context menu on touch devices on the whole vue-cal instance.

    if (hasTouch) {
      this.$refs.vuecal.oncontextmenu = function (e) {
        e.preventDefault();
        e.stopPropagation();
      };
    } // https://github.com/antoniandre/vue-cal/issues/221


    this.alignWithScrollbar(); // Emit the `ready` event with useful parameters.

    var startDate = this.view.startDate;

    var params = Object(objectSpread2["a" /* default */])({
      view: this.view.id,
      startDate: startDate,
      endDate: this.view.endDate
    }, this.view.id === 'month' ? {
      firstCellDate: this.view.firstCellDate,
      lastCellDate: this.view.lastCellDate
    } : {}, {
      events: this.view.events.map(this.cleanupEvent)
    }, this.view.id === 'week' ? {
      week: this.startWeekOnSunday ? startDate.addDays(1).getWeek() : startDate.getWeek()
    } : {});

    this.$emit('ready', params);
    this.ready = true;
  },
  beforeDestroy: function beforeDestroy() {
    var hasTouch = 'ontouchstart' in window;
    window.removeEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
      passive: false
    });
    window.removeEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
    window.removeEventListener('keyup', this.onKeyUp); // Don't keep the ticking running if unused.

    if (this.timeTickerIds[0]) clearTimeout(this.timeTickerIds[0]);
    if (this.timeTickerIds[1]) clearTimeout(this.timeTickerIds[1]);
    this.timeTickerIds = [null, null];
  },
  computed: {
    editEvents: function editEvents() {
      if (this.editableEvents && _typeof(this.editableEvents) === 'object') {
        return {
          title: !!this.editableEvents.title,
          drag: !!this.editableEvents.drag,
          resize: !!this.editableEvents.resize,
          create: !!this.editableEvents.create,
          delete: !!this.editableEvents.delete
        };
      }

      return {
        title: !!this.editableEvents,
        drag: !!this.editableEvents,
        resize: !!this.editableEvents,
        create: !!this.editableEvents,
        delete: !!this.editableEvents
      };
    },
    views: function views() {
      return {
        years: {
          label: this.texts.years,
          enabled: !this.disableViews.includes('years')
        },
        year: {
          label: this.texts.year,
          enabled: !this.disableViews.includes('year')
        },
        month: {
          label: this.texts.month,
          enabled: !this.disableViews.includes('month')
        },
        week: {
          label: this.texts.week,
          enabled: !this.disableViews.includes('week')
        },
        day: {
          label: this.texts.day,
          enabled: !this.disableViews.includes('day')
        }
      };
    },
    hasTimeColumn: function hasTimeColumn() {
      return this.time && ['week', 'day'].includes(this.view.id);
    },
    isShortMonthView: function isShortMonthView() {
      return this.view.id === 'month' && this.eventsOnMonthView === 'short';
    },
    firstCellDateWeekNumber: function firstCellDateWeekNumber() {
      var date = this.view.firstCellDate;
      return this.startWeekOnSunday ? date.addDays(1).getWeek() : date.getWeek();
    },
    // For week & day views.
    timeCells: function timeCells() {
      var timeCells = [];

      for (var i = this.timeFrom, max = this.timeTo; i < max; i += this.timeStep) {
        timeCells.push({
          hours: Math.floor(i / 60),
          minutes: i % 60,
          label: this.formatTime(i),
          value: i
        });
      }

      return timeCells;
    },
    // Filter out the day splits that are hidden.
    daySplits: function daySplits() {
      return (this.splitDays.filter(function (item) {
        return !item.hide;
      }) || []).map(function (item, i) {
        return Object(objectSpread2["a" /* default */])({}, item, {
          id: item.id || i + 1
        });
      }) // Make sure there's always an id.
      ;
    },
    // Whether the current view has days splits.
    hasSplits: function hasSplits() {
      return this.daySplits.length && ['week', 'day'].includes(this.view.id);
    },
    contentMinWidth: function contentMinWidth() {
      var minWidth = null;
      if (this.hasSplits && this.minSplitWidth) minWidth = this.visibleDaysCount * this.minSplitWidth * this.daySplits.length;else if (this.minCellWidth && this.view.id === 'week') minWidth = this.visibleDaysCount * this.minCellWidth;
      return minWidth;
    },
    minTimestamp: function minTimestamp() {
      var date = null;
      if (this.minDate && typeof this.minDate === 'string') date = this.utils.date.stringToDate(this.minDate);else if (this.minDate && this.minDate instanceof Date) date = this.minDate;
      return date ? date.getTime() : null;
    },
    maxTimestamp: function maxTimestamp() {
      var date = null;
      if (this.maxDate && typeof this.maxDate === 'string') date = this.utils.date.stringToDate(this.maxDate);else if (this.maxDate && this.minDate instanceof Date) date = this.maxDate;
      return date ? date.getTime() : null;
    },
    weekDays: function weekDays() {
      var _this6 = this;

      var _this$texts = this.texts,
          weekDays = _this$texts.weekDays,
          _this$texts$weekDaysS = _this$texts.weekDaysShort,
          weekDaysShort = _this$texts$weekDaysS === void 0 ? [] : _this$texts$weekDaysS; // Do not modify original for next instances.

      weekDays = weekDays.slice(0).map(function (day, i) {
        return Object(objectSpread2["a" /* default */])({
          label: day
        }, weekDaysShort.length ? {
          short: weekDaysShort[i]
        } : {}, {
          hide: _this6.hideWeekends && i >= 5 || _this6.hideWeekdays.length && _this6.hideWeekdays.includes(i + 1)
        });
      });
      if (this.startWeekOnSunday) weekDays.unshift(weekDays.pop());
      return weekDays;
    },
    weekDaysInHeader: function weekDaysInHeader() {
      return this.view.id === 'month' || this.view.id === 'week' && !this.minCellWidth && !this.minSplitWidth;
    },
    months: function months() {
      return this.texts.months.map(function (month) {
        return {
          label: month
        };
      });
    },
    // Prepare the special hours object once for all at root level and not in cell.
    specialDayHours: function specialDayHours() {
      var _this7 = this;

      return Array(7).fill('').map(function (cell, i) {
        var _ref = _this7.specialHours[i + 1] || {},
            from = _ref.from,
            to = _ref.to,
            Class = _ref.class;

        return {
          day: i + 1,
          from: ![null, undefined].includes(from) ? from * 1 : null,
          to: ![null, undefined].includes(to) ? to * 1 : null,
          class: Class || ''
        };
      });
    },
    viewTitle: function viewTitle() {
      var title = '';
      var date = this.view.startDate;
      var year = date.getFullYear();
      var month = date.getMonth();

      switch (this.view.id) {
        case 'years':
          {
            title = this.texts.years;
            break;
          }

        case 'year':
          {
            title = year;
            break;
          }

        case 'month':
          {
            title = "".concat(this.months[month].label, " ").concat(year);
            break;
          }

        case 'week':
          {
            var lastDayOfWeek = this.view.endDate; // Might be another day than Sunday, if hiding days.

            var y1 = date.getFullYear();
            var m1 = this.texts.months[date.getMonth()];
            if (this.xsmall) m1 = m1.substring(0, 3);
            var formattedMonthYear = "".concat(m1, " ").concat(y1); // If week is not ending in the same month it started in.

            if (lastDayOfWeek.getMonth() !== date.getMonth()) {
              var y2 = lastDayOfWeek.getFullYear();
              var m2 = this.texts.months[lastDayOfWeek.getMonth()];
              if (this.xsmall) m2 = m2.substring(0, 3);
              if (y1 === y2) formattedMonthYear = "".concat(m1, " - ").concat(m2, " ").concat(y1);else {
                if (this.small) formattedMonthYear = "".concat(m1.substring(0, 3), " ").concat(y1, " - ").concat(m2.substring(0, 3), " ").concat(y2);else formattedMonthYear = "".concat(m1, " ").concat(y1, " - ").concat(m2, " ").concat(y2);
              }
            }

            title = "".concat(this.texts.week, " ").concat(this.startWeekOnSunday ? date.addDays(1).getWeek() : date.getWeek(), " (").concat(formattedMonthYear, ")");
            break;
          }

        case 'day':
          {
            title = this.utils.date.formatDate(date, this.texts.dateFormat, this.texts);
            break;
          }
      }

      return title;
    },
    viewCells: function viewCells() {
      var _this8 = this;

      var cells = [];
      var fromYear = null;
      var todayFound = false; // If watchRealTime = true, a time ticker will keep updating this.now every minute.
      // If watchRealTime = false - and by default - update this.now value each time we rerender the cells
      // so we keep Today's date always accurate at a minimum cost and maximum performance.
      // eslint-disable-next-line

      if (!this.watchRealTime) this.now = new Date();
      var now = this.now;

      switch (this.view.id) {
        case 'years':
          {
            fromYear = this.view.startDate.getFullYear();
            cells = Array.apply(null, Array(25)).map(function (cell, i) {
              var startDate = new Date(fromYear + i, 0, 1);
              var endDate = new Date(fromYear + i + 1, 0, 1);
              endDate.setSeconds(-1); // End at 23:59:59.

              return {
                startDate: startDate,
                formattedDate: _this8.utils.date.formatDateLite(startDate),
                endDate: endDate,
                content: fromYear + i,
                current: fromYear + i === now.getFullYear()
              };
            });
            break;
          }

        case 'year':
          {
            fromYear = this.view.startDate.getFullYear();
            cells = Array.apply(null, Array(12)).map(function (cell, i) {
              var startDate = new Date(fromYear, i, 1);
              var endDate = new Date(fromYear, i + 1, 1);
              endDate.setSeconds(-1); // End at 23:59:59.

              return {
                startDate: startDate,
                formattedDate: _this8.utils.date.formatDateLite(startDate),
                endDate: endDate,
                content: _this8.xsmall ? _this8.months[i].label.substr(0, 3) : _this8.months[i].label,
                current: i === now.getMonth() && fromYear === now.getFullYear()
              };
            });
            break;
          }

        case 'month':
          {
            var month = this.view.startDate.getMonth();
            var firstCellDate = new Date(this.view.firstCellDate);
            todayFound = false; // Create 42 cells (6 rows x 7 days) and populate them with days.

            cells = Array.apply(null, Array(42)).map(function (cell, i) {
              var startDate = firstCellDate.addDays(i);
              var endDate = new Date(startDate);
              endDate.setHours(23, 59, 59, 0); // End at 23:59:59.
              // To increase performance skip checking isToday if today already found.

              var isToday = !todayFound && startDate.isToday() && !todayFound++;
              return {
                startDate: startDate,
                formattedDate: _this8.utils.date.formatDateLite(startDate),
                endDate: endDate,
                content: startDate.getDate(),
                today: isToday,
                outOfScope: startDate.getMonth() !== month
              };
            });

            if (this.hideWeekends || this.hideWeekdays.length) {
              cells = cells.filter(function (cell) {
                var day = cell.startDate.getDay();
                if (!day) day = 7; // Put Sunday at position 7 instead of 0.

                return !(_this8.hideWeekends && day >= 6 || _this8.hideWeekdays.length && _this8.hideWeekdays.includes(day));
              });
            }

            break;
          }

        case 'week':
          {
            todayFound = false;
            var firstDayOfWeek = this.view.startDate;
            var weekDays = this.weekDays;
            cells = weekDays.map(function (cell, i) {
              var startDate = firstDayOfWeek.addDays(i);
              var endDate = new Date(startDate);
              endDate.setHours(23, 59, 59, 0); // End at 23:59:59.

              var dayOfWeek = (startDate.getDay() - 1 + 7) % 7; // Day of the week from 0 to 6 with 6 = Sunday.

              return {
                startDate: startDate,
                formattedDate: _this8.utils.date.formatDateLite(startDate),
                endDate: endDate,
                // To increase performance skip checking isToday if today already found.
                today: !todayFound && startDate.isToday() && !todayFound++,
                specialHours: _this8.specialDayHours[dayOfWeek]
              };
            }).filter(function (cell, i) {
              return !weekDays[i].hide;
            });
            break;
          }

        case 'day':
          {
            var startDate = this.view.startDate;
            var endDate = new Date(this.view.startDate);
            endDate.setHours(23, 59, 59, 0); // End at 23:59:59.

            var dayOfWeek = (startDate.getDay() - 1 + 7) % 7; // Day of the week from 0 to 6 with 6 = Sunday.

            cells = [{
              startDate: startDate,
              formattedDate: this.utils.date.formatDateLite(startDate),
              endDate: endDate,
              today: startDate.isToday(),
              specialHours: this.specialDayHours[dayOfWeek]
            }];
            break;
          }
      }

      return cells;
    },
    // Only when hiding weekdays on month and week views.
    visibleDaysCount: function visibleDaysCount() {
      if (this.view.id === 'day') return 1;
      return 7 - this.weekDays.reduce(function (total, day) {
        return total + day.hide;
      }, 0);
    },
    cellWidth: function cellWidth() {
      return 100 / this.visibleDaysCount;
    },
    cssClasses: function cssClasses() {
      var _ref2;

      return _ref2 = {}, Object(defineProperty["a" /* default */])(_ref2, "vuecal--".concat(this.view.id, "-view"), true), Object(defineProperty["a" /* default */])(_ref2, "vuecal--".concat(this.locale), this.locale), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--no-time', !this.time), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--view-with-time', this.hasTimeColumn), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--week-numbers', this.showWeekNumbers && this.view.id === 'month'), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--twelve-hour', this.twelveHour), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--click-to-navigate', this.clickToNavigate), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--hide-weekends', this.hideWeekends), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--split-days', this.hasSplits), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--sticky-split-labels', this.hasSplits && this.stickySplitLabels), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--overflow-x', this.minCellWidth && this.view.id === 'week' || this.hasSplits && this.minSplitWidth), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--small', this.small), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--xsmall', this.xsmall), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--resizing-event', this.domEvents.resizeAnEvent.endTimeMinutes), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--dragging-event', this.domEvents.dragAnEvent._eid), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--events-on-month-view', this.eventsOnMonthView), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--short-events', this.view.id === 'month' && this.eventsOnMonthView === 'short'), _ref2;
    }
  },
  watch: {
    events: {
      // To be able to detect an event attribute change, it has to be first initialized with a value.
      handler: function handler(events, oldEvents) {
        this.updateMutableEvents(events);
        this.addEventsToView();
      },
      deep: true
    },
    locale: function locale(_locale) {
      this.loadLocale(_locale);
    },
    selectedDate: function selectedDate(date) {
      this.updateSelectedDate(date);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_vue_calvue_type_script_lang_js_ = (vue_calvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vue-cal/index.vue





/* normalize component */

var vue_cal_component = normalizeComponent(
  components_vue_calvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal = (vue_cal_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_cal);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ })["default"];

/***/ })

}]);