(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-groups-groups-module"],{

/***/ "/diQ":
/*!*******************************************************!*\
  !*** ./src/app/views/groups/groups-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: stockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockRoutingModule", function() { return stockRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups.component */ "vvRr");




const routes = [
    {
        path: '',
        component: _groups_component__WEBPACK_IMPORTED_MODULE_3__["GroupsComponent"],
        data: {
            title: 'groups'
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



/***/ }),

/***/ "1Lem":
/*!**************************************!*\
  !*** ./src/app/views/groups/pipe.ts ***!
  \**************************************/
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

/***/ "OTcU":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/groups/Groups.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <i class=\"icon-drop\"></i> Grup Ekle / Düzenle / Sil\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <strong>Grup ekle</strong> \r\n            </div>\r\n            <div class=\"card-body\">\r\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Grup adı</label>\r\n                  <div class=\"col-md-9\">\r\n                    <input type=\"text\" id=\"text-input\" name=\"groupName\" [(ngModel)]=\"groupName\" class=\"form-control\" placeholder=\"\">\r\n                    <span class=\"help-block\"></span>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"addGroup(groupName)\" [disabled]=\"groupName=='' || groupName == null\"><i class=\"fa fa-dot-circle-o\"></i> Ekle</button>\r\n              <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"reset()\"><i class=\"fa fa-ban\"></i> Temizle</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <i class=\"fa fa-align-justify\"></i> ÜRÜN LİSTESİ\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-prepend\">\r\n                      <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\r\n                    </span>\r\n                    <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Ürün\">\r\n                  </div>\r\n                    </div>\r\n                <div class=\"col-12 mt-4\">\r\n                  <table class=\"table table-bordered table-striped table-sm\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Grup adı</th>\r\n                        <th>Düzenle / Sil</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of groups\">\r\n                        <td class=\"col-6\">{{ item.payload.val().name }}</td>\r\n                        <td class=\"col-6\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                              <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\"><i class=\"cil-pencil mr-2\"></i>Düzenle</button>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                              <button type=\"button\" class=\"btn btn-danger btn-square btn-block\" (click)=\"deleteGroup(item.key)\"><i class=\"cil-trash mr-2\"></i>Sil</button>\r\n                            </div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--/.col-->\r\n      </div>    \r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Ürünü Düzenle</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\r\n                <div class=\"col-md-9\">\r\n                  <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"\">\r\n                  <span class=\"help-block\"></span>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Vazgeç</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editGroup(name)\">Değişiklikleri kaydet</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->");

/***/ }),

/***/ "vvRr":
/*!**************************************************!*\
  !*** ./src/app/views/groups/groups.component.ts ***!
  \**************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_Groups_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./Groups.component.html */ "OTcU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





let GroupsComponent = class GroupsComponent {
    constructor(db) {
        this.db = db;
        this.groupName = null;
        db.list('/groups').snapshotChanges().forEach(i => {
            this.groups = i;
        });
        db.list('/products').snapshotChanges().forEach(i => {
            this.products = i;
        });
    }
    modalOpen(key) {
        this.groups.forEach(x => {
            if (x.key == key)
                this.name = x.payload.val().name;
        });
        this.oldName = this.name;
        this.keys = key;
    }
    addGroup(name) {
        this.db.list('/groups').push({ name: name });
        this.groupName = "";
    }
    reset() {
        this.groupName = "";
    }
    deleteGroup(key) {
        this.db.list('/groups/' + key).remove();
    }
    editGroup(name) {
        this.products.forEach(element => {
            if (this.oldName == element.payload.val().group)
                this.db.database.ref("/products/" + element.key).update({ group: name });
        });
        this.db.database.ref('/groups/' + this.keys).update({ name: name });
        this.largeModal.hide();
    }
};
GroupsComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
GroupsComponent.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['largeModal',] }]
};
GroupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_Groups_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], GroupsComponent);



/***/ }),

/***/ "y4P3":
/*!***********************************************!*\
  !*** ./src/app/views/groups/groups.module.ts ***!
  \***********************************************/
/*! exports provided: GroupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsModule", function() { return GroupsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groups.component */ "vvRr");
/* harmony import */ var _groups_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups-routing.module */ "/diQ");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe */ "1Lem");











let GroupsModule = class GroupsModule {
};
GroupsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _groups_routing_module__WEBPACK_IMPORTED_MODULE_8__["stockRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
        ],
        declarations: [
            _groups_component__WEBPACK_IMPORTED_MODULE_7__["GroupsComponent"],
            _pipe__WEBPACK_IMPORTED_MODULE_10__["searchPipe2"],
        ]
    })
], GroupsModule);



/***/ })

}]);
//# sourceMappingURL=views-groups-groups-module-es2015.js.map