import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { Post } from 'src/app/modules/posts/models/post.model';
import AppState from 'src/app/modules/posts/store/state';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})


export class DeletePostComponent implements OnInit {

  @Input() post!: Post
  @Output() onDeletePost = new EventEmitter<void>()

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  deletePost() {//id передовать не нужно так как этот компонент отвечает за один элемент
    if(confirm("Are You Sure You want to Delete the Post?")) {
      this.onDeletePost.emit()
    }
  }

  // deletePost(){
  //   this.store.dispatch(new DeletePostAction(this.index));
  // }
}
