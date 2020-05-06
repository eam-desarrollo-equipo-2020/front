import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PerfilInterface } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/services/perfil.service';
import { Location } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public status: string;

  constructor(
    private toastr: ToastrService,
    public authService: PerfilService,
    private location: Location
  ) { }

  alert() {
    this.toastr.success('Registrado Correctamente', 'success', {
      timeOut: 100,
      progressBar: true
    });
    location.reload();
  }

  alert2() {
    this.toastr.error(' No se pudo registrar', 'Error !', {
      timeOut: 100,
      progressBar: true
    });
  }

  public perfil: PerfilInterface = {
    name: "",
    id_card: null,
    phone: "",
    city: "",
    birth_date: null
  };

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.authService.createPerfil(this.perfil.name, this.perfil.id_card, this.perfil.phone, this.perfil.city, this.perfil.birth_date)
      .subscribe(
        data => {
          if (data.status == 'success') {
            console.log("this.perfilny")
            this.alert();
            this.status = 'success ';
            console.log(data);
          } else {
            this.status = 'error'
            this.alert2;
          }
        },
        error => {
          console.log(error);
          this.status = 'error';
        }
      )

  }

}
