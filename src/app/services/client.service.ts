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
export class ClientService {

    public url: string;

    constructor(private _http: HttpClient, private authService: AuthService) {
        this.url = Global.url;
    }



    headers: HttpHeaders = new HttpHeaders(

        { 'Content-Type': 'application/json', 'token': this.authService.getToken() }
    );



    createClient(
        id_card: Number,
        name: string,
        company: string): Observable<any> {
        console.log("entre al servicio");
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);
        const url_api = `http://173.230.136.51:3000/api/customer`;
        console.log(url_api);
        console.log(this.headers);
        return this._http.post<CompanyInterface>(url_api, { id_card, name, company }, { headers: this.headers }).pipe(map(data => data));
    }

    getListCompany() {
        let accessToken = localStorage.getItem("accessToken");
        //    console.log(accessToken);
        const url_api = `http://173.230.136.51:3000/api/list-companies`;
       // console.log(url_api);
        //console.log(this.headers);
        return this._http.get<CompanyInterface>(url_api,  { headers: this.headers }).pipe(map(data => data));


    }
}
    