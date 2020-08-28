import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/shared/model/movie.model';
import { MovieService } from '../../core/services/movie.service';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {
  movies: MovieModel[] = [];
  isLoading: boolean = true;
  subscription: Subscription;

  constructor(
    private movieService: MovieService,
    private userService: UserService) { }

  ngOnInit(): void {

    let user = this.userService.user.value;
    if (user) {
      user.favorites.forEach(moveID => {
        this.subscription = this.movieService.getById(moveID).subscribe(
          movie => {
            this.movies.push(movie);
          }
        )
      });
    }
    this.isLoading = false;
  }

}
