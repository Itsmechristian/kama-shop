import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shopcategories',
  templateUrl: './shopcategories.component.html'
})
export class ShopCategoriesComponent {
  constructor(private router: Router) {
  }
  onSelect(e) {
    this.router.navigate(['/shop', (e.target.textContent).toLowerCase()])
  }
}