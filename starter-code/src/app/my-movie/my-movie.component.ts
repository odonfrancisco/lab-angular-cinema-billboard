import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie: Object;
  id:Number;
  constructor(private movieService: MovieService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRouter.params
      .subscribe(params => { this.id = params.id})
    this.movie = this.movieService.getMovie(Number(this.id))
  }

  redirect(params){
    this.router.navigate([`${params}`])
  }

}
