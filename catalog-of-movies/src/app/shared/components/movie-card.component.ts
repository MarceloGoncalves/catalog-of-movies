import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/model/movie.model';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/model/user.model';

@Component({
    selector: 'app-movie-card',
    template: `
                <mat-card class="mat-elevation-z4">
                    <mat-card-content>
                        <div fxLayout="column">
                            <div class="pointer" matRipple (click)="onClickImage()" >
                                <img src={{movie.Poster}} alt="Poster of movie {{movie.Title}}">
                            </div>
                            <div fxLayout="row" fxLayoutAlign="start center">
                                <div  class="m5 pointer" *ngIf="isLogged" (click)="onClickFavorite()">
                                    <mat-icon class="fav-icon" *ngIf="!isFavorit">favorite_border</mat-icon>
                                    <mat-icon class="fav-icon favorite" *ngIf="isFavorit">favorite</mat-icon>
                                </div>
                                <div class="rating" fxLayout="row" *ngIf="!!movie.imdbRating" >
                                    <mat-icon style="color:darkorange;">star_rate</mat-icon>
                                    <h3 matTooltip="IMDb Rating">{{movie.imdbRating}}</h3>
                                </div>
                            </div>
                        </div>
                    </mat-card-content>
                </mat-card>
                
    <style>
        .rating{ padding-top: 9.5px;}
        mat-card{ margin: 5px;}
        .favorite{ color:brown }
        .m5{ margin:5px;}
        .pointer:hover{ cursor: pointer; color:brown;}
    </style>`
})

export class MovieCard implements OnInit {

    @Input('movie') set setMovie(mov: Movie) {
        this.movie = mov;
        this.isLogged = !!this.userService.user.value;
        if (this.isLogged && this.movie) {
            this.user = this.userService.user.value
            this.myFavorites();
        }

    }

    movie: Movie
    isLogged: boolean;
    isFavorit: boolean;
    user: User = new User();


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

