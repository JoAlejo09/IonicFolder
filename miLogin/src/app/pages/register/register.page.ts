import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  email:string='';
  password:string='';

  constructor(private authService: AuthService, private router:Router){

  }

  register(){
     if (!this.email || !this.password) {
      alert('Por favor ingresa un correo y contraseña.');
      return;
    }
    try {
      const userCredential = this.authService.register(this.email, this.password);
      console.log('Usuario registrado:', userCredential);
      alert('Usuario registrado correctamente 🎉');
      this.router.navigate(['/login']); // redirige a la página de login
    } catch (error) {
      
    }
  }

}
