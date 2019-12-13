import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
//Guards
import { AdminGuard } from './guards/admin.guard';

import { ProductFormComponent } from './components/product-form/product-form.component';
// import { NavSideBarComponent } from './components/nav-side-bar/nav-side-bar.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavSideBarComponent } from './components/nav-side-bar/nav-side-bar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent, canActivate: [AdminGuard]},
  { path: '', component: NavSideBarComponent , children: [
    { path: 'admin', component:AdminComponent  },
    { path: 'create', component: ProductFormComponent }
  ]},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
