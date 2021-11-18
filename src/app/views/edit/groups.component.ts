import { Component, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'Groups.component.html'
})
export class GroupsComponent {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  groups;
  name;
  modalDetail;
  keys;
  constructor(private db: AngularFireDatabase,) {
    db.list('/groups').snapshotChanges().forEach(i=>{
      this.groups = i;
    });
  }
  modalOpen(key){
    this.db.list('/groups/'+key).valueChanges().forEach(x=> {
      this.modalDetail = x;
      this.name = x[0];
    });
    this.keys = key;
  }
  addGroup(name){
    this.db.list('/groups').push({name:name});
  }
  deleteGroup(key){
    this.db.list('/groups/'+key).remove();
  }
  editGroup(name){
    this.db.database.ref('/groups/'+this.keys).update({name:name});
    this.largeModal.hide();
  }
}
