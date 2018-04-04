import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shopcategories',
  templateUrl: './shopcategories.component.html'
})
export class ShopCategoriesComponent implements OnInit {
  constructor(
    private router: Router
    ) {
  }
  ngOnInit() {
    
  }
  onSelect(e) {
    this.router.navigate(['/shop', (e.target.textContent).toLowerCase()])
  }
}