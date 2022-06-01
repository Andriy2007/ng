import { NgModule } from '@angular/core';
import { PostsComponent } from './posts-component/posts/posts.component';
import {CommonModule} from "@angular/common";
import {PostsRoutingModule} from "./posts-routing.module";
import { PostComponent } from './posts-component/post/post.component';
import { PostDetailsComponent } from './posts-component/post-details/post-details.component';
import {PostsResolver} from "./posts-service/resolvers/posts.resolver";
import {PostDataService} from "./posts-service/post-data.sevice";
import {PostResolver} from "./posts-service/resolvers/post.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostDataService,
    PostsResolver,
    PostResolver,
    ]
})
export class PostsModule { }
