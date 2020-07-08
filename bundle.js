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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Bullet */ \"./src/model/Bullet.ts\");\n/* harmony import */ var _model_Spaceship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Spaceship */ \"./src/model/Spaceship.ts\");\n/* harmony import */ var _model_Asteroid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Asteroid */ \"./src/model/Asteroid.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\n\n\nvar canvasEl = document.querySelector('canvas');\nvar ctx = canvasEl.getContext('2d');\nvar backgroundImage = new Image(600, 600);\nbackgroundImage.src =\n    'https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80';\nvar spaceship = new _model_Spaceship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([300, 300]);\nvar bullets = [];\nvar asteroids = [];\nfunction drawGame(ctx, drawables) {\n    ctx.clearRect(0, 0, 600, 600);\n    ctx.drawImage(backgroundImage, 0, 0, 600, 600);\n    drawables.forEach(function (drawable) { return drawable.draw(ctx); });\n}\nfunction gameLoop() {\n    bullets.forEach(function (bullet, idx, all) {\n        bullet.move();\n        var _a = bullet.getPosition(), x = _a[0], y = _a[1];\n        var halfDiagonal = bullet.getHalfDiagonal();\n        var _b = [-halfDiagonal, 600 + halfDiagonal], minLimit = _b[0], maxLimit = _b[1];\n        if (x < minLimit || y < minLimit || x > maxLimit || y > maxLimit) {\n            all.splice(idx, 1);\n        }\n    });\n    asteroids.forEach(function (asteroid, idx, all) {\n        asteroid.move();\n        var _a = asteroid.getPosition(), x = _a[0], y = _a[1];\n        var radius = asteroid.getRadius();\n        var _b = [-radius, 600 + radius], minLimit = _b[0], maxLimit = _b[1];\n        if (x < minLimit || y < minLimit || x > maxLimit || y > maxLimit) {\n            all.splice(idx, 1);\n        }\n    });\n    var spaceObjects = __spreadArrays(bullets, [spaceship], asteroids);\n    drawGame(ctx, spaceObjects);\n}\ncanvasEl.addEventListener('mousemove', function (event) {\n    spaceship.setPosition([event.offsetX, event.offsetY]);\n});\ncanvasEl.addEventListener('click', function () {\n    var position = spaceship.getPosition();\n    var angle = spaceship.getAngle();\n    var speed = 5;\n    var bullet = new _model_Bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](position, angle, speed);\n    bullets.push(bullet);\n});\nsetInterval(function () {\n    var radius = Math.random() * 40 + 10;\n    var angularVelocity = Math.random() * 0.1 - 0.05;\n    var side = Math.floor(Math.random() * 4);\n    var position;\n    var velocity;\n    switch (side) {\n        case 0:\n            position = [Math.random() * 600, -radius];\n            velocity = [Math.random() * 3 - 1.5, Math.random() * 1.5];\n            break;\n        case 1:\n            position = [600 + radius, Math.random() * 600];\n            velocity = [-Math.random() * 1.5, Math.random() * 3 - 1.5];\n            break;\n        case 2:\n            position = [Math.random() * 600, 600 + radius];\n            velocity = [Math.random() * 3 - 1.5, -Math.random() * 1.5];\n            break;\n        case 3:\n            position = [-radius, Math.random() * 600];\n            velocity = [Math.random() * 1.5, Math.random() * 3 - 1.5];\n            break;\n    }\n    asteroids.push(new _model_Asteroid__WEBPACK_IMPORTED_MODULE_2__[\"default\"](position, velocity, angularVelocity, radius));\n    asteroids.sort(function (a, b) {\n        return a.getRadius() < b.getRadius() ? 1 : -1;\n    });\n}, 500);\nsetInterval(gameLoop, 10);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/model/Asteroid.ts":
/*!*******************************!*\
  !*** ./src/model/Asteroid.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/orbitalPosition */ \"./src/service/orbitalPosition.ts\");\n/* harmony import */ var _service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/degreesToRadians */ \"./src/service/degreesToRadians.ts\");\n\n\nvar Asteroid = /** @class */ (function () {\n    function Asteroid(position, velocity, angularVelocity, radius) {\n        this.position = position;\n        this.velocity = velocity;\n        this.angularVelocity = angularVelocity;\n        this.radius = radius;\n        this.angle = Math.PI / 2;\n    }\n    Asteroid.prototype.getPosition = function () {\n        return this.position;\n    };\n    Asteroid.prototype.setPosition = function (position) {\n        this.position = position;\n    };\n    Asteroid.prototype.getAngle = function () {\n        return this.angle;\n    };\n    Asteroid.prototype.getRadius = function () {\n        return this.radius;\n    };\n    Asteroid.prototype.move = function () {\n        var _a = this.position, x = _a[0], y = _a[1];\n        var _b = this.velocity, vx = _b[0], vy = _b[1];\n        this.position = [x + vx, y + vy];\n        this.angle += this.angularVelocity;\n    };\n    Asteroid.prototype.draw = function (ctx) {\n        var _a = this, position = _a.position, angle = _a.angle, radius = _a.radius;\n        ctx.strokeStyle = 'Black';\n        ctx.fillStyle = 'rgb(180,180,180)';\n        ctx.beginPath();\n        ctx.arc(position[0], position[1], this.radius, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n        ctx.beginPath();\n        var _b = Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, radius / 2, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(135)), x1 = _b[0], y1 = _b[1];\n        ctx.arc(x1, y1, this.radius / 10, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.beginPath();\n        var _c = Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, radius / 3, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(300)), x2 = _c[0], y2 = _c[1];\n        ctx.arc(x2, y2, radius / 6, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.beginPath();\n        var _d = Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, radius / 1.4, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(90)), x3 = _d[0], y3 = _d[1];\n        ctx.arc(x3, y3, radius / 7.5, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n    };\n    return Asteroid;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Asteroid);\n\n\n//# sourceURL=webpack:///./src/model/Asteroid.ts?");

