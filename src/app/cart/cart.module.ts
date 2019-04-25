import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartDetailsComponent } from './view-cart-details/view-cart-details.component';
import {CartRoutingModule} from './cart-routing.module'
@NgModule({
  declarations: [ViewCartDetailsComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
