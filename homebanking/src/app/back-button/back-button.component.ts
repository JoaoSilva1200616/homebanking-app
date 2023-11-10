import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  template: '<button routerLink="/user">User Menu</button>',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {
  constructor(private location: Location) { }

}
