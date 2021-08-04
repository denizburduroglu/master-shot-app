import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/services/omdb-movies.service';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html'
})
export class MoviePosterComponent implements OnInit {
  @Input() poster : string = 'N/A';
  constructor() { }

  ngOnInit(): void {
  }

}
