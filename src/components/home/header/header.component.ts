import { Component, AfterViewInit } from '@angular/core';
import { slideUp } from '../../../animations/slideup.animate';


@Component({
    selector: 'header-root',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        slideUp('slideUp1', '40px', '.5s'),
        slideUp('slideUp2', '20px', '1s'),
    ]
})
export class HeaderComponent implements AfterViewInit {
    headOneState:String = '';
    headThreeState:String = '';
    anchorState:String = '';
    salesState:String = '';
    discountState:String = '';
    aboutState:String = '';

    constructor() { }

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