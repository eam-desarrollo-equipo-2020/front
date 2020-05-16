import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/models/client';
import { ToastrService } from 'ngx-toastr';
import {ClientService } from 'src/app/services/client.service';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public status: string;
  tittle="prueba";
  constructor(
    private toastr:ToastrService,  
    public authService: ClientService,
  ) { }

  ngOnInit(): void {
  }
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

  public cli: ClientInterface = {
    id_card: null,
    name: "",
    company: ""
  };

  onSubmit(): void {
    
    this.authService.createClient(this.cli.id_card, this.cli.name, this.cli.company)
      .subscribe(
        response => {
        
          if (response.status == 'success') {
            this.alert();
            console.log("this.client")
            this.status = 'success ';
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
