import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { fadeIn } from '../../../animations/animate';

@Component({
  selector: 'featured-root',
  templateUrl: './featured.component.html',
  animations: [
    fadeIn('fadeInFeatured', 200),
  ]
})
export class FeaturedComponent implements OnInit{
  featuredState:String = '';
  weeklyProducts:Array<any>;

  constructor(private productService: ProductService){
    this.getWeeklyProducts()
  }
  ngOnInit() {
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
  onAppear() {
    this.featuredState = 'up'
  }
}