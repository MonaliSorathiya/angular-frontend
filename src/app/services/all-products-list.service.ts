import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AllProductsListService {

  constructor(private httpClient: HttpClient) { }


  getGroceryKitchenProducts() {
    return this.httpClient.get('../../../assets/grocery_kitchen.json')
      .pipe(map((response) => {
        return response;
      }));
  }

  getSnacksDrinksProducts() {
    return this.httpClient.get('../../../assets/snacks_drinks.json')
      .pipe(map((response) => {
        return response;
      }));
  }

  getBeautyPersonalCareProducts() {
    return this.httpClient.get('../../../assets/beauty_personalcare.json')
      .pipe(map((response) => {
        return response;
      }));
  }
}
