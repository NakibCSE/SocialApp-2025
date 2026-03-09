import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { NavComponent } from "../layout/nav/nav.component";
import { AccountServiceService } from '../Core/services/account-service.service';

@Component({
  selector: 'app-root',
  imports: [NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private accountService = inject(AccountServiceService);
  private http = inject(HttpClient);
  protected title = 'Social App';
  protected members = signal<any>([]);

   async ngOnInit(){
    this.members.set(await this.getMembers())
    this.setCurrentUser();
  }
  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
  async getMembers(){
    try {

      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
