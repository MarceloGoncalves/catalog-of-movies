import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.userService.user.pipe(map(user => {
            return !!user?true: this.router.createUrlTree(['/user']);
        }
        ));
    }

}