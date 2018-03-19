import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieComponent } from './components/movies/movie-list/movie/movie.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FavouriteMoviesComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
