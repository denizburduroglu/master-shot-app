import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OktaAuthService } from '@okta/okta-angular';
import { forkJoin, merge, Observable, of } from 'rxjs';
import { concatMap, map, mergeAll, take, tap } from 'rxjs/operators';
import { FullMovie, OmdbMoviesService } from 'src/app/services/omdb-movies.service';
import { Post, PostService } from 'src/app/services/post.service';

export class UserPost {
  "post" : Post;
  "fullMovie" : FullMovie;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {

  userInformation: any = {

  };

  userPosts: UserPost[] = [];

  constructor(
    private oktaAuthService: OktaAuthService,
    private postServices: PostService,
    private omdbMoviesServices: OmdbMoviesService
  ) { }

  ngOnInit(): void {
    this.setupUserInformation().then(() => {
      this.getUserPosts(this.userInformation['email']);
    })
  }

  async setupUserInformation() {
    await this.oktaAuthService.getUser().then((success) => {
      this.userInformation['email'] = success.email;
    });
  }

  getUserPosts(userEmail: string) {
    this.postServices.getPostsByEmail(userEmail).pipe(
      concatMap((posts : Post[]) : Observable<UserPost[]> => {
        let listOfFullMovieObservables : Observable<UserPost>[] = posts.map((post) : Observable<UserPost> => {
          return this.omdbMoviesServices.getMovieByImdbID(post?.imdbID).pipe(
            map((fm : FullMovie) : UserPost => {
              let userPost : UserPost = {
                "post" : post,
                "fullMovie" : fm
              }

              return userPost;
            })
          )
        });
        return forkJoin(listOfFullMovieObservables);
        
      }),
      tap((val : UserPost[]) => {
        this.userPosts = val;
      }),
      take(1)
    ).subscribe();
  }
}
