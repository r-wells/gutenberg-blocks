/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ga-logo.svg":
/*!*************************!*\
  !*** ./src/ga-logo.svg ***!
  \*************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgGaLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#69AA04",
  d: "M0-1.612h27.09v27.255H0z"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "#FFF",
  stroke: "#FFF",
  strokeMiterlimit: 10
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12.2 3.145c.779.715 1.283 1.673 1.494 2.891h-.406c-.195-1.104-.65-1.965-1.364-2.599-.78-.714-1.803-1.056-3.07-1.056-1.542 0-2.761.568-3.67 1.721-.845 1.04-1.25 2.372-1.25 3.979s.438 2.923 1.315 3.93c.942 1.088 2.241 1.641 3.898 1.641a7.79 7.79 0 002.258-.341c.747-.227 1.332-.52 1.786-.845V8.569H8.627v-.39h4.954v4.482c-.487.39-1.12.731-1.916.991a8.502 8.502 0 01-2.518.39c-1.819 0-3.216-.601-4.223-1.771-.926-1.088-1.38-2.485-1.38-4.19 0-1.689.438-3.103 1.348-4.223.974-1.25 2.29-1.868 3.962-1.868 1.365.001 2.485.375 3.346 1.155zM16.432 9.373l5.185 12.59h-.494l-1.693-4.144h-6.56l-1.693 4.144h-.494l5.184-12.59h.565zm2.821 8.023l-3.068-7.564h-.053l-3.086 7.564h6.207z"
}));

var SvgGaLogo = function SvgGaLogo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 25.16,
    height: 23.954
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIyNS4xNnB4IiBoZWlnaHQ9IjIzLjk1NHB4IiB2aWV3Qm94PSIwIDAgMjUuMTYgMjMuOTU0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNS4xNiAyMy45NTQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iLTEuNjEyIiBmaWxsPSIjNjlBQTA0IiB3aWR0aD0iMjcuMDkiIGhlaWdodD0iMjcuMjU1Ii8+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjIsMy4xNDVjMC43NzksMC43MTUsMS4yODMsMS42NzMsMS40OTQsMi44OTFoLTAuNDA2DQoJCWMtMC4xOTUtMS4xMDQtMC42NS0xLjk2NS0xLjM2NC0yLjU5OWMtMC43OC0wLjcxNC0xLjgwMy0xLjA1Ni0zLjA3LTEuMDU2Yy0xLjU0MiwwLTIuNzYxLDAuNTY4LTMuNjcsMS43MjENCgkJYy0wLjg0NSwxLjA0LTEuMjUsMi4zNzItMS4yNSwzLjk3OXMwLjQzOCwyLjkyMywxLjMxNSwzLjkzYzAuOTQyLDEuMDg4LDIuMjQxLDEuNjQxLDMuODk4LDEuNjQxYzAuNzQ3LDAsMS41MS0wLjExNCwyLjI1OC0wLjM0MQ0KCQljMC43NDctMC4yMjcsMS4zMzItMC41MiwxLjc4Ni0wLjg0NVY4LjU2OUg4LjYyN3YtMC4zOWg0Ljk1NHY0LjQ4MmMtMC40ODcsMC4zOS0xLjEyLDAuNzMxLTEuOTE2LDAuOTkxDQoJCWMtMC44NDUsMC4yNTktMS42NzMsMC4zOS0yLjUxOCwwLjM5Yy0xLjgxOSwwLTMuMjE2LTAuNjAxLTQuMjIzLTEuNzcxYy0wLjkyNi0xLjA4OC0xLjM4LTIuNDg1LTEuMzgtNC4xOQ0KCQljMC0xLjY4OSwwLjQzOC0zLjEwMywxLjM0OC00LjIyM2MwLjk3NC0xLjI1LDIuMjktMS44NjgsMy45NjItMS44NjhDMTAuMjE5LDEuOTkxLDExLjMzOSwyLjM2NSwxMi4yLDMuMTQ1eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTYuNDMyLDkuMzczbDUuMTg1LDEyLjU5aC0wLjQ5NGwtMS42OTMtNC4xNDRoLTYuNTYNCgkJbC0xLjY5Myw0LjE0NGgtMC40OTRsNS4xODQtMTIuNTlIMTYuNDMyeiBNMTkuMjUzLDE3LjM5NmwtMy4wNjgtNy41NjRoLTAuMDUzbC0zLjA4Niw3LjU2NEgxOS4yNTN6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial */ "./src/testimonial/index.js");
/**Main file to import different blocks */


/***/ }),

/***/ "./src/testimonial/index.js":
/*!**********************************!*\
  !*** ./src/testimonial/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText; //Step 1


/**
 * Steps to make a Gutenberg Block Editable / Dynamic
 * 1) Import the component you want to use
 * 2) Place the component where you want to use it
 * 3) Create a function to read the contents
 * 4) Register an Attribute
 * 5) Extract the contents from props
 * 6) Save the contents in this attribute
 * 7) Use the attribute on save()
 */

registerBlockType("ga/testimonial", {
  title: "GA Testimonial",
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "gourmet-artist",
  attributes: {
    testimonialText: {
      type: "string",
      source: "html",
      selector: ".testimonial-block blockquote"
    }
  },
  edit: function edit(props) {
    //Reads the text from the testimonial
    var onChangeTestimonialText = function onChangeTestimonialText(newText) {
      console.log(newText);
    }; //Extract contents from attributes


    var testimonialText = props.attributes.testimonialText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      onChange: onChangeTestimonialText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: "img/testimonial.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Alice White AnyCompany CEO")));
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptatem reiciendis id placeat libero. Explicabo nulla pariatur iure repudiandae officiis accusamus deleniti provident possimus omnis. Ipsum ipsa placeat recusandae consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem qui doloremque culpa molestiae."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: "img/testimonial.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Alice White AnyCompany CEO")));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map