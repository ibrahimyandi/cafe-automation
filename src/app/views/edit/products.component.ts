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
  name=null;
  price=null;
  group=null;
  photo=null;
  groups=null;
  products;
  modalDetail = [];
  keys;
  constructor(private db: AngularFireDatabase,) {
    db.list('/groups').valueChanges().subscribe(i => {
      this.groups = i;
    });
    db.list('/products').snapshotChanges().forEach(i=>{
      this.products = i;
    });
  }
  modalOpen(key){
    this.db.list('/products/'+key).valueChanges().forEach(x=> {
      this.modalDetail = x;
      this.group = x[0];
      this.name = x[1];
      this.photo = x[2];
      this.price = x[3];
    });
    this.keys = key;
  }
  deleteProduct(key){
    this.db.list('/products/'+key).remove();
  }
  addProduct(name, price, group, photo){
    this.db.list('/products').push({name:name,price:price,group:group,photo:photo,stock:0});
    this.name = "";
    this.price = "";
    this.group = "";
    this.photo = "";
  }
  clear(){
    this.name = "";
    this.price = "";
    this.group = "";
    this.photo = "";
  }
  editProduct(name, price, group, photo){
    this.db.database.ref('/products/'+this.keys).update({name:name, price:price, group:group, photo:photo, stock:0});
    this.largeModal.hide();
  }
  ngOnInit(): void {
  }
}
