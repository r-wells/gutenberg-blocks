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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

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

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar; //Step 1

var IconButton = wp.components.IconButton;

registerBlockType("ga/hero", {
  title: "GA Hero",
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "gourmet-artist",
  heroTitle: {
    type: "string",
    source: "html",
    selector: ".hero-block h1"
  },
  heroText: {
    type: "string",
    source: "html",
    selector: ".hero-block p"
  },
  heroImage: {
    type: "string",
    source: "html",
    selector: ".hero-block p"
  },
  alignContent: {
    type: "string",
    default: "center"
  },
  supports: {
    align: ["wide", "full"]
  },
  edit: function edit(props) {
    //Register attributes
    var _props$attributes = props.attributes,
        heroTitle = _props$attributes.heroTitle,
        heroText = _props$attributes.heroText,
        heroImage = _props$attributes.heroImage,
        alignContent = _props$attributes.alignContent,
        setAttributes = props.setAttributes; //Reads the contents from the title

    var onChangeTitle = function onChangeTitle(newTitle) {
      setAttributes({
        heroTitle: newTitle
      });
    };

    var onChangeText = function onChangeText(newText) {
      setAttributes({
        heroText: newText
      });
    };

    var onSelectImage = function onSelectImage(newImage) {
      setAttributes({
        heroImage: newImage.sizes.full.url
      });
    };

    var onChangeAlignment = function onChangeAlignment(newAlignment) {
      setAttributes({
        alignContent: newAlignment
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "url(".concat(heroImage, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      onChange: onChangeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          onClick: open
        }, "Open Media Library");
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add the title",
      onChange: onChangeTitle,
      value: heroTitle,
      style: {
        textAlign: alignContent
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add the tagline",
      onChange: onChangeText,
      value: heroText,
      style: {
        textAlign: alignContent
      }
    })));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        heroTitle = _props$attributes2.heroTitle,
        heroText = _props$attributes2.heroText,
        heroImage = _props$attributes2.heroImage,
        alignContent = _props$attributes2.alignContent;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "url(".concat(heroImage, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      style: {
        textAlign: alignContent
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: heroTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        textAlign: alignContent
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: heroText
    })));
  }
});

/***/ }),

/***/ "./src/imageText/index.js":
/*!********************************!*\
  !*** ./src/imageText/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    URLInputButton = _wp$editor.URLInputButton; //Step 1

var IconButton = wp.components.IconButton;

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

registerBlockType("ga/imagetext", {
  title: "GA Image with text",
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "gourmet-artist",
  attributes: {
    appTitle: {
      source: "html",
      type: "string",
      selector: ".content h1"
    },
    appText: {
      source: "html",
      type: "string",
      selector: ".content p"
    },
    appImage: {
      source: "attribute",
      type: "string",
      attribute: "src",
      selector: ".image img"
    },
    appURL: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: ".content a"
    },
    appAlignment: {
      type: "string",
      default: "center"
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        appTitle = _props$attributes.appTitle,
        appText = _props$attributes.appText,
        appImage = _props$attributes.appImage,
        appURL = _props$attributes.appURL,
        appAlignment = _props$attributes.appAlignment,
        setAttributes = props.setAttributes;

    var onChangeTitle = function onChangeTitle(newTitle) {
      setAttributes({
        appTitle: newTitle
      });
    };

    var onChangeText = function onChangeText(newText) {
      setAttributes({
        appText: newText
      });
    };

    var onSelectImage = function onSelectImage(newImage) {
      setAttributes({
        appImage: newImage.sizes.full.url
      });
    };

    var onChangeAppURL = function onChangeAppURL(newURL) {
      setAttributes({
        appURL: newURL
      });
    };

    var onChangeAlignContent = function onChangeAlignContent(newAlignment) {
      setAttributes({
        appAlignment: newAlignment
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-text-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      onChange: onChangeAlignContent
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content",
      style: {
        textAlign: appAlignment
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add the Title",
      onChange: onChangeTitle,
      value: appTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add the Text",
      onChange: onChangeText,
      value: appText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: appURL,
      className: "button",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Download"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      onChange: onChangeAppURL,
      url: appURL
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: appImage
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: appImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          onClick: open,
          icon: "format-image",
          showToolTip: "true",
          label: "Add Image"
        });
      }
    }))));
  },
  styles: [{
    name: "default",
    label: "Blue (Default)",
    isDefault: true
  }, {
    name: "green",
    label: "Green"
  }, {
    name: "pink",
    label: "Pink"
  }],
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        appTitle = _props$attributes2.appTitle,
        appText = _props$attributes2.appText,
        appImage = _props$attributes2.appImage,
        appURL = _props$attributes2.appURL,
        appAlignment = _props$attributes2.appAlignment;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-text-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content",
      style: {
        textAlign: appAlignment
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: appTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: appText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: appURL,
      className: "button",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Download")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: appImage
    }))));
  }
});

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
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/* harmony import */ var _imageText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageText */ "./src/imageText/index.js");
/* harmony import */ var _latest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./latest */ "./src/latest/index.js");
/* harmony import */ var _select_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-post */ "./src/select-post/index.js");
/* harmony import */ var _select_post_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-post-nested */ "./src/select-post-nested/index.js");
/**Main file to import different blocks */







