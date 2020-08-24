import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {
      '_id': "0",
      'poster': "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
      'title': "Batman",
      'type': "movie",
      'year': "1989"
    },
    {
      '_id': "1",
      'poster': "https://m.media-amazon.com/images/M/MV5BZTAyZDQzODYtNDA1ZS00YTUzLWE1Y2EtN2U5YzNkOTkzMDA1XkEyXkFqcGdeQXVyNjIzMjM5NTQ@._V1_SX300.jpg",
      'title': "O Coringa do Cinema",
      'type': "movie",
      'year': "2019"
    }

  ]

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getId(_id: string): Movie | null {
    return this.movies.find(element => element._id == _id);
  }
}
