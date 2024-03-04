import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Local variable which stores 
  public cartItems: any[] = [];
  public products = new Subject();


  getProducts(): Observable<any> {
    return this.products.asObservable();
  }

  // Add single product to the cart
  addProductToCart(product: any) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  removeProductFromCart(productId: any) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });
    // Update Observable value
    this.products.next(this.cartItems);
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;
    this.cartItems.map(item => {
      total += item.price;
    });
    return total
  }

}