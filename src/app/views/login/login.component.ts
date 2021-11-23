import { Component, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  errorMessage = "Lütfen giriş yapınız.";
  constructor(private auth:AngularFireAuth, private router:Router,public authService: AuthService,){
  }
  login(email,password){
    this.authService.signIn(email,password);
  }
  onKeydown(event,email,password) {
    if (event.key === "Enter") {
      this.authService.signIn(email,password);
    }
  }
}
