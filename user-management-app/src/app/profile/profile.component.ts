import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string = ''; // Assuming you have a way to set the username
  userData: any; // Assuming you have a user data object to populate the profile data

  constructor(private userService: UserService) {}

  fetchUserData() {
    // Assuming you have a method in your UserService to fetch the user data
    this.userData = this.userService.getUserData(); // Replace `getUserData()` with your actual method
  }
}
