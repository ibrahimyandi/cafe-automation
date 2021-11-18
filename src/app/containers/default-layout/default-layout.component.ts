import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router:Router, public authService: AuthService,){

  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
}
