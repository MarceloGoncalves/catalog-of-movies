import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCard implements OnInit {
  @Input() movie:Movie;
  
  isFavorit:boolean;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickImage(){
    this.router.navigate(['/movie', this.movie._id]);
  }

  onClickFavorite(){

  }


}
