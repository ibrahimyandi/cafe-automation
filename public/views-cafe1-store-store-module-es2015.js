(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cafe1-store-store-module"],{

/***/ "1hNJ":
/*!*******************************************!*\
  !*** ./src/app/views/cafe1/store/pipe.ts ***!
  \*******************************************/
/*! exports provided: searchPipe2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPipe2", function() { return searchPipe2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let searchPipe2 = class searchPipe2 {
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
};
searchPipe2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], searchPipe2);



/***/ }),

/***/ "5EKq":
/*!******************************************************!*\
  !*** ./src/app/views/cafe1/store/store.component.ts ***!
  \******************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_store_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./store.component.html */ "Qpux");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "VRCc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let StoreComponent = class StoreComponent {
    constructor(db, auth, router) {
        this.db = db;
        this.router = router;
        this.stocks = 0;
        this.total = 0;
        this.modalStock = null;
        this.stock = null;
        this.materialCount = 0;
        this.stockDetail = [];
        this.product = [];
        this.oldCost = 0;
        this.prodCount = 1;
        this.materialsList = [];
        this.modalDetail = [];
        auth.onAuthStateChanged((user) => {
            if (user) {
                if ((user.email == "cafe1@sks.com" || user.email == "admin@sks.com") == false) {
                    router.navigate(["/stock"]);
                }
            }
        });
        db.list('/groups').valueChanges().subscribe(i => {
            this.groups = i;
        });
        db.list('/products').snapshotChanges().forEach(i => {
            this.products = i;
        });
    }
    ngOnInit() { }
    modalOpen(key) {
        this.products.forEach(element => {
            if (key == element.key) {
                this.product = element;
                this.group = element.payload.val().group;
                this.name = element.payload.val().name;
                this.photo = element.payload.val().photo;
                this.kdv = element.payload.val().kdv;
                this.kdvPrice = element.payload.val().kdvPrice;
                this.stockDetail = element.payload.val().stockDetail;
                this.cost = element.payload.val().cost;
                this.oldCost = element.payload.val().cost;
                this.stocks = element.payload.val().stock;
                this.stock = element.payload.val().cafe1Stock;
                this.cafe1Stocks = element.payload.val().cafe1Stock;
                this.prodCount = element.payload.val().prodCount;
                this.materialsList = element.payload.val().material;
                this.materialCount = element.payload.val().materialCount;
            }
        });
        this.keys = key;
    }
    addStock(stock) {
        const date = new Date();
        this.dateString = date.toLocaleString('tr-TR');
        this.db.database.ref('/products/' + this.keys).update({ stock: this.stocks - stock });
        if (this.stockDetail.length > 0) {
            var average = 0;
            var amount = 0;
            this.stockDetail.forEach(element => {
                average += element.cost * element.stock;
                amount += element.stock;
            });
            average = average / amount;
            this.db.database.ref("/products/" + this.keys).update({ cost: average });
        }
        else if (this.stockDetail.length == 1) {
            this.db.database.ref("/products/" + this.keys).update({ cost: this.stockDetail[0].cost });
        }
        this.db.database.ref('/products/' + this.keys + '/stockDetail').set(this.stockDetail);
        this.db.database.ref('/products/' + this.keys).update({ cafe1Stock: this.cafe1Stocks + stock });
        this.db.list("/statistics/stock").push({ process: "Kafe 1 aktarma", name: this.name, group: this.group, date: this.dateString, stock: stock, cost: 0 });
        this.products.forEach(element => {
            if (element.payload.val().materialCount > 0) {
                element.payload.val().material.forEach(x => {
                    if (this.keys == x.id) {
                        this.db.database.ref("/products/" + element.key).update({ cost: element.payload.val().cost - this.oldCost + average });
                        return;
                    }
                });
            }
        });
        this.largeModal.hide();
        this.total = 0;
        this.stock = null;
        this.stocks = 0;
        this.cafe1Stocks = 0;
    }
    returnStock(stock) {
        const date = new Date();
        this.dateString = date.toLocaleString('tr-TR');
        this.products.forEach(element => {
            if (this.keys == element.key) {
                this.stocks = element.payload.val().stock;
                this.name = element.payload.val().name;
                this.group = element.payload.val().group;
                this.cafe1Stocks = element.payload.val().cafe1Stock;
                this.stock = element.payload.val().stock;
                this.prodCount = element.payload.val().prodCount;
                this.materialsList = element.payload.val().material;
                this.materialCount = element.payload.val().materialCount;
            }
        });
        //this.db.database.ref('/products/'+this.keys).update({stock:this.stock});
        this.db.database.ref('/products/' + this.keys).update({ cafe1Stock: this.cafe1Stocks - stock });
        this.cafe1Stocks = 0;
        this.stock = 0;
        this.largeModal2.hide();
        this.db.list("/statistics/stock").push({ process: "Kafe 1 iade", name: this.name, group: this.group, date: this.dateString, stock: stock, cost: 0 });
        this.stock = null;
    }
};
StoreComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
StoreComponent.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['largeModal',] }],
    largeModal2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['largeModal2',] }]
};
StoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-store',
        template: _raw_loader_store_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], StoreComponent);



