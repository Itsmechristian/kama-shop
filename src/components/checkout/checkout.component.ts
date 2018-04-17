import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../../services/product.service';
import { CheckoutService } from '../../services/checkout.service';
import { ProductModel } from '../../models/product.model';


@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  idsCheckout: Array<any>;
  checkouts: Array<any>;

  constructor(
    private productservice: ProductService,
    private checkoutservice: CheckoutService,
    private sanitize: DomSanitizer
  ) {}

  ngOnInit() {
    let arr = [];
    this.productservice.getProducts().subscribe(res => {
    this.idsCheckout = this.checkoutservice.getCheckout()
      for(let i = 0; i < this.idsCheckout.length; i ++) {
        let found = res.find(x => x.id === this.idsCheckout[i])
        arr.push(found)
        }
      this.mappedCheckout(arr)
    })
  }
  mappedCheckout(product) {
    this.checkouts = this.checkoutservice.mappedCheckout(product)
    this.checkouts.reverse()
  }

  sanitizeSrc(image) {
    return this.sanitize.bypassSecurityTrustUrl(image)
  }
}
