import { Injectable } from '@angular/core';

@Injectable()
export class CheckOutService {
  checkouts: Array<any> = [];
  items: Array<any>;  
  public addCheckout(products) {
    this.checkouts.push(products)
    this.items = this.removeDuplicate(this.checkouts, 'id')
    const count = this.countCheckout()
    const test = this.items.map(e => {
      return {
        id: e.id,
      }
    })
  }

  public getCheckout() {
    return this.checkouts
  }
  private countCheckout() {
    let test = []
    let counter = {}

   this.checkouts.forEach(e => {
     let key = JSON.stringify(e.id)
     counter[key] = (counter[key] || 0) + 1
   })

    for(var key in counter) {
      test.push({
        id: key,
        length: counter[key]
      })
    }
   return test
  }


  private removeDuplicate(arr, prop) {
    let newArray = [];
    let object = {};

    arr.forEach((item, index) => {
      object[arr[index][prop]] = arr[index]
    })

    Object.keys(object).forEach(e => {
      newArray.push(object[e])
    })
    return newArray
  }

 
}