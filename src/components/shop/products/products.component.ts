import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CheckOutService } from '../../../services/checkout.service';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeIn } from '../../../animations/animate';


@Component({
  selector: 'products-root',
  templateUrl: './products.component.html',
  animations: [
    fadeIn('fadeInProduct', '.5s')
  ]
})
export class ProductsComponent implements OnInit {
  params:string;
  products: Array<any>;
  what:object = {
    title: 'test',
    length: 0
  };  
  constructor(
    private productsService: ProductService,
    private activatedRoute: ActivatedRoute,
    private sanitize: DomSanitizer,
    private router: Router,
    private checkoutService: CheckOutService
  ) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.productsService.getProducts().subscribe(docs => {
        let filtered = docs.filter(e => e.categories === res.category)
        if(!filtered.length && this.router.url == '/shop') {
          this.products = docs.map(doc => {
            return {
              id: doc.id,
              name: doc.name,
              price: doc.price,
              image: doc.images[0]
            }
          })
        }
        else if(!filtered.length && this.router.url !== '/shop') {
          this.router.navigateByUrl('/404', { skipLocationChange: true })
        }
        else{
          this.products = filtered.map(doc => {
            return {
              id: doc.id,
              name: doc.name,
              price: doc.price,
              image: doc.images[0]
            }
          })
        }
      })
    })
  }
  sanitizeSrc(imgUrl) {
    return this.sanitize.bypassSecurityTrustUrl(imgUrl)
  }
  onSelect(id) {
   this.router.navigate(['/product/', id]) 
  }
  onCheckout(id){
    this.router.navigate(['/checkout'])
    this.checkoutService.addCheckout({id: id, test: 1})
  }
}