import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { SignUpCredentials } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9]+$/)
    ], [this.uniqueUsername.validate]
    ),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, 
  { validators: [this.matchPassword.validate]}
);
  
  constructor(
    private matchPassword: MatchPassword, 
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
    ){}

    onSubmit(){
      if(this.authForm.invalid){
        return;
      }

      this.authService.signUp(this.authForm.value as SignUpCredentials).subscribe({
        next: response => {
          //Navigate to another route
        },
        error: err => {
          if(err.status === 0){
            this.authForm.setErrors({noConnection: true});
          } else {
            this.authForm.setErrors({unKnownError: true})
          }
        }
      });
    }
}
