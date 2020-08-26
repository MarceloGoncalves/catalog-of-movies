import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCard implements OnInit {
  @Input() movie:Movie;
  isLogged: boolean;
  
  isFavorit:boolean;

  constructor(private router:Router,
    private loginService: LoginService) {

   }

  ngOnInit(): void {
    this.loginService.isLogged.subscribe(
      res =>{
        this.isLogged = res;
      }
    )
  }

  onClickImage(){
    this.router.navigate(['/movie', this.movie.imdbID]);
  }

  onClickFavorite(){

  }
  


}
