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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/blocks.js":
/*!**************************!*\
  !*** ./assets/blocks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _includes_blocks_prerequisites_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../includes/blocks/prerequisites/block */ "./includes/blocks/prerequisites/block.js");
/* harmony import */ var _includes_blocks_build_towards_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../includes/blocks/build_towards/block */ "./includes/blocks/build_towards/block.js");
/* harmony import */ var _includes_blocks_achieve_by_lesson_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../includes/blocks/achieve_by_lesson/block */ "./includes/blocks/achieve_by_lesson/block.js");
/* harmony import */ var _includes_blocks_align_with_themes_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../includes/blocks/align_with_themes/block */ "./includes/blocks/align_with_themes/block.js");
/* harmony import */ var _includes_blocks_related_lessons_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../includes/blocks/related_lessons/block */ "./includes/blocks/related_lessons/block.js");
/* harmony import */ var _includes_blocks_ccel_filter_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/blocks/ccel_filter/block */ "./includes/blocks/ccel_filter/block.js");







/***/ }),

/***/ "./includes/blocks/achieve_by_lesson/block.js":
/*!****************************************************!*\
  !*** ./includes/blocks/achieve_by_lesson/block.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./includes/blocks/achieve_by_lesson/edit.js");
/**
 * BLOCK: CCEL Achieve by lesson block.
 */
// Import block dependencies and components.

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
registerBlockType('ccel/achieve-by-lessons', {
  title: __('Learning Outcome Achieve By Lessons', 'ubc-ccel'),
  description: __('List lessons that achieves current learning outcome.', 'ubc-ccel'),
  icon: 'book',
  keywords: [__('ccel', 'ubc-ccel'), __('achieve by lessons', 'ubc-ccel')],
  category: 'ccel',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => null
});

/***/ }),

