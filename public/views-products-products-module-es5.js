(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-products-products-module"], {
    /***/
    "5Ia1":
    /*!***********************************************************!*\
      !*** ./src/app/views/products/products-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: stockRoutingModule */

    /***/
    function Ia1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stockRoutingModule", function () {
        return stockRoutingModule;
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


      var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./products.component */
      "ZuAo");

      var routes = [{
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        data: {
          title: 'products'
        }
      }];

      var stockRoutingModule = function stockRoutingModule() {
        _classCallCheck(this, stockRoutingModule);
      };

      stockRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], stockRoutingModule);
      /***/
    },

    /***/
    "UIL0":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/products/Products.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function UIL0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-drop\"></i> Ürün Ekle / Düzenle / Sil\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>Ürün ekle / düzenle</strong> \n            </div>\n            <div class=\"card-body\">\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                  <div class=\"col-md-9\">\n                    <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"\">\n                    <span class=\"help-block\"></span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürünün satış fiyatı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">₺</span>\n                      </div>\n                      <input [(ngModel)]=\"price\" name=\"price\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün KDV oranı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <input [(ngModel)]=\"kdv\" name=\"kdv\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.modalDetail[3]}}\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">%</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                  <div class=\"col-md-9\">\n                    <select id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\">\n                      <option value=\"{{item.name}}\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                  <div class=\"col-md-6\">\n                    <input [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"URL\">\n                  </div>\n                  <div class=\"col-md-3\">\n                    <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Üretilecek adet</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <input [(ngModel)]=\"prodCount\" name=\"prodCount\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                    </div>\n                  </div>\n                </div>  \n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Kullanılacak malzeme sayısı</label>\n                  <div class=\"controls col-md-9\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"materialChanged(1)\">Arttır</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"materialChanged(0)\">Azalt</button>\n                  </div>\n                </div>\n                <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount > 0\">\n                  <thead>\n                    <tr>\n                      <th>Malzeme adı</th>\n                      <th>Kullanılan miktar</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let material of materialsList, let i = index\">\n                      <td>{{materialsList[i].name}}\n                        <select id=\"select3\" class=\"form-control form-control-sm\" [(ngModel)]=\"materialsList[i].name\" name=\"materialsList[i].name\" (ngModelChange)=\"selectMaterial(i,$event)\">\n                          <ng-container *ngFor=\"let item of products\">\n                            <option value=\"{{ item.payload.key }}***{{ item.payload.val().name }}\" *ngIf=\"item.payload.val().group == 'malzeme'\">{{ item.payload.val().name }}</option>\n                          </ng-container>\n                        </select> \n                      </td>\n                      <td>\n                        <input [(ngModel)]=\"materialsList[i].amount\" name=\"{{materialsList[i].amount}}\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"\" (ngModelChange)=\"costUpdate()\">\n                      </td>\n                    </tr>\n                    </tbody>\n                </table>\n                <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">{{ this.cost | number : '.2-2' }}₺</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Adet maliyeti</label>\n                  <div class=\"controls col-md-9\">\n                    <label class=\"col-form-label\" for=\"appendedPrependedInput\">{{ this.cost / prodCount | number : '.2-2' }}₺</label>\n                  </div>\n                </div>  \n              </form>\n            </div>\n            <div class=\"card-footer\">\n              <button [disabled]=\"name==null || price==null || kdv < 0 || materialCount < 0 || materialCount == null || kdv == null || group==null || photo==null || name=='' || price=='' || group=='' || photo==''\" type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"addProduct(name, price, kdv, group, photo)\"><i class=\"fa fa-dot-circle-o\"></i> Ekle</button>\n              <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\"><i class=\"fa fa-ban\"></i> Temizle</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-align-justify\"></i> ÜRÜN LİSTESİ\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-prepend\">\n                      <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n                    </span>\n                    <input type=\"text\" id=\"input1-group2\" name=\"searchProdList\" [(ngModel)]=\"searchProdList\" class=\"form-control\" placeholder=\"Ürün\">\n                  </div>\n                    </div>\n                <div class=\"col-12 mt-4\">\n                  <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Ürün adı</th>\n                        <th>Ürün gurubu</th>\n                        <th>Fiyatı</th>\n                        <th>KDV oranı</th>\n                        <th>KDV dahil fiyatı</th>\n                        <th>Stok</th>\n                        <th>Ayarlar</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of products | filter:searchProdList\">\n                        <td>{{ item.payload.val().name }}</td>\n                        <td>{{ item.payload.val().group }}</td>\n                        <td>{{ item.payload.val().price }}₺</td>\n                        <td>{{ item.payload.val().kdv }}</td>\n                        <td>{{ item.payload.val().kdvPrice | number : '.2-2' }}₺</td>\n                        <td>{{ item.payload.val().stock | number : '.2-2' }}</td>\n                        <td>\n                          <div class=\"row\">\n                            <div class=\"col-6\">\n                              <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\"><i class=\"cil-pencil mr-2\"></i>Düzenle</button>\n                            </div>\n                            <div class=\"col-6\">\n                              <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-danger btn-square btn-block\" (click)=\"deleteProduct(item.key)\"><i class=\"cil-trash mr-2\"></i>Sil</button>\n                            </div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n      </div>    \n    </div>\n  </div>\n</div>\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Ürünü Düzenle</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                <div class=\"col-md-9\">\n                  <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\n                  <span class=\"help-block\"></span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürünün satış fiyatı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">₺</span>\n                    </div>\n                    <input [(ngModel)]=\"price\" name=\"price\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.price}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">.00</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün KDV oranı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <input [(ngModel)]=\"kdv\" name=\"kdv\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.kdv}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                <div class=\"col-md-9\">\n                  <select id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\n                    <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                <div class=\"col-md-6\">\n                  <input [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\n                </div>\n                <div class=\"col-md-3\">\n                  <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Üretilecek adet</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <input [(ngModel)]=\"prodCount\" name=\"prodCount\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Kullanılacak malzeme sayısı</label>\n                <div class=\"controls col-md-9\">\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"materialChanged(1)\">Arttır</button>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"materialChanged(0)\">Azalt</button>\n                </div>\n              </div>\n              <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\n                <thead>\n                  <tr>\n                    <th>Malzeme adı</th>\n                    <th>Kullanılan miktar</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let material of materialsList, let i = index\">\n                    <td>{{materialsList[i].name}}\n                      <select id=\"select3\" class=\"form-control form-control-sm\" [(ngModel)]=\"materialsList[i].name\" name=\"materialsList[i].name\" (ngModelChange)=\"selectMaterial(i,$event)\">\n                        <ng-container *ngFor=\"let item of products\">\n                          <option value=\"{{ item.payload.key }}***{{ item.payload.val().name }}\" *ngIf=\"item.payload.val().group == 'malzeme' && name != item.payload.val().name\">{{ item.payload.val().name }}</option>\n                        </ng-container>\n                      </select> \n                    </td>\n                    <td>\n                      <input [(ngModel)]=\"materialsList[i].amount\" name=\"{{materialsList[i].amount}}\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"\" (ngModelChange)=\"costUpdate()\">\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\n                <div class=\"controls col-md-9\">\n                  <label class=\"col-form-label\" for=\"appendedPrependedInput\">{{ this.cost | number : '.2-2' }}₺</label>\n                </div>\n              </div>\n              <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Adet maliyeti</label>\n                <div class=\"controls col-md-9\">\n                  <label class=\"col-form-label\" for=\"appendedPrependedInput\">{{ this.cost / prodCount | number : '.2-2' }}₺</label>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Vazgeç</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editProduct(name, price, kdv, group, photo)\">Değişiklikleri kaydet</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
      /***/
    },

    /***/
    "ZuAo":
    /*!******************************************************!*\
      !*** ./src/app/views/products/products.component.ts ***!
      \******************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function ZuAo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_Products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./Products.component.html */
      "UIL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "bSaC");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(db) {
          var _this = this;

          _classCallCheck(this, ProductsComponent);

          this.db = db;
          this.name = null;
          this.price = null;
          this.kdv = null;
          this.group = null;
          this.photo = null;
          this.cost = 0;
          this.prodCount = 1;
          this.materialCount = 0;
          this.groups = null;
          this.material = null;
          this.kdvPrice = 0;
          this.modalDetail = [];
          this.materialsList = [];
          db.list('/groups').valueChanges().subscribe(function (i) {
            _this.groups = i;
          });
          db.list('/products').snapshotChanges().forEach(function (i) {
            _this.products = i;
          });
        }

        _createClass(ProductsComponent, [{
          key: "numSequence",
          value: function numSequence(n) {
            return Array(n);
          }
        }, {
          key: "materialChanged",
          value: function materialChanged(process) {
            if (process == 1) {
              this.materialsList.push({
                id: '',
                name: '',
                amount: 0
              });
              this.materialCount++;
            } else {
              this.materialsList.splice(this.materialsList.length - 1, this.materialsList.length);
              if (this.materialCount > 0) this.materialCount--;
            }
          }
        }, {
          key: "modalOpen",
          value: function modalOpen(key) {
            var _this2 = this;

            this.materialsList.splice(0, this.materialsList.length);
            this.products.forEach(function (element) {
              if (element.key == key) {
                _this2.group = element.payload.val().group;
                _this2.name = element.payload.val().name;
                _this2.price = element.payload.val().price;
                _this2.prodCount = element.payload.val().prodCount;
                _this2.kdv = element.payload.val().kdv;
                _this2.photo = element.payload.val().photo;
                _this2.materialCount = element.payload.val().materialCount;
                if (element.payload.val().material != undefined) _this2.materialsList = element.payload.val().material;
              }
            });
            this.costUpdate();
            if (this.keys != undefined) this.db.database.ref('/products/' + this.keys).update({
              cost: this.cost
            });
            this.keys = key;
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(key) {
            this.db.list('/products/' + key).remove();
          }
        }, {
          key: "addProduct",
          value: function addProduct(name, price, kdv, group, photo) {
            this.db.list('/products').push({
              name: name,
              price: price,
              cost: this.cost,
              kdv: kdv,
              kdvPrice: parseFloat(price) * (1 + parseFloat(kdv) / 100),
              group: group,
              photo: photo,
              stock: 0,
              cafe1Stock: 0,
              cafe2Stock: 0,
              restaurant1Stock: 0,
              materialCount: this.materialCount,
              prodCount: this.prodCount,
              material: this.materialsList
            });
            this.name = "";
            this.price = "";
            this.kdv = "";
            this.prodCount = 1;
            this.group = "";
            this.photo = "";
            this.materialCount = 0;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.name = "";
            this.price = "";
            this.kdv = "";
            this.prodCount = 1;
            this.group = "";
            this.photo = "";
            this.materialCount = 0;
          }
        }, {
          key: "editProduct",
          value: function editProduct(name, price, kdv, group, photo) {
            this.db.database.ref('/products/' + this.keys).update({
              name: name,
              price: price,
              kdv: kdv,
              kdvPrice: parseFloat(price) * (1 + parseFloat(kdv) / 100),
              cost: this.cost,
              group: group,
              photo: photo,
              materialCount: this.materialCount,
              prodCount: this.prodCount,
              material: this.materialsList
            });
            this.largeModal.hide();
            this.name = "";
            this.price = "";
            this.prodCount = 1;
            this.kdv = "";
            this.group = "";
            this.photo = "";
            this.materialCount = 0;
          }
        }, {
          key: "selectMaterial",
          value: function selectMaterial(i, arr) {
            var _this3 = this;

            this.cost = 0;

            var _arr$split = arr.split("***"),
                _arr$split2 = _slicedToArray(_arr$split, 2),
                id = _arr$split2[0],
                name = _arr$split2[1];

            this.materialsList[i].id = id;
            this.materialsList[i].name = name;
            this.materialsList.forEach(function (x) {
              _this3.products.forEach(function (element) {
                if (element.key == x.id) {
                  _this3.cost += x.amount * element.payload.val().cost;
                }
              });
            });
          }
        }, {
          key: "costUpdate",
          value: function costUpdate() {
            var _this4 = this;

            this.cost = 0;
            this.materialsList.forEach(function (x) {
              _this4.products.forEach(function (element) {
                if (element.key == x.id) {
                  _this4.cost += x.amount * element.payload.val().cost;
                }
              });
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.name = "";
            this.price = "";
            this.kdv = "";
            this.prodCount = 1;
            this.group = "";
            this.photo = "";
            this.materialCount = 0;
            this.largeModal.hide();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
        }];
      };

      ProductsComponent.propDecorators = {
        largeModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['largeModal']
        }],
        warningModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['warningModal']
        }]
      };
      ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_Products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])], ProductsComponent);
      /***/
    },

    /***/
    "tVzP":
    /*!****************************************!*\
      !*** ./src/app/views/products/pipe.ts ***!
      \****************************************/

    /*! exports provided: searchPipe2 */

    /***/
    function tVzP(module, __webpack_exports__, __webpack_require__) {
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
    "tzx7":
    /*!***************************************************!*\
      !*** ./src/app/views/products/products.module.ts ***!
      \***************************************************/

    /*! exports provided: ProductsModule */

    /***/
    function tzx7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
        return ProductsModule;
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


      var _products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./products.component */
      "ZuAo");
      /* harmony import */


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./products-routing.module */
      "5Ia1");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pipe */
      "tVzP");

      var ProductsModule = function ProductsModule() {
        _classCallCheck(this, ProductsModule);
      };

      ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_8__["stockRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"]],
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _pipe__WEBPACK_IMPORTED_MODULE_10__["searchPipe2"]]
      })], ProductsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-products-products-module-es5.js.map