import { Injectable,  } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})

export class UniqueUsername implements Validators {
    constructor(private http: HttpClient){

    }
    validate = (control: FormControl) => {
        const {value} = control;
        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value
        }).pipe(
            map(value => {
                if(value.available) {
                    return null;
                }
            }),
            catchError((err) => {
                if(err.error.username){
                    return of({nonUniqueUsername: true})
                } else {
                    return of({ noConnection: false }); 
                }
            })
        )
        
    }
}
