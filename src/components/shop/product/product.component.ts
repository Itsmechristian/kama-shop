import { Component, OnInit, ElementRef, Renderer2, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit{
  product: {
    categories: string,
    name: string,
    details: string,
    price: string,
    images: Array<string>;
  };



  /* Image lens */
  @ViewChild('image') image: ElementRef;
  @ViewChild('lens') lens: ElementRef;

  // Quantitiy Handler Variables
  @ViewChild('quantity') quantity: ElementRef;

  value = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService,
    private router: Router,
    private sanitize: DomSanitizer,
    private element: ElementRef,
    private renderer: Renderer2,
    private changeDetector: ChangeDetectorRef
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

  sanitizeSrc(img) {
    return this.sanitize.bypassSecurityTrustUrl(img)
  }

  quantityHandler(e) {
    let key = e.target.getAttribute('id')
    if(key === 'plus' && this.value < 10) {
      this.value = this.value + 1;
    }
    else if(key === 'minus' && this.value !== 1){
     this.value = this.value - 1;
    }
  }

    
}
