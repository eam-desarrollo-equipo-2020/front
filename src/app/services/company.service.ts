import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { CompanyInterface } from 'src/app/models/company';



@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    public url: string;

    constructor(private _http: HttpClient, private authService: AuthService) {
        this.url = Global.url;
    }

    // public selectCompa: Company = {
    //     id_company: "",
    //     razon_social: "",
    //     ciudad: "",
    //     departamento: "",
    //     objeto_social: "",
    //     representante_legal: ""
    // };

    headers: HttpHeaders = new HttpHeaders(
        // Authorization: this.authService.getToken(),
        
        {'Content-Type': 'application/json', 'token': this.authService.getToken() }
    );

    // headers.set('Content-Type','application/json');
    // headers.set('token',this.authService.getToken());

    // holaMundo() {
    //     return 'hola mundooo';
    // }

    // pruebas() {
    //     return 'soy el servicio';
    // }



    // getCompany():Observable<any>{
    //  return this._http.get(this.url+'create-company');
    //}

    // id_company: string,
    //     razon_social: string,
    //     ciudad: string,
    //     departamento: string,
    //     objeto_social: string,
    //     representante_legal: string

    // empresa: CompanyInterface


    createComp(id_company: string,
        razon_social: string,
        ciudad: string,
        departamento: string,
        objeto_social: string,
        representante_legal: string): Observable<any> {
        console.log("entre al servicio");
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);
        // console.log(this.authService.getToken());
        // const token = this.authService.getToken();
        // let params = JSON.stringify(company);
        // let headers = new HttpHeaders().set('Content-Type', ' application/json');
        // console.log("token");
        // console.log(token);
        // console.log("despues de params");
        // ?access_token=${accessToken}
        const url_api = `http://173.230.136.51:3000/api/create-company`;
        console.log(url_api);
        console.log(this.headers);
        // console.log("URL del coso a la BD");
        // console.log(this._http.post<CompanyInterface>(url_api, { id_company, razon_social, ciudad, departamento, objeto_social, representante_legal }, { headers: this.headers }));
        return this._http.post<CompanyInterface>(url_api, { id_company, razon_social, ciudad, departamento, objeto_social, representante_legal }, { headers: this.headers }).pipe(map(data => data));
        // .pipe(map(data => data))
        // return this._http.get("http://173.230.136.51:3000/api/create-company", {headers:header});
    }
    // }
}
