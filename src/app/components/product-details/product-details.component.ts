import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchData } from '../../utils/fetchData';
import { AddToCartService } from '../../services/add-to-cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: any = {};
  constructor(
    private route: ActivatedRoute,
    private cartservice: AddToCartService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      fetchData(`/products/${id}`).then((data) => {
        console.log(data);
        this.product = data;
      });
    });
  }

  addProduct() {
    this.cartservice.addToCart(this.product);
  }
}
