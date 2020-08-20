import { Component, OnInit } from '@angular/core';

import { NavBarItem } from './nav-bar-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems: NavBarItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'Sing In',
      icon: 'help'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
