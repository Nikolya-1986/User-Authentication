import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from 'src/app/modules/posts/models/post.model';
import { PostsService } from 'src/app/modules/posts/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})


export class AddPostComponent implements OnInit {

  @Output() onCreatePost = new EventEmitter<Post>()

  title: string = "Create A Post"
  formPost!: FormGroup
  titlePost: string = ""
  descriptionPost: string = ""
  membershipPost: string = ""
  membership!: string[]

  constructor(
    private formBilder: FormBuilder,
    private postsService: PostsService
  ) { 
    this.membership = this.getAllMembership()
  }

  ngOnInit(): void {
    this.formPost = this.formBilder.group({
      postTitle: ["", [Validators.required]],
      postDescription: ["", [Validators.required]],
      postMembership: ["", [Validators.required]]
    })
  }

  createPosts() {
    if(this.formPost.invalid) {
      return 
    } 
    
    const newPost: Post = {
      title: this.formPost.value.postTitle,
      body: this.formPost.value.postDescription,
      membership: this.formPost.value.postMembership,
      data: new Date()
    }

    this.onCreatePost.emit(newPost)
    this.formPost.reset()
  }

  getAllMembership(): string[] {
    return this.postsService.getAllMembership()
  }
}
