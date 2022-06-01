import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../../../models/IUser";
import {Observable} from "rxjs";
import {UserDataService} from "../user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {


  constructor(private userService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    let {id} = route.params;
    return this.userService.getUser(id);
  }


}
