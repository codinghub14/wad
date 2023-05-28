import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://example.com/api'; // Replace with your API endpoint base URL

  constructor(private http: HttpClient) { }

  registerUser(credentials: { username: string, password: string }): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, credentials);
  }

  loginUser(credentials: { username: string, password: string }): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }

  getUserData(): Observable<any> {
    const url = `${this.apiUrl}/userdata`;
    return this.http.get(url);
  }
}
