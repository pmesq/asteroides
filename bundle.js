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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Bullet */ \"./src/model/Bullet.ts\");\n/* harmony import */ var _model_Spaceship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Spaceship */ \"./src/model/Spaceship.ts\");\n/* harmony import */ var _model_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Background */ \"./src/model/Background.ts\");\n/* harmony import */ var _service_randomAsteroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/randomAsteroid */ \"./src/service/randomAsteroid.ts\");\n/* harmony import */ var _service_collision__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/collision */ \"./src/service/collision.ts\");\n/* harmony import */ var _model_ScoreText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/ScoreText */ \"./src/model/ScoreText.ts\");\n/* harmony import */ var _model_GameOverText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/GameOverText */ \"./src/model/GameOverText.ts\");\n/* harmony import */ var _model_HpBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/HpBar */ \"./src/model/HpBar.ts\");\n\n\n\n\n\n\n\n\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\nconst background = new _model_Background__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas);\nconst spaceship = new _model_Spaceship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([canvas.offsetWidth / 2, canvas.offsetHeight / 2], 3);\nconst bullets = [];\nconst asteroids = [];\nlet running = true;\nlet score = 0;\nconst hpBar = new _model_HpBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](spaceship.hp, spaceship.hp);\nconst scoreText = new _model_ScoreText__WEBPACK_IMPORTED_MODULE_5__[\"default\"](score);\nconst gameOverText = new _model_GameOverText__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nfunction resetGame() {\n    bullets.splice(0);\n    asteroids.splice(0);\n    running = true;\n    score = 0;\n    spaceship.hp = 3;\n    canvas.style.cursor = 'none';\n}\nfunction finishGame() {\n    running = false;\n    canvas.style.cursor = 'pointer';\n}\nfunction gameLogic() {\n    bullets.forEach((bullet, bulletIdx, allBullets) => {\n        bullet.move();\n        if (bullet.disappearedFrom(canvas)) {\n            allBullets.splice(bulletIdx, 1);\n        }\n    });\n    asteroids.forEach((asteroid, asteroidIdx, allAsteroids) => {\n        asteroid.move();\n        if (asteroid.disappearedFrom(canvas)) {\n            allAsteroids.splice(asteroidIdx, 1);\n        }\n        if (running && Object(_service_collision__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(asteroid, spaceship)) {\n            spaceship.hp--;\n            allAsteroids.splice(asteroidIdx, 1);\n        }\n        const bulletIdx = bullets.findIndex(bullet => Object(_service_collision__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(asteroid, bullet));\n        if (bulletIdx !== -1) {\n            if (running)\n                score++;\n            bullets.splice(bulletIdx, 1);\n            allAsteroids.splice(asteroidIdx, 1);\n        }\n    });\n    hpBar.hp = spaceship.hp;\n    scoreText.score = score;\n    if (spaceship.hp <= 0)\n        finishGame();\n}\nfunction drawGame(ctx) {\n    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);\n    const drawables = [\n        background,\n        ...bullets,\n        spaceship,\n        ...asteroids,\n        hpBar,\n        scoreText,\n    ];\n    if (!running) {\n        drawables.push(gameOverText);\n    }\n    drawables.forEach(drawable => drawable.draw(ctx));\n}\nfunction gameLoop() {\n    gameLogic();\n    drawGame(ctx);\n}\ncanvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {\n    if (running) {\n        spaceship.centerPosition = [offsetX, offsetY];\n    }\n});\ncanvas.addEventListener('click', () => {\n    if (running) {\n        const { centerPosition, angle } = spaceship;\n        bullets.push(new _model_Bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](centerPosition, angle, 5));\n    }\n    else {\n        resetGame();\n    }\n});\nsetInterval(() => {\n    if (running) {\n        asteroids.push(Object(_service_randomAsteroid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(canvas));\n        asteroids.sort((a, b) => (a.radius < b.radius ? 1 : -1));\n    }\n}, 500);\nsetInterval(gameLoop, 10);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/model/Asteroid.ts":
/*!*******************************!*\
  !*** ./src/model/Asteroid.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Asteroid; });\n/* harmony import */ var _service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/orbitalPosition */ \"./src/service/orbitalPosition.ts\");\n/* harmony import */ var _service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/degreesToRadians */ \"./src/service/degreesToRadians.ts\");\n\n\nclass Asteroid {\n    constructor(centerPosition, velocity, angularVelocity, radius) {\n        this._centerPosition = centerPosition;\n        this._velocity = velocity;\n        this._angularVelocity = angularVelocity;\n        this._radius = radius;\n        this._angle = Math.PI / 2;\n    }\n    get centerPosition() {\n        return this._centerPosition;\n    }\n    get velocity() {\n        return this._velocity;\n    }\n    get angularVelocity() {\n        return this._angularVelocity;\n    }\n    get radius() {\n        return this._radius;\n    }\n    get angle() {\n        return this._angle;\n    }\n    move() {\n        const [x, y] = this.centerPosition;\n        const [vx, vy] = this.velocity;\n        this._centerPosition = [x + vx, y + vy];\n        this._angle += this.angularVelocity;\n    }\n    disappearedFrom({ offsetWidth, offsetHeight, }) {\n        const [x, y] = this.centerPosition;\n        const { radius } = this;\n        return (x < -radius ||\n            x > offsetWidth + radius ||\n            y < -radius ||\n            y > offsetHeight + radius);\n    }\n    draw(ctx) {\n        const { centerPosition, angle, radius } = this;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = 'Black';\n        ctx.fillStyle = 'rgb(180,180,180)';\n        ctx.beginPath();\n        ctx.arc(centerPosition[0], centerPosition[1], radius, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n        ctx.beginPath();\n        const [x1, y1] = Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(centerPosition, radius / 2, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(135));\n        ctx.arc(x1, y1, radius / 10, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.beginPath();\n        const [x2, y2] = Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(centerPosition, radius / 3, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(300));\n        ctx.arc(x2, y2, radius / 6, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.beginPath();\n        const [x3, y3] = Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(centerPosition, radius / 1.4, angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(90));\n        ctx.arc(x3, y3, radius / 7.5, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.stroke();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/model/Asteroid.ts?");

