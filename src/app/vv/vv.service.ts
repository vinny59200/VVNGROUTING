import { Injectable } from '@angular/core';
import { Product } from './vv.model';

@Injectable({
  providedIn: 'root'
})
export class VvService {

  constructor() { }

  getProducts(): Product[] {
    const products = [];
    for (let i = 0; i < 10; i++) {
      products.push({ id: '' + i, name: 'Product ' + i });
    }
    return products;
  }

  getProductById(id: string | null): Product {
    const product = this.getProducts().filter(product => product.id === id)[0];
    return product;
  }
}
