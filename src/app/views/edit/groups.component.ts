import { Component, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'Groups.component.html'
})
export class GroupsComponent {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  groups;
  products;
  name;
  oldName;
  keys;
  groupName = null;
  constructor(private db: AngularFireDatabase,) {
    db.list('/groups').snapshotChanges().forEach(i=>{
      this.groups = i;
    });
    db.list('/products').snapshotChanges().forEach(i=>{
      this.products = i;
    });
  }
  modalOpen(key){
    this.groups.forEach(x=>{
      if(x.key == key)
        this.name = x.payload.val().name;
    })
    this.oldName = this.name;
    this.keys = key;
  }
  addGroup(name){
    this.db.list('/groups').push({name:name});
  }
  reset(){
    this.groupName = "";
  }
  deleteGroup(key){
    this.db.list('/groups/'+key).remove();
  }
  editGroup(name){
    this.products.forEach(element => {
      if(this.oldName == element.payload.val().group)
        this.db.database.ref("/products/"+element.key).update({group:name});
    });
    this.db.database.ref('/groups/'+this.keys).update({name:name});
    this.largeModal.hide();
  }
}
