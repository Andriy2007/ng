import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';
import {CommentDataService} from "./comments-service/comment-data.service";
import {CommentsResolver} from "./comments-service/resolvers/comments.resolver";



@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers: [
    CommentDataService,
    CommentsResolver,
    CommentsResolver,
  ]
})
export class CommentsModule { }
