import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms';
// import {FlashMessagesService} from 'angularfire2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  // public email: string;
  // public pwd: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private location: Location
    // public flashMensaje: FlashMessagesService
  ) { }

  public user: UserInterface = {
    email: "",
    pwd: ""
  };
  public isError = false;

  ngOnInit(): void {
  }

  onSubmitLogin(form: NgForm) {
    if (form.valid) {
      console.log(this.user);
      return this.authService
        .loginuser(this.user.email, this.user.pwd)
        .subscribe(
          data => {
            // console.log(data.user.accessToken);
            this.authService.setUser(data.user);
            const token = data.user.accessToken;
            console.log("token en el component");
            console.log(token);
            this.authService.setToken(token);
            this.router.navigate(['/home']);
            // location.reload();
            this.isError = false;
          },
          error => this.onIsError()
        );
    } else {
      this.onIsError();
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
