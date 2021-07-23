import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(
    private httpRequestService: HttpRequestService
  ) { }

  ngOnInit(): void {
    this.httpRequestService.demoGetAccessToken();
  }

}
