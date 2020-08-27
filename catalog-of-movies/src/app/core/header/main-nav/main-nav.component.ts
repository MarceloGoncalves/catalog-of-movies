import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent implements OnInit, OnDestroy {
  private isUserSub: Subscription;
  isSearach: boolean = false;
  isTune: boolean = false;

  isLogged: boolean = false
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, 
    private router: Router,
    private loginService: LoginService) {}
  
  
  ngOnInit(): void {
    this.isUserSub = this.loginService.user.subscribe(
      user =>{
        this.isLogged = !!user;
        
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

  ngOnDestroy(): void {
    this.isUserSub.unsubscribe();
  }

}
