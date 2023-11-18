import { Component, Input } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent {
  @Input() email: Email;
  showModal = false;

  constructor(){

    }

  ngOnInit(){
    console.log(this.email)
  }

  onSubmit(email: Email){
    
  }

}
