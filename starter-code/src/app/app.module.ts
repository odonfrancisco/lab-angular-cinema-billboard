import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieService } from './services/movie.service';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MyHomeComponent},
  {path: 'movie/:id', component: MyMovieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
