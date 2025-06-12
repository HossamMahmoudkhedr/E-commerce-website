import { Component, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../services/add-to-cart.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() colors: string[] = [];
  @Input() sizes: string[] = [];
  @Input() image: string = '';
  @Input() addToCartFun!: (product: Product) => void;
  @Input() selected: boolean = false;
  product!: Product;
  added: boolean = false;
  ngOnInit() {
    this.product = {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      colors: this.colors,
      sizes: this.sizes,
      image: this.image,
      selected: this.selected,
    };
  }
  callAddToCart() {
    if (this.addToCartFun) {
      this.added = !this.added;
      this.addToCartFun(this.product);
    }
  }
}
