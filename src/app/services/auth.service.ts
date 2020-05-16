import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserInterface } from 'src/app/models/user-interface';
import { isNullOrUndefined } from "util";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { Global } from './global';
//import { UserInterface } from "../models/user-interface";
// import { map } from "rxjs/operators";
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string;

  constructor(
    public afAuth: AngularFireAuth,
    private htttp: HttpClient
  ) { this.url = Global.url; }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });
  // ?include=user
  loginuser(email: string, pwd: string): Observable<any> {
    const url_api = "http://173.230.136.51:3000/api/login";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { email, pwd },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
    console.log("SetToken");
    console.log(token);
  }

  getToken() {
    let tmp = localStorage.getItem("accessToken");
    return tmp;
    // return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  /* loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndpwd(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }
 */
  /* getAuth() {
    // return this.afAuth.authState.pipe(map(auth => auth));
    return this.afAuth.authState.map(auth => auth);
    // map(auth => auth)
  } */

  /*  logout() {
     return this.afAuth.auth.signOut();
   } */

  logout() {
    let accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    const url_api = `http://173.230.136.51:3000/api/logout?accessToken=${accessToken}`;
    console.log(url_api);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.put<UserInterface>(url_api, { headers: this.headers });
  }

  // company
  createComp(company): Observable<any> {
    let params = JSON.stringify(company);
    // let headers = new HttpHeaders().set('Content-Type', ' application/json');

    return this.htttp.post(this.url + 'create-company', params, { headers: this.headers });
  }

  // category
  createCate(category): Observable<any> {
    let params = JSON.stringify(category);
    return this.htttp.post(this.url + 'create-prod_cat', params, { headers: this.headers });
  }

  // producto
  createProd(producto): Observable<any> {
    let params = JSON.stringify(producto);
    return this.htttp.post(this.url + 'create-product', params, { headers: this.headers });
  }
//tipo usuario
createTipo(tipo): Observable<any> {
  let params = JSON.stringify(tipo);
  return this.htttp.post(this.url + 'create-tipo', params, { headers: this.headers });
}
//tipo usuario
getListTipoUsuario(tipo): Observable<any> {
  let params = JSON.stringify(tipo);
  return this.htttp.get(this.url + 'user-type',  { headers: this.headers });
}

//listar company
getListCompany(company): Observable<any> {
  let params = JSON.stringify(company);
  return this.htttp.get(this.url + 'list-companies',  { headers: this.headers });
}

  // register user
  registerUser(email: string, pwd: string): Observable<any> {
    const url_api = "http://173.230.136.51:3000/api/register";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { email, pwd },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

}
