(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gocejosifoski/repos/chain-wars/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'CHAIN-WARS';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/main-page/main-page.component */ "fWd/");






class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layout_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layout_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fWd/":
/*!*********************************************************!*\
  !*** ./src/app/layout/main-page/main-page.component.ts ***!
  \*********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MainPageComponent_div_74_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r5.showAttack = !ctx_r5.showAttack; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Attack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "1/3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Please select which network you want to attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Current balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "2,374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Current deposit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ul", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "HP 100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "AVAIL army");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_2_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r7.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Initiate attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Ethereum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "HP 100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "AVAIL army");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_2_Template_button_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r8.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Initiate attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Binance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "HP 100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "AVAIL army");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "arm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_2_Template_button_click_115_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r9.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Initiate attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainPageComponent_div_74_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_3_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r10.showAttack = !ctx_r10.showAttack; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Attack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "2/3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Charging the attack might take approximately 5-10 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "22% / 100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Current balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "2,374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Current deposit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "ul", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Connected to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Attack to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Attacking deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "100.000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Switch network");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_3_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r12.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Continue attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_3_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r13.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainPageComponent_div_74_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_4_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r14.showAttack = !ctx_r14.showAttack; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Attack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "3/3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "You switch the connection successfully to ETHEREUM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Current balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "2,374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Current deposit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ul", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Connected to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Attack AVAIL army");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "2,374,232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Attacking deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "100.000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_74_div_4_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r16.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainPageComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MainPageComponent_div_74_div_2_Template, 117, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MainPageComponent_div_74_div_3_Template, 48, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MainPageComponent_div_74_div_4_Template, 37, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.stepIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.stepIndex === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.stepIndex === 2);
} }
function MainPageComponent_div_75_div_2_form_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Available army");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Assign defenders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Defend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainPageComponent_div_75_div_2_form_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Available army");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Unassign defenders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Retreat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainPageComponent_div_75_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_75_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r20.showDefend = !ctx_r20.showDefend; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Defend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lorem ipsum dolor sit amet, lorem ispusm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Available army ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "2,374.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Army in transit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "274.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Active defenders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "274.232");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_75_div_2_Template_input_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r22.assignIndex(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Assign defenders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_div_75_div_2_Template_input_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r23.unAssignIndex(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Unassign defenders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, MainPageComponent_div_75_div_2_form_32_Template, 20, 0, "form", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, MainPageComponent_div_75_div_2_form_33_Template, 20, 0, "form", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r17.defendOption === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r17.defendOption === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r17.defendOption === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r17.defendOption === 2);
} }
function MainPageComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MainPageComponent_div_75_div_2_Template, 34, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.stepIndex === 0);
} }
class MainPageComponent {
    constructor(document) {
        this.document = document;
        this.stepIndex = 0;
        this.defendOption = 1;
        this.showAttack = false;
        this.showDefend = false;
    }
    ngOnInit() {
    }
    attackToggle() {
        this.showAttack = !this.showAttack;
    }
    defendToggle() {
        this.showDefend = !this.showDefend;
    }
    assignIndex() {
        this.defendOption = 1;
    }
    unAssignIndex() {
        this.defendOption = 2;
    }
    next() {
        this.stepIndex += 1;
    }
    prev() {
        this.stepIndex -= 1;
    }
}
MainPageComponent.??fac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
MainPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 219, vars: 2, consts: [[1, "main-page-layout"], [1, "container"], [1, "stars-wrapper"], [1, "stars"], [1, "twinkling"], [1, "clouds"], [1, "banner"], [1, "line"], ["src", "./assets/images/banner-image.webp", "alt", ""], [1, "main-screens"], [1, "left-column", "force-fields"], [1, "top-bar-buttons-set"], [1, "custom-select-wrapper", "mr-20"], [1, "select-custom"], [1, "select-label"], [1, "custom-select__trigger"], ["src", "./assets/images/chain-icons-default/polygon.png", "alt", ""], [1, "arrow"], ["src", "./assets/images/icons/select-arrow.svg", "alt", ""], [1, "custom-options"], ["data-value", "polygon", 1, "custom-option", "selected"], ["data-value", "binance", 1, "custom-option"], ["src", "./assets/images/chain-icons-default/binance.png", "alt", ""], ["data-value", "ethereum", 1, "custom-option"], ["src", "./assets/images/chain-icons-default/ethereum.png", "alt", ""], ["data-value", "fantom", 1, "custom-option"], ["src", "./assets/images/chain-icons-default/fantom.png", "alt", ""], [1, "custom-form-group"], [1, "custom-label"], [1, "name"], [1, "wallet-field"], [1, "battle-field"], [1, "battle-field-inner-wrapper"], [1, "notification-banner"], [1, "time-counting"], [1, "users-info-badge"], ["src", "./assets/images/icons/users-info-icon.svg", "alt", ""], [1, "current-viewers-badge"], ["src", "./assets/images/icons/current-viewers-icon.svg", "alt", ""], [1, "connection-status-badge"], ["src", "./assets/images/icons/connection-status.svg", "alt", ""], [1, "controllers"], [1, "defence-button", 3, "click"], ["src", "./assets/images/icons/defence-button.svg", "alt", ""], [1, "attack-button", 3, "click"], ["src", "./assets/images/icons/attack-button.svg", "alt", ""], [1, "battle-base"], [1, "chain", "chain-polygon", "active"], [1, "chain", "chain-binance"], [1, "chain", "chain-ethereum"], [1, "chain", "chain-fantom"], ["class", "custom-popup-wrapper", 4, "ngIf"], [1, "right-column", "force-fields-preview"], [1, "banner-header"], [1, "banner-image"], ["src", "./assets/images/mandalorian-helmet.png", "alt", ""], [1, "description-banner"], [1, "secondary-text"], [1, "btn", "btn-primary"], [1, "force-fields-list-content"], [1, "force-fields-title"], [1, "force-fields-list-item"], [1, "header-item"], [1, "body-item"], [1, "health-set-description"], ["width", "16", "height", "20", "viewBox", "0 0 16 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "green-shield"], ["d", "M6.5 11H4V8H6.5V5.5H9.5V8H12V11H9.5V13.5H6.5V11ZM8 0L0 3V9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09V3L8 0Z", "fill", "white"], [1, "health-progress"], [1, "health-progress-bar"], [1, "health-overflow"], ["src", "./assets/images/health-progress-bar.svg", "alt", ""], [1, "health-progress-bar", 2, "width", "10%"], [1, "health-progress-bar", 2, "width", "75%"], [1, "health-progress-bar", 2, "width", "52%"], [1, "battle-summary"], [1, "table-responsive"], [1, "custom-popup-wrapper"], [1, "overlay-popup"], ["class", "custom-popup-content first-screen", 4, "ngIf"], ["class", "custom-popup-content second-screen", 4, "ngIf"], [1, "custom-popup-content", "first-screen"], [1, "popup-header"], ["src", "./assets/images/icons/close-wrapper-icon.svg", "alt", "", 1, "close-icon-wrapper", 3, "click"], [1, "popup-header-title"], [1, "popup-paragraph-description"], [1, "header-data-placeholders"], [1, "yellow"], [1, "popup-body"], [1, "chains-list"], [1, "chain-list-header"], [1, "chains-list-item"], [1, "chains-list-column", "first-column"], [1, "chain-column-header"], [1, "column-caption"], [1, "chains-list-column", "second-column"], ["src", "./assets/images/icons/health-chield-white.svg", "alt", ""], ["src", "./assets/images/health-progress-bar-higher.svg", "alt", ""], [1, "chains-list-column", "third-column"], [1, "yellow", "text-uppercase", "mr-10", "font-20"], ["src", "./assets/images/icons/stormtrooper-icon.svg", "alt", ""], ["type", "text", "placeholder", "Enter amount", "aria-label", "amount", 1, "form-control"], [1, "chains-list-column", "fourth-column"], ["src", "./assets/images/weapon-icon.svg", "alt", ""], [1, "btn", "btn-primary", 3, "click"], [1, "custom-popup-content", "second-screen"], [1, "light-saber-progressbar"], [1, "light-saber-base"], ["src", "./assets/images/icons/light-saber-base.svg", "alt", ""], [1, "light-saber-loader-wrapper"], [1, "light-saber-loader"], [1, "light-saber-percentages"], [1, "attack-overview"], [1, "buttons-set"], [1, "btn", "btn-secondary", 3, "click"], [1, "inline-checkboxes"], [1, "custom-control", "custom-checkbox", "mb-10"], ["type", "checkbox", "id", "assignDefenders", 1, "custom-control-input", 3, "checked", "click"], ["for", "assignDefenders", 1, "custom-control-label"], ["type", "checkbox", "id", "unAssignDefenders", 1, "custom-control-input", 3, "checked", "click"], ["for", "unAssignDefenders", 1, "custom-control-label"], [4, "ngIf"], [1, "form-group"], ["for", "assignArmyValue"], [1, "yellow", "mr-10"], [1, "input-group", "mb-3"], ["type", "text", "id", "assignArmyValue", "placeholder", "Enter amount", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "btn-sm", "btn-primary", "ml-10"], [1, "btn-sm", "btn-primary", "w-100"], [1, "border-separator"], ["for", "unAssignArmyValue"], ["type", "text", "id", "unAssignArmyValue", "placeholder", "Enter amount", 1, "form-control"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Current network ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Polygon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Polygon (Matic) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Binance Smart Chain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Ethereum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Fantom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Wallet address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "1hr 20m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " 12,589 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " 3,531 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Live ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_Template_div_click_57_listener() { return ctx.defendToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Defence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainPageComponent_Template_div_click_61_listener() { return ctx.attackToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, MainPageComponent_div_74_Template, 5, 3, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, MainPageComponent_div_75_Template, 3, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Lorem ipsum dolor sit amet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Join Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Chain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "binance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "HP 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "svg", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "ETHERIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "HP 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "svg", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Fantom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "HP 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "svg", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "polygon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "HP 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "svg", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "section", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "USd battle summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Chain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Bridge Liquidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Bridge ARP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Loot price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "LP LOOT APR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "BSC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "USDC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "$10,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "10% + 100% bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "300%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "eth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "USDC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "$9,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "12% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "$200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "600%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "polygon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "USDC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "$5,000.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "$300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "1500%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showAttack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showDefend);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/main-page/main-page.component */ "fWd/");





const routes = [
    { path: '', redirectTo: 'play-room', pathMatch: 'full' },
    {
        path: 'play-room',
        component: _layout_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map