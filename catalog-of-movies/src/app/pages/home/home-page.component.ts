import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  movies:Movie[];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

}
