import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IComment} from "../../models/IComment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentDataService {


  private _url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {

  }

  getComments(): Observable<IComment[]> {
    return this.httpClient
      .get<IComment[]>(this._url)
      .pipe(
        map(value => value),
        catchError((err) => throwError("aside")))

  }

  getComment(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(this._url + '/' + id);
  }


}
