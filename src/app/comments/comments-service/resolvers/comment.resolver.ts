import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IComment} from "../../../models/IComment";
import {CommentDataService} from "../comment-data.service";


@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IComment> {
  constructor(private commentService: CommentDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    let {id} = route.params;
    return this.commentService.getComment(id);
  }


}
