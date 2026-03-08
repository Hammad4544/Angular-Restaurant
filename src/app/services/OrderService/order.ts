import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService  {
  
  
  
  private apiUrl = "http://localhost:5161/api/";
  private readonly httpclint = inject(HttpClient);
  getMyOrders() {
  return this.httpclint.get<any[]>(`${this.apiUrl}Order/my-orders`);}


  
  //For Admin
  getAllOrders() {
    return this.httpclint.get<any[]>(`${this.apiUrl}Order/admin/all-orders`);
  }

  updateOrderStatus(orderId: number, newStatus: number): Observable<any> {
  return this.httpclint.put(`${this.apiUrl}/UpdateOrderStatus/${orderId}`, newStatus);
}
}
