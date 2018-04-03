import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  // Api Url's
  // Production Url
  productsUrl = 'http://localhost:5000/api/products'
  weeklyProductsUrl = 'https://www.itsmechristian.co.uk/api/weeklyproducts'
  salesProductsUrl = 'https://www.itsmechristian.co.uk/api/saleproducts'
  bestSellersUrl = 'https://www.itsmechristian.co.uk/api/bestsellers'
  kidsProductUrl = 'https://www.itsmechristian.co.uk/api/kidsproducts'


  constructor(private http: HttpClient) {
  }
  getProducts() {
    return this.http.get<any>(this.productsUrl)
  }
  getWeeklyProducts() {
    return this.http.get<any>(this.weeklyProductsUrl)
  }
  getSaleProducts() {
    return this.http.get<any>(this.salesProductsUrl)
  }
  getBestSellersProducts() {
    return this.http.get<any>(this.bestSellersUrl)
  }
  getKidsProducts() {
    return this.http.get<any>(this.kidsProductUrl)
  }
}