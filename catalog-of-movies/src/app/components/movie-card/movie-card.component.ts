import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../../shared/model/movie.model';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { UserModel } from '../../shared/model/user.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls:['./movie-card.component.scss'],
    animations: [
        trigger('fadeAnimation', [
          state('in', style({ opacity: 1 })),
          transition(':enter', [
            style({ opacity: 0 }),
            animate(700)
          ]),
          transition(':leave',
            animate(0, style({ opacity: 0 })))
        ])
      ]
})

export class MovieCardComponent implements OnInit {

    @Input('movie') set setMovie(mov: MovieModel) {
        this.movie = mov;
        this.isLogged = !!this.userService.user.value;
        if (this.isLogged && this.movie) {
            this.user = this.userService.user.value
            this.myFavorites();
        }

    }

    movie: MovieModel
    isLogged: boolean;
    isFavorit: boolean;
    user: UserModel = new UserModel();


    constructor(
        private router: Router,
        private userService: UserService) {
    }


    ngOnInit(): void {

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
                this.userService.user.next(this.user);
            }
        } else {
            this.isFavorit = false;
            this.user.favorites = this.user.favorites.filter(id => id !== this.movie.imdbID);
            this.userService.user.next(this.user);
        }

    }

    private myFavorites() {
        this.isFavorit = !!this.user.favorites.find(elem => elem == this.movie.imdbID)
    }

}

