import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<any>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies()
  }

}
