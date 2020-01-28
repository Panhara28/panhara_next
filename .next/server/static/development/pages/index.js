module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/components/Footer.tsx";
=======
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/components/Footer.tsx";
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => __jsx("div", {
  id: "addo-footer2",
  className: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
<<<<<<< HEAD
});

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx("div", {
=======
}, __jsx("div", {
  className: "addo-narrow-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-4 animate-box fadeInLeft animated",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("p", {
  className: "addo-lead",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\xA9 2020 Panhara.work. All rights reserved")), __jsx("div", {
  className: "col-md-4 animate-box fadeInLeft animated",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("h2", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Panhara.work", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Chhouk Tit Panhara"))), __jsx("div", {
  className: "col-md-4 animate-box fadeInLeft animated",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("ul", {
  className: "social-network",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
<<<<<<< HEAD
})), __jsx("a", {
  className: "navbar-brand",
  href: "index.html",
=======
}, __jsx("li", {
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
<<<<<<< HEAD
}, " ", __jsx("img", {
  id: "logo_img",
  src: "/logo.png",
  alt: "",
=======
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-facebook font-14px black-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}))), __jsx("li", {
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-twitter-alt font-14px black-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-instagram font-14px black-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
<<<<<<< HEAD
}, "Home")), __jsx("li", {
  className: "",
=======
}))), __jsx("li", {
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
<<<<<<< HEAD
  href: "#about",
  className: "page-scroll",
=======
  href: "#",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-linkedin font-14px black-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
<<<<<<< HEAD
}, "About")), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("a", {
  href: "#service",
  className: "page-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Service")), __jsx("li", {
  className: "",
=======
}))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("aside", {
  id: "addo-aside",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  id: "addo-logo",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("a", {
  href: "#resume",
  className: "page-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Resume")), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  href: "#skill",
  className: "page-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Skill")), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: "#portfolio",
  className: "page-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Portfolio")), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "#blog",
  className: "page-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Blog")), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "#contact",
  className: "page-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
=======
}, " ", __jsx("a", {
  href: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Panhara.work", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Chhouk Tit Panhara")), " "), __jsx("nav", {
  id: "addo-main-menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("a", {
  href: "#about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "About")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  href: "#services",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Services")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  href: "#portfolio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Portfolio")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "#news",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "News")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  href: "#contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Contact")))), __jsx("div", {
  className: "addo-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, "contact")), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 26
=======
    lineNumber: 15
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 27
=======
    lineNumber: 16
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("a", {
  className: "",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 28
  },
  __self: undefined
}, "About"))), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
=======
    lineNumber: 16
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-facebook font-14px white-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  className: "page-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
=======
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-twitter-alt font-14px white-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, "Home"))))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import '../styles/bootstrap.scss';
// import '../styles/general.scss';
// import '../styles/button.scss';
// import '../styles/header.scss';
// import '../styles/intro.scss';
// import '../styles/service.scss';
// import '../styles/resume.scss';
// import '../styles/skill.scss';
// import '../styles/contact.scss';
// import '../styles/blog.scss';
// import '../styles/responsive.scss';


