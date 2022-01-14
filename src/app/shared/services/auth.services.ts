import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public auth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    
    }
    x;
    
    isLoggedIn():boolean{
      this.auth.onAuthStateChanged((credential)=>{
        if(credential){
          this.x = true;
        }
        else{
          this.x = false;
        }
      })
      return this.x;
    }
    signIn(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
        this.ngZone.run(() => {
            if(email == "admin@sks.com"){
              this.router.navigate(['dashboard']);
            }
            else{
              this.router.navigate(['stock']);
            }
        });
        }).catch((error) => {
        window.alert(error.message)
        })
    }
    signOut(){
        this.auth.signOut();
        location.reload();
    }
}