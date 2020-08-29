import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-datasheet-detail',
    template: `
        <mat-card class="card m20">      
            <mat-card-content>
                <mat-card-title class="card-text">Actors</mat-card-title>
                    <p class="card-text">
                        {{actors}}
                    </p>
                <br>
                <mat-card-title class="card-text">Director</mat-card-title>
                    <p class="card-text">
                        {{director}}
                    </p>
                <br>
                    <mat-card-title class="card-text">Writer</mat-card-title>
                    <p class="card-text">
                        {{writer}}
                    </p>  
            </mat-card-content>
        </mat-card>`,
    styles: [
        '.card-text{font-weight: bold;}',
        '.m20{margin:12px;}',
        '.card {max-width: 600px;}'
    ]
})
export class DatasheetDetailComponent {

    @Input() actors: string;
    @Input() director: string;
    @Input() writer: string;

}