/***/ }),

/***/ "./src/model/Bullet.ts":
/*!*****************************!*\
  !*** ./src/model/Bullet.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/orbitalPosition */ \"./src/service/orbitalPosition.ts\");\n/* harmony import */ var _service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/degreesToRadians */ \"./src/service/degreesToRadians.ts\");\n\n\nvar Bullet = /** @class */ (function () {\n    function Bullet(position, angle, speed) {\n        this.position = position;\n        this.angle = angle;\n        this.velocity = [Math.cos(angle) * speed, -Math.sin(angle) * speed];\n        this.halfDiagonal = 15;\n    }\n    Bullet.prototype.getPosition = function () {\n        return this.position;\n    };\n    Bullet.prototype.getAngle = function () {\n        return this.angle;\n    };\n    Bullet.prototype.getVelocity = function () {\n        return this.velocity;\n    };\n    Bullet.prototype.getHalfDiagonal = function () {\n        return this.halfDiagonal;\n    };\n    Bullet.prototype.move = function () {\n        var _a = this.position, x = _a[0], y = _a[1];\n        var _b = this.velocity, vx = _b[0], vy = _b[1];\n        this.position = [x + vx, y + vy];\n    };\n    Bullet.prototype.draw = function (ctx) {\n        var _a = this, position = _a.position, angle = _a.angle, halfDiagonal = _a.halfDiagonal;\n        var radius = halfDiagonal;\n        ctx.fillStyle = 'GoldenRod';\n        ctx.beginPath();\n        ctx.moveTo.apply(ctx, Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, radius, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(30)));\n        ctx.lineTo.apply(ctx, Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, radius, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(150)));\n        ctx.lineTo.apply(ctx, Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, radius, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(210)));\n        ctx.lineTo.apply(ctx, Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, radius, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(330)));\n        ctx.closePath();\n        ctx.fill();\n    };\n    return Bullet;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n\n//# sourceURL=webpack:///./src/model/Bullet.ts?");

/***/ }),

/***/ "./src/model/Spaceship.ts":
/*!********************************!*\
  !*** ./src/model/Spaceship.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/orbitalPosition */ \"./src/service/orbitalPosition.ts\");\n/* harmony import */ var _service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/degreesToRadians */ \"./src/service/degreesToRadians.ts\");\n\n\nvar Spaceship = /** @class */ (function () {\n    function Spaceship(position) {\n        this.position = position;\n        this.angle = Math.PI / 2;\n    }\n    Spaceship.prototype.getPosition = function () {\n        return this.position;\n    };\n    Spaceship.prototype.setPosition = function (position) {\n        var _a = this.position, oldX = _a[0], oldY = _a[1];\n        var newX = position[0], newY = position[1];\n        var _b = [oldX - newX, oldY - newY], dx = _b[0], dy = _b[1];\n        var d = Math.sqrt(dx * dx + dy * dy);\n        if (d > 5) {\n            this.angle = Math.atan2(oldY - newY, newX - oldX);\n        }\n        this.position = position;\n    };\n    Spaceship.prototype.getAngle = function () {\n        return this.angle;\n    };\n    Spaceship.prototype.draw = function (ctx) {\n        var _a = this, position = _a.position, angle = _a.angle;\n        ctx.strokeStyle = 'Black';\n        ctx.fillStyle = 'HotPink';\n        ctx.beginPath();\n        ctx.moveTo.apply(ctx, Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, 20, angle));\n        ctx.lineTo.apply(ctx, Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, 15, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(135)));\n        ctx.lineTo.apply(ctx, Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(position, 15, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(225)));\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n    };\n    return Spaceship;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spaceship);\n\n\n//# sourceURL=webpack:///./src/model/Spaceship.ts?");

/***/ }),

/***/ "./src/service/degreesToRadians.ts":
/*!*****************************************!*\
  !*** ./src/service/degreesToRadians.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (degrees) { return (degrees / 180) * Math.PI; });\n\n\n//# sourceURL=webpack:///./src/service/degreesToRadians.ts?");

/***/ }),

/***/ "./src/service/orbitalPosition.ts":
/*!****************************************!*\
  !*** ./src/service/orbitalPosition.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (centerPosition, radius, angle) {\n    var x = centerPosition[0], y = centerPosition[1];\n    return [x + Math.cos(angle) * radius, y - Math.sin(angle) * radius];\n});\n\n\n//# sourceURL=webpack:///./src/service/orbitalPosition.ts?");

/***/ })

/******/ });