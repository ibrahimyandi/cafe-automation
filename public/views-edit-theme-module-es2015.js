(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-edit-theme-module"],{

/***/ "8zL8":
/*!************************************!*\
  !*** ./src/app/views/edit/pipe.ts ***!
  \************************************/
/*! exports provided: searchPipe3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPipe3", function() { return searchPipe3; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let searchPipe3 = class searchPipe3 {
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
searchPipe3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], searchPipe3);



/***/ }),

/***/ "YmoU":
/*!****************************************************!*\
  !*** ./src/app/views/edit/theme-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "c6PF");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups.component */ "dUGq");





const routes = [
    {
        path: '',
        data: {
            title: 'edit'
        },
        children: [
            {
                path: '',
                redirectTo: 'products'
            },
            {
                path: 'products',
                component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                data: {
                    title: 'Ürünler'
                }
            },
            {
                path: 'groups',
                component: _groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"],
                data: {
                    title: 'Gruplar'
                }
            }
        ]
    }
];
let ThemeRoutingModule = class ThemeRoutingModule {
};
ThemeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThemeRoutingModule);



/***/ }),

/***/ "bjkS":
/*!********************************************!*\
  !*** ./src/app/views/edit/theme.module.ts ***!
  \********************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "c6PF");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups.component */ "dUGq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-routing.module */ "YmoU");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe */ "8zL8");

// Angular





// Theme Routing



let ThemeModule = class ThemeModule {
};
ThemeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _theme_routing_module__WEBPACK_IMPORTED_MODULE_6__["ThemeRoutingModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
        ],
        declarations: [
            _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
            _groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"],
            _pipe__WEBPACK_IMPORTED_MODULE_8__["searchPipe3"],
        ]
    })
], ThemeModule);



/***/ }),

/***/ "c6PF":
/*!**************************************************!*\
  !*** ./src/app/views/edit/products.component.ts ***!
  \**************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_Products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./Products.component.html */ "f5ha");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





let ProductsComponent = class ProductsComponent {
    constructor(db) {
        this.db = db;
        this.name = null;
        this.price = null;
        this.kdv = null;
        this.group = null;
        this.photo = null;
        this.prodCount = 1;
        this.materialCount = 0;
        this.groups = null;
        this.material = null;
        this.kdvPrice = 0;
        this.modalDetail = [];
        this.materialsList = [];
        this.prodCost = 0;
        db.list('/groups').valueChanges().subscribe(i => {
            this.groups = i;
        });
        db.list('/products').snapshotChanges().forEach(i => {
            this.products = i;
        });
    }
    numSequence(n) {
        return Array(n);
    }
    materialChanged() {
        if (this.materialCount != this.materialsList.length) {
            if (this.materialCount > this.materialsList.length) {
                for (let index = 0; index < this.materialCount - this.materialsList.length; index++) {
                    this.materialsList.push({ id: '', name: '', amount: 0 });
                }
            }
            else {
                for (let index = 0; index < this.materialsList.length - this.materialCount; index++) {
                    this.materialsList.splice(this.materialsList.length - 1, this.materialsList.length);
                }
            }
        }
        this.materialCount = this.materialsList.length;
    }
    modalOpen(key) {
        this.materialsList.splice(0, this.materialsList.length);
        this.products.forEach(element => {
            if (element.key == key) {
                this.group = element.payload.val().group;
                this.name = element.payload.val().name;
                this.price = element.payload.val().price;
                this.prodCost = element.payload.val().cost;
                this.prodCount = element.payload.val().prodCount;
                this.kdv = element.payload.val().kdv;
                this.photo = element.payload.val().photo;
                this.materialCount = element.payload.val().materialCount;
                if (element.payload.val().material != undefined)
                    this.materialsList = element.payload.val().material;
            }
        });
        this.costUpdate();
        this.keys = key;
    }
    deleteProduct(key) {
        this.db.list('/products/' + key).remove();
    }
    addProduct(name, price, prodCost, kdv, group, photo) {
        this.db.list('/products').push({ name: name, price: price, kdv: kdv, kdvPrice: parseFloat(price) * (1 + parseFloat(kdv) / 100), group: group, photo: photo, stock: 0, materialCount: this.materialCount, prodCount: this.prodCount, material: this.materialsList, cost: prodCost, kdvCost: parseFloat(prodCost) * (1 + parseFloat(kdv) / 100) });
        this.name = "";
        this.price = "";
        this.kdv = "";
        this.prodCost = 0;
        this.prodCount = 1;
        this.group = "";
        this.photo = "";
        this.materialCount = 0;
    }
    clear() {
        this.name = "";
        this.price = "";
        this.kdv = "";
        this.prodCost = 0;
        this.prodCount = 1;
        this.group = "";
        this.photo = "";
        this.materialCount = 0;
    }
    editProduct(name, price, prodCost, kdv, group, photo) {
        this.db.database.ref('/products/' + this.keys).update({ name: name, price: price, kdv: kdv, kdvPrice: parseFloat(price) * (1 + parseFloat(kdv) / 100), group: group, photo: photo, materialCount: this.materialCount, prodCount: this.prodCount, material: this.materialsList, cost: prodCost, kdvCost: parseFloat(prodCost) * (1 + parseFloat(kdv) / 100) });
        this.largeModal.hide();
        this.name = "";
        this.price = "";
        this.prodCost = 0;
        this.prodCount = 1;
        this.kdv = "";
        this.group = "";
        this.photo = "";
        this.materialCount = 0;
    }
    selectMaterial(i, arr) {
        const [id, name] = arr.split("***");
        this.materialsList[i].id = id;
        this.materialsList[i].name = name;
        this.costUpdate();
    }
    costUpdate() {
        if (this.materialCount != 0)
            this.prodCost = 0;
        this.materialsList.forEach(x => {
            this.products.forEach(i => {
                if (i.payload.key == x.id) {
                    this.prodCost += i.payload.val().kdvCost * x.amount;
                }
            });
        });
    }
    cancel() {
        this.name = "";
        this.price = "";
        this.kdv = "";
        this.prodCost = 0;
        this.prodCount = 1;
        this.group = "";
        this.photo = "";
        this.materialCount = 0;
        this.largeModal.hide();
    }
    ngOnInit() {
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
ProductsComponent.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['largeModal',] }],
    warningModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['warningModal',] }]
};
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_Products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], ProductsComponent);



