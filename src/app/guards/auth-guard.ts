import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { routes } from '../app.routes';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if(token){  return true};
  router.navigate(['/login']);
  return false;
};
