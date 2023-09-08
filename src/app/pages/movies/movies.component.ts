import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import {  take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  movies:Movie[] = [];
  movieID:any;
  searchValue:string | null = null;
  constructor(private movieService:MoviesService , private router:ActivatedRoute){}
  ngOnInit(){
    this.router.params.pipe(take(1)).subscribe(({id}) => {
      this.movieID = id;
      if(id)
      {
        this.getMoviesByGenre(id , 1)
      } else {
        this.getPagedMovies(1);
      }
    })
  }
  getPagedMovies(page:number , searchKeyword?:string)
  {
    this.movieService.searchMovies(page , searchKeyword).subscribe((movies:Movie[]) => {
      this.movies = movies;
    })
  }
  paginate(e:any)
  {
    if(this.movieID)
    {
      this.getMoviesByGenre(this.movieID , e.page + 1);
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
  getMoviesByGenre(id:string , page:number)
  {
    this.movieService.getMoviesByGenre(id , page).subscribe(res => {
      this.movies = res;
    })
  }
}
