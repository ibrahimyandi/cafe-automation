import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    data: {
      title: 'groups'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class stockRoutingModule {}
