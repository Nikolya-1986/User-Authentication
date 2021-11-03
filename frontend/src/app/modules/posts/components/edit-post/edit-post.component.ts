import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Post } from 'src/app/modules/posts/models/post.model';
import { PostsService } from 'src/app/modules/posts/services/posts.service';
import { getPostCurrent, getPostCurrentID, getPostErrorSelector } from 'src/app/modules/posts/store/selector';
import AppState from 'src/app/modules/posts/store/state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})


export class EditPostComponent implements OnInit {

  @Input() post!: Post
  @Output() onEditPosts = new EventEmitter<Post>()

  postSubscription!: Subscription
  title: string = "Edit post!"
  formEditPost!: FormGroup
  titleEditPost: string = ""
  descriptionEditPost: string = ""
  membershipEditPost: string = ""
  membershipEdit!: string[]

  constructor(
    private postsService: PostsService,
    private formBilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.membershipEdit = this.getAllMembership()
  }

  ngOnInit(): void {
    // this.titleEditPost = this.post.title
    // this.descriptionEditPost = this.post.body
    // this.membershipEditPost = this.post.membership

    this.formEditPost = this.formBilder.group({
      postEditTitle: ["", [Validators.nullValidator! && Validators.required]],
      postEditDescription: ["", [Validators.nullValidator! && Validators.required]],
      postEditMembership: ["", [Validators.nullValidator! && Validators.required]],
      id: null
    })

    const post$: Observable<Post> = this.store.select(
      getPostCurrent
    )

    post$.subscribe(currentPost => {
      if(currentPost) {
        this.formEditPost.patchValue({
          postEditTitle: currentPost.title,
          postEditDescription: currentPost.body,
          postEditMembership: currentPost.membership,
          id: currentPost.id,
          data: currentPost.data
        })
      }
    })
  }

  getAllMembership(): string[] {
    return this.postsService.getAllMembership()
  }

  editPosts() {
    if(this.formEditPost.invalid) {
      return
    }

    const newEditPost: Post = {
      title: this.formEditPost.value.postEditTitle,
      body: this.formEditPost.value.postEditDescription,
      membership: this.formEditPost.value.postEditMembership,
      id: this.formEditPost.value.id,
      data: new Date()
    }

    this.onEditPosts.emit(newEditPost)
    this.formEditPost.reset()
  }

  ngOnDestroy() {
    if(this.postSubscription){
      const postUnsubscribe = this.postSubscription.unsubscribe()
      console.log(postUnsubscribe)
    }
  }
}
