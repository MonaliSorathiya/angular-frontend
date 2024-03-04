import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-beauty-personalcare-category',
  templateUrl: './beauty-personalcare-category.component.html'
})
export class BeautyPersonalcareCategoryComponent implements OnInit {
  @Input() beautyPersonalCareProducts: any = [];
  singleProduct: any[] = [];
  isAdded: any;

  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit() {

    this.isAdded = new Array(this.beautyPersonalCareProducts.length);
    this.isAdded.fill(false, 0, this.beautyPersonalCareProducts.length);

    this.ProductsService.getProducts().subscribe((data: string | any[]) => {
      if (data && data.length > 0) {
      } else {
        this.beautyPersonalCareProducts.map((item: any, index: string | number) => {
          this.isAdded[index] = false;
        });
      }
    });
  }


  // Add item in cart on Button click
  addToCart(productId: any) {
    this.singleProduct = this.beautyPersonalCareProducts.filter((product: { id: any; }) => {
      return product.id === productId;
    });
    this.ProductsService.addProductToCart(this.singleProduct[0]);

  }
}

