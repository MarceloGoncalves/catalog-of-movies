import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {FavoritePageComponent} from './favorite-page.component';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations:[
        FavoritePageComponent
    ],
    imports:[
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            {
              path: '',
              component: FavoritePageComponent
            }
          ]),
    ],
    exports:[
        FavoritePageComponent
    ]

})
export class FavoriteModule{}