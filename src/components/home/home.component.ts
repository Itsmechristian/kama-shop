import { Component } from '@angular/core';
import { fadeIn } from '../../animations/fadein.animate';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  animations: [
    fadeIn('fadeInHeader', 200),
    fadeIn('fadeInInfo', 200),
]
})
export class HomeComponent {

  constructor() {}
}