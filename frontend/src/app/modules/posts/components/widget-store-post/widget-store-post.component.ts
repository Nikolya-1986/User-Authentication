import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from 'src/app/modules/posts/models/post.model';
import AppState from 'src/app/modules/posts/store/state';
import *as postActions from 'src/app/modules/posts/store/action';
import *as postSelectors from 'src/app/modules/posts/store/selector';

@Component({
  selector: 'app-widget-store-post',
  templateUrl: './widget-store-post.component.html',
  styleUrls: ['./widget-store-post.component.scss']
})


export class WidgetStorePostComponent implements OnInit {

  posts$!: Observable<Post[]> 
  error$!: Observable<Error>
  loading$!: Observable<boolean>
  loadingImage$!: Observable<Boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new postActions.LoadPostsRequestAction());
    this.posts$ = this.store.pipe(select(postSelectors.getPostsListSelector));
    this.error$ = this.store.pipe(select(postSelectors.getPostErrorSelector))
    this.loadingImage$ = this.store.select(postSelectors.getPostLoadingSelector);
  }

  createPost(newPost: Post) {
    console.log("Create Post:", newPost)
    this.store.dispatch(new postActions.AddPostRequestAction(newPost))
  }

  editPost(post: Post) {
    console.log("Update Post with id:", post.id)
    this.store.dispatch(new postActions.UpdatePostRequestAction({post: post}))
  }
  
  // deletePost(post: Post) {
  //   console.log("Delete Post with id:", post.id)
  //   this.store.dispatch(new postActions.DeletePostRequestAction(post))
  // }

  deletePost(post: Post) {
    console.log("Delete Post with id:", post.id)
    this.store.dispatch(new postActions.DeletePostRequestAction(post.id))
  }

  openModal(post: Post) {
    this.store.dispatch(new postActions.LoadPostRequestAction(post.id))
    console.log('Open modal window, Post:::', post);
  }
}
