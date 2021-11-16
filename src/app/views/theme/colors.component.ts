import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  key;
  name;
  price;
  group;
  photo;
  groups;
  products;
  constructor(private db: AngularFireDatabase,) {
    db.list('/groups').valueChanges().subscribe(i => {
      this.groups = i;
    });
    db.list('/products').valueChanges().subscribe(i => {
      this.products = i;
      console.log(i);
    })
  }

  addProduct(name, price, group, photo){
    this.db.list('/products').push({name:name,price:price,group:group,photo:photo,stock:0});
  }
  ngOnInit(): void {
  }
}
