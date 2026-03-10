import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from '../../Core/services/account-service.service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  protected accountService = inject(AccountServiceService);
  private router = inject(Router);
  protected creds: any = {}

  login(){
    this.accountService.login(this.creds).subscribe({
      next: resutl => {
        this.router.navigateByUrl('/members');
        this.creds = {};
      },
      error: error => alert(error.message)
    });
  }
  logout(){
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }
}
