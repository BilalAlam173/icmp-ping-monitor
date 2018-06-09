(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/pages.module.ngfactory": [
		"./src/app/pages/pages.module.ngfactory.js",
		"app-pages-pages-module-ngfactory"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: NbSimpleRoleProvider, NB_CORE_PROVIDERS, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSimpleRoleProvider", function() { return NbSimpleRoleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_CORE_PROVIDERS", function() { return NB_CORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/@core/module-import-guard.ts");
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/data.module */ "./src/app/@core/data/data.module.ts");
/* harmony import */ var _utils_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var NbSimpleRoleProvider = /** @class */ (function (_super) {
    __extends(NbSimpleRoleProvider, _super);
    function NbSimpleRoleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbSimpleRoleProvider.prototype.getRole = function () {
        // here you could provide any role based on any auth flow
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('guest');
    };
    return NbSimpleRoleProvider;
}(_nebular_security__WEBPACK_IMPORTED_MODULE_2__["NbRoleProvider"]));

var NB_CORE_PROVIDERS = _data_data_module__WEBPACK_IMPORTED_MODULE_5__["DataModule"].forRoot().providers.concat(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthModule"].forRoot({
    providers: {
        email: {
            service: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbEmailPassAuthProvider"],
            config: {
                baseEndpoint: 'http://localhost:3000',
                login: {
                    rememberMe: true,
                    endpoint: '/api/login',
                    method: 'post',
                    redirect: {
                        success: '/',
                        failure: null,
                    },
                    defaultErrors: ['Login/Email combination is not correct, please try again.'],
                    defaultMessages: ['You have been successfully logged in.'],
                },
            },
        },
    }
}).providers, [
    _nebular_security__WEBPACK_IMPORTED_MODULE_2__["NbSecurityModule"].forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: _nebular_security__WEBPACK_IMPORTED_MODULE_2__["NbRoleProvider"], useClass: NbSimpleRoleProvider,
    },
    _utils_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"],
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/@core/data/data.module.ts":
/*!*******************************************!*\
  !*** ./src/app/@core/data/data.module.ts ***!
  \*******************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/app/@core/data/users.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.service */ "./src/app/@core/data/state.service.ts");



var SERVICES = [
    _users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
    _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
];
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule,
            providers: SERVICES.slice(),
        };
    };
    return DataModule;
}());



/***/ }),

/***/ "./src/app/@core/data/state.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/state.service.ts ***!
  \*********************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");




var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layouts[0]);
        this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
        this.updateSidebarIcons(directionService.getDirection());
    }
    StateService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StateService.prototype.updateSidebarIcons = function (direction) {
        var _a = this.sidebars, startSidebar = _a[0], endSidebar = _a[1];
        var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirection"].LTR;
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    return StateService;
}());



/***/ }),

/***/ "./src/app/@core/data/users.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/users.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var counter = 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        // this.userArray = Object.values(this.users);
    }
    UserService.prototype.getUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.users);
    };
    UserService.prototype.getUserArray = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userArray);
    };
    UserService.prototype.getUser = function () {
        counter = (counter + 1) % this.userArray.length;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userArray[counter]);
    };
    return UserService;
}());



/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/module-import-guard.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/utils/analytics.service.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]; }))
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_data_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/data/users.service */ "./src/app/@core/data/users.service.ts");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, userService, analyticsService, _router) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this._router = _router;
        this.position = 'normal';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.user = users.nick; });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this._router.navigate(['/']);
    };
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, FooterComponent, SearchInputComponent, ThemeSettingsComponent, ThemeSwitcherComponent, SwitcherComponent, LayoutDirectionSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"]; });

/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ "./src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsComponent"]; });

/* harmony import */ var _theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-switcher/theme-switcher.component */ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherComponent", function() { return _theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_4__["ThemeSwitcherComponent"]; });

/* harmony import */ var _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switcher/switcher.component */ "./src/app/@theme/components/switcher/switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__["SwitcherComponent"]; });

/* harmony import */ var _layout_direction_switcher_layout_direction_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-direction-switcher/layout-direction-switcher.component */ "./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirectionSwitcherComponent", function() { return _layout_direction_switcher_layout_direction_switcher_component__WEBPACK_IMPORTED_MODULE_6__["LayoutDirectionSwitcherComponent"]; });










/***/ }),

/***/ "./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LayoutDirectionSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirectionSwitcherComponent", function() { return LayoutDirectionSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/takeWhile */ "./node_modules/rxjs-compat/_esm5/operators/takeWhile.js");



var LayoutDirectionSwitcherComponent = /** @class */ (function () {
    function LayoutDirectionSwitcherComponent(directionService) {
        var _this = this;
        this.directionService = directionService;
        this.directions = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirection"];
        this.alive = true;
        this.vertical = false;
        this.currentDirection = this.directionService.getDirection();
        this.directionService.onDirectionChange()
            .pipe(Object(rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (newDirection) { return _this.currentDirection = newDirection; });
    }
    LayoutDirectionSwitcherComponent.prototype.toggleDirection = function (newDirection) {
        this.directionService.setDirection(newDirection);
    };
    LayoutDirectionSwitcherComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    return LayoutDirectionSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/switcher/switcher.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/switcher/switcher.component.ts ***!
  \******************************************************************/
/*! exports provided: SwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return SwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SwitcherComponent = /** @class */ (function () {
    function SwitcherComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SwitcherComponent.prototype.isFirstValue = function () {
        return this.value === this.firstValue;
    };
    SwitcherComponent.prototype.isSecondValue = function () {
        return this.value === this.secondValue;
    };
    SwitcherComponent.prototype.currentValueLabel = function () {
        return this.isFirstValue()
            ? this.firstValueLabel
            : this.secondValueLabel;
    };
    SwitcherComponent.prototype.changeValue = function () {
        this.value = this.isFirstValue()
            ? this.secondValue
            : this.firstValue;
        this.valueChange.emit(this.value);
    };
    return SwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@theme/components/theme-settings/theme-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: ThemeSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return ThemeSettingsComponent; });
/* harmony import */ var _core_data_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/state.service */ "./src/app/@core/data/state.service.ts");

var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    return ThemeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@theme/components/theme-switcher/theme-switcher.component.ts ***!
  \******************************************************************************/
/*! exports provided: ThemeSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherComponent", function() { return ThemeSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");



var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
        this.firstTheme = 'default';
        this.secondTheme = 'cosmic';
        this.vertical = false;
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.getJsTheme()
            .subscribe(function (theme) { return _this.theme = theme; });
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var themeName = this.boolToTheme(theme);
        this.themeService.changeTheme(themeName);
        this.analyticsService.trackEvent('switchTheme');
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return theme.name === this.secondTheme;
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? this.secondTheme : this.firstTheme;
    };
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/@theme/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: SampleLayoutComponent, OneColumnLayoutComponent, TwoColumnsLayoutComponent, ThreeColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-column/one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__["OneColumnLayoutComponent"]; });

/* harmony import */ var _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-columns/two-columns.layout */ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__["TwoColumnsLayoutComponent"]; });

