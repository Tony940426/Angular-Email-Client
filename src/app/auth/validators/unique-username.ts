import { Injectable,  } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs'; 
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})

export class UniqueUsername implements Validators {
    constructor(private authService: AuthService){

    }
    validate = (control: FormControl) => {
        const {value} = control;

        return this.authService.userNameAvailable(value).pipe(
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
