import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import {  take } from 'rxjs/operators';
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  movies:Movie[] = [];
  searchValue:string | null = null;
  tvID:any;
  constructor(private movieService:MoviesService , private router:ActivatedRoute){}
  ngOnInit(){
    this.router.params.pipe(take(1)).subscribe(({id}) => {
      this.tvID = id;
      if(id)
      {
        this.getTvByGenre(id , 1)
      } else {
        this.getPagedMovies(1);
      }
    })
  }
  getPagedMovies(page:number , searchKeyword?:string)
  {
    this.movieService.searchMovies(page , searchKeyword , 'tv').subscribe((movies:Movie[]) => {
      this.movies = movies;
      console.log(this.movies);
    })
  }
  paginate(e:any)
  {
    if(this.tvID)
    {
      this.getTvByGenre(this.tvID , e.page + 1);
    } else {
      if(this.searchValue)
      {
        this.getPagedMovies(e.page + 1 , this.searchValue);
      } else {
        this.getPagedMovies(e.page + 1);
      }
    }
  }
  valueChange()
  {
    if(this.searchValue)
    {
      this.getPagedMovies(1 , this.searchValue)
    }
  }
  getTvByGenre(id:string , page:number)
  {
    this.movieService.getMoviesByGenre(id , page , 'tv').subscribe(res => {
      this.movies = res;
    })
  }
}
