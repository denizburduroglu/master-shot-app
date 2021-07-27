import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { APP_CONFIG } from 'src/app/global/variables';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(
    private httpRequestService: HttpRequestService,
    private oktaAuthService: OktaAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  getWeather() {
    this.httpRequestService.httpGet(APP_CONFIG.API_ENDPOINTS.WEATHER_FORECAST).subscribe((success) => {
      console.log(success);
    }, (error) => {
      console.error(error);
    });
  }

  async logout() {
    await this.oktaAuthService.signOut();
    this.router.navigateByUrl('/login');
  }
}
