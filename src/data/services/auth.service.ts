import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginPayload, LoginResponse } from "../../core/models/auth.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private baseUrl = 'http://localhost:3033/api/v1/auth';

  constructor(private readonly http: HttpClient){}

  login(payload: LoginPayload): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, payload);
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('access_token');
    console.log(`Data token: ${token}`)
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
  return this.http.get(`${this.baseUrl}/profile`, { headers });
}


}