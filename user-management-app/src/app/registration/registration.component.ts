import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
password: string = '';



  constructor(private userService: UserService) {}

  registerUser() {
    
    const credentials = { username: this.username, password: this.password };
    const user = this.userService.registerUser(credentials);

    // Additional logic for registration
  }
}
