import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { TipoUsuarioInterface } from 'src/app/models/tipoUsuario';



@Injectable({
    providedIn: 'root'
})
export class TipoUsuarioService {

    public url: string;

    constructor(private _http: HttpClient, private authService: AuthService) {
        this.url = Global.url;
    }
    
    headers: HttpHeaders = new HttpHeaders(
        {'Content-Type': 'application/json', 'token': this.authService.getToken() }
    );

    createCate(
        name: string,
        description: string): Observable<any> {
            console.log("entre al servicio");
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);

        const url_api = `http://173.230.136.51:3000/api/user-type`;
        console.log(url_api);
        console.log(this.headers);
        return this._http.post<TipoUsuarioInterface>(url_api, { name, description}, { headers: this.headers }).pipe(map(data => data));
    }

    getListTipoUsuario() {
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);

        const url_api = `http://173.230.136.51:3000/api/user-type`;
        console.log(url_api);
        console.log(this.headers);
        return this._http.get<TipoUsuarioInterface>(url_api,  { headers: this.headers }).pipe(map(data => data));


    }

     
}
