import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { fadeIn, test, test2, test3 } from '../../animations/animate';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  animations: [
    fadeIn,
    test,
    test2,
    test3,
    trigger('slideUp', [
      transition('* => slide', animate('.5s', style({
        opacity: 0
      }))),
    ])
  ]
})
export class HomeComponent implements OnInit {
  headerBackgroundState:String = 'show';
  headingTextState:String = 'slide';

  constructor() {

  }
  ngOnInit() {

  }

}