/***/ }),

/***/ "./src/model/Background.ts":
/*!*********************************!*\
  !*** ./src/model/Background.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\nclass Background {\n    constructor({ offsetWidth, offsetHeight }) {\n        this.image = new Image(offsetWidth, offsetHeight);\n        this.image.src =\n            'https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80';\n    }\n    draw(ctx) {\n        const { offsetWidth, offsetHeight } = ctx.canvas;\n        ctx.drawImage(this.image, 0, 0, offsetWidth, offsetHeight);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/model/Background.ts?");

/***/ }),

/***/ "./src/model/Bullet.ts":
/*!*****************************!*\
  !*** ./src/model/Bullet.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\n/* harmony import */ var _service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/orbitalPosition */ \"./src/service/orbitalPosition.ts\");\n/* harmony import */ var _service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/degreesToRadians */ \"./src/service/degreesToRadians.ts\");\n\n\nclass Bullet {\n    constructor(centerPosition, angle, speed) {\n        this._centerPosition = centerPosition;\n        this._angle = angle;\n        this._velocity = [Math.cos(angle) * speed, -Math.sin(angle) * speed];\n        this._halfDiagonal = 15;\n    }\n    get centerPosition() {\n        return this._centerPosition;\n    }\n    get angle() {\n        return this._angle;\n    }\n    get velocity() {\n        return this._velocity;\n    }\n    get halfDiagonal() {\n        return this._halfDiagonal;\n    }\n    get vertexes() {\n        return [\n            Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.centerPosition, this.halfDiagonal, this.angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(30)),\n            Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.centerPosition, this.halfDiagonal, this.angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(150)),\n            Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.centerPosition, this.halfDiagonal, this.angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(210)),\n            Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.centerPosition, this.halfDiagonal, this.angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(330)),\n        ];\n    }\n    move() {\n        const [x, y] = this.centerPosition;\n        const [vx, vy] = this.velocity;\n        this._centerPosition = [x + vx, y + vy];\n    }\n    disappearedFrom({ offsetWidth, offsetHeight, }) {\n        return (this.vertexes.find(([x, y]) => x >= 0 && x <= offsetWidth && y >= 0 && y <= offsetHeight) === undefined);\n    }\n    draw(ctx) {\n        const { vertexes } = this;\n        ctx.fillStyle = 'GoldenRod';\n        ctx.beginPath();\n        ctx.moveTo(...vertexes[0]);\n        ctx.lineTo(...vertexes[1]);\n        ctx.lineTo(...vertexes[2]);\n        ctx.lineTo(...vertexes[3]);\n        ctx.closePath();\n        ctx.fill();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/model/Bullet.ts?");

