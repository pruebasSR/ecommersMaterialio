import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetalleProductoService } from '../../services/detalle-producto.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productService: DetalleProductoService) { }

  ngOnInit() {
    this.route.params.subscribe((resp: Params) => {
      // console.log(resp);
      const id = resp.id;
      this.product = this.productService.getProduct(id);
    });
  }

}
