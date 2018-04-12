import { Component, OnInit } from '@angular/core';
import { ProductService }  from '../../../services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeIn } from '../../../animations/fadein.animate';


@Component({
  selector: 'categories-root',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
    fadeIn('fadeIn', 200),
  ]
  
})
export class CategoriesComponent implements OnInit{
  featuredState:String = '';
  saleProducts: Array<any>;
  bestSellers: Array<any>;
  kidsProducts: Array<any>;

  constructor(private productservice: ProductService, private sanitize: DomSanitizer){
    this.getWeeklyProducts()
    this.getBestSellersProducts()
    this.getKidsProducts()

  }
  ngOnInit(){
  }
  sanitizeSrc(imgUrl){
    return this.sanitize.bypassSecurityTrustUrl(imgUrl)
  }

  getWeeklyProducts():void {
    this.productservice.getSaleProducts().subscribe(res => {
      this.saleProducts = res;
    })
  }

  getBestSellersProducts():void {
    this.productservice.getBestSellersProducts().subscribe(res => {
      this.bestSellers = res;
    })
  }

  getKidsProducts():void {
    this.productservice.getKidsProducts().subscribe(res => {
      this.kidsProducts = res;
    })
  }

  onAppear() {
    this.featuredState = 'show'
  }
}