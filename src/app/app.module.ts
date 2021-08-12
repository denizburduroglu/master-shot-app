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
import { MenuLayoutComponent } from './layouts/menu-bar/menu-layout.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { CompactMovieCardComponent } from './components/compact-movie-card/compact-movie-card.component';
import { SeeMoreDirective } from './directives/see-more.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    MenuLayoutComponent,
    PostComponent,
    CreatePostComponent,
    MoviePosterComponent,
    CompactMovieCardComponent,
    SeeMoreDirective
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
