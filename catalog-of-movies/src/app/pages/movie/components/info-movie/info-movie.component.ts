import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { MovieModel } from '../../../../shared/model/movie.model'
import { MovieService } from 'src/app/core/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit, OnDestroy {

  @Input('id') movieID: string;

  movie: MovieModel = new MovieModel();;
  isLoading: boolean = false;
  subscription = new Subscription()

  constructor(private movieService: MovieService ) {
    
  }



  ngOnInit(): void {

    this.subscription = this.movieService.getById(this.movieID)
      .subscribe(
        movie => {
          this.movie = movie;
          this.isLoading = false;
        }
      )
  }

 
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }



}
