import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Router } from '@angular/router'
import { Email } from './email';
import { EmailService } from './email.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

export const EmailResolverService: ResolveFn<Email> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<any> => {
    const emailService = inject(EmailService)
    const { id } = route.params 
    const router  = inject(Router);

    return emailService.getEmail(id).pipe(
        catchError(() => {
            router.navigateByUrl('/inbox/not-found');
            return EMPTY
        })
    );
}