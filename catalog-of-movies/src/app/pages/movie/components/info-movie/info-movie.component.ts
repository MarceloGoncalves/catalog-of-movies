import { Component, OnInit, Input } from '@angular/core';

import {Movie} from '../../../../shared/model/movie.model'
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
  movie:Movie = new Movie();;

  @Input('id') movieID:string;
  constructor(private movieService: MovieService){
  }


  ngOnInit(): void {
    this.movieService.getById(this.movieID)
    .subscribe(
      res => {
        this.movie = res;
        console.log(this.movie);
      }
    )
  }

  onClickFav(){
    
  }

}
