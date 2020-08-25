import { Injectable } from '@angular/core';

import { User } from '../model/user.model';
import { Subject } from 'rxjs';

import { UsersMoks} from '../../mocks/users-list.moks';



@Injectable({
  providedIn: 'root'
})

export class LoginService {

  user = new Subject<User>();

  isLogged: boolean = false
  private _token = 0;

  login(email: string, password: string) {


  }

  singup(name: string, email: string, password: string) {
    let user = new User(name,email,password);
    if(user){
      if(!UsersMoks.find(elem => elem.email == email)){
        UsersMoks.push(user);
        console.log(UsersMoks);
      }else{
        alert("User já existe")
      }
    }



  }

  private get expirationDate(): Date {
    return new Date(new Date().getTime() + 20 * 1000)
  }


}