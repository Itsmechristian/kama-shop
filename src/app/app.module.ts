import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { FeaturedComponent } from '../components/home/featured/featured.component';
import { CategoriesComponent } from '../components/home/categories/categories.component';
import { ShopComponent } from '../components/shop/shop.component';
import { ProductsComponent } from '../components/shop/products/products.component';
import { ProductComponent } from '../components/shop/product/product.component';
import { ShopCategoriesComponent } from '../components/shop/shopcategories/shopcategories.component';
import { CheckOutComponent } from '../components/checkout/checkout.component';
import { NotFoundComponent } from '../components/notfound/notfound.component';


// Services
import { ProductService } from '../services/product.service';
import { CheckOutService } from '../services/checkout.service';

// Routing
import { routing } from './app.router';

// Directive
import { AppearDirective } from './appear.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FeaturedComponent,
    CategoriesComponent,
    ShopComponent,
    ProductsComponent,
    ProductComponent,
    ShopCategoriesComponent,
    CheckOutComponent,
    NotFoundComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [ ProductService, CheckOutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
