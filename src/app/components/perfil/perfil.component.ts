import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  tittle="prueba";

  constructor( private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  alert(){
    this.toastr.success('Registrado Correctamente','success',{
      timeOut:1000,
      progressBar:true
    });
  }

  alert2(){
    this.toastr.error(' No se pudo registrar','fallò',{
      timeOut:1000,
      progressBar:true
    });
  }
}
