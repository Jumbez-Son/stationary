import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;
  password2 = '';

  constructor(private router: Router) {
    // Wait for 3 minutes (180,000 milliseconds) before navigating to another page
    setTimeout(() => {
      // Navigate to another page
      this.router.navigate(['']);
    }, 180000); // 180,000 milliseconds = 3 minutes

  }
  username: any;
  password: any;

  onSubmit() {
    // Perform login validation here
    if (this.username === 'admin' && this.password === 'admin') {
      // Successful login
      this.router.navigate(['']);
    } else {
      // Invalid credentials
    }
  }
}
