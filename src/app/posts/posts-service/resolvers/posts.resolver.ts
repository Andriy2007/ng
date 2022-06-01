import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IPost} from "../../../models/IPost";
import {PostDataService} from "../post-data.sevice";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {


  constructor(private postService: PostDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getPosts();
  }


}
