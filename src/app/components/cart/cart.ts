import { Component, OnInit, inject } from '@angular/core';
import { ICart } from '../../Interfaces/ICart/ICart';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/CartServices/cart-service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  private cartService = inject(CartService);
  cartData?: ICart;
  readonly imageBaseUrl = 'http://localhost:5161';

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe({
      next: (data: any) => this.cartData = data,
      error: (err) => console.error(err)
    });
  }

  // ميثود تحديث الكمية (بتكلم UpdateQuantity في الباك أند)
  updateQty(cartItemId: number, newQty: number) {
    if (newQty < 1) return;
    this.cartService.updateQuantity(cartItemId, newQty).subscribe(() => this.loadCart());
  }

  // ميثود مسح منتج
  removeItem(cartItemId: number) {
    this.cartService.removeFromCart(cartItemId).subscribe(() => this.loadCart());
  }
}