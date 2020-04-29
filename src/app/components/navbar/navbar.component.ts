import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // public isLogged: false;
  // public nombreUsuario: string;
  // public emailUsuario: string;

  constructor(public authService: AuthService) { }

  public isLogged = false;

  ngOnInit(): void {

    // if (this.authService.getCurrentUser() === null) {
    //   this.isLogged = false;
    // } else {
    //   this.isLogged = true;
    // }
    // console.log(this.isLogged);

    this.onCheckUser();
    // this.onClickLogout();

    // this.authService.getAuth().subscribe(auth => {
    //   if (auth) {
    //     this.isLogin = true;
    //     this.nombreUsuario = auth.displayName;
    //     this.emailUsuario = auth.email;
    //   } else {
    //     this.isLogin = false;
    //   }
    // });
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
    console.log(this.isLogged);
  }

  onClickLogout(): void {
    this.authService.logout();
    location.reload();
  }

}
