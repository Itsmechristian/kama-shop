import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fadeIn, slideUp } from '../../animations/animate';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  animations: [
    fadeIn('fadeInHeader', 200),
    fadeIn('fadeInInfo', 200),
    slideUp('slideUp1', '40px', '.5s'),
    slideUp('slideUp2', '20px', '1s'),
]
})
export class HomeComponent implements OnInit, AfterViewInit {
  headOneState:String = '';
  headThreeState:String = '';
  anchorState:String = '';
  salesState:String = '';
  discountState:String = '';
  aboutState:String = '';

  constructor() {

  }
  ngOnInit() {
 
  }
  ngAfterViewInit() {
    // Header Animations
    setTimeout(() => {
      this.headOneState = 'up'
    }, 1000)
    setTimeout(() => {
      this.headThreeState = 'up'
    })
    setTimeout(() => {
      this.anchorState = 'up'
    }, 1500)
    
    //Info Animations
    setTimeout(() => {
      this.salesState = 'show'
    }, 300)
    setTimeout(() => {
      this.discountState = 'show'
    }, 600)
    setTimeout(() => {
      this.aboutState = 'show'
    }, 900)
  }
}