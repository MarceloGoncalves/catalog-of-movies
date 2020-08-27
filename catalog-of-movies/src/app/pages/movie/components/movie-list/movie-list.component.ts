import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: {[key:string]:Movie[]};
  isLoading: boolean = true;
  private title;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      if (this.title) {
        this.movieService.searchMovies(this.title).subscribe(
          (res:{[key:string]:Movie[]}) => {
            this.movies = res
            this.isLoading = false;
            console.log(this.movies)
          }
        )

      }
    });
  }

}
