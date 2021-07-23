import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../global/variables';
import { MovieCritic } from '../models/MovieCritic';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpRequestService: HttpRequestService
  ) { }

  registerMovieCritic( movieCritic : MovieCritic) : Observable<any> {
    return this.httpRequestService.httpPost(APP_CONFIG.API_ENDPOINTS.MOVIE_CRITIC, movieCritic);
  }
}
