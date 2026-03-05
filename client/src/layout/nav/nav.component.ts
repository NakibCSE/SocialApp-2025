import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from '../../Core/services/account-service.service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountServiceService);
  protected creds: any = {}
  protected loggedIn = signal(false);

  login(){
    this.accountService.login(this.creds).subscribe({
      next: resutl => {
        console.log(resutl);
        this.loggedIn.set(true);
        this.creds = {};
      },
      error: error => alert(error.message)
    });
  }
  logout(){
    this.loggedIn.set(false);
  }
}
