import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {IPost} from "../../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {


  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {

  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient
      .get<IPost[]>(this._url)
      .pipe(
        map(value => value),
        catchError((err) => throwError("aside")))

  }

  getPost(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(this._url + '/' + id);
  }


}
