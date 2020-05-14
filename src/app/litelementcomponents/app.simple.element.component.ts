import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-element-component',
  templateUrl: './app.simple.element.view.html'
})

export class SimpleElementComponent implements OnInit {
  myname: string;
  constructor() {
     this.myname= '';
  }
  receveData(event) : void {
    console.log(`In Parent ${event.detail.data}`);
  }
  ngOnInit() { }
}
