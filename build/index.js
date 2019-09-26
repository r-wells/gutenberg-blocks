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

var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;

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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: "img/recipe1.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Delicious Breakfast in 10 min"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Morbi eget iaculis tellus. Vestibulum eu leo odio. Pellentesque lacus magna, suscipit sed semper sed, tempor vitae nisi. Vivamus venenatis, lacus in ultricies pharetra, odio mi sagittis ipsum, ac maximus turpis mi eu mauris.", " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      className: "button"
    }, "Read More"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: "img/recipe2.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Pancakes for your next meeting"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Morbi eget iaculis tellus. Vestibulum eu leo odio. Pellentesque lacus magna, suscipit sed semper sed, tempor vitae nisi. Vivamus venenatis, lacus in ultricies pharetra, odio mi sagittis ipsum, ac maximus turpis mi eu mauris.", " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      className: "button"
    }, "Read More"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: "img/recipe3.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Amazing barbecue at home"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Morbi eget iaculis tellus. Vestibulum eu leo odio. Pellentesque lacus magna, suscipit sed semper sed, tempor vitae nisi. Vivamus venenatis, lacus in ultricies pharetra, odio mi sagittis ipsum, ac maximus turpis mi eu mauris.", " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      className: "button"
    }, "Read More")))));
  }),
  save: function save() {
    return null;
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