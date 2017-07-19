import { Injectable } from '@angular/core';
import { Product } from './models/product';


@Injectable()
export class LoadProductService {
productToBeLoaded:Product;


  constructor() { }

setProduct(product){
this.productToBeLoaded = product;
console.log(this.productToBeLoaded);
}

getProduct(){
console.log(this.productToBeLoaded)
  return this.productToBeLoaded;
}

}
