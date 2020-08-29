import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../shared/model/movie.model';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { UserModel } from '../shared/model/user.model';

@Component({
    selector: 'app-movie-card',
    template: `
                <mat-card class="mat-elevation-z4">
                    <mat-card-content>
                        <div fxLayout="column">

                            <div class="pointer" matRipple (click)="onClickImage()" >
                                <img src={{movie.Poster}} alt="Poster of movie {{movie.Title}}">
                            </div>
                            <div class="atr-card">
                                <div class="m5" fxLayout="row" fxLayoutAlign="start" *ngIf="!!movie.Genre">
                                    <h3 matTooltip="IMDb Rating"><strong>Genre: </strong> {{movie.Genre}}</h3>
                                </div>
                                <div fxLayout="row" fxLayoutAlign="space-around start" >
                                    <div  class="pointer" *ngIf="isLogged" (click)="onClickFavorite()">
                                        <mat-icon class="fav-icon" *ngIf="!isFavorit">favorite_border</mat-icon>
                                        <mat-icon class="fav-icon favorite" *ngIf="isFavorit">favorite</mat-icon>
                                    </div>
                                    <div fxLayout="row" fxLayoutAlign="center" *ngIf="!!movie.Runtime">
                                        <mat-icon style="color:darkorange;">access_time</mat-icon>
                                        <h3>{{movie.Runtime}}</h3>
                                    </div>
                                    <div fxLayout="row" fxLayoutAlign="center" *ngIf="!!movie.imdbRating">
                                        <mat-icon matTooltip="IMDb Rating" style="color:darkorange;">star_rate</mat-icon>
                                        <h3 matTooltip="IMDb Rating">{{movie.imdbRating}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </mat-card-content>
                </mat-card>       
    <style>
        mat-card{ margin: 5px;}
        .favorite{ color:brown }
        .m5{ margin:5px;}
        .pointer:hover{ cursor: pointer; color:brown;}
        .atr-card{
            background:linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 62%, rgba(238,238,238,1) 98%);
        }
    </style>`
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

