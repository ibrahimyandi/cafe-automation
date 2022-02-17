import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.services';
import { AngularFireAuth } from '@angular/fire/auth';

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
        if(this.user.search("cafe") != -1 || this.user.search("stock") != -1){
          navItems.splice(0,1);
          router.navigate(["/stock"]);
        }
        if(this.user.search("cafe1") != -1){
          navItems.splice(7,3);
        }
        if(this.user.search("cafe2") != -1){
          navItems.splice(4,3);
        }
        if(this.user.search("stock") != -1){
          navItems.splice(4,9);
        }
      }
    })
  }
 
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
}
