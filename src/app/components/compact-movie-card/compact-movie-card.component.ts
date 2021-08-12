import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { FullMovie } from 'src/app/services/omdb-movies.service';
import { Post } from 'src/app/services/post.service';
import * as _ from 'lodash';

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

  @Input() post : Post | undefined = {
    "dateCreated" : null,
    "dateModified" : null,
    "title": '',
    "details": '',
    "imdbID": '',
    "userEmail": '',
  }

  id = _.uniqueId();
  isShowReadMore = false;
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() { 
    // For user post
    if(document.getElementById(this.id)){
      document.getElementById(this.id)?.classList.add('auto');
      
      let clientHeight = document.getElementById(this.id)?.clientHeight ?? 0;
      let scrollHeight = document.getElementById(this.id)?.scrollHeight ?? 0;
      if(clientHeight < scrollHeight) {
        document.getElementById(this.id)?.classList.add('user-post-overflow');
        this.isShowReadMore = true;
        this.changeDetectorRef.detectChanges();
      }
    }
    
  }

  expandUserPost() {
    if(document.getElementById(this.id)?.classList.contains('show-user-post-overflow')) {
      document.getElementById(this.id)?.classList.remove('show-user-post-overflow')
      document.getElementById(this.id)?.classList.add('auto')
    } else {
      document.getElementById(this.id)?.classList.remove('auto')
      document.getElementById(this.id)?.classList.add('show-user-post-overflow')
    } 
    this.changeDetectorRef.detectChanges();
  }

}