const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 19
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _sections_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/Intro */ "./sections/Intro.tsx");
/* harmony import */ var _sections_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/About */ "./sections/About.tsx");
/* harmony import */ var _sections_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/Service */ "./sections/Service.tsx");
/* harmony import */ var _sections_Resume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/Resume */ "./sections/Resume.tsx");
/* harmony import */ var _sections_Skill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Skill */ "./sections/Skill.tsx");
/* harmony import */ var _sections_Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/Blog */ "./sections/Blog.tsx");
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Index = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_sections_Intro__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(_sections_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(_sections_Service__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_sections_Resume__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(_sections_Skill__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(_sections_Blog__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./sections/About.tsx":
/*!****************************!*\
  !*** ./sections/About.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/about.scss */ "./styles/about.scss");
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_about_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/sections/About.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const data = {
  name: "Chhouk Tit Panhara",
  email: "titpanhara@gmail.com",
  phone: "095477325",
  dob: "28 April 1992",
  address: "#57ceo Street 204 Sangkat Tik Laork 3 Kanh Tol Kork",
  nationality: "Khmer"
};

const About = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("section", {
  id: "about",
  className: "about white-bg page-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  className: "about-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("img", {
  className: "img-responsive",
  src: "/panhara.png",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
})), __jsx("div", {
  className: "about-social",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-dribbble",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), " ")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-vimeo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), " ")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-pinterest-p",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), " ")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-behance",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), " ")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-linkedin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), " "))))), __jsx("div", {
  className: "col-lg-8 col-md-8 col-sm-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Know about me"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "About Me")), __jsx("div", {
  className: "title-name-gray",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "About me"))), __jsx("div", {
  className: "contact-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
=======
    lineNumber: 18
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-instagram font-14px white-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 46
  },
  __self: undefined
}, __jsx("div", {
  className: "my-contact clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
})), __jsx("div", {
  className: "contact-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "Name:"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, data.name)))), __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("div", {
  className: "my-contact clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-email",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
})), __jsx("div", {
  className: "contact-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Email:"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, " ", data.email, " ")))), __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("div", {
  className: "my-contact clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-mobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
})), __jsx("div", {
  className: "contact-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "Phone:"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, " ", data.phone, " "))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("div", {
  className: "my-contact clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-calendar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
})), __jsx("div", {
  className: "contact-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, "Date of birth: "), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, " ", data.dob, " ")))), __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, __jsx("div", {
  className: "my-contact clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-direction-alt",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
})), __jsx("div", {
  className: "contact-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, "Address: "), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, " ", data.address, " ")))), __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("div", {
  className: "my-contact clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("div", {
  className: "contact-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-flag-alt-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
})), __jsx("div", {
  className: "contact-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, "Nationality: "), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, " ", data.nationality, " "))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-12 col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx("div", {
  className: "about-block clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "I have more than ", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "5 years of experience"), " in the field of Computer Science/Information Technology. Specialized in HTML, CSS, JavaScript, Ruby, ", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "Ruby On Rails"), ", Nodejs, NextJs, ReactJS. Professional in building Point Of Sale, Human Resource Management System,", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, " Web Development,"), " etc."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, "Panhara.work as a Freelance Developer and a Designer"), __jsx("img", {
  className: "pull-right",
  src: "images/signature.png",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}))))))))));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./sections/Blog.tsx":
/*!***************************!*\
  !*** ./sections/Blog.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/sections/Blog.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Blog = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("section", {
  id: "blog",
  className: "blog white-bg page-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-12 col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "My Latest Blog Posts"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "From the blog ")), __jsx("div", {
  className: "title-name-gray",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Blog"))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("img", {
  className: "img-responsive",
  src: "images/blog/01.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("div", {
  className: "blog-date",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "June ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), "05"))), __jsx("div", {
  className: "blog-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-comment-alt",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), " ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "4")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), " ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Admin ")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-folder",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), " ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Development"))), __jsx("div", {
  className: "blog-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("a", {
  href: "blog-single.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Are You Famous Or Focused"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Commodo consequat ut enim ad minim niam, quis nostrud ullamco  nisi ut aliquip exea non veritatis illum laudantium"), __jsx("div", {
  className: "blog-bottom clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("div", {
  className: "button-small",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Read More..")), __jsx("div", {
  className: "social pull-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), " ")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-linkedin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), " ")))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./sections/Intro.tsx":
/*!****************************!*\
  !*** ./sections/Intro.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/sections/Intro.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Intro = () => __jsx("div", {
  className: "intro-bg gradient-01",
  style: {
    background: "url('/bg.jpg')"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  id: "scroll-down",
  className: "intro",
=======
    lineNumber: 19
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-linkedin font-14px white-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
})))), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("small", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "\xA9 2020 Panhara.work by ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Chhouk Tit Panhara"))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => __jsx("div", {
  id: "addo-page",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  className: "js-addo-nav-toggle addo-nav-toggle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("div", {
  id: "addo-main",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _sections_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/About */ "./sections/About.tsx");
