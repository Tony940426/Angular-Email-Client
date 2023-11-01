import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserNameAvailableResponse {
  available: boolean;
}

export interface SignUpCredentials{
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignUpResponse {
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com/'
  constructor(private http: HttpClient) { }

  userNameAvailable(username: string){
    return this.http.post<UserNameAvailableResponse>(`${this.rootUrl}auth/username`, {
      username
  })
  }
  signUp(creditials: SignUpCredentials){
    return this.http.post<SignUpResponse>(`${this.rootUrl}auth/signup`, creditials)
  }
}
