import { Component, inject } from '@angular/core';
import { Auth } from '../../services/AuthService/auth';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginDto: LoginDto = {
    Email: '',
    Password: ''
  };

  private authService = inject(Auth);
  private router = inject(Router);

  onSubmit() {
    const formData = new FormData();
    formData.append('Email', this.loginDto.Email);
    formData.append('Password', this.loginDto.Password);

    this.authService.Login(formData).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        
        if(response.token){
          localStorage.setItem('token',response.token);
          console.log(localStorage.getItem('token'));
        }
        // Handle successful login (e.g., store token, navigate)
         this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }

}
