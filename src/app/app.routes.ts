import { Routes } from '@angular/router';
import { ProductListComponent } from '../features/products/components/product-list.component';
import { ProductDetailComponent } from '../features/products/components/product-detail.component';
import { LoginComponent } from '../features/auth/components/login.component';
import { ProfileComponent } from '../features/users/components/profile.component';

export const routes: Routes = [
  { path: '',component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];
