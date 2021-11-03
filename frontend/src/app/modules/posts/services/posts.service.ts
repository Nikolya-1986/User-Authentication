import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Post } from "../models/post.model";

@Injectable({
    providedIn: 'root'
})


export class PostsService {

    baseUrl = "http://localhost:8100"

    constructor(
        private http: HttpClient
    ){}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.baseUrl}/api_posts`)
    }

    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.baseUrl}/api_posts/${id}`)
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post | any>(`${this.baseUrl}/api_posts`, post)
    }

    updatePost(post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.baseUrl}/api_posts/${post.id}`, post)
    }

    // deletePost(post: Post) {
    //     return this.http.delete<any>(`${this.baseUrl}/api_posts/${post.id}`)
    // }

    deletePost(payload: number) {
        return this.http.delete(`${this.baseUrl}/api_posts/${payload}`);
    }


    getAllMembership(): string[] {
        return ["Basic", "Pro", "Platinum"]
    }
}