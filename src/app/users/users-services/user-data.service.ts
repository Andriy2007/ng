import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {IUser} from "../../models/IUser";



@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(this._url)
      .pipe(
      map(value => value),
      catchError((err) => throwError("aside")))

  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(this._url + '/' + id);
  }


}
