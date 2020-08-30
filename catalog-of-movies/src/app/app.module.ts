import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { MovieService } from './core/services/movie.service';
import { LoginService } from './core/services/login.service';
import { AuthGuard } from './core/auth.guard';
import { UserService } from './core/services/user.service';

import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
   
    PagesModule


  ],
  providers: [
    MovieService,
    LoginService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