/***/ }),

/***/ "./src/model/GameOverText.ts":
/*!***********************************!*\
  !*** ./src/model/GameOverText.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameOverText; });\nclass GameOverText {\n    draw(ctx) {\n        const { width, height } = ctx.canvas;\n        const gameOverText = 'Fim de jogo';\n        const gameOverX = width / 2;\n        const gameOverY = height / 2;\n        ctx.lineWidth = 1;\n        ctx.font = 'bold 80px Roboto';\n        ctx.textAlign = 'center';\n        ctx.fillStyle = 'White';\n        ctx.fillText(gameOverText, gameOverX, gameOverY, width);\n        ctx.strokeStyle = 'Black';\n        ctx.strokeText(gameOverText, gameOverX, gameOverY, width);\n        const clicToRestartText = 'Clique para reiniciar';\n        const clicToRestartX = width / 2;\n        const clicToRestartY = height / 2 + 60;\n        ctx.font = 'bold 40px Roboto';\n        ctx.textAlign = 'center';\n        ctx.fillStyle = 'White';\n        ctx.fillText(clicToRestartText, clicToRestartX, clicToRestartY, width);\n        ctx.strokeStyle = 'Black';\n        ctx.strokeText(clicToRestartText, clicToRestartX, clicToRestartY, width);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/model/GameOverText.ts?");

/***/ }),

/***/ "./src/model/HpBar.ts":
/*!****************************!*\
  !*** ./src/model/HpBar.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HpBar; });\nclass HpBar {\n    constructor(maxHp, hp) {\n        this._maxHp = maxHp;\n        this._hp = hp;\n    }\n    get maxHp() {\n        return this._maxHp;\n    }\n    set maxHp(maxHp) {\n        this._maxHp = maxHp;\n    }\n    get hp() {\n        return this._hp;\n    }\n    set hp(hp) {\n        this._hp = hp;\n    }\n    draw(ctx) {\n        const squareSize = 30;\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = 'White';\n        for (let i = 0; i < this.maxHp; i++) {\n            if (i < this.hp)\n                ctx.fillStyle = 'DarkRed';\n            else\n                ctx.fillStyle = 'Black';\n            ctx.fillRect(10 + squareSize * i, 10, squareSize, squareSize);\n            ctx.strokeRect(10 + squareSize * i, 10, squareSize, squareSize);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/model/HpBar.ts?");

/***/ }),

/***/ "./src/model/ScoreText.ts":
/*!********************************!*\
  !*** ./src/model/ScoreText.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoreText; });\nclass ScoreText {\n    constructor(score) {\n        this._score = score;\n    }\n    get score() {\n        return this._score;\n    }\n    set score(score) {\n        this._score = score;\n    }\n    draw(ctx) {\n        const { offsetWidth } = ctx.canvas;\n        const text = String(this.score);\n        const x = offsetWidth - 20;\n        const y = 50;\n        const maxWidth = offsetWidth;\n        ctx.lineWidth = 1;\n        ctx.font = 'bold 40px Roboto';\n        ctx.textAlign = 'right';\n        ctx.fillStyle = 'White';\n        ctx.fillText(text, x, y, maxWidth);\n        ctx.strokeStyle = 'Black';\n        ctx.strokeText(text, x, y, maxWidth);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/model/ScoreText.ts?");

/***/ }),

