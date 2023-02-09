/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #fff;\\n  margin: 0;\\n}\\n\\nbutton {\\n  padding: 10px 20px;\\n  background-color: #e37915;\\n  border: 0;\\n  border-radius: 5px;\\n  font-size: 14px;\\n  color: #fff;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\nheader {\\n  background-color: aliceblue;\\n}\\n\\n.container {\\n  margin: 0 auto;\\n  max-width: 989px;\\n  padding: 0 24px;\\n}\\n\\n.header-nav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n  height: 90px;\\n}\\n\\n.logo {\\n  border-radius: 50%;\\n  width: 50px;\\n  height: 50px;\\n  border: 4px solid rgb(73, 73, 73);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: rgb(214, 214, 214);\\n  background: rgb(165, 164, 164);\\n  box-shadow: 2px 4px 8px gray;\\n  font-size: 30px;\\n}\\n\\n.nav-menu {\\n  display: flex;\\n  gap: 30px;\\n  padding: 2px;\\n  list-style: none;\\n}\\n\\n.nav-link {\\n  color: #e37915;\\n  font-size: 19px;\\n  font-weight: 800;\\n  text-decoration: none;\\n}\\n\\n.meals {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  gap: 30px;\\n  width: 100%;\\n  padding-top: 3rem;\\n  padding-bottom: 6rem;\\n}\\n\\n.meal {\\n  margin-bottom: 20px;\\n}\\n\\n.meal-image img {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.meal .title {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.com-section {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: rgba(78, 3, 3, 0.944);\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  z-index: 10000;\\n  height: 100%;\\n  width: 100%;\\n  flex-direction: column;\\n  overflow-y: scroll;\\n}\\n\\n.comment-section {\\n  background: #fff;\\n  border: 1rem solid rgba(0, 0, 0, 0.1);\\n  padding: 2rem;\\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\\n  border-radius: 0.5rem;\\n  margin: 2rem;\\n  height: 500px;\\n  width: 700px;\\n  overflow-y: scroll;\\n}\\n\\n.image {\\n  display: flex;\\n  justify-content: center;\\n  gap: 100px;\\n}\\n\\n.image img {\\n  width: 300px;\\n  height: 200px;\\n  margin-left: 150px;\\n}\\n\\n.image i {\\n  font-size: 30px;\\n  cursor: pointer;\\n}\\n\\n.food-name {\\n  font-size: 32px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.ingredients {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n  flex-wrap: wrap;\\n  width: 100%;\\n}\\n\\n.ingredients span {\\n  width: fit-content;\\n  border: 2px solid #fff;\\n  border-radius: 10px;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: row;\\n  background-color: gray;\\n  color: #fff;\\n  padding: 10px;\\n  margin-top: 20px;\\n  cursor: pointer;\\n}\\n\\nfooter p {\\n  font-size: 18px;\\n}\\n\\n.description p {\\n  font-size: 14px;\\n  margin-top: 20px;\\n}\\n\\n.comments {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-bottom: 10px;\\n  flex-direction: column;\\n}\\n\\n.comments span {\\n  border-radius: 50%;\\n  border: 1px solid rebeccapurple;\\n  background-color: red;\\n  color: #fff;\\n}\\n\\n.comments ul {\\n  list-style: none;\\n  border: 2px solid #ff5900;\\n  width: auto;\\n}\\n\\n.comments ul li {\\n  font-weight: 500;\\n  background-color: silver;\\n}\\n\\n.form {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  margin-top: 10px;\\n  height: 200px;\\n}\\n\\n.add-comment {\\n  font-size: 24px;\\n  margin-bottom: 5px;\\n}\\n\\n.form textarea {\\n  margin-top: 10px;\\n}\\n\\n.btn {\\n  margin-top: 5px;\\n  margin-right: 80px;\\n  background-color: #ff5900;\\n  color: #fff;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 10px;\\n  box-shadow: 10px 5px 5px rgb(203, 53, 53);\\n}\\n\\nfooter {\\n  background-color: aliceblue;\\n  padding: 10px 0;\\n  position: fixed;\\n  width: 100%;\\n  bottom: 0;\\n}\\n\\nfooter a {\\n  color: #ff4500;\\n  text-decoration: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_Meal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/Meal.js */ \"./src/module/Meal.js\");\n/* harmony import */ var _module_Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/Template.js */ \"./src/module/Template.js\");\n/* harmony import */ var _module_Involvement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/Involvement.js */ \"./src/module/Involvement.js\");\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  const meal = new _module_Meal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const involvement = new _module_Involvement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  // meal container\n  const mealsContainer = document.getElementById('meals');\n\n  const getAllMeals = async () => {\n    const meals = await meal.getMeals();\n    const likes = await involvement.getLikes();\n    mealsContainer.innerHTML = _module_Template_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].meals(meals, likes);\n  };\n\n  getAllMeals().then(() => {\n    const popupcontainer = document.getElementById('pop-up');\n    const commentbtn = document.querySelectorAll('.comment-action');\n    Array.from(commentbtn).forEach((btn) => {\n      btn.onclick = async () => {\n        const iD = btn.getAttribute('data-id');\n        await meal.getMealByID(iD).then((meal) => {\n          popupcontainer.innerHTML = _module_Template_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].comment(meal.meals[0]);\n        });\n        // close pop up\n        document.querySelector('.close-btn').onclick = () => {\n          popupcontainer.innerHTML = '';\n        };\n      };\n    });\n  });\n});\n\n\n//# sourceURL=webpack://kanban-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/module/Involvement.js":
/*!***********************************!*\
  !*** ./src/module/Involvement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Involvement)\n/* harmony export */ });\nclass Involvement {\n  constructor() {\n    this.appID = 'RBrsUTVautuAC386npFh';\n    this.baseURI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.appID}/`;\n  }\n\n  getLikes = async () => fetch(`${this.baseURI}likes`).then((response) => response.json())\n\n  addLike = async (id) => {\n    fetch(`${this.baseURI}likes`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    }).then((response) => response.json());\n  }\n}\n\n//# sourceURL=webpack://kanban-capstone-project/./src/module/Involvement.js?");

/***/ }),

/***/ "./src/module/Meal.js":
/*!****************************!*\
  !*** ./src/module/Meal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Meal)\n/* harmony export */ });\n/* harmony import */ var _Involvement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Involvement */ \"./src/module/Involvement.js\");\n\n\nclass Meal {\n  constructor() {\n    this.baseURI = 'https://www.themealdb.com/api/json/v1/1/';\n    this.appID = 'RBrsUTVautuAC386npFh';\n    this.involvementBaseURI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.appID}/`;\n  }\n\n  getMeals = async () => fetch(`${this.baseURI}filter.php?c=Seafood`).then((response) => response.json());\n\n  getMealByID = async (id) => fetch(`${this.baseURI}lookup.php?i=${id}`).then((response) => response.json());\n\n}\n\n//# sourceURL=webpack://kanban-capstone-project/./src/module/Meal.js?");

