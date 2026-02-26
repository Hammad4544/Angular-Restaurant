import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5161/api/Cart';

  addToCart(menuItemId: number, quantity: number = 1) {
    // بناءً على الـ AddTOCartDto اللي عندك في الباك أند
    return this.http.post(`${this.apiUrl}/add`, { menuItemId, quantity });
  }

// ميثود تحديث الكمية (UpdateQuantity في الباك أند)
  updateQuantity(cartItemId: number, quantity: number) {
    // بناءً على Controller: [HttpPut("update/{cartItemId}")]
    // وبياخد الـ quantity من الـ Query
    return this.http.put(`${this.apiUrl}/update/${cartItemId}?quantity=${quantity}`, {});
  }

  // ميثود مسح صنف (RemoveItem في الباك أند)
  removeFromCart(cartItemId: number) {
    // بناءً على Controller: [HttpDelete("remove/{cartItemId}")]
    return this.http.delete(`${this.apiUrl}/remove/${cartItemId}`);
  }


  getCart() {
    return this.http.get(this.apiUrl);
  }
  
}
