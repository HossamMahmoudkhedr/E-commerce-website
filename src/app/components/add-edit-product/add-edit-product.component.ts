import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { fetchData } from '../../utils/fetchData';
import { Product } from '../../services/add-to-cart.service';

@Component({
  selector: 'app-add-edit-product',
  imports: [InputComponent],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css',
})
export class AddEditProductComponent {
  status: string = 'add';
  id: number | undefined = undefined;
  product!: Product;
  editProduct!: Product;
  constructor() {
    const endpoint = location.pathname.split('/')[1];
    const ID = location.pathname.split('/')[2];
    this.status = endpoint;

    if (endpoint === 'edit') {
      this.id = parseInt(ID);
    }
  }

  ngOnInit() {
    if (this.status === 'edit') {
      fetchData(`/products/${this.id}`).then((data) => {
        this.product = data;
        this.editProduct = data;
      });
    }
  }

  handleChange(e: HTMLInputElement) {
    const name = e.name;
    const value = e.value;

    this.editProduct = { ...this.editProduct, [name]: value };
  }

  submitForm(e: Event) {
    e.preventDefault();
    if (this.status === 'add') {
      fetchData('/products', 'POST', this.editProduct).then((data) => {
        console.log(data);
      });
    } else {
      fetchData(`/products/${this.product.id}`, 'PUT', this.editProduct).then(
        (data) => {
          console.log(data);
        }
      );
    }
  }
}
