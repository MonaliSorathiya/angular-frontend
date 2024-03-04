import { Component, OnInit } from '@angular/core';
import { AllProductsListService } from '../../services/all-products-list.service';

@Component({
  selector: 'app-genie-store-dashboard',
  templateUrl: './genie-store-dashboard.component.html'
})
export class GenieStoreDashboardComponent implements OnInit {
  groceryKitchen: any = [];
  snacksDrinks: any = [];
  beautyPersonalCare: any = [];

  constructor(
    private productListService: AllProductsListService,
  ) { }

  ngOnInit() {
    this.productListService.getGroceryKitchenProducts().subscribe((data: any) => {
      this.groceryKitchen = data.products;
    });
    this.productListService.getSnacksDrinksProducts().subscribe((data: any) => {
      this.snacksDrinks = data.products;
    });
    this.productListService.getBeautyPersonalCareProducts().subscribe((data: any) => {
      this.beautyPersonalCare = data.products;
    });
  }
}
