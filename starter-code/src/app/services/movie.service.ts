import { Injectable } from '@angular/core';
import { moviesArray } from '../../sample-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<any> = moviesArray
  
  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovie(id){
    return this.movies.filter(e => e.id === id)[0];
  }
}
