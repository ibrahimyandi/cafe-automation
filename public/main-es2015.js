(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ibrahim\Documents\GitHub\cafe-automation\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8gg5":
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./404.component.html */ "nAJl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let P404Component = class P404Component {
    constructor() { }
};
P404Component.ctorParameters = () => [];
P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P404Component);



/***/ }),

/***/ "Ajxp":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/Login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form>\n                  <h1>Giriş</h1>\n                  <p class=\"text-muted\" style=\"margin-bottom: 3rem;\">{{this.errorMessage}}</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Kullanıcı adı\" autocomplete=\"username\" required>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input name=\"password\" [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Şifre\" autocomplete=\"current-password\" required>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" class=\"btn btn-primary px-4\" (click)=\"login(username,password)\">Giriş</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn btn-link px-0\"></button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <img src=\"https://eski.ahievran.edu.tr/images/haberler/basin/logomuz/ahievran_logo_210518.png\" width=\"100%\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
};


/***/ }),

/***/ "DodC":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "JPqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "DodC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "JPqG":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./default-layout.component.html */ "lm8q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_nav */ "c2Qq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth.services */ "t1PH");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "VRCc");







let DefaultLayoutComponent = class DefaultLayoutComponent {
    constructor(router, authService, auth) {
        this.router = router;
        this.authService = authService;
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        this.user = null;
        this.i = 0;
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user.email;
                _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"].forEach(x => {
                    if (this.user == "sales@sks.com" || this.user == "stock@sks.com") {
                        if (x.url == "/dashboard") {
                            _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"].splice(this.i, 1);
                            if (this.user == "sales@sks.com") {
                                router.navigate(["sell"]);
                            }
                        }
                        if (this.user == "stock@sks.com") {
                            router.navigate(["stock"]);
                            if (x.url == "/sell") {
                                _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"].splice(this.i, 4);
                            }
                        }
                    }
                    this.i++;
                });
            }
        });
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
};
DefaultLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }
];
DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])
], DefaultLayoutComponent);



/***/ }),

/***/ "Lrxh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_Login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./Login.component.html */ "Ajxp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "VRCc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth.services */ "t1PH");






let LoginComponent = class LoginComponent {
    constructor(auth, router, authService) {
        this.auth = auth;
        this.router = router;
        this.authService = authService;
        this.errorMessage = "Lütfen giriş yapınız.";
    }
    login(email, password) {
        this.authService.signIn(email, password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_Login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SqW2":
/*!***************************************************!*\
  !*** ./src/app/shared/services/excel.services.ts ***!
  \***************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const myworksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        const myworkbook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](myworkbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        var d = new Date, dformat = [
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate(),
        ].join('/') + '-' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + dformat + EXCEL_EXTENSION);
    }
};
ExcelService.ctorParameters = () => [];
ExcelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExcelService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "t17N");





let AppComponent = class AppComponent {
    constructor(router, iconSet) {
        this.router = router;
        this.iconSet = iconSet;
        // iconSet singleton
        iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])
], AppComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebase, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_services_excel_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/excel.services */ "SqW2");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "jmUF");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");
/* harmony import */ var _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/auth.services */ "t1PH");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ "hrfs");









const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};

// Import containers







const APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutComponent"]
];

// Import routing module

// Import 3rd party components



