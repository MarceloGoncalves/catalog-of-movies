import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LoginService } from 'src/app/shared/services/login.service';

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

  isRegister: boolean = false;
  isEmailInvalid: boolean = false
  errorRegister
  errorLogin
  public loginInvalid: boolean;



  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form) {
      return;
    }

    if (!this.isRegister) {
      const email = form.value.email;
      const password = form.value.password;
      console.log(email, password)
    }

    if (this.isRegister) {
      const name = form.value.name;
      const email = form.value.email;
      const password = form.value.password;
      if(password == form.value.repPass){
        this.onSingup(name, email, password);
        form.reset();
      }else{
        alert("passwords don't match")
      }
    }
  }

  private onSingup(name: string, email: string, password: string) {
    this.loginService.singup(name, email, password)
  }

}
