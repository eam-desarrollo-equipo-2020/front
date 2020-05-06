import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // public isLogged: false;
  // public nombreUsuario: string;
  // public emailUsuario: string;

  constructor(public authService: AuthService,    private toastr:ToastrService,  
    ) { }

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
  alert(){
    this.toastr.success('Vuelve Pronto','success',{
      timeOut:100,
      progressBar:true
    });
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
    this.alert();
    this.authService.logout();
    location.reload();
    
  }

}
