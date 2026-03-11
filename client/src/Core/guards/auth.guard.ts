import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastServiceService } from '../services/toast-service.service';
import { AccountServiceService } from '../services/account-service.service';

export const authGuard: CanActivateFn = () => {
  const accountService = inject(AccountServiceService);
  const toast = inject(ToastServiceService);
  
  if(accountService.currentUser()) return true;
  else {
    toast.error('You must be logged in to access this route.');
    return false;
  }
};
