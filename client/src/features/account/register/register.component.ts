import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds } from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected creds = {} as RegisterCreds;

  register(){
    console.log(this.creds);
  }
  cancel(){
    console.log('cancelled');
  }
}
