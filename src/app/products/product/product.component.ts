import { Component, OnInit } from '@angular/core';
import { ToastyNotificationsService } from './../../services/toasty-notifications.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: string;
  product: Product;
  similarProduct: Product[];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    this.initProductSingleView();
  }

  // helper fn to save repeating same code in init and doCheck hooks
  initProductSingleView() {
    this.id = this.route.snapshot.params['id'];
    this.prodService.fetchSingleProductFromDB(this.id).subscribe(
      product => {
        this.product = product;
        // this.getSimilarProducts(this.product.type, this.product.id);
      },
      err => console.error(err),
      () => this.isLoading = false
    );
  }

  addToCart(product: Product) {
    this.prodService.addToCart(product);
  }

}
