import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APP_CONFIG } from '../global/variables';
import { OktaToken } from '../models/OktaToken';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(
    private httpClient: HttpClient,
    private oktaAuthService: OktaAuthService
  ) {}

  httpGet(path: string) : Observable<any> {
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.oktaAuthService.getAccessToken()
    });
    return this.httpClient.get(environment.API_BASE_URL + path, { headers });
  }
  
  httpPost(path: string, body: any) : Observable<any> {
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.oktaAuthService.getAccessToken()
    });
    return this.httpClient.post(environment.API_BASE_URL + path, body ,  { headers });
  }
}
