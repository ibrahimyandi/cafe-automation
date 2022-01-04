import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'Products.component.html'
})
export class ProductsComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;
  
  key;
  searchProdList;
  name = null;
  price = null;
  kdv = null;
  group = null;
  photo = null;
  cost = 0;
  prodCount = 1;
  materialCount = 0;
  selectedMaterial;
  groups = null;
  material = null;
  kdvPrice = 0;
  products;
  modalDetail = [];
  materialsList: Array<{ id: string, name: string, amount: number }> = [];
  keys;
  constructor(private db: AngularFireDatabase,) {
    db.list('/groups').valueChanges().subscribe(i => {
      this.groups = i;
    });
    db.list('/products').snapshotChanges().forEach(i=>{
      this.products = i;
    });
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  materialChanged(process){
    if(process == 1){
      this.materialsList.push({id:'', name:'',amount:0});
      this.materialCount++;
    }
    else{
      this.materialsList.splice(this.materialsList.length-1, this.materialsList.length);
      if(this.materialCount > 0)
        this.materialCount--;
    }
  }
  modalOpen(key){
    this.materialsList.splice(0, this.materialsList.length);
    this.products.forEach(element => {
      if(element.key == key){
        this.group = element.payload.val().group;
        this.name = element.payload.val().name;
        this.price = element.payload.val().price;
        this.prodCount = element.payload.val().prodCount;
        this.kdv = element.payload.val().kdv;
        this.photo = element.payload.val().photo;
        this.materialCount = element.payload.val().materialCount;
        if(element.payload.val().material != undefined)
          this.materialsList = element.payload.val().material;
      }
    });
    this.costUpdate();
    if(this.keys != undefined)
      this.db.database.ref('/products/'+this.keys).update({cost:this.cost});
    this.keys = key;
  }
  deleteProduct(key){
    this.db.list('/products/'+key).remove();
  }
  addProduct(name, price, kdv, group, photo){
    this.db.list('/products').push({name:name,price:price,cost:this.cost,kdv:kdv,kdvPrice:parseFloat(price)*(1+parseFloat(kdv)/100),group:group,photo:photo,stock:0,cafe1Stock:0,cafe2Stock:0,materialCount:this.materialCount, prodCount:this.prodCount,material:this.materialsList});
    this.name = "";
    this.price = "";
    this.kdv = "";
    this.prodCount = 1;
    this.group = "";
    this.photo = "";
    this.materialCount = 0;
  }
  clear(){
    this.name = "";
    this.price = "";
    this.kdv = "";
    this.prodCount = 1;
    this.group = "";
    this.photo = "";
    this.materialCount = 0;
  }
  editProduct(name, price, kdv, group, photo){
    this.db.database.ref('/products/'+this.keys).update({name:name, price:price,kdv:kdv,kdvPrice:parseFloat(price)*(1+parseFloat(kdv)/100),cost:this.cost,group:group, photo:photo,materialCount:this.materialCount,prodCount:this.prodCount,material:this.materialsList});
    this.largeModal.hide();
    this.name = "";
    this.price = "";
    this.prodCount = 1;
    this.kdv = "";
    this.group = "";
    this.photo = "";
    this.materialCount = 0;
  }
  selectMaterial(i,arr){
    this.cost = 0;
    const [id,name] = arr.split("***");
    this.materialsList[i].id = id;
    this.materialsList[i].name = name;
    this.materialsList.forEach(x=>{
      this.products.forEach(element => {
        if(element.key == x.id){
          this.cost += x.amount * element.payload.val().cost;
        }        
      });
    });
  }
  costUpdate(){
    this.cost = 0;
    this.materialsList.forEach(x=>{
      this.products.forEach(element => {
        if(element.key == x.id){
          this.cost += x.amount * element.payload.val().cost;
        }        
      });
    });
  }
  cancel(){
    this.name = "";
    this.price = "";
    this.kdv = "";
    this.prodCount = 1;
    this.group = "";
    this.photo = "";
    this.materialCount = 0;
    this.largeModal.hide();
  }

  ngOnInit(): void {
  }
}
