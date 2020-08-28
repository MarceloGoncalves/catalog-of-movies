import { Injectable } from '@angular/core';
import { MovieModel } from '../../shared/model/movie.model';
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

  searchMovies(title: string, page: number): Observable<{ Search: MovieModel[], totalResults: string }> {
    title = title.trim();
    const options = title ?
      {
        params: new HttpParams()
          .set('s', title)
          .set('type', 'movie')
          .set('page', '' + page)
      } : {};

    return this.http.get<{ Search: MovieModel[], totalResults: string }>(this.url + "?apikey=" + this.key, options)
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
            const response = { 'Search': movieArray, 'totalResults': lengthArray }
            return response;
          }

          ),
          catchError(error => {
            return throwError(error);
          })
        )
      )




  }

  getById(id: string): Observable<MovieModel> {
    id = id.trim();
    const options = id ?
      { params: new HttpParams().set('i', id).set('plot', 'full').set('type', 'movie') } : {};
    return this.http.get<MovieModel>(this.url + "?apikey=" + this.key, options);
  }
}