/***/ }),

/***/ "./src/latest/index.js":
/*!*****************************!*\
  !*** ./src/latest/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var withSelect = wp.data.withSelect;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;

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

registerBlockType("ga/latest", {
  title: "GA Latest Recipes",
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "gourmet-artist",
  edit: withSelect(function (select) {
    return {
      //Send GET request to WP Rest API
      posts: select("core").getEntityRecords("postType", "recipes", {
        per_page: 3
      })
    };
  })(function (_ref) {
    var posts = _ref.posts;

    if (!posts) {
      return "Loading...";
    }

    if (posts && posts.length === 0) {
      return "There are no posts to return";
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Latest Recipes Block"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "latest-recipes container"
    }, posts.map(function (post) {
      console.log(post);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: post.recipe_image
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, post.title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
        value: post.content.rendered.substring(0, 180)
      }))));
    })));
  }),
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/select-post-nested/index.js":
/*!*****************************************!*\
  !*** ./src/select-post-nested/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls;
var InnerBlocks = wp.editor.InnerBlocks; // const { withSelect } = wp.data;

var SelectControl = wp.components.SelectControl;
var Component = wp.element.Component;

registerBlockType("ga/select-post-nested", {
  title: "Select Post Nested",
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "gourmet-artist",
  edit: function edit(props) {
    // return "engage";
    var className = props.className;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ["ga/select-post"]
    }))];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/select-post/MySelectPosts.js":
/*!******************************************!*\
  !*** ./src/select-post/MySelectPosts.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);







var __ = wp.i18n.__;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;
var Component = wp.element.Component;

var MySelectPosts =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MySelectPosts, _Component);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MySelectPosts, null, [{
    key: "getInitialState",
    //Method for setting the initial state
    value: function getInitialState(selectedPost) {
      return {
        posts: [],
        selectedPost: selectedPost,
        post: {}
      };
    }
  }]);

  function MySelectPosts() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MySelectPosts);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(MySelectPosts).apply(this, arguments));
    _this.state = _this.constructor.getInitialState(_this.props.attributes.selectedPost); //Binding

    _this.getOptions = _this.getOptions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)); //Load the posts

    _this.getOptions();

    _this.onChangeSelectPost = _this.onChangeSelectPost.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MySelectPosts, [{
    key: "getOptions",
    value: function getOptions() {
      var _this2 = this;

      return new wp.api.collections.Posts().fetch().then(function (posts) {
        if (posts && 0 !== _this2.state.selectedPost) {
          //If we have a selected post, find that post and return it
          var post = posts.find(function (item) {
            return item.id == _this2.state.selectedPost;
          });

          _this2.setState({
            post: post,
            posts: posts
          });
        } else {
          _this2.setState({
            posts: posts
          });
        }
      });
    }
  }, {
    key: "onChangeSelectPost",
    value: function onChangeSelectPost(value) {
      //Find the post
      var post = this.state.posts.find(function (item) {
        return item.id === parseInt(value);
      });
      console.log(value); //Set the state

      this.setState({
        selectedPost: parseInt(value),
        post: post
      }); //set the attributes

      this.props.setAttributes({
        selectedPost: parseInt(value),
        title: post.title.rendered,
        content: post.excerpt.rendered,
        link: post.link
      });
    }
  }, {
    key: "render",
    value: function render() {
      //Options to hold all the loaded posts
      var options = [{
        value: 0,
        label: __("Select a post")
      }];

      var output = __("Loading Posts");

      this.props.className += " loading";

      if (this.state.posts.length > 0) {
        var loading = __("We have %d posts. Choose one.");

        output = loading.replace("%d", this.state.posts.length);
        this.state.posts.forEach(function (post) {
          options.push({
            value: post.id,
            label: post.title.rendered
          });
        });
      } else {
        output = __("No posts found. Please create some first");
      } // Checking if we have anything in the object


      if (this.state.post.hasOwnProperty("title")) {
        output = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: "post"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h2", {
          dangerouslySetInnerHTML: {
            __html: this.state.post.title.rendered
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
          dangerouslySetInnerHTML: {
            __html: this.state.post.excerpt.rendered
          }
        }));
        this.props.className += " has-post";
      } else {
        this.props.className += " no-post";
      }

      return [//If we are focued on this block, create the inspector controls
      !!this.props.isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
        onChange: this.onChangeSelectPost,
        value: this.props.attributes.selectedPost,
        label: __("Select a post"),
        options: options
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: this.props.className
      }, output))];
    }
  }]);

  return MySelectPosts;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (MySelectPosts);

/***/ }),

