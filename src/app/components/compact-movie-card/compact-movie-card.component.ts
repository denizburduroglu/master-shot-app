import { Component, Input, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { FullMovie, Movie, OmdbMoviesService } from 'src/app/services/omdb-movies.service';
import { Post, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-compact-movie-card',
  templateUrl: './compact-movie-card.component.html'
})
export class CompactMovieCardComponent implements OnInit {

  @Input() movie : FullMovie | undefined = {
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

  @Input() post : Post = {
    "dateCreated" : null,
    "dateModified" : null,
    "title": '',
    "details": '',
    "imdbID": '',
    "userEmail": '',
  }

  constructor() { }

  ngOnInit(): void {}

}
