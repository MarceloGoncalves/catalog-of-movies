import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-actors-detail',
    template: `
        <mat-card class="card m20">
            <mat-card-header>
                <mat-card-title>Actors</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p>
                    {{actors}}
                </p>
            </mat-card-content>
        </mat-card>`,
    styles: ['.m20{margin:12px;}','.card {max-width: 600px;}']
})
export class ActorsDetailComponent {

    @Input() actors:string;

}