/* harmony import */ var _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-columns/three-columns.layout */ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnsLayoutComponent"]; });

/* harmony import */ var _sample_sample_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample/sample.layout */ "./src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return _sample_sample_layout__WEBPACK_IMPORTED_MODULE_3__["SampleLayoutComponent"]; });







/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ts":
/*!****************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.ts ***!
  \****************************************************************/
/*! exports provided: OneColumnLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return OneColumnLayoutComponent; });
// TODO: move layouts into the framework
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent() {
    }
    return OneColumnLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/layouts/sample/sample.layout.ts ***!
  \********************************************************/
/*! exports provided: SampleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return SampleLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_data_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/state.service */ "./src/app/@core/data/state.service.ts");




// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.themeService.onMediaQueryChange()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(20))
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    return SampleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/layouts/three-columns/three-columns.layout.ts ***!
  \**********************************************************************/
/*! exports provided: ThreeColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return ThreeColumnsLayoutComponent; });
// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent() {
    }
    return ThreeColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/layouts/two-columns/two-columns.layout.ts ***!
  \******************************************************************/
/*! exports provided: TwoColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return TwoColumnsLayoutComponent; });
// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent() {
    }
    return TwoColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/@theme/pipes/index.ts ***!
  \***************************************/
/*! exports provided: CapitalizePipe, PluralPipe, RoundPipe, TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__["CapitalizePipe"]; });

/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plural.pipe */ "./src/app/@theme/pipes/plural.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return _plural_pipe__WEBPACK_IMPORTED_MODULE_1__["PluralPipe"]; });

/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.pipe */ "./src/app/@theme/pipes/round.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return _round_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundPipe"]; });

/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing.pipe */ "./src/app/@theme/pipes/timing.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return _timing_pipe__WEBPACK_IMPORTED_MODULE_3__["TimingPipe"]; });







/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
  \*********************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/pipes/round.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
  \*********************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes */ "./src/app/@theme/pipes/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts */ "./src/app/@theme/layouts/index.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");











