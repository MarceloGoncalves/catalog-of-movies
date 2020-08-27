import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return this.loginService.user.pipe(map(user => {
            return !!user
        }
        ));
    }

}