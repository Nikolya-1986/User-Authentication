import { Component, OnInit, Output, EventEmitter, Input, ComponentFactoryResolver, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import AppState from 'src/app/modules/posts/store/state';
import { Post } from 'src/app/modules/posts/models/post.model';
// import { ModalDirective } from 'src/app/shared/modal_window/directive/modal.directive';
// import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class ListPostsComponent implements OnInit {

  // @ViewChild(ModalDirective, { static: false }) modalDirective!: ModalDirective;
  @Output() onEditPost = new EventEmitter<Post>()
  @Output() onDeletePost = new EventEmitter<Post>()
  @Output() onOpenModal = new EventEmitter<Post>()  
  @Input() posts: Post[] | any = []
  @Input() error!: Error | null

  title: string = "My Posts"
  showDialog = false;

  constructor(
    private resolver: ComponentFactoryResolver, 
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  openModal(id: number, post: Post) {
    this.showDialog = true

    // const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    // this.modalDirective.containerRef.clear()

    // const componentModal = this.modalDirective.containerRef.createComponent(modalFactory)
    // componentModal.instance.title = "Dinamic Title"
    // componentModal.instance.close.subscribe(() => {
    //   this.modalDirective.containerRef.clear()
    // })
    this.onOpenModal.emit(post)
  }

  editPost(post: Post) {
    console.log(post);
    this.onEditPost.emit(post)
  }

  deletePost(post: Post) {
    this.onDeletePost.emit(post)
  }
}