/* harmony import */ var _sections_Skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/Skill */ "./sections/Skill.tsx");
/* harmony import */ var _sections_Reference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/Reference */ "./sections/Reference.tsx");
/* harmony import */ var _sections_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/Service */ "./sections/Service.tsx");
/* harmony import */ var _sections_Resume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Resume */ "./sections/Resume.tsx");
/* harmony import */ var _sections_Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/Blog */ "./sections/Blog.tsx");
/* harmony import */ var _sections_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/Contact */ "./sections/Contact.tsx");
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Index = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_sections_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_sections_Skill__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(_sections_Reference__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(_sections_Service__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(_sections_Resume__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx(_sections_Blog__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx(_sections_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./sections/About.tsx":
/*!****************************!*\
  !*** ./sections/About.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/about.scss */ "./styles/about.scss");
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_about_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/sections/About.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const data = {
  name: "Chhouk Tit Panhara",
  email: "titpanhara@gmail.com",
  phone: "095477325",
  dob: "28 April 1992",
  address: "#57ceo Street 204 Sangkat Tik Laork 3 Kanh Tol Kork",
  nationality: "Khmer"
};

const About = () => __jsx("div", {
  id: "about",
  className: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "heading-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Information"), __jsx("h2", {
  className: "addo-heading animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "About Me"))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "/panhara.png",
  className: "img-fluid mb-30 animate-box",
  "data-animate-effect": "fadeInLeft",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "col-md-7 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "heading-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "ABOUT ME"), __jsx("h2", {
  className: "cd-headline clip",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "I'm Chhouk Tit Panhara & "), __jsx("span", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("b", {
  className: "is-visible",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, " Web Developer"), __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Freelancer"), __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Web Designer"))), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Hi, My name is Chhouk Tit Panhara. I am a Web Developer, and I'm very passionate and dedicated to my work. With 4 years experience as a web designer and development, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do."), __jsx("div", {
  className: "addo-about-contact-wrap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Birthday:"), " 28 April 1992"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "Website:"), " panhara.work"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "Phone:"), " +85595477325")), __jsx("div", {
  className: "col-md-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Degree:"), " Web Development & Design"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Mail:"), " titpanhara@gmail.com"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "Facebook Page:"), " /codevlog")))), __jsx("ul", {
  className: "toolbar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("button", {
  className: "btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "HIRE ME")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("button", {
  className: "btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "DOWNLOAD CV"))))))));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./sections/Blog.tsx":
/*!***************************!*\
  !*** ./sections/Blog.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/sections/Blog.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Blog = () => __jsx("div", {
  id: "news",
  className: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-blog",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "intro-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
<<<<<<< HEAD
  className: "row",
=======
  className: "col-md-12",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("div", {
  className: "col-md-12 text-center",
=======
}, " ", __jsx("span", {
  className: "heading-meta",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("h1", {
=======
}, "Read"), __jsx("h2", {
  className: "addo-heading animate-box",
  "data-animate-effect": "fadeInLeft",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
<<<<<<< HEAD
}, " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, " Hello i\u2019m "), " Chhouk Tit Panhara "), __jsx("div", {
  id: "typer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("div", {
  className: "button-large",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Download my CV")))))), __jsx("a", {
  className: "scroll-down page-scroll",
  title: "Scroll Down",
  href: "#about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./sections/Resume.tsx":
/*!*****************************!*\
  !*** ./sections/Resume.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/sections/Resume.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Resume = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("section", {
  id: "resume",
  className: "resume white-bg page-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-12 col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "My Work Experience"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Resume")), __jsx("div", {
  className: "title-name-gray",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Resume"))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-12 col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Experience : "))), __jsx("div", {
  className: "resume-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  className: "resume-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-ruler-pencil",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})), __jsx("div", {
  className: "resume-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
=======
}, "LATEST NEWS"))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-entry animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  href: "post.html",
  className: "blog-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("img", {
  src: "images/blog/blog-05.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "in ", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "LIFESTYLE"))), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  href: "post.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Responsive Desing")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Fusce suscipit, ante a hendrerit ullamcorper, risus nisl cursus purus, sit amet viverra ante nulla vel justo. Morbi justo erat, posuere vel libero non, bibendum convallis enim.")))), __jsx("div", {
  className: "col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-entry animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "post.html",
  className: "blog-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("img", {
  src: "images/blog/blog-06.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "in ", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "TRAVEL"))), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  href: "post.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Bootstrap Framework")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Fusce suscipit, ante a hendrerit ullamcorper, risus nisl cursus purus, sit amet viverra ante nulla vel justo. Morbi justo erat, posuere vel libero non, bibendum convallis enim.")))), __jsx("div", {
  className: "col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-entry animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("a", {
  href: "post.html",
  className: "blog-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("img", {
  src: "images/blog/blog-02.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
})), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "in ", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, "Website Solutions Pvt. Ltd"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 31
  },
  __self: undefined
}, "2013 to present"))), __jsx("div", {
  className: "col-lg-8 col-md-8 col-sm-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("div", {
  className: "resume-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Front-End Development"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  "))))), __jsx("div", {
  className: "resume-block",
=======
    lineNumber: 39
  },
  __self: undefined
}, "LIFESTYLE"))), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("a", {
  href: "post.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Animation Effects")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Fusce suscipit, ante a hendrerit ullamcorper, risus nisl cursus purus, sit amet viverra ante nulla vel justo. Morbi justo erat, posuere vel libero non, bibendum convallis enim."))))))));

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./sections/Contact.tsx":
/*!******************************!*\
  !*** ./sections/Contact.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/sections/Contact.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Contact = () => __jsx("div", {
  id: "contact",
  className: "section",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("div", {
<<<<<<< HEAD
  className: "row",
=======
  className: "addo-contact",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("div", {
<<<<<<< HEAD
  className: "col-lg-4 col-md-4 col-sm-4",
=======
  className: "container-fluid",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("div", {
<<<<<<< HEAD
  className: "resume-icon",
=======
  className: "row",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("span", {
  className: "ti-bookmark-alt",
=======
}, __jsx("div", {
  className: "col-md-12",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
<<<<<<< HEAD
})), __jsx("div", {
  className: "resume-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Global Solutions"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "2010 to 2013"))), __jsx("div", {
  className: "col-lg-8 col-md-8 col-sm-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("div", {
  className: "resume-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "UI/UX Design"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Ut enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "))))), __jsx("div", {
  className: "resume-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("div", {
  className: "resume-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-calendar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
})), __jsx("div", {
  className: "resume-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "Template Agency"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "2009 to 2010"))), __jsx("div", {
  className: "col-lg-8 col-md-8 col-sm-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("div", {
  className: "resume-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, "Website production"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, "Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea. "))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
=======
}, " ", __jsx("span", {
  className: "heading-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Location"), __jsx("h2", {
  className: "addo-heading animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Contact Me"))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-6 mb-30 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Panhara.work FREELANCER"), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), "We make project live.", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), "and responsive."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "PHONE: +85595477325"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "EMAIL: titpanhara@gmail.com"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "ADDRESS: #57ceo Street 204 Sangkat Tik Laork 3 Kanh Tol Kork.")), __jsx("div", {
  className: "col-md-6 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "GET IN TOUCH")), __jsx("form", {
  method: "post",
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("div", {
  className: "form-group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  className: "form-control",
  placeholder: "Name",
  required: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), " ")), __jsx("div", {
  className: "col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("div", {
  className: "form-group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  className: "form-control",
  placeholder: "Email",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 81
=======
    lineNumber: 29
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}), " ")), __jsx("div", {
  className: "col-sm-12",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 82
  },
  __self: undefined
}, "Education : "))), __jsx("div", {
  className: "resume-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
=======
    lineNumber: 31
  },
  __self: undefined
}, __jsx("div", {
  className: "form-group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("textarea", {
  name: "message",
  id: "message",
  cols: 30,
  rows: 5,
  className: "form-control",
  placeholder: "Message",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 86
=======
    lineNumber: 33
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}))), __jsx("div", {
  className: "col-sm-12",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 87
=======
    lineNumber: 37
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "form-group",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 88
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-crown",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
=======
    lineNumber: 38
  },
  __self: undefined
}, __jsx("button", {
  className: "btn",
  type: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, "Say Hello!")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./sections/Reference.tsx":
/*!********************************!*\
  !*** ./sections/Reference.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/sections/Reference.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Reference = () => __jsx("div", {
  id: "references",
  className: "section",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 91
=======
    lineNumber: 2
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-references",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 92
  },
  __self: undefined
}, "University of London"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, "2008 to 2009"))), __jsx("div", {
  className: "col-lg-8 col-md-8 col-sm-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
=======
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-12",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 97
=======
    lineNumber: 6
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "heading-meta",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 98
  },
  __self: undefined
}, "Computer science"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "))))), __jsx("div", {
  className: "resume-block clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
=======
    lineNumber: 6
  },
  __self: undefined
}, "My Team"), __jsx("h2", {
  className: "addo-heading animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Team"))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 105
=======
    lineNumber: 11
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "team",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 106
=======
    lineNumber: 12
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "images/references/01.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 107
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-thumb-up",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
=======
    lineNumber: 12
  },
  __self: undefined
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 110
=======
    lineNumber: 14
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 111
  },
  __self: undefined
}, "Institue of art & Design"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, "2007 to 2009"))), __jsx("div", {
  className: "col-lg-8 col-md-8 col-sm-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
=======
    lineNumber: 15
  },
  __self: undefined
}, "Jason Lee"), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "AMM Company | CEO"))))), __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("div", {
  className: "team",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 116
=======
    lineNumber: 21
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "images/references/02.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 117
  },
  __self: undefined
}, "Software engineering"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim niam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "))))))));

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./sections/Service.tsx":
/*!******************************!*\
  !*** ./sections/Service.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/sections/Service.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Service = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("section", {
  id: "service",
  className: "services white-bg page-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
=======
    lineNumber: 21
  },
  __self: undefined
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-12 col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "section-title-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "What i can do better"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Services")), __jsx("div", {
  className: "title-name-gray",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Services"))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("div", {
  className: "service-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-desktop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Tranding Design"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this exercise is to hypnotize yourself to be aware of two...."), __jsx("div", {
  className: "contact-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  className: "clearfix",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "pull-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Read More..."), " ", __jsx("span", {
  className: "ti-arrow-circle-right pull-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}))))), __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("div", {
  className: "service-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-slice",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Clear Code"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Two distinct pathways that you could take for your life this very day. Have a think about something that you do that you are maybe not motivated to change about yourself. Prior to running through this technique, just have a think about... "), __jsx("div", {
  className: "contact-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("a", {
  className: "clearfix",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "pull-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Read More..."), " ", __jsx("span", {
  className: "ti-arrow-circle-right pull-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}))))), __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("div", {
  className: "service-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-brush-alt",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "App Design"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Then with that thing in mind, follow these simple steps. Step One: Get yourself nice and relaxed and settled. Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind... "), __jsx("div", {
  className: "contact-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("a", {
  className: "clearfix",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "pull-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "Read More..."), " ", __jsx("span", {
  className: "ti-arrow-circle-right pull-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}))))), __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("div", {
  className: "service-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-layout-media-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "UI/UX Design"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound.... "), __jsx("div", {
  className: "contact-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("a", {
  className: "clearfix",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
=======
    lineNumber: 24
  },
  __self: undefined
}, "Emily Sorey"), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "RESOLVE |\xA0General Manager"))))), __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("div", {
  className: "team",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "images/references/03.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Robert Luca"), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "AKB | Software Team Lead")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Reference);

/***/ }),

