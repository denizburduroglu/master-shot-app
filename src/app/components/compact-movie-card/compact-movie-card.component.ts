import { Component, Input, OnInit } from '@angular/core';
import { FullMovie, Movie } from 'src/app/services/omdb-movies.service';

@Component({
  selector: 'app-compact-movie-card',
  templateUrl: './compact-movie-card.component.html'
})
export class CompactMovieCardComponent implements OnInit {

  @Input() movie : FullMovie = {
    "Title": '',
    "Year": '',
    "Rated": '',
    "Released": '',
    "Runtime": '',
    "Genre": '',
    "Director": '',
    "Writer": '',
    "Actors": '',
    "Plot": '',
    "Language": '',
    "Country": '',
    "Awards": '',
    "Poster": '',
    "Ratings": [],
    "Metascore": '',
    "imdbRating": '',
    "imdbVotes": '',
    "imdbID": '',
    "Type": '',
    "DVD": '',
    "BoxOffice": '',
    "Production": '',
    "Website": '',
    "Response": '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
