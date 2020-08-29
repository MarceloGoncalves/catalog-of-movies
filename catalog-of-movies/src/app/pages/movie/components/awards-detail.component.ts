import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-awards-detail',
    template: `
        <mat-card class="card m20">      
            <mat-card-content>
                <mat-card-title class="card-text">Awards</mat-card-title>
                    <p class="card-text">
                        {{awards}}
                    </p>
                <br>
            </mat-card-content>
        </mat-card>`,
    styles: [
        '.card-text{font-weight: bold;}',
        '.m20{margin:12px;}',
        '.card {max-width: 600px;}'
    ]
})
export class AwardsDetailComponent {

    @Input() awards: string;

}