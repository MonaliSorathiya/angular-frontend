import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerUserData: any = {};
  durationInSeconds = 5;

  constructor(
    private authservice: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  registerNewUser() {
    this.authservice.registerNewUser(this.registerUserData).subscribe((res: any) => {
      if (res.message === 'Email already exists.') {
        this.snackBar.open('Email already exists, Please login', null, {
          duration: this.durationInSeconds * 1000,
          panelClass: 'error-dialog',
        });
        this.router.navigate(['login']);
      } else {
        this.snackBar.open('Registration Successfull!, You can login now.', null, {
          duration: this.durationInSeconds * 1000,
          panelClass: 'success-dialog',
        });
        this.router.navigate(['login']);
      }
    });
  }
}
