import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UserNameAvailableResponse {
  available: boolean;
}

interface SigninResponse{
  authenticated: boolean;
  username: string;
}

export interface SignUpCredentials{
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignInCredentials{
  username: string;
  password: string;
}

interface SignUpResponse {
  username: string;
}

interface SignInResponse {
  username: string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  rootUrl = 'https://api.angular-email.com/'
  signedin$ = new BehaviorSubject(null);
  username = '';

  constructor(private http: HttpClient){}


  userNameAvailable(username: string){
    return this.http.post<UserNameAvailableResponse>(`${this.rootUrl}auth/username`, {
      username
    });
  }

  signUp(creditials: SignUpCredentials){
    return this.http.post<SignUpResponse>(`${this.rootUrl}auth/signup`, creditials).pipe(
      tap(({ username }) => {
        this.signedin$.next(true);
        this.username = username;
      })
    );
  }
  //By default HTTP dumps cookies, unless you add withcredentials: true

    checkAuth(){
      return this.http.get<SigninResponse>(`${this.rootUrl}auth/signedin`).pipe(
        tap(({authenticated, username}) => {
          this.signedin$.next(authenticated)
          this.username = username;
        })
      )
    }

    signOut(){
      return this.http.post(`${this.rootUrl}auth/signout`, {})
        .pipe(
          tap(() => {
            this.signedin$.next(false)
          })
        )
    }

    signIn(creditials: SignInCredentials){
      return this.http.post<SignInResponse>(`${this.rootUrl}auth/signin`, creditials).pipe(
        tap(( { username }) => {
          this.signedin$.next(true)
          this.username = username
        })
      )
    }
}

