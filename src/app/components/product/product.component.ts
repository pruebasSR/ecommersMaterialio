import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

//  @Input() product: Product;
//  @Output() productClicked: EvenEmmitter<any> = new EventEmmiter();

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

  ngOnInit() {
  }

  addCar(){
    console.log('este es el carrito');
    // this.product = this.product;
    // this.productClicked.emit(this.product.id);
  }
}
