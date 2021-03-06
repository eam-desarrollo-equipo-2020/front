import { Component, OnInit } from '@angular/core';
import { TipoUsuarioService } from 'src/app/services/tipo-usuario.service';
import { TipoUsuarioInterface } from 'src/app/models/tipoUsuario';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {

  public status: string;
  
  tipoUsuarioData= {} as TipoUsuarioInterface;
 tipoUsuario: TipoUsuarioInterface[] = [];

  constructor(
   private toastr: ToastrService,
    private location: Location,
    public authService: TipoUsuarioService

  ) {
   
  }
 

  alert() {
    this.toastr.success('Registrado Correctamente', 'success', {
      timeOut: 1000,
      progressBar: true
    });
    location.reload();
  }

  alert2() {
    this.toastr.error(' No se pudo registrar', 'Error !', {
      timeOut: 1000,
      progressBar: true
    });
  }
  public cate: TipoUsuarioInterface = {
    name: "",
    description: ""
  };

  ngOnInit() {
  
    this.getListTipoUsuario();
  }
 /**  getListTipoUsuario(){
    this.authService.getListTipoUsuario()
    .subscribe((tipoUsuario: TipoUsuarioInterface) => (this.tipoUsuario = tipoUsuario));
  }*/
  getListTipoUsuario(){
    /**Se llama al metodo de listar definido en el servicio */
    this.authService.getListTipoUsuario().subscribe(
      (data) => { 
        let respuesta: any;
        respuesta = data;
        
      this.tipoUsuario = respuesta.user_types;
       
      },
      (error) => {
        console.log("error en el servicio");
      }
    );
  }


  onSubmit(): void {
    this.authService.createCate(this.cate.name, this.cate.description)
      .subscribe(
        response => {
          if (response.status = 'success') {
            console.log("this.tipo-usuario")
            this.status = 'success ';
            console.log(response);
            this.alert();
          } else {
            this.status = 'error'
            this.alert2();
          }
        },
        error => {
          console.log(error);
          this.status = 'error';
        }
      )
  }
}

