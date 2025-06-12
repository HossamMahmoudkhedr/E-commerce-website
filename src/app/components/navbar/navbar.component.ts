import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { NgIf } from '@angular/common';
import { clearCookies, getCookie, removeCookie } from '../../utils/helper';
import { AddToCartService, Product } from '../../services/add-to-cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CartItemComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartCount: number = 0;
  cartItems: Product[] = [];
  showCart: boolean = false;
  loggedIn: boolean | string | undefined = false;
  constructor(private cartservice: AddToCartService) {
    this.loggedIn = getCookie('loggedIn');
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  handleLogout() {
    removeCookie('loggedIn');
    removeCookie('token');
    location.reload();
  }

  ngOnInit() {
    this.cartservice.cart$.subscribe((items) => {
      this.cartCount = items.length;
    });

    this.cartservice.cart$.subscribe((items) => {
      this.cartItems = items;
    });
  }
}
