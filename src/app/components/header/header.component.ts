import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartProductCount: number = 0;
  products: any = [];

  constructor(
    private productService: ProductsService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.cartProductCount = data.length;
    })
  }
  logout() {
    this.router.navigate(['/']);
  }
}