/***/ }),

/***/ "No1r":
/*!***********************************************************!*\
  !*** ./src/app/views/cafe1/store/store-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: storeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRoutingModule", function() { return storeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.component */ "5EKq");




const routes = [
    {
        path: '',
        component: _store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"],
        data: {
            title: 'store'
        }
    }
];
let storeRoutingModule = class storeRoutingModule {
};
storeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], storeRoutingModule);



/***/ }),

/***/ "Pi7a":
/*!***************************************************!*\
  !*** ./src/app/views/cafe1/store/store.module.ts ***!
  \***************************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.component */ "5EKq");
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store-routing.module */ "No1r");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe */ "1hNJ");











let StoreModule = class StoreModule {
};
StoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _store_routing_module__WEBPACK_IMPORTED_MODULE_8__["storeRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
        ],
        declarations: [
            _store_component__WEBPACK_IMPORTED_MODULE_7__["StoreComponent"],
            _pipe__WEBPACK_IMPORTED_MODULE_10__["searchPipe2"],
        ]
    })
], StoreModule);



/***/ }),

/***/ "Qpux":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cafe1/store/store.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <i class=\"fa fa-align-justify\"></i> STOK LİSTESİ\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-prepend\">\r\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\r\n                  </span>\r\n                  <input type=\"text\" id=\"input1-group2\" name=\"search\" class=\"form-control\" placeholder=\"Ürün\" [(ngModel)]=\"search\">\r\n                </div>\r\n                  </div>\r\n              <div class=\"col-12 mt-4\">\r\n                <table class=\"table table-bordered table-striped table-sm\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Ürün adı</th>\r\n                      <th>Grup</th>\r\n                      <th>Maliyet (KDV)</th>\r\n                      <th>Depo adet</th>\r\n                      <th>Kafe adet</th>\r\n                      <th>Ekleme ve silme işlemleri</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of products | filter:search\">\r\n                      <td>{{ item.payload.val().name }}</td>\r\n                      <td>{{ item.payload.val().group }}</td>\r\n                      <td>{{ item.payload.val().cost | number : '.2-2' }} ₺</td>\r\n                      <td>{{ item.payload.val().stock | number : '.2-2' }}</td>\r\n                      <td>{{ item.payload.val().cafe1Stock | number : '.2-2' }}</td>\r\n                      <td>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-6\">\r\n                            <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\">Stok ekle</button>\r\n                          </div>\r\n                          <div class=\"col-6\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal2.show()\">Stok sil</button>\r\n                          </div>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Stok ekleme işlemi</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\r\n                  <div class=\"col-md-9\">\r\n                    <input disabled [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\r\n                    <span class=\"help-block\"></span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\r\n                  <div class=\"controls col-md-9\">\r\n                    <div class=\"input-prepend input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"> ₺</span>\r\n                      </div>\r\n                      <input disabled [(ngModel)]=\"cost\" name=\"cost\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.cost}}\">\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">.00</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\r\n                  <div class=\"col-md-9\">\r\n                    <select disabled id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\r\n                      <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input disabled [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Malzeme adı</th>\r\n                      <th>Kullanılan miktar</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let material of materialsList, let i = index\">\r\n                      <td>{{ material.name }}</td>\r\n                      <td>{{ material.amount }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Eklenecek stok sayısı</label>\r\n                  <div class=\"controls col-md-9\">\r\n                    <div class=\"input-prepend input-group\">\r\n                      <input [(ngModel)]=\"modalStock\" name=\"modalStock\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"Şuanki stok: {{this.cafe1Stocks}}\">\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">adet</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\" *ngIf=\"result == 0\">\r\n                  <div class=\"alert alert-warning col-12\" role=\"alert\">\r\n                    Kullanılan malzeme stoğu bu ürünü üretmek için yeterli değildir.\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Vazgeç</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addStock(modalStock)\" [disabled]=\"(stocks < modalStock || modalStock <= 0)? true:false\">Değişiklikleri kaydet</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n  <div bsModal #largeModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Stok silme işlemi</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"largeModal2.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\r\n                  <div class=\"col-md-9\">\r\n                    <input disabled [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\r\n                    <span class=\"help-block\"></span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\r\n                  <div class=\"col-md-9\">\r\n                    <select disabled id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\r\n                      <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input disabled [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\r\n                  </div>\r\n                </div>\r\n                <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Malzeme adı</th>\r\n                      <th>Kullanılan miktar</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let material of materialsList, let i = index\">\r\n                      <td>{{ material.name }}</td>\r\n                      <td>{{ material.amount }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">İade edilecek stok sayısı</label>\r\n                  <div class=\"controls col-md-9\">\r\n                    <div class=\"input-prepend input-group\">\r\n                      <input [(ngModel)]=\"stock\" name=\"stock\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"Şuanki stok: {{this.cafe1Stocks}}\">\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">adet</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal2.hide()\">Vazgeç</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"returnStock(stock)\" [disabled]=\"(stock > this.cafe1Stocks || stock <= 0)? true:false\">Değişiklikleri kaydet</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->");

/***/ })

}]);
//# sourceMappingURL=views-cafe1-store-store-module-es2015.js.map