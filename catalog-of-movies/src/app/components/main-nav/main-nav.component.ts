import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { UserService } from '../../core/services/user.service';



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent implements OnInit, OnDestroy {
  private isUserSub: Subscription;
  isSearach: boolean = false;
  isTune: boolean = false;
  userName:string = '';

  isLogged: boolean = false
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, 
    private router: Router,
    private loginService: LoginService,
    private userService: UserService) {}
  
  
  ngOnInit(): void {
    this.isUserSub = this.userService.user.subscribe(
      user =>{
        this.isLogged = !!user;
        !!user? this.userName = user.name : "user name";
      }
    )
  }

  login(){
    this.router.navigate(['/login']);
  }
  signOut(){
    this.loginService.signOut();
    this.router.navigate(['/login']);
  }

  goFavorite(){
    this.router.navigate(['/favorite']);
  }

  goHome(){
    this.router.navigate(['']);

  }

  ngOnDestroy(): void {
    this.isUserSub.unsubscribe();
  }

}
