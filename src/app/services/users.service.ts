import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient, private cookies: CookieService) { }
  API_URL = 'http://127.0.0.1:8000/api';

  login(user: any): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/login`, user);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/register`, user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.httpClient.get(`${this.API_URL}/me`);
  }
}
