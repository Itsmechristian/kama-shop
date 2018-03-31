import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/notfound/notfound.component';

const APP_ROUTES = [
  {
    path: '',
    component: HomeComponent
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