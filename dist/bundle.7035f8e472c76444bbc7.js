/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h1 {
  font-family: 'Anonymous Pro', monospace;
  color: blue;
}
li {
  font-family: 'Montserrat', sans-serif;
}
table {
  border-collapse: collapse;
}

td {
  width: 50px;
  height: 50px;
  border: 1px solid rgb(222, 83, 108);
}
.fill {
  /* position: relative; */
  /* height: 150px;
  width: 150px; */
  /* top: 5px;
  left: 5px; */
  cursor: pointer;
}
.hold {
  border: 2px solid red;
}
#playerBoard,
#computerBoard {
  display: grid;
  /* grid-template-columns: repeat(10, 50px); */
  /* flex-direction: row; */
}
.row {
}
.empty,
.computerempty {
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border: 1px solid rgb(222, 83, 108);
  background: white;
}
.hovered {
  background: #ff9393;
  border-style: dashed;
}
.invisible {
  display: none;
}

.shipcontainer {
  display: flex;

  border: 1px solid black;
}
.ship {
  background-color: yellow;
  /* border: 1px solid black; */
  height: 25px;
}
.carrier {
  width: 150px;
  background-color: aquamarine;
}
.battleship {
  width: 120px;
  background-color: aqua;
}
.submarine {
  width: 90px;
  background-color: blue;
}
.cruiser {
  width: 60px;
  background-color: blueviolet;
}
.patrolboat {
  width: 30px;
  background-color: cadetblue;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,WAAW;AACb;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mCAAmC;AACrC;AACA;EACE,wBAAwB;EACxB;iBACe;EACf;cACY;EACZ,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,yBAAyB;AAC3B;AACA;AACA;AACA;;EAEE,qBAAqB;EACrB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;;EAEb,uBAAuB;AACzB;AACA;EACE,wBAAwB;EACxB,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,YAAY;EACZ,4BAA4B;AAC9B;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,4BAA4B;AAC9B;AACA;EACE,WAAW;EACX,2BAA2B;AAC7B","sourcesContent":["h1 {\n  font-family: 'Anonymous Pro', monospace;\n  color: blue;\n}\nli {\n  font-family: 'Montserrat', sans-serif;\n}\ntable {\n  border-collapse: collapse;\n}\n\ntd {\n  width: 50px;\n  height: 50px;\n  border: 1px solid rgb(222, 83, 108);\n}\n.fill {\n  /* position: relative; */\n  /* height: 150px;\n  width: 150px; */\n  /* top: 5px;\n  left: 5px; */\n  cursor: pointer;\n}\n.hold {\n  border: 2px solid red;\n}\n#playerBoard,\n#computerBoard {\n  display: grid;\n  /* grid-template-columns: repeat(10, 50px); */\n  /* flex-direction: row; */\n}\n.row {\n}\n.empty,\n.computerempty {\n  display: inline-block;\n  vertical-align: middle;\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgb(222, 83, 108);\n  background: white;\n}\n.hovered {\n  background: #ff9393;\n  border-style: dashed;\n}\n.invisible {\n  display: none;\n}\n\n.shipcontainer {\n  display: flex;\n\n  border: 1px solid black;\n}\n.ship {\n  background-color: yellow;\n  /* border: 1px solid black; */\n  height: 25px;\n}\n.carrier {\n  width: 150px;\n  background-color: aquamarine;\n}\n.battleship {\n  width: 120px;\n  background-color: aqua;\n}\n.submarine {\n  width: 90px;\n  background-color: blue;\n}\n.cruiser {\n  width: 60px;\n  background-color: blueviolet;\n}\n.patrolboat {\n  width: 30px;\n  background-color: cadetblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");



function game() {
  // initialize player
  const player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player');
  const computer = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Computer');
  // set opponents
  player.setOpponent(computer);
  computer.setOpponent(player);
  // let the player place the ships(static at first)
  // player
  player.placeStatic();
  // computer
  computer.placeStaticRandom();
  // display boards in html
  _UI__WEBPACK_IMPORTED_MODULE_1__["default"].displayInHtml(player, computer);

  // UI.placeShipOnDrop(player, computer);
  // check for winner
  // UI.checkWinner(player, computer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);


/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");


class Gameboard {
  grid = Gameboard.createGrid();

  set = new Set();

  missedShots = new Set();

  hitShots = new Set();

  static createGrid() {
    const grid = [];
    for (let i = 0; i < 10; i += 1) {
      grid[i] = [];
      for (let j = 0; j < 10; j += 1) {
        grid[i][j] = [];
      }
    }
    // console.log(grid);
    return grid;

    // const array = new Array(1);
    // for (let i = 0; i < 10; i += 1) {
    //   array[i] = new Array(10);
    // }
    // console.log(array);
    // return array;
  }

  placeShipLeftToRight(x, y, length) {
    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);

    // place ship horizontally from left to right
    for (let i = 0; i < length; i += 1) {
      // console.log(`x in function:${x}
      // y in function: ${y + i}`);
      this.grid[x][y + i] = ship;
    }
  }

  placeShipUpToDown(x, y, length) {
    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);

    // place ship vertically from up to down
    for (let i = 0; i < length; i += 1) {
      this.grid[x + i][y] = ship;
    }
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];

    const coords = `${x},${y}`;
    if (target === 'missed' || target === 'hit') {
      console.log('missed or hit');
      return console.log('ALREADY SHOT AT X!!!');
    }
    // Field is a ship
    if (
      typeof target === 'object' &&
      !Array.isArray(target) &&
      target !== null
    ) {
      console.log('ship');
      this.set.add(coords);
      this.hitShots.add(coords);
      // console.log(target);
      target.hit();
      this.grid[x][y] = 'hit';

      return;
    }

    // Field is empty/water
    if (target.length === 0) {
      console.log('water');
      this.set.add(coords);
      this.missedShots.add(coords);

      this.grid[x][y] = 'missed';
    }

    return console.log(`OOPS SOMETHING ESCAPED - Coords at x:${x}, y:${y}`);
  }

  checkGameover() {
    // check every round?
    if (this.hitShots.size >= 30) {
      // the other player won
      return true;
    }
    return false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");


class Player {
  constructor(name) {
    this.name = name;
  }

  opponent = null;

  gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();

  setOpponent(opponent) {
    this.opponent = opponent;
  }

  attack(x, y) {
    console.log(`${this.name} attacks ${x}, ${y}`);
    // Attack gameboard of computer
    this.opponent.gameboard.receiveAttack(x, y);

    // if attack was a hit...
    if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
      console.log(`${this.name} hit at ${x},${y}`);
      // ...attack again
      console.log(this.opponent.gameboard.hitShots);
      return;
    }

    // if attack was a missedShot...
    if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
      console.log(`${this.name} missed at ${x},${y}`);
      // ...computer attacks
      this.opponent.attackRandom();
    }
  }

  attackRandom() {
    // Generate random x and y
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    // if coords not in set...
    if (!this.opponent.gameboard.set.has(`${x},${y}`)) {
      // ...attack player
      console.log(`${this.name} attacks ${x}, ${y}`);
      this.opponent.gameboard.receiveAttack(x, y);
      // if hit...
      if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
        console.log(`${this.name} hit at ${x},${y}`);

        // ...attack again

        this.attackRandom();
      }

      // if missed...
      if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
        console.log(`${this.name} missed at ${x},${y}`);

        // ...players turn
        return;
      }
    }

    // if coords ARE in set
    if (this.opponent.gameboard.set.has(`${x},${y}`)) {
      // call attack recursivly and start over
      this.attackRandom();
    }
  }

  placeShip(x, y, length, orientation) {
    if (orientation === 'x') {
      this.gameboard.placeShipLeftToRight(x, y, length);
    }
    if (orientation === 'y') {
      this.gameboard.placeShipUpToDown(x, y, length);
    }
  }

  placeShipRandom(length) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    this.gameboard.placeShipLeftToRight(x, y, length);
  }

  placeStatic() {
    this.placeShip(0, 0, 5, 'x');
    this.placeShip(1, 0, 4, 'x');
    this.placeShip(2, 0, 4, 'x');
    this.placeShip(3, 0, 3, 'x');
    this.placeShip(4, 0, 3, 'x');
    this.placeShip(5, 0, 3, 'x');
    this.placeShip(6, 0, 2, 'x');
    this.placeShip(7, 0, 2, 'x');
    this.placeShip(8, 0, 2, 'x');
    this.placeShip(9, 0, 1, 'x');
    this.placeShip(9, 2, 1, 'x');
  }

  placeStaticRandom() {
    this.placeShip(0, 5, 5, 'x');
    this.placeShip(1, 5, 4, 'x');
    this.placeShip(2, 5, 4, 'x');
    this.placeShip(3, 5, 3, 'x');
    this.placeShip(4, 5, 3, 'x');
    this.placeShip(5, 5, 3, 'x');
    this.placeShip(6, 5, 2, 'x');
    this.placeShip(7, 5, 2, 'x');
    this.placeShip(8, 5, 2, 'x');
    this.placeShip(9, 5, 1, 'x');
    this.placeShip(9, 7, 1, 'x');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.type = this.type[length];
  }

  type = {
    // 2
    1: 'Patrol Boat',
    // 3
    2: 'Cruiser',
    // 3
    3: 'Submarine',
    // 2
    4: 'Battleship',
    // 1
    5: 'Carrier',
    // 30 fields in total
  };

  timesHit = 0;

  sank = false;

  hit() {
    this.timesHit += 1;
    if (this.timesHit === this.length) {
      this.isSunk();
    }
  }

  isSunk() {
    this.sank = true;
    // console.log(`${this.type} destroyed!`);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UI {
  static displayInHtml(player1, player2) {
    const player = player1;
    const computer = player2;

    // get boards
    const playerBoard = player.gameboard.grid;
    const computerBoard = computer.gameboard.grid;

    // define ID from html
    const playerBoardID = 'playerBoard';
    const computerBoardID = 'computerBoard';

    // display boards in html/DOM
    UI.displayBoard(playerBoard, playerBoardID);
    UI.displayBoard(computerBoard, computerBoardID);
    UI.attackOnClick(player, computer);
    UI.placeShipOnDrop(player, computer);
  }

  static displayBoard(board, id) {
    const grid = document.getElementById(`${id}`);
    grid.innerHTML = '';

    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement('div');
      row.setAttribute('class', 'row');

      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        cell.setAttribute('id', `${id}${i}${j}`);

        if (id === 'playerBoard') {
          cell.setAttribute('class', 'empty');
        } else {
          cell.setAttribute('class', 'computerempty');
        }

        const target = board[i][j];

        if (
          typeof target === 'object' &&
          !Array.isArray(target) &&
          target !== null
        ) {
          // console.log('ship');
          cell.innerHTML = target.length;
        }

        if (target === 'hit') {
          // console.log('hit');
          cell.innerHTML = 'SH!';
        }

        if (target === 'missed') {
          // console.log('missed');
          cell.innerHTML = 'M';
        }

        if (target.length === 0) {
          // console.log('empty');
          cell.innerHTML = '';
        }

        row.append(cell);
      }

      grid.append(row);
    }
  }

  static attackOnClick(player, computer) {
    const fields = document.querySelectorAll('.empty');
    fields.forEach((field) => {
      field.addEventListener('click', (e) => {
        const ID = e.target.id;
        const x = ID.slice(-2, -1);
        const y = ID.slice(-1);

        player.attack(x, y);
        UI.displayInHtml(player, computer);

        // Timeout for later :)
        // setTimeout(() => {
        //   console.log('Delayed for 1 second.');
        //   UI.displayInHtml(player, computer);
        // }, 1000);
      });
    });
  }

  static placeShipOnDrop(player, computer) {
    const ships = document.querySelectorAll('.fill');
    const boxes = document.querySelectorAll('.empty');

    // Drag Functions

    // ship
    function dragStart(e) {
      e.dataTransfer.setData('text', e.target.dataset.length);
      console.log(length);
      // console.log(e.target.dataset.length);

      console.log('start');

      this.className += ' hold';
      setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd(e) {
      console.log('end');
      console.log(e);
      this.className = 'fill ship';
      UI.displayInHtml(player, computer);
    }

    // droppable
    function dragOver(e) {
      e.preventDefault();
      // console.log('over');
    }

    function dragEnter(e) {
      e.preventDefault();
      // console.log('enter');

      this.className += ' hovered';
    }

    function dragLeave() {
      // console.log('leave');
      this.className = 'empty';
    }

    function dragDrop(e) {
      console.log('drop');
      const length = e.dataTransfer.getData('text');

      this.className = 'empty';
      // ship is appended to specific field(this)
      // (removes ship from container)
      // this.append(fill);
      const ID = this.id;
      // console.log(typeof ID);
      const x = +ID.slice(-2, -1);
      const y = +ID.slice(-1);
      // console.log(`x:${x}`);
      // console.log(`y:${y}`);
      player.placeShip(x, y, length, 'x');
      // console.log(player.gameboard.grid);
      // console.log(player);
    }
    // Fill listeners
    // fill.addEventListener('dragstart', dragStart);
    // fill.addEventListener('dragend', dragEnd);

    // Loop through empty boxes and add listeners
    boxes.forEach((box) => {
      box.addEventListener('dragover', dragOver);
      box.addEventListener('dragenter', dragEnter);
      box.addEventListener('dragleave', dragLeave);
      box.addEventListener('drop', dragDrop);
    });

    // fill.forEach((ship) => {
    //   ship.addEventListener('dragstart', dragStart);
    //   ship.addEventListener('dragend', dragEnd);
    // });
    ships.forEach((ship) => {
      if (!ship.hasEventlistener) {
        ship.addEventListener('dragstart', dragStart);
        ship.addEventListener('dragend', dragEnd);
        ship.hasEventlistener = true;
      }
    });
  }

  static checkWinner(player, computer) {
    setInterval(() => {
      if (player.gameboard.checkGameover()) {
        console.log('Computer won!');
      }
      if (computer.gameboard.checkGameover()) {
        console.log('Player won!');
      }
    }, 1000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");
// import 'normalize.css';
// import '@fortawesome/fontawesome-free/css/all.css';



(0,_modules_Game__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7O1VDN0xsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDcUI7QUFDYTs7QUFFbEMseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaDEge1xuICBmb250LWZhbWlseTogJ0Fub255bW91cyBQcm8nLCBtb25vc3BhY2U7XG4gIGNvbG9yOiBibHVlO1xufVxubGkge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ZCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjIsIDgzLCAxMDgpO1xufVxuLmZpbGwge1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIC8qIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDsgKi9cbiAgLyogdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbGQge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG4jcGxheWVyQm9hcmQsXG4jY29tcHV0ZXJCb2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTsgKi9cbiAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cbn1cbi5yb3cge1xufVxuLmVtcHR5LFxuLmNvbXB1dGVyZW1wdHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjIsIDgzLCAxMDgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5ob3ZlcmVkIHtcbiAgYmFja2dyb3VuZDogI2ZmOTM5MztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59XG4uaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoaXBjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uY2FycmllciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cbi5iYXR0bGVzaGlwIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuLnN1Ym1hcmluZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLmNydWlzZXIge1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbn1cbi5wYXRyb2xib2F0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVDQUF1QztFQUN2QyxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QjtpQkFDZTtFQUNmO2NBQ1k7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLHlCQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTs7RUFFYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQW5vbnltb3VzIFBybycsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5saSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjIsIDgzLCAxMDgpO1xcbn1cXG4uZmlsbCB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAvKiBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4OyAqL1xcbiAgLyogdG9wOiA1cHg7XFxuICBsZWZ0OiA1cHg7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ob2xkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuI3BsYXllckJvYXJkLFxcbiNjb21wdXRlckJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7ICovXFxuICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xcbn1cXG4ucm93IHtcXG59XFxuLmVtcHR5LFxcbi5jb21wdXRlcmVtcHR5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjIsIDgzLCAxMDgpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICNmZjkzOTM7XFxuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcXG59XFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hpcGNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4uY2FycmllciB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4uYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG4uc3VibWFyaW5lIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLmNydWlzZXIge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG4ucGF0cm9sYm9hdCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5mdW5jdGlvbiBnYW1lKCkge1xuICAvLyBpbml0aWFsaXplIHBsYXllclxuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCdDb21wdXRlcicpO1xuICAvLyBzZXQgb3Bwb25lbnRzXG4gIHBsYXllci5zZXRPcHBvbmVudChjb21wdXRlcik7XG4gIGNvbXB1dGVyLnNldE9wcG9uZW50KHBsYXllcik7XG4gIC8vIGxldCB0aGUgcGxheWVyIHBsYWNlIHRoZSBzaGlwcyhzdGF0aWMgYXQgZmlyc3QpXG4gIC8vIHBsYXllclxuICBwbGF5ZXIucGxhY2VTdGF0aWMoKTtcbiAgLy8gY29tcHV0ZXJcbiAgY29tcHV0ZXIucGxhY2VTdGF0aWNSYW5kb20oKTtcbiAgLy8gZGlzcGxheSBib2FyZHMgaW4gaHRtbFxuICBVSS5kaXNwbGF5SW5IdG1sKHBsYXllciwgY29tcHV0ZXIpO1xuXG4gIC8vIFVJLnBsYWNlU2hpcE9uRHJvcChwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgLy8gY2hlY2sgZm9yIHdpbm5lclxuICAvLyBVSS5jaGVja1dpbm5lcihwbGF5ZXIsIGNvbXB1dGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGdyaWQgPSBHYW1lYm9hcmQuY3JlYXRlR3JpZCgpO1xuXG4gIHNldCA9IG5ldyBTZXQoKTtcblxuICBtaXNzZWRTaG90cyA9IG5ldyBTZXQoKTtcblxuICBoaXRTaG90cyA9IG5ldyBTZXQoKTtcblxuICBzdGF0aWMgY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBncmlkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgZ3JpZFtpXVtqXSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhncmlkKTtcbiAgICByZXR1cm4gZ3JpZDtcblxuICAgIC8vIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KDEpO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIC8vICAgYXJyYXlbaV0gPSBuZXcgQXJyYXkoMTApO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgLy8gcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgcGxhY2VTaGlwTGVmdFRvUmlnaHQoeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cbiAgICAvLyBwbGFjZSBzaGlwIGhvcml6b250YWxseSBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgeCBpbiBmdW5jdGlvbjoke3h9XG4gICAgICAvLyB5IGluIGZ1bmN0aW9uOiAke3kgKyBpfWApO1xuICAgICAgdGhpcy5ncmlkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwVXBUb0Rvd24oeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cbiAgICAvLyBwbGFjZSBzaGlwIHZlcnRpY2FsbHkgZnJvbSB1cCB0byBkb3duXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5ncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5ncmlkW3hdW3ldO1xuXG4gICAgY29uc3QgY29vcmRzID0gYCR7eH0sJHt5fWA7XG4gICAgaWYgKHRhcmdldCA9PT0gJ21pc3NlZCcgfHwgdGFyZ2V0ID09PSAnaGl0Jykge1xuICAgICAgY29uc29sZS5sb2coJ21pc3NlZCBvciBoaXQnKTtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnQUxSRUFEWSBTSE9UIEFUIFghISEnKTtcbiAgICB9XG4gICAgLy8gRmllbGQgaXMgYSBzaGlwXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICFBcnJheS5pc0FycmF5KHRhcmdldCkgJiZcbiAgICAgIHRhcmdldCAhPT0gbnVsbFxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coJ3NoaXAnKTtcbiAgICAgIHRoaXMuc2V0LmFkZChjb29yZHMpO1xuICAgICAgdGhpcy5oaXRTaG90cy5hZGQoY29vcmRzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICB0YXJnZXQuaGl0KCk7XG4gICAgICB0aGlzLmdyaWRbeF1beV0gPSAnaGl0JztcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpZWxkIGlzIGVtcHR5L3dhdGVyXG4gICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3YXRlcicpO1xuICAgICAgdGhpcy5zZXQuYWRkKGNvb3Jkcyk7XG4gICAgICB0aGlzLm1pc3NlZFNob3RzLmFkZChjb29yZHMpO1xuXG4gICAgICB0aGlzLmdyaWRbeF1beV0gPSAnbWlzc2VkJztcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc29sZS5sb2coYE9PUFMgU09NRVRISU5HIEVTQ0FQRUQgLSBDb29yZHMgYXQgeDoke3h9LCB5OiR7eX1gKTtcbiAgfVxuXG4gIGNoZWNrR2FtZW92ZXIoKSB7XG4gICAgLy8gY2hlY2sgZXZlcnkgcm91bmQ/XG4gICAgaWYgKHRoaXMuaGl0U2hvdHMuc2l6ZSA+PSAzMCkge1xuICAgICAgLy8gdGhlIG90aGVyIHBsYXllciB3b25cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgb3Bwb25lbnQgPSBudWxsO1xuXG4gIGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICBzZXRPcHBvbmVudChvcHBvbmVudCkge1xuICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudDtcbiAgfVxuXG4gIGF0dGFjayh4LCB5KSB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBhdHRhY2tzICR7eH0sICR7eX1gKTtcbiAgICAvLyBBdHRhY2sgZ2FtZWJvYXJkIG9mIGNvbXB1dGVyXG4gICAgdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcblxuICAgIC8vIGlmIGF0dGFjayB3YXMgYSBoaXQuLi5cbiAgICBpZiAodGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U2hvdHMuaGFzKGAke3h9LCR7eX1gKSkge1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBoaXQgYXQgJHt4fSwke3l9YCk7XG4gICAgICAvLyAuLi5hdHRhY2sgYWdhaW5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLmhpdFNob3RzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBhdHRhY2sgd2FzIGEgbWlzc2VkU2hvdC4uLlxuICAgIGlmICh0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5taXNzZWRTaG90cy5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IG1pc3NlZCBhdCAke3h9LCR7eX1gKTtcbiAgICAgIC8vIC4uLmNvbXB1dGVyIGF0dGFja3NcbiAgICAgIHRoaXMub3Bwb25lbnQuYXR0YWNrUmFuZG9tKCk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNrUmFuZG9tKCkge1xuICAgIC8vIEdlbmVyYXRlIHJhbmRvbSB4IGFuZCB5XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgLy8gaWYgY29vcmRzIG5vdCBpbiBzZXQuLi5cbiAgICBpZiAoIXRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLnNldC5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICAvLyAuLi5hdHRhY2sgcGxheWVyXG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHt4fSwgJHt5fWApO1xuICAgICAgdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgIC8vIGlmIGhpdC4uLlxuICAgICAgaWYgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLmhpdFNob3RzLmhhcyhgJHt4fSwke3l9YCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBoaXQgYXQgJHt4fSwke3l9YCk7XG5cbiAgICAgICAgLy8gLi4uYXR0YWNrIGFnYWluXG5cbiAgICAgICAgdGhpcy5hdHRhY2tSYW5kb20oKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgbWlzc2VkLi4uXG4gICAgICBpZiAodGhpcy5vcHBvbmVudC5nYW1lYm9hcmQubWlzc2VkU2hvdHMuaGFzKGAke3h9LCR7eX1gKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IG1pc3NlZCBhdCAke3h9LCR7eX1gKTtcblxuICAgICAgICAvLyAuLi5wbGF5ZXJzIHR1cm5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGNvb3JkcyBBUkUgaW4gc2V0XG4gICAgaWYgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLnNldC5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICAvLyBjYWxsIGF0dGFjayByZWN1cnNpdmx5IGFuZCBzdGFydCBvdmVyXG4gICAgICB0aGlzLmF0dGFja1JhbmRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAneCcpIHtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcExlZnRUb1JpZ2h0KHgsIHksIGxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3knKSB7XG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXBVcFRvRG93bih4LCB5LCBsZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcFJhbmRvbShsZW5ndGgpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwTGVmdFRvUmlnaHQoeCwgeSwgbGVuZ3RoKTtcbiAgfVxuXG4gIHBsYWNlU3RhdGljKCkge1xuICAgIHRoaXMucGxhY2VTaGlwKDAsIDAsIDUsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoMSwgMCwgNCwgJ3gnKTtcbiAgICB0aGlzLnBsYWNlU2hpcCgyLCAwLCA0LCAneCcpO1xuICAgIHRoaXMucGxhY2VTaGlwKDMsIDAsIDMsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoNCwgMCwgMywgJ3gnKTtcbiAgICB0aGlzLnBsYWNlU2hpcCg1LCAwLCAzLCAneCcpO1xuICAgIHRoaXMucGxhY2VTaGlwKDYsIDAsIDIsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoNywgMCwgMiwgJ3gnKTtcbiAgICB0aGlzLnBsYWNlU2hpcCg4LCAwLCAyLCAneCcpO1xuICAgIHRoaXMucGxhY2VTaGlwKDksIDAsIDEsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoOSwgMiwgMSwgJ3gnKTtcbiAgfVxuXG4gIHBsYWNlU3RhdGljUmFuZG9tKCkge1xuICAgIHRoaXMucGxhY2VTaGlwKDAsIDUsIDUsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoMSwgNSwgNCwgJ3gnKTtcbiAgICB0aGlzLnBsYWNlU2hpcCgyLCA1LCA0LCAneCcpO1xuICAgIHRoaXMucGxhY2VTaGlwKDMsIDUsIDMsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoNCwgNSwgMywgJ3gnKTtcbiAgICB0aGlzLnBsYWNlU2hpcCg1LCA1LCAzLCAneCcpO1xuICAgIHRoaXMucGxhY2VTaGlwKDYsIDUsIDIsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoNywgNSwgMiwgJ3gnKTtcbiAgICB0aGlzLnBsYWNlU2hpcCg4LCA1LCAyLCAneCcpO1xuICAgIHRoaXMucGxhY2VTaGlwKDksIDUsIDEsICd4Jyk7XG4gICAgdGhpcy5wbGFjZVNoaXAoOSwgNywgMSwgJ3gnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy50eXBlID0gdGhpcy50eXBlW2xlbmd0aF07XG4gIH1cblxuICB0eXBlID0ge1xuICAgIC8vIDJcbiAgICAxOiAnUGF0cm9sIEJvYXQnLFxuICAgIC8vIDNcbiAgICAyOiAnQ3J1aXNlcicsXG4gICAgLy8gM1xuICAgIDM6ICdTdWJtYXJpbmUnLFxuICAgIC8vIDJcbiAgICA0OiAnQmF0dGxlc2hpcCcsXG4gICAgLy8gMVxuICAgIDU6ICdDYXJyaWVyJyxcbiAgICAvLyAzMCBmaWVsZHMgaW4gdG90YWxcbiAgfTtcblxuICB0aW1lc0hpdCA9IDA7XG5cbiAgc2FuayA9IGZhbHNlO1xuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgaWYgKHRoaXMudGltZXNIaXQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICB0aGlzLnNhbmsgPSB0cnVlO1xuICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMudHlwZX0gZGVzdHJveWVkIWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJjbGFzcyBVSSB7XG4gIHN0YXRpYyBkaXNwbGF5SW5IdG1sKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXIxO1xuICAgIGNvbnN0IGNvbXB1dGVyID0gcGxheWVyMjtcblxuICAgIC8vIGdldCBib2FyZHNcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lYm9hcmQuZ3JpZDtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gY29tcHV0ZXIuZ2FtZWJvYXJkLmdyaWQ7XG5cbiAgICAvLyBkZWZpbmUgSUQgZnJvbSBodG1sXG4gICAgY29uc3QgcGxheWVyQm9hcmRJRCA9ICdwbGF5ZXJCb2FyZCc7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZElEID0gJ2NvbXB1dGVyQm9hcmQnO1xuXG4gICAgLy8gZGlzcGxheSBib2FyZHMgaW4gaHRtbC9ET01cbiAgICBVSS5kaXNwbGF5Qm9hcmQocGxheWVyQm9hcmQsIHBsYXllckJvYXJkSUQpO1xuICAgIFVJLmRpc3BsYXlCb2FyZChjb21wdXRlckJvYXJkLCBjb21wdXRlckJvYXJkSUQpO1xuICAgIFVJLmF0dGFja09uQ2xpY2socGxheWVyLCBjb21wdXRlcik7XG4gICAgVUkucGxhY2VTaGlwT25Ecm9wKHBsYXllciwgY29tcHV0ZXIpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlCb2FyZChib2FyZCwgaWQpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XG4gICAgZ3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb3cnKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9JHtpfSR7an1gKTtcblxuICAgICAgICBpZiAoaWQgPT09ICdwbGF5ZXJCb2FyZCcpIHtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZW1wdHknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tcHV0ZXJlbXB0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYm9hcmRbaV1bal07XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgIUFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2hpcCcpO1xuICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQgPT09ICdoaXQnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hpdCcpO1xuICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJ1NIISc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0ID09PSAnbWlzc2VkJykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtaXNzZWQnKTtcbiAgICAgICAgICBjZWxsLmlubmVySFRNTCA9ICdNJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VtcHR5Jyk7XG4gICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmQoY2VsbCk7XG4gICAgICB9XG5cbiAgICAgIGdyaWQuYXBwZW5kKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dGFja09uQ2xpY2socGxheWVyLCBjb21wdXRlcikge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbXB0eScpO1xuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBJRCA9IGUudGFyZ2V0LmlkO1xuICAgICAgICBjb25zdCB4ID0gSUQuc2xpY2UoLTIsIC0xKTtcbiAgICAgICAgY29uc3QgeSA9IElELnNsaWNlKC0xKTtcblxuICAgICAgICBwbGF5ZXIuYXR0YWNrKHgsIHkpO1xuICAgICAgICBVSS5kaXNwbGF5SW5IdG1sKHBsYXllciwgY29tcHV0ZXIpO1xuXG4gICAgICAgIC8vIFRpbWVvdXQgZm9yIGxhdGVyIDopXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdEZWxheWVkIGZvciAxIHNlY29uZC4nKTtcbiAgICAgICAgLy8gICBVSS5kaXNwbGF5SW5IdG1sKHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHBsYWNlU2hpcE9uRHJvcChwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsbCcpO1xuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVtcHR5Jyk7XG5cbiAgICAvLyBEcmFnIEZ1bmN0aW9uc1xuXG4gICAgLy8gc2hpcFxuICAgIGZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZS50YXJnZXQuZGF0YXNldC5sZW5ndGgpO1xuICAgICAgY29uc29sZS5sb2cobGVuZ3RoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jyk7XG5cbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9ICcgaG9sZCc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmNsYXNzTmFtZSA9ICdpbnZpc2libGUnKSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VuZChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW5kJyk7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ2ZpbGwgc2hpcCc7XG4gICAgICBVSS5kaXNwbGF5SW5IdG1sKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIH1cblxuICAgIC8vIGRyb3BwYWJsZVxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvdmVyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcicpO1xuXG4gICAgICB0aGlzLmNsYXNzTmFtZSArPSAnIGhvdmVyZWQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZSgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2ZScpO1xuICAgICAgdGhpcy5jbGFzc05hbWUgPSAnZW1wdHknO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdEcm9wKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkcm9wJyk7XG4gICAgICBjb25zdCBsZW5ndGggPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG5cbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ2VtcHR5JztcbiAgICAgIC8vIHNoaXAgaXMgYXBwZW5kZWQgdG8gc3BlY2lmaWMgZmllbGQodGhpcylcbiAgICAgIC8vIChyZW1vdmVzIHNoaXAgZnJvbSBjb250YWluZXIpXG4gICAgICAvLyB0aGlzLmFwcGVuZChmaWxsKTtcbiAgICAgIGNvbnN0IElEID0gdGhpcy5pZDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBJRCk7XG4gICAgICBjb25zdCB4ID0gK0lELnNsaWNlKC0yLCAtMSk7XG4gICAgICBjb25zdCB5ID0gK0lELnNsaWNlKC0xKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGB4OiR7eH1gKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGB5OiR7eX1gKTtcbiAgICAgIHBsYXllci5wbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCAneCcpO1xuICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC5ncmlkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgfVxuICAgIC8vIEZpbGwgbGlzdGVuZXJzXG4gICAgLy8gZmlsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgIC8vIGZpbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGVtcHR5IGJveGVzIGFuZCBhZGQgbGlzdGVuZXJzXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCk7XG4gICAgfSk7XG5cbiAgICAvLyBmaWxsLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAvLyAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgICAvLyAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICAgIC8vIH0pO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5oYXNFdmVudGxpc3RlbmVyKSB7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG4gICAgICAgIHNoaXAuaGFzRXZlbnRsaXN0ZW5lciA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tXaW5uZXIocGxheWVyLCBjb21wdXRlcikge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrR2FtZW92ZXIoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgd29uIScpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5jaGVja0dhbWVvdmVyKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllciB3b24hJyk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuLy8gaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vbW9kdWxlcy9HYW1lJztcblxuZ2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9