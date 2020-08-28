export interface MovieModel {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Actors: string;
    Plot: string;
    imdbRating: string;
}

export class MovieModel {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Actors: string;
    Plot: string;
    imdbRating: string;
    constructor() { }
}
