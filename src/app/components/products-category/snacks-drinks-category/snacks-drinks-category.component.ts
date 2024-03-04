import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-snacks-drinks-category',
  templateUrl: './snacks-drinks-category.component.html'
})
export class SnacksDrinksCategoryComponent implements OnInit {
  @Input() snacksDrinksProducts: any = [];
  singleProduct: any[] = [];
  isAdded: any;

  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit() {

    this.isAdded = new Array(this.snacksDrinksProducts.length);
    this.isAdded.fill(false, 0, this.snacksDrinksProducts.length);

    this.ProductsService.getProducts().subscribe((data: string | any[]) => {
      if (data && data.length > 0) {
      } else {
        this.snacksDrinksProducts.map((item: any, index: string | number) => {
          this.isAdded[index] = false;
        });
      }
    });
  }


  // Add item in cart on Button click
  addToCart(productId: any) {
    this.singleProduct = this.snacksDrinksProducts.filter((product: { id: any; }) => {
      return product.id === productId;
    });
    this.ProductsService.addProductToCart(this.singleProduct[0]);

  }
}
