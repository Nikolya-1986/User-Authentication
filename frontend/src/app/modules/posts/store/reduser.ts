import { Post } from "src/app/modules/posts/models/post.model";
import { PostAction, PostActionTypes } from "./action";

export const POST_REDUSER_NODE = "posts"; 

export interface PostState {
    posts: Post[],
    ids: any[],
    entities: any,
    selectedPostId: number | null;
    loading: boolean,
    error: string | any
}

const initialState: PostState = {
    posts: [],
    ids: [],
    entities: {},
    selectedPostId: null,
    loading: false,
    error: ""
}

export const PostReducer = (state: PostState = initialState, action: PostAction) => {
    
    switch(action.type) {

        //load posts
        case PostActionTypes.LOAD_POSTS_REQUEST:
            const loadPosts = {
                ...state,
                loading: true
            }
            console.log("Request to load a posts:", loadPosts.loading)
            return loadPosts;
        
        case PostActionTypes.LOAD_POSTS_SUCCESS:
            const loadPostsSusccess = {
                ...state,
                posts: action.payload,
                loading: false,
            }
            console.log("Successfully loaded posts:", loadPostsSusccess)
            return loadPostsSusccess;

        case PostActionTypes.LOAD_POSTS_FAIL:
            const loadPostsFail = {
                ...state,
                error: action.payload,
                loding: false,
            }
            console.log("Failed to loaded posts:", loadPostsFail.error)
            return loadPostsFail;
    
        //load post
        case PostActionTypes.LOAD_POST_REQUEST:
            const loadPost = {
                ...state,
                loading: true
            }
            console.log("Request to load a post:", loadPost.loading)
            return loadPost;

        case PostActionTypes.LOAD_POST_SUCCESS:
            let postOne = [...state.posts.filter(item => item.id !== action.payload.id)]
            const loadPostSusccess = {
                ...state,
                posts: postOne,
                selectedCustomerId: action.payload.id,
                loading: false
            }
            console.log("Successfully loaded post:", loadPostSusccess.posts)
            return loadPostSusccess;

        case PostActionTypes.LOAD_POST_FAIL:
            const loadPostFail = {
                ...state,
                error: action.payload,
                loding: false,
            }
            console.log("Failed to loaded post:", loadPostFail.error)
            return loadPostFail;

        //add post
        case PostActionTypes.ADD_POST_REQUEST:
            const addPost = {
                ...state,
                loading: true
            }
            console.log("Request to add a post:", addPost.loading)
            return addPost;
        
        case PostActionTypes.ADD_POST_SUCCESS:
            const addPostSusccess = {
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false
            }
            console.log("Successfully added post:", action.payload)
            return addPostSusccess;

        case PostActionTypes.ADD_POST_FAIL:
            const addPostFail = {
                ...state,
                error: action.payload,
                loading: false
            }
            console.log("Failed to added post:", addPostFail.error)
            return addPostFail;

        //update post
        case PostActionTypes.UPDATE_POST_REQUEST:
            const updatePost = {
                ...state,
                loading: true
            }
            console.log("Request to update a post:", updatePost.loading)
            return updatePost;
        
        case PostActionTypes.UPDATE_POST_SUCCESS:
            // let postUpdate = [...state.posts.map(item => item.id === action.payload.post.id ? action.payload.post : item)]
            let postUpdate = [...state.posts]
            let newPostUpdate = postUpdate.map((post: Post) => {
                return post.id === action.payload.id ? action.payload : post;
            })
            const updatePostSusccess = {
                ...state,
                posts: newPostUpdate,
                loading: false
            }
            console.log("Successfully updated post:", action.payload)
            return updatePostSusccess;

        case PostActionTypes.UPDATE_POST_FAIL:
            const updatePostFail = {
                ...state,
                error: action.payload,
                loading: false
            }
            console.log("Failed to updated post:", updatePostFail.error)
            return updatePostFail;

        //delte post
        case PostActionTypes.DELETE_POST_REQUEST:
            const deletePost = {
                ...state,
                loading: true
            }
            console.log("Request to delete a post:", deletePost.loading)
            return deletePost;

        case PostActionTypes.DELETE_POST_SUCCESS:
            let postDelete = [...state.posts.filter(item => item.id !== action.payload)]
            const deletePostSuccess = {
                ...state,
                posts: postDelete,
                loading: false
            }
            console.log("Successfully deleted post:", postDelete)
            return deletePostSuccess;

        case PostActionTypes.DELETE_POST_FAIL:
            const deletePostFail = {
                 ...state,
                error: action.payload,
                loading: false
            }
            console.log("Failed deleting a post:", deletePostFail.error)
            return deletePostFail;

        default: 
            return state;
    }
}