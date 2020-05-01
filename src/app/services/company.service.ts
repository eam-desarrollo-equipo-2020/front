import{Injectable} from '@angular/core';
import{Company} from '../Models/company';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';



@Injectable()
export class CompanyService{

    public url:string;

    constructor(
private _http:HttpClient
    ){
        this.url = Global.url;
    }

    holaMundo(){
        return 'hola mundooo';
    }

    pruebas(){
        return 'soy el servicio';
    }



   // getCompany():Observable<any>{
      //  return this._http.get(this.url+'create-company');
    //}


    create(company):Observable<any>{
        let params = JSON.stringify(company);
        let headers = new HttpHeaders().set('Content-Type',' application/json');

        return this._http.post(this.url+'create-company',params,{headers:headers});
    }
}
