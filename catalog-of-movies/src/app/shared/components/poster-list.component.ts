import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/model/movie.model';


@Component({
    selector:'app-poster-list',
    template: `
    <div fxLayout="row wrap" *ngIf="movies" fxLayoutAlign="none center">
        <app-movie-card *ngFor="let mov of movies" [movie]=mov>  
        </app-movie-card>
    </div>`,
    styles: ['.white { color: white; }']
})

export class PosterListComponent implements OnInit {

    @Input('movies') movies:Movie[];

    isLoading: boolean = true;
    title;

    constructor() { }

    ngOnInit() {}

}