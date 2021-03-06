import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}
  getItems() {
    return this.http.get('assets/cartItems.json');
  }
}
