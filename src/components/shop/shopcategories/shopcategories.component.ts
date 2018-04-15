import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shopcategories-root',
  templateUrl: './shopcategories.component.html',
  styleUrls: ['./shopcategories.component.scss'],
 
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