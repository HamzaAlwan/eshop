import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'orders-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {
  constructor(
    private ordersService: OrdersService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const order = this.ordersService.getCachedOrderData();

    if (order) {
      this.ordersService.createOrder(order).subscribe({
        next: () => {
          this.cartService.emptyCart();
          this.ordersService.removeCachedOrderData()
        },
        error: console.error,
      });
    }
  }
}
