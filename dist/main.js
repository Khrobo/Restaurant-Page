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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n    const contactInfo = (() => {\n        const div = document.createElement(\"div\");\n        div.className = \"contactform form\";\n        div.id = \"Contact\"\n        document.getElementById(\"content\").appendChild(div);\n        const contactDiv = document.createElement(\"div\");\n        contactDiv.className = \"contact-info\";\n        div.appendChild(contactDiv);\n        const icon = document.createElement(\"i\");\n        icon.innerHTML = `<i class=\"fas fa-ice-cream\"></i>`;\n        contactDiv.appendChild(icon);\n\n        const h2 = document.createElement(\"h2\");\n        h2.innerText = \"Contact Us\";\n        contactDiv.appendChild(h2);\n        const contactInfo = document.createElement(\"p\");\n        contactInfo.innerText = `Phone: 555-555-5555\n        Email Address: summerbites@emailtime.com\n        Website: summerbites.com`;\n        contactDiv.appendChild(contactInfo);\n\n        const summerImg = document.createElement(\"img\");\n        summerImg.className = \"imgs\"\n        summerImg.src = \"../dist/images/summertheme.jpeg\";\n        contactDiv.appendChild(summerImg);\n    })()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n    const header = (() => {\n        const header = document.createElement(\"header\");\n        document.body.appendChild(header);\n\n        const nav = document.createElement(\"nav\");\n        document.body.appendChild(nav);\n        const homeBtn = document.createElement(\"button\");\n        homeBtn.className = \"home btn\"\n        const menuBtn = document.createElement(\"button\");\n        menuBtn.className = \"menu btn\"\n        const contactBtn = document.createElement(\"button\");\n        contactBtn.className = \"contact btn\"\n        homeBtn.innerText = \"Home\", menuBtn.innerText = \"Menu\"\n        contactBtn.innerText = \"Contact\";\n        nav.appendChild(homeBtn);\n        nav.appendChild(menuBtn);\n        nav.appendChild(contactBtn);\n        \n        const h1 = document.createElement(\"h1\");\n        h1.innerText = \"Summer Bites\";\n        h1.className = \"header\";\n        document.querySelector(\"header\").appendChild(h1);\n\n        document.body.prepend(header, nav, document.getElementById(\"content\"))\n    })();\n    const info = (() => {\n        const div = document.createElement(\"div\");\n        div.className = \"homeform form\";\n        div.id = \"Home\"\n        document.getElementById(\"content\").appendChild(div);\n        const i = document.createElement(\"i\");\n        i.innerHTML = `<i class=\"fas fa-sun\"></i>`\n        div.appendChild(i)\n\n        const h2 = document.createElement(\"h2\");\n        h2.innerText = \"Welcome\"\n        div.appendChild(h2)\n        const p = document.createElement(\"p\");\n        p.className = \"text\";\n        p.innerText = `Summer Bites gives that glow of a long awaited summer of a life time. You will \n        have the memories of a life time and this will be the place where you want to be. So bring your friends, family and have a great time!`\n        div.appendChild(p);\n\n        const hTwo = document.createElement(\"h2\");\n        hTwo.innerText = \"Schedule\";\n        div.appendChild(hTwo);\n        const ul = document.createElement(\"ul\");\n        const li = document.createElement(\"li\");\n        const li2 = document.createElement(\"li\");\n        div.appendChild(ul);\n        ul.appendChild(li);\n        ul.appendChild(li2)\n        li.innerText = \"Mon-Thurs: 8am-12pm\";\n        li2.innerText = \"Fri-Sun: 9am-10pm\"\n    })()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst initiate = (() => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)()\n    ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)()\n    ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)()\n})() \n\nconst tabSwitching = (() => {\n    const tabs = (() => {\n        document.querySelectorAll(\".btn\").forEach(e => {\n            e.addEventListener(\"click\", (event) => {\n                const allBtns = document.querySelectorAll(\".btn\");\n                const allForms = document.querySelectorAll(\".form\");\n\n                for (let i = 0; i < allBtns.length; i++) {\n                    if (event.target.innerText == allBtns[i].innerText) {\n                        allBtns[i].style.background = \"#236e96\";\n                        allBtns[i].style.color = \"white\";\n                    } else {\n                        allBtns[i].style.background = \"transparent\";\n                        allBtns[i].style.color = \"#15b2d3\"\n                    }\n                }\n                for (let i = 0; i < allForms.length; i++) {\n                    if (event.target.innerText == allForms[i].id) {\n                        allForms[i].style.display = \"block\";\n                    } else {\n                        allForms[i].style.display = \"none\";\n                    }\n                }\n            })\n        })\n    })()\n})()\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const entree = (() => {\n        const div = document.createElement(\"div\");\n        div.className = \"menuform form\";\n        div.id = \"Menu\"\n        document.getElementById(\"content\").appendChild(div)\n        const i = document.createElement(\"i\");\n        i.className = \"umbrella\"\n        i.innerHTML = `<i class=\"fas fa-umbrella-beach\"></i>`;\n        document.querySelector(\".menuform\").appendChild(i);\n        const h2 = document.createElement(\"h2\");\n        h2.className = \"meal-header\"\n        h2.innerText = \"Meals\"\n        document.querySelector(\".menuform\").appendChild(h2)\n        const entreeH = document.createElement(\"h2\");\n        entreeH.className = \"appetize-header\";\n        entreeH.innerText = \"Appetizers\";\n        document.querySelector(\".menuform\").appendChild(entreeH);\n        \n        const parentDiv = document.createElement(\"div\");\n        parentDiv.className = \"appetizers\";\n        div.appendChild(parentDiv)\n\n        // Appetizer\n        // Bocconcini\n        const bocoDiv = document.createElement(\"div\");\n        parentDiv.appendChild(bocoDiv)\n        bocoDiv.className = \"boco\"\n        const bocoHead = document.createElement(\"h2\");\n        bocoHead.innerText = \"Bocconcini\"\n        bocoDiv.appendChild(bocoHead)\n        const bocoImg = new Image();\n        bocoImg.className = \"imgs\";\n        bocoImg.src = \"../dist/images/boco.jpg\";\n        bocoDiv.appendChild(bocoImg);\n        const bocoInfo = document.createElement(\"p\");\n        bocoInfo.innerText = `Creamy bocconcini is golden fried for an enticing crunch, and served with spicy tomato clip.`\n        bocoDiv.appendChild(bocoInfo);\n\n        // Chicken Skewers\n        const skewerDiv = document.createElement(\"div\");\n        parentDiv.append(skewerDiv);\n        skewerDiv.className = \"skewer\";\n        const skewerHead = document.createElement(\"h2\");\n        skewerHead.innerText = \"Chicken Skewers\";\n        skewerDiv.append(skewerHead);\n        const skewerImg = new Image();\n        skewerImg.className = \"imgs\";\n        skewerImg.src = \"../dist/images/skewers.jpeg\";\n        skewerDiv.appendChild(skewerImg);\n        const skewerInfo = document.createElement(\"p\");\n        skewerInfo.innerText = `This wonderful Malay chicken dish creates flavour and excitement with simple cooking and just a few authentic ingredients.`\n        skewerDiv.appendChild(skewerInfo);\n    })();\n\n    const mainCourse = (() => {\n        const div = document.createElement(\"div\");\n        document.querySelector(\".menuform\").appendChild(div)\n        div.className = \"main\";\n        const h2 = document.createElement(\"h2\");\n        h2.innerText = \"Main Course\";\n        h2.className = \"courses\"\n        document.querySelector(\".menuform\").appendChild(h2)\n        \n        // Main\n        // Thai\n        const thaiDiv = document.createElement(\"div\");\n        thaiDiv.className = \"thai\";\n        div.appendChild(thaiDiv);\n        const thaiHead = document.createElement(\"h2\");\n        thaiHead.innerText = \"Spicy Thai Basil Chicken\";\n        thaiDiv.appendChild(thaiHead);\n        document.querySelector(\".menuform\").prepend(document.querySelector(\".umbrella\"),\n        document.querySelector(\".meal-header\"),\n        document.querySelector(\".appetize-header\"),\n        document.querySelector(\".appetizers\"),\n        document.querySelector(\".courses\"), \n        document.querySelector(\".main\"));\n\n        const spicyImg = new Image();\n        spicyImg.src = \"../dist/images/thai.jpeg\";\n        spicyImg.className = \"imgs\"\n        thaiDiv.appendChild(spicyImg);\n        const thaiInfo = document.createElement(\"p\");\n        thaiDiv.appendChild(thaiInfo);\n        thaiInfo.innerText = `This spicy thai dish has spectacular taste \n        even with the regular basil instead of holy basil. The sauce acts like a glaze as the chicken mixture cooks over high heat.`\n\n        // Cardamom\n        const mapleDiv = document.createElement(\"div\");\n        mapleDiv.className = \"maple\";\n        div.appendChild(mapleDiv)\n        const mapleHead = document.createElement(\"h2\");\n        mapleHead.innerText = \"Cardamom Maple Salmon\";\n        mapleDiv.appendChild(mapleHead);\n\n        const mapleImg = document.createElement(\"img\");\n        mapleImg.className = \"imgs\"\n        mapleDiv.appendChild(mapleImg);\n        mapleImg.src = \"../dist/images/cardamom.jpeg\";\n        const mapleInfo = document.createElement(\"p\");\n        mapleDiv.appendChild(mapleInfo);\n        mapleInfo.innerText = `A slightly exotic flavor of indian inspired\n        with a maple twist. The flavor is exceptional, delicious, and unique.`\n    })()\n\n    const desserts = (() => {\n        const div = document.createElement(\"div\");\n        document.querySelector(\".menuform\").appendChild(div);\n        div.className = \"desserts\";\n        const creamDiv = document.createElement(\"div\");\n        creamDiv.className = \"cream\";\n        div.appendChild(creamDiv);\n        const h2 = document.createElement(\"h2\");\n        h2.innerText = \"Desserts\";\n        creamDiv.appendChild(h2);\n\n        // Fried Ice Cream\n        const creamHead = document.createElement(\"h2\");\n        creamHead.innerText = \"Fried Ice Cream\";\n        creamDiv.appendChild(creamHead);\n\n        const creamImg = document.createElement(\"img\");\n        creamImg.className = \"imgs\";\n        creamImg.src = \"../dist/images/icecream.jpeg\";\n        creamDiv.appendChild(creamImg);\n        const creamInfo = document.createElement(\"p\");\n        creamInfo.innerText = `The perfect ice cream without the deep frying mess! Creamy vanilla ice cream is formed into rounds, then rolled through a sauteed buttery cinnamon cornflake topping and finished with chocolate\n        or caramel sauce.`;\n        creamDiv.appendChild(creamInfo)\n\n        // Oreo Truffles\n        const oreoDiv = document.createElement('div');\n        oreoDiv.className = \"oreo\";\n        div.appendChild(oreoDiv);\n        const oreoHead = document.createElement(\"h2\");\n        oreoHead.innerText = \"Oreo Truffles\";\n        oreoDiv.appendChild(oreoHead);\n\n        const oreoImg = new Image();\n        oreoImg.className = \"imgs\";\n        oreoImg.src = \"../dist/images/truffles.jpeg\";\n        oreoDiv.appendChild(oreoImg);\n        const oreoInfo = document.createElement(\"p\");\n        oreoInfo.innerText = `Oreos, cream cheese, and white chocolate\n        chips are a match made in dessert heaven.`;\n        oreoDiv.appendChild(oreoInfo);\n    })()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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