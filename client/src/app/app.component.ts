import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private http = inject(HttpClient);
  protected title = 'Social App';
  protected members = signal<any>([]);

   async ngOnInit(){
    this.members.set(await this.getMembers())
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
