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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingcomponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_404_error_404_component__ = __webpack_require__("./src/app/error-404/error-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__ = __webpack_require__("./src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__complaint_complaint_component__ = __webpack_require__("./src/app/complaint/complaint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_password_component__ = __webpack_require__("./src/app/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contactus_contactus_component__ = __webpack_require__("./src/app/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__complainttracker_complainttracker_component__ = __webpack_require__("./src/app/complainttracker/complainttracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'complaint', component: __WEBPACK_IMPORTED_MODULE_6__complaint_complaint_component__["a" /* ComplaintComponent */] },
    { path: 'password', component: __WEBPACK_IMPORTED_MODULE_7__password_password_component__["a" /* PasswordComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_8__contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: 'tracker', component: __WEBPACK_IMPORTED_MODULE_9__complainttracker_complainttracker_component__["a" /* ComplainttrackerComponent */] },
    { path: 'tracker/:id', component: __WEBPACK_IMPORTED_MODULE_9__complainttracker_complainttracker_component__["a" /* ComplainttrackerComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__error_404_error_404_component__["a" /* Error404Component */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingcomponents = [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__error_404_error_404_component__["a" /* Error404Component */], __WEBPACK_IMPORTED_MODULE_4__signin_signin_component__["a" /* SigninComponent */], __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_6__complaint_complaint_component__["a" /* ComplaintComponent */], __WEBPACK_IMPORTED_MODULE_7__password_password_component__["a" /* PasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_8__contactus_contactus_component__["a" /* ContactusComponent */], __WEBPACK_IMPORTED_MODULE_9__complainttracker_complainttracker_component__["a" /* ComplainttrackerComponent */], __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */]];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n    <router-outlet></router-outlet>   \r\n<app-footer></app-footer>\r\n<app-progress></app-progress>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__warning_warning_component__ = __webpack_require__("./src/app/warning/warning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__danger_danger_component__ = __webpack_require__("./src/app/danger/danger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_progress_component__ = __webpack_require__("./src/app/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__issuelist_issuelist_component__ = __webpack_require__("./src/app/issuelist/issuelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__success_success_component__ = __webpack_require__("./src/app/success/success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__warning_warning_component__["a" /* WarningComponent */],
                __WEBPACK_IMPORTED_MODULE_9__danger_danger_component__["a" /* DangerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__progress_progress_component__["a" /* ProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_13__issuelist_issuelist_component__["a" /* IssuelistComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["b" /* routingcomponents */], __WEBPACK_IMPORTED_MODULE_14__success_success_component__["a" /* SuccessComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complaint/complaint.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    background: #358CCE;\r\n    color: #FFF;\r\n    border-radius: 0px;\r\n    }\r\n    .jumbotron-sm { padding-top: 24px;\r\n    padding-bottom: 24px; }\r\n    .jumbotron small {\r\n    color: #FFF;\r\n    }\r\n    .h1 small {\r\n    font-size: 24px;\r\n    }\r\n    .group{\r\n    padding-bottom: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/complaint/complaint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Report an issue</h2>\r\n            <sub>Please report an authentic issue to retain credebility</sub>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"well well-sm\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">\r\n                                    Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" required=\"required\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">\r\n                                    Email Address</label>\r\n                                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" required=\"required\" />\r\n                            </div>\r\n                            <div class=\"group\">\r\n                                OR\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"phone\">\r\n                                    Phone</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"9876543210\" required=\"required\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"subject\">\r\n                                    Subject</label>\r\n                                <textarea class=\"form-control\" id=\"subject\" rows=\"1\" placeholder=\"Please specify a subject\" required=\"required\" ></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">\r\n                                    Issue Description</label>\r\n                                <textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\" placeholder=\"Please summarise the issue here...\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <button type=\"submit\" class=\"btn button\" id=\"btnContactUs\">\r\n                                Report</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/complaint/complaint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintComponent; });
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

var ComplaintComponent = /** @class */ (function () {
    function ComplaintComponent() {
    }
    ComplaintComponent.prototype.ngOnInit = function () {
    };
    ComplaintComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-complaint',
            template: __webpack_require__("./src/app/complaint/complaint.component.html"),
            styles: [__webpack_require__("./src/app/complaint/complaint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComplaintComponent);
    return ComplaintComponent;
}());



/***/ }),

/***/ "./src/app/complainttracker/complainttracker.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complainttracker/complainttracker.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  complainttracker works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/complainttracker/complainttracker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainttrackerComponent; });
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

var ComplainttrackerComponent = /** @class */ (function () {
    function ComplainttrackerComponent() {
    }
    ComplainttrackerComponent.prototype.ngOnInit = function () {
    };
    ComplainttrackerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-complainttracker',
            template: __webpack_require__("./src/app/complainttracker/complainttracker.component.html"),
            styles: [__webpack_require__("./src/app/complainttracker/complainttracker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComplainttrackerComponent);
    return ComplainttrackerComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <h2>Contact Us</h2>\r\n          <sub>Feel free to contact us</sub>\r\n          <hr>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n          <div class=\"well well-sm\">\r\n              <form>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"name\">\r\n                                  Name</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" required=\"required\" />\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label for=\"email\">\r\n                                  Email Address</label>\r\n                              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" required=\"required\" />                               \r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label for=\"phone\">\r\n                                  Phone</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"9876543210\" required=\"required\" />\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label for=\"subject\">\r\n                                  Subject</label>\r\n                              <select id=\"subject\" name=\"subject\" class=\"form-control\" required=\"required\">\r\n                                  <option value=\"na\" selected=\"\">Choose One:</option>\r\n                                  <option value=\"service\">General Customer Service</option>\r\n                                  <option value=\"suggestions\">Suggestions</option>\r\n                                  <option value=\"product\">Product Support</option>\r\n                              </select>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"name\">\r\n                                  Message</label>\r\n                              <textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\" placeholder=\"Message\"></textarea>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                          <button type=\"submit\" class=\"btn button\" id=\"btnContactUs\">\r\n                              Send Message</button>\r\n                      </div>\r\n                  </div>\r\n              </form>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <form>\r\n              <legend>\r\n                  <span class=\"glyphicon glyphicon-globe\"></span> Our office</legend>\r\n              <address>\r\n                  <strong>ZDESK, Community.</strong>\r\n                  <br> ss 431 KDA, Narayanpuri, \r\n                  <br> Naubasta, Kanpur\r\n                  <br> India - 208021\r\n                  <br>\r\n                  <abbr title=\"Phone\">\r\n                      P:</abbr>\r\n                  (+91) 9919487668\r\n              </address>\r\n              <address>\r\n                  <strong>Full Name</strong>\r\n                  <br>\r\n                  <a class=\"link\" href=\"mailto:zdeskplatform@gmail.com\">zdeskplatform@gmail.com</a>\r\n              </address>\r\n          </form>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
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

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactus',
            template: __webpack_require__("./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__("./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/danger/danger.component.css":
/***/ (function(module, exports) {

module.exports = "#dangerModal{\r\n    display: block;\r\n}\r\n#dangerModal > div > div{\r\n    background: crimson !important;\r\n    color: aliceblue !important;\r\n}"

/***/ }),

/***/ "./src/app/danger/danger.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showModal\" class=\"modal fade show\" id=\"dangerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DangerModalCenterTitle\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"dangerModalTitle\">{{title}}</h5>\r\n        <button type=\"button\" (click)=\"dismiss()\" class=\"close\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{errorMsg}}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn button\" (click)=\"dismiss()\" >Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/danger/danger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DangerComponent; });
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

var DangerComponent = /** @class */ (function () {
    function DangerComponent() {
    }
    DangerComponent.prototype.ngOnInit = function () {
        this.title = "Sample Title";
        this.errorMsg = "sample error message";
        this.showModal = true;
    };
    DangerComponent.prototype.dismiss = function () {
        this.showModal = false;
    };
    DangerComponent.prototype.openDangerModal = function (title, errorMsg) {
        this.title = title;
        this.errorMsg = errorMsg;
        this.showModal = true;
    };
    DangerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-danger',
            template: __webpack_require__("./src/app/danger/danger.component.html"),
            styles: [__webpack_require__("./src/app/danger/danger.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DangerComponent);
    return DangerComponent;
}());



/***/ }),

/***/ "./src/app/error-404/error-404.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error-404/error-404.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n Requested URL is not available!\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/error-404/error-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
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

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-404',
            template: __webpack_require__("./src/app/error-404/error-404.component.html"),
            styles: [__webpack_require__("./src/app/error-404/error-404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".copyright {\r\n\r\n    text-align: center !important;\r\n    width: 100%;\r\n    color: aliceblue;\r\n\r\n}\r\n.navbar {\r\n    /* background-color: #17a2b8; */\r\n    background-color: mediumseagreen;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar fixed-bottom\"> \r\n    <div class=\"copyright\">\r\n      <label> &copy; ZDesk Community </label> \r\n    </div>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    /* background-color: #17a2b8; */\r\n    background-color: mediumseagreen;\r\n}\r\n\r\n.nav-link{\r\n    color: aliceblue !important;    \r\n}\r\n\r\n.active{\r\n    color : crimson !important;\r\n    font-style: italic !important;\r\n    font-weight: bold !important;\r\n    font-size: 1.2rem !important;\r\n}\r\n\r\n.welcome{\r\n    color: aliceblue !important; \r\n    text-align: left;\r\n    /*font-size: 1rem !important;\r\n    font-weight: bold;*/\r\n    font-style: italic;\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light fixed-top\">\r\n        <div class=\"container\">\r\n            <span>\r\n                <a routerLink=\"home\"><img (click)=\"collapseMenu()\" class=\"logo\" aria-label=\"ZDesk-Client\" src=\"../../assets/img/logo.png\"/></a>\r\n                <span class=\"welcome\" >ZDESK<sub>make a difference</sub></span>\r\n            </span>            \r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#menu\" aria-controls=\"menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\" id=\"toggle\"></span>\r\n            </button>\r\n    \r\n            <div class=\"collapse navbar-collapse justify-content-end\" id=\"menu\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" id=\"home\" (click)=\"collapseMenu();makeLinkActive($event);\" routerLink=\"home\">Home</a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a class=\"nav-link\" id=\"signin\" (click)=\"collapseMenu();makeLinkActive($event);\" routerLink=\"signin\">Sign in<span class=\"sr-only\">(current)</span></a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" id=\"signup\" (click)=\"collapseMenu();makeLinkActive($event);\" routerLink=\"signup\">Sign up</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"profile\" (click)=\"collapseMenu();makeLinkActive($event);\" routerLink=\"profile\">Profile</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"tracker\" (click)=\"collapseMenu();makeLinkActive($event);\" routerLink=\"tracker\">Tracker</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" id=\"complaint\" (click)=\"collapseMenu();makeLinkActive($event);\" routerLink=\"complaint\">Complaint</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" id=\"contactus\" (click)=\"collapseMenu();makeLinkActive($event);\" routerLink=\"contactus\">Contact Us</a>\r\n                    </li>\r\n                </ul>\r\n    \r\n                <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n                    <div class=\"input-group input-group-sm\">\r\n                        <input type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\" placeholder=\"Search...\">                        \r\n                    </div>\r\n                    <br/>\r\n                    <div>\r\n                        <a class=\"btn btn-primary\" href=\"\">\r\n                        <i class=\"fa fa-shopping-cart\"></i> Search\r\n                        </a>\r\n                    </div>\r\n                    \r\n                </form> -->\r\n            </div>\r\n        </div>\r\n    </nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var url = window.location.pathname.split('/')[1];
        console.log(url);
        switch (url) {
            case "":
            case "home": {
                var navItem = document.getElementById("home");
                navItem.classList.add("active");
                break;
            }
            case "signin": {
                var navItem = document.getElementById("signin");
                navItem.classList.add("active");
                break;
            }
            case "password": {
                break;
            }
            case "signup": {
                var navItem = document.getElementById("signup");
                navItem.classList.add("active");
                break;
            }
            case "complaint": {
                var navItem = document.getElementById("complaint");
                navItem.classList.add("active");
                break;
            }
            case "contactus": {
                var navItem = document.getElementById("contactus");
                navItem.classList.add("active");
                break;
            }
            case "profile": {
                var navItem = document.getElementById("profile");
                navItem.classList.add("active");
                break;
            }
            case "tracker": {
                var navItem = document.getElementById("tracker");
                navItem.classList.add("active");
                break;
            }
            default: {
                this.router.navigate(["error"]);
            }
        }
    };
    HeaderComponent.prototype.collapseMenu = function () {
        var menuIcon = document.getElementsByClassName("show");
        if (menuIcon.length > 0) {
            document.getElementById("toggle").click();
        }
    };
    HeaderComponent.prototype.makeLinkActive = function ($event) {
        var activeLink = document.getElementsByClassName("active");
        if (activeLink.length > 0) {
            activeLink[0].classList.remove("active");
        }
        $event.target.classList.add("active");
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".hader\r\n{\r\n\tposition: relative;\r\n\twidth: 100%;\r\n}\r\n\r\n/* Shutter Out Horizontal */\r\n\r\n.navbar-default .navbar-nav > li > a{\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  position: relative;\r\n  background: transparent;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n    border-bottom: 2px solid #000 ;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n  color: #000;\r\n  -webkit-transition: ease 0.5s;\r\n  transition: ease 0.5s;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:active {\r\n  color: #000;\r\n    -webkit-transition: ease 0.5s;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a:hover:before, .navbar-default .navbar-nav > li > a:focus:before, .navbar-default .navbar-nav > li > a:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n    -webkit-transition: ease 0.5s;\r\n    transition: ease 0.5s;\r\n}\r\n\r\n.video-part\r\n{\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 500px;\r\n}\r\n\r\n.video-part video\r\n{\r\n\tmargin-top: -15%;\r\n\twidth: 100%;\r\n\r\n\r\n}\r\n\r\n.video-part-content\r\n{\r\n\tposition: absolute;\r\n\ttop: 0%;\r\n\tleft: 0%;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding-top: 8%;\r\n\tbackground:mediumaquamarine ;\r\n}\r\n\r\n.video-part-content .carousel-caption\r\n{\r\n\tposition: relative !important;\r\n\tleft: 0%;\r\n\tright: 0%;\r\n}\r\n\r\n.video-part-content .carousel-indicators\r\n{\r\n\ttop: 316px;\r\n}\r\n\r\n.hader .nav.navbar-nav.pull-right\r\n{\r\n\tmargin-top: 2%;\r\n}\r\n\r\n.video-part-content .carousel-caption h1\r\n{\r\nfont-size: 50px;\r\n}\r\n\r\n.video-part-content .carousel-caption p\r\n{\r\nfont-size: 20px;\r\n}\r\n\r\n.affix\r\n{\r\n\twidth: 100%;\r\n\t-webkit-transition: ease 0.5s;\r\n\ttransition: ease 0.5s;\r\n\tbackground: #fff !important;\r\n  border-bottom: 2px solid #5775bd !important;\r\n}\r\n\r\n.navbar-default.affix .navbar-nav > li > a {\r\n  color: #333;\r\n}\r\n\r\n.btn-info\r\n{\r\n\tbackground: #5674bc;\r\n\tborder: 1px solid #5674bc;\r\n\tborder-radius: 0px;\r\n\t\t-webkit-transition: ease 0.5s;\r\n\t\ttransition: ease 0.5s;\r\n}\r\n\r\n.btn-info\r\n{\r\n\tcolor: #5674bc;\r\n\t-webkit-transition: ease 0.5s;\r\n\ttransition: ease 0.5s;\r\n}\r\n\r\n.full-width\r\n{\r\n\twidth: 100%;\r\n\tfloat: left;\r\n}\r\n\r\n.video-part-content .btn-info:hover {\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n  -webkit-transition: ease 0.5s;\r\n  transition: ease 0.5s;\r\n  background: transparent;\r\n}\r\n\r\n.navbar-default {\r\n    background-color: transparent;\r\n    border:none;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: #fff;\r\n}\r\n\r\n.navbar-nav > li > a {\r\n    padding-bottom: 6px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.btn-info {\r\n    background: #5674bc none repeat scroll 0 0;\r\n    border: 1px solid #5674bc;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    -webkit-transition: all 0.5s ease 0s;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n}\r\n\r\n@-webkit-keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUp {\r\n  -webkit-animation-name: fadeInUp;\r\n  animation-name: fadeInUp;\r\n  -webkit-animation-delay:1s;\r\n          animation-delay:1s;\r\n  -webkit-animation-duration:2s;\r\n          animation-duration:2s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">    \r\n    <div class=\"col-md-8\">\r\n      <app-issuelist></app-issuelist>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/issuelist/issuelist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/issuelist/issuelist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"heading\">COMPLAINTS</h2>\r\n  <a class=\"link\" routerLink=\"/tracker\" >\r\n    <div class=\"alert alert-warning\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-primary\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-warning\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-primary\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-warning\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-primary\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-warning\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-primary\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-warning\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-primary\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-warning\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-primary\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/tracker\">\r\n    <div class=\"alert alert-warning\">\r\n      THIS IS SAMPLE COMPLAINT..\r\n    </div>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/issuelist/issuelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuelistComponent; });
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

var IssuelistComponent = /** @class */ (function () {
    function IssuelistComponent() {
    }
    IssuelistComponent.prototype.ngOnInit = function () {
    };
    IssuelistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issuelist',
            template: __webpack_require__("./src/app/issuelist/issuelist.component.html"),
            styles: [__webpack_require__("./src/app/issuelist/issuelist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IssuelistComponent);
    return IssuelistComponent;
}());



/***/ }),

/***/ "./src/app/password/password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\r\n    <form class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"/register\" autocomplete=\"off\">\r\n      <div class=\"row\"> \r\n        <div class=\"col-md-4\">\r\n          <h2>Forgot Password?</h2>\r\n          <sub>You can change password here</sub>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div _ngcontent-c3=\"\" class=\"col-md-4\">\r\n              <div _ngcontent-c3=\"\" class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\r\n                  <label class=\"\" for=\"email\">E-Mail Address:</label>\r\n                  <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" required autofocus>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div _ngcontent-c3=\"\" class=\"col-md-4\">\r\n              <div _ngcontent-c3=\"\" class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\r\n                  OR\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n          <div _ngcontent-c3=\"\" class=\"col-md-4\">\r\n              <div _ngcontent-c3=\"\" class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\r\n                  <label class=\"\" for=\"email\">Phone Number:</label>\r\n                  <input type=\"text\" name=\"mobile\" class=\"form-control\" id=\"mobile\" placeholder=\"9876543210\" required autofocus>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n              <div _ngcontent-c3=\"\" class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\r\n                  <button type=\"submit\" class=\"btn button\">\r\n                      <i class=\"fa fa-sign-in\"></i> Reset</button>                  \r\n              </div>\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
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

var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password',
            template: __webpack_require__("./src/app/password/password.component.html"),
            styles: [__webpack_require__("./src/app/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".profile {\r\n    margin: 20px 0;\r\n  }\r\n  \r\n  /* Profile sidebar */\r\n  \r\n  .profile-sidebar {\r\n    padding: 20px 0 10px 0;\r\n    background: #fff;\r\n  }\r\n  \r\n  .profile-userpic{\r\n    text-align: center;\r\n  }\r\n  \r\n  .profile-userpic img {\r\n    float: none;\r\n    margin: 0 auto;\r\n    width: 50%;\r\n    height: 50%;\r\n    border-radius: 50% !important;\r\n  }\r\n  \r\n  .profile-usertitle {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .profile-usertitle-name {\r\n    color: #5a7391;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-bottom: 7px;\r\n  }\r\n  \r\n  .profile-usertitle-job {\r\n    text-transform: uppercase;\r\n    color: #5b9bd1;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .profile-userbuttons {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .profile-userbuttons .btn {\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    padding: 6px 15px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .profile-userbuttons .btn:last-child {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .profile-usermenu {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .profile-usermenu ul li {\r\n    border-bottom: 1px solid #f0f4f7;\r\n  }\r\n  \r\n  .profile-usermenu ul li:last-child {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu ul li a {\r\n    color: #93a3b5;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .profile-usermenu ul li a i {\r\n    margin-right: 8px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .profile-usermenu ul li a:hover {\r\n    background-color: #fafcfd;\r\n    color: #5b9bd1;\r\n  }\r\n  \r\n  .profile-usermenu ul li.active {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu ul li.active a {\r\n    color: #5b9bd1;\r\n    background-color: #f6f9fb;\r\n    border-left: 2px solid #5b9bd1;\r\n    margin-left: -2px;\r\n  }\r\n  \r\n  /* Profile Content */\r\n  \r\n  .profile-content {\r\n    padding: 20px;\r\n    background: #fff;\r\n    min-height: 460px;\r\n  }"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row profile\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"profile-sidebar\">\r\n\t\t\t\t<!-- SIDEBAR USERPIC -->\r\n\t\t\t\t<div class=\"profile-userpic\">\r\n\t\t\t\t\t<img src=\"../../assets/img/logo.png\" class=\"img-responsive\" alt=\"ZDESK\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR USERPIC -->\r\n\t\t\t\t<!-- SIDEBAR USER TITLE -->\r\n\t\t\t\t<div class=\"profile-usertitle\">\r\n\t\t\t\t\t<div class=\"profile-usertitle-name\">\r\n\t\t\t\t\t\tJohn Doe\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"profile-usertitle-job\">\r\n\t\t\t\t\t\tVoluntier\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR USER TITLE -->\r\n\t\t\t\t<!-- SIDEBAR BUTTONS -->\r\n\t\t\t\t<div class=\"profile-userbuttons\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\">Follow</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-sm\">Message</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR BUTTONS -->\r\n\t\t\t\t<!-- SIDEBAR MENU -->\r\n\t\t\t\t<div class=\"profile-usermenu\">\r\n\t\t\t\t\t<ul class=\"nav\">\r\n\t\t\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-home\"></i>\r\n\t\t\t\t\t\t\tOverview </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-user\"></i>\r\n\t\t\t\t\t\t\tAccount Settings </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\" target=\"_blank\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-ok\"></i>\r\n\t\t\t\t\t\t\tTasks </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-flag\"></i>\r\n\t\t\t\t\t\t\tHelp </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END MENU -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-9\">\r\n            <div class=\"profile-content\">\r\n\t\t\t        USER INFORMATION FRAME...\r\n            </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/progress/progress.component.css":
/***/ (function(module, exports) {

module.exports = ".animationload {\r\n    background-color: black;\r\n    height: 100%;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 10000;\r\n    opacity: .6;\r\n}\r\n.osahanloading {\r\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading;\r\n            animation: 1.5s linear 0s normal none infinite running osahanloading;\r\n    background: cadetblue none repeat scroll 0 0;\r\n    border-radius: 50px;\r\n    height: 50px;\r\n    left: 50%;\r\n    margin-left: -25px;\r\n    margin-top: -25px;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 50px;\r\n}\r\n.osahanloading::after {\r\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading_after;\r\n            animation: 1.5s linear 0s normal none infinite running osahanloading_after;\r\n    border-color: cadetblue transparent;\r\n    border-radius: 80px;\r\n    border-style: solid;\r\n    border-width: 10px;\r\n    content: \"\";\r\n    height: 80px;\r\n    left: -15px;\r\n    position: absolute;\r\n    top: -15px;\r\n    width: 80px;\r\n}\r\n@-webkit-keyframes osahanloading {\r\n0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n}\r\n50% {\r\n    background: cadetblue none repeat scroll 0 0;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n}\r\n@keyframes osahanloading {\r\n0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n}\r\n50% {\r\n    background: cadetblue none repeat scroll 0 0;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n}\r\n"

/***/ }),

/***/ "./src/app/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"getProgressStatus()\" class=\"container\">\r\n    <div class=\"row\">\r\n          <div class=\"animationload\">\r\n              <div (click)=\"closeProgress()\" class=\"osahanloading\"></div>\r\n          </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
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

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.showProgress = false;
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent.prototype.closeProgress = function () {
        this.showProgress = false;
    };
    ProgressComponent.prototype.getProgressStatus = function () {
        return this.showProgress;
    };
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-progress',
            template: __webpack_require__("./src/app/progress/progress.component.html"),
            styles: [__webpack_require__("./src/app/progress/progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ".group{\r\n    padding-bottom: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Please Login</h2>\r\n            <sub>You can login with email or phone number</sub>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"well well-sm\">\r\n                <form #signinFrom=\"ngForm\" (ngSubmit)=\"attemptSignin(signinFrom)\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">\r\n                                    Email Address</label>\r\n                                <input type=\"email\" ngModel class=\"form-control\" name=\"emailAddress\" id=\"email\" placeholder=\"Enter email\" />\r\n                            </div>\r\n                            <div class=\"group\">\r\n                                OR\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"phone\">\r\n                                    Phone</label>\r\n                                <input type=\"text\" ngModel class=\"form-control\" id=\"phone\" name=\"mobileNo\" placeholder=\"9876543210\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">\r\n                                    password</label>\r\n                                <input type=\"password\" ngModel class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"password\" />\r\n                            </div>\r\n                        </div>                        \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <button type=\"submit\" class=\"btn button\" id=\"btnSignin\">\r\n                                sign-in</button>\r\n                        </div>\r\n                         <div class=\"col-md-6\">\r\n                            <a class=\"link\" (click)=\"clearStyleOfSignIn()\"routerLink=\"/password\" id=\"forgotpassword\">\r\n                                forgot password?</a>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-danger></app-danger>\r\n<app-warning></app-warning>\r\n<app-success></app-success>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
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

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.attemptSignin = function (signinFrom) {
        console.log(signinFrom.value);
    };
    SigninComponent.prototype.clearStyleOfSignIn = function () {
        var navItem = document.getElementById("signin");
        navItem.classList.remove("active");
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "@media(min-width: 768px) {\r\n    .field-label-responsive {\r\n      padding-top: .5rem;\r\n      text-align: right;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Register</h2>\r\n            <sub>Please fill the details and click register</sub>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <form #signupForm=\"ngForm\" (ngSubmit)=\"registerUser(signupForm)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"\" for=\"email\">Name:</label>\r\n                        <input type=\"text\" ngModel name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"John Doe\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div _ngcontent-c3=\"\" class=\"col-md-6\">\r\n                        <label class=\"\" for=\"email\">E-Mail Address:</label>\r\n                        <input type=\"text\" ngModel name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div _ngcontent-c3=\"\" class=\"col-md-6\">\r\n                        <label class=\"\" for=\"email\">Phone Number:</label>\r\n                        <input type=\"text\" ngModel name=\"mobile\" class=\"form-control\" id=\"mobile\" placeholder=\"9676543210\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div _ngcontent-c3=\"\" class=\"col-md-6\">\r\n                        <label class=\"\" for=\"password\">Password:</label>\r\n                        <input type=\"password\" ngModel name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div _ngcontent-c3=\"\" class=\"col-md-6\">\r\n                        <label class=\"\" for=\"password\">Confirm Password:</label>\r\n                        <input type=\"password\" ngModel name=\"confirm_password\" class=\"form-control\" id=\"confirm_password\" placeholder=\"confirm password\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div _ngcontent-c3=\"\" class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"\" for=\"password\">Choose User Type</label>\r\n                            <select ngModel name=\"userType\" class=\"form-control\" id=\"userType\">\r\n                                <option value=\"\" selected=\"\">Choose One:</option>\r\n                                <option value=\"organisation\">Organisation</option>\r\n                                <option value=\"voluntier\">Voluntier</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <button type=\"submit\" class=\"btn button\">\r\n                            <i class=\"fa fa-sign-in\"></i>Register</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registerUser = function (signupForm) {
        console.log(signupForm);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/***/ (function(module, exports) {

module.exports = "#successModal{\r\n    display: block;\r\n}\r\n#successModal > div > div{\r\n    background: green !important;\r\n    color: aliceblue !important;\r\n}"

/***/ }),

/***/ "./src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showModal\" class=\"modal fade show\" id=\"successModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"successModalCenterTitle\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"successModalTitle\">{{title}}</h5>\r\n        <button type=\"button\" (click)=\"dismiss()\" class=\"close\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{successMsg}}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn button\" (click)=\"dismiss()\" >Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
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

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
        this.title = "Sample Title";
        this.successMsg = "sample error message";
        this.showModal = true;
    };
    SuccessComponent.prototype.dismiss = function () {
        this.showModal = false;
    };
    SuccessComponent.prototype.openDangerModal = function (title, errorMsg) {
        this.title = title;
        this.successMsg = errorMsg;
        this.showModal = true;
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("./src/app/success/success.component.html"),
            styles: [__webpack_require__("./src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/warning/warning.component.css":
/***/ (function(module, exports) {

module.exports = "#warningModal{\r\n    display: block;\r\n}\r\n#warningModal > div > div{\r\n    background: darkcyan !important;\r\n    color: aliceblue !important;\r\n}"

/***/ }),

/***/ "./src/app/warning/warning.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showModal\" class=\"modal fade show\" id=\"warningModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"warningModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{title}}</h5>\r\n        <button type=\"button\" (click)=\"dismiss()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{warningMsg}}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"dismiss()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn button\">Continue</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/warning/warning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningComponent; });
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

var WarningComponent = /** @class */ (function () {
    function WarningComponent() {
    }
    WarningComponent.prototype.ngOnInit = function () {
        this.title = "Sample Title";
        this.warningMsg = "sample warning message";
        this.showModal = true;
    };
    WarningComponent.prototype.dismiss = function () {
        this.showModal = false;
    };
    WarningComponent.prototype.openDangerModal = function (title, warningMsg) {
        this.title = title;
        this.warningMsg = warningMsg;
        this.showModal = true;
    };
    WarningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-warning',
            template: __webpack_require__("./src/app/warning/warning.component.html"),
            styles: [__webpack_require__("./src/app/warning/warning.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WarningComponent);
    return WarningComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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