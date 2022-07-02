import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Order } from '../models/order';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiURLOrders = environment.apiUrl + 'orders';
  apiURLProducts = environment.apiUrl + 'products';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURLOrders);
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiURLOrders}/${orderId}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiURLOrders, order);
  }

  updateOrder(
    orderStatus: { status: string },
    orderId: string
  ): Observable<Order> {
    return this.http.put<Order>(`${this.apiURLOrders}/${orderId}`, orderStatus);
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLOrders}/${orderId}`);
  }

  getOrdersCount(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLOrders}/get/count`)
      .pipe(map((response: any) => response.ordersCount));
  }

  getTotalSales(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLOrders}/get/total-sales`)
      .pipe(map((response: any) => response.totalSales));
  }

  createCheckoutSession(orderItems: OrderItem[]) {
    return this.http
      .post(`${this.apiURLOrders}/create-checkout-session`, orderItems)
  }

  cacheOrderData(order: Order) {
    if (order) {
      const orderString = JSON.stringify(order);
      localStorage.setItem('order', orderString);
    }
  }

  getCachedOrderData(): Order | null {
    let order = localStorage.getItem('order');
    if (order) {
      order = JSON.parse(order);
      return order as Order;
    } else return null;
  }

  removeCachedOrderData(): void {
    localStorage.removeItem('order');
  }
}
