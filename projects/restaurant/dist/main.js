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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nconst contact = () => {\n  const element = document.createElement(\"div\")\n  const menuBgEl = document.createElement(\"div\")\n  let centerDivEl = document.createElement(\"div\")\n  const contactInfoEl = document.createElement(\"div\")\n  const pictureEl = document.createElement(\"picture\")\n  let sourceEl = document.createElement(\"source\")\n  const imgEl = document.createElement(\"img\")\n  let paragraphEl = document.createElement(\"p\")\n\n  element.classList.add(\"contact\")\n  menuBgEl.classList.add(\"menu-background\")\n  contactInfoEl.classList.add(\"contact-info\")\n  centerDivEl.classList.add(\"center\")\n\n  imgEl.src = `https://via.placeholder.com/285`\n  imgEl.alt = `picture of restaurant on google maps`\n\n  sourceEl.srcset = `https://via.placeholder.com/600x350`\n  sourceEl.media = `(min-width: 800px)`\n\n  pictureEl.appendChild(sourceEl)\n\n  sourceEl = document.createElement(\"source\")\n  sourceEl.srcset = `https://via.placeholder.com/300`\n  sourceEl.media = `(min-width: 600px)`\n  pictureEl.appendChild(sourceEl)\n  pictureEl.appendChild(imgEl)\n\n  paragraphEl.textContent = `123-456-7890`\n  contactInfoEl.appendChild(paragraphEl)\n\n  paragraphEl = document.createElement(\"p\")\n  paragraphEl.textContent = `3420 Broadway St.`\n  contactInfoEl.appendChild(paragraphEl)\n\n  paragraphEl = document.createElement(\"p\")\n  paragraphEl.textContent = `San Diego, CA 92117`\n  contactInfoEl.appendChild(paragraphEl)\n\n  centerDivEl.appendChild(contactInfoEl)\n  menuBgEl.appendChild(centerDivEl)\n  centerDivEl = document.createElement(\"div\")\n  centerDivEl.classList.add(\"center\")\n  centerDivEl.appendChild(pictureEl)\n  menuBgEl.appendChild(centerDivEl)\n\n  element.appendChild(menuBgEl)\n  // element.appendChild(centerDivEl)\n\n  return element\n}\n\nconst loadContact = () => {\n  const main = document.getElementById(\"main\")\n  main.innerHTML = \"\"\n  main.appendChild(contact())\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/copy.js":
/*!*********************!*\
  !*** ./src/copy.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copy\": () => (/* binding */ copy)\n/* harmony export */ });\nconst copy = () => {\n  const element = document.createElement(\"div\")\n  const paragraph = document.createElement(\"p\")\n\n  paragraph.textContent = `Come eat at our great restaurant with amazing food made with high\n  quality ingredients. Insert buzzwords, \"organic\", \"gluten-free\",\n  \"vegan\".`\n  element.classList.add(\"copy\")\n  element.appendChild(paragraph)\n\n  return element\n}\n\n\n//# sourceURL=webpack://restaurant/./src/copy.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = () => {\n  const element = document.createElement(\"footer\")\n  const date = new Date()\n  const year = date.getFullYear()\n  element.innerHTML = `&copy; ${year} GREAT RESTAURANT HERE`\n  // element.classList.add(\"site-content\")\n  return element\n}\n\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"setActiveButton\": () => (/* binding */ setActiveButton)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst header = () => {\n  const element = document.createElement(\"header\")\n  const navEl = document.createElement(\"nav\")\n  const navMenuLinkEls = []\n  const navMenuLink = [\"Home\", \"Menu\", \"Contact\"]\n\n  for (let navLink of navMenuLink) {\n    const div = document.createElement(\"div\")\n    div.textContent = navLink\n    div.classList.add(\"button-nav\")\n\n    if (navLink === \"Home\") {\n      setActiveButton(div)\n    }\n\n    div.addEventListener(\"click\", () => {\n      console.log(`inside ${navLink}`)\n      setActiveButton(div)\n      switch (navLink) {\n        case \"Home\":\n          ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)()\n          break\n        case \"Menu\":\n          ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)()\n          break\n        case \"Contact\":\n          ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)()\n          break\n        default:\n          throw new Error()\n      }\n    })\n\n    navMenuLinkEls.push(div)\n  }\n\n  for (let navMenuLinkEl of navMenuLinkEls) {\n    navEl.appendChild(navMenuLinkEl)\n  }\n\n  element.append(navEl)\n\n  // element.classList.add(\"site-content\")\n  return element\n}\n\nconst setActiveButton = (button) => {\n  const buttons = document.querySelectorAll(\".button-nav\")\n\n  buttons.forEach((button) => {\n    if (button !== undefined) {\n      button.classList.remove(\"active-button-nav\")\n    }\n  })\n\n  button.classList.add(\"active-button-nav\")\n}\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hero\": () => (/* binding */ hero)\n/* harmony export */ });\nconst hero = () => {\n  const element = document.createElement(\"div\")\n  const siteTitleEl = document.createElement(\"h1\")\n  const divEl = document.createElement(\"div\")\n  const pictureEl = document.createElement(\"picture\")\n  const sourceEl1 = document.createElement(\"source\")\n  const sourceEl2 = document.createElement(\"source\")\n  const imgEl = document.createElement(\"img\")\n\n  imgEl.src = `https://via.placeholder.com/285`\n  imgEl.alt = `example picture`\n\n  sourceEl1.srcset = `https://via.placeholder.com/800x400`\n  sourceEl1.media = `(min-width: 800px)`\n\n  sourceEl2.srcset = `https://via.placeholder.com/600x300`\n  sourceEl2.media = `(min-width: 600px)`\n\n  pictureEl.appendChild(sourceEl1)\n  pictureEl.appendChild(sourceEl2)\n  pictureEl.appendChild(imgEl)\n\n  divEl.classList.add(\"center\")\n  divEl.appendChild(pictureEl)\n\n  siteTitleEl.classList.add(\"site-title\")\n  siteTitleEl.textContent = `GREAT RESTAURANT HERE`\n\n  element.classList.add(\"hero\")\n  element.appendChild(siteTitleEl)\n  element.appendChild(divEl)\n\n  return element\n}\n\n\n//# sourceURL=webpack://restaurant/./src/hero.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home),\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy */ \"./src/copy.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n\n\n\nconst home = () => {\n  const element = document.createElement(\"div\")\n\n  element.classList.add(\"home\")\n\n  element.appendChild((0,_hero__WEBPACK_IMPORTED_MODULE_1__.hero)())\n  element.appendChild((0,_copy__WEBPACK_IMPORTED_MODULE_0__.copy)())\n\n  return element\n}\n\nconst loadHome = () => {\n  const main = document.getElementById(\"main\")\n  main.innerHTML = \"\"\n  main.appendChild(home())\n}\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\nconst initializePage = () => {\n  // get reference to the parent node\n  const parentDiv = document.getElementById(\"main\").parentNode\n  parentDiv.prepend((0,_header__WEBPACK_IMPORTED_MODULE_1__.header)())\n  parentDiv.append((0,_footer__WEBPACK_IMPORTED_MODULE_3__.footer)())\n\n  ;(0,_header__WEBPACK_IMPORTED_MODULE_1__.setActiveButton)(document.querySelector(\".button-nav\"))\n  ;(0,_home__WEBPACK_IMPORTED_MODULE_2__.loadHome)()\n}\n\ninitializePage()\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst menu = () => {\n  const element = document.createElement(\"div\")\n  const gridBgEl = document.createElement(\"div\")\n  const gridEl = document.createElement(\"div\")\n  const gridItemsEls = []\n\n  for (let i = 0; i < 9; i++) {\n    const gridItemEl = document.createElement(\"div\")\n    gridItemEl.textContent = `Test Menu Item`\n    gridItemEl.classList.add(\"grid-item\")\n    gridItemsEls.push(gridItemEl)\n  }\n\n  gridBgEl.classList.add(\"grid-background\", \"center\")\n  gridEl.classList.add(\"grid\")\n\n  for (let gridItemEl of gridItemsEls) {\n    gridEl.appendChild(gridItemEl)\n  }\n\n  gridBgEl.appendChild(gridEl)\n  element.appendChild(gridBgEl)\n\n  element.classList.add(\"menu\")\n  return element\n}\n\nconst loadMenu = () => {\n  const main = document.getElementById(\"main\")\n  main.innerHTML = \"\"\n  main.appendChild(menu())\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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