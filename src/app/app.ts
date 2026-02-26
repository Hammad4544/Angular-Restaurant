import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Login } from "./components/login/login";
import { Home } from "./components/home/home";
import { CartService } from './services/CartServices/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'RestaurantApp';
  private cartService = inject(CartService);
  cartCount: number = 0;

  ngOnInit() {
    this.updateCartBadge();
  }

  // ميثود بسيطة للتشيك
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    window.location.reload(); 
  }
  updateCartBadge() {
    this.cartService.getCart().subscribe({
      next: (data: any) => {
        // بنعد عدد العناصر اللي في الـ items array اللي إنت بعتها في الـ JSON
        this.cartCount = data.items?.length || 0;
      },
      error: () => this.cartCount = 0
    });
  }
}
