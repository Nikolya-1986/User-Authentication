import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/modules/posts/models/post.model';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.scss']
})
export class ItemPostComponent implements OnInit {

  @Input() post!: Post
  @Input() index!: number
  @Output() onOpenModal = new EventEmitter<void>()
  @Output() onDeletePost = new EventEmitter<void>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openModal() {
    this.onOpenModal.emit()
  }

  delailPost(id: number | any) {
    this.router.navigate(['/posts', id])
  }

  deletePost() {
    this.onDeletePost.emit()
  }

}
