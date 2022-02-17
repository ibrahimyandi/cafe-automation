(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"], {
    /***/
    "0IbB":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/Dashboard.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IbB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Satılan Ürünler\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-prepend\">\r\n                  <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\r\n                </span>\r\n                <input type=\"text\" id=\"input1-group2\" name=\"sellProdSearch\" class=\"form-control\" placeholder=\"Ürün\" [(ngModel)]=\"sellProdSearch\" (ngModelChange)=\"resetList(1)\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\"></div>\r\n            <div class=\"col-4\">\r\n              <button class=\"btn btn-primary float-right btn-block\" type=\"submit\" (click)=\"allList(1)\">Tümünü listele</button>\r\n            </div>\r\n            <div class=\"col-12 mt-4\">\r\n              <table class=\"table table-bordered table-striped table-sm\" id=\"sellProd\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>İşlem</th>\r\n                    <th>Ürün adı</th>\r\n                    <th>Grup</th>\r\n                    <th>Fiyat</th>\r\n                    <th>Maliyet</th>\r\n                    <th>Adet</th>\r\n                    <th>Toplam satış</th>\r\n                    <th>Kâr</th>\r\n                    <th>Tarih</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of statistics | filter:sellProdSearch | slice:min1:max1\">\r\n                    <td>{{ item.process }}</td>\r\n                    <td>{{ item.name }}</td>\r\n                    <td>{{ item.group }}</td>\r\n                    <td>{{ item.kdvPrice | number : '.2-2' }} ₺</td>\r\n                    <td>{{ item.cost | number : '.2-2' }} ₺</td>\r\n                    <td>{{ item.count }}</td>\r\n                    <td>{{ item.kdvPrice * item.count | number : '.2-2' }} ₺</td>\r\n                    <td>{{ (item.kdvPrice - item.cost) * item.count | number : '.2-2' }} ₺</td>\r\n                    <td>{{ item.date }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <nav aria-label=\"...\" class=\"float-right\">\r\n                <ul class=\"pagination pagination-sm\">\r\n                  <li class=\"page-item\" *ngFor=\"let item of [].constructor(soldLength); let i = index\">\r\n                    <span (click)=\"pagination(1, i)\" class=\"page-link\" tabindex=\"-1\">{{i+1}}</span>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">Toplam Satış: {{ totalSell | number : '.2-2' }} ₺ <br> Toplam Kâr: {{ totalIncome | number : '.2-2' }} ₺</div>\r\n            <div class=\"col-4\">Listelenen Satış: {{ listSold(statistics | filter:sellProdSearch | slice:min1:max1) | number : '.2-2' }} ₺ <br> Listelenen Kâr: {{ listProfit(statistics | filter:sellProdSearch) | number : '.2-2' }} ₺</div>\r\n            <div class=\"col-4 float-right\"><button (click)=\"clearAndExport('statistics')\" type=\"button\" class=\"btn btn-success btn-square float-right\">Temizle ve excele aktar</button></div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"fa fa-align-justify\"></i> Eklenen Stoklar\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-prepend\">\r\n                <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\r\n              </span>\r\n              <input type=\"text\" id=\"input1-group2\"  [(ngModel)]=\"search\" name=\"search\" class=\"form-control\" placeholder=\"Ürün\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-4\">\r\n            <button class=\"btn btn-primary float-right btn-block\" type=\"submit\" (click)=\"allList(2)\">Tümünü listele</button>\r\n          </div>\r\n          <div class=\"col-12 mt-4\">\r\n            <table class=\"table table-bordered table-striped table-sm\" id=\"stockProd\">\r\n              <thead>\r\n                <tr>\r\n                  <th>İşlem</th>\r\n                  <th>Ürün adı</th>\r\n                  <th>Grup</th>\r\n                  <th>Maliyet</th>\r\n                  <th>Adet</th>\r\n                  <th>Toplam maliyet</th>\r\n                  <th>Tarih</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of stock | filter:search | slice:min2:max2\">\r\n                  <td>{{ item.process }}</td>\r\n                  <td>{{ item.name }}</td>\r\n                  <td>{{ item.group }}</td>\r\n                  <td>{{ item.cost | number : '.2-2' }} ₺</td>\r\n                  <td>{{ item.stock }}</td>\r\n                  <td>{{ item.cost * item.stock | number : '.2-2' }} ₺</td>\r\n                  <td>{{ item.date }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <nav aria-label=\"...\" class=\"float-right\">\r\n              <ul class=\"pagination pagination-sm\">\r\n                <li class=\"page-item\" *ngFor=\"let item of [].constructor(stockLength); let i = index\">\r\n                  <span (click)=\"pagination(2, i)\" class=\"page-link\" tabindex=\"-1\">{{i+1}}</span>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">Toplam maliyet: {{ totalCost | number : '.2-2' }} ₺</div>\r\n          <div class=\"col-4\">Listelenen maliyet: {{ listCost(stock | filter:search | slice:min2:max2) | number : '.2-2' }} ₺</div>\r\n          <div class=\"col-4\"><button (click)=\"clearAndExport('stock')\" type=\"button\" class=\"btn btn-success btn-square float-right\">Temizle ve excele aktar</button></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"cord-body\">\r\n        <div class=\"alert alert-secondary\" style=\"margin-bottom: 0px;\" role=\"alert\">\r\n          <div>Genel durum : <span [ngStyle]=\"{'color': totalIncome - totalCost > 0? 'green' : 'red'}\">{{ totalSell - totalCost | number : '.2-2' }} ₺</span></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "6dU7":
    /*!*****************************************************!*\
      !*** ./src/app/views/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function dU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard.component */
      "l70X");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "jUYC");
      /* harmony import */


      var _pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pipe */
      "ONvg");

      var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      });

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _pipe__WEBPACK_IMPORTED_MODULE_9__["searchPipe"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "ONvg":
    /*!*****************************************!*\
      !*** ./src/app/views/dashboard/pipe.ts ***!
      \*****************************************/

    /*! exports provided: searchPipe */

    /***/
    function ONvg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "searchPipe", function () {
        return searchPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var searchPipe = /*#__PURE__*/function () {
        function searchPipe() {
          _classCallCheck(this, searchPipe);
        }

        _createClass(searchPipe, [{
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

        return searchPipe;
      }();

      searchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
      })], searchPipe);
      /***/
    },

    /***/
    "jUYC":
    /*!*************************************************************!*\
      !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function jUYC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "l70X");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
          title: 'Dashboard'
        }
      }];

      var DashboardRoutingModule = /*#__PURE__*/_createClass(function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      });

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    },

    /***/
    "l70X":
    /*!********************************************************!*\
      !*** ./src/app/views/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function l70X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_Dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./Dashboard.component.html */
      "0IbB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "bSaC");
      /* harmony import */


      var _shared_services_excel_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/excel.services */
      "SqW2");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "VRCc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(db, excel, auth, router) {
          var _this = this;

          _classCallCheck(this, DashboardComponent);

          this.db = db;
          this.excel = excel;
          this.router = router;
          this.statistics = [];
          this.totalIncome = 0;
          this.totalSell = 0;
          this.totalCost = 0;
          this.stock = [];
          this.min1 = 0;
          this.max1 = 25;
          this.min2 = 0;
          this.max2 = 25;
          this.stockLength = 0;
          this.soldLength = 0;
          auth.onAuthStateChanged(function (user) {
            if (user) {
              _this.user = user.email;

              if (_this.user.search("admin") == -1) {
                router.navigate(["/stock"]);
              }
            }
          });
          db.list('/statistics/sold').valueChanges().subscribe(function (i) {
            _this.statistics = i.reverse();
            _this.soldLength = Math.ceil(_this.statistics.length / 25);

            _this.statistics.forEach(function (element) {
              _this.totalIncome += (element.kdvPrice - element.cost) * element.count;
              _this.totalSell += element.kdvPrice * element.count;
            });
          });
          db.list('/statistics/stock').valueChanges().subscribe(function (i) {
            _this.stock = i.reverse();
            _this.stockLength = Math.ceil(_this.stock.length / 25);

            _this.stock.forEach(function (element) {
              _this.totalCost += element.cost * element.stock;
            });
          });
        }

        _createClass(DashboardComponent, [{
          key: "filter",
          value: function filter(value) {
            return value.filter(function (val) {
              console.log(val);
              return val.toLocaleLowerCase().includes(value);
            });
          }
        }, {
          key: "listSold",
          value: function listSold(x) {
            var sum = 0;
            x.forEach(function (element) {
              sum += element.kdvPrice * element.count;
            });
            return sum;
          }
        }, {
          key: "listProfit",
          value: function listProfit(x) {
            var sum = 0;
            x.forEach(function (element) {
              sum += element.kdvPrice * element.count - element.cost * element.count;
            });
            return sum;
          }
        }, {
          key: "listCost",
          value: function listCost(x) {
            var sum = 0;
            x.forEach(function (element) {
              sum += element.cost * element.stock;
            });
            return sum;
          }
        }, {
          key: "pagination",
          value: function pagination(x, i) {
            if (x == 1) {
              this.min1 = i * 25;
              this.max1 = i * 25 + 25;
            } else if (x == 2) {
              this.min2 = i * 25;
              this.max2 = i * 25 + 25;
            }
          }
        }, {
          key: "allList",
          value: function allList(x) {
            if (x == 1) {
              this.min1 = 0;
              this.max1 = this.statistics.length;
            } else if (x == 2) {
              this.min2 = 0;
              this.max2 = this.stock.length;
            }
          }
        }, {
          key: "print",
          value: function print(tableName) {
            if (tableName = "statistics") {
              this.excel.exportAsExcelFile(this.statistics, "istatistik");
              console.log("istatistik yazdır");
            } else {
              this.excel.exportAsExcelFile(this.stock, "stock");
              console.log("stok yazdır");
            }
          }
        }, {
          key: "clearAndExport",
          value: function clearAndExport(dataName) {
            if (dataName == "statistics") {
              this.excel.exportAsExcelFile(this.statistics, "statistics");
              this.db.list("statistics").remove();
              this.totalIncome = 0;
            } else {
              this.excel.exportAsExcelFile(this.stock, "stock");
              this.db.list("stock").remove();
              this.totalCost = 0;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
        }, {
          type: _shared_services_excel_services__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_Dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _shared_services_excel_services__WEBPACK_IMPORTED_MODULE_4__["ExcelService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], DashboardComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-dashboard-dashboard-module-es5.js.map