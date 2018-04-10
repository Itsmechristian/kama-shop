import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CheckoutService {
  private idsCheckout: Array<any> = [];

  constructor(private productservice: ProductService) { }

  public async addCheckout(id: any) {
    this.idsCheckout.push(id)
  }

  public getCheckout() {
    return this.idsCheckout
  }

  public mappedCheckout(product) {
    let removed = this.removeDuplicate(product, 'id')
    return removed.map(x => {
      return {
        categories: x.categories,
        details: x.details,
        id: x.id,
        images: x.images,
        name: x.name,
        originalprice: x.price,
        totalprice: x.price * this.getLength(product, x.id),
        quantity: this.getLength(product, x.id)
      }
    })
  }

  private getLength(filtered, id) {
     let items = this.countCheckout(filtered)
     let count = items.find(x => x.id === id)
     return count.quantity
  }


  private countCheckout(product) {
    let arr = []
    let counter = {}
   product.forEach(e => {
     let key = e.id
     counter[key] = (counter[key] || 0) + 1
   })

    for(var key in counter) {
      arr.push({
        id: key,
        quantity: counter[key]
      })
    }
   return arr
  }

  private removeDuplicate(arr, prop) {
    let newArr = []
    let object = {};

    arr.forEach((item, index) => {
      object[arr[index][prop]] = arr[index]
    })

    Object.keys(object).forEach(e => {
      newArr.push(object[e])
    })
    return newArr
  }
}
