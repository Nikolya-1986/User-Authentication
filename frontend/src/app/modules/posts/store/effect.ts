import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect  } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, tap, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { PostsService } from "src/app/modules/posts/services/posts.service";
import { Post } from "src/app/modules/posts/models/post.model";
import * as postsActions from "./action";


@Injectable()
export class PostsEffects {
    
    constructor(
        private actions$: Actions,
        private postsService: PostsService
    ){}

    loadPosts$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType<postsActions.LoadPostsRequestAction>(postsActions.PostActionTypes.LOAD_POSTS_REQUEST),//Сначала активируется действие LOAD_POSTS_REQUEST
            exhaustMap(() => this.postsService.getPosts()//это действие вызывает сервис
                .pipe(
                    map((loadPosts: Post[]) => {//если всё успешно то вызывается метод LoadPostsSuccessAction, если нет то ошибка
                        return new postsActions.LoadPostsSuccessAction(loadPosts)
                    }),
                    tap((posts) => console.log("Posts-effect loaded from backend:", posts.payload)),
                    catchError(error => of(new postsActions.LoadPostsFailAction(error)))
                )
            )
        )
    )

    loadPost$: Observable<Action> = createEffect(() => this.actions$ 
        .pipe(
            ofType<postsActions.LoadPostRequestAction>(postsActions.PostActionTypes.LOAD_POST_REQUEST),
            exhaustMap((post: postsActions.LoadPostRequestAction) => this.postsService.getPost(post.payload)
                .pipe(
                    map((loadPost: Post) => {
                        return new postsActions.LoadPostSuccessAction(loadPost)
                    }),
                    tap((post) => console.log("Post-effect loaded from bacend:", post.payload)),
                    catchError(error => of(new postsActions.AddPostFailAction(error)))
                )
            )
        )
    )

    addPost$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType<postsActions.AddPostRequestAction>(postsActions.PostActionTypes.ADD_POST_REQUEST),
            exhaustMap((post) => this.postsService.addPost(post.payload)
                .pipe(
                    map(() => {
                        return new postsActions.AddPostSuccessAction(post.payload)
                    }),
                    tap((post) => console.log("Post-effect add from backend:", post.payload)),
                    catchError(error => of(new postsActions.AddPostFailAction(error)))
                )
            )
        )
    )

    
    updatePost$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType<postsActions.UpdatePostRequestAction>(postsActions.PostActionTypes.UPDATE_POST_REQUEST),
            exhaustMap((postUpdate) => this.postsService.updatePost(postUpdate.payload.post)
                .pipe(
                    map((update) => {
                        return new postsActions.UpdatePostSuccessAction(update)
                    }),
                    tap((udatePost) => console.log("Post-effect udeted from backend:", udatePost.payload)),
                    catchError(error => of(new postsActions.UpdatePostFailAction(error)))
                )
            )
        )
    )

    deletePost$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType<postsActions.DeletePostRequestAction>(postsActions.PostActionTypes.DELETE_POST_REQUEST),
            map((action: postsActions.DeletePostRequestAction) => action.payload),
            exhaustMap((id: number) => this.postsService.deletePost(id)
                .pipe(
                    map(() => {
                        return new postsActions.DeletePostSuccessAction(id)
                    }),
                    tap((delPost) => console.log("Post-effect deleted from backend:", delPost.payload)),
                    catchError(error => of(new postsActions.DeletePostFailAction(error)))
                )
            )
        )
    )



}