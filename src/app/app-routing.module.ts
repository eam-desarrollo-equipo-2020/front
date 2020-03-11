import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginonComponent } from './components/loginon/loginon.component';
// import { FlashMessagesModule } from 'angular2-flash-messages';


const routes: Routes = [
  {
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
  // , FlashMessagesModule.forRoot()
  exports: [RouterModule]
})
export class AppRoutingModule { }
