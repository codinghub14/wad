import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  loginUser() {
    const credentials = { username: this.username, password: this.password };
    const user = this.userService.loginUser(credentials);

  }
}
