import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'favorite', loadChildren: './pages/favorite/favorite.module#FavoriteModule', canActivate: [AuthGuard] },
  { path: 'movie', loadChildren: './pages/movie/movie.module#MovieModule' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
