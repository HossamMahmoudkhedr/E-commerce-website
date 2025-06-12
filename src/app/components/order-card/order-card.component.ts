import { Component, Input } from '@angular/core';
import { Product } from '../../services/add-to-cart.service';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input() order: Product = {
    id: 0,
    name: '',
    description: '',
    image: '',
    price: 0,
    sizes: [],
    colors: [],
    selected: false,
  };
}
