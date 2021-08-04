import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { CreatePost, PostService } from 'src/app/services/post.service';
import { catchError, take, tap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-foundation';
import { FullMovie, Movie, OmdbMoviesService } from 'src/app/services/omdb-movies.service';
import { OktaAuthService } from '@okta/okta-angular';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent implements OnInit {

  moviesArray : Movie[] = [];
  selectedMovie : FullMovie | null = null;

  modalRef: BsModalRef = new BsModalRef;

  createPostFormGroup : FormGroup = new FormGroup( {
    title: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    imdbID: new FormControl('', Validators.required)
  });

  movieSearchFormGroup : FormGroup = new FormGroup({
    title: new FormControl('')
  });
  constructor(
    private postService: PostService,
    private modalService: BsModalService,
    private oktaAuthService: OktaAuthService,
    private omdbMoviesService: OmdbMoviesService
  ) { }

  ngOnInit(): void {
  }

  submitPostFormGroup() {
    this.oktaAuthService.getUser().then((success) => {
      this.postService.createPost(
          {
            "title" : this.createPostFormGroup.controls.title.value,
            "details" : this.createPostFormGroup.controls.details.value,
            "imdbID" : this.createPostFormGroup.controls.imdbID.value,
            "userEmail" : success.email
          } as CreatePost
        ).pipe(
        tap((value) => {
          console.log(value);
        }),
        catchError(err => {
          throw 'error in creating post. Details: ' + err;
        }),
        take(1)
      ).subscribe();
    });
    
  }

  openSearchMovieModal(template : TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'large' });
  }

  searchMovie() {
    this.omdbMoviesService.searchMovieByTitle(this.movieSearchFormGroup.controls.title.value).pipe(
      tap((movieArray : Movie[]) => {
        this.moviesArray = movieArray;
        console.log(this.moviesArray);
      }),
      take(1)
    ).subscribe();
  }

  addMovieToCreatePost(movie : Movie) {
    this.omdbMoviesService.getMovieByImdbID(movie.imdbID)
    .pipe(
      tap((value: FullMovie) => {
        this.selectedMovie = value;
      }),
      take(1)
    )
    .subscribe();
    this.createPostFormGroup.controls.imdbID.setValue(movie.imdbID);
    this.modalRef.hide();
  }
}
