import { HttpInterceptorFn } from '@angular/common/http';
import { token } from '../auth/auth.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = token();

  if (!authToken) return next(req);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
