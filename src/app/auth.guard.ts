import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) => {

  let data = JSON.parse(localStorage.getItem('registration') || '') || [];
  let router = inject(Router);
  if (data && data.length > 0 && data.some((x: any) => x.islogin)) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
