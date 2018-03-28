import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  // Api Url's
  weeklyProductsUrl = 'http://localhost:5050/api/weeklyproducts'

  constructor(private http: HttpClient) {
  }
  getWeeklyProducts() {
    return this.http.get<any>(this.weeklyProductsUrl)
  }
}