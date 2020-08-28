import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { BehaviorSubject } from 'rxjs';
import { UsersMoks } from '../../mocks/users-list.moks';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    usersMoks = UsersMoks;
    user = new BehaviorSubject<User>(null);

    findUser(email: string) {
        let user = this.usersMoks.find(user => user.email == email)
        if (user) {
            return user;
        }
        return false;
    }

    addUser(user: User) {
        this.usersMoks.push(user);
        this.user.next(user);
    }

    clearUser(){
        this.user.next(null)
    }


}