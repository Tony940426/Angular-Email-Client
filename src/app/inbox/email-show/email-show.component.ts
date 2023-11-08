import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent {

  constructor(private route: ActivatedRoute, private emailService: EmailService){}

  ngOnInit(){
    this.route.params.pipe(
      switchMap(({id}) => {
        return this.emailService.getEmail(id)
      })
    ).subscribe((email)=>{
      console.log(email)
    })
  }
}

//Observable -> Emits value whenever some specific part of the URL changes(most of the time we use observable)
//Snapshot -> Simple description of what the URL is RIGHT NOW