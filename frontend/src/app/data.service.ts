import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './models/customer.model.ts';
import { Order } from './models/order.model.ts';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  // Customers
  addCustomer(data: Customer) {
    return this.http.post<Customer>(`${this.baseUrl}/customer`, data);
  }

  getCustomers() {
    return this.http.get<Customer[]>(`${this.baseUrl}/customer`);
  }

  // Orders
  addOrder(data: Order) {
    return this.http.post<Order>(`${this.baseUrl}/order`, data);
  }

  getOrders() {
    return this.http.get<Order[]>(`${this.baseUrl}/order`);
  }
}
