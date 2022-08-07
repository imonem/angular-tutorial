import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items = this.cartService.getItems();
total = this.cartService.cartTotal();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
