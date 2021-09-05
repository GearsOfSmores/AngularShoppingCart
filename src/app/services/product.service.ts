import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product[] = [
    
    new Product(1, 'Product 1', 'This is the product 1 description', 0),
    new Product(1, 'Product 2', 'This is the product 2 description', 0),
    new Product(1, 'Product 3', 'This is the product 3 description', 0),
    new Product(1, 'Product 4', 'This is the product 4 description', 0),
    new Product(1, 'Product 5', 'This is the product 5 description', 0),
    new Product(1, 'Product 6', 'This is the product 6 description', 0),
    new Product(1, 'Product 7', 'This is the product 7 description', 0),
  ]

   
  
  

  constructor() { }
}
