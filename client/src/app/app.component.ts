import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { NavComponent } from "../layout/nav/nav.component";
import { AccountServiceService } from '../Core/services/account-service.service';
import { HomeComponent } from "../features/home/home.component";
import { User } from '../types/user';
import { Router, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private accountService = inject(AccountServiceService);
  protected router = inject(Router);
  private http = inject(HttpClient);
  protected title = 'Social App';
  protected members = signal<User[]>([]);

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

      return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/members'));
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
