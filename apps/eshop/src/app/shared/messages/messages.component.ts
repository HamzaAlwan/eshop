import { Component, OnInit } from '@angular/core';
import { CartService } from '@eshop/orders';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'eshop-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Cart Updated!',
      });
    });
  }
}
