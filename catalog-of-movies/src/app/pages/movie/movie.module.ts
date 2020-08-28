import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module'

import { MoviePageComponent } from './movie-page.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component'
import { MovieListPageComponent } from './components/movie-list/movie-list-page.component'

@NgModule({
    declarations: [
        MoviePageComponent,
        InfoMovieComponent,
        MovieListPageComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            
            { path: 'movie-list/:title', component: MovieListPageComponent },
            { path: ':id', component: MoviePageComponent },
            

        ])

    ]
})
export class MovieModule { }