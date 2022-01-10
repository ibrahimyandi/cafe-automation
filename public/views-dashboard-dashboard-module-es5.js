(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Satılan Ürünler\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"input-group\">\n                <span class=\"input-group-prepend\">\n                  <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n                </span>\n                <input type=\"text\" id=\"input1-group2\" name=\"sellProdSearch\" class=\"form-control\" placeholder=\"Ürün\" [(ngModel)]=\"sellProdSearch\">\n              </div>\n                </div>\n            <div class=\"col-12 mt-4\">\n              <table class=\"table table-bordered table-striped table-sm\" id=\"sellProd\">\n                <thead>\n                  <tr>\n                    <th>İşlem</th>\n                    <th>Ürün adı</th>\n                    <th>Grup</th>\n                    <th>Fiyat</th>\n                    <th>Maliyet</th>\n                    <th>Adet</th>\n                    <th>Toplam satış</th>\n                    <th>Kâr</th>\n                    <th>Tarih</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of statistics | filter:sellProdSearch\">\n                    <td>{{ item.process }}</td>\n                    <td>{{ item.name }}</td>\n                    <td>{{ item.group }}</td>\n                    <td>{{ item.kdvPrice | number : '.2-2' }}₺</td>\n                    <td>{{ item.cost | number : '.2-2' }}₺</td>\n                    <td>{{ item.count }}</td>\n                    <td>{{ item.kdvPrice * item.count | number : '.2-2' }}₺</td>\n                    <td>{{ (item.kdvPrice - item.cost) * item.count | number : '.2-2' }}₺</td>\n                    <td>{{ item.date }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"row\">\n            <div class=\"col-6\">Toplam Satış: {{ totalSell | number : '.2-2' }}₺ <br> Toplam Kâr: {{ totalIncome | number : '.2-2' }}₺</div>\n            <div class=\"col-6 float-right\"><button (click)=\"clearAndExport('statistics')\" type=\"button\" class=\"btn btn-success btn-square float-right\">Temizle ve excele aktar</button></div>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-align-justify\"></i> Eklenen Stoklar\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"input-group\">\n              <span class=\"input-group-prepend\">\n                <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n              </span>\n              <input type=\"text\" id=\"input1-group2\"  [(ngModel)]=\"search\" name=\"search\" class=\"form-control\" placeholder=\"Ürün\">\n            </div>\n              </div>\n          <div class=\"col-12 mt-4\">\n            <table class=\"table table-bordered table-striped table-sm\" id=\"stockProd\">\n              <thead>\n                <tr>\n                  <th>İşlem</th>\n                  <th>Ürün adı</th>\n                  <th>Grup</th>\n                  <th>Maliyet</th>\n                  <th>Adet</th>\n                  <th>Toplam maliyet</th>\n                  <th>Tarih</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of stock | filter:search\">\n                  <td>{{ item.process }}</td>\n                  <td>{{ item.name }}</td>\n                  <td>{{ item.group }}</td>\n                  <td>{{ item.cost | number : '.2-2' }}₺</td>\n                  <td>{{ item.stock }}</td>\n                  <td>{{ item.cost * item.stock | number : '.2-2' }}₺</td>\n                  <td>{{ item.date }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"row\">\n          <div class=\"col-6\">Stok eklenen ürün maliyeti toplamı: {{ totalCost | number : '.2-2' }}₺</div>\n          <div class=\"col-6\"><button (click)=\"clearAndExport('stock')\" type=\"button\" class=\"btn btn-success btn-square float-right\">Temizle ve excele aktar</button></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"cord-body\">\n        <div class=\"alert alert-secondary\" style=\"margin-bottom: 0px;\" role=\"alert\">\n          <div>Genel durum : <span [ngStyle]=\"{'color': totalIncome - totalCost > 0? 'green' : 'red'}\">{{ totalSell - totalCost | number : '.2-2' }}₺</span></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

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

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

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
          auth.onAuthStateChanged(function (user) {
            if (user) {
              _this.user = user.email;

              if (_this.user.search("user") != -1) {
                router.navigate(["/stock"]);
              }
            }
          });
          db.list('/statistics/sold').valueChanges().subscribe(function (i) {
            _this.statistics = i.reverse();

            _this.statistics.forEach(function (element) {
              _this.totalIncome += (element.kdvPrice - element.cost) * element.count;
              _this.totalSell += element.kdvPrice * element.count;
            });
          });
          db.list('/statistics/stock').valueChanges().subscribe(function (i) {
            _this.stock = i.reverse();

            _this.stock.forEach(function (element) {
              _this.totalCost += element.cost * element.stock;
            });
          });
        }

        _createClass(DashboardComponent, [{
          key: "filter",
          value: function filter(value) {
            return value.filter(function (val) {
              return val.toLocaleLowerCase().includes(value);
            });
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