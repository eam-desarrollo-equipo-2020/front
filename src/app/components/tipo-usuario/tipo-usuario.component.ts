import { Component, OnInit } from '@angular/core';
import { TipoUsuarioService } from 'src/app/services/tipo-usuario.service';
import { TipoUsuarioInterface } from 'src/app/models/tipoUsuario';
@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {

  public status: string;

  constructor(

    public authService: TipoUsuarioService,

  ) {
   
  }

  public cate: TipoUsuarioInterface = {
    name: "",
    description: ""
  };

  ngOnInit() {
    
  }
  

  onSubmit(): void {
    this.authService.createCate(this.cate.name, this.cate.description)
      .subscribe(
        response => {
          if (response.status == 'success') {
            console.log("this.tipo-usuario")
            this.status = 'success ';
            console.log(response);
            location.reload();
          } else {
            this.status = 'error'
          }
        },
        error => {
          console.log(error);
          this.status = 'error';
        }
      )
  }
}

