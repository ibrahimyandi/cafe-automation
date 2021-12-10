import { Component, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'Login.component.html'
})
export class LoginComponent {
  username;
  errorMessage = "Lütfen giriş yapınız.";
  constructor(private auth:AngularFireAuth, private router:Router,public authService: AuthService,){
  }
  login(email,password){
    this.authService.signIn(email,password);
  }
 
}
