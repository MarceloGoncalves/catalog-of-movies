import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LoginService } from 'src/app/shared/services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(700)
      ]),
      transition(':leave',
        animate(0, style({ opacity: 0 })))
    ])
  ]
})
export class LoginPageComponent implements OnInit {

  isLogging: boolean = false;
  isRegister: boolean = false;
  isEmailInvalid: boolean = false
  errorRegister
  errorLogin



  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {


  }

  onSubmit(form: NgForm) {
    if (!form) {
      return;
    }
    this.isLogging = true;

    const email = form.value.email;
    const password = form.value.password;

    if (!this.isRegister) {
      if (this.loginService.login(email, password)) {
        this.router.navigate(['/'])
      }
      else {
        this.isLogging = false;
      }
    }

    if (this.isRegister) {
      const password = form.value.password;
      const confirmPass = form.value.confirmPass;
      const name = form.value.name;
      if (password == confirmPass) {
        let singup = this.onSingup(name, email, password);
        if (singup) {
          this.router.navigate(['/'])
        }
      }
      else {
        alert("Register error")
        this.isLogging = false;
      }
    }

  }

  private onSingup(name: string, email: string, password: string): boolean {
    return this.loginService.singup(name, email, password)
  }

}
