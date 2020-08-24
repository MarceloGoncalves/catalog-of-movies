import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [
    
    trigger('fadeAnimation', [

      state('in', style({opacity: 1})),

      transition(':enter', [
        style({opacity: 0}),
        animate(700 )
      ]),
      transition(':leave',
        animate(0, style({opacity: 0})))
    ])
  ]
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  isRegister: boolean = false;
  public loginInvalid: boolean;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
