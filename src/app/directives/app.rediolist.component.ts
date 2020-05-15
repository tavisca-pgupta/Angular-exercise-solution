import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-list-component',
  templateUrl: './radion.list.view.html'
})
export class RadioListComponent implements OnInit {
  data: Array<number>;
  constructor() {
    this.data = new Array<number>();
    this.data = [10, 20, 30, 40];
  }

  ngOnInit(): void { }
}
