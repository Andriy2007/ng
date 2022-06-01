import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import {CommonModule} from "@angular/common";
import {PostsRoutingModule} from "./posts-routing.module";


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
