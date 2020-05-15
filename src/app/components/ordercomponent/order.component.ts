import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/app.coomunication.service';
import { Order } from 'src/app/models/app.models';
import { Orders } from 'src/app/models/app.constants';


@Component({
  selector: 'order-component',
  templateUrl: './order.view.html'
})
export class OrderComponent implements OnInit {
    order: Order;
  orders = Orders;
  customerIds: Array<number>;
  _filteredOrders: Array<Order>;
  constructor(private commService: CommunicationService) {
    this.order = new Order(0,"","",0,0,0);
    this.customerIds = null;
    this._filteredOrders = new Array<Order>();
  }
  ngOnInit(): void {
    this.commService.emitValue.subscribe((data) => {
        if(data.customerIds != undefined){
            //alert(data.customerIds)
            this.customerIds = data.customerIds;
        }
    });
  }
  get filteredOrders() : Array<Order> {
    this._filteredOrders = new Array<Order>();
    if (this.customerIds != null) {
       this._filteredOrders = this.orders.filter((o,i) => {
         return this.customerIds.includes(o.CustomerId);
       });
    } else {
      this._filteredOrders = this.orders;
    }
    return this._filteredOrders;
  }
}
