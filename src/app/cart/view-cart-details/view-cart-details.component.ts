import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view-cart-details',
  templateUrl: './view-cart-details.component.html',
  styleUrls: ['./view-cart-details.component.css']
})
export class ViewCartDetailsComponent implements OnInit {

  items: any;
  constructor(private service: CartService) {
  }

  ngOnInit() {
    console.log('in oninit');
    this.service.getItems()
      .subscribe((data) =>
        this.items = data['items']);

  }
}
export function compute(number) {
  if (number < 0) {
    return 0;
  } else {
    return number + 1;
  }
}
export function greet(name) {
  return 'Welcome' + name;
}

export function getCurrencies(){
  return ['USD', 'INR', 'EUR'];
}