const firebase = {
    apiKey: "AIzaSyBv0qaU_TlNwFozWZ8DyLs4PN4yPdDd-Ug",
    authDomain: "cafe-automation.firebaseapp.com",
    databaseURL: "https://cafe-automation-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cafe-automation",
    storageBucket: "cafe-automation.appspot.com",
    messagingSenderId: "707903475595",
    appId: "1:707903475595:web:ecd35fd872f3de5507e98e",
    measurementId: "G-HV64N7GWZ3"
};
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_17__["AppAsideModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_17__["AppBreadcrumbModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_17__["AppFooterModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_17__["AppHeaderModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_17__["AppSidebarModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__["TabsModule"].forRoot(),
            ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ...APP_CONTAINERS,
            _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__["P404Component"],
            _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__["P500Component"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"],
            },
            _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetService"],
            _shared_services_excel_services__WEBPACK_IMPORTED_MODULE_8__["ExcelService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "eRTK");



// Import Containers





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
            title: 'Login'
        }
    },
    {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
            title: 'Page 500'
        }
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'stock',
                loadChildren: () => Promise.all(/*! import() | views-stock-stock-module */[__webpack_require__.e("default~views-dashboard-dashboard-module~views-sell-sell-module~views-stock-stock-module"), __webpack_require__.e("default~views-edit-theme-module~views-stock-stock-module"), __webpack_require__.e("views-stock-stock-module")]).then(__webpack_require__.bind(null, /*! ./views/stock/stock.module */ "0edY")).then(m => m.stockModule),
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'sell',
                loadChildren: () => Promise.all(/*! import() | views-sell-sell-module */[__webpack_require__.e("default~views-dashboard-dashboard-module~views-sell-sell-module~views-stock-stock-module"), __webpack_require__.e("views-sell-sell-module")]).then(__webpack_require__.bind(null, /*! ./views/sell/sell.module */ "XIiE")).then(m => m.sellModule),
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | views-dashboard-dashboard-module */[__webpack_require__.e("default~views-dashboard-dashboard-module~views-sell-sell-module~views-stock-stock-module"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "6dU7")).then(m => m.DashboardModule),
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() | views-edit-theme-module */[__webpack_require__.e("default~views-edit-theme-module~views-stock-stock-module"), __webpack_require__.e("views-edit-theme-module")]).then(__webpack_require__.bind(null, /*! ./views/edit/theme.module */ "bjkS")).then(m => m.ThemeModule),
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            }
        ]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "c2Qq":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
const navItems = [
    {
        name: 'İstatistik',
        url: '/dashboard',
        icon: 'cil-chart-line',
    },
    {
        name: 'Stok',
        url: '/stock',
        icon: 'cil-truck'
    },
    {
        name: 'Satış',
        url: '/sell',
        icon: 'cil-money'
    },
    {
        title: true,
        name: 'Ekle / Düzenle / Sil'
    },
    {
        name: 'Ürünler',
        url: '/edit/products',
        icon: 'cil-pizza'
    },
    {
        name: 'Gruplar',
        url: '/edit/groups',
        icon: 'cil-object-group'
    }
];


/***/ }),

/***/ "dxhq":
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./500.component.html */ "Lrxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let P500Component = class P500Component {
    constructor() { }
};
P500Component.ctorParameters = () => [];
P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P500Component);



/***/ }),

/***/ "eRTK":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.services */ "t1PH");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn() !== true) {
            this.router.navigate(['login']);
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "lm8q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'data:image/png;base64,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', width: 89, height: 30, alt: 'Logo'}\"\n  [navbarBrandMinimized]=\"{src: 'https://upload.wikimedia.org/wikipedia/tr/f/f6/Ahi_Evran_%C3%9Cniversitesi_logo.png', width: 30, height: 30, alt: 'CoreUI Logo'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"''\">\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item px-3\" *ngIf=\"user=='admin@sks.com'\">\n      <a class=\"nav-link\" href=\"./#/dashboard\">İstatistik</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"./#/stock\">Stok</a>\n    </li>\n    <li class=\"nav-item px-3\" *ngIf=\"user=='sales@sks.com' || user=='admin@sks.com'\">\n      <a class=\"nav-link\" href=\"./#/sell\">Satış</a>\n    </li>\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"mr-4\">{{user}}</li>\n    <li><i class=\"cil-account-logout mr-4\" (click)=\"authService.signOut()\"></i></li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <!-- breaking change 'cui-breadc  rumb' -->\n\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<app-breadcrumb></app-breadcrumb>-->\n      <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n      <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n          <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        <!--</div>-->\n      <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\" style=\"padding-top: 30px;\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n</div>\n<app-footer>\n  <span class=\"ml-auto\">Created by  <a target=\"_blank\" href=\"https://github.com/ibrahimyandi\">İbrahim Yandı</a></span>\n</app-footer>\n");

/***/ }),

/***/ "nAJl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "t1PH":
/*!**************************************************!*\
  !*** ./src/app/shared/services/auth.services.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "VRCc");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





let AuthService = class AuthService {
    constructor(afs, // Inject Firestore service
    auth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.auth = auth;
        this.router = router;
        this.ngZone = ngZone;
    }
    isLoggedIn() {
        this.auth.onAuthStateChanged((credential) => {
            if (credential) {
                this.x = true;
            }
            else {
                this.x = false;
            }
        });
        return this.x;
    }
    signIn(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['dashboard']);
            });
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    signOut() {
        this.auth.signOut();
        location.reload();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
    ])
], AuthService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(err => console.log(err));


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
//# sourceMappingURL=main-es2015.js.map