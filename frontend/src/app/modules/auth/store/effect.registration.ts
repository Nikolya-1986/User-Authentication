import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, tap, catchError, exhaustMap, switchMap } from 'rxjs/operators';

import { Actions, ofType, createEffect  } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { AuthService } from "../services/auth.service";
import * as authActions from "./action.registration";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
    ) {}

    signUpRequest$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType<authActions.SignUpRequest>(authActions.AuthActionTypes.USER_SIGNUP_REQUEST),
            map((action: authActions.SignUpRequest) => action.payload),
            exhaustMap((payload ) => this.authService.signUp(payload.name, payload.email, payload.password)
                .pipe(
                    map((userSuccess) => {
                        return new authActions.SignUpSuccess(
                            { 
                                token: userSuccess.token, 
                                name: payload.name, 
                                email: payload.email, 
                                password: payload.password 
                            }
                        )
                    }),
                    tap((user) => console.log("Effect from backend - User signup success:", user.payload)),
                    catchError((error) => {
                        return of(new authActions.SignUpFailure({ error: error }))
                    })
                )
            )         
        )
    )
  
    // signUpSuccess$: Observable<Action> = createEffect(() => this.actions$ 
    //     .pipe(
    //         ofType<authActions.SignUpSuccess>(authActions.AuthActionTypes.USER_SIGNUP_SUCCESS),
    //         map((action: authActions.SignUpSuccess) => action.payload),
    //         tap((userSuccess) => {
    //             localStorage.setItem('token', userSuccess.payload.token);
    //             this.router.navigateByUrl('/')
    //         })
    //     )
    // )

    // singUpFailure$: Observable<Action> = createEffect(() => this.actions$
    //     .pipe(
    //         ofType<authActions.SignUpFailure>(authActions.AuthActionTypes.USER_SIGNUP_FAILURE),
    //         map((action: authActions.SignUpFailure) => action.payload),
    //     )
    // ) 

    loginRequest$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType<authActions.LoginUpRequest>(authActions.AuthActionTypes.USER_LOGIN_REQUEST),
            map((action: authActions.LoginUpRequest) => action.payload),
            exhaustMap((payload) => this.authService.login(payload)
                .pipe(
                    map((loginSuccess) => {
                        return new authActions.LoginUpSuccess(
                            { 
                                token: loginSuccess.token, 
                                email: payload.email, 
                                password: payload.password 
                            }
                        )
                    }),
                    tap((user) => console.log("Effect from backend - User login success:", user.payload)),
                    catchError((error) => {
                        return of(new authActions.LoginUpFailure({ error: error }))
                    })
                )
            )
        )
    )
}