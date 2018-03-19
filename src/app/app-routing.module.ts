import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MoviesComponent } from './components/movies/movies.component';

// adding router for HomeComponent and FavouriteMoviesComponent
const routes :Routes = [
  {path: '', redirectTo:'/movies',pathMatch:'full'},
  {path: 'favourite', component:FavouriteMoviesComponent },
  {path: 'movies', component:MoviesComponent },

];

// import RouterModule and route and routes

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
