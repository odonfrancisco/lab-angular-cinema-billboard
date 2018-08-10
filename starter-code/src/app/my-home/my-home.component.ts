import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<any>;

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies()
  }

  viewDetails(id){
    this.router.navigate(['movie', id])
  }

}
