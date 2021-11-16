import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {

  constructor(private angularFireDB: AngularFireDatabase,) {
  }

  addGroup(name){
    this.angularFireDB.list('/groups').push({name:name});
  }

}
