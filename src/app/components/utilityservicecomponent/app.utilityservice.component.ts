import { Component, OnInit } from '@angular/core';
import { UtilityService } from './../../services/app.utility.service';
@Component({
  selector: 'app-utilityservice-component',
  template: `
     <div>
       <h2>The Simple Service Demo</h2>
       <div>
          <strong>
            Length of {{name}} is = {{length}}
          </strong>
       </div>
       <div>
          <strong>
            Upper Case {{upper}}
          </strong>
       </div>
       <div>
          <strong>
            Lower Case {{lower}}
          </strong>
       </div>
     </div>
  `
})
export class UtilityServiceComponent implements OnInit {
  name: string;
  length: number;
  upper: string;
  lower: string;
  // inject the service in the component as ctor injection
  constructor(private serv: UtilityService) {
     this.name = 'I Am The String Manipulated Using Utility Service';
  }

  ngOnInit(): void {
      this.length = this.serv.getLength(this.name);
      this.upper = this.serv.changeCase(this.name, 'U');
      this.lower = this.serv.changeCase(this.name, 'L');
  }
}
