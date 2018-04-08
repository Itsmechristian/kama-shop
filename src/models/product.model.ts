export class ProductModel {
  public id: string,
  public categories: string,
  public details: string,
  public images: array,
  public name: string,
  public price: string

  constructor(
    id: string,
    categories: string,
    details: string,
    images: array,
    name: string,
    price: string
  ) {
     this.id: id,
     this.categories: categories,
     this.details: details,
     this.images: images,
     this.name: name,
     this.price: price
  }
}
