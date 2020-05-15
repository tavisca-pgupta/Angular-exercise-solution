import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/app.constants';
import { Customer } from 'src/app/models/app.models';
import { CommunicationService } from 'src/app/services/app.coomunication.service';


@Component({
  selector: 'customer-component',
  templateUrl: './customer.view.html'
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  customers = Customers;
  serchQuery: string
  _filteredCustomers: Array<Customer>;
  constructor(private commService: CommunicationService) {
    this.customer = new Customer(0,"","","",0);
    this.serchQuery = ""
    this._filteredCustomers = new Array<Customer>();
  }
  ngOnInit(): void {
    this.commService.emitValue.subscribe((data) => {
      if(data.searchQuery != undefined)
        this.serchQuery = data.searchQuery;
    });
  }
  get filteredCustomers() : Array<Customer> {
    this._filteredCustomers = new Array<Customer>();
    if (this.serchQuery.length > 0) {
       this._filteredCustomers = this.customers.filter((c,i) => {
         return c.CustomerName.toLowerCase().includes(this.serchQuery.toLowerCase()) || c.City.toLowerCase().includes(this.serchQuery.toLowerCase());
       });
    } else {
      this._filteredCustomers = this.customers;
    }
    this.commService.onEmiteValue({
      customerIds: this._filteredCustomers.map((c) => {
        return c.CustomerId;
      })
    })
    return this._filteredCustomers;
  }
}
