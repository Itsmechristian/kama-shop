import { Component, OnInit, Input } from '@angular/core';
import { CheckOutService } from '../../services/checkout.service';


@Component({
  templateUrl: './checkout.component.html'
})
export class CheckOutComponent implements OnInit {
  items: Array<any>;
  constructor(
    private checkoutService: CheckOutService
   ) { }

 ngOnInit() {
   this.checkoutService.getCheckout().then(res => {
     console.log(res)
   })
 }
}
