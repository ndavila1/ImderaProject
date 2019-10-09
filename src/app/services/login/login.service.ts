import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afsAuth: AngularFireAuth) {}

  loginUser(email:string, pass: string){
    return new Promise((resolve,reject) =>{
      this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  logoutUser(){
    return this.afsAuth.auth.signOut();
  }
}
