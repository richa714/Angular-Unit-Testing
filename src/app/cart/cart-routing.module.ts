import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewCartDetailsComponent} from '../cart/view-cart-details/view-cart-details.component';


const routes: Routes = [
  {
    path: '', component: ViewCartDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
