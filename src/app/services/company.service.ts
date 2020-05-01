import { Injectable } from '@angular/core';
// import { Company } from '../Models/company';
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

    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getToken()
    });

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


    create(empresa: CompanyInterface): Observable<any> {
        console.log("entre al servicio");
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);
        // const token = this.authService.getToken();
        // let params = JSON.stringify(company);
        // let headers = new HttpHeaders().set('Content-Type', ' application/json');
        // console.log("token");
        // console.log(token);
        // console.log("despues de params");
        const url_api = `http://173.230.136.51:3000/api/create-company?access_token=${accessToken}`;
        console.log(url_api);
        console.log(empresa);
        return this._http.post<CompanyInterface>(url_api, empresa, { headers: this.headers }).pipe(map(data => data));
        // .pipe(map(data => data))
    }
}
