import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/global/okta-config';
import '@okta/okta-signin-widget/dist/js/okta-sign-in.min';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

declare let OktaSignIn: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  signIn = new OktaSignIn(
    {
      baseUrl: config.oktaDomain,
      el: '#osw-container',
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      authParams: {
        issuer: config.oktaDomain + 'oauth2/default'
      }
    }
  );

  constructor(
    private httpRequestService: HttpRequestService,
    private oktaAuthService: OktaAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setupSignIn();
  }

  async setupSignIn() {
    if(await !this.oktaAuthService.isAuthenticated()) {
      this.signIn.showSignInToGetTokens().then((tokens: any) => {
        // Store tokens
        this.postSignIn();
      }).catch((error: any) => {
        // Handle error
        console.error("Error: ", error.message);
      });
    } else {
      this.postSignIn();
    }
  }

  postSignIn() : void {
    
    // tokens.accessToken
    // tokens.tokenType
    // tokens.expiresAt
    this.router.navigate(["/home"]);
  }
}
