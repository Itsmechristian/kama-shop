import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import 'rxjs/add/operator/map'

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit{
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
  @ViewChild('result') result: ElementRef;

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
        this.moveLens()
      })
    })
  }

  ngAfterViewInit() {
  }
  sanitizeSrc(img) {
    return this.sanitize.bypassSecurityTrustUrl(img)
  }
  
  moveLens() {
    if(this.product) {
      this.changeDetector.detectChanges()
      
      let image = this.image.nativeElement;
      let lens = this.lens.nativeElement;
      let result = this.result.nativeElement;

      let getCursorPos = (e) => {
        e.preventDefault();

        let x = 0;
        let y = 0;
        e = e || window.event;
        let imagePos = image.getBoundingClientRect();

        x = e.pageX - imagePos.left;
        y = e.pageY - imagePos.top ;

        let lensX = x - (lens.offsetWidth / 2);
        let lensY = y - (lens.offsetHeight / 2);
        
        if (lensX > image.width - lens.offsetWidth) {lensX = image.width - lens.offsetWidth;}
        if (lensX < 0) {lensX = 0;}
        if (lensY > image.height - lens.offsetHeight) {lensY = image.height - lens.offsetHeight;}
        if (lensY < 0) {lensY = 0;}

        let cx = result.offsetWidth / lens.offsetWidth;
        let cy = result.offsetHeight / lens.offsetHeight;
  
        result.style.backgroundImage = `url("${image.src}")`
        lens.style.left = `${lensX}px`;
        lens.style.top = `${lensY}px`;

        result.style.backgroundPosition = "-" + (lensX * cx) + "px -" + (lensY * cy) + "px";
      }

      this.renderer.listen(lens, 'mousemove', getCursorPos)
      this.renderer.listen(image, 'mousemove', getCursorPos)
      this.renderer.listen(lens, 'touchmove', getCursorPos)
      this.renderer.listen(image, 'touchmove', getCursorPos)
      
    }
  }
}