/***/ "./includes/blocks/achieve_by_lesson/edit.js":
/*!***************************************************!*\
  !*** ./includes/blocks/achieve_by_lesson/edit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ubc-ccel/includes/blocks/achieve_by_lesson/edit.js";

/**
 * BLOCK: CCEL Achieve by lessons
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({
  attributes
}) => {
  return /*#__PURE__*/React.createElement(ServerSideRender, {
    block: "ccel/achieve-by-lessons",
    attributes: { ...attributes
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./includes/blocks/align_with_themes/block.js":
/*!****************************************************!*\
  !*** ./includes/blocks/align_with_themes/block.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./includes/blocks/align_with_themes/edit.js");
/**
 * BLOCK: CCEL align with themes block.
 */
// Import block dependencies and components.

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
registerBlockType('ccel/align-with-themes', {
  title: __('Learning Outcome Align with Themes', 'ubc-ccel'),
  description: __('List themes that current learning outcome align with.', 'ubc-ccel'),
  icon: 'book',
  keywords: [__('ccel', 'ubc-ccel'), __('align with themes', 'ubc-ccel')],
  category: 'ccel',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => null
});

/***/ }),

/***/ "./includes/blocks/align_with_themes/edit.js":
/*!***************************************************!*\
  !*** ./includes/blocks/align_with_themes/edit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ubc-ccel/includes/blocks/align_with_themes/edit.js";

/**
 * BLOCK: CCEL Align with Themes
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({
  attributes
}) => {
  return /*#__PURE__*/React.createElement(ServerSideRender, {
    block: "ccel/align-with-themes",
    attributes: { ...attributes
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./includes/blocks/build_towards/block.js":
/*!************************************************!*\
  !*** ./includes/blocks/build_towards/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./includes/blocks/build_towards/edit.js");
/**
 * BLOCK: CCEL Build Towards block.
 */
// Import block dependencies and components.

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
registerBlockType('ccel/build-towards', {
  title: __('Learning Outcome Build Towards', 'ubc-ccel'),
  description: __('List CCEL Learning Outcome build towards list', 'ubc-ccel'),
  icon: 'book',
  keywords: [__('ccel', 'ubc-ccel'), __('build towards', 'ubc-ccel')],
  category: 'ccel',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => null
});

/***/ }),

/***/ "./includes/blocks/build_towards/edit.js":
/*!***********************************************!*\
  !*** ./includes/blocks/build_towards/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ubc-ccel/includes/blocks/build_towards/edit.js";

/**
 * BLOCK: CCEL Prerequisites
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({
  attributes
}) => {
  return /*#__PURE__*/React.createElement(ServerSideRender, {
    block: "ccel/build-towards",
    attributes: { ...attributes
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./includes/blocks/ccel_filter/block.js":
/*!**********************************************!*\
  !*** ./includes/blocks/ccel_filter/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./includes/blocks/ccel_filter/edit.js");
/**
 * BLOCK: CCEL filter block.
 */
// Import block dependencies and components.

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
registerBlockType('ccel/filter', {
  title: __('CCEL Filter', 'ubc-ccel'),
  description: __('CCEL filtering system on the frontpage.', 'ubc-ccel'),
  icon: 'book',
  keywords: [__('ccel', 'ubc-ccel'), __('filter', 'ubc-ccel')],
  category: 'ccel',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => null
});

/***/ }),

/***/ "./includes/blocks/ccel_filter/edit.js":
/*!*********************************************!*\
  !*** ./includes/blocks/ccel_filter/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ubc-ccel/includes/blocks/ccel_filter/edit.js";

/**
 * BLOCK: CCEL Filter
 */
const Edit = () => {
  const style = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e1e1'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "CCEL Filtering System");
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./includes/blocks/prerequisites/block.js":
/*!************************************************!*\
  !*** ./includes/blocks/prerequisites/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./includes/blocks/prerequisites/edit.js");
/**
 * BLOCK: CCEL Prerequisites block.
 */
// Import block dependencies and components.

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
registerBlockType('ccel/prerequisites', {
  title: __('Learning Outcome Prerequisites', 'ubc-ccel'),
  description: __('List CCEL Learning Outcome prerequisites list', 'ubc-ccel'),
  icon: 'book',
  keywords: [__('ccel', 'ubc-ccel'), __('prerequisites', 'ubc-ccel')],
  category: 'ccel',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => null
});

/***/ }),

/***/ "./includes/blocks/prerequisites/edit.js":
/*!***********************************************!*\
  !*** ./includes/blocks/prerequisites/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ubc-ccel/includes/blocks/prerequisites/edit.js";

/**
 * BLOCK: CCEL Prerequisites
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({
  attributes
}) => {
  return /*#__PURE__*/React.createElement(ServerSideRender, {
    block: "ccel/prerequisites",
    attributes: { ...attributes
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./includes/blocks/related_lessons/block.js":
/*!**************************************************!*\
  !*** ./includes/blocks/related_lessons/block.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./includes/blocks/related_lessons/edit.js");
/**
 * BLOCK: CCEL Related Lesson block.
 */
// Import block dependencies and components.

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
registerBlockType('ccel/related-lesson', {
  title: __('Related Lesson', 'ubc-ccel'),
  description: __('List related lessons.', 'ubc-ccel'),
  icon: 'book',
  keywords: [__('ccel', 'ubc-ccel'), __('related lessons', 'ubc-ccel')],
  category: 'ccel',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => null
});

/***/ }),

/***/ "./includes/blocks/related_lessons/edit.js":
/*!*************************************************!*\
  !*** ./includes/blocks/related_lessons/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _jsxFileName = "/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ubc-ccel/includes/blocks/related_lessons/edit.js";

/**
 * BLOCK: CCEL Related Lessons
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({
  attributes
}) => {
  return /*#__PURE__*/React.createElement(ServerSideRender, {
    block: "ccel/related-lesson",
    attributes: { ...attributes
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ })

/******/ });
//# sourceMappingURL=blocks.js.map