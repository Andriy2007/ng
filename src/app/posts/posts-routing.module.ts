import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts-component/posts/posts.component";
import {HttpClientModule} from "@angular/common/http";
import {PostDetailsComponent} from "./posts-component/post-details/post-details.component";
import {PostsResolver} from "./posts-service/resolvers/posts.resolver";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children: [
      {path: ':id', component: PostDetailsComponent, resolve: {userData: PostsResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
