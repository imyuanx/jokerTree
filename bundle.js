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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".row {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.row-select {\\r\\n    background-color: #ebebeb7a;\\r\\n}\\r\\n.expand-symbol {\\r\\n    color: green;\\r\\n    border: 1px solid green;\\r\\n    background-color: transparent;\\r\\n    text-align: center;\\r\\n    line-height: 12px;\\r\\n    width: 12px;\\r\\n    height: 12px;\\r\\n    padding: 0;\\r\\n    margin-right: 6px;\\r\\n    cursor: pointer;\\r\\n    outline: none;\\r\\n    transition: 0.3s;\\r\\n}\\r\\n.expand-symbol:hover {\\r\\n    box-shadow: 1px 1px 5px -2px rgba(0, 128, 0, 0.8);\\r\\n}\\r\\n.type-symbol {\\r\\n    width: 16px;\\r\\n    color: green;\\r\\n}\\r\\n.key {\\r\\n    color: red;\\r\\n}\\r\\n.link-symbol {\\r\\n    color: green;\\r\\n}\\r\\n.value {\\r\\n    color: blue;\\r\\n}\\r\\n.hide {\\r\\n    display: none;\\r\\n}\\r\\n.alignLeft {\\r\\n    margin-left: 34px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://jokerTree/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://jokerTree/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://jokerTree/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://jokerTree/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://jokerTree/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://jokerTree/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://jokerTree/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://jokerTree/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://jokerTree/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://jokerTree/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _astNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./astNode */ \"./src/astNode.js\");\n/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getType */ \"./src/getType.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @desc This function is used to create AST\r\n * @param {Object} obj JSON object\r\n * @param {String|Number} key \r\n * @param {String} path \r\n * @returns {Object}\r\n */\r\nfunction a(obj, key, path) {\r\n    let type = (0,_getType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\r\n    let dataValue = JSON.stringify(obj);\r\n    let value = obj;\r\n    if (type == \"object\") {\r\n        value = [];\r\n        for(let key in obj) {\r\n            let oItem = obj[key];\r\n            let astNodeItem = a(oItem, key, path + `[\"${key}\"]`);\r\n            value.push(astNodeItem);\r\n        }\r\n    } else if (type == \"array\") {\r\n        value = [];\r\n        obj.map((oItem, index) => {\r\n            let astNodeItem = a(oItem, index, path + `[${index}]`);\r\n            value.push(astNodeItem);\r\n        });\r\n    } else {\r\n        dataValue = obj + \"\";\r\n    }\r\n    let astNode = (0,_astNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(type, key, path, dataValue, value);\r\n    return astNode;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a);\n\n//# sourceURL=webpack://jokerTree/./src/a.js?");

/***/ }),

/***/ "./src/astNode.js":
/*!************************!*\
  !*** ./src/astNode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @author YX\r\n * @desc create ast node\r\n * @param {String} type \r\n * @param {String|Number} key \r\n * @param {String} path \r\n * @param {String} dataValue \r\n * @param {String|Number|Array} value \r\n * @returns {Object}\r\n */\r\nfunction ast(type, key, path, dataValue, value) {\r\n    return { type, key, path, dataValue, value };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ast);\n\n//# sourceURL=webpack://jokerTree/./src/astNode.js?");

/***/ }),

