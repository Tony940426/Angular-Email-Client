import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent {

  constructor(private authService: AuthService){

  }
  ngOnInIt(){
    this.authService.signOut()
  }
}
