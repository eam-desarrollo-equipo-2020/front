import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { PerfilInterface } from 'src/app/models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private _http: HttpClient,
    private authService: AuthService
  ) { }

  headers: HttpHeaders = new HttpHeaders(
    // Authorization: this.authService.getToken(),
    { 'Content-Type': 'application/json', 'token': this.authService.getToken() }
  );

  createPerfil(
    name: string,
    id_card: Number,
    phone: string,
    city: string,
    birth_date: Date
  ): Observable<any> {
    console.log("entre al servicio");
    let accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    const url_api = `http://173.230.136.51:3000/api/create-profile`;
    console.log(url_api);
    console.log(this.headers);
    return this._http.post<PerfilInterface>(url_api, { name, id_card, phone, city, birth_date }, { headers: this.headers }).pipe(map(data => data));
  }

}