/***/ "./src/createDomTree.js":
/*!******************************!*\
  !*** ./src/createDomTree.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElementsDom_createNodesboxDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementsDom/createNodesboxDom */ \"./src/createElementsDom/createNodesboxDom.js\");\n/* harmony import */ var _createElementsDom_createNodeelementDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElementsDom/createNodeelementDom */ \"./src/createElementsDom/createNodeelementDom.js\");\n\r\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom tree from ast\r\n * @param {Object}\r\n * @returns {Array}\r\n */\r\nfunction createDomTree(astNode, layer = 0){\r\n    let nodesBoxDom = (0,_createElementsDom_createNodesboxDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(astNode.type);\r\n    let nodeElementDom;\r\n    if (astNode.type == \"object\" || astNode.type == \"array\") {\r\n        nodesBoxDom.appendChild((0,_createElementsDom_createNodeelementDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(astNode.key, astNode.path, astNode.dataValue, astNode.value, astNode.type, layer));\r\n        nodeElementDom = (0,_createElementsDom_createNodesboxDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(astNode.type, layer);\r\n        let layers = layer + 1;\r\n        for (let i = 0; i < astNode.value.length; i++) {\r\n            const element = astNode.value[i];\r\n            nodeElementDom.appendChild(createDomTree(element, layers));\r\n        }\r\n    } else {\r\n        nodeElementDom = (0,_createElementsDom_createNodeelementDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(astNode.key, astNode.path, astNode.dataValue, astNode.value, astNode.type, layer);\r\n    }\r\n    nodesBoxDom.appendChild(nodeElementDom);\r\n    \r\n    return nodesBoxDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDomTree);\n\n//# sourceURL=webpack://jokerTree/./src/createDomTree.js?");

/***/ }),

/***/ "./src/createElementsDom/createExpandDom.js":
/*!**************************************************!*\
  !*** ./src/createElementsDom/createExpandDom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ \"./src/event.js\");\n\r\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for expand symbol\r\n */\r\nfunction createExpandDom(dataValue){\r\n    let expandDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\r\n    expandDom.innerHTML = \"+\";\r\n    if (dataValue == \"{}\" || dataValue == \"[]\") {\r\n        expandDom.innerHTML = \"-\";\r\n    }\r\n    expandDom.className = \"expand-symbol\";\r\n    (0,_event__WEBPACK_IMPORTED_MODULE_1__.expandClickEventListener)(expandDom);\r\n    return expandDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createExpandDom);\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createExpandDom.js?");

/***/ }),

/***/ "./src/createElementsDom/createKeyDom.js":
/*!***********************************************!*\
  !*** ./src/createElementsDom/createKeyDom.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for key\r\n * @param {String} key \r\n * @param {Number} layer \r\n */\r\nfunction createKeyDom(type, key, layer = 0){\r\n    let keyText = layer == 0 ? \"JSON\": key;\r\n    let keyDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\r\n    keyDom.innerHTML = keyText;\r\n    keyDom.className = \"key\";\r\n    if (type !== \"object\" && type !== \"array\") {\r\n        keyDom.className += \" alignLeft\";\r\n    }\r\n    return keyDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKeyDom);\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createKeyDom.js?");

/***/ }),

/***/ "./src/createElementsDom/createLinkDom.js":
/*!************************************************!*\
  !*** ./src/createElementsDom/createLinkDom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for link symbol\r\n */\r\nfunction createLinkDom(type) {\r\n    if (type == \"object\" || type == \"array\") return null;\r\n    let linkDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\r\n    linkDom.innerHTML = \"：\";\r\n    linkDom.className = \"link-symbol\";\r\n    return linkDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLinkDom);\r\n\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createLinkDom.js?");

/***/ }),

