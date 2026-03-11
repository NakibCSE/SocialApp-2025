import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from '../../Core/services/account-service.service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ToastServiceService } from '../../Core/services/toast-service.service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  protected accountService = inject(AccountServiceService);
  private router = inject(Router);
  private toastService = inject(ToastServiceService);
  protected creds: any = {}

  login(){
    this.accountService.login(this.creds).subscribe({
      next: resutl => {
        this.router.navigateByUrl('/members');
        this.toastService.success('Logged in successfully!');
        this.creds = {};
      },
      error: error => {
       this.toastService.error(error.error);
      }
    });
  }
  logout(){
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }
}
