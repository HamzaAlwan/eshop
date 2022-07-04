import { Product } from "@eshop/products";

export const CART_KEY = 'cart';

export class Cart {
  items: CartItem[] = [];
}

export class CartItem {
  productId?: string;
  quantity?: number;
}

export class CartItemDetailed {
  product?: Product;
  quantity?: number;
}
