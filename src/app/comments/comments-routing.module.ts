import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentsResolver} from "./comments-service/resolvers/comments.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
//    canDeactivate:[CommentGuard],
    //  canActivate:[CommentGuard],
    children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {commentData: CommentsResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
