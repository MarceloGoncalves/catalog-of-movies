import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-detail',
    template: `

        <mat-card class="card m20">
            <mat-card-header>
                <mat-card-title>{{title}}</mat-card-title>
                <mat-card-subtitle>{{year}}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
                <p>{{plot}}</p>
            </mat-card-content>
        </mat-card>
    `,
    styles: ['.white { color: white; }', '.m20{margin:12px;}', '.card {max-width: 600px;}']
})
export class TitleDetailComponent {

@Input() title:string;
@Input() year:string;
@Input() plot:string;

}