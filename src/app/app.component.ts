import { Component } from '@angular/core';
import { Department } from './models/app.models';
import { Departments } from './models/app.constants';

// selector : The custom HTML Tag that will be used to load and render
// the component

// templateUrl : The UTL of HTML file that contains UI of Component
// template: Inline HTML Template String ``

// style and styleUrls: Inline and external CSS Styles

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myngapp';
  dept: Department;
  depts =  Departments;
  constructor(){

  }
  receivedData(event): void {
    // the event.detail will provide the data
    // emitted aka bubbled-up from the element aka web-component
    console.log(`Data Received from element ${JSON.stringify(event.detail)}`);
 }
}
