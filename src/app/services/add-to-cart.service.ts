import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  sizes: string[];
  colors: string[];
  selected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const existing = this.cartItems.find((element) => element.id == product.id);

    if (existing) {
      this.cartItems = this.cartItems.filter(
        (element) => element.id !== product.id
      );
    } else {
      this.cartItems.push(product);
    }
    // this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  removeProduct(id: number) {
    console.log('hi', id);
    this.cartItems = this.cartItems.filter((product) => product.id !== id);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}
