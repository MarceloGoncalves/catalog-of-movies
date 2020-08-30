export interface MovieModel {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Actors: string;
    Plot: string;
    imdbRating: string;
    Runtime:string;
    Genre:string;
    Director:string;
    Writer:string;
    Awards:string;
}

export class MovieModel {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Actors: string;
    Plot: string;
    imdbRating: string;
    Runtime:string;
    Genre:string;
    Director:string;
    Writer:string;
    Awards:string;
    constructor() { }
}
