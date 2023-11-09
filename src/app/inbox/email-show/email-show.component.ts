import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent {
  email: Email 

  constructor(private route: ActivatedRoute){
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    })
  }

  ngOnInit(){}
}

//Observable -> Emits value whenever some specific part of the URL changes(most of the time we use observable)
//Snapshot -> Simple description of what the URL is RIGHT NOW