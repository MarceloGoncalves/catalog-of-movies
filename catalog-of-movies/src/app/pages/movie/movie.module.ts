import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module'

import { MoviePageComponent } from './movie-page.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component'
import { MovieListPageComponent } from './components/movie-list/movie-list-page.component'

import { TitleDetailComponent } from './components/title-detail.component';
import { ActorsDetailComponent } from './components/actors-detail.component';

@NgModule({
    declarations: [
        MovieListPageComponent,
        MoviePageComponent,

        DetailMovieComponent,
        TitleDetailComponent,
        ActorsDetailComponent

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