/***/ }),

/***/ "dUGq":
/*!************************************************!*\
  !*** ./src/app/views/edit/groups.component.ts ***!
  \************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_Groups_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./Groups.component.html */ "hvt7");
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

/***/ "f5ha":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/edit/Products.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-drop\"></i> Ürün Ekle / Düzenle / Sil\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>Ürün ekle / düzenle</strong> \n            </div>\n            <div class=\"card-body\">\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                  <div class=\"col-md-9\">\n                    <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"\">\n                    <span class=\"help-block\"></span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürünün satış fiyatı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">₺</span>\n                      </div>\n                      <input [(ngModel)]=\"price\" name=\"price\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\" *ngIf=\"materialCount <= 0\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Maliyet fiyatı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">₺</span>\n                      </div>\n                      <input [(ngModel)]=\"prodCost\" name=\"prodCost\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün KDV oranı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <input [(ngModel)]=\"kdv\" name=\"kdv\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.modalDetail[3]}}\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">%</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                  <div class=\"col-md-9\">\n                    <select id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\">\n                      <option value=\"{{item.name}}\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                  <div class=\"col-md-6\">\n                    <input [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"URL\">\n                  </div>\n                  <div class=\"col-md-3\">\n                    <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Üretilecek adet</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <input [(ngModel)]=\"prodCount\" name=\"prodCount\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                    </div>\n                  </div>\n                </div>  \n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Kullanılacak malzeme sayısı</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <input [(ngModel)]=\"materialCount\" (change)=\"materialChanged()\" name=\"materialCount\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                    </div>\n                  </div>\n                </div>\n                <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount > 0\">\n                  <thead>\n                    <tr>\n                      <th>Malzeme adı</th>\n                      <th>Kullanılan miktar</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let material of materialsList, let i = index\">\n                      <td>{{materialsList[i].name}}\n                        <select id=\"select3\" name=\"selectedMaterial\" class=\"form-control form-control-sm\" [(ngModel)]=\"materialsList[i].name\" (ngModelChange)=\"selectMaterial(i,$event)\">\n                          <ng-container *ngFor=\"let item of products\">\n                            <option value=\"{{ item.payload.key }}***{{ item.payload.val().name }}\" *ngIf=\"item.payload.val().group == 'malzeme'\">{{ item.payload.val().name }}</option>\n                          </ng-container>\n                        </select>\n                      </td>\n                      <td>\n                        <input [(ngModel)]=\"materialsList[i].amount\" name=\"materialCount\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"\" (ngModelChange)=\"costUpdate()\">\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\n                  <div class=\"controls col-md-9\">\n                    <div class=\"input-prepend input-group\">\n                      <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">{{ this.prodCost | number : '.2-2' }}₺</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                  <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Adet maliyeti</label>\n                  <div class=\"controls col-md-9\">\n                    <label class=\"col-form-label\" for=\"appendedPrependedInput\">{{ this.prodCost / prodCount | number : '.2-2' }}₺</label>\n                  </div>\n                </div>  \n              </form>\n            </div>\n            <div class=\"card-footer\">\n              <button [disabled]=\"name==null || price==null || kdv < 0 || materialCount < 0 || materialCount == null || kdv == null || group==null || photo==null || name=='' || price=='' || group=='' || photo==''\" type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"addProduct(name, price, prodCost, kdv, group, photo)\"><i class=\"fa fa-dot-circle-o\"></i> Ekle</button>\n              <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\"><i class=\"fa fa-ban\"></i> Temizle</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-align-justify\"></i> ÜRÜN LİSTESİ\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-prepend\">\n                      <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n                    </span>\n                    <input type=\"text\" id=\"input1-group2\" name=\"searchProdList\" [(ngModel)]=\"searchProdList\" class=\"form-control\" placeholder=\"Ürün\">\n                  </div>\n                    </div>\n                <div class=\"col-12 mt-4\">\n                  <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Ürün adı</th>\n                        <th>Ürün gurubu</th>\n                        <th>Fiyatı</th>\n                        <th>KDV oranı</th>\n                        <th>KDV dahil fiyatı</th>\n                        <th>Stok</th>\n                        <th>Ayarlar</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of products | filter:searchProdList\">\n                        <td>{{ item.payload.val().name }}</td>\n                        <td>{{ item.payload.val().group }}</td>\n                        <td>{{ item.payload.val().price }}₺</td>\n                        <td>{{ item.payload.val().kdv }}</td>\n                        <td>{{ item.payload.val().kdvPrice | number : '.2-2' }}₺</td>\n                        <td>{{ item.payload.val().stock | number : '.2-2' }}</td>\n                        <td>\n                          <div class=\"row\">\n                            <div class=\"col-6\">\n                              <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\"><i class=\"cil-pencil mr-2\"></i>Düzenle</button>\n                            </div>\n                            <div class=\"col-6\">\n                              <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-danger btn-square btn-block\" (click)=\"deleteProduct(item.key)\"><i class=\"cil-trash mr-2\"></i>Sil</button>\n                            </div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n      </div>    \n    </div>\n  </div>\n</div>\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Ürünü Düzenle</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                <div class=\"col-md-9\">\n                  <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.name}}\">\n                  <span class=\"help-block\"></span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürünün satış fiyatı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">₺</span>\n                    </div>\n                    <input [(ngModel)]=\"price\" name=\"price\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.price}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">.00</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\" *ngIf=\"materialCount <= 0\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Maliyet fiyatı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">₺</span>\n                    </div>\n                    <input [(ngModel)]=\"prodCost\" name=\"prodCost\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">.00</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün KDV oranı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <input [(ngModel)]=\"kdv\" name=\"kdv\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"{{this.kdv}}\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"select3\">Ürün grubu</label>\n                <div class=\"col-md-9\">\n                  <select id=\"select3\" name=\"group\" class=\"form-control form-control-sm\" [(ngModel)]=\"group\" required>\n                    <option [value]=\"item.name\" *ngFor=\"let item of groups\">{{ item.name }}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"file-input\">Ürün fotoğrafı</label>\n                <div class=\"col-md-6\">\n                  <input [(ngModel)]=\"photo\" name=\"photo\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"{{this.photo}}\">\n                </div>\n                <div class=\"col-md-3\">\n                  <img src=\"{{photo}}\" alt=\"...\" class=\"img-thumbnail\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Üretilecek adet</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <input [(ngModel)]=\"prodCount\" name=\"prodCount\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Kullanılacak malzeme sayısı</label>\n                <div class=\"controls col-md-9\">\n                  <div class=\"input-prepend input-group\">\n                    <input [(ngModel)]=\"materialCount\" (change)=\"materialChanged()\" name=\"materialCount\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\">\n                  </div>\n                </div>\n              </div>\n              <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"materialCount != 0\">\n                <thead>\n                  <tr>\n                    <th>Malzeme adı</th>\n                    <th>Kullanılan miktar</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let material of materialsList, let i = index\">\n                    <td>{{materialsList[i].name}}\n                      <select id=\"select3\" class=\"form-control form-control-sm\" [(ngModel)]=\"materialsList[i].name\" name=\"materialsList[i].name\" (ngModelChange)=\"selectMaterial(i,$event)\">\n                        <ng-container *ngFor=\"let item of products\">\n                          <option value=\"{{ item.payload.key }}***{{ item.payload.val().name }}\" *ngIf=\"item.payload.val().group == 'malzeme'\">{{ item.payload.val().name }}</option>\n                        </ng-container>\n                      </select> \n                    </td>\n                    <td>\n                      <input [(ngModel)]=\"materialsList[i].amount\" name=\"{{materialsList[i].amount}}\" id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"\" (ngModelChange)=\"costUpdate()\">\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Ürün maliyeti</label>\n                <div class=\"controls col-md-9\">\n                  <label class=\"col-form-label\" for=\"appendedPrependedInput\">{{ this.prodCost | number : '.2-2' }}₺</label>\n                </div>\n              </div>\n              <div class=\"form-group row\" *ngIf=\"materialCount > 0\">\n                <label class=\"col-form-label col-md-3\" for=\"appendedPrependedInput\">Adet maliyeti</label>\n                <div class=\"controls col-md-9\">\n                  <label class=\"col-form-label\" for=\"appendedPrependedInput\">{{ this.prodCost / prodCount | number : '.2-2' }}₺</label>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Vazgeç</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editProduct(name, price, prodCost, kdv, group, photo)\">Değişiklikleri kaydet</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->");

