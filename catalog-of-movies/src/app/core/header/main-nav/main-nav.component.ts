import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import {ThemePalette} from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


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
  
  toppings = new FormControl();

  toppingList: string[] = ['Action', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  
  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }

}
