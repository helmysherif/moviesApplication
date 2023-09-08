export interface Movie {
  adult: boolean,
  backdrop_path:string,
  id: number,
  original_language: string,
  original_title: string,
  genre_ids: number[] ,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  name?:string;
}
export interface MovieDto{
  page:number;
  results:Movie[];
  total_results:number;
  total_pages:number;
}
export interface MovieVideoDto
{
  id:number;
  results:MovieVideo[]
}
export interface MovieVideo
{
  site:string;
  key:string;
}
export interface MovieImage
{
  backdrops:{file_path:string}[];
}
export interface MovieCredits
{
  cast : {
    name:string;
    profile_path:string;
  }[]
}
export interface Genre
{
  name:string;
  id:string;
}
export interface GenreDto
{
  genres:Genre[]
}
