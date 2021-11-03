import { Action } from "@ngrx/store";
import { Post } from "src/app/modules/posts/models/post.model";

export enum PostActionTypes {

    LOAD_POSTS_REQUEST = "[POST] Load Posts Request",
    LOAD_POSTS_SUCCESS = "[POST] Load Posts Success",
    LOAD_POSTS_FAIL = "[POST] Load Posts Fail",

    LOAD_POST_REQUEST = "[POST] Load Post Request",
    LOAD_POST_SUCCESS = "[POST] Load Post Success",
    LOAD_POST_FAIL = "[POST] Load Post Fail",

    ADD_POST_REQUEST = '[POST] Add Post Request',
    ADD_POST_SUCCESS = '[POST] Add Post Success',
    ADD_POST_FAIL = '[POST] Add Post Fail',

    UPDATE_POST_REQUEST = "[POST] Update Post Request",
    UPDATE_POST_SUCCESS = "[POST] Update Post Success",
    UPDATE_POST_FAIL = "[POST] Update Post Fail",

    DELETE_POST_REQUEST = '[POST] Delete Post Request',
    DELETE_POST_SUCCESS = '[POST] Delete Post Success',
    DELETE_POST_FAIL = '[POST] Delete Post Fail',
}

/*
** Load Posts
**/
export class LoadPostsRequestAction implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_REQUEST

}

export class LoadPostsSuccessAction implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_SUCCESS

    constructor(public payload: Post[]){}
}

export class LoadPostsFailAction implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_FAIL

    constructor(public payload: any) {}
}

/*
**Load Post
*/
export class LoadPostRequestAction implements Action {
    readonly type = PostActionTypes.LOAD_POST_REQUEST

    constructor(public payload: number | any) {}
}

export class LoadPostSuccessAction implements Action {
    readonly type = PostActionTypes.LOAD_POST_SUCCESS

    constructor(public payload: Post) {}
}

export class LoadPostFailAction implements Action {
    readonly type = PostActionTypes.LOAD_POST_FAIL

    constructor(public payload: any) {}
}

/*
** Add Post
**/
export class AddPostRequestAction implements Action {
    readonly type = PostActionTypes.ADD_POST_REQUEST;

    constructor(public payload: Post){}
}

export class AddPostSuccessAction implements Action {
    readonly type = PostActionTypes.ADD_POST_SUCCESS;

    constructor(public payload: Post){}
}

export class AddPostFailAction implements Action {
    readonly type = PostActionTypes.ADD_POST_FAIL;
    
    constructor(public payload: any){}
}

/*
** Update Post
**/
export class UpdatePostRequestAction implements Action {
    readonly type = PostActionTypes.UPDATE_POST_REQUEST

    constructor(public payload: 
        {
        post: Post
        }
    ){}
}


export class UpdatePostSuccessAction implements Action {
    readonly type = PostActionTypes.UPDATE_POST_SUCCESS;

    constructor(public payload: Post){}
}

export class UpdatePostFailAction implements Action {
    readonly type = PostActionTypes.UPDATE_POST_FAIL;
    
    constructor(public payload: any){}
}

/*
** Delete Post
**/
export class DeletePostRequestAction implements Action {
    readonly type = PostActionTypes.DELETE_POST_REQUEST

    // constructor(public payload: Post){}
    constructor(public payload: number | any) {}
}

export class DeletePostSuccessAction implements Action {
    readonly type = PostActionTypes.DELETE_POST_SUCCESS;

    constructor(public payload: number) {}
    // constructor(public payload: Post){}
}

export class DeletePostFailAction implements Action {
    readonly type = PostActionTypes.DELETE_POST_FAIL;
    
    constructor(public payload: any){}
}

export type PostAction = 
    LoadPostsRequestAction |
    LoadPostsSuccessAction |
    LoadPostsFailAction |

    LoadPostRequestAction |
    LoadPostSuccessAction |
    LoadPostFailAction |

    AddPostRequestAction |
    AddPostSuccessAction |
    AddPostFailAction |

    UpdatePostRequestAction |
    UpdatePostSuccessAction |
    UpdatePostFailAction|

    DeletePostRequestAction |
    DeletePostSuccessAction |
    DeletePostFailAction