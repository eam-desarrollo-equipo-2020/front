import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';
import { ClientInterface } from 'src/app/models/client';
import { CompanyInterface } from 'src/app/models/company';





@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public status: string;
  companyData = {} as CompanyInterface;
  clienteData = {} as ClientInterface;
  cliente: ClientInterface[] = [];


  constructor(
    private toastr: ToastrService,
    public authService: ClientService
  ) { }

  ngOnInit(): void {
    this.getListCompany();
    this.getClients();
  }
  alert() {
    this.toastr.success('Registrado Correctamente', 'success', {
      timeOut: 1000,
      progressBar: true
    });
  }

  alert2() {
    this.toastr.warning(' No se pudo registrar', 'fallò', {
      timeOut: 1000,
      progressBar: true
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

  getClients() {
    /**Se llama al metodo de listar definido en el servicio */
    this.authService.getListClient().subscribe(
      (data) => {
        let respuesta: any;
        respuesta = data;
        console.log(data);

        this.cliente = respuesta.customers;
        // console.log(this.comapany);



      },
      (error) => {
        console.log("error en el servicio");
      }
    );
  }

  getListCompany() {
    /**Se llama al metodo de listar definido en el servicio */
    this.authService.getListCompany().subscribe(
      (data) => {
        let respuesta: any;
        respuesta = data;

        this.companyData = respuesta.companies;

      },
      (error) => {
        console.log("error en el servicio");
      }
    );
  }


}
