(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-groups-groups-module"], {
    /***/
    "/diQ":
    /*!*******************************************************!*\
      !*** ./src/app/views/groups/groups-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: stockRoutingModule */

    /***/
    function diQ(module, __webpack_exports__, __webpack_require__) {
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


      var _groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./groups.component */
      "vvRr");

      var routes = [{
        path: '',
        component: _groups_component__WEBPACK_IMPORTED_MODULE_3__["GroupsComponent"],
        data: {
          title: 'groups'
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
    "1Lem":
    /*!**************************************!*\
      !*** ./src/app/views/groups/pipe.ts ***!
      \**************************************/

    /*! exports provided: searchPipe2 */

    /***/
    function Lem(module, __webpack_exports__, __webpack_require__) {
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
    "OTcU":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/groups/Groups.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function OTcU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-drop\"></i> Grup Ekle / Düzenle / Sil\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>Grup ekle</strong> \n            </div>\n            <div class=\"card-body\">\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Grup adı</label>\n                  <div class=\"col-md-9\">\n                    <input type=\"text\" id=\"text-input\" name=\"groupName\" [(ngModel)]=\"groupName\" class=\"form-control\" placeholder=\"\">\n                    <span class=\"help-block\"></span>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"card-footer\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"addGroup(groupName)\" [disabled]=\"groupName=='' || groupName == null\"><i class=\"fa fa-dot-circle-o\"></i> Ekle</button>\n              <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"reset()\"><i class=\"fa fa-ban\"></i> Temizle</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-align-justify\"></i> ÜRÜN LİSTESİ\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-prepend\">\n                      <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n                    </span>\n                    <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Ürün\">\n                  </div>\n                    </div>\n                <div class=\"col-12 mt-4\">\n                  <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Grup adı</th>\n                        <th>Düzenle / Sil</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of groups\">\n                        <td class=\"col-6\">{{ item.payload.val().name }}</td>\n                        <td class=\"col-6\">\n                          <div class=\"row\">\n                            <div class=\"col-6\">\n                              <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\"><i class=\"cil-pencil mr-2\"></i>Düzenle</button>\n                            </div>\n                            <div class=\"col-6\">\n                              <button type=\"button\" class=\"btn btn-danger btn-square btn-block\" (click)=\"deleteGroup(item.key)\"><i class=\"cil-trash mr-2\"></i>Sil</button>\n                            </div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n      </div>    \n    </div>\n  </div>\n</div>\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Ürünü Düzenle</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                <div class=\"col-md-9\">\n                  <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"\">\n                  <span class=\"help-block\"></span>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Vazgeç</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editGroup(name)\">Değişiklikleri kaydet</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
      /***/
    },

    /***/
    "vvRr":
    /*!**************************************************!*\
      !*** ./src/app/views/groups/groups.component.ts ***!
      \**************************************************/

    /*! exports provided: GroupsComponent */

    /***/
    function vvRr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsComponent", function () {
        return GroupsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_Groups_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./Groups.component.html */
      "OTcU");
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

      var GroupsComponent = /*#__PURE__*/function () {
        function GroupsComponent(db) {
          var _this = this;

          _classCallCheck(this, GroupsComponent);

          this.db = db;
          this.groupName = null;
          db.list('/groups').snapshotChanges().forEach(function (i) {
            _this.groups = i;
          });
          db.list('/products').snapshotChanges().forEach(function (i) {
            _this.products = i;
          });
        }

        _createClass(GroupsComponent, [{
          key: "modalOpen",
          value: function modalOpen(key) {
            var _this2 = this;

            this.groups.forEach(function (x) {
              if (x.key == key) _this2.name = x.payload.val().name;
            });
            this.oldName = this.name;
            this.keys = key;
          }
        }, {
          key: "addGroup",
          value: function addGroup(name) {
            this.db.list('/groups').push({
              name: name
            });
            this.groupName = "";
          }
        }, {
          key: "reset",
          value: function reset() {
            this.groupName = "";
          }
        }, {
          key: "deleteGroup",
          value: function deleteGroup(key) {
            this.db.list('/groups/' + key).remove();
          }
        }, {
          key: "editGroup",
          value: function editGroup(name) {
            var _this3 = this;

            this.products.forEach(function (element) {
              if (_this3.oldName == element.payload.val().group) _this3.db.database.ref("/products/" + element.key).update({
                group: name
              });
            });
            this.db.database.ref('/groups/' + this.keys).update({
              name: name
            });
            this.largeModal.hide();
          }
        }]);

        return GroupsComponent;
      }();

      GroupsComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
        }];
      };

      GroupsComponent.propDecorators = {
        largeModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['largeModal']
        }]
      };
      GroupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_Groups_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])], GroupsComponent);
      /***/
    },

    /***/
    "y4P3":
    /*!***********************************************!*\
      !*** ./src/app/views/groups/groups.module.ts ***!
      \***********************************************/

    /*! exports provided: GroupsModule */

    /***/
    function y4P3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsModule", function () {
        return GroupsModule;
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


      var _groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./groups.component */
      "vvRr");
      /* harmony import */


      var _groups_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./groups-routing.module */
      "/diQ");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pipe */
      "1Lem");

      var GroupsModule = function GroupsModule() {
        _classCallCheck(this, GroupsModule);
      };

      GroupsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _groups_routing_module__WEBPACK_IMPORTED_MODULE_8__["stockRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"]],
        declarations: [_groups_component__WEBPACK_IMPORTED_MODULE_7__["GroupsComponent"], _pipe__WEBPACK_IMPORTED_MODULE_10__["searchPipe2"]]
      })], GroupsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-groups-groups-module-es5.js.map