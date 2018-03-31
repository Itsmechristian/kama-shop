import { Component, OnInit } from '@angular/core';
import { ProductService }  from '../../../services/product.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'categories-root',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit{
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
}