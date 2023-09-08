import { Component, OnInit } from '@angular/core';
import { Movie, MovieDto } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies:Movie[] = [];
  upcomingMovies:Movie[] = [];
  topRatedMovies:Movie[] = [];
  tvShows:Movie[] = [];
  constructor(
    private moviesService:MoviesService
  ){}
  ngOnInit(){
    this._getPopularMovies();
    this._getUpcomingMovies();
    this._getTopRatedMovies();
    this._getTvShows();
  }
  private _getPopularMovies()
  {
    this.moviesService.getMovies('popular').subscribe((res:Movie[]) => {
      this.popularMovies = res;
    })
  }
  private _getUpcomingMovies()
  {
    this.moviesService.getMovies('upcoming').subscribe((res:Movie[]) => {
      this.upcomingMovies = res;
    })
  }
  private _getTopRatedMovies()
  {
    this.moviesService.getMovies('top_rated').subscribe((res:Movie[]) => {
      this.topRatedMovies = res;
    })
  }
  private _getTvShows()
  {
    this.moviesService.getMovies('now_playing').subscribe((res:Movie[]) => {
      this.tvShows = res;
    })
  }
}
