import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePageComponent
            }
        ]),
    ],
    exports: [
        HomePageComponent
    ]

})
export class HomeModule { }