/***/ "./src/select-post/index.js":
/*!**********************************!*\
  !*** ./src/select-post/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");
/* harmony import */ var _MySelectPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MySelectPosts */ "./src/select-post/MySelectPosts.js");

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // const { withSelect } = wp.data;

var SelectControl = wp.components.SelectControl;
var Component = wp.element.Component;


registerBlockType("ga/select-post", {
  title: "Select Post",
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "gourmet-artist",
  attributes: {
    content: {
      type: "array",
      source: "children",
      selector: "p"
    },
    title: {
      type: "string",
      selector: "h2"
    },
    link: {
      type: "string",
      selector: "a"
    },
    selectedPost: {
      type: "number",
      default: 0
    }
  },
  edit: _MySelectPosts__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "post"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.link
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      dangerouslySetInnerHTML: {
        __html: props.attributes.title
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      dangerouslySetInnerHTML: {
        __html: props.attributes.content
      }
    })));
  }
});

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
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette; //Step 1

var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;

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
    },
    testimonialName: {
      type: "string",
      source: "html",
      selector: ".testimonial-info p"
    },
    testmonialImage: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: ".testimonial-info img"
    },
    testimonialColor: {
      type: "string"
    }
  },
  edit: function edit(props) {
    //Extract contents from attributes
    var _props$attributes = props.attributes,
        testimonialText = _props$attributes.testimonialText,
        testimonialName = _props$attributes.testimonialName,
        testmonialImage = _props$attributes.testmonialImage,
        testimonialColor = _props$attributes.testimonialColor,
        setAttributes = props.setAttributes; //Reads the text from the testimonial

    var onChangeTestimonialText = function onChangeTestimonialText(newText) {
      setAttributes({
        testimonialText: newText
      });
    };

    var onChangeTestimonialName = function onChangeTestimonialName(personName) {
      setAttributes({
        testimonialName: personName
      });
    }; //Access selected image


    var onSelectImage = function onSelectImage(newImage) {
      setAttributes({
        testmonialImage: newImage.sizes.medium.url
      });
    };

    var onChangeTestimonialColor = function onChangeTestimonialColor(newColor) {
      setAttributes({
        testimonialColor: newColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color Options"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-based-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-based-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components=based-control__label"
    }, "Name person's color and line"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeTestimonialColor
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-block",
      style: {
        borderColor: testimonialColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      onChange: onChangeTestimonialText,
      value: testimonialText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: testmonialImage
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open
        }, "Open Media Library");
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add the person for testimonial",
      onChange: onChangeTestimonialName,
      value: testimonialName,
      style: {
        color: testimonialColor
      }
    })))));
  },
  save: function save(props) {
    //Extract the contents from props
    var _props$attributes2 = props.attributes,
        testimonialText = _props$attributes2.testimonialText,
        testimonialName = _props$attributes2.testimonialName,
        testmonialImage = _props$attributes2.testmonialImage,
        testimonialColor = _props$attributes2.testimonialColor,
        setAttributes = props.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-block",
      style: {
        borderColor: testimonialColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: testimonialText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: testmonialImage
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        color: testimonialColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: testimonialName
    }))));
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