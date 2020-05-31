import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { CategoryInterface } from 'src/app/models/category';


@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    public url: string;

    constructor(private _http: HttpClient, private authService: AuthService) {
        this.url = Global.url;
    }
    
    headers: HttpHeaders = new HttpHeaders(
        {'Content-Type': 'application/json', 'token': this.authService.getToken() }
    );

    createProd(
        name: string,
        detail: string,
        price: number,
        lot: string,
        quantity: number,
        category: string): Observable<any> {
        let accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);

        const url_api = `http://173.230.136.51:3000/api/create-product`;
        console.log(url_api);
        console.log(this.headers);
        return this._http.post<CategoryInterface>(url_api, { name, detail, price, lot, quantity, category }, { headers: this.headers }).pipe(map(data => data));
    }

    getListCategoty() {
        let accessToken = localStorage.getItem("accessToken");
       // console.log(accessToken);
        const url_api = `http://173.230.136.51:3000/api/prod-categories`;
        //console.log(url_api);
        //console.log(this.headers);
        return this._http.get<CategoryInterface>(url_api,  { headers: this.headers }).pipe(map(data => data));


    }

}
