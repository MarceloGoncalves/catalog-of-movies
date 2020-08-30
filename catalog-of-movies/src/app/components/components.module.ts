import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { GoBackButtonComponent } from './go-back-button/go-back-button.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PosterListComponent } from './poster-list/poster-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
    declarations: [
        GoBackButtonComponent,
        MovieCardComponent,
        PosterListComponent,
        MainNavComponent,
        SearchBarComponent

    ],
    imports: [
        SharedModule,
        
    ],
    exports: [
        GoBackButtonComponent,
        MovieCardComponent,
        PosterListComponent,
        MainNavComponent,
        SharedModule,
        SearchBarComponent,
       
    ]
})
export class ComponentsModule { }