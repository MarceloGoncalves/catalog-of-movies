import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-detail',
    template: `

        <mat-card class="card m20">
            <mat-card-content>
                <mat-card-title class="card-text">{{title}}</mat-card-title>
                <mat-card-subtitle class="card-text">{{year}}</mat-card-subtitle>
                <p class="card-text">{{plot}}</p>
            </mat-card-content>
        </mat-card>
    `,
    styles: [
        '.card-text{font-weight: bold;}',
        '.white { color: white; }', 
        '.m20{margin:12px;}', 
        '.card {max-width: 600px;}'
    ]
})
export class TitleDetailComponent {

@Input() title:string;
@Input() year:string;
@Input() plot:string;

}