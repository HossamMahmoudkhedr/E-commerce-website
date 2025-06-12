import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { OrderCardComponent } from '../order-card/order-card.component';
import { InputComponent } from '../input/input.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddToCartService, Product } from '../../services/add-to-cart.service';

@Component({
  selector: 'app-profile',
  imports: [
    OrderCardComponent,
    InputComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
