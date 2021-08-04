import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {

  userInformation: any = {

  };

  constructor(
    private oktaAuthService: OktaAuthService
  ) { }

  ngOnInit(): void {
    this.setupUserInformation();
  }

  setupUserInformation() {
    this.oktaAuthService.getUser().then((success) => {
      this.userInformation['email'] = success.email;
    });
  }
}
