import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginonComponent } from './components/loginon/loginon.component';


const routes: Routes = [{
  path: "home",
  component: HomeComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "loginon",
  component: LoginonComponent
},
{
  path: "",
  redirectTo: "home", pathMatch: "full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
