(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cafe2-sales-sales-module"],{

/***/ "QEMH":
/*!******************************************************!*\
  !*** ./src/app/views/cafe2/sales/sales.component.ts ***!
  \******************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sales.component.html */ "tFeE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");




let SalesComponent = class SalesComponent {
    constructor(db) {
        this.db = db;
        this.groups = [];
        this.products = [];
        this.totalPrice = 0;
        this.stockDetail = [];
        this.selectedProd = [];
        this.selectExist = [];
        this.exist = false;
        this.receiptExists = false;
        db.list('/groups').valueChanges().subscribe(i => {
            this.groups = i;
            this.groups.sort((a, b) => {
                if (a.name < b.name)
                    return -1;
                return a.name > b.name ? 1 : 0;
            });
        });
        db.list("/products").snapshotChanges().forEach(i => {
            this.products = i;
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
    selectProduct(key) {
        var iter = 0;
        this.selectedProd.forEach(i => {
            if (key == i.key) {
                this.exist = true;
                this.selectedProd[iter].count += 1;
                this.selectedProd[iter].totalPrice = this.selectedProd[iter].count * this.selectedProd[iter].data.kdvPrice;
                this.totalPrice += this.selectedProd[iter].data.kdvPrice;
            }
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
    sell() {
        this.totalPrice = 0;
        const date = new Date();
        this.faturaTarih = date.toLocaleString('tr-TR');
        this.receiptId++;
        var newWin = window.open("");
        newWin.document.write("<!DOCTYPE html><html lang='en'> <head> <meta charset='utf-8'> <title>SKS Fatura</title> <style> body{ width: 80mm; position: relative; display: block; margin: 0px; font-size: 12px; font-weight: bold; text-transform: uppercase; } .container{ margin: 10px; } .title{ text-align: center; margin-top: 4px; } span{ width: 100px; display: inline-block; } hr.dashed { border-top: 1px dashed black; } th{ width: 80px; text-align: left; } .bodyFooter{ position: relative; } .totalText{ width: 81%; } .total{ float: right; width: 19%; } .footer{ } </style> </head> <body> <div class='container'> <div class='head'> <div class='title'>SKS</div> <br> <div><span>PEŞİN MÜŞTERİ</span>&nbsp;&nbsp;</div>");
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
            var sellStock = parseFloat(x.data.stock) - parseFloat(x.count);
            this.db.database.ref("/products/" + x.key).update({ cafe2Stock: sellStock });
            this.products.forEach(element => {
                if (x.key == element.key) {
                    var cafeStock = x.count;
                    this.stockDetail = element.payload.val().stockDetail;
                    if (element.payload.val().stockDetail != undefined) {
                        for (let index = 0; index < this.stockDetail.length; index++) {
                            this.stockDetail[index].stock -= cafeStock;
                            console.log(this.stockDetail[index].stock);
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
            this.db.list("/statistics/sold").push({ process: "Kafe 2 satış", name: x.data.name, group: x.data.group, kdvPrice: x.data.kdvPrice, cost: x.data.cost, count: x.count, date: x.date });
        });
        newWin.document.write("</table> <hr class='dashed'> <div class='bodyFooter'> <span class='totalText'>TOPLAM TUTAR</span>");
        newWin.document.write("<span class='total'>" + this.totalPrice.toFixed(2) + "&nbsp;₺</span>");
        newWin.document.write("</div> </div> <hr class='dashed'> <div class='footer'> </div> </div> </body></html>");
        newWin.print();
        newWin.close();
        this.totalPrice = 0;
        this.selectedProd.splice(0, this.selectedProd.length);
        this.db.list("/receipt").set('id', this.receiptId);
        this.alinanPara = 0;
    }
    cancel() {
        this.selectedProd.splice(0, this.selectedProd.length);
        this.totalPrice = 0;
        this.alinanPara = 0;
    }
};
SalesComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
SalesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sales',
        template: _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], SalesComponent);



/***/ }),

/***/ "i5qq":
/*!***********************************************************!*\
  !*** ./src/app/views/cafe2/sales/sales-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: salesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesRoutingModule", function() { return salesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales.component */ "QEMH");




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

/***/ "iO8b":
/*!***************************************************!*\
  !*** ./src/app/views/cafe2/sales/sales.module.ts ***!
  \***************************************************/
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
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales.component */ "QEMH");
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-routing.module */ "i5qq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");










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
            _sales_routing_module__WEBPACK_IMPORTED_MODULE_8__["salesRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]
        ],
        declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_7__["SalesComponent"]]
    })
], SalesModule);



/***/ }),

/***/ "tFeE":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cafe2/sales/sales.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <tabset>\n          <ng-container *ngFor=\"let group of groups\">\n            <tab heading=\"{{group.name}}\">\n              <div class=\"row\">\n                <div *ngFor=\"let prod of products\">\n                  <div class=\"float-left\" *ngIf=\"group.name == prod.payload.val().group && prod.payload.val().cafe2Stock > 0\" (click)=\"selectProduct(prod.key)\">\n                    <div class=\"card\" style=\"cursor: pointer;\">\n                      <div class=\"body\">\n                        <img style=\"width: 128px;height: 128px;\" src=\"{{prod.payload.val().photo}}\" class=\"rounded float-left\" alt=\"...\">\n                      </div>\n                      <div class=\"footer\" style=\"text-align: center;\">\n                        {{ prod.payload.val().name }}\n                      </div>  \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tab>\n          </ng-container>\n        </tabset>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"cil-cash\"></i> Satılacaklar\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\" id=\"printTable\">\n              <table class=\"table table-bordered table-striped table-sm\" *ngIf=\"selectedProd.length > 0\">\n                <thead>\n                  <tr>\n                    <th></th>\n                    <th>Ürün adı</th>\n                    <th>Adet</th>\n                    <th>Fiyat</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of selectedProd, let i = index\">\n                    <td (click)=\"countDecrease(i)\" style=\"display: table-cell;vertical-align: middle;cursor: pointer;text-align: center;\"><i class=\"cil-minus\" style=\"color:red\"></i></td>\n                    <td>{{item.data.name}}</td>\n                    <td>{{item.count}}</td>\n                    <td>{{item.totalPrice | number : '.2-2' }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <label>Toplam tutar: </label>\n              </div>\n              <div class=\"col-6\">\n                <label>{{totalPrice | number : '.2-2' }}</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <label>Alınan para: </label>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"input-prepend input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">₺</span>\n                  </div>\n                  <input id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"number\" placeholder=\"0\" name=\"alinanPara\" [(ngModel)]=\"alinanPara\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <label>Para üstü: </label>\n              </div>\n              <div class=\"col-6\">\n                <label *ngIf=\"alinanPara-this.totalPrice<0\">Eksik para verildi.</label>\n                <label *ngIf=\"alinanPara-this.totalPrice>0\">{{alinanPara-totalPrice | number : '.2-2' }}₺</label>\n                <label *ngIf=\"alinanPara-this.totalPrice==0\">Ödendi</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button (click)=\"sell()\" type=\"button\" class=\"btn btn-success btn-square btn-block\" [disabled]=\"this.totalPrice==0\">SAT</button>\n              </div>\n              <div class=\"col-6\">\n                <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-danger btn-square btn-block\">VAZGEÇ</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ })

}]);
//# sourceMappingURL=views-cafe2-sales-sales-module-es2015.js.map