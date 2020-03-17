import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  shippings;
  constructor(
    private httpClient: HttpClient,
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItem() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // private extractData(res: Response) {
  //   let body = res;
  //   return body || { };
  // }

  getShippingPrices() {
    return this.httpClient.get('../../assets/shipping.json');
  }
}
