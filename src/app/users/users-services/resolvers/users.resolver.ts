import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../../../models/IUser";
import {UserDataService} from "../user-data.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {


  constructor(private userService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getUsers();
  }


}
