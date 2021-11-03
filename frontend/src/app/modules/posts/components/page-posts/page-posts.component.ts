import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class PagePostsComponent {

  title: string = "Page Post"
  
  constructor() { }

}
