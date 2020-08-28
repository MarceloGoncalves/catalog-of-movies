import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';


@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            {
                path: '', component: LoginPageComponent
            }
        ])
    ]
})

export class LoginModule { }