import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { userPayload } from '../stores/user.store';

export const roleGuard = (expectedRole: string): CanActivateFn => {
  return () => {
    const router = inject(Router);
    const payload = userPayload();
    const roles = payload?.roles || [];

    if (roles.includes(expectedRole)) {
      return true;
    }

    return router.createUrlTree(['/unauthorized']);
  };
};