import { UserAuthService } from './../services/user-auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserAuthService)
  const router = inject(Router)
  if(userService.isUserLoggedIn){
    return true
  }else{
    alert('please login')
    router.navigate(['/admin/login'])
    return false
  }

};