/***/ "./sections/Resume.tsx":
/*!*****************************!*\
  !*** ./sections/Resume.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/sections/Resume.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Resume = () => __jsx("div", {
  id: "portfolio",
  className: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "heading-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Portfolio"), __jsx("h2", {
  className: "addo-heading animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Creative Works"))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  href: "projects-single.html",
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "project",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "images/portfolio/01.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Mockup"), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Branding Desing")))))), __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: "projects-single.html",
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  className: "project",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "images/portfolio/02.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Book"), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Graphic Design")))))), __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("a", {
  href: "projects-single.html",
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("div", {
  className: "project",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "images/portfolio/03.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "pull-left",
  __source: {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 55
  },
  __self: undefined
}, "Read More..."), " ", __jsx("span", {
  className: "ti-arrow-circle-right pull-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
})))))))));

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./sections/Skill.tsx":
/*!****************************!*\
  !*** ./sections/Skill.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/panhara/Documents/nextjs/panhara_next/sections/Skill.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Skill = () => __jsx("div", {
=======
    lineNumber: 39
  },
  __self: undefined
}, "Clock"), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Graphic Design")))))), __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("section", {
  id: "skill",
  className: "my-skill white-bg page-section",
=======
}, __jsx("a", {
  href: "projects-single.html",
  className: "desc",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("div", {
  className: "project",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "images/portfolio/04.jpg",
  className: "img-fluid",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "Logo"), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
<<<<<<< HEAD
}, "I am good at"), __jsx("h2", {
=======
}, "Branding Design")))))), __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
<<<<<<< HEAD
}, "My Skill")), __jsx("div", {
  className: "title-name-gray",
=======
}, __jsx("a", {
  href: "projects-single.html",
  className: "desc",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("div", {
  className: "project",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
<<<<<<< HEAD
}, "My Skill"))))), __jsx("div", {
  className: "language-skills",
=======
}, " ", __jsx("img", {
  src: "images/portfolio/05.jpg",
  className: "img-fluid",
  alt: "",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("div", {
  className: "row",
=======
}), __jsx("div", {
  className: "desc",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("div", {
<<<<<<< HEAD
  className: "col-lg-3 col-md-3 col-sm-3",
=======
  className: "con",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("div", {
  className: "chart-bar",
=======
}, __jsx("h3", {
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("div", {
  className: "chart",
  "data-percent": "73",
=======
}, "Kinfolk"), " ", __jsx("span", {
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("span", {
  className: "percent",
=======
}, "Adobe InDesign")))))), __jsx("div", {
  className: "col-md-4 animate-box",
  "data-animate-effect": "fadeInLeft",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
<<<<<<< HEAD
}, "73"), __jsx("canvas", {
  height: "150",
  width: "150",
=======
}, __jsx("a", {
  href: "projects-single.html",
  className: "desc",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
<<<<<<< HEAD
})), __jsx("h3", {
=======
}, __jsx("div", {
  className: "project",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
<<<<<<< HEAD
}, "English ", __jsx("br", {
=======
}, " ", __jsx("img", {
  src: "images/portfolio/08.jpg",
  className: "img-fluid",
  alt: "",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
<<<<<<< HEAD
}), " Experienced"))), __jsx("div", {
  className: "col-lg-3 col-md-3 col-sm-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("div", {
  className: "chart-bar",
=======
}), __jsx("div", {
  className: "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("div", {
  className: "con",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("div", {
  className: "chart",
  "data-percent": "55",
=======
}, __jsx("h3", {
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("span", {
  className: "percent",
=======
}, "Eight"), " ", __jsx("span", {
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
<<<<<<< HEAD
}, "55"), __jsx("canvas", {
  height: "150",
  width: "150",
=======
}, "Adobe Illustration"))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./sections/Service.tsx":
/*!******************************!*\
  !*** ./sections/Service.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/sections/Service.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Service = () => __jsx("div", {
  id: "services",
  className: "section",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
<<<<<<< HEAD
})), __jsx("h3", {
=======
}, __jsx("div", {
  className: "addo-services",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
<<<<<<< HEAD
}, "French ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), "Advanced"))), __jsx("div", {
  className: "col-lg-3 col-md-3 col-sm-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("div", {
  className: "chart-bar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  className: "chart",
  "data-percent": "89",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("span", {
  className: "percent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "89"), __jsx("canvas", {
  height: "150",
  width: "150",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
})), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Spanish ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), "Basic"))), __jsx("div", {
  className: "col-lg-3 col-md-3 col-sm-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("div", {
  className: "chart-bar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("div", {
  className: "chart",
  "data-percent": "95",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("span", {
  className: "percent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "95"), __jsx("canvas", {
  height: "150",
  width: "150",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
})), __jsx("h3", {
=======
}, __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "heading-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "What I Do"), __jsx("h2", {
  className: "addo-heading animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Services"))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-feature animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "et-laptop font-35px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "addo-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Web Desing"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo.")))), __jsx("div", {
  className: "col-md-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-feature animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "et-lightbulb font-35px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "addo-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Web Development"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo.")))), __jsx("div", {
  className: "col-md-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-feature animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("div", {
  className: "addo-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "et-mobile font-35px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "addo-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Fully Responsive"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo."))))))));

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./sections/Skill.tsx":
/*!****************************!*\
  !*** ./sections/Skill.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Khmerload/Documents/projects/panhara_next/sections/Skill.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Skill = () => __jsx("div", {
  id: "skills",
  className: "section",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
<<<<<<< HEAD
}, "German ", __jsx("br", {
=======
}, __jsx("div", {
  className: "addo-skills",
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), "Basic")))), __jsx("div", {
  className: "knowledge",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
<<<<<<< HEAD
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Knowledge"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Auis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}), " Web design and development"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}), " Multimedia design"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}), " Digital media development"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}), " Interactive computing"))), __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}), " Strong creative skills"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}), " The ability to pay attention to detail"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), " Ability to work to deadlines"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}), " Comfortable with a CMS"))), __jsx("div", {
  className: "col-lg-4 col-md-4 col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}), " Cultivate a design sense"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}), " Right balance of tools "), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}), " Approach every new skill"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("span", {
  className: "ti-hand-point-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}), " Good business management")))))))));
=======
}, " ", __jsx("span", {
  className: "heading-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Abilities"), __jsx("h2", {
  className: "addo-heading animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "My Skills"))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-12 animate-box",
  "data-animate-effect": "fadeInLeft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("p", {
  className: "bar-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Ruby On Rails", __jsx("span", {
  className: "percent align-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "90%")), __jsx("div", {
  className: "bar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "bar-fill bar-fill-developer start",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), __jsx("p", {
  className: "bar-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Inkscape", __jsx("span", {
  className: "percent align-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "80%")), __jsx("div", {
  className: "bar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  className: "bar-fill bar-fill-photoshop start",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx("p", {
  className: "bar-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Web Design", __jsx("span", {
  className: "percent align-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "95%")), __jsx("div", {
  className: "bar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  className: "bar-fill bar-fill-webdesign start",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})), __jsx("p", {
  className: "bar-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "ReactJS", __jsx("span", {
  className: "percent align-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "70%")), __jsx("div", {
  className: "bar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  className: "bar-fill bar-fill-socialmedia start",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})))))));
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405

/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ }),

/***/ "./styles/about.scss":
/*!***************************!*\
  !*** ./styles/about.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

<<<<<<< HEAD
/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/panhara/Documents/nextjs/panhara_next/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
=======
/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

<<<<<<< HEAD
/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {
=======
module.exports = __webpack_require__(/*! /mnt/c/Users/Khmerload/Documents/projects/panhara_next/pages/index.tsx */"./pages/index.tsx");
>>>>>>> 0abd7338268c9a5fb066fb42bf7f4cfe9082f405

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map