import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module'

import { MoviePageComponent } from './movie-page.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component'
import { MovieListPageComponent } from './components/movie-list/movie-list-page.component'

import { TitleDetailComponent } from './components/title-detail/title-detail.component';
import { DatasheetDetailComponent } from './components/datasheet-detail/datasheet-detail.component';
import { AwardsDetailComponent } from './components/awards-detail/awards-detail.component';

@NgModule({
    declarations: [
        MovieListPageComponent,
        MoviePageComponent,

        DetailMovieComponent,
        TitleDetailComponent,
        DatasheetDetailComponent,
        AwardsDetailComponent

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