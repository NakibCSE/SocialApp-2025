import { CommonModule } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { RegisterComponent } from "../account/register/register.component";
import { User } from '../../types/user';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  protected registerMode = signal(false);

  showRegister(value : boolean){
    this.registerMode.set(value);
  }
}
