import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { MenuLayoutComponent } from './layouts/menu-bar/menu-layout.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  // { path: 'home', component: HomePageComponent, canActivate: [OktaAuthGuard] },
  { path: 'menu', component: MenuLayoutComponent, canActivate: [OktaAuthGuard], children: 
    [
      { path: 'home', component: HomePageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
