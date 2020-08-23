import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { MoviePageComponent } from './pages/movie/movie-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'movie/:id', component:MoviePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
