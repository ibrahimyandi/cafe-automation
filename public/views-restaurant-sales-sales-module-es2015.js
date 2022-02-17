(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-restaurant-sales-sales-module"],{

/***/ "H8G7":
/*!***********************************************************!*\
  !*** ./src/app/views/restaurant/sales/sales.component.ts ***!
  \***********************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sales.component.html */ "roeB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "VRCc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let SalesComponent = class SalesComponent {
    constructor(db, auth, router) {
        this.db = db;
        this.router = router;
        this.table = [];
        this.products = [];
        this.openTable = [];
        this.selectedProd = [];
        this.stockDetail = [];
        this.exist = false;
        auth.onAuthStateChanged((user) => {
            if (user) {
                if ((user.email == "cafe2@sks.com" || user.email == "admin@sks.com") == false) {
                    router.navigate(["/stock"]);
                }
            }
        });
        this.db.list("/products").snapshotChanges().forEach(x => {
            this.products = x;
        });
        this.db.list("/restaurant1/table").snapshotChanges().forEach(x => {
            this.table = x;
        });
        this.db.list("receipt").valueChanges().subscribe(x => {
            this.db.database.ref("receipt").once('value').then(snapshot => {
                if (snapshot.exists()) {
                    this.receiptId = snapshot.val().id;
                }
                else {
                    this.db.list("/receipt").set('id', 0);
                }
            });
        });
    }
    ngOnInit() { }
    tableEdit(process) {
        if (process == 1) {
            this.db.list("/restaurant1/table").push({ name: this.table.length + 1 });
        }
        else {
            this.db.list("/restaurant1/table/" + this.table[this.table.length - 1].payload.key).remove();
        }
    }
    modalOpen(key) {
        this.table.forEach(x => {
            if (x.payload.key == key) {
                if (x.payload.val().product == undefined)
                    this.selectedProd = [];
                else
                    this.selectedProd = x.payload.val().product;
            }
        });
        this.largeModal.show();
        this.key = key;
    }
    selectProduct(key) {
        var iter = 0;
        this.selectedProd.forEach(i => {
            this.products.forEach(element => {
                if (key == i.key && element.key == key) {
                    if (element.payload.val().restaurant1Stock > this.selectedProd[iter].count) {
                        this.selectedProd[iter].count += 1;
                        this.selectedProd[iter].totalPrice = this.selectedProd[iter].count * this.selectedProd[iter].data.kdvPrice;
                        this.totalPrice += this.selectedProd[iter].data.kdvPrice;
                    }
                    this.exist = true;
                }
            });
            iter++;
        });
        if (this.exist == false) {
            this.products.forEach(element => {
                if (key == element.key) {
                    this.selectedProd.push({ data: element.payload.val(), count: 1, key: element.key, totalPrice: element.payload.val().kdvPrice, date: 0 });
                    this.totalPrice += element.payload.val().kdvPrice;
                }
            });
        }
        this.exist = false;
    }
    getSum(arr) {
        let sum = 0;
        if (arr != undefined) {
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i].totalPrice;
            }
        }
        return sum;
    }
    countDecrease(index) {
        this.selectedProd[index].count--;
        this.totalPrice -= this.selectedProd[index].data.kdvPrice;
        if (this.selectedProd[index].count <= 0) {
            this.selectedProd.splice(index, 1);
        }
        else {
            this.selectedProd[index].totalPrice = this.selectedProd[index].count * this.selectedProd[index].data.kdvPrice;
        }
        if (this.selectedProd.length == 0)
            this.totalPrice = 0;
    }
    addProduct() {
        this.db.database.ref("/restaurant1/table/" + this.key).update({ product: this.selectedProd });
        this.largeModal.hide();
        this.key = null;
        this.selectedProd = [];
    }
    sell(key) {
        this.table.forEach(x => {
            if (x.payload.key == key) {
                this.selectedProd = x.payload.val().product;
                this.tableName = x.payload.val().name;
            }
        });
        this.totalPrice = 0;
        const date = new Date();
        this.faturaTarih = date.toLocaleString('tr-TR');
        this.receiptId++;
        var newWin = window.open("");
        newWin.document.write("<!DOCTYPE html><html lang='en'> <head> <meta charset='utf-8'> <title>SKS Fatura</title> <style> body{ width: 80mm; position: relative; display: block; margin: 0px; font-size: 12px; font-weight: bold; text-transform: uppercase; } .container{ margin: 10px; } .title{ text-align: center; margin-top: 4px; } span{ width: 100px; display: inline-block; } hr.dashed { border-top: 1px dashed black; } th{ width: 80px; text-align: left; } .bodyFooter{ position: relative; } .totalText{ width: 81%; } .total{ float: right; width: 19%; } .footer{ } </style> </head> <body> <div class='container'> <div class='head'> <div class='title'>SKS</div> <br> <div><span>MASA NO</span>:&nbsp;&nbsp;" + this.tableName + "</div>");
        newWin.document.write("</div> <div><span>TARİH</span>:&nbsp;&nbsp;" + this.faturaTarih + "</div><div><span>FİŞ NO</span>:&nbsp;&nbsp;" + this.receiptId + "</div> </div> <hr class='dashed'> <div class='body'> <table> <tr> <th style='width: 40%;'>ÜRÜN ADI</th> <th style='width: 0px;'></th><th style='width: 0px;'></th> <th>FİYAT</th> <th>ADET</th> <th>TUTAR</th> </tr>");
        this.selectedProd.forEach(x => {
            this.totalPrice += x.totalPrice;
            newWin.document.write("<tr>");
            newWin.document.write("<td colspan='3'>" + x.data.name + "</td>");
            newWin.document.write("<td>" + x.data.kdvPrice.toFixed(2) + "&nbsp;₺</td>");
            newWin.document.write("<td>" + x.count + "</td>");
            newWin.document.write("<td>" + x.totalPrice.toFixed(2) + "&nbsp;₺</td>");
            newWin.document.write("</tr>");
            x.date = this.faturaTarih;
            var sellStock = parseFloat(x.data.restaurant1Stock) - parseFloat(x.count);
            this.db.database.ref("/products/" + x.key).update({ restaurant1Stock: sellStock });
            this.products.forEach(element => {
                if (x.key == element.key) {
                    var cafeStock = x.count;
                    this.stockDetail = element.payload.val().stockDetail;
                    if (element.payload.val().stockDetail != undefined) {
                        for (let index = 0; index < this.stockDetail.length; index++) {
                            this.stockDetail[index].stock -= cafeStock;
                            if (this.stockDetail[index].stock > 0) {
                                break;
                            }
                            else if (this.stockDetail[index].stock == 0) {
                                break;
                            }
                            else {
                                cafeStock = -1 * this.stockDetail[index].stock;
                            }
                        }
                    }
                    var iter = 0;
                    this.stockDetail.forEach(i => {
                        if (i.stock <= 0) {
                            this.stockDetail.splice(iter, 1);
                        }
                        iter++;
                    });
                    if (this.stockDetail.length > 0) {
                        var average = 0;
                        var amount = 0;
                        this.stockDetail.forEach(element => {
                            average += element.cost * element.stock;
                            amount += element.stock;
                        });
                        average = average / amount;
                        this.db.database.ref("/products/" + x.key).update({ cost: average, stockDetail: this.stockDetail });
                    }
                    else if (this.stockDetail.length == 1) {
                        this.db.database.ref("/products/" + x.key).update({ cost: this.stockDetail[0].cost, stockDetail: this.stockDetail });
                    }
                    else {
                        this.db.database.ref("/products/" + x.key).update({ cost: 0, stockDetail: this.stockDetail });
                    }
                }
            });
            this.db.list("/statistics/sold").push({ process: "Restoran 1 satış", name: x.data.name, group: x.data.group, kdvPrice: x.data.kdvPrice, cost: x.data.cost, count: x.count, date: x.date });
        });
        newWin.document.write("</table> <hr class='dashed'> <div class='bodyFooter'> <span class='totalText'>TOPLAM TUTAR</span>");
        newWin.document.write("<span class='total'>" + this.totalPrice.toFixed(2) + "&nbsp;₺</span>");
        newWin.document.write("</div> </div> <hr class='dashed'> <div class='footer'> </div> </div> </body></html>");
        newWin.print();
        newWin.close();
        this.totalPrice = 0;
        this.db.database.ref("/restaurant1/table/" + key + "/product").remove();
        this.db.list("/receipt").set('id', this.receiptId);
    }
};
SalesComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SalesComponent.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['largeModal',] }]
};
SalesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sales',
        template: _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], SalesComponent);



