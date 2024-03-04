import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-grocery-kitchen-category',
  templateUrl: './grocery-kitchen-category.component.html'
})
export class GroceryKitchenCategoryComponent implements OnInit {
  @Input() groceryKitchenProducts: any = [];
  singleProduct: any[] = [];
  isAdded: any;

  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit() {

    this.isAdded = new Array(this.groceryKitchenProducts.length);
    this.isAdded.fill(false, 0, this.groceryKitchenProducts.length);

    this.ProductsService.getProducts().subscribe((data: string | any[]) => {
      if (data && data.length > 0) {
      } else {
        this.groceryKitchenProducts.map((item: any, index: string | number) => {
          this.isAdded[index] = false;
        });
      }
    });
  }


  // Add item in cart on Button click
  addToCart(productId: any) {
    this.singleProduct = this.groceryKitchenProducts.filter((product: { id: any; }) => {
      return product.id === productId;
    });
    this.ProductsService.addProductToCart(this.singleProduct[0]);

  }

}

