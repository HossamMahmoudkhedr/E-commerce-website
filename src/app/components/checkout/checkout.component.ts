import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { AddToCartService, Product } from '../../services/add-to-cart.service';
import { fetchData } from '../../utils/fetchData';

@Component({
  selector: 'app-checkout',
  imports: [CartItemComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  total: number = 0;
  cartItems: Product[] = [];
  constructor(private cartservice: AddToCartService) {}
  ngOnInit() {
    this.cartservice.cart$.subscribe((items) => (this.cartItems = items));
    this.cartservice.cart$.subscribe(
      (items) => (this.total = items.reduce((p, c) => p + c.price, 0))
    );
  }
  handleSubmit(e: Event) {
    e.preventDefault();

    fetchData('/orders', 'POST', { ...this.cartItems }).then((data) => {
      console.log(data);
    });
  }
}
