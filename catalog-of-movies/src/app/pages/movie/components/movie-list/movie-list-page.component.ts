import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/shared/model/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {

  movies: MovieModel[];
  isLoading: boolean = true;

  title;

  isPagenable = false
  pageLength = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [6, 10];

 
  pageEvent: PageEvent


  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.getData();
  }

  getData(event?: PageEvent) {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      if (this.title) {
        this.movieService.searchMovies(this.title, !!event?event.pageIndex+1:1).subscribe(
          (res) => {
            if (+res.Search.length > 0) {
              this.movies = res.Search.slice(0,!!event?event.pageSize:10)
              this.pageLength = +res.totalResults;
              this.checkPagenable();
            }
            this.isLoading = false;
            
          }
        )
      }
    });
  }


  private checkPagenable() {
    this.pageLength > 10 ? this.isPagenable = true : this.isPagenable = false;
  }
}
