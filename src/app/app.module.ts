import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CartComponent, CheckoutDialog } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { SnacksDrinksCategoryComponent } from './components/products-category/snacks-drinks-category/snacks-drinks-category.component';
import { BeautyPersonalcareCategoryComponent } from './components/products-category/beauty-personalcare-category/beauty-personalcare-category.component';
import { GroceryKitchenCategoryComponent } from './components/products-category/grocery-kitchen-category/grocery-kitchen-category.component';
import { GenieStoreDashboardComponent } from './components/genie-store-dashboard/genie-store-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    SnacksDrinksCategoryComponent,
    BeautyPersonalcareCategoryComponent,
    GroceryKitchenCategoryComponent,
    GenieStoreDashboardComponent,
    RegisterComponent,
    LoginComponent,
    CheckoutDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule, MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
