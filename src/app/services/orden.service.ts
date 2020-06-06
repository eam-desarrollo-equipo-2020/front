import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { ProductoInterface } from 'src/app/models/producto';
import { OrdenInterface } from '../Models/orden';



@Injectable({
    providedIn: 'root'
})
export class OrdenService {

    public url: string;

    constructor(private _http: HttpClient, private authService: AuthService) {
        this.url = Global.url;
    }



    headers: HttpHeaders = new HttpHeaders(

        { 'Content-Type': 'application/json', 'token': this.authService.getToken() }
    );



    createOrden(
        name: string,
        client: string,
        responsible: string,
        total: Number,
        status: boolean,
        detail: any
        ): Observable<any> {
        console.log("entre al servicio");
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);
        const url_api = `http://173.230.136.51:3000/api/create-order`;
        console.log(url_api);
        console.log(this.headers);
        return this._http.post<OrdenInterface>(url_api, { name,client,responsible,total,status,detail }, { headers: this.headers }).pipe(map(data => data));
    }

    getListProduct() {
        let accessToken = localStorage.getItem("accessToken");
        //    console.log(accessToken);
        const url_api = `http://173.230.136.51:3000/api/list-product`;
       // console.log(url_api);
        //console.log(this.headers);
        return this._http.post<ProductoInterface>(url_api, { headers: this.headers }).pipe(map(data => data));


    }
}