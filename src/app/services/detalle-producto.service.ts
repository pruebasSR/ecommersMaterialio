import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {
  product: Product[] = [
    {
      id: '1',
      title: 'camiseta',
      price: 250,
      description: 'Esta es una camiseta',
      image: 'assets/images/camiseta.png',
    },
    {
      id: '2',
      title: 'camiseta2',
      price: 250,
      description: 'Esta es un hoodie',
      image: 'assets/images/hoodie.png',
    },
    {
      id: '3',
      title: 'camiseta3',
      price: 250,
      description: 'Esta es un mug',
      image: 'assets/images/mug.png',
    },
    {
      id: '4',
      title: 'camiseta4',
      price: 250,
      description: 'Esta es un stickers2',
      image: 'assets/images/stickers2.png',
    },
    {
      id: '5',
      title: 'camiseta5',
      price: 250,
      description: 'Esta es una camisa',
      image: 'assets/images/camiseta.png',
    }
];

  constructor() { }
  getAllProducts(){
    return this.product;
  }
  getProduct(id: string){
    return this.product.find(item => id === item.id);
    }
}
