/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article.js */ \"./src/js/Article.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_json__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nwindow.onload = function () {\n  console.log('Hello !'); //Tags\n\n  addTagClickHendler();\n};\n\nvar addTagClickHendler = function addTagClickHendler() {\n  document.querySelector('.strategies__tags').addEventListener('click', function (e) {\n    if (e.target.classList.contains('tag')) {\n      var clickedTag = e.target;\n      removeSelectedTag();\n      selectClickedTag(clickedTag);\n      console.log((_data_json__WEBPACK_IMPORTED_MODULE_1___default()));\n\n      if (clickedTag.innerText === 'All') {\n        showAllStrategies();\n      } else {\n        filetStrategiesByTag(clickedTag.innerText);\n      }\n    }\n\n    ;\n  });\n};\n\nvar removeSelectedTag = function removeSelectedTag() {\n  var tags = document.querySelectorAll('.strategies__tags .tag');\n  tags.forEach(function (tag) {\n    tag.classList.remove('tag_selected');\n    tag.classList.add('tag_bordered');\n  });\n};\n\nvar selectClickedTag = function selectClickedTag(tag) {\n  tag.classList.remove('tag_bordered');\n  tag.classList.add('tag_selected');\n};\n\nvar showAllStrategies = function showAllStrategies() {\n  var strategies = document.querySelectorAll('.strategies-wrapper .strategy');\n  strategies.forEach(function (strategy) {\n    strategy.classList.remove('strategy_hiden');\n  });\n};\n\nvar filetStrategiesByTag = function filetStrategiesByTag(tag) {\n  var strategies = document.querySelectorAll('.strategies-wrapper .strategy');\n  strategies.forEach(function (strategy) {\n    strategy.classList.add('strategy_hiden');\n    strategy.querySelectorAll('.tag').forEach(function (strategyTag) {\n      if (strategyTag.innerText === tag) {\n        strategy.classList.remove('strategy_hiden');\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Article = /*#__PURE__*/_createClass(function Article() {\n  _classCallCheck(this, Article);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/Article.js?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token e in JSON at position 0 while parsing near 'export default\\r\\n{\\r\\n ...'\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\nSyntaxError: Unexpected token e in JSON at position 0 while parsing near 'export default\\r\\n{\\r\\n ...'\\n    at JSON.parse (<anonymous>)\\n    at parseJson (D:\\\\projects\\\\productly\\\\node_modules\\\\json-parse-better-errors\\\\index.js:7:17)\\n    at JsonParser.parse (D:\\\\projects\\\\productly\\\\node_modules\\\\webpack\\\\lib\\\\json\\\\JsonParser.js:43:7)\\n    at D:\\\\projects\\\\productly\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:1087:26\\n    at processResult (D:\\\\projects\\\\productly\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:800:11)\\n    at D:\\\\projects\\\\productly\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:860:5\\n    at D:\\\\projects\\\\productly\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:406:3\\n    at iterateNormalLoaders (D:\\\\projects\\\\productly\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:10)\\n    at D:\\\\projects\\\\productly\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:223:4\\n    at D:\\\\projects\\\\productly\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:834:15\");\n\n//# sourceURL=webpack://my-webpack-project/./src/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;