/***/ }),

/***/ "NLbd":
/*!****************************************************************!*\
  !*** ./src/app/views/restaurant/sales/sales-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: salesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesRoutingModule", function() { return salesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales.component */ "H8G7");




const routes = [
    {
        path: '',
        component: _sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"],
        data: {
            title: 'sales'
        }
    }
];
let salesRoutingModule = class salesRoutingModule {
};
salesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], salesRoutingModule);



/***/ }),

/***/ "P26L":
/*!********************************************************!*\
  !*** ./src/app/views/restaurant/sales/sales.module.ts ***!
  \********************************************************/
/*! exports provided: SalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales.component */ "H8G7");
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sales-routing.module */ "NLbd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe */ "mz24");












let SalesModule = class SalesModule {
    sell() {
        window.print();
    }
    cancel() {
    }
};
SalesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _sales_routing_module__WEBPACK_IMPORTED_MODULE_9__["salesRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]
        ],
        declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_8__["SalesComponent"], _pipe__WEBPACK_IMPORTED_MODULE_11__["searchPipe2"]]
    })
], SalesModule);



/***/ }),

/***/ "mz24":
/*!************************************************!*\
  !*** ./src/app/views/restaurant/sales/pipe.ts ***!
  \************************************************/
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

/***/ "roeB":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/restaurant/sales/sales.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Masaları düzenle\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <button class=\"btn btn-primary\" type=\"submit\" (click)=\"tableEdit(1)\">Masa ekle</button>\r\n          <button class=\"btn btn-primary\" type=\"submit\" (click)=\"tableEdit(0)\">Masa çıkar</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Masalar\r\n        </div>\r\n        <div class=\"card-body row\">\r\n          <div class=\"col-md-4\" *ngFor=\"let item of table\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-9\">Masa {{ item.payload.val().name }}</div>\r\n                  <div class=\"col-3\">\r\n                      <span style=\"float:right;height: 25px;\r\n                      width: 25px;\r\n                      border-radius: 50%;\r\n                      \" [ngStyle]=\"{'background-color': (item.payload.val().product != undefined) ? '#dc3545' : '#28a745'}\"></span>\r\n                  </div>  \r\n                </div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <h6 class=\"card-title\">Ürün listesi</h6>\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">Ürün</th>\r\n                      <th scope=\"col\">Adet</th>\r\n                      <th scope=\"col\">Tutar</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let prod of item.payload.val().product\">\r\n                      <td>{{ prod.data.name }}</td>\r\n                      <td>{{ prod.count }}</td>\r\n                      <td>{{ prod.totalPrice | number : '.2-2' }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"2\">Toplam tutar</td>\r\n                      <td>{{ getSum(item.payload.val().product) | number : '.2-2' }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <button class=\"btn btn-primary float-left btn-block\" type=\"submit\" (click)=\"modalOpen(item.payload.key)\">Ürün ekle</button>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <button class=\"btn btn-primary float-right btn-block\" type=\"submit\" [disabled]=\"item.payload.val().product == undefined\" (click)=\"sell(item.payload.key)\">Satış</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Masa ürün ekleme</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-prepend\">\r\n                <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Ara</button>\r\n              </span>\r\n              <input type=\"text\" id=\"input1-group2\" name=\"search\" class=\"form-control\" placeholder=\"Ürün\" [(ngModel)]=\"search\">  \r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <ng-container *ngFor=\"let item of products | filter:search\">\r\n                <div class=\"col-4\" style=\"cursor: pointer;\" (click)=\"selectProduct(item.payload.key)\" *ngIf=\"item.payload.val().restaurant1Stock > 0\">\r\n                  <div>{{item.payload.val().name}}({{item.payload.val().restaurant1Stock | number : '.2-2' }})</div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"selectedProd != undefined \">\r\n              <thead>\r\n                <tr>\r\n                  <th></th>\r\n                  <th>Ürün adı</th>\r\n                  <th>Adet</th>\r\n                  <th>Fiyat</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of selectedProd, let i = index\">\r\n                  <td (click)=\"countDecrease(i)\" style=\"display: table-cell;vertical-align: middle;cursor: pointer;text-align: center;\"><i class=\"cil-minus\" style=\"color:red\"></i></td>\r\n                  <td>{{item.data.name}}</td>\r\n                  <td>{{item.count}}</td>\r\n                  <td>{{item.totalPrice | number : '.2-2' }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>      \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Vazgeç</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProduct()\">Değişiklikleri kaydet</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n");

/***/ })

}]);
//# sourceMappingURL=views-restaurant-sales-sales-module-es2015.js.map