/***/ "./src/model/Spaceship.ts":
/*!********************************!*\
  !*** ./src/model/Spaceship.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spaceship; });\n/* harmony import */ var _service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/orbitalPosition */ \"./src/service/orbitalPosition.ts\");\n/* harmony import */ var _service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/degreesToRadians */ \"./src/service/degreesToRadians.ts\");\n\n\nclass Spaceship {\n    constructor(position, hp) {\n        this._centerPosition = position;\n        this._angle = Math.PI / 2;\n        this._hp = hp;\n    }\n    get centerPosition() {\n        return this._centerPosition;\n    }\n    set centerPosition(centerPosition) {\n        const [oldX, oldY] = this.centerPosition;\n        const [newX, newY] = centerPosition;\n        const [dx, dy] = [oldX - newX, oldY - newY];\n        const d = Math.sqrt(dx * dx + dy * dy);\n        if (d > 5) {\n            this._angle = Math.atan2(oldY - newY, newX - oldX);\n        }\n        this._centerPosition = centerPosition;\n    }\n    get angle() {\n        return this._angle;\n    }\n    get vertexes() {\n        return [\n            Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.centerPosition, 20, this.angle),\n            Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.centerPosition, 15, this.angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(135)),\n            Object(_service_orbitalPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.centerPosition, 15, this.angle + Object(_service_degreesToRadians__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(225)),\n        ];\n    }\n    get hp() {\n        return this._hp;\n    }\n    set hp(hp) {\n        this._hp = hp;\n    }\n    draw(ctx) {\n        if (this.hp > 0) {\n            const { vertexes } = this;\n            ctx.lineWidth = 5;\n            ctx.strokeStyle = 'DarkGoldenRod';\n            ctx.fillStyle = 'White';\n            ctx.beginPath();\n            ctx.moveTo(...vertexes[0]);\n            ctx.lineTo(...vertexes[1]);\n            ctx.lineTo(...vertexes[2]);\n            ctx.closePath();\n            ctx.stroke();\n            ctx.fill();\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/model/Spaceship.ts?");

/***/ }),

/***/ "./src/service/collision.ts":
/*!**********************************!*\
  !*** ./src/service/collision.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distance */ \"./src/service/distance.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((circle, polygon) => {\n    return (polygon.vertexes.find(vertex => Object(_distance__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(circle.centerPosition, vertex) <= circle.radius) !== undefined);\n});\n\n\n//# sourceURL=webpack:///./src/service/collision.ts?");

/***/ }),

/***/ "./src/service/degreesToRadians.ts":
/*!*****************************************!*\
  !*** ./src/service/degreesToRadians.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((degrees) => (degrees / 180) * Math.PI);\n\n\n//# sourceURL=webpack:///./src/service/degreesToRadians.ts?");

/***/ }),

/***/ "./src/service/distance.ts":
/*!*********************************!*\
  !*** ./src/service/distance.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((a, b) => {\n    const dx = a[0] - b[0];\n    const dy = a[1] - b[1];\n    return Math.sqrt(dx * dx + dy * dy);\n});\n\n\n//# sourceURL=webpack:///./src/service/distance.ts?");

/***/ }),

/***/ "./src/service/orbitalPosition.ts":
/*!****************************************!*\
  !*** ./src/service/orbitalPosition.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((centerPosition, radius, angle) => {\n    const [x, y] = centerPosition;\n    return [x + Math.cos(angle) * radius, y - Math.sin(angle) * radius];\n});\n\n\n//# sourceURL=webpack:///./src/service/orbitalPosition.ts?");

/***/ }),

/***/ "./src/service/randomAsteroid.ts":
/*!***************************************!*\
  !*** ./src/service/randomAsteroid.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Asteroid */ \"./src/model/Asteroid.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((canvas) => {\n    const { offsetWidth, offsetHeight } = canvas;\n    const vxMult = offsetWidth / 200;\n    const vyMult = offsetHeight / 200;\n    const radius = Math.random() * 40 + 10;\n    const angularVelocity = Math.random() * 0.1 - 0.05;\n    const side = Math.floor(Math.random() * 4);\n    let position;\n    let velocity;\n    switch (side) {\n        case 0:\n            position = [Math.random() * offsetWidth, -radius];\n            velocity = [\n                Math.random() * vxMult - vxMult / 2,\n                (Math.random() * vyMult) / 2,\n            ];\n            break;\n        case 1:\n            position = [offsetWidth + radius, Math.random() * offsetHeight];\n            velocity = [\n                (-Math.random() * vxMult) / 2,\n                Math.random() * vyMult - vyMult / 2,\n            ];\n            break;\n        case 2:\n            position = [Math.random() * offsetWidth, offsetHeight + radius];\n            velocity = [\n                Math.random() * vxMult - vxMult / 2,\n                (-Math.random() * vyMult) / 2,\n            ];\n            break;\n        case 3:\n            position = [-radius, Math.random() * offsetHeight];\n            velocity = [\n                (Math.random() * vxMult) / 2,\n                Math.random() * vyMult - vyMult / 2,\n            ];\n            break;\n    }\n    return new _model_Asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](position, velocity, angularVelocity, radius);\n});\n\n\n//# sourceURL=webpack:///./src/service/randomAsteroid.ts?");

/***/ })

/******/ });