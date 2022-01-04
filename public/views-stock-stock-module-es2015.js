(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-stock-stock-module"],{

/***/ "+4Nq":
/*!************************************************!*\
  !*** ./src/app/views/stock/stock.component.ts ***!
  \************************************************/
/*! exports provided: StockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockComponent", function() { return StockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_Stock_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./Stock.component.html */ "Q8RQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");





let StockComponent = class StockComponent {
    constructor(db) {
        this.db = db;
        this.stocks = 0;
        this.total = 0;
        this.stock = null;
        this.materialCount = 0;
        this.prodCount = 1;
        this.stockDetail = [];
        this.materialsList = [];
        this.modalDetail = [];
        this.oldCost = 0;
        db.list('/groups').valueChanges().subscribe(i => {
            this.groups = i;
        });
        db.list('/products').snapshotChanges().forEach(i => {
            this.products = i;
        });
    }
    ngOnInit() { }
    modalOpen(key) {
        this.result = 1;
        this.products.forEach(element => {
            if (key == element.key) {
                this.group = element.payload.val().group;
                this.name = element.payload.val().name;
                this.photo = element.payload.val().photo;
                this.cost = element.payload.val().cost;
                this.oldCost = element.payload.val().cost;
                if (element.payload.val().stockDetail != undefined)
                    this.stockDetail = element.payload.val().stockDetail;
                this.stocks = element.payload.val().stock;
                this.prodCount = element.payload.val().prodCount;
                this.materialsList = element.payload.val().material;
                this.materialCount = element.payload.val().materialCount;
            }
        });
        this.keys = key;
    }
    deleteStock(stock) {
        var array = [];
        this.products.forEach(element => {
            if (element.key == this.keys) {
                array = element.payload.val().stockDetail;
            }
        });
        var oldStock = stock;
        var newStock = stock;
        const date = new Date();
        this.dateString = date.toLocaleString('tr-TR');
        if (this.stockDetail != undefined) {
            array = this.stockDetail;
            for (let index = array.length - 1; index > 0; index--) {
                array[index].stock -= newStock;
                if (array[index].stock > 0) {
                    break;
                }
                else {
                    newStock = array[index].stock * -1;
                    array.splice(index, 1);
                }
            }
            this.db.database.ref('/products/' + this.keys).update({ stock: this.stocks - stock });
            this.db.database.ref('/products/' + this.keys + '/stockDetail').set(array);
            this.db.list("/statistics/stock").push({ process: "Depo silme", name: this.name, group: this.group, date: this.dateString, stock: oldStock, cost: 0 });
        }
        this.largeModal2.hide();
        this.stock = null;
    }
    addStock(stock) {
        const date = new Date();
        this.dateString = date.toLocaleString('tr-TR');
        this.result = 1;
        this.total = this.stocks + stock * this.prodCount;
        if (this.materialCount != 0) {
            this.materialsList.forEach(x => {
                this.products.forEach(element => {
                    if (element.key == x.id) {
                        var stocks = element.payload.val().stock;
                        if (stocks - x.amount * stock < 0)
                            this.result = 0;
                    }
                });
            });
            if (this.result == 1) {
                this.materialsList.forEach(x => {
                    this.products.forEach(element => {
                        if (element.key == x.id) {
                            var stocks = element.payload.val().stock;
                            stocks -= x.amount * stock;
                            this.db.database.ref('/products/' + x.id).update({ stock: stocks });
                        }
                    });
                });
                this.stockDetail.push({ stock: stock, cost: this.cost });
                this.db.database.ref('/products/' + this.keys + '/stockDetail').update(this.stockDetail);
                this.db.database.ref('/products/' + this.keys).update({ stock: this.total });
                var average = 0;
                if (this.stockDetail.length > 0) {
                    var amount = 0;
                    this.stockDetail.forEach(element => {
                        average += element.cost * element.stock;
                        amount += element.stock;
                    });
                    average = average / amount;
                }
                else if (this.stockDetail.length == 1) {
                    average = this.stockDetail[0].cost;
                }
                this.db.database.ref("/products/" + this.keys).update({ cost: average });
                this.largeModal.hide();
                this.total = 0;
                this.db.list("/statistics/stock").push({ process: "Depo ekleme", name: this.name, group: this.group, date: this.dateString, stock: stock, cost: this.oldCost });
                this.stock = null;
            }
        }
        else {
            this.stockDetail.push({ stock: stock, cost: this.cost });
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
            this.db.database.ref('/products/' + this.keys + '/stockDetail').update(this.stockDetail);
            this.db.database.ref('/products/' + this.keys).update({ stock: this.total });
            this.db.list("/statistics/stock").push({ process: "Depo ekleme", name: this.name, group: this.group, date: this.dateString, stock: stock, cost: this.cost });
            this.largeModal.hide();
            this.total = 0;
            this.stock = null;
        }
        this.products.forEach(element => {
            if (element.payload.val().materialCount > 0) {
                element.payload.val().material.forEach(x => {
                    if (this.keys == x.id) {
                        this.db.database.ref("/products/" + element.key).update({ cost: (element.payload.val().cost + (-this.oldCost + average) * x.amount) });
                        return;
                    }
                });
            }
        });
        this.stockDetail = [];
    }
};
StockComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
];
StockComponent.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['largeModal',] }],
    largeModal2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['largeModal2',] }]
};
StockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_Stock_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
], StockComponent);



/***/ }),

