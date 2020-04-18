import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginonComponent } from './components/loginon/loginon.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
// import { Observable, Subject } from 'rxjs';
// import {FlashMessagesService} from 'angular2-flash-messages';
// import { FlashMessagesModule } from 'angular2-flash-messages';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompanyComponent } from './components/company/company.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LoginComponent,
    HomeComponent,
    LoginonComponent,
    NavbarComponent,
    CompanyComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    // FlashMessagesModule.forRoot()
  ],
  providers: [AuthService, AngularFirestore],
  // ,FlashMessagesService
  bootstrap: [AppComponent]
})
export class AppModule { }
