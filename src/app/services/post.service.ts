import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../global/variables';
import { HttpRequestService } from './http-request.service';

export class CreatePost {
  "title" : string;
  "details" : string;
  "imdbID" : string;
  "userEmail" : string;
}

export class Post {
  "dateCreated" : any;
  "dateModified" : any;
  "title": string;
  "details": string;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpRequestService : HttpRequestService
  ) { }

  createPost(createPost : CreatePost) : Observable<Post> {
    return this.httpRequestService.httpPost(APP_CONFIG.API_ENDPOINTS.POST.CREATE_POST, createPost);
  }
}
