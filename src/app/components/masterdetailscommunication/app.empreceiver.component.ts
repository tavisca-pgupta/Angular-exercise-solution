import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/app.models';
import { Employees } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.coomunication.service';

@Component({
  selector: 'app-empreceiver-component',
  template: `
     <table>
       <thead>
         <tr>
         <th>EmpNo</th>
         <th>EmpName</th>
           <th>DeptNo</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let e of filteredEmp">
         <td>{{e.EmpNo}}</td>
         <td>{{e.EmpName}}</td>
           <td>{{e.DeptNo}}</td>
         </tr>
       </tbody>
     </table>
  `
})

export class EmpReceiverComponent implements OnInit {
  emp: Employee;
  emps = Employees;
  deptno: number;
  _filteredEmp: Array<Employee>;
  constructor(private serv: CommunicationService) {
    this.emp = new Employee(0, '', 0);
    this.deptno = 0;
    this._filteredEmp = new Array<Employee>();
    console.log('Constructor Called');
  }
  // receiver will subscribe to the event from the service
  // and receiv data from the event
  ngOnInit() {
      console.log('in ngOnInit() method')
      this.serv.emitValue.subscribe((data) => {
          console.log(`The Received value is ${data}`);
          this.deptno = data;
      });
  }

  // when the deptno property is changed
  // the component will be updated
  // component will update all propertis inside it
  // and updated values will be Exposed to UI
  get filteredEmp() : Array<Employee> {
    this._filteredEmp = new Array<Employee>();
    if (this.deptno > 0) {
       this._filteredEmp = this.emps.filter((e,i) => {
         return e.DeptNo === this.deptno;
       });
    } else {
      this._filteredEmp = this.emps;
    }
    return this._filteredEmp;
  }
}
