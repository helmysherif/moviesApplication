import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  moviesGenres:Genre[] = [];
  tvGenres:Genre[] = [];
  constructor(private moviesService:MoviesService) { }
  ngOnInit(){
    this.getMoviesGenres()
    this.getTvGenres()
  }
  getMoviesGenres()
  {
    this.moviesService.getgenres().subscribe((res) => {
      this.moviesGenres = res;
    })
  }
  getTvGenres()
  {
    this.moviesService.getgenres('tv').subscribe((res) => {
      this.tvGenres = res;
    })
  }
}
