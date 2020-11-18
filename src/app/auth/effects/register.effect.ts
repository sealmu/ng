import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { ApiStatus } from 'src/app/shared/types/apiStatuses.interface';
import { AuthService } from '../services/auth.service';
import { registerAction } from '../store/actions/register.actions';
import { RegisterRequestIInterface } from '../types/registerRequest.interface';
import { empty, of } from 'rxjs';
import { UserInterface } from 'src/app/shared/types/user.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistance: PersistanceService,
    private router: Router
  ) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request: { user, status } }) => {
        console.log(user, status);
        const request: RegisterRequestIInterface = {
          user,
          status: ApiStatus.SUCCESS,
        };

        if (status === ApiStatus.SUCCESS || status === ApiStatus.FAILURE)
          return empty();

        //return of(registerAction({ request }));

        return this.authService.register(request).pipe(
          map((response: UserInterface) => {
            //window.localStorage.setItem('token', response.token);
            this.persistance.set('token', response.token);

            return registerAction({
              request: { user, data: response, status: ApiStatus.SUCCESS },
            });
          }),
          catchError((error: HttpErrorResponse) => {
            const request: RegisterRequestIInterface = {
              user,
              status: ApiStatus.FAILURE,
              errors: error.error.errors,
            };
            return of(registerAction({ request }));
          })
        );
      })
    );
  });

  redirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerAction),
        tap(({ request: { user, status } }) => {
          if (status == ApiStatus.SUCCESS) {
            this.router.navigateByUrl('/');
          }
        })
      ),
    {
      dispatch: false,
    }
  );
}
