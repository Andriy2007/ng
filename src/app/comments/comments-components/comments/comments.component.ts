import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../../models/IComment";
import {CommentDataService} from "../../comments-service/comment-data.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentDataService: CommentDataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({commentsData}) =>
      this.comments = commentsData);


  }

}
