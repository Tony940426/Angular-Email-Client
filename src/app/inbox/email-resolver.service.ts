import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router'
import { Email } from './email';
import { EmailService } from './email.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export const EmailResolverService: ResolveFn<Email> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<any> => {
    const emailService = inject(EmailService)
    const { id } = route.params 

    return emailService.getEmail(id)
}