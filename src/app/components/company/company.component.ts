import { Component, OnInit } from '@angular/core';
// import { Company } from '../../Models/company';
// import { CompanyService } from '../../services/company.service';
import { error } from 'protractor';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyInterface } from 'src/app/models/company';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  // providers: [CompanyService],
})
export class CompanyComponent implements OnInit {
  // public company: CompanyInterface;
  //public company:string;
  public status: string;

  constructor(
    // private _CompanyService: CompanyService,
    public authService: CompanyService,

  ) {
    // this.company = new Company('', '', '', '', '', '');
  }

  // public compa: Company = {
  //   id_company: "",
  //   razon_social: "",
  //   ciudad: "",
  //   departamento: "",
  //   objeto_social: "",
  //   representante_legal: ""
  // };

  ngOnInit() {
    //  console.log(this._CompanyService.holaMundo());
    // console.log(this._CompanyService.pruebas());
    // this._CompanyService.getCompany().subscribe(
    // response => {
    // console.log(response);
    //},
    //error => {
    //console.log(error);
    // z
  }
  //)

  onSubmit(companyForm: NgForm): void {
    console.log(companyForm.value);
    if (companyForm.value.id_company == null) {
      // nuevo
      this.authService.create(companyForm.value).subscribe(empresa => location.reload());
    } else {
      console.log("UPDATE EMPRESA");
    }
    // if (companyForm.value.id_company == null) {
    //   this.authService.create(companyForm.value)
    //     .subscribe(
    //       response => {
    //         if (response.status == 'success') {
    //           console.log("this.company")
    //           // console.log(this.compa)
    //           this.status = 'success ';
    //           // this.compa = response.compa;
    //           // const token = response.id;
    //           // this.authService.setToken(token);
    //           console.log(response);
    //           location.reload();
    //         } else {
    //           this.status = 'error'
    //         }
    //       },
    //       error => {
    //         console.log(error);
    //         this.status = 'error';
    //       }
    //     )
    // NEW
    // this.dataApiService.saveBook(bookForm.value).subscribe(book => location.reload());
    // } else {
    // update
    // }
    // console.log(this.compa)
    // this.authService.create(this.company.id_company, this.company.razon_social, this.company.ciudad, this.company.departamento,
    //   this.company.objeto_social, this.company.representante_legal)
    //   .subscribe(
    //     company => location.reload()
    //   );
  }
}


