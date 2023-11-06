import { CanMatchFn } from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard(private: authservice: AuthService): CanMatchFn = (route, segments) => {
  return new Observable((subscriber) => {
    subscriber.next(true);
  });
};
