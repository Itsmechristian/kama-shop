import { Component, OnInit, ViewChild, Renderer2, ElementRef, HostListener } from '@angular/core';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'featured-root',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit{
  @ViewChild('featured') featured: ElementRef;

  weeklyProducts:Array<any>;

  constructor(private productService: ProductService){
    this.getWeeklyProducts()
  }
  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const featuredElement = this.featured.nativeElement.getBoundingClientRect();
    const featuredTop = featuredElement.top + window.pageYOffset - document.documentElement.clientTop

   if(this.featured.nativeElement.offsetTop
    < window.pageYOffset) {
      console.log('1')
    }
  }

  getWeeklyProducts():void {
    this.productService.getWeeklyProducts().subscribe(res => {
      this.weeklyProducts = res.map(e => {
        return {
            id: e.id,
            name: e.productName,
            image: e.productImages[0],
            price: e.productPrice
          }
      })
    })
  }
}