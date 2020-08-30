import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../../shared/model/movie.model';


@Component({
    selector:'app-poster-list',
    templateUrl:'./poster-list.component.html' ,
    styleUrls: ['./poster-list.component.scss']
})

export class PosterListComponent implements OnInit {

    @Input('movies') movies:MovieModel

    isLoading: boolean = true;
    title;

    constructor() { }

    ngOnInit() {}

}