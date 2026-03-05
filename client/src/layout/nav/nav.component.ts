import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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

  login(){
    this.accountService.login(this.creds).subscribe({
      next: resutl => console.log(resutl),
      error: error => alert(error.message)
    });
  }
}