/***/ }),

/***/ "hvt7":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/edit/Groups.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-drop\"></i> Grup Ekle / Düzenle / Sil\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>Grup ekle</strong> \n            </div>\n            <div class=\"card-body\">\n              <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Grup adı</label>\n                  <div class=\"col-md-9\">\n                    <input type=\"text\" id=\"text-input\" name=\"groupName\" [(ngModel)]=\"groupName\" class=\"form-control\" placeholder=\"\">\n                    <span class=\"help-block\"></span>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"card-footer\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"addGroup(groupName)\" [disabled]=\"groupName=='' || groupName == null\"><i class=\"fa fa-dot-circle-o\"></i> Ekle</button>\n              <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"reset()\"><i class=\"fa fa-ban\"></i> Temizle</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-align-justify\"></i> ÜRÜN LİSTESİ\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-prepend\">\n                      <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\n                    </span>\n                    <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Ürün\">\n                  </div>\n                    </div>\n                <div class=\"col-12 mt-4\">\n                  <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Grup adı</th>\n                        <th>Düzenle / Sil</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of groups\">\n                        <td class=\"col-6\">{{ item.payload.val().name }}</td>\n                        <td class=\"col-6\">\n                          <div class=\"row\">\n                            <div class=\"col-6\">\n                              <button type=\"button\" class=\"btn btn-success btn-square btn-block\" (click)=\"modalOpen(item.key)\" (click)=\"largeModal.show()\"><i class=\"cil-pencil mr-2\"></i>Düzenle</button>\n                            </div>\n                            <div class=\"col-6\">\n                              <button type=\"button\" class=\"btn btn-danger btn-square btn-block\" (click)=\"deleteGroup(item.key)\"><i class=\"cil-trash mr-2\"></i>Sil</button>\n                            </div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n      </div>    \n    </div>\n  </div>\n</div>\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Ürünü Düzenle</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"text-input\">Ürün adı</label>\n                <div class=\"col-md-9\">\n                  <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"text-input\" class=\"form-control\" placeholder=\"\">\n                  <span class=\"help-block\"></span>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Vazgeç</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editGroup(name)\">Değişiklikleri kaydet</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->");

/***/ })

}]);
//# sourceMappingURL=views-edit-theme-module-es2015.js.map