import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { MoviePageComponent } from './pages/movie/movie-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { MovieListPageComponent } from './pages/movie/components/movie-list/movie-list-page.component';
import { FavotitePageComponent } from './pages/favorite/favotite-page.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'movie/:id',
  component:MoviePageComponent},
  {path:'movie/movie-list/:title', component:MovieListPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'favorite',canActivate:[AuthGuard], component:FavotitePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
