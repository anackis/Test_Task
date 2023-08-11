
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../models/customer.model.ts';
import { Order } from '../models/order.model.ts';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent {
  customerData: Customer = {
    name: ''  
  };

  orderData: Order = {
    description: ''
  };

  constructor(private dataService: DataService) {}

  addCustomer() {
    this.dataService.addCustomer(this.customerData).subscribe(response => {
      console.log('Customer added:', response);
      this.customerData = { name: '' }; 
    });
  }

  addOrder() {
    this.dataService.addOrder(this.orderData).subscribe(response => {
      console.log('Order added:', response);
      this.orderData = { description: ''};  
    });
  }
}
