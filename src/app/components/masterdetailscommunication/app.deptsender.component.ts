import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/app.models';
import { Departments } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.coomunication.service';

@Component({
  selector: 'app-deptsender-component',
  template: `
     <table>
       <thead>
         <tr>
           <th>DeptNo</th>
           <th>DeptName</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let d of depts" (click)="getSelectedRow(d)">
           <td>{{d.DeptNo}}</td>
           <td>{{d.DeptName}}</td>
         </tr>
       </tbody>
     </table>
  `
})

export class DeptSenderComponent implements OnInit {
  dept: Department;
  depts = Departments;
  constructor(private serv: CommunicationService) {
    this.dept = new Department(0, '');
  }

  ngOnInit() { }


  getSelectedRow(d: Department): void {
      this.dept = d;
      this.serv.onEmiteValue(this.dept.DeptNo);
  }


}
