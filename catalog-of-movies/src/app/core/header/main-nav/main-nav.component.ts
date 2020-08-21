import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { NavBarItem } from './nav-bar-item.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    menuItems: NavBarItem[] = [
      {
        label: 'Sign Up',
        icon: 'login'
      },
      {
        label: 'settings',
        icon: 'settings'
      }
    ]
  

  constructor(private breakpointObserver: BreakpointObserver) {}

}
