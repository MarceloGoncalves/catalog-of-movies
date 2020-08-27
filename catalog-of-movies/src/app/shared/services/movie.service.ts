import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Key } from '../../key/key';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = "http://www.omdbapi.com/";
  private key = Key;

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<{ [key: string]: Movie[] }> | any {
    title = title.trim();
    const options = title ?
      { params: new HttpParams()
        .set('s', title)
        .set('type','movie')
        .set('page','1') } : {};

    return this.http.get<{ [key: string]: Movie[] }>(this.url + "?apikey=" + this.key, options)
      .pipe(
        map(
          (responseData) => {
            const movieArray = [];
            for (const key in responseData.Search) {
              if (responseData.Search) {
                movieArray.push({ ...responseData.Search[key] })
              }
            }
            return movieArray;
          }
        ),
        catchError(error => {
          return throwError(error);
        })
      )
  }

  getById(id: string):Observable<Movie> {
    id = id.trim();
    const options = id ?
      { params: new HttpParams().set('i', id).set('plot','full').set('type','movie')} : {};
    return this.http.get<Movie>(this.url + "?apikey=" + this.key, options);
  }
}
