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

import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { FavoriteModule } from './pages/favorite/favorite.module';
import { LoginModule } from './pages/login/login.module';
import { MovieModule } from './pages/movie/movie.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
    HttpClientModule,

    ComponentsModule,
    SharedModule,
    HomeModule,
    FavoriteModule,
    LoginModule,
    MovieModule


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
