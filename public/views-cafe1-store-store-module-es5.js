(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cafe1-store-store-module"], {
    /***/
    "1hNJ":
    /*!*******************************************!*\
      !*** ./src/app/views/cafe1/store/pipe.ts ***!
      \*******************************************/

    /*! exports provided: searchPipe2 */

    /***/
    function hNJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "searchPipe2", function () {
        return searchPipe2;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var searchPipe2 = /*#__PURE__*/function () {
        function searchPipe2() {
          _classCallCheck(this, searchPipe2);
        }

        _createClass(searchPipe2, [{
          key: "transform",
          value: function transform(value, args) {
            if (!value) return null;
            if (!args) return value;
            args = args.toLowerCase();
            return value.filter(function (item) {
              return JSON.stringify(item).toLowerCase().includes(args);
            });
          }
        }]);

        return searchPipe2;
      }();

      searchPipe2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
      })], searchPipe2);
      /***/
    },

    /***/
    "5EKq":
    /*!******************************************************!*\
      !*** ./src/app/views/cafe1/store/store.component.ts ***!
      \******************************************************/

    /*! exports provided: StoreComponent */

    /***/
    function EKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
        return StoreComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_store_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./store.component.html */
      "Qpux");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "bSaC");

      var StoreComponent = /*#__PURE__*/function () {
        function StoreComponent(db) {
          var _this = this;

          _classCallCheck(this, StoreComponent);

          this.db = db;
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
          db.list('/groups').valueChanges().subscribe(function (i) {
            _this.groups = i;
          });
          db.list('/products').snapshotChanges().forEach(function (i) {
            _this.products = i;
          });
        }

        _createClass(StoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "modalOpen",
          value: function modalOpen(key) {
            var _this2 = this;

            this.products.forEach(function (element) {
              if (key == element.key) {
                _this2.product = element;
                _this2.group = element.payload.val().group;
                _this2.name = element.payload.val().name;
                _this2.photo = element.payload.val().photo;
                _this2.kdv = element.payload.val().kdv;
                _this2.kdvPrice = element.payload.val().kdvPrice;
                _this2.stockDetail = element.payload.val().stockDetail;
                _this2.cost = element.payload.val().cost;
                _this2.oldCost = element.payload.val().cost;
                _this2.stocks = element.payload.val().stock;
                _this2.stock = element.payload.val().cafe1Stock;
                _this2.cafe1Stocks = element.payload.val().cafe1Stock;
                _this2.prodCount = element.payload.val().prodCount;
                _this2.materialsList = element.payload.val().material;
                _this2.materialCount = element.payload.val().materialCount;
              }
            });
            this.keys = key;
          }
        }, {
          key: "addStock",
          value: function addStock(stock) {
            var _this3 = this;

            var date = new Date();
            this.dateString = date.toLocaleString('tr-TR');
            this.db.database.ref('/products/' + this.keys).update({
              stock: this.stocks - stock
            });

            if (this.stockDetail.length > 0) {
              var average = 0;
              var amount = 0;
              this.stockDetail.forEach(function (element) {
                average += element.cost * element.stock;
                amount += element.stock;
              });
              average = average / amount;
              this.db.database.ref("/products/" + this.keys).update({
                cost: average
              });
            } else if (this.stockDetail.length == 1) {
              this.db.database.ref("/products/" + this.keys).update({
                cost: this.stockDetail[0].cost
              });
            }

            this.db.database.ref('/products/' + this.keys + '/stockDetail').set(this.stockDetail);
            this.db.database.ref('/products/' + this.keys).update({
              cafe1Stock: this.cafe1Stocks + stock
            });
            this.db.list("/statistics/stock").push({
              process: "Kafe 1 aktarma",
              name: this.name,
              group: this.group,
              date: this.dateString,
              stock: stock,
              cost: 0
            });
            this.products.forEach(function (element) {
              if (element.payload.val().materialCount > 0) {
                element.payload.val().material.forEach(function (x) {
                  if (_this3.keys == x.id) {
                    _this3.db.database.ref("/products/" + element.key).update({
                      cost: element.payload.val().cost - _this3.oldCost + average
                    });

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
        }, {
          key: "returnStock",
          value: function returnStock(stock) {
            var _this4 = this;

            var date = new Date();
            this.dateString = date.toLocaleString('tr-TR');
            this.products.forEach(function (element) {
              if (_this4.keys == element.key) {
                _this4.stocks = element.payload.val().stock;
                _this4.name = element.payload.val().name;
                _this4.group = element.payload.val().group;
                _this4.cafe1Stocks = element.payload.val().cafe1Stock;
                _this4.stock = element.payload.val().stock;
                _this4.prodCount = element.payload.val().prodCount;
                _this4.materialsList = element.payload.val().material;
                _this4.materialCount = element.payload.val().materialCount;
              }
            }); //this.db.database.ref('/products/'+this.keys).update({stock:this.stock});

            this.db.database.ref('/products/' + this.keys).update({
              cafe1Stock: this.cafe1Stocks - stock
            });
            this.cafe1Stocks = 0;
            this.stock = 0;
            this.largeModal2.hide();
            this.db.list("/statistics/stock").push({
              process: "Kafe 1 iade",
              name: this.name,
              group: this.group,
              date: this.dateString,
              stock: stock,
              cost: 0
            });
            this.stock = null;
          }
        }]);

        return StoreComponent;
      }();

      StoreComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }];
      };

      StoreComponent.propDecorators = {
        largeModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['largeModal']
        }],
        largeModal2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['largeModal2']
        }]
      };
      StoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-store',
        template: _raw_loader_store_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])], StoreComponent);
      /***/
    },

    /***/
    "No1r":
    /*!***********************************************************!*\
      !*** ./src/app/views/cafe1/store/store-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: storeRoutingModule */

    /***/
    function No1r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "storeRoutingModule", function () {
        return storeRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./store.component */
      "5EKq");

      var routes = [{
        path: '',
        component: _store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"],
        data: {
          title: 'store'
        }
      }];

      var storeRoutingModule = function storeRoutingModule() {
        _classCallCheck(this, storeRoutingModule);
      };

      storeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], storeRoutingModule);
      /***/
    },

    /***/
    "Pi7a":
    /*!***************************************************!*\
      !*** ./src/app/views/cafe1/store/store.module.ts ***!
      \***************************************************/

    /*! exports provided: StoreModule */

    /***/
    function Pi7a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreModule", function () {
        return StoreModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "aHM3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./store.component */
      "5EKq");
      /* harmony import */


      var _store_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./store-routing.module */
      "No1r");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pipe */
      "1hNJ");

      var StoreModule = function StoreModule() {
        _classCallCheck(this, StoreModule);
      };

      StoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _store_routing_module__WEBPACK_IMPORTED_MODULE_8__["storeRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"]],
        declarations: [_store_component__WEBPACK_IMPORTED_MODULE_7__["StoreComponent"], _pipe__WEBPACK_IMPORTED_MODULE_10__["searchPipe2"]]
      })], StoreModule);
      /***/
    },

    /***/
    "Qpux":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cafe1/store/store.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qpux(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> STOK LİSTESİ\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n                  </span>\n                  <input type=\"text\" id=\"input1-group2\" name=\"search\" class=\"form-control\" placeholder=\"Ürün\" [(ngModel)]=\"search\">\n                </div>\n                  </div>\n              <div class=\"col-12 mt-4\">\n                <table class=\"table table-bordered table-striped table-sm\">\n                  <thead>\n                    <tr>\n                      <th>Ürün adı</th>\n                      <th>Grup</th>\n                      <th>Maliyet (KDV)</th>\n                      <th>Depo adet</th>\n                      <th>Kafe adet</th>\n                      <th>Ekleme ve iade işlemleri</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of products | filter:search\">\n                      <td>{{ item.payload.val().name }}</td>\n                      <td>{{ item.payload.val().group }}</td>\n                      <td>{{ item.payload.val().cost | number : '.2-2' }}₺</td>\n                      <td>{{ item.payload.val().stock | number : '.2-2' }}</td>\n                      <td>{{ item.payload.val().cafe1Stock | number : '.2-2' }}</td>\n                      <td>\n                        <div class=\"row\">\n                          <div class=\"col-6\">\n                            <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\">Stok ekle</button>\n                          </div>\n                          <div class=\"col-6\">\n                            <button type=\"button\" class=\"btn btn-primary btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal2.show()\">İade et</button>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Stok ekleme işlemi</h4>\n          <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                  <div class=\"col-md-9\">\n                    <input disabled [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\n                    <span class=\"help-block\"></span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">₺</span>\n                      </div>\n                      <input disabled [(ngModel)]=\"cost\" name=\"cost\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.cost}}\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                  <div class=\"col-md-9\">\n                    <select disabled id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\n                      <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                  <div class=\"col-md-6\">\n                    <input disabled [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\n                  </div>\n                  <div class=\"col-md-3\">\n                    <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                  </div>\n                </div>\n                <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\n                  <thead>\n                    <tr>\n                      <th>Malzeme adı</th>\n                      <th>Kullanılan miktar</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let material of materialsList, let i = index\">\n                      <td>{{ material.name }}</td>\n                      <td>{{ material.amount }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Eklenecek stok sayısı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <input [(ngModel)]=\"modalStock\" name=\"modalStock\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"Şuanki stok: {{this.cafe1Stocks}}\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">adet</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\" *ngIf=\"result == 0\">\n                  <div class=\"alert alert-warning col-12\" role=\"alert\">\n                    Kullanılan malzeme stoğu bu ürünü üretmek için yeterli değildir.\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Vazgeç</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addStock(modalStock)\" [disabled]=\"(stocks < modalStock || modalStock <= 0)? true:false\">Değişiklikleri kaydet</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #largeModal2=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Stok iade işlemi</h4>\n          <button type=\"button\" class=\"close\" (click)=\"largeModal2.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                  <div class=\"col-md-9\">\n                    <input disabled [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\n                    <span class=\"help-block\"></span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                  <div class=\"col-md-9\">\n                    <select disabled id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\n                      <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                  <div class=\"col-md-6\">\n                    <input disabled [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\n                  </div>\n                  <div class=\"col-md-3\">\n                    <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                  </div>\n                </div>\n                <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\n                  <thead>\n                    <tr>\n                      <th>Malzeme adı</th>\n                      <th>Kullanılan miktar</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let material of materialsList, let i = index\">\n                      <td>{{ material.name }}</td>\n                      <td>{{ material.amount }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">İade edilecek stok sayısı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <input [(ngModel)]=\"stock\" name=\"stock\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"Şuanki stok: {{this.cafe1Stocks}}\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">adet</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal2.hide()\">Vazgeç</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"returnStock(stock)\" [disabled]=\"(stock > this.cafe1Stocks || stock <= 0)? true:false\">Değişiklikleri kaydet</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-cafe1-store-store-module-es5.js.map