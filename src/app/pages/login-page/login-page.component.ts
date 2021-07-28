import { Component, OnDestroy, OnInit } from '@angular/core';
import { config } from 'src/app/global/okta-config';
import '@okta/okta-signin-widget/dist/js/okta-sign-in.min';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { NavigationStart, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

declare let OktaSignIn: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  oktaSignIn = new OktaSignIn(
    {
      baseUrl: config.oktaDomain,
      el: '#okta-signin-container',
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      authParams: {
        // pkce: true
        issuer: config.oktaDomain + '/oauth2/default'
      },
      features: {
        registration: true
      }
    }
  );
  isAuthenticated: boolean = false;

  constructor(
    private httpRequestService: HttpRequestService,
    private oktaAuthService: OktaAuthService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.setupIsAuthenticated();
    this.setupSignIn();
  }

  ngOnDestroy(): void {
    this.oktaSignIn?.remove();
  }

  async setupIsAuthenticated() {
    this.oktaAuthService.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
  }

  setupSignIn() {
    if(!this.isAuthenticated) {
      this.oktaSignIn.showSignInToGetTokens({
        el: '#okta-signin-container',
      }).then((tokens: any) => {
        this.postSignIn(tokens);
      }).catch((error: any) => {
        console.error("Error: ", error.message);
      });
    } else {
      this.router.navigateByUrl("/menu/home");
    }
  }

  postSignIn(tokens: any) : void {
    console.log(tokens);
    this.oktaAuthService.tokenManager.setTokens(tokens);
    this.oktaSignIn.hide();
    this.router.navigateByUrl("/menu/home");
  }
}
