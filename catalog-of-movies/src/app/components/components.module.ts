import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { GoBackButtonComponent } from './go-back-button.component';
import { MovieCardComponent } from './movie-card.component';
import { PosterListComponent } from './poster-list.component';
import { MaterialModule } from './angular-material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [

        GoBackButtonComponent,
        MovieCardComponent,
        PosterListComponent,
        MainNavComponent,
        SearchBarComponent

    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    exports: [
        GoBackButtonComponent,
        MovieCardComponent,
        PosterListComponent,
        MainNavComponent,
        MaterialModule,
        SearchBarComponent,
        FormsModule, 
        ReactiveFormsModule
    ]
})
export class ComponentsModule { }