import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu-layout.component.html'
})
export class MenuLayoutComponent implements OnInit {

  isOffcanvas = true;

  constructor(
    private oktaAuthService: OktaAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async logout() {
    await this.oktaAuthService.signOut();
    this.router.navigateByUrl('/login');
  }
}
