import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'products-root',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Array<any>;

  constructor(private productsService: ProductService, private router: ActivatedRoute, private sanitize: DomSanitizer) {
  }
  ngOnInit() {
    let category = this.router.snapshot.params['category']

    this.productsService.getProducts().subscribe(res => {
      let productCategory = res.reduce((filtered, docs) => {
        if(docs.categories === category) {
          let newDocs = { 
            id: docs.id,
            name: docs.name,
            price: docs.price,
            image: docs.images[0]
          }
          filtered.push(newDocs)
        }
        return filtered
      }, [])
      console.log(productCategory)
      this.products = productCategory;
    })
  }
  sanitizeSrc(imgUrl) {
    return this.sanitize.bypassSecurityTrustUrl(imgUrl)
  }
}