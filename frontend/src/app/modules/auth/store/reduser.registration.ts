import { InitialState } from "@ngrx/store/src/models";
import { User } from "../model/user";
import { AuthActions, AuthActionTypes } from "./action.registration";

export interface userState {
    isAuthenticated: boolean; // is a user authenticated?
    user: User | null; // if authenticated, there should be a user object
    loading: boolean;//request on loading 
    errorMessage: string | null; // error message
}

export const initialState: userState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    errorMessage: null
}

export const authReduser = (state: userState = initialState, action: AuthActions) => {
    
    switch(action.type) {
        //Signup User
        case AuthActionTypes.USER_SIGNUP_REQUEST: {
            const userSignupRequest = {
                ...state,
                loading: true,
            }
            console.log("Request signup user", userSignupRequest)
            return userSignupRequest
        }

        case AuthActionTypes.USER_SIGNUP_SUCCESS: {
            const userSignupSuccess = {
                ...state,
                isAuthenticated: true,
                user: {
                    token: action.payload.token,
                    email: action.payload.email
                },
                loading: false,
                errorMessage: null
            }
            console.log("Successfully signup user", userSignupSuccess)
            return userSignupSuccess
        }

        case AuthActionTypes.USER_SIGNUP_FAILURE: {
            const userSignupFailure = {
                ...state,
                loading: false,
                // errorMessage: 'That email is already in use.'
                errorMessage: action.payload
            }
            console.log("Failed signup user", userSignupFailure)
            return userSignupFailure
        }


        //Login User
        case AuthActionTypes.USER_LOGIN_REQUEST: {
            const userLoginRequest = {
                ...state,
                loading: true
            }
            console.log("Request login user", userLoginRequest)
            return userLoginRequest
        }

        case AuthActionTypes.USER_LOGIN_SUCCESS: {
            const userLoginSuccess = {
                ...state,
                isAuthenticated: true,
                user: {
                    token: action.payload.token,
                    email: action.payload.email
                },
                loading: false,
                errorMessage: null
            }
            console.log("Successfully login user", userLoginSuccess)
            return userLoginSuccess
        }

        case AuthActionTypes.USER_LOGIN_FAILURE: {
            const userLoginFailure = {
                ...state,
                errorMessage: action.payload
            }
            console.log("Failed login user", userLoginFailure)
            return userLoginFailure
        }

        //Logout User
        case AuthActionTypes.USER_LOGOUT: {
            const userLogout = {
                initialState
            }
            return userLogout
        }
        default: 
            return state;
    }
}