import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
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
  protected members: any;

   ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => this.members = response,
      error: error => console.log(error),
      complete: () => console.log('Completed http request') 
    })
  }
}
