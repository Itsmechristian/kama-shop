import { Component, OnInit, ElementRef, Renderer2, ViewChild, ChangeDetectorRef, ViewChildren, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../../../services/product.service';
import { CheckoutService } from '../../../services/checkout.service';
import { ProductModel } from '../../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { trigger, state, transition, style, animate, stagger, query } from '@angular/animations';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('modalAnimation', [
      state('hide', style({
        display: 'none'
      })),
      state('show', style({
        display: 'block'
      }))
    ]),
    // Animation for Modal Overlay
    trigger('overlayAnimation', [
      state('hide', style({
        display: 'none',
        opacity: 0
      })),
      state('show', style({
        display: 'block',
        opacity: .4,
      })),
      transition('show => hide', animate(300, style({
        display: 'none',
        opacity: 0,
      }))),
      transition('hide => show', animate(300, style({
        display: 'block',
        opacity: .4,
      })))
    ]),
    // Animation for modal square
    trigger('animateSquare', [
      state('hide', style({
        display: 'none',
        transform: 'translate(-50%, -70%)',
        opacity: 0
      })),
      state('show', style({
        transform: 'translate(-50%, -50%)',
        opacity: 1
      })),
      transition('hide => show', animate(300, style({
        transform: 'translate(-50%, -50%)',
        opacity: 1        
      }))),
    ])
  ]
})
export class ProductComponent implements OnInit{


  product: ProductModel;
  similarProducts: Array<ProductModel>;

  /* Image lens */
  @ViewChild('image') image: ElementRef;
  @ViewChild('lens') lens: ElementRef;

  // Quantitiy Handler Variables
  @ViewChild('quantity') quantity: ElementRef;
  value = 1;

  // Pick Image Variables
  imagesChoosen = 0;
  ids = [];

  // Modal Variables
  overlayState = 'hide';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService,
    private checkoutService: CheckoutService,
    private router: Router,
    private sanitize: DomSanitizer,
    private element: ElementRef,
    private renderer: Renderer2,
    private changeDetector: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.productsService.getProducts().subscribe(docs => {

        // Product Handlers 
        this.product = docs.find(product => product.id === param.id)
        if(this.product === undefined) {
          // Navigate to 404 url if product isn't exist
          this.router.navigateByUrl('/404', { skipLocationChange: true })
        }
        this.ids.push(this.product.id)

        // Similar Products Handlers

        // It will filter the products that has the similar categories.
        let filtered = docs.filter(x => x.categories === this.product.categories );
        let index = filtered.indexOf(this.product)
        filtered.splice(index, 1)
        this.similarProducts = filtered;
      })
    })
  }


  changeImage(e) {
    const images = e.target.getAttribute('data-images').split(',')
    const src = e.target.src;

    let index = images.indexOf(src)

    this.imagesChoosen = index;
  }

  sanitizeSrc(img) {
    return this.sanitize.bypassSecurityTrustUrl(img)
  } 

  onCheckout() {
    this.checkoutService.addCheckout(this.ids)
    this.router.navigate(['/checkout'])
  }

  quantityHandler(e) {

    let key = e.target.getAttribute('id')
    if(key === 'plus' && this.value < 10) {
      this.value = this.value + 1;
      this.ids.push(this.product.id);
    }
    else if(key === 'minus' && this.value !== 1){
     this.value = this.value - 1;
     this.ids.splice(0, 1);
     
    }
  }

  animateModal() {
    if(this.overlayState === 'show'){
      this.overlayState = 'hide';
      this.document.body.style.overflow = 'visible';
    }
    else{
      this.overlayState = 'show';
      this.document.body.style.overflow = 'hidden';
    }   
  }
  
  onSelect(id) {
    this.router.navigate(['/product/', id])
   }
}
