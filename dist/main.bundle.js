webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-dashboard></app-dashboard>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".online{\r\n  background-color: #DCEDC8;\r\n}\r\n\r\n.offline{\r\n  background-color: #FFCCBC;\r\n}\r\n\r\n.loading{\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n.dot-online{\r\nheight: 8px;\r\nwidth: 8px;\r\nbackground-color: green;\r\nborder-radius: 50%;\r\ndisplay: inline-block;\r\n}\r\n\r\n.dot-offline{\r\n  height: 8px;\r\n  width: 8px;\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.dot-loading{\r\n  height: 8px;\r\n  width: 8px;\r\n  background-color: #9E9E9E;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.buffer20{\r\n    height: 20px;\r\n}\r\n\r\nlabel{\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\ni{\r\n  font-size: 12px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"buffer20\"></div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-inline\">\n          <div class=\"form-group\">\n            <label>Name: &nbsp;</label>\n            <input class=\"form-control\" placeholder=\"optional\" [(ngModel)]=\"name\" name=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">&nbsp; IP address: &nbsp; </label>\n            <input class=\"form-control\" placeholder=\"IP address\" [(ngModel)]=\"ip\" name=\"ip\">\n          </div>\n          &nbsp;\n          <button (click)=\"add()\" class=\"btn btn-sm\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n\n          <div class=\"form-group\">\n            <label for=\"pwd\">&nbsp; Ping Interval(s): &nbsp; </label>\n            <input class=\"form-control\" placeholder=\"in seconds\" [(ngModel)]=\"pingIntervalTime\">\n          </div>\n          &nbsp;\n          <button (click)=\"setPingInterval()\" class=\"btn btn-sm\">\n            <i class=\"fa fa-refresh\"></i>\n          </button>\n          <div class=\"form-group\">\n            <label for=\"pwd\">&nbsp; Fetch Interval(s): &nbsp; </label>\n            <input class=\"form-control\" placeholder=\"in seconds\" [(ngModel)]=\"fetchIntervalTime\">\n          </div>\n          &nbsp;\n          <button (click)=\"setFetchInterval()\" class=\"btn btn-sm\">\n            <i class=\"fa fa-refresh\"></i>\n          </button>\n\n        </div>\n      </div>\n    </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"buffer20\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>IP address</th>\n            <th>status</th>\n            <th>uptime</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr [ngClass]=\"[user.status ? 'online' : 'offline']\" *ngFor=\"let user of users;let i=index\">\n            <td>{{user.name}}</td>\n            <td>{{user.ip}}</td>\n            <td>\n              <span [ngClass]=\"[user.status ? 'dot-online' : 'dot-offline']\"></span> {{user.status ? 'online' : 'offline'}}\n            </td>\n            <td>{{user.upTime ? user.upTime : '0' }}</td>\n            <td>\n              <button class=\"btn btn-danger btn-sm\" (click)=\"delete(i)\">\n                <i class=\"fa fa-trash\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_userService) {
        this._userService = _userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.get();
        this.getFetchInterval();
        this.getPingInterval();
    };
    DashboardComponent.prototype.getFetchInterval = function () {
        var _this = this;
        this._userService.getFetch().subscribe(function (res) {
            _this.fetchIntervalTime = res;
            _this.timer = setInterval(function () {
                _this.get();
            }, _this.fetchIntervalTime * 1000);
        });
    };
    DashboardComponent.prototype.getPingInterval = function () {
        var _this = this;
        this._userService.getPing().subscribe(function (res) {
            _this.pingIntervalTime = res;
        });
    };
    DashboardComponent.prototype.setFetchInterval = function () {
        var _this = this;
        this._userService.updateFetch(this.fetchIntervalTime).subscribe(function (res) {
            if (_this.timer) {
                clearInterval(_this.timer);
            }
            _this.timer = setInterval(function () {
                _this.get();
            }, _this.fetchIntervalTime * 1000);
        });
    };
    DashboardComponent.prototype.setPingInterval = function () {
        this._userService.updatePing(this.pingIntervalTime).subscribe(function (res) {
            window.alert("Ping Timer update at the server, new time is " + res);
        });
    };
    DashboardComponent.prototype.get = function () {
        var _this = this;
        this._userService.get().subscribe(function (res) {
            _this.users = res;
            for (var i = 0; i < _this.users.length; i++) {
                _this.users[i].upTime = _this.users[i].status ? _this.calculateUpTime(i) : '--';
            }
        });
    };
    DashboardComponent.prototype.calculateUpTime = function (i) {
        var now = new Date().getTime();
        var upTime = (now - this.users[i].startTime) / 1000;
        var unit = "s";
        if (upTime >= 60) {
            upTime /= 60;
            unit = 'm';
            if (upTime >= 60) {
                upTime /= 60;
                unit = "h";
                if (upTime >= 24) {
                    upTime /= 24;
                    unit = "d";
                    if (upTime >= 30) {
                        upTime /= 30;
                        unit = "mo";
                    }
                }
            }
        }
        return Math.round(upTime) + ' ' + unit;
    };
    DashboardComponent.prototype.delete = function (i) {
        this._userService.delete(this.users[i]._id).subscribe(function (res) {
            console.log('deleted');
        });
        this.users.splice(i, 1);
    };
    DashboardComponent.prototype.add = function () {
        var _this = this;
        var user = {
            name: this.name,
            ip: this.ip,
        };
        this._userService.insert(user).subscribe(function (res) {
            _this.users.push(res);
        });
    };
    DashboardComponent.prototype.update = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header{\r\n  background-color: #006064;\r\n  height: 100px;\r\n  border: solid #E0F2F1;\r\n}\r\n\r\n.header h1{\r\n  color:#E0F2F1;\r\n  font-size: 15px;\r\n}\r\n\r\n.header .title{\r\n  margin-top: 1%;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row header\">\n    <div class=\"col-lg-12 title\">\n      <!-- <img class=\"image\" src=\"assets/logo.png\"> -->\n      <h1>ICMP Ping Monitor</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://13.236.110.226/user";
    }
    UserService.prototype.get = function () {
        return this.http.get(this.url);
    };
    UserService.prototype.getPing = function () {
        return this.http.get(this.url + "/ping");
    };
    UserService.prototype.getFetch = function () {
        return this.http.get(this.url + "/fetch");
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.url + ("/" + id), { responseType: 'text' });
    };
    UserService.prototype.insert = function (user) {
        return this.http.post(this.url, user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.url + ("/" + user._id), user);
    };
    UserService.prototype.updatePing = function (time) {
        return this.http.put(this.url + ("/ping/" + time), null, { responseType: 'text' });
    };
    UserService.prototype.updateFetch = function (time) {
        return this.http.put(this.url + ("/fetch/" + time), null, { responseType: 'text' });
    };
    UserService.prototype.ping = function (user) {
        return this.http.post('/user/ping', user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map