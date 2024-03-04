import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginUserData: any = {};
  durationInSeconds = 5;

  constructor(
    private authservice: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }
  login() {
    this.authservice.login(this.loginUserData).subscribe((res: any) => {
      console.log('res: 24444444', res);
      if (res.error === "User doesn't exist") {
        this.snackBar.open(`We couldn't find your name with this username, Please register`, null, {
          duration: this.durationInSeconds * 1000,
          panelClass: 'error-dialog',
        });
        this.router.navigate(['register']);
      } else {
        if (res.error === "password doesn't match") {
          this.snackBar.open(`Password doesn't match, please try again`, null, {
            duration: this.durationInSeconds * 1000,
            panelClass: 'error-dialog',
          });
        } else {
          if (res.message === "Login Success") {
            this.snackBar.open('Login Success!.', null, {
              duration: this.durationInSeconds * 1000,
              panelClass: 'success-dialog',
            });
            this.router.navigate(['genieStoreDashboard']);
          } else {
            this.snackBar.open('Something went wrong.', null, {
              duration: this.durationInSeconds * 1000,
              panelClass: 'error-dialog',
            });
            this.router.navigate(['login']);
          }
        }
      }
    });
  }
  registerNewCustomer() {
    this.router.navigate(['register']);
  }
}