/***/ "./src/createElementsDom/createNodeelementDom.js":
/*!*******************************************************!*\
  !*** ./src/createElementsDom/createNodeelementDom.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n/* harmony import */ var _createKeyDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createKeyDom */ \"./src/createElementsDom/createKeyDom.js\");\n/* harmony import */ var _createValueDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createValueDom */ \"./src/createElementsDom/createValueDom.js\");\n/* harmony import */ var _createExpandDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createExpandDom */ \"./src/createElementsDom/createExpandDom.js\");\n/* harmony import */ var _createPrefixDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPrefixDom */ \"./src/createElementsDom/createPrefixDom.js\");\n/* harmony import */ var _createLinkDom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createLinkDom */ \"./src/createElementsDom/createLinkDom.js\");\n/* harmony import */ var _createTypeDom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createTypeDom */ \"./src/createElementsDom/createTypeDom.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event */ \"./src/event.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for nodes box\r\n */\r\nfunction createNodeElementDom(key, path, dataValue, value, type, layer) {\r\n    let typeDom = null;\r\n    let expandDom = null;\r\n    let linkDom = (0,_createLinkDom__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(type);\r\n    let valueDom = (0,_createValueDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(type, value);\r\n    let preFixDom = (0,_createPrefixDom__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(layer);\r\n    let keyDom = (0,_createKeyDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(type, key, layer);\r\n    if (type == \"object\" || type == \"array\") {\r\n        typeDom = (0,_createTypeDom__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(type);\r\n        expandDom = (0,_createExpandDom__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataValue);\r\n    }\r\n    let nodeElementDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\r\n        \"data-key\": key,\r\n        \"data-path\": path,\r\n        \"data-datavalue\": dataValue,\r\n    });\r\n    nodeElementDom.className = \"row\";\r\n    nodeElementDom.appendChild(preFixDom);\r\n    if (expandDom !== null) nodeElementDom.appendChild(expandDom);\r\n    if (typeDom !== null) nodeElementDom.appendChild(typeDom);\r\n    nodeElementDom.appendChild(keyDom);\r\n    if (linkDom !== null) nodeElementDom.appendChild(linkDom);\r\n    if (valueDom !== null) nodeElementDom.appendChild(valueDom);\r\n    (0,_event__WEBPACK_IMPORTED_MODULE_7__.rowClickEventListener)(nodeElementDom);\r\n    return nodeElementDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNodeElementDom);\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createNodeelementDom.js?");

/***/ }),

/***/ "./src/createElementsDom/createNodesboxDom.js":
/*!****************************************************!*\
  !*** ./src/createElementsDom/createNodesboxDom.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for nodes box\r\n */\r\nfunction createNodesBoxDom(type, layer = null) {\r\n    let nodeboxDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\r\n    nodeboxDom.className = \"node-box\";\r\n    if (layer !== null && (type == \"object\" || type == \"array\")) nodeboxDom.className += \" hide\";\r\n    return nodeboxDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNodesBoxDom);\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createNodesboxDom.js?");

/***/ }),

/***/ "./src/createElementsDom/createPrefixDom.js":
/*!**************************************************!*\
  !*** ./src/createElementsDom/createPrefixDom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for prefix symbol\r\n * @param {Number} layer \r\n */\r\nfunction createPrefixDom(layer = 0) {\r\n    let prefixText = \"&emsp;\".repeat(layer);\r\n    let prefixDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\r\n    prefixDom.innerHTML = prefixText;\r\n    return prefixDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPrefixDom);\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createPrefixDom.js?");

/***/ }),

/***/ "./src/createElementsDom/createTypeDom.js":
/*!************************************************!*\
  !*** ./src/createElementsDom/createTypeDom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for type symbol\r\n * @param {String} type \r\n */\r\nfunction createTypeDom(type) {\r\n    let typeDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\r\n    if (type == \"object\") {\r\n        typeDom.innerHTML = \"{}\";\r\n    } else if (type == \"array\") {\r\n        typeDom.innerHTML = \"[]\";\r\n    }\r\n    typeDom.className = \"type-symbol\";\r\n    return typeDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTypeDom);\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createTypeDom.js?");

/***/ }),

/***/ "./src/createElementsDom/createValueDom.js":
/*!*************************************************!*\
  !*** ./src/createElementsDom/createValueDom.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNode */ \"./src/domNode.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @desc create dom for value\r\n * @param {String} value \r\n */\r\nfunction createValueDom(type, value){\r\n    if (type == \"object\" || type == \"array\") return null;\r\n    let valueDom = (0,_domNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\r\n    if (type == \"string\") {\r\n        value = \"\\\"\" + value + \"\\\"\";\r\n    }\r\n    valueDom.innerHTML = value;\r\n    valueDom.className = \"value\";\r\n    return valueDom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createValueDom);\n\n//# sourceURL=webpack://jokerTree/./src/createElementsDom/createValueDom.js?");

/***/ }),

