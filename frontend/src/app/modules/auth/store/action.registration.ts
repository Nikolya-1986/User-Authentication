import { Action } from "@ngrx/store";

export enum AuthActionTypes { 
    USER_SIGNUP_REQUEST = "[AUTH] Signup Request",
    USER_SIGNUP_SUCCESS = "[AUTH] Signup Success",
    USER_SIGNUP_FAILURE = "[AUTH] Signup Failure",
    
    USER_LOGIN_REQUEST = "[AUTH] Login Request",
    USER_LOGIN_SUCCESS = "[AUTH] Login Success",
    USER_LOGIN_FAILURE = "[AUTH] Login Failure",

    USER_LOGOUT = "[AUTH] Logout",
    GET_STATUS = "[AUTH] GetStatus"
}

export class SignUpRequest implements Action {
    readonly type = AuthActionTypes.USER_SIGNUP_REQUEST;
    constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
    readonly type = AuthActionTypes.USER_SIGNUP_SUCCESS;
    constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
    readonly type = AuthActionTypes.USER_SIGNUP_FAILURE;
    constructor(public payload: any) {}
}

export class LoginUpRequest implements Action {
    readonly type = AuthActionTypes.USER_LOGIN_REQUEST;
    constructor(public payload: any) {}
}

export class LoginUpSuccess implements Action {
    readonly type = AuthActionTypes.USER_LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export class LoginUpFailure implements Action {
    readonly type = AuthActionTypes.USER_LOGIN_FAILURE;
    constructor(public payload: any) {}
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.USER_LOGOUT;
}

export class GetStatus implements Action {
    readonly type = AuthActionTypes.GET_STATUS;
}

export type AuthActions = 
            SignUpRequest |
            SignUpSuccess |
            SignUpFailure |
            LoginUpRequest |
            LoginUpSuccess |
            LoginUpFailure |
            LogOut |
            GetStatus