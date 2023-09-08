import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieCredits, MovieImage, MovieVideoDto } from '../../models/movie';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit , OnDestroy{
  itemID:any;
  itemData:any;
  currentUrl:any;
  moviesVideos:any = [];
  moviesImages:any = [];
  moviesCredits:MovieCredits | null = null;
  similarMovies:any;
  imgSrc='https://image.tmdb.org/t/p/original/';
  constructor(
    private router:ActivatedRoute,
    private moviesService:MoviesService,
    private route:Router
  ) { }
  ngOnDestroy(){

  }
  ngOnInit(){
    this.router.params.pipe(first()).subscribe(({id}) => {
      this.itemID = id;
      this.currentUrl = this.route.url;
      console.log(this.currentUrl);
      if(this.currentUrl == `/tv/${this.itemID}`)
      {
        this.getDetails('tv');
        this.getVideos(this.itemID , 'tv');
        this.getImages(this.itemID , 'tv');
        this.getCredits('tv')
        this.getSimilar('tv')
      } else {
        this.getDetails('movie');
        this.getVideos(this.itemID , 'movie');
        this.getImages(this.itemID , 'movie');
        this.getCredits('movie')
        this.getSimilar('movie')
      }
    })
  }
  getVideos(id:string , type = 'movie')
  {
    this.moviesService.getVideos(id , type).subscribe(res => {
      this.moviesVideos = res;
    })
  }
  getImages(id:string , type = 'movie')
  {
    this.moviesService.getImages(id , type).subscribe(res => {
      this.moviesImages = res.backdrops;
      console.log(this.moviesImages);
    })
  }
  getDetails(type = 'movie')
  {
    this.moviesService.getDetails(this.itemID , type).subscribe(res => {
      this.itemData = res;
      console.log(res);
    })
  }
  getCredits(type = 'movie')
  {
    this.moviesService.getCredits(this.itemID , type).subscribe(res => {
      this.moviesCredits = res
    })
  }
  getSimilar(type = 'movie')
  {
    this.moviesService.getsimilar(this.itemID , type).subscribe(res => {
      this.similarMovies = res
    })
  }
}
