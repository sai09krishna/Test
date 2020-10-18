import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ShoppingModule } from './shopping/shopping.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
