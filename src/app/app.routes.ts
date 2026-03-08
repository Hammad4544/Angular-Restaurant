import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { Cart } from './components/cart/cart';
import { authGuard } from './guards/auth-guard';
import { Order } from './components/order/order';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { AdminOrder } from './components/admin-order/admin-order';

export const routes: Routes = [

    {path:"login",component:Login},
    {path:"register",component:Register},
    {path:"home",component:Home},
    { path: 'cart', component: Cart ,canActivate:[authGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:"menu/:id",component:Menu},
    {path:"register",component:Register},
    {path:"MyOrder",component:Order,canActivate:[authGuard]},
    // صفحات الأدمن (الـ Admin Layout)
  { 
    path: 'admin', 
    component: AdminLayout, 
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: AdminOrder }, // دي اللي عملناها سوا
    //   { path: 'menu', component: MenuManagementComponent } // مثال للمستقبل
    ]
  }
     
];
