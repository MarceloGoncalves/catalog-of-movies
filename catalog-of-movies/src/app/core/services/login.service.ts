import { Injectable } from '@angular/core';

import { User } from '../../shared/model/user.model';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private _id = 0;
  

  constructor(private userService: UserService){}

  login(email: string, password: string) {
    let user = this.userService.findUser(email);
    if (user) {
      return this.auth(user, password);
    }
    return false
  }

  singup(name: string, email: string, password: string) {
    if (!!this.userService.findUser(email)) {
      return false
    }

    let user = new User(name, email, password, this.getId());
    this.userService.addUser(user)
    return true
  }


  signOut() {
    this.userService.clearUser()
  }

  private getId(): number {
    return this._id++;
  }

  private auth(user: User, password): boolean {
    if (user.password == password) {
      this.userService.addUser(user)
      return true;
    }
    return false;
  }
}