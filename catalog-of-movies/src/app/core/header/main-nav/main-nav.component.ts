import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
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

export class MainNavComponent implements OnInit {
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
    this.loginService.isLogged.subscribe(
      res =>{
        this.isLogged = res;
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

}
