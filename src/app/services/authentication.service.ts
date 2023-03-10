import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private baseUrl: string = "https://localhost:7189/api/User/"
  constructor(private http : HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}registration`, userObj)
  }


  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)

  }

}
