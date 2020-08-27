import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { User } from 'src/app/shared/model/user.model';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCard implements OnInit, OnDestroy {

  @Input() movie: Movie;


  isLogged: boolean;
  isFavorit: boolean;
  user: User = new User();

  constructor(
    private router: Router,
    private loginService: LoginService) {
  }


  ngOnInit(): void {
    this.isLogged = !!this.loginService.user.value;
    if (this.isLogged) {
      this.user = this.loginService.user.value
    }
  }

  onClickImage() {
    this.router.navigate(['/movie', this.movie.imdbID]);
  }


  onClickFavorite() {
    if (!this.isFavorit) {
      this.isFavorit = true;
      let id = this.movie.imdbID;
      if (id) {
        this.user.favorites.push(id)
        this.loginService.user.next(this.user);
        console.log(this.user);
      }

    }

  }

  ngOnDestroy(): void {
  }



}
