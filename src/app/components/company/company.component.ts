import { Component, OnInit } from '@angular/core';
import {Company} from '../../Models/company';
import {CompanyService} from '../../services/company.service';
import { error } from 'protractor';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers:[CompanyService],
})
export class CompanyComponent implements OnInit {
  public company:Company;
  //public company:string;
  public status:string;

  constructor(
    private  _CompanyService : CompanyService

  ) { 

 this.company = new Company ('','','','','','');
  
  }

  ngOnInit() {
  //  console.log(this._CompanyService.holaMundo());
   // console.log(this._CompanyService.pruebas());
   // this._CompanyService.getCompany().subscribe(
     // response => {
       // console.log(response);
      //},
      //error => {
        //console.log(error);
      }
    //)

    onSubmit(){
    //  console.log(this.company)
      this._CompanyService.create(this.company).subscribe(

        response=>{
   if(response.status ==  'success'){
    this.status='success ';
     this.company= response.company;
     console.log(response);
   }else{
     this.status='error'
   }
        },
        error=>{
         console.log(error);
          this.status = 'error';
       }
     )
    }
  }


