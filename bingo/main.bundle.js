webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".bingo-app div {\r\n    padding: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "/* Assume 1em is 16 px */\r\n\r\n@media (min-width: 1000px) { /* 40em + 8px * 42 = ~976px */\r\n    .bingo-board {\r\n        border: 3px solid #88f;\r\n        border-radius: 10px;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n        width: calc(40em + 8px * 41);\r\n    }\r\n}\r\n\r\n@media (max-width: 1000px) and (min-width: 500px) {\r\n    .bingo-board {\r\n        border: 3px solid #88f;\r\n        border-radius: 10px;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n        width: calc(20em + 8px * 21);\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .bingo-board {\r\n        border: 3px solid #88f;\r\n        border-radius: 10px;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n        width: calc(10em + 8px * 11);\r\n    }\r\n}\r\n\r\n.bingo-game-ended {\r\n    border-color: #ccc;\r\n}\r\n\r\n.bingo-board div {\r\n    border: 1px solid #000;\r\n    border-radius: 5px;\r\n    width: 2em;\r\n    height: 2em;\r\n    padding: .25em;\r\n    margin: 8px;\r\n    text-align: center;\r\n}\r\n\r\n .bingo-game-ended div {\r\n    border-color: #ccc;\r\n}\r\n\r\n.board-selected-bingo-number {\r\n    background-color: #8b8;\r\n    color: #fff;\r\n}\r\n\r\n.bingo-game-ended .board-selected-bingo-number {\r\n    background-color: #ccc;\r\n    color: #555;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".bingo-card {\r\n    border: 3px solid #f88;\r\n    border-radius: 10px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    padding: 10px;\r\n    min-width: 200px;\r\n    max-width: 1000px;\r\n}\r\n\r\n.bingo-card div {\r\n    border: 1px solid #000;\r\n    border-radius: 2px;\r\n    width: 20%;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.is-deactivated-bingo-card, .is-deactivated-bingo-card div {\r\n    border-color: #ccc;\r\n    color: #ccc;\r\n}\r\n\r\n.card-selected-bingo-number {\r\n    background-color: #8b8;\r\n    color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div class=\"container bingo-app\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <bingo-board [glob]=\"glob\"></bingo-board>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <bingo-card [cardId]=\"0\" [glob]=\"glob\"></bingo-card>\n            <bingo-status [glob]=\"glob\"></bingo-status>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <bingo-controls [glob]=\"glob\"></bingo-controls>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<div class=\"bingo-board\" [class.bingo-game-ended]=\"state.winner !== undefined\">\r\n    <div *ngFor=\"let n of [] | range:100\" [class.board-selected-bingo-number]=\"state.used[n]\">{{n}}</div>\r\n</div>"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<div class=\"bingo-card\" [class.is-deactivated-bingo-card]=\"!card.isActive\">\r\n    <div *ngFor=\"let number of card.luckyNumbers\" [class.card-selected-bingo-number]=\"state.used[number]\">{{number}}</div>\r\n</div>"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <button type=\"button\" class=\"btn btn-info\" [disabled]=\"state.winner !== undefined\" (click)=\"next()\">Next number</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"reset()\">Reset</button>\r\n</div>"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <p>{{state.status}}</p>\r\n</div>"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStorage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalStorage = (function () {
    function GlobalStorage() {
        if (typeof global === "object") {
            if (typeof global["globalStorage"] !== "object") {
                global["globalStorage"] = {};
            }
            this.storage = global["globalStorage"];
        }
        else if (typeof window === "object") {
            if (typeof window["globalStorage"] !== "object") {
                window["globalStorage"] = {};
            }
            this.storage = window["globalStorage"];
        }
        else {
            throw new Error("No storage device found");
        }
    }
    GlobalStorage.prototype.keyGenerator = function () {
        return Math.floor(Math.random() * Math.pow(2, 32));
    };
    GlobalStorage.prototype.getNewGlob = function () {
        var number;
        do {
            number = this.keyGenerator();
        } while (typeof this.storage[number] === "object");
        this.storage[number] = {};
        return number;
    };
    GlobalStorage.prototype.store = function (glob, key, value) {
        if (typeof this.storage[glob] !== "object") {
            throw new Error("Invalid glob");
        }
        this.storage[glob][key] = value;
    };
    GlobalStorage.prototype.fetch = function (glob, key) {
        if (typeof this.storage[glob] !== "object") {
            return;
        }
        return this.storage[glob][key];
    };
    GlobalStorage.prototype.reset = function () {
        this.storage = {};
    };
    return GlobalStorage;
}());
GlobalStorage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalStorage);

