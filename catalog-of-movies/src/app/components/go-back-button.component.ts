import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-go-back-button',
  template: `<button class='withe' (click)="goBack()" mat-icon-button>
  <mat-icon class="white">
      keyboard_backspace</mat-icon>
</button>`,
  styles: ['.white { color: white; }']
})
export class GoBackButtonComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }
}
