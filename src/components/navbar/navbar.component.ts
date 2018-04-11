import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger , state} from '@angular/animations'; 

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('menuState', [
      transition('none => block', animate('0.1s', keyframes([
        style({ height: '0px' }),
        style({ height: '200px' })
        ])
      )),
      transition('block => none', animate('0.1s', keyframes([
        style({ height: '200px' }),
        style({ height: '0px' })
        ])
      )),
      state('block', style({
        display: 'block'
      })),
      state('none', style({
        display: 'none'
      }))
    ])
  ]
})
export class NavbarComponent {
  menuState: String = 'none';
  constructor() {
    
  }
  
  toggleMenu() {
    this.menuState = (this.menuState === 'none' ? 'block' : 'none')
  }
}