

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  constructor(private auth: AuthService, private router: Router) {}

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}