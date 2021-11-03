import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

import { PostReducer, PostState, POST_REDUSER_NODE } from "./reduser";
import AppState from "./state";

export const getPostFeatureSelector = createFeatureSelector<PostState>("posts")

export const getPostLoadingSelector = createSelector (
    getPostFeatureSelector,
    (state: PostState) => state?.loading
)

export const getPostsListSelector = createSelector (
    getPostFeatureSelector,
    (state: PostState) => state?.posts
)

export const getPostCurrentID = createSelector (
    getPostFeatureSelector,
    (state: PostState) => state?.selectedPostId
)

export const getPostCurrent = createSelector(
    getPostFeatureSelector,
    getPostCurrentID,
    state => state.entities[state.entities]
);

export const getPostErrorSelector = createSelector (
    getPostFeatureSelector,
    (state: PostState) => state?.error
)

export const reducerPost: ActionReducerMap<AppState, any> = {
    posts: PostReducer
};

