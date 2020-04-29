import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface';
import { isError } from 'util';
// import {FlashMessagesService} from 'angularfire2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    // public flashMensaje: FlashMessagesService
  ) { }

  private user: UserInterface;

  ngOnInit(): void {
  }

  onSubmitLogin() {
    return this.authService.loginuser(this.user.email, this.user.password)
      .subscribe(
        data => {
          this.authService.setUser(data.user);
          const token = data.id;
          this.authService.setToken(token);
          this.router.navigate(['/home']);
        },
        error => this.onIsError()
      );

    /*  this.authService.loginEmail(this.email, this.password)
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


}
