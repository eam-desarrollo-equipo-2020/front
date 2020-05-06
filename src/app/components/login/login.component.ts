import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import {FlashMessagesService} from 'angularfire2-flash-messages';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class LoginComponent implements OnInit {

  // public email: string;
  // public pwd: string;
  // public urlHome1: '[';
  // public urlHome: '/home';
  // public urlHome3: ']';
  // public urlHomee: "";

  constructor(
    private toastr:ToastrService,  
    public authService: AuthService,
    public router: Router,
    private location: Location,
    private toastr: ToastrService,
    // public flashMensaje: FlashMessagesService
  ) { }

  // goForward() {
    // this.location.go(this.urlHome);
    // location.assign(this.urlHome)
    // location.reload();
  // }

  alert() {
    this.toastr.success('Inicio de Sesión Exitoso!', 'success', {
      timeOut: 100,
      progressBar: true
    });
    // location.reload();
    // this.goForward();
    // this.router.navigate(['/home']);
  }

  public user: UserInterface = {
    email: "",
    pwd: ""
  };
  public isError = false;

  ngOnInit(): void {
  }
  alert(){
    this.toastr.success('Usuario y Contraseña correctos','success',{
      timeOut:1000,
      progressBar:true
    });
  }
  

  alert2(){
    this.toastr.error(' Verifique los Datos Ingresados','fallo',{
      timeOut:1000,
      progressBar:true
    });
  }
  onSubmitLogin(form: NgForm) {
    if (form.valid) {
      console.log(this.user);
      return this.authService
        .loginuser(this.user.email, this.user.pwd)
        .subscribe(
          
          data => {
            this.alert();
            // console.log(data.user.accessToken);
            this.authService.setUser(data.user);
            const token = data.user.accessToken;
            console.log("token en el component");
            console.log(token);
            this.authService.setToken(token);
            this.router.navigate(['/home']);
            this.alert();
            // location.reload();
            this.isError = false;
          },
          error => this.onIsError()
         
        );
        this.alert2();
    } else {
      this.onIsError();
      this.alert2();
    }

    /*  this.authService.loginEmail(this.email, this.pwd)
     .then( (res) => {
       this.router.navigate(['/home']);
       // this.flashMensaje.show('Usuario logado correctamente.',
       // {cssClass: 'alert-success', timeout: 4000});
       // this.router.navigate(['/privado']);
     }).catch((err) => {
       // this.flashMensaje.show(err.message,
       // {cssClass: 'alert-danger', timeout: 4000});
       console.log(err)
       this.router.navigate(['/login']);
     }); */
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


}
