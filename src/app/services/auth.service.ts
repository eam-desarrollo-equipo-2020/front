import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserInterface } from "../models/user-interface";
// import { map } from "rxjs/operators";
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private htttp: HttpClient
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuth() {
    // return this.afAuth.authState.pipe(map(auth => auth));
    return this.afAuth.authState.map(auth => auth);
    // map(auth => auth)
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  // logout() {
  //   let accessToken = localStorage.getItem("accessToken");
  //   const url_api = `http://173.230.136.51:3000/api/logout?access_token=${accessToken}`;
  //   console.log(url_api);
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("currentUser");
  //   return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  // }

}
