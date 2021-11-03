import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/modules/posts/models/post.model';
import { PostsService } from 'src/app/modules/posts/services/posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit, OnDestroy {

  title: string = "Detail about post"
  statisticalInformation!: string
  private postId!: number
  public postDetail!: Post
  private postSubscribe!: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.statisticalInformation = this.activatedRoute.snapshot.data[0]['staticInform']

    this.activatedRoute.params.subscribe((params: Params) => {
      this.postId  = params['id'];
      const detail = this.postsService.getPost(this.postId);
      this.postSubscribe = detail.subscribe((res) => {
          if(res !== undefined) {
              this.postDetail = res;
          } else {
            (error: any) => {
              console.log(error)
            }
          }
        }
      )
    });
  }

  ngOnDestroy() {
    const postUnSubscribe = this.postSubscribe.unsubscribe()
    console.log(postUnSubscribe)
  }
}
