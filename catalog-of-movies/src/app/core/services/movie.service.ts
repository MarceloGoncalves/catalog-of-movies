import { Injectable } from '@angular/core';
import { Movie } from '../../shared/model/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Key } from '../../../key/key';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = "http://www.omdbapi.com/";
  private key = Key;

  constructor(private http: HttpClient) { }

  searchMovies(title: string, page:number): Observable<{Search: Movie[],totalResults: string}> {
    title = title.trim();
    const options = title ?
      {
        params: new HttpParams()
          .set('s', title)
          .set('type', 'movie')
          .set('page', ''+page)
      } : {};
    //{ [key: string]: Movie[] }

    return this.http.get<{Search: Movie[], totalResults: string}>(this.url + "?apikey=" + this.key, options)
      .pipe(
        map(
          (responseData => {
            const movieArray = [];
            const lengthArray = responseData.totalResults;

            for (const key in responseData.Search) {
              if (responseData.Search) {
                movieArray.push({ ...responseData.Search[key] })
              }
            }

            const response = { 'Search':movieArray, 'totalResults':lengthArray }

            console.log(response);

            return response;
          }

          ),
          catchError(error => {
            return throwError(error);
          })
        )
      )




  }

  getById(id: string): Observable<Movie> {
    id = id.trim();
    const options = id ?
      { params: new HttpParams().set('i', id).set('plot', 'full').set('type', 'movie') } : {};
    return this.http.get<Movie>(this.url + "?apikey=" + this.key, options);
  }
}
