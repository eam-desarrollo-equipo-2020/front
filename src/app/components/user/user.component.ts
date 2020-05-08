import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private toastr:ToastrService,  
    public authService: AuthService,
    public router: Router
  ) { }

  public user: UserInterface = {
    email: "",
    pwd: ""
  };

  ngOnInit(): void {
  }
  alert(){
    this.toastr.success('Registrado Correctamente','success',{
      timeOut:1000,
      progressBar:true
    });
  }

  onRegister(): void {
    this.authService
      .registerUser(this.user.email, this.user.pwd)
      .subscribe(
        data => {
          this.alert();
          this.authService.setUser(data.user);
          // accessToken
          const token = data.accessToken;
          this.authService.setToken(token);
          this.router.navigate(['/login']);
          // location.reload();
        },
      );
  }

}
