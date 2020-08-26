import { Injectable } from '@angular/core';

import { User } from '../model/user.model';
import { Subject } from 'rxjs';

import { UsersMoks } from '../../mocks/users-list.moks';



@Injectable({
  providedIn: 'root'
})

export class LoginService {
  usersMoks = UsersMoks;
  user = new Subject<User>();
  isLogged= new Subject<boolean>();
  private _id = 0;

  login(email: string, password: string) {
    let user = this.usersMoks.find(user => user.email == email);
    if(user){
     return this.auth(user,password);
    }
    return false
  }

  singup(name: string, email: string, password: string) {
    let user = new User(name, email, password, this._id);
    if (user) {
      if (!UsersMoks.find(elem => elem.email == email)) {
        user.id = this.getId();
        this.usersMoks.push(user);
        this.user.next(user)
        this.isLogged.next(true);
        return true;
      } else {
        return false;
      }
    }
  }

  signOut(){
    this.user.next()
    this.isLogged.next(false);
  }

  private getId(): number {
    return this._id++;
  }

  private auth(user: User, password){
    if(user.password == password){
      this.user.next(user);
      this.isLogged.next(true)
      return true;
    }
    return false;
  }
}