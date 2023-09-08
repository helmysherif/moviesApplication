import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path : 'movies',
    component : MoviesComponent
  },
  {
    path : 'movies/genres/:id',
    component : MoviesComponent
  },
  {
    path : 'tv',
    component : TvShowsComponent
  },
  {
    path : 'tv/genres/:id',
    component : TvShowsComponent
  },
  {
    path : 'genres',
    component : GenresComponent
  },
  {
    path : 'movie/:id',
    component : MovieDetailsComponent
  },
  {
    path : 'tv/:id',
    component : MovieDetailsComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
