import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG } from '../global/variables';

export interface Movie {
  "Poster": string;
  "Title" : string;
  "Type" : string;
  "Year" : string;
  "imdbID" : string;
}

export class FullMovie implements Movie {
  "Title": string;
  "Year": string;
  "Rated": string;
  "Released": string;
  "Runtime": string;
  "Genre": string;
  "Director": string;
  "Writer": string;
  "Actors": string;
  "Plot": string;
  "Language": string;
  "Country": string;
  "Awards": string;
  "Poster": string;
  "Ratings": Array<any>;
  "Metascore": string;
  "imdbRating": string;
  "imdbVotes": string;
  "imdbID": string;
  "Type": string;
  "DVD": string;
  "BoxOffice": string;
  "Production": string;
  "Website": string;
  "Response": string;
}

@Injectable({
  providedIn: 'root'
})
export class OmdbMoviesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  searchMovieByTitle(title : string) : Observable<Movie[]> {
    return this.httpClient.get(APP_CONFIG.OMDB_API.BASE_URL + "/?" + 
    "apikey=" + APP_CONFIG.OMDB_API.API_KEY +
    "&s=" + title).pipe(map((response : any) => {
      return response?.Search as Movie[];
    }));
  }

  getMovieByImdbID(imdbID : string) : Observable<FullMovie> {
    return this.httpClient.get(APP_CONFIG.OMDB_API.BASE_URL + "/?" + 
    "apikey=" + APP_CONFIG.OMDB_API.API_KEY +
    "&i=" + imdbID).pipe(map((response: any) => {
      return response as FullMovie;
    }));
  }
}
