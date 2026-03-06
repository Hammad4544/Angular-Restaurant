import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService  {
  
  
  
  private apiUrl = "http://localhost:5161/api/";
  private readonly httpclint = inject(HttpClient);
  getMyOrders() {
  return this.httpclint.get<any[]>(`${this.apiUrl}Order/my-orders`);}
}
