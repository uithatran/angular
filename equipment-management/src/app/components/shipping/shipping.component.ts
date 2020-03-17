import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    console.log("123");
    this.cartService.getShippingPrices().subscribe(data => {
      this.shippingCosts = Object(data);
      console.log(this.shippingCosts);
    })
  }

}