/***/ "./src/domNode.js":
/*!************************!*\
  !*** ./src/domNode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @author YX\r\n * @desc create HTMLElement dom\r\n * @param {String} sel element selector\r\n * @param {Object} options element attribute\r\n * @returns {HTMLElement}\r\n */\r\nfunction domNode(sel = \"div\", options = {}) {\r\n    let dom = document.createElement(sel);\r\n    for (const key in options) {\r\n        if (Object.hasOwnProperty.call(options, key)) {\r\n            const item = options[key];\r\n            dom.setAttribute(key, item);\r\n        }\r\n    }\r\n    return dom;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domNode);\n\n//# sourceURL=webpack://jokerTree/./src/domNode.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"expandClickEventListener\": () => (/* binding */ expandClickEventListener),\n/* harmony export */   \"rowClickEventListener\": () => (/* binding */ rowClickEventListener)\n/* harmony export */ });\nfunction expandClickEventListener(expandDom) {\r\n    expandDom.addEventListener(\"click\", (e) => {\r\n        e.stopPropagation();\r\n        let target = e.target;\r\n        let childDom = target.parentElement.nextElementSibling;\r\n        if (childDom.className.indexOf(\"hide\") == -1) {\r\n            target.innerHTML = \"+\";\r\n            childDom.className = childDom.className + \" hide\";\r\n        } else {\r\n            target.innerHTML = \"-\";\r\n            childDom.className = childDom.className.replace(\"hide\", \"\");\r\n        }\r\n    });\r\n}\r\n\r\nfunction rowClickEventListener(rowDom, callback = () => {}) {\r\n    rowDom.addEventListener(\"click\", (e) => {\r\n        e.stopPropagation();\r\n        if (window.lastSelectNode !== undefined) {\r\n            window.lastSelectNode.className = window.lastSelectNode.className.replace(\"row-select\", \"\");\r\n        }\r\n        let target = e.currentTarget;\r\n        window.lastSelectNode = target;\r\n        if (target.className.indexOf(\"row-select\") == -1) {\r\n            target.className = target.className + \" row-select\";\r\n        } else {\r\n            target.className = target.className.replace(\"row-select\", \"\");\r\n        }\r\n        let key = target.getAttribute(\"data-key\");\r\n        let path = target.getAttribute(\"data-path\");\r\n        let value = target.getAttribute(\"data-datavalue\");\r\n        callback(key, path, value);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://jokerTree/./src/event.js?");

/***/ }),

/***/ "./src/getType.js":
/*!************************!*\
  !*** ./src/getType.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @author YX\r\n * @desc This method is used to obtain data types\r\n * @param {Any} data Need data for judgment type\r\n * @returns {String} data type\r\n */\r\nfunction getType(data){\r\n    let type = typeof data;\r\n    if (type == \"object\") type = Array.isArray(data) ? \"array\" : \"object\";\r\n    return type;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getType);\n\n//# sourceURL=webpack://jokerTree/./src/getType.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./src/a.js\");\n/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ \"./src/parse.js\");\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patch */ \"./src/patch.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nlet container = document.getElementById(\"app\");\r\nlet data = `{\"a\":\"1\",\"b\":2,\"c\":{\"d\":[true, []]}}`;\r\ntry {\r\n    data = (0,_parse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n} catch {\r\n    console.error(\"JSON string format error\");\r\n}\r\nlet astTree = (0,_a__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, \"\", \"\");\r\n(0,_patch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(container, astTree);\n\n//# sourceURL=webpack://jokerTree/./src/index.js?");

/***/ }),

/***/ "./src/parse.js":
/*!**********************!*\
  !*** ./src/parse.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @author YX\r\n * @param {String} data JSON string\r\n * @returns \r\n */\r\nfunction parse(data){\r\n    return JSON.parse(data);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);\n\n//# sourceURL=webpack://jokerTree/./src/parse.js?");

/***/ }),

/***/ "./src/patch.js":
/*!**********************!*\
  !*** ./src/patch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomTree */ \"./src/createDomTree.js\");\n\r\n\r\n/**\r\n * @author YX\r\n * @param {Document} container \r\n * @param {Object} astTree \r\n */\r\nfunction patch(container, astTree){\r\n    let domTree = (0,_createDomTree__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(astTree);\r\n    container.append(domTree);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (patch);\n\n//# sourceURL=webpack://jokerTree/./src/patch.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;