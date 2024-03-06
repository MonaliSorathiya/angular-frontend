import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // baseURL: string = 'http://localhost:3000/'; // For Local
  baseURL: string = 'http://ec2-13-234-67-201.ap-south-1.compute.amazonaws.com' // For production
  constructor(
    private http: HttpClient,
  ) { }

  registerNewUser(user: any) {
    let url = `${this.baseURL}/api/registerNewCustomer`;
    console.log('url: registerURL', url);
    return this.http.post<any>(url, user);
  }
  login(auth: any) {
    let url = `${this.baseURL}/api/loginCustomer`;
    console.log('url:loginURL ', url);
    return this.http.post<any>(url, auth);
  }



}
