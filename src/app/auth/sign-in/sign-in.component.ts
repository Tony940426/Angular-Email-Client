import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService, SignInCredentials } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  })

  constructor(private authService: AuthService){

  }

  onsubmit(){
    if(this.authForm.invalid){
      return;
    } else {
      this.authService.signIn(this.authForm.value as SignInCredentials).subscribe({
        next: () => {

        },
        error: ({error}) => {
          if( error.username || error.password ){
            this.authForm.setErrors({ credentials: true });
          }
        }
      })
    }
  }
}
