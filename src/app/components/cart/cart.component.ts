import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cartItems: any;
  totalAmmount: any;

  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.productService.getProducts().subscribe((data: any) => {
      this.cartItems = data;
      this.totalAmmount = this.productService.getTotalPrice();
    });

  }

  // Remove item from cart list
  removeItemFromCart(productId: any) {
    console.log('productId: removeItemFromCart', productId);
    this.productService.removeProductFromCart(productId);
  }

  emptyCart() {
    this.productService.emptryCart();
  }
  checkout() {
    const dialogRef = this.dialog.open(CheckoutDialog, {
      width: '90%', height: '90vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'checkout-dialog.component.html',
  styleUrl: './checkout-dialog.component.scss'
})
export class CheckoutDialog {
  formData: any = {};
  durationInSeconds = 5;
  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CheckoutDialog>
  ) { }

  placeOrder() {
    console.log('text', this.formData)
    if (this.formData) {
      this.snackBar.open('Order Placed', null, {
        duration: this.durationInSeconds * 1000,
        panelClass: 'success-dialog',
      });
      this.dialogRef.close();
    }
  }
  cancel() {
    this.dialogRef.close();
  }
}