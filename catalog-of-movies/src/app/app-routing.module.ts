import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { MoviePageComponent } from './pages/movie/movie-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { MovieListComponent } from './pages/movie/components/movie-list/movie-list.component';
//import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'movie/:id',
  component:MoviePageComponent},
  {path:'movie/movie-list/:title', component:MovieListComponent},
  {path:'login', component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
