import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() inputType: string;
  @Input() controlType = 'input';

  showErrors(){
    const { dirty, touched, errors } = this.control
    return dirty && touched && errors;
  }
}
