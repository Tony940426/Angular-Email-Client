import { Component, Input } from '@angular/core';
import { Email } from '../email';
import { FormGroup, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  emailForm: FormGroup;
  @Input() control: FormControl;
  @Input() email: Email;

ngOnInit(){
    const{ subject, from, to, text } = this.email

    this.emailForm = new FormGroup({
      to: new FormControl(to),
      from: new FormControl(from),
      subject: new FormControl(subject),
      text: new FormControl(text)
    });
  }
}
