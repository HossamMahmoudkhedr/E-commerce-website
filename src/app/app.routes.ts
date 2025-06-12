import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { CurrentOrdersComponent } from './components/current-orders/current-orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: InfoFormComponent },
      { path: 'currentOrders', component: CurrentOrdersComponent },
    ],
  },
  { path: 'checkout', component: CheckoutComponent },
];
