import { Component } from '@angular/core';
import { Product } from '../../services/add-to-cart.service';
import { fetchData } from '../../utils/fetchData';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  products: Product[] = [];

  ngOnInit() {
    fetchData('/products').then((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    fetchData(`/products/${id}`, 'DELETE').then((data) => {
      console.log(data);
    });
  }
}
