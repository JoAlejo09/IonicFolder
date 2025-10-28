
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  password = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async onLogin() {
    this.loading = true;
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (e: any) {
      alert('Error al iniciar sesión: ' + e.message);
    } finally {
      this.loading = false;
    }
  }
}