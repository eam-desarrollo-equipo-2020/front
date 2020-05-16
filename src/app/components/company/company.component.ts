import { Component, OnInit } from '@angular/core';

import { CompanyService } from 'src/app/services/company.service';
import { CompanyInterface } from 'src/app/models/company';
import { ToastrService } from 'ngx-toastr';


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
  tittle="prueba";

  constructor(
    // private _CompanyService: CompanyService,
    private toastr:ToastrService,  
    public authService: CompanyService,

  ) {}

  alert(){
    this.toastr.success('Registrado Correctamente','success',{
      timeOut:1000,
      progressBar:true
    });
  }

  alert2(){
    this.toastr.warning(' No se pudo registrar','fallò',{
      timeOut:1000,
      progressBar:true
    });
  }

  public compa: CompanyInterface = {
    id_company: "",
    razon_social: "",
    ciudad: "",
    departamento: "",
    objeto_social: "",
    representante_legal: ""
  };

  ngOnInit() {
  
  }
  
  limpiarCampos(){

  }

  onSubmit(): void {
    
    this.authService.createComp(this.compa.id_company, this.compa.razon_social, this.compa.ciudad, this.compa.departamento, this.compa.objeto_social, this.compa.representante_legal)
      .subscribe(
        response => {
          this.alert();
          if (response.status == 'success') {
            console.log("this.company")
           
            // console.log(this.compa)
            this.status = 'success ';
            // this.compa = response.compa;
            // const token = response.id;
            // this.authService.setToken(token);
            console.log(response);
            location.reload();
          } else {
            this.status = 'error'
            this.alert2;
          }
        },
        error => {
          console.log(error);
          this.status = 'error';
          this.alert2();
        }
      )
    
  }
}


