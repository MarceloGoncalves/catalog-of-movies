import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {
 
  movies: Movie[];
  isLoading: boolean = true;
  title;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      if (this.title) {
        this.movieService.searchMovies(this.title).subscribe(
          (res: Movie[] ) => {
            if (+res.length > 0) {
              this.movies = res
            }
            this.isLoading = false;
          }
        )
      }
    });
  }
}
