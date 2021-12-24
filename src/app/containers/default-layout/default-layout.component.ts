import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.services';
import { AngularFireAuth } from '@angular/fire/auth';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  user = null;
  i=0;
  constructor(private router:Router, public authService: AuthService,auth:AngularFireAuth){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.user = user.email;
        navItems.forEach(x=>{
          if(this.user == "sales@sks.com" || this.user == "stock@sks.com"){
            if(x.url == "/dashboard"){
              navItems.splice(this.i,1);
              if(this.user == "sales@sks.com"){
                router.navigate(["sell"]);
              }
            }
            if(this.user == "stock@sks.com"){
              router.navigate(["stock"]);
              if(x.url == "/sell"){
                navItems.splice(this.i,4);
              }
            }
          }
          this.i++;
        })
      }
    })
  }
 
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
}
