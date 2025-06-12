import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { InputComponent } from '../input/input.component';
import { fetchData } from '../../utils/fetchData';
import { AddToCartService, Product } from '../../services/add-to-cart.service';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, InputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: any = [];
  filteredProducts: any = [];
  constructor(private cartservice: AddToCartService) {
    const data: any = (async function () {
      try {
        const data = await fetchData('/products');
        // console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    })();
    Promise.resolve(data).then((data) => {
      this.products = [...data];
      this.filteredProducts = [...data];
    });
  }

  onSearchChange(element: HTMLInputElement) {
    if (element.value) {
      this.filteredProducts = this.products.filter((product: any) =>
        product.name.toLowerCase().includes(element.value.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
  addToCart = (product: Product) => {
    this.cartservice.addToCart(product);
  };
}
