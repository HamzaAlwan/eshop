import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem, CART_KEY } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());

  constructor() {}

  initCartLocalStorage() {
    const cart: Cart = this.getCart();
    if (!cart) {
      const initialCart = {
        items: [],
      };
      const initialCartJSON = JSON.stringify(initialCart);
      localStorage.setItem(CART_KEY, initialCartJSON);
    }
  }

  emptyCart() {
    const initialCart = {
      items: [],
    };

    const initialCartJSON = JSON.stringify(initialCart);
    localStorage.setItem(CART_KEY, initialCartJSON);
    this.cart$.next(initialCart);
  }

  getCart(): Cart {
    const initialCart = {
      items: [],
    };

    const cartJSONString: string =
      localStorage.getItem(CART_KEY) || JSON.stringify(initialCart);

    const cart: Cart = JSON.parse(cartJSONString);

    return cart;
  }

  setCartItem(cartItem: CartItem, updateCartItem?: boolean): Cart {
    const cart = this.getCart();
    const cartItemExist = cart.items.find(
      (item: CartItem) => item.productId === cartItem.productId
    );
    if (cartItemExist) {
      cart.items.forEach((item: CartItem) => {
        if (item.productId === cartItem.productId) {
          if (updateCartItem) {
            item.quantity = cartItem.quantity;
          } else {
            item.quantity =
              item.quantity && cartItem.quantity
                ? item.quantity + cartItem.quantity
                : 1;
          }
        }
      });
    } else {
      cart.items.push(cartItem);
    }

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJSON);
    this.cart$.next(cart);
    return cart;
  }

  deleteCartItem(productId: string) {
    const cart = this.getCart();
    const newCart = cart.items.filter(
      (item: CartItem) => item.productId !== productId
    );

    cart.items = newCart;

    const cartJSONString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJSONString);

    this.cart$.next(cart);
  }
}
