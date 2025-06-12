import { Component, Input } from '@angular/core';
import { AddToCartService, Product } from '../../services/add-to-cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  imports: [RouterLink],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() productData!: Product;

  constructor(private cartservice: AddToCartService) {}

  removeProduct(id: number) {
    if (id) {
      this.cartservice.removeProduct(id);
    }
  }
}
