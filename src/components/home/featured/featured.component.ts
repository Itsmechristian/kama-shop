import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'featured-root',
  templateUrl: './featured.component.html'
})
export class FeaturedComponent implements OnInit, AfterViewInit{
  @ViewChild('featured') featured;
  weeklyProducts:Array<any>;

  constructor(private productService: ProductService){
  }
  ngOnInit() {
     this.productService.getWeeklyProducts().subscribe(res => {
      this.weeklyProducts = res.map(e => {
        return {
            id: e.id,
            name: e.productName,
            images: e.productImages[0],
            price: e.productPrice
          }
      })
    })
  }
  ngAfterViewInit() {
    
  }
}