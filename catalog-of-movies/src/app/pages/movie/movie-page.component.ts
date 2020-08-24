import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { Movie } from 'src/app/shared/model/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, AfterViewInit, OnDestroy {
  movie: Movie = { '_id': "", 'poster': "", 'title': "asd", 'type': "", 'year': "" };
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngAfterViewInit(): void {

  }



  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const mov: Movie = this.movieService.getId(params['id']);
      console.log(this.movieService.getId(params['id']));
      if(mov){
        this.movie = mov;
      }

    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
