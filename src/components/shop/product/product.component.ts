import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import 'rxjs/add/operator/map'

@Component({
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
  product: {
    categories: string,
    name: string,
    details: string,
    price: string,
    images: Array<string>;
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.productsService.getProducts().subscribe(docs => {
        this.product = docs.find(product => product.id === param.id)
        if(this.product === undefined) {
          this.router.navigateByUrl('/404', { skipLocationChange: true })
        }
      })
    })
  }
}
