import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../services/MenuItems/menu-service';
import { IMenuItem } from '../../Interfaces/IMenu/IMenu';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { CartService } from '../../services/CartServices/cart-service';
import { Categoryservice } from '../../services/CategoryService/categoryservice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
  private menuservice = inject(MenuService);
  private route = inject(ActivatedRoute); 
  private cartService = inject(CartService);
  private categoryService = inject(Categoryservice);
  


  menuItems: IMenuItem[] = [];
  branchId: number = 0;
  filteredItems: IMenuItem[] = []; // النسخة اللي هتظهر لليوزر
  categories: any[] = [];          // التصنيفات (محشي، مشويات...)
  activeCatId: number = 0;

  ngOnInit(): void {
    
    this.branchId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCategories();
    this.loadmenuItems();
  }
  loadCategories() {
    this.categoryService.getAllCategory().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Error categories:', err)
    });
  }

  loadmenuItems(): void {
    this.menuservice.getMenuItemsByBranch(this.branchId).subscribe({
      next: (data) => {
        // بنفلتر المتاح فقط ونخزنه في الاتنين في البداية
        this.menuItems = data.filter(item => item.isAvailable);
        this.filteredItems = [...this.menuItems]; 
      },
      error: (err) => console.error('Error loading menu:', err)
    });
  }

  // ميثود الفلترة السحرية
  filterByCategory(categoryId: number) {
    this.activeCatId = categoryId;
    if (categoryId === 0) {
      this.filteredItems = [...this.menuItems]; // عرض الكل
    } else {
      // بنفلتر بناءً على الـ categoryId اللي جوه الـ item
      this.filteredItems = this.menuItems.filter(item => item.categoryId === categoryId);
    }
  }

  addCartItem(menuItem: IMenuItem){
    this.cartService.addToCart(menuItem.id,1).subscribe({
      next: (res) => {
      Swal.fire({
        title: 'Added to Cart!',
        text: `${menuItem.name} has been added successfully.`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: '#1a1a1a', // لون الدارك بتاعنا
        color: '#ffc107',
        toast: true,
        position: 'top-end'
      }); 
    },
    error: (err) => {
      if(err.status === 401) Swal.fire('Login First!', 'You must be logged in to order.', 'warning');
      else console.error(err);
    }

    })
  }
}