//# sourceMappingURL=globalStorage.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(22)))

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_card_service__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BingoGameStateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BingoGameStateService = (function () {
    function BingoGameStateService() {
        this.selectedNumbers = [];
        this.used = {};
        this.players = [];
        this.status = "Game is loading...";
        this.winner = undefined;
        this.removedPlayers = [];
        this.updateStatus("Press reset to start a new game");
        this.winner = -1;
    }
    BingoGameStateService.prototype.addPlayer = function () {
        this.players.push(new __WEBPACK_IMPORTED_MODULE_1__card_card_service__["a" /* BingoCardService */](this));
    };
    BingoGameStateService.prototype.removePlayer = function (id) {
        if (this.players[id] === undefined) {
            throw new Error("Invalid players");
        }
        this.players[id].markLeaving();
    };
    BingoGameStateService.prototype.markPlayerReady = function (id) {
        if (this.players[id] === undefined) {
            throw new Error("Invalid players");
        }
        this.players[id].markReady();
    };
    BingoGameStateService.prototype.markPlayerInactive = function (id) {
        if (this.players[id] === undefined) {
            throw new Error("Invalid players");
        }
        this.players[id].markInactive();
    };
    BingoGameStateService.prototype.getPlayerCount = function () {
        var count = 0;
        for (var i in this.players) {
            if (this.players[i] !== undefined) {
                count++;
            }
        }
        return count;
    };
    BingoGameStateService.prototype.getActivePlayerCount = function () {
        var count = 0;
        for (var i in this.players) {
            if (this.players[i].isActive) {
                count++;
            }
        }
        return count;
    };
    BingoGameStateService.prototype.next = function () {
        if (this.winner !== undefined) {
            this.updateStatus([
                "Please press the reset button to start a new game",
                "This game has ended, please press the reset button to start a new game",
                "There is no next number in this game as the game has been ended, press the reset button to start a new game"
            ][Math.floor(Math.random() * 3)]);
            return;
        }
        if (this.selectedNumbers.length < 100) {
            this.selectNextNumber();
            this.updateStatus("Number " + this.selectedNumbers[this.selectedNumbers.length - 1] +
                " got selected as number " + this.selectedNumbers.length);
        }
        else {
            this.updateStatus("There are no numbers left to be selected");
        }
        for (var i in this.players) {
            if (this.players[i].isBingo(this.selectedNumbers)) {
                this.winner = true;
                this.status = "We have a winner";
                return;
            }
        }
    };
    BingoGameStateService.prototype.reset = function () {
        this.winner = undefined;
        this.used = {};
        this.selectedNumbers = [];
        for (var i in this.players) {
            if (this.players[i].hasLeft) {
                delete this.players[i];
                this.removedPlayers.push(+i);
                continue;
            }
            this.players[i].reset();
        }
        this.updateStatus("Starting a new game");
    };
    BingoGameStateService.prototype.selectNextNumber = function () {
        var n;
        do {
            n = Math.floor(Math.random() * 100) + 1;
        } while (this.used[n] !== undefined);
        this.used[n] = true;
        this.selectedNumbers.push(n);
    };
    BingoGameStateService.prototype.updateStatus = function (status) {
        this.status = "Active players: " + this.getActivePlayerCount() + " - " + status;
    };
    return BingoGameStateService;
}());
BingoGameStateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BingoGameStateService);

//# sourceMappingURL=gameState.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(86);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bingo_gameState_gameState_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_globalStorage_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        var storage = new __WEBPACK_IMPORTED_MODULE_2__lib_globalStorage_service__["a" /* GlobalStorage */]();
        this.glob = storage.getNewGlob();
        this.state = new __WEBPACK_IMPORTED_MODULE_1__bingo_gameState_gameState_service__["a" /* BingoGameStateService */]();
        this.state.addPlayer();
        this.state.markPlayerReady(0);
        storage.store(this.glob, "game", this.state);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(146),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bingo_board_board_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bingo_card_card_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bingo_controls_controls_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bingo_status_status_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_range_pipe__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__bingo_board_board_component__["a" /* BingoBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__bingo_card_card_component__["a" /* BingoCardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__bingo_controls_controls_component__["a" /* BingoControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__bingo_status_status_component__["a" /* BingoStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lib_range_pipe__["a" /* RangePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BingoBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BingoBoardComponent = (function () {
    function BingoBoardComponent() {
    }
    BingoBoardComponent.prototype.ngOnInit = function () {
        var storage = new __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__["a" /* GlobalStorage */]();
        this.state = storage.fetch(this.glob, "game");
    };
    return BingoBoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], BingoBoardComponent.prototype, "glob", void 0);
BingoBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'bingo-board',
        template: __webpack_require__(147),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [])
], BingoBoardComponent);

//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BingoCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BingoCardComponent = (function () {
    function BingoCardComponent() {
    }
    BingoCardComponent.prototype.ngOnInit = function () {
        var storage = new __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__["a" /* GlobalStorage */]();
        this.state = storage.fetch(this.glob, "game");
        this.card = this.state.players[this.cardId];
    };
    return BingoCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], BingoCardComponent.prototype, "cardId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], BingoCardComponent.prototype, "glob", void 0);
BingoCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'bingo-card',
        template: __webpack_require__(148),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [])
], BingoCardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameState_gameState_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BingoCardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BingoCardService = (function () {
    function BingoCardService(gameState) {
        this.gameState = gameState;
        this.luckyNumbers = [];
        this.isActive = false;
        this.isReady = false;
        this.hasWon = false;
        this.hasLeft = false;
        this.generateCard();
    }
    BingoCardService.prototype.getNumberAt = function (x, y) {
        if (x > 4 || x < 0)
            throw new Error("X is " + x + " and is not within range of 0 and 4");
        if (y > 4 || y < 0)
            throw new Error("Y is " + y + " and is not within range of 0 and 4");
        return this.luckyNumbers[x * 5 + y];
    };
    BingoCardService.prototype.isBingo = function (numbers) {
        if (!this.isActive) {
            return false;
        }
        return this.checkHorizontal(0, numbers) ||
            this.checkHorizontal(1, numbers) ||
            this.checkHorizontal(2, numbers) ||
            this.checkHorizontal(3, numbers) ||
            this.checkHorizontal(4, numbers) ||
            this.checkDiagonal(true, numbers) ||
            this.checkDiagonal(false, numbers) ||
            this.checkVertical(0, numbers) ||
            this.checkVertical(1, numbers) ||
            this.checkVertical(2, numbers) ||
            this.checkVertical(3, numbers) ||
            this.checkVertical(4, numbers);
    };
    BingoCardService.prototype.markInactive = function () {
        this.isActive = false;
        this.isReady = false;
    };
    BingoCardService.prototype.markLeaving = function () {
        this.markInactive();
        this.hasLeft = true;
    };
    BingoCardService.prototype.markReady = function () {
        if (this.hasLeft) {
            return;
        }
        this.isReady = true;
    };
    BingoCardService.prototype.reset = function () {
        if (this.isReady) {
            this.isActive = true;
        }
        this.generateCard();
    };
    BingoCardService.prototype.generateCard = function () {
        var used = {};
        this.luckyNumbers = [];
        for (var i = 0; i < 25; i++) {
            var n = void 0;
            do {
                n = Math.floor(Math.random() * 100) + 1;
            } while (used[n] !== undefined);
            this.luckyNumbers.push(n);
            used[n] = true;
        }
    };
    BingoCardService.prototype.checkHorizontal = function (pos, numbers) {
        var i = 0;
        for (; i < 5; i++) {
            if (numbers.indexOf(this.getNumberAt(pos, i)) === -1) {
                break;
            }
        }
        return i === 5;
    };
    BingoCardService.prototype.checkDiagonal = function (leftTop, numbers) {
        var i = 0;
        for (; i < 5; i++) {
            if (numbers.indexOf(this.getNumberAt(leftTop ? i : 4 - i, i)) === -1) {
                break;
            }
        }
        return i === 5;
    };
    BingoCardService.prototype.checkVertical = function (pos, numbers) {
        var i = 0;
        for (; i < 5; i++) {
            if (numbers.indexOf(this.getNumberAt(i, pos)) === -1) {
                break;
            }
        }
        return i === 5;
    };
    return BingoCardService;
}());
BingoCardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gameState_gameState_service__["a" /* BingoGameStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gameState_gameState_service__["a" /* BingoGameStateService */]) === "function" && _a || Object])
], BingoCardService);

var _a;
//# sourceMappingURL=card.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BingoControlsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BingoControlsComponent = (function () {
    function BingoControlsComponent() {
    }
    BingoControlsComponent.prototype.ngOnInit = function () {
        var storage = new __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__["a" /* GlobalStorage */]();
        this.state = storage.fetch(this.glob, "game");
    };
    BingoControlsComponent.prototype.next = function () {
        this.state.next();
    };
    BingoControlsComponent.prototype.reset = function () {
        this.state.reset();
    };
    return BingoControlsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], BingoControlsComponent.prototype, "glob", void 0);
BingoControlsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'bingo-controls',
        template: __webpack_require__(149),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [])
], BingoControlsComponent);

//# sourceMappingURL=controls.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BingoStatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BingoStatusComponent = (function () {
    function BingoStatusComponent() {
    }
    BingoStatusComponent.prototype.ngOnInit = function () {
        var storage = new __WEBPACK_IMPORTED_MODULE_1__lib_globalStorage_service__["a" /* GlobalStorage */]();
        this.state = storage.fetch(this.glob, "game");
    };
    return BingoStatusComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], BingoStatusComponent.prototype, "glob", void 0);
BingoStatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'bingo-status',
        template: __webpack_require__(150),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [])
], BingoStatusComponent);

//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangePipe = (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (input, range) {
        var result = input.slice();
        for (var i = 1; i <= range; i++) {
            result.push(i);
        }
        return result;
    };
    return RangePipe;
}());
RangePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Pipe */])({
        name: 'range'
    })
], RangePipe);

//# sourceMappingURL=range.pipe.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[175]);
//# sourceMappingURL=main.bundle.js.map