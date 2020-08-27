import { Injectable } from '@angular/core';

import { User } from '../model/user.model';
import { BehaviorSubject } from 'rxjs';

import { UsersMoks } from '../../mocks/users-list.moks';



@Injectable({
  providedIn: 'root'
})

export class LoginService {
  usersMoks = UsersMoks;

  user = new BehaviorSubject<User>(null);


  private _id = 0;

  login(email: string, password: string) {
    let user = this.usersMoks.find(user => user.email == email);
    if (user) {
      return this.auth(user, password);
    }
    return false
  }

  singup(name: string, email: string, password: string) {
    if (!!UsersMoks.find(elem => elem.email == email)) {
      return false
    }
    let user = new User(name, email, password, this.getId());
    this.usersMoks.push(user);
    this.user.next(user);
    return true
  }


  signOut() {
    this.user.next(null)
  }

  private getId(): number {
    return this._id++;
  }

  private auth(user: User, password): boolean {
    if (user.password == password) {
      this.user.next(user);
      return true;
    }
    return false;
  }
}