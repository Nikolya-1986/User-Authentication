import { createFeatureSelector } from "@ngrx/store";

import AppState from "src/app/modules/posts/store/state";
import { authReduser } from "./reduser.registration";

export const selectAuthState = createFeatureSelector<AppState>('auth');

export const reducerAuth = {
    auth: authReduser
};
  