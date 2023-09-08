import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import {switchMap } from 'rxjs/operators';
import { GenreDto, Movie, MovieCredits, MovieDto, MovieImage, MovieVideoDto } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseURL:string = 'https://api.themoviedb.org/3';
  apiKey:string = '101b15d060bd4055dbc2e20f259a12be';
  constructor(private http:HttpClient){}
  getMovies(type:string = 'upcoming' , type2 = 'movie' , count:number = 12):Observable<any>
  {
    return this.http.get<MovieDto>(`${this.baseURL}/${type2}/${type}?api_key=${this.apiKey}&language=en-US&page=1`).pipe(switchMap(res => {
      return of(res.results.slice(0 , count));
    }));
  }
  getDetails(id:string , type2 = 'movie'):Observable<any>
  {
    return this.http.get<Movie>(`${this.baseURL}/${type2}/${id}?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  searchMovies(page:number , searchValue?:string , type = 'movie'):Observable<any>
  {
    const uri = searchValue ? `search/${type}` : `${type}/popular`;
    return this.http.get<MovieDto>(`${this.baseURL}/${uri}?api_key=${this.apiKey}&language=en-US&page=${page}&query=${searchValue}`).pipe(switchMap(res => {
      return of(res.results);
    }));
  }
  getVideos(id:string , type2 = 'movie'):Observable<any>
  {
    return this.http.get<MovieVideoDto>(`${this.baseURL}/${type2}/${id}/videos?api_key=${this.apiKey}&language=en-US`).pipe(switchMap(res => {
      return of(res.results);
    }));
  }
  getImages(id:string , type2 = 'movie'):Observable<any>
  {
    return this.http.get<MovieImage>(`${this.baseURL}/${type2}/${id}/images?api_key=${this.apiKey}&language=en-US`)
  }
  getCredits(id:string , type2 = 'movie'):Observable<any>
  {
    return this.http.get<MovieCredits>(`${this.baseURL}/${type2}/${id}/credits?api_key=${this.apiKey}&language=en-US`)
  }
  getsimilar(id:string , type2 = 'movie'):Observable<any>
  {
    return this.http.get<any>(`${this.baseURL}/${type2}/${id}/similar?api_key=${this.apiKey}&language=en-US`)
  }
  getgenres(type2 = 'movie'):Observable<any>
  {
    return this.http.get<GenreDto>(`${this.baseURL}/genre/${type2}/list?api_key=${this.apiKey}&language=en-US`).pipe(switchMap(res => {
      return of(res.genres);
    }));
  }
  getMoviesByGenre(genreID:string , page:number , type2 = 'movie'):Observable<any>
  {
    return this.http.get<MovieDto>(`${this.baseURL}/discover/${type2}?with_genres=${genreID}&api_key=${this.apiKey}&language=en-US&page=${page}`).pipe(switchMap(res => {
      return of(res.results);
    }));
  }
}