var BASE_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
var NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRouteTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSearchModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPopoverModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
    _nebular_security__WEBPACK_IMPORTED_MODULE_5__["NbSecurityModule"],
];
var COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_6__["SwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["LayoutDirectionSwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["OneColumnLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["SampleLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["ThreeColumnsLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["TwoColumnsLayoutComponent"],
];
var PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["PluralPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["RoundPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
];
var NB_THEME_PROVIDERS = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({
    name: 'default',
}, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__["COSMIC_THEME"]]).providers.concat(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"].forRoot().providers);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");




var routes = [
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], },
    {
        path: 'auth',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthComponent"],
        children: [
            {
                path: '',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
            },
            {
                path: 'login',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"],
            }
        ],
    },
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ngx-app", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [_core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ngx-app", _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var AppComponent = /** @class */ (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_nebular_auth_components_auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@nebular/auth/components/auth.component.ngfactory */ "./node_modules/@nebular/auth/components/auth.component.ngfactory.js");
/* harmony import */ var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component.ngfactory */ "./src/app/login/login.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_auth_components_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@nebular/auth/components/login/login.component.ngfactory */ "./node_modules/@nebular/auth/components/login/login.component.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_alert_alert_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_tooltip_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_typeahead_typeahead_window_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_datepicker_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_modal_modal_backdrop_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_modal_modal_window_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_popover_popover_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js");
/* harmony import */ var _node_modules_nebular_theme_components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/@nebular/theme/components/search/search.component.ngfactory */ "./node_modules/@nebular/theme/components/search/search.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_theme_components_popover_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../node_modules/@nebular/theme/components/popover/popover.component.ngfactory */ "./node_modules/@nebular/theme/components/popover/popover.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_theme_components_context_menu_context_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/@nebular/theme/components/context-menu/context-menu.component.ngfactory */ "./node_modules/@nebular/theme/components/context-menu/context-menu.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_auth_components_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/@nebular/auth/components/register/register.component.ngfactory */ "./node_modules/@nebular/auth/components/register/register.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_auth_components_logout_logout_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/@nebular/auth/components/logout/logout.component.ngfactory */ "./node_modules/@nebular/auth/components/logout/logout.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_auth_components_request_password_request_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../node_modules/@nebular/auth/components/request-password/request-password.component.ngfactory */ "./node_modules/@nebular/auth/components/request-password/request-password.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_auth_components_reset_password_reset_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/@nebular/auth/components/reset-password/reset-password.component.ngfactory */ "./node_modules/@nebular/auth/components/reset-password/reset-password.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_stack__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal-stack */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_alert_alert_config__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_progressbar_progressbar_config__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/progressbar/progressbar-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tooltip/tooltip-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_typeahead_typeahead_config__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/typeahead/typeahead-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_accordion_accordion_config__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/accordion/accordion-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/carousel/carousel-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_datepicker_ngb_calendar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_datepicker_datepicker_i18n__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_datepicker_ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_datepicker_ngb_date_adapter__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_datepicker_datepicker_config__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_dropdown_dropdown_config__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/dropdown/dropdown-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_pagination_pagination_config__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/pagination/pagination-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_popover_popover_config__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/popover/popover-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_rating_rating_config__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/rating/rating-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_tabset_tabset_config__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/timepicker/timepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");
/* harmony import */ var _nebular_theme_components_search_search_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @nebular/theme/components/search/search.service */ "./node_modules/@nebular/theme/components/search/search.service.js");
/* harmony import */ var _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @nebular/theme/theme.options */ "./node_modules/@nebular/theme/theme.options.js");
/* harmony import */ var _nebular_theme_theme_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @nebular/theme/theme.module */ "./node_modules/@nebular/theme/theme.module.js");
/* harmony import */ var _nebular_theme_components_popover_helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @nebular/theme/components/popover/helpers/positioning.helper */ "./node_modules/@nebular/theme/components/popover/helpers/positioning.helper.js");
/* harmony import */ var _nebular_theme_components_popover_helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @nebular/theme/components/popover/helpers/adjustment.helper */ "./node_modules/@nebular/theme/components/popover/helpers/adjustment.helper.js");
/* harmony import */ var _nebular_theme_components_popover_helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @nebular/theme/components/popover/helpers/trigger.helper */ "./node_modules/@nebular/theme/components/popover/helpers/trigger.helper.js");
/* harmony import */ var _nebular_theme_services_direction_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @nebular/theme/services/direction.service */ "./node_modules/@nebular/theme/services/direction.service.js");
/* harmony import */ var _nebular_theme_components_popover_helpers_placement_helper__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @nebular/theme/components/popover/helpers/placement.helper */ "./node_modules/@nebular/theme/components/popover/helpers/placement.helper.js");
/* harmony import */ var _nebular_theme_services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @nebular/theme/services/js-themes-registry.service */ "./node_modules/@nebular/theme/services/js-themes-registry.service.js");
/* harmony import */ var _nebular_theme_services_breakpoints_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @nebular/theme/services/breakpoints.service */ "./node_modules/@nebular/theme/services/breakpoints.service.js");
/* harmony import */ var _nebular_theme_services_theme_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @nebular/theme/services/theme.service */ "./node_modules/@nebular/theme/services/theme.service.js");
/* harmony import */ var _nebular_theme_services_spinner_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @nebular/theme/services/spinner.service */ "./node_modules/@nebular/theme/services/spinner.service.js");
/* harmony import */ var _nebular_theme_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @nebular/theme/components/sidebar/sidebar.service */ "./node_modules/@nebular/theme/components/sidebar/sidebar.service.js");
/* harmony import */ var _nebular_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @nebular/theme/components/menu/menu.service */ "./node_modules/@nebular/theme/components/menu/menu.service.js");
/* harmony import */ var _core_data_users_service__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./@core/data/users.service */ "./src/app/@core/data/users.service.ts");
/* harmony import */ var _core_data_state_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./@core/data/state.service */ "./src/app/@core/data/state.service.ts");
/* harmony import */ var _nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @nebular/auth/auth.options */ "./node_modules/@nebular/auth/auth.options.js");
/* harmony import */ var _nebular_auth_auth_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @nebular/auth/auth.module */ "./node_modules/@nebular/auth/auth.module.js");
/* harmony import */ var _nebular_auth_services_token_token_storage__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @nebular/auth/services/token/token-storage */ "./node_modules/@nebular/auth/services/token/token-storage.js");
/* harmony import */ var _nebular_auth_services_token_token_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @nebular/auth/services/token/token.service */ "./node_modules/@nebular/auth/services/token/token.service.js");
/* harmony import */ var _nebular_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @nebular/auth/services/auth.service */ "./node_modules/@nebular/auth/services/auth.service.js");
/* harmony import */ var _nebular_auth_providers_dummy_auth_provider__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @nebular/auth/providers/dummy-auth.provider */ "./node_modules/@nebular/auth/providers/dummy-auth.provider.js");
/* harmony import */ var _nebular_auth_providers_email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @nebular/auth/providers/email-pass-auth.provider */ "./node_modules/@nebular/auth/providers/email-pass-auth.provider.js");
/* harmony import */ var _nebular_security_services_acl_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @nebular/security/services/acl.service */ "./node_modules/@nebular/security/services/acl.service.js");
/* harmony import */ var _nebular_security_security_options__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @nebular/security/security.options */ "./node_modules/@nebular/security/security.options.js");
/* harmony import */ var _nebular_security_services_role_provider__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @nebular/security/services/role.provider */ "./node_modules/@nebular/security/services/role.provider.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./@core/core.module */ "./src/app/@core/core.module.ts");
/* harmony import */ var _nebular_security_services_access_checker_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @nebular/security/services/access-checker.service */ "./node_modules/@nebular/security/services/access-checker.service.js");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _nebular_auth_components_auth_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @nebular/auth/components/auth.component */ "./node_modules/@nebular/auth/components/auth.component.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nebular_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @nebular/auth/components/login/login.component */ "./node_modules/@nebular/auth/components/login/login.component.js");
/* harmony import */ var _nebular_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @nebular/auth/components/register/register.component */ "./node_modules/@nebular/auth/components/register/register.component.js");
/* harmony import */ var _nebular_auth_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @nebular/auth/components/logout/logout.component */ "./node_modules/@nebular/auth/components/logout/logout.component.js");
/* harmony import */ var _nebular_auth_components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @nebular/auth/components/request-password/request-password.component */ "./node_modules/@nebular/auth/components/request-password/request-password.component.js");
/* harmony import */ var _nebular_auth_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @nebular/auth/components/reset-password/reset-password.component */ "./node_modules/@nebular/auth/components/reset-password/reset-password.component.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_alert_alert_module__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/buttons/buttons.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/collapse/collapse.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/progressbar/progressbar.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tooltip/tooltip.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/typeahead/typeahead.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/accordion/accordion.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/carousel/carousel.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/dropdown/dropdown.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/pagination/pagination.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_popover_popover_module__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/popover/popover.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_rating_rating_module__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/rating/rating.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/timepicker/timepicker.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nebular_theme_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! @nebular/theme/components/shared/shared.module */ "./node_modules/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _nebular_theme_components_card_card_module__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! @nebular/theme/components/card/card.module */ "./node_modules/@nebular/theme/components/card/card.module.js");
/* harmony import */ var _nebular_theme_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! @nebular/theme/components/layout/layout.module */ "./node_modules/@nebular/theme/components/layout/layout.module.js");
/* harmony import */ var _nebular_theme_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! @nebular/theme/components/badge/badge.module */ "./node_modules/@nebular/theme/components/badge/badge.module.js");
/* harmony import */ var _nebular_theme_components_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! @nebular/theme/components/tabset/tabset.module */ "./node_modules/@nebular/theme/components/tabset/tabset.module.js");
/* harmony import */ var _nebular_theme_components_route_tabset_route_tabset_module__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! @nebular/theme/components/route-tabset/route-tabset.module */ "./node_modules/@nebular/theme/components/route-tabset/route-tabset.module.js");
/* harmony import */ var _nebular_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! @nebular/theme/components/menu/menu.module */ "./node_modules/@nebular/theme/components/menu/menu.module.js");
/* harmony import */ var _nebular_theme_components_user_user_module__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! @nebular/theme/components/user/user.module */ "./node_modules/@nebular/theme/components/user/user.module.js");
/* harmony import */ var _nebular_theme_components_actions_actions_module__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! @nebular/theme/components/actions/actions.module */ "./node_modules/@nebular/theme/components/actions/actions.module.js");
/* harmony import */ var _nebular_theme_components_search_search_module__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! @nebular/theme/components/search/search.module */ "./node_modules/@nebular/theme/components/search/search.module.js");
/* harmony import */ var _nebular_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! @nebular/theme/components/sidebar/sidebar.module */ "./node_modules/@nebular/theme/components/sidebar/sidebar.module.js");
/* harmony import */ var _nebular_theme_components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! @nebular/theme/components/checkbox/checkbox.module */ "./node_modules/@nebular/theme/components/checkbox/checkbox.module.js");
/* harmony import */ var _nebular_theme_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! @nebular/theme/components/popover/popover.module */ "./node_modules/@nebular/theme/components/popover/popover.module.js");
/* harmony import */ var _nebular_theme_components_context_menu_context_menu_module__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! @nebular/theme/components/context-menu/context-menu.module */ "./node_modules/@nebular/theme/components/context-menu/context-menu.module.js");
/* harmony import */ var _nebular_security_security_module__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! @nebular/security/security.module */ "./node_modules/@nebular/security/security.module.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _nebular_auth_services_token_token__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! @nebular/auth/services/token/token */ "./node_modules/@nebular/auth/services/token/token.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























































































































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_nebular_auth_components_auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbAuthComponentNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _node_modules_nebular_auth_components_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NbLoginComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_alert_alert_ngfactory__WEBPACK_IMPORTED_MODULE_6__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_tooltip_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipWindowNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_typeahead_typeahead_window_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadWindowNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_datepicker_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_modal_modal_backdrop_ngfactory__WEBPACK_IMPORTED_MODULE_10__["NgbModalBackdropNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_modal_modal_window_ngfactory__WEBPACK_IMPORTED_MODULE_11__["NgbModalWindowNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_popover_popover_ngfactory__WEBPACK_IMPORTED_MODULE_12__["NgbPopoverWindowNgFactory"], _node_modules_nebular_theme_components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["NbSearchFieldComponentNgFactory"], _node_modules_nebular_theme_components_popover_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["NbPopoverComponentNgFactory"], _node_modules_nebular_theme_components_context_menu_context_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["NbContextMenuComponentNgFactory"], _node_modules_nebular_auth_components_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["NbRegisterComponentNgFactory"], _node_modules_nebular_auth_components_logout_logout_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["NbLogoutComponentNgFactory"], _node_modules_nebular_auth_components_request_password_request_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["NbRequestPasswordComponentNgFactory"], _node_modules_nebular_auth_components_reset_password_reset_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["NbResetPasswordComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_l"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_browser_platform_browser_e"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomEventsPlugin"](p0_0, p0_1), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_a"], [_angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_d"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["Meta"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["Title"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_25__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_h"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_i"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_i"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_i"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_e"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_c"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_i"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"], _auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_modal_modal_stack__WEBPACK_IMPORTED_MODULE_30__["NgbModalStack"], _ng_bootstrap_ng_bootstrap_modal_modal_stack__WEBPACK_IMPORTED_MODULE_30__["NgbModalStack"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_modal_modal__WEBPACK_IMPORTED_MODULE_31__["NgbModal"], _ng_bootstrap_ng_bootstrap_modal_modal__WEBPACK_IMPORTED_MODULE_31__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap_modal_modal_stack__WEBPACK_IMPORTED_MODULE_30__["NgbModalStack"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_alert_alert_config__WEBPACK_IMPORTED_MODULE_32__["NgbAlertConfig"], _ng_bootstrap_ng_bootstrap_alert_alert_config__WEBPACK_IMPORTED_MODULE_32__["NgbAlertConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_progressbar_progressbar_config__WEBPACK_IMPORTED_MODULE_33__["NgbProgressbarConfig"], _ng_bootstrap_ng_bootstrap_progressbar_progressbar_config__WEBPACK_IMPORTED_MODULE_33__["NgbProgressbarConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_34__["NgbTooltipConfig"], _ng_bootstrap_ng_bootstrap_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_34__["NgbTooltipConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_typeahead_typeahead_config__WEBPACK_IMPORTED_MODULE_35__["NgbTypeaheadConfig"], _ng_bootstrap_ng_bootstrap_typeahead_typeahead_config__WEBPACK_IMPORTED_MODULE_35__["NgbTypeaheadConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_accordion_accordion_config__WEBPACK_IMPORTED_MODULE_36__["NgbAccordionConfig"], _ng_bootstrap_ng_bootstrap_accordion_accordion_config__WEBPACK_IMPORTED_MODULE_36__["NgbAccordionConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_37__["NgbCarouselConfig"], _ng_bootstrap_ng_bootstrap_carousel_carousel_config__WEBPACK_IMPORTED_MODULE_37__["NgbCarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_datepicker_ngb_calendar__WEBPACK_IMPORTED_MODULE_38__["NgbCalendar"], _ng_bootstrap_ng_bootstrap_datepicker_ngb_calendar__WEBPACK_IMPORTED_MODULE_38__["NgbCalendarGregorian"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_datepicker_datepicker_i18n__WEBPACK_IMPORTED_MODULE_39__["NgbDatepickerI18n"], _ng_bootstrap_ng_bootstrap_datepicker_datepicker_i18n__WEBPACK_IMPORTED_MODULE_39__["NgbDatepickerI18nDefault"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_datepicker_ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_40__["NgbDateParserFormatter"], _ng_bootstrap_ng_bootstrap_datepicker_ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_40__["NgbDateISOParserFormatter"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_datepicker_ngb_date_adapter__WEBPACK_IMPORTED_MODULE_41__["NgbDateAdapter"], _ng_bootstrap_ng_bootstrap_datepicker_ngb_date_adapter__WEBPACK_IMPORTED_MODULE_41__["NgbDateStructAdapter"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_datepicker_datepicker_config__WEBPACK_IMPORTED_MODULE_42__["NgbDatepickerConfig"], _ng_bootstrap_ng_bootstrap_datepicker_datepicker_config__WEBPACK_IMPORTED_MODULE_42__["NgbDatepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_dropdown_dropdown_config__WEBPACK_IMPORTED_MODULE_43__["NgbDropdownConfig"], _ng_bootstrap_ng_bootstrap_dropdown_dropdown_config__WEBPACK_IMPORTED_MODULE_43__["NgbDropdownConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_pagination_pagination_config__WEBPACK_IMPORTED_MODULE_44__["NgbPaginationConfig"], _ng_bootstrap_ng_bootstrap_pagination_pagination_config__WEBPACK_IMPORTED_MODULE_44__["NgbPaginationConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_popover_popover_config__WEBPACK_IMPORTED_MODULE_45__["NgbPopoverConfig"], _ng_bootstrap_ng_bootstrap_popover_popover_config__WEBPACK_IMPORTED_MODULE_45__["NgbPopoverConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_rating_rating_config__WEBPACK_IMPORTED_MODULE_46__["NgbRatingConfig"], _ng_bootstrap_ng_bootstrap_rating_rating_config__WEBPACK_IMPORTED_MODULE_46__["NgbRatingConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_tabset_tabset_config__WEBPACK_IMPORTED_MODULE_47__["NgbTabsetConfig"], _ng_bootstrap_ng_bootstrap_tabset_tabset_config__WEBPACK_IMPORTED_MODULE_47__["NgbTabsetConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_48__["NgbTimepickerConfig"], _ng_bootstrap_ng_bootstrap_timepicker_timepicker_config__WEBPACK_IMPORTED_MODULE_48__["NgbTimepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_search_search_service__WEBPACK_IMPORTED_MODULE_49__["NbSearchService"], _nebular_theme_components_search_search_service__WEBPACK_IMPORTED_MODULE_49__["NbSearchService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["NB_WINDOW"], _nebular_theme_theme_module__WEBPACK_IMPORTED_MODULE_51__["nbWindowFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_popover_helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_52__["NbPositioningHelper"], _nebular_theme_components_popover_helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_52__["NbPositioningHelper"], [_nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["NB_WINDOW"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_popover_helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_53__["NbAdjustmentHelper"], _nebular_theme_components_popover_helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_53__["NbAdjustmentHelper"], [_nebular_theme_components_popover_helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_52__["NbPositioningHelper"], _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["NB_WINDOW"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["NB_DOCUMENT"], null, [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_popover_helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_54__["NbTriggerHelper"], _nebular_theme_components_popover_helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_54__["NbTriggerHelper"], [_nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_services_direction_service__WEBPACK_IMPORTED_MODULE_55__["NbLayoutDirectionService"], _nebular_theme_services_direction_service__WEBPACK_IMPORTED_MODULE_55__["NbLayoutDirectionService"], [[2, _nebular_theme_services_direction_service__WEBPACK_IMPORTED_MODULE_55__["NB_LAYOUT_DIRECTION"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_popover_helpers_placement_helper__WEBPACK_IMPORTED_MODULE_56__["NbPlacementHelper"], _nebular_theme_components_popover_helpers_placement_helper__WEBPACK_IMPORTED_MODULE_56__["NbPlacementHelper"], [_nebular_theme_services_direction_service__WEBPACK_IMPORTED_MODULE_55__["NbLayoutDirectionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_57__["NbJSThemesRegistry"], _nebular_theme_services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_57__["NbJSThemesRegistry"], [_nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbBuiltInJSThemesToken"], _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbJSThemesToken"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_services_breakpoints_service__WEBPACK_IMPORTED_MODULE_58__["NbMediaBreakpointsService"], _nebular_theme_services_breakpoints_service__WEBPACK_IMPORTED_MODULE_58__["NbMediaBreakpointsService"], [_nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbMediaBreakpointsToken"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_services_theme_service__WEBPACK_IMPORTED_MODULE_59__["NbThemeService"], _nebular_theme_services_theme_service__WEBPACK_IMPORTED_MODULE_59__["NbThemeService"], [_nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbThemeOptionsToken"], _nebular_theme_services_breakpoints_service__WEBPACK_IMPORTED_MODULE_58__["NbMediaBreakpointsService"], _nebular_theme_services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_57__["NbJSThemesRegistry"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_services_spinner_service__WEBPACK_IMPORTED_MODULE_60__["NbSpinnerService"], _nebular_theme_services_spinner_service__WEBPACK_IMPORTED_MODULE_60__["NbSpinnerService"], [_nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_61__["NbSidebarService"], _nebular_theme_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_61__["NbSidebarService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_62__["NbMenuService"], _nebular_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_62__["NbMenuService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_62__["NbMenuInternalService"], _nebular_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_62__["NbMenuInternalService"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_data_users_service__WEBPACK_IMPORTED_MODULE_63__["UserService"], _core_data_users_service__WEBPACK_IMPORTED_MODULE_63__["UserService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _core_data_state_service__WEBPACK_IMPORTED_MODULE_64__["StateService"], _core_data_state_service__WEBPACK_IMPORTED_MODULE_64__["StateService"], [_nebular_theme_services_direction_service__WEBPACK_IMPORTED_MODULE_55__["NbLayoutDirectionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_OPTIONS"], _nebular_auth_auth_module__WEBPACK_IMPORTED_MODULE_66__["nbOptionsFactory"], [_nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_USER_OPTIONS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_auth_services_token_token_storage__WEBPACK_IMPORTED_MODULE_67__["NbTokenStorage"], _nebular_auth_services_token_token_storage__WEBPACK_IMPORTED_MODULE_67__["NbTokenLocalStorage"], [_nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_TOKEN_CLASS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_auth_services_token_token_service__WEBPACK_IMPORTED_MODULE_68__["NbTokenService"], _nebular_auth_services_token_token_service__WEBPACK_IMPORTED_MODULE_68__["NbTokenService"], [_nebular_auth_services_token_token_storage__WEBPACK_IMPORTED_MODULE_67__["NbTokenStorage"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _nebular_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_69__["NbAuthService"], _nebular_auth_auth_module__WEBPACK_IMPORTED_MODULE_66__["nbAuthServiceFactory"], [_nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_OPTIONS"], _nebular_auth_services_token_token_service__WEBPACK_IMPORTED_MODULE_68__["NbTokenService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_auth_providers_dummy_auth_provider__WEBPACK_IMPORTED_MODULE_70__["NbDummyAuthProvider"], _nebular_auth_providers_dummy_auth_provider__WEBPACK_IMPORTED_MODULE_70__["NbDummyAuthProvider"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_auth_providers_email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_71__["NbEmailPassAuthProvider"], _nebular_auth_providers_email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_71__["NbEmailPassAuthProvider"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_security_services_acl_service__WEBPACK_IMPORTED_MODULE_72__["NbAclService"], _nebular_security_services_acl_service__WEBPACK_IMPORTED_MODULE_72__["NbAclService"], [[2, _nebular_security_security_options__WEBPACK_IMPORTED_MODULE_73__["NB_SECURITY_OPTIONS_TOKEN"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_security_services_role_provider__WEBPACK_IMPORTED_MODULE_74__["NbRoleProvider"], _core_core_module__WEBPACK_IMPORTED_MODULE_75__["NbSimpleRoleProvider"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_security_services_access_checker_service__WEBPACK_IMPORTED_MODULE_76__["NbAccessChecker"], _nebular_security_services_access_checker_service__WEBPACK_IMPORTED_MODULE_76__["NbAccessChecker"], [_nebular_security_services_role_provider__WEBPACK_IMPORTED_MODULE_74__["NbRoleProvider"], _nebular_security_services_acl_service__WEBPACK_IMPORTED_MODULE_72__["NbAclService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_77__["AnalyticsService"], _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_77__["AnalyticsService"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _global__WEBPACK_IMPORTED_MODULE_78__["global"], _global__WEBPACK_IMPORTED_MODULE_78__["global"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_g"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_g"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_browser_platform_browser_h"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_d"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common__WEBPACK_IMPORTED_MODULE_21__["APP_BASE_HREF"], "/", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"], { useHash: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTES"], function () { return [[{ path: "pages", loadChildren: "app/pages/pages.module#PagesModule", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]] }, { path: "auth", component: _nebular_auth_components_auth_component__WEBPACK_IMPORTED_MODULE_79__["NbAuthComponent"], children: [{ path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_80__["LoginComponent"] }, { path: "login", component: _nebular_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_81__["NbLoginComponent"] }] }, { path: "", redirectTo: "auth", pathMatch: "full" }, { path: "**", redirectTo: "auth" }], [{ path: "auth", component: _nebular_auth_components_auth_component__WEBPACK_IMPORTED_MODULE_79__["NbAuthComponent"], children: [{ path: "", component: _nebular_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_81__["NbLoginComponent"] }, { path: "login", component: _nebular_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_81__["NbLoginComponent"] }, { path: "register", component: _nebular_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_82__["NbRegisterComponent"] }, { path: "logout", component: _nebular_auth_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_83__["NbLogoutComponent"] }, { path: "request-password", component: _nebular_auth_components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_84__["NbRequestPasswordComponent"] }, { path: "reset-password", component: _nebular_auth_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_85__["NbResetPasswordComponent"] }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_e"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_86__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_86__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_alert_alert_module__WEBPACK_IMPORTED_MODULE_87__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap_alert_alert_module__WEBPACK_IMPORTED_MODULE_87__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_88__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_88__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_89__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_89__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_90__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap_progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_90__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_91__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_91__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_92__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_92__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_93__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_93__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_94__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_94__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_95__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_95__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_96__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_96__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_97__["NgbModalModule"], _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_97__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_98__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_98__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_popover_popover_module__WEBPACK_IMPORTED_MODULE_99__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap_popover_popover_module__WEBPACK_IMPORTED_MODULE_99__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_rating_rating_module__WEBPACK_IMPORTED_MODULE_100__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap_rating_rating_module__WEBPACK_IMPORTED_MODULE_100__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_101__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_101__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_102__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap_timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_102__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_103__["NgbRootModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_103__["NgbRootModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_104__["NbSharedModule"], _nebular_theme_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_104__["NbSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_card_card_module__WEBPACK_IMPORTED_MODULE_105__["NbCardModule"], _nebular_theme_components_card_card_module__WEBPACK_IMPORTED_MODULE_105__["NbCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_106__["NbLayoutModule"], _nebular_theme_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_106__["NbLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_107__["NbBadgeModule"], _nebular_theme_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_107__["NbBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_108__["NbTabsetModule"], _nebular_theme_components_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_108__["NbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_route_tabset_route_tabset_module__WEBPACK_IMPORTED_MODULE_109__["NbRouteTabsetModule"], _nebular_theme_components_route_tabset_route_tabset_module__WEBPACK_IMPORTED_MODULE_109__["NbRouteTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_110__["NbMenuModule"], _nebular_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_110__["NbMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_user_user_module__WEBPACK_IMPORTED_MODULE_111__["NbUserModule"], _nebular_theme_components_user_user_module__WEBPACK_IMPORTED_MODULE_111__["NbUserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_actions_actions_module__WEBPACK_IMPORTED_MODULE_112__["NbActionsModule"], _nebular_theme_components_actions_actions_module__WEBPACK_IMPORTED_MODULE_112__["NbActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_search_search_module__WEBPACK_IMPORTED_MODULE_113__["NbSearchModule"], _nebular_theme_components_search_search_module__WEBPACK_IMPORTED_MODULE_113__["NbSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_114__["NbSidebarModule"], _nebular_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_114__["NbSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_115__["NbCheckboxModule"], _nebular_theme_components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_115__["NbCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_116__["NbPopoverModule"], _nebular_theme_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_116__["NbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme_components_context_menu_context_menu_module__WEBPACK_IMPORTED_MODULE_117__["NbContextMenuModule"], _nebular_theme_components_context_menu_context_menu_module__WEBPACK_IMPORTED_MODULE_117__["NbContextMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_103__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_103__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_security_security_module__WEBPACK_IMPORTED_MODULE_118__["NbSecurityModule"], _nebular_security_security_module__WEBPACK_IMPORTED_MODULE_118__["NbSecurityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _theme_theme_module__WEBPACK_IMPORTED_MODULE_119__["ThemeModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_119__["ThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_auth_auth_module__WEBPACK_IMPORTED_MODULE_66__["NbAuthModule"], _nebular_auth_auth_module__WEBPACK_IMPORTED_MODULE_66__["NbAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_75__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_75__["CoreModule"], [[3, _core_core_module__WEBPACK_IMPORTED_MODULE_75__["CoreModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_f"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_http_http_g"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme_services_direction_service__WEBPACK_IMPORTED_MODULE_55__["NB_LAYOUT_DIRECTION"], "ltr", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbThemeOptionsToken"], { name: "default" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbBuiltInJSThemesToken"], _nebular_theme_services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_57__["BUILT_IN_THEMES"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbJSThemesToken"], [{ name: "default", base: null, variables: { temperature: ["#42db7d", "#42db7d", "#42db7d", "#42db7d", "#42db7d"], solar: { gradientLeft: "#42db7d", gradientRight: "#42db7d", shadowColor: "rgba(0, 0, 0, 0)", radius: ["80%", "90%"] }, traffic: { colorBlack: "#000000", tooltipBg: "#ffffff", tooltipBorderColor: "#c0c8d1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#2a2a2a", tooltipFontWeight: "bolder", lineBg: "#c0c8d1", lineShadowBlur: "1", itemColor: "#bcc3cc", itemBorderColor: "#bcc3cc", itemEmphasisBorderColor: "#42db7d", shadowLineDarkBg: "rgba(0, 0, 0, 0)", shadowLineShadow: "rgba(0, 0, 0, 0)", gradFrom: "#ebeef2", gradTo: "#ebeef2" }, electricity: { tooltipBg: "#ffffff", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "0", tooltipBorderColor: "#ebeef2", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#2a2a2a", tooltipFontWeight: "bolder", axisLineColor: "rgba(0, 0, 0, 0)", xAxisTextColor: "#2a2a2a", yAxisSplitLine: "#ebeef2", itemBorderColor: "#42db7d", lineStyle: "solid", lineWidth: "4", lineGradFrom: "#42db7d", lineGradTo: "#42db7d", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "rgba(235, 238, 242, 0.5)", areaGradTo: "rgba(235, 238, 242, 0.5)", shadowLineDarkBg: "rgba(0, 0, 0, 0)" }, bubbleMap: { titleColor: "#484848", areaColor: "#dddddd", areaHoverColor: "#cccccc", areaBorderColor: "#ebeef2" }, echarts: { bg: "#ffffff", textColor: "#484848", axisLineColor: "#bbbbbb", splitLineColor: "#ebeef2", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#6a7985", areaOpacity: "0.7" }, chartjs: { axisLineColor: "#cccccc", textColor: "#484848" } } }, { name: "cosmic", base: "default", variables: { temperature: ["#2ec7fe", "#31ffad", "#7bff24", "#fff024", "#f7bd59"], solar: { gradientLeft: "#7bff24", gradientRight: "#2ec7fe", shadowColor: "#19977E", radius: ["70%", "90%"] }, traffic: { colorBlack: "#000000", tooltipBg: "rgba(0, 255, 170, 0.35)", tooltipBorderColor: "#00d977", tooltipExtraCss: "box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", lineBg: "#d1d1ff", lineShadowBlur: "14", itemColor: "#BEBBFF", itemBorderColor: "#ffffff", itemEmphasisBorderColor: "#ffffff", shadowLineDarkBg: "#655ABD", shadowLineShadow: "rgba(33, 7, 77, 0.5)", gradFrom: "rgba(118, 89, 255, 0.4)", gradTo: "rgba(164, 84, 255, 0.5)" }, electricity: { tooltipBg: "rgba(0, 255, 170, 0.35)", tooltipLineColor: "rgba(255, 255, 255, 0.1)", tooltipLineWidth: "1", tooltipBorderColor: "#00d977", tooltipExtraCss: "box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", axisLineColor: "rgba(161, 161 ,229, 0.3)", xAxisTextColor: "#a1a1e5", yAxisSplitLine: "rgba(161, 161 ,229, 0.2)", itemBorderColor: "#ffffff", lineStyle: "dotted", lineWidth: "6", lineGradFrom: "#00ffaa", lineGradTo: "#fff835", lineShadow: "rgba(14, 16, 48, 0.4)", areaGradFrom: "rgba(188, 92, 255, 0.5)", areaGradTo: "rgba(188, 92, 255, 0)", shadowLineDarkBg: "#a695ff" }, bubbleMap: { titleColor: "#ffffff", areaColor: "#2c2961", areaHoverColor: "#a1a1e5", areaBorderColor: "#654ddb" }, echarts: { bg: "#3d3780", textColor: "#ffffff", axisLineColor: "#a1a1e5", splitLineColor: "#342e73", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#6a7985", areaOpacity: "1" }, chartjs: { axisLineColor: "#a1a1e5", textColor: "#ffffff" } } }], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme_theme_options__WEBPACK_IMPORTED_MODULE_50__["nbMediaBreakpointsToken"], _nebular_theme_services_breakpoints_service__WEBPACK_IMPORTED_MODULE_58__["DEFAULT_MEDIA_BREAKPOINTS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_USER_OPTIONS"], { providers: { email: { service: _nebular_auth_providers_email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_71__["NbEmailPassAuthProvider"], config: { baseEndpoint: "http://localhost:3000", login: { rememberMe: true, endpoint: "/api/login", method: "post", redirect: { success: "/", failure: null }, defaultErrors: ["Login/Email combination is not correct, please try again."], defaultMessages: ["You have been successfully logged in."] } } } } }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_PROVIDERS"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_TOKEN_CLASS"], _nebular_auth_services_token_token__WEBPACK_IMPORTED_MODULE_120__["NbAuthSimpleToken"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_auth_auth_options__WEBPACK_IMPORTED_MODULE_65__["NB_AUTH_INTERCEPTOR_HEADER"], "Authorization", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_security_security_options__WEBPACK_IMPORTED_MODULE_73__["NB_SECURITY_OPTIONS_TOKEN"], { accessControl: { guest: { view: "*" }, user: { parent: "guest", create: "*", edit: "*", remove: "*" } } }, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('user')) {
            return true;
        }
        else {
            this._router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! exports provided: global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
var global = /** @class */ (function () {
    function global() {
        this.url = 'http://localhost:3000/api/';
    }
    return global;
}());



/***/ }),

/***/ "./src/app/login/login.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/login/login.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function() { return RenderType_LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function() { return View_LoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function() { return View_LoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function() { return LoginComponentNgFactory; });
/* harmony import */ var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.scss.shim.ngstyle */ "./src/app/login/login.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nebular_auth_components_auth_block_auth_block_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@nebular/auth/components/auth-block/auth-block.component.ngfactory */ "./node_modules/@nebular/auth/components/auth-block/auth-block.component.ngfactory.js");
/* harmony import */ var _nebular_auth_components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth/components/auth-block/auth-block.component */ "./node_modules/@nebular/auth/components/auth-block/auth-block.component.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setting.service */ "./src/app/setting.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["login failed!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["username/password combination is not correct, please try again."]))], null, null); }
function View_LoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 38, "nb-auth-block", [["_nghost-c3", ""]], null, null, null, _node_modules_nebular_auth_components_auth_block_auth_block_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbAuthBlockComponent_0"], _node_modules_nebular_auth_components_auth_block_auth_block_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbAuthBlockComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_auth_components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_3__["NbAuthBlockComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "h2", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ping Monitor"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "h5", [["class", "form-text sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 32, "form", [["autocomplete", "nope"], ["class", "ng-touched ng-dirty ng-invalid"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "label", [["class", "sr-only"], ["for", "input-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 7, "input", [["autofocus", ""], ["class", "form-control ng-untouched ng-pristine ng-invalid"], ["id", "input-username"], ["name", "username"], ["ng-reflect-name", "username"], ["ng-reflect-pattern", ".+@.+..+"], ["ng-reflect-required", "true"], ["placeholder", "Username"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.username = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "label", [["class", "sr-only"], ["for", "input-password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 9, "input", [["class", "form-control ng-untouched ng-pristine ng-invalid"], ["id", "input-password"], ["maxlength", "50"], ["minlength", "4"], ["name", "password"], ["ng-reflect-maxlength", "50"], ["ng-reflect-minlength", "4"], ["ng-reflect-name", "password"], ["ng-reflect-required", "true"], ["placeholder", "Password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0, p1_0, p2_0) { return [p0_0, p1_0, p2_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "button", [["class", "btn btn-block btn-hero-success"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.login() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Enter "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.error; _ck(_v, 12, 0, currVal_7); var currVal_16 = ""; _ck(_v, 18, 0, currVal_16); var currVal_17 = "username"; var currVal_18 = _co.username; _ck(_v, 21, 0, currVal_17, currVal_18); var currVal_29 = ""; _ck(_v, 29, 0, currVal_29); var currVal_30 = "4"; _ck(_v, 30, 0, currVal_30); var currVal_31 = "50"; _ck(_v, 31, 0, currVal_31); var currVal_32 = "password"; var currVal_33 = _co.password; _ck(_v, 34, 0, currVal_32, currVal_33); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).required ? "" : null); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 16, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).required ? "" : null); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).minlength : null); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).maxlength : null); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPending; _ck(_v, 27, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); }); }
function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], [_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("login", _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/login/login.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/login/login.component.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../setting.service */ "./src/app/setting.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_settingService, _router) {
        this._settingService = _settingService;
        this._router = _router;
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this._router.navigate(['pages/dashboard']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.username);
        this._settingService.login(this.username, this.password).subscribe(function (res) {
            _this.error = false;
            localStorage.setItem('user', res);
            _this._router.navigate(['pages/dashboard']);
        }, function (err) {
            _this.error = true;
            console.log('error');
        });
    };
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/setting.service.ts":
/*!************************************!*\
  !*** ./src/app/setting.service.ts ***!
  \************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var SettingService = /** @class */ (function () {
    function SettingService(_http, _global) {
        this._http = _http;
        this._global = _global;
    }
    SettingService.prototype.login = function (username, password) {
        var data = {
            username: username,
            password: password
        };
        console.log(data);
        return this._http.post(this._global.url + "login", data);
    };
    SettingService.prototype.get = function () {
        return this._http.get(this._global.url + "setting");
    };
    SettingService.prototype.update = function (settings) {
        return this._http.put(this._global.url + "setting", settings);
    };
    SettingService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function SettingService_Factory() { return new SettingService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_global__WEBPACK_IMPORTED_MODULE_1__["global"])); }, token: SettingService, providedIn: "root" });
    return SettingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\github\icmp-ping-monitor\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map