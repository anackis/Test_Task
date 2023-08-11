
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../models/customer.model.ts';
import { Order } from '../models/order.model.ts';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {
  customers: Customer[] = [];
  orders: Order[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchCustomers();
    this.fetchOrders();
  }

  fetchCustomers() {
    this.dataService.getCustomers().subscribe(data => {
      this.customers = data as Customer[];
    });
  }

  fetchOrders() {
    this.dataService.getOrders().subscribe(data => {
      this.orders = data as Order[];
    });
  }
}
