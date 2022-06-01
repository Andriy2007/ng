import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import { UsersComponent } from './users-components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserGuard} from "./users-services/guards/user.guard";
import {UserDataService} from "./users-services/user-data.service";
import {UsersResolver} from "./users-services/resolvers/users.resolver";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UserComponent} from "./users-components/user/user.component";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UserDataService,
    UsersResolver,
    UserResolver,
    UserGuard,
  ]
})

export class UsersModule {
}