/***/ "0edY":
/*!*********************************************!*\
  !*** ./src/app/views/stock/stock.module.ts ***!
  \*********************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return StockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock.component */ "+4Nq");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-routing.module */ "uJHo");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe */ "4gP2");











let StockModule = class StockModule {
};
StockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _stock_routing_module__WEBPACK_IMPORTED_MODULE_8__["stockRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
        ],
        declarations: [
            _stock_component__WEBPACK_IMPORTED_MODULE_7__["StockComponent"],
            _pipe__WEBPACK_IMPORTED_MODULE_10__["searchPipe2"],
        ]
    })
], StockModule);



/***/ }),

/***/ "4gP2":
/*!*************************************!*\
  !*** ./src/app/views/stock/pipe.ts ***!
  \*************************************/
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

/***/ "Q8RQ":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/stock/Stock.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> STOK LİSTESİ\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"input-group\">\n                <span class=\"input-group-prepend\">\n                  <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n                </span>\n                <input type=\"text\" id=\"input1-group2\" name=\"search\" class=\"form-control\" placeholder=\"Ürün\" [(ngModel)]=\"search\">\n              </div>\n                </div>\n            <div class=\"col-12 mt-4\">\n              <table class=\"table table-bordered table-striped table-sm\">\n                <thead>\n                  <tr>\n                    <th>Ürün adı</th>\n                    <th>Grup</th>\n                    <th>Maliyet (KDV)</th>\n                    <th>Adet</th>\n                    <th>Stok ekleme</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of products | filter:search\">\n                    <td>{{ item.payload.val().name }}</td>\n                    <td>{{ item.payload.val().group }}</td>\n                    <td>{{ item.payload.val().cost | number : '.2-2'  }}₺</td>\n                    <td>{{ item.payload.val().stock | number : '.2-2'  }}</td>\n                    <td>\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\">Stok ekle</button>\n                        </div>\n                        <div class=\"col-6\">\n                          <button type=\"button\" class=\"btn btn-danger btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal2.show()\">Stok sil</button>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Stok ekleme işlemi</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                <div class=\"col-md-9\">\n                  <input disabled [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\n                  <span class=\"help-block\"></span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">₺</span>\n                    </div>\n                    <input disabled [(ngModel)]=\"cost\" name=\"cost\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.cost}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">.00</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                <div class=\"col-md-9\">\n                  <select disabled id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\n                    <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                <div class=\"col-md-6\">\n                  <input disabled [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\n                </div>\n                <div class=\"col-md-3\">\n                  <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                </div>\n              </div>\n              <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\n                <thead>\n                  <tr>\n                    <th>Malzeme adı</th>\n                    <th>Kullanılan miktar</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let material of materialsList, let i = index\">\n                    <td>{{ material.name }}</td>\n                    <td>{{ material.amount }}</td>\n                  </tr>\n                </tbody>\n              </table>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti KDV dahil giriniz</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">₺</span>\n                    </div>\n                    <input [(ngModel)]=\"cost\" name=\"cost\" id=\"appendedPrependedInput\" [disabled]=\"this.materialCount > 1\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.cost}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">.00</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Eklenecek stok sayısı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <input [(ngModel)]=\"stock\" name=\"stock\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"Şuanki stok: {{this.stocks}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">adet</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"alert alert-warning\" role=\"alert\">\n                Stok eklenirken (adet, kg, teneke, paket, koli) birim maliyeti girilmeli.\n              </div>\n              <div class=\"form-group row\" *ngIf=\"result == 0\">\n                <div class=\"alert alert-warning col-12\" role=\"alert\">\n                  Kullanılan malzeme stoğu bu ürünü üretmek için yeterli değildir.\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Vazgeç</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addStock(stock)\" [disabled]=\"stock=='' || stock==null\">Değişiklikleri kaydet</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #largeModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Stok silme işlemi</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal2.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                <div class=\"col-md-9\">\n                  <input disabled [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\n                  <span class=\"help-block\"></span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">₺</span>\n                    </div>\n                    <input disabled [(ngModel)]=\"cost\" name=\"cost\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.cost}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">.00</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                <div class=\"col-md-9\">\n                  <select disabled id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\n                    <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                <div class=\"col-md-6\">\n                  <input disabled [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\n                </div>\n                <div class=\"col-md-3\">\n                  <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                </div>\n              </div>\n              <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\n                <thead>\n                  <tr>\n                    <th>Malzeme adı</th>\n                    <th>Kullanılan miktar</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let material of materialsList, let i = index\">\n                    <td>{{ material.name }}</td>\n                    <td>{{ material.amount }}</td>\n                  </tr>\n                </tbody>\n              </table>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Silinecek stok sayısı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <input [(ngModel)]=\"stock\" name=\"stock\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"Şuanki stok: {{this.stocks}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">adet</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal2.hide()\">Vazgeç</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteStock(stock)\" [disabled]=\"stock > this.stocks\">Değişiklikleri kaydet</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "uJHo":
/*!*****************************************************!*\
  !*** ./src/app/views/stock/stock-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: stockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockRoutingModule", function() { return stockRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.component */ "+4Nq");




const routes = [
    {
        path: '',
        component: _stock_component__WEBPACK_IMPORTED_MODULE_3__["StockComponent"],
        data: {
            title: 'stock'
        }
    }
];
let stockRoutingModule = class stockRoutingModule {
};
stockRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], stockRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-stock-stock-module-es2015.js.map