import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/loginon']);
      // this.flashMensaje.show('Usuario logado correctamente.',
      // {cssClass: 'alert-success', timeout: 4000});
      // this.router.navigate(['/privado']);
    }).catch((err) => {
      // this.flashMensaje.show(err.message,
      // {cssClass: 'alert-danger', timeout: 4000});
      console.log(err)
      this.router.navigate(['/login']);
    });
  }


}
