import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ShopComponent } from '../components/shop/shop.component';
import { NotFoundComponent } from '../components/notfound/notfound.component';
import { ModuleWithProviders } from '@angular/core';
import { ProductComponent } from '../components/shop/product/product.component';


const APP_ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop/:category',
    component: ShopComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '/404'
  }
]

export const routing = RouterModule.forRoot(APP_ROUTES)