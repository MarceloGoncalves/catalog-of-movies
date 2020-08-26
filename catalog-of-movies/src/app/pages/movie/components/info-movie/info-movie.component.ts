import { Component, OnInit, Input } from '@angular/core';

import {Movie} from '../../../../shared/model/movie.model'
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
  movie:Movie;

  @Input('id') movieID:string;
  constructor(private movieService: MovieService){
    this.movie= new Movie();
  }


  ngOnInit(): void {
    this.movieService.getById(this.movieID)
    .subscribe(
      res => {
        
        this.movie = res;
        console.log(this.movie.Actors);
      }
    )
  }

  onClickFav(){
    
  }

}
