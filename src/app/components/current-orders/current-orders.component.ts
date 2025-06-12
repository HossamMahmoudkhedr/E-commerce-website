import { Component } from '@angular/core';
import { OrderCardComponent } from '../order-card/order-card.component';
import { AddToCartService, Product } from '../../services/add-to-cart.service';
import { fetchData } from '../../utils/fetchData';

@Component({
  selector: 'app-current-orders',
  imports: [OrderCardComponent],
  templateUrl: './current-orders.component.html',
  styleUrl: './current-orders.component.css',
})
export class CurrentOrdersComponent {
  orders: Product[] = [];

  constructor(private cartservice: AddToCartService) {}

  ngOnInit() {
    // this.cartservice.cart$.subscribe((items) => (this.orders = items));
    fetchData('/orders').then((data) => {
      console.log(data);
      this.orders = [...data];
    });
  }
}
