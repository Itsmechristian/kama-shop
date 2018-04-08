import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CheckOutService {
  private products: ProductModel[] = []
  private idsCheckout: Array<string> = [];
  private test = [];

  constructor(private productservice: ProductService) { }

  public addCheckout(id: any) {
  this.idsCheckout.push(id)
  }
  public async getCheckout() {
    let filtered;

    await this.productservice.getProducts().subscribe(res => {
      res.forEach(x => {
        this.products.push(x)
      })
    })
    await this.idsCheckout.forEach(x => {
      let found = this.products.find(e => e.id === x)
      filtered = found
    })

    if(filtered === undefined) {
      return
    }
    else{
      this.test.push(filtered)
    }
    let arr = this.removeDuplicate(this.test, 'id')
    return await arr.map(x => {
      return {
        id: x.id,
        categories: x.categories,
        details: x.details,
        images: x.images,
        name: x.name,
        originalprice: x.price * this.getLength(this.test, x.id),
        totalprice: x.price,
        quantity: this.getLength(this.test, x.id)
      }
    })

  }
  private getLength(filtered, id) {
     let items = this.countCheckout(filtered)
     let count = items.find(x => x.id === id)
     return count.quantity || 1
  }


  private countCheckout(items) {
    let arr = []
    let counter = {}
   items.forEach(e => {
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
