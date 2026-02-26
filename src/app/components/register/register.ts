import { Component, inject } from '@angular/core';
import { Auth } from '../../services/AuthService/auth';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

 registerdto:RegisterDto={    FullName: '',
    Email: '',
    Password: '',
    PhoneNumber: ''
  };

  private authService = inject(Auth);
  private router = inject(Router);

  onSubmit() {
    const formData = new FormData();
    formData.append('FullName', this.registerdto.FullName);
    formData.append('Email', this.registerdto.Email);
    formData.append('Password', this.registerdto.Password);
    formData.append('PhoneNumber', this.registerdto.PhoneNumber);

    this.authService.Register(formData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
