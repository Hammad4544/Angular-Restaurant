import { Component, inject, OnInit } from '@angular/core'; 
import { IAdminOrder } from '../../Interfaces/IOrder/Iorder';
import { OrderService } from '../../services/OrderService/order';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-admin-order',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './admin-order.html',
  styleUrl: './admin-order.css',
})
export class AdminOrder implements OnInit { 

  orders: IAdminOrder[] = [];
  private readonly orderService = inject(OrderService);

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        console.log('Admin Orders Loaded:', this.orders);
      },
      error: (err) => {
        console.error('Error fetching orders', err);
      }
    });
  }

  // ميثود تغيير الحالة اللي بتناديها من الـ HTML
onStatusChange(orderId: number, newStatusValue: string) {
  // حولنا القيمة لـ Number عشان الـ Enum في الباك أند بيفهم أرقام
  const statusInt = parseInt(newStatusValue);

  if (confirm('هل أنت متأكد من تغيير حالة الطلب؟')) {
    this.orderService.updateOrderStatus(orderId, statusInt).subscribe({
      next: (response) => {
        console.log('تم التحديث بنجاح:', response);
        // إعادة تحميل الأوردرات عشان الحالة الجديدة تظهر في الجدول باللون الصح
        this.loadOrders(); 
      },
      error: (err) => {
        console.error('فشل التحديث:', err);
        alert('حدث خطأ أثناء تحديث الحالة');
        this.loadOrders(); // بنرجع الداتا القديمة عشان الـ Select ميفضلش على حالة غلط
      }
    });
  } else {
    this.loadOrders(); // لو كنسل الـ Confirm نرجع الاختيار القديم
  }
}
}