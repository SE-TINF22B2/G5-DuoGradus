import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  /**
   * Check if the user is logged in
   * if not, redirect to login page
   */

  const token = localStorage.getItem('credentials');
  if (token) {
    return true;
  } else {
    window.location.href = '/login';
    return false;
  }
};
