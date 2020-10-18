import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSearchPipe } from './custom-search.pipe';



@NgModule({
  declarations: [HomeComponent, CartComponent, CustomSearchPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShoppingModule { }
