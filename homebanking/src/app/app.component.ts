import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeBanking';
}

import { trigger, transition, style, animate } from '@angular/animations';

export const loginButtonAnimation = trigger('loginButtonAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-10px)' }),
    animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);