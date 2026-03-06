import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/OrderService/order';
import { IOrder } from '../../Interfaces/IOrder/Iorder';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit{

private orderservice = inject(OrderService);
 orders: IOrder[] = [];


ngOnInit(): void {
  this.getOrders();
}
getOrders() {
  this.orderservice.getMyOrders().subscribe({
    next: (data) => {
      console.log(data);
      this.orders = data;
    },
    error: (response) => {
      console.log(response);
    },
  });}
 getStatusClass(status: string): string {
    switch (status) {
      case 'Pending': return 'text-warning border-warning';
      case 'Delivered': return 'text-success border-success';
      case 'Cancelled': return 'text-danger border-danger';
      default: return 'text-info border-info';
    }
  }



}
