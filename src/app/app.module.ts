import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/home/header/header.component';
import { PromotionsComponent } from '../components/home/promotions/promotions.component';
import { FeaturedComponent } from '../components/home/featured/featured.component';
import { CategoriesComponent } from '../components/home/categories/categories.component';
import { InfoComponent } from '../components/home/info/info.component';
import { FooterComponent } from '../components/home/footer/footer.component';
import { ShopComponent } from '../components/shop/shop.component';
import { ProductsComponent } from '../components/shop/products/products.component';
import { ProductComponent } from '../components/shop/product/product.component';
import { ShopCategoriesComponent } from '../components/shop/shopcategories/shopcategories.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { NotFoundComponent } from '../components/notfound/notfound.component';

// Services
import { ProductService } from '../services/product.service';
import { CheckoutService } from '../services/checkout.service';

// Routing
import { routing } from './app.router';

// Directive
import { AppearDirective } from './appear.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    PromotionsComponent,
    FeaturedComponent,
    CategoriesComponent,
    InfoComponent,
    FooterComponent,
    ShopComponent,
    ProductsComponent,
    ProductComponent,
    ShopCategoriesComponent,
    CheckoutComponent,
    NotFoundComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'appServer ' }),
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [ ProductService, CheckoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
