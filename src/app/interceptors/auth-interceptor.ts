import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // بنجيب التوكن من المكان اللي خزنته فيه وقت اللوجن
  const token = localStorage.getItem('token'); 

  // لو التوكن موجود، بنعمل نسخة من الـ Request ونضيف عليها الـ Header
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};