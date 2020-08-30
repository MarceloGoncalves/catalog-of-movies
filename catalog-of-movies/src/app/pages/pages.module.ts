import {NgModule} from '@angular/core';

import { HomeModule } from './home/home.module';
import { FavoriteModule } from './favorite/favorite.module';
import { LoginModule } from './login/login.module';
import { MovieModule } from './movie/movie.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    imports:[
        ComponentsModule,
        HomeModule,
        FavoriteModule,
        LoginModule,
        MovieModule
    ],
    exports:[
        ComponentsModule,
        HomeModule,
        FavoriteModule,
        LoginModule,
        MovieModule
    ]


})
export class PagesModule{}
