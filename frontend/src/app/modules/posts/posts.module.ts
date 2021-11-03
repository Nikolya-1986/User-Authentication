import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from 'src/app/modules/posts/store/effect';

import { PagePostsComponent } from './components/page-posts/page-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostReducer, POST_REDUSER_NODE } from 'src/app/modules/posts/store/reduser';
import { ItemPostComponent } from './components/item-post/item-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { WidgetStorePostComponent } from './components/widget-store-post/widget-store-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PagePostsComponent,
    AddPostComponent,
    ListPostsComponent,
    ItemPostComponent,
    DeletePostComponent,
    EditPostComponent,
    WidgetStorePostComponent,
    DetailPostComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "", component: PagePostsComponent
      },
      {
        path: ":id", component: DetailPostComponent, data:[
          {
            staticInform: "Don't tell anyone about your secret key"
          }
        ]
      }
    ]),
    StoreModule.forFeature("posts", PostReducer),
    EffectsModule.forFeature([
      PostsEffects
    ]),
  ]
})

export class PostsModule { }