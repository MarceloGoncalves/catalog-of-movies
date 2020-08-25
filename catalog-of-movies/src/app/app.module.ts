import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { HomePageComponent } from './pages/home/home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MainNavComponent } from './core/header/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { MoviePageComponent } from './pages/movie/movie-page.component';
import { InfoMovieComponent } from './pages/movie/components/info-movie/info-movie.component';

import { MovieCard } from './pages/movie/components/movie-card/movie-card.component';

import { MovieService } from './shared/services/movie.service';
import { LoggerService} from './shared/services/logger.service';

import { SearchBarComponent } from './pages/home/components/search-bar/search-bar.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { MovieListComponent } from './pages/movie/components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavComponent,
    MoviePageComponent,
    InfoMovieComponent,
    MovieCard,
    SearchBarComponent,
    LoginPageComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatRippleModule,
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MovieService, 
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
