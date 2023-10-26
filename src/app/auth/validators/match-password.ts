import { Injectable } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms'

export class MatchPassword implements Validator {
    @Injectable({providedIn: 'root'})

    validate(formGroup: FormGroup){
        const {password, passwordConfirmation } = formGroup.value

        if (password === passwordConfirmation) {
            return null;
        } else {
            return { passwordDontMatch: true }
        }
    }
}
