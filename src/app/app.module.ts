import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FoundationModule } from './modules/foundation/foundation.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { config } from './global/okta-config';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FoundationModule,
    HttpClientModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config.oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