/***/ }),

/***/ "./src/module/Template.js":
/*!********************************!*\
  !*** ./src/module/Template.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Template)\n/* harmony export */ });\n/* harmony import */ var _Meal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Meal */ \"./src/module/Meal.js\");\n\n\nclass Template {\n    static meal = (meal, likes) => `\n    <div class=\"meal\" data-id=\"${meal.idMeal}\">\n        <div class=\"meal-image\">\n            <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n        </div>\n        <div class=\"title\">\n            <h2>${meal.strMeal}</h2>\n            <div class=\"likes\"><span><i class=\"fa fa-heart\"></i> ${likes} likes</span></div>\n        </div>\n        <div class=\"action\">\n            <button class=\"comment-action\" data-id=\"${meal.idMeal}\">Comments</button>\n        </div>\n    </div>`\n\n    static meals = (data, likes) => {\n      let content = '';\n      data.meals.forEach((meal) => {\n        const like = likes.filter((like) => like.item_id == meal.idMeal).likes ?? 0;\n        content += this.meal(meal, like);\n      });\n      return content;\n    };\n\n    static getIngredients = (meal) => {\n      let content = '';\n      for (let x = 1; x <= 10; x += 1) {\n        content += `<span>${meal[`strIngredient${x}`]}</span>`;\n      }\n      return content;\n    }\n\n    static comment = (meal) => `<section class=\"com-section\">\n        <div class=\"comment-section\">\n          <div class=\"image\">\n            <img\n              src=\"${meal.strMealThumb}\"\n              alt=\"${meal.strMeal}\"\n            />\n            <div class=\"close-btn\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div class=\"food-name\">\n            <h2>${meal.strMeal}</h2>\n          </div>\n          <div class=\"food-recipe\">\n            <h3>Ingredients</h3>\n            <div class=\"ingredients\">\n             ${this.getIngredients(meal)}\n            </div>\n          </div>\n          <div class=\"description\">\n            <p>${meal.strInstructions}</p>\n          </div>\n          <div class=\"comments\">\n            <h3>Comments<span>5</span></h3>\n            <ul>\n              <li>Felix</li>\n              <li>Felix lancelot</li>\n              <li>Felix</li>\n            </ul>\n          </div>\n\n          <form class=\"form\" id=\"form\">\n            <div class=\"add-comment\">Add a comment</div>\n            <input type=\"text\" placeholder=\"Your name \" />\n            <textarea placeholder=\"Your insights\" rows=\"5\" cols=\"20\"></textarea>\n            <button type=\"submit\" class=\"btn\">Comments</button>\n          </form>\n        </div>\n      </section>`;\n}\n\n//# sourceURL=webpack://kanban-capstone-project/./src/module/Template.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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