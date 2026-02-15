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
  title = 'Social App';

   ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: Response => console.log(Response),
      error: error => console.log(error),
      complete: () => console.log('Completed http request') 
    })
  }
}
