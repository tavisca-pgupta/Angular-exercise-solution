import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-directive',
  templateUrl: './table.directive.view.html'
})
export class TableDirectiveComponent implements OnInit {
  private _DataSource: Array<any>;
  headers: Array<string>;
  // an event that will be emitted
  // with payload as generic data
  // in this case data type is 'any'
  @Output()
  onRowSelected: EventEmitter<any>;

  constructor() {
      this._DataSource = new Array<any>();
      this.headers = new Array<string>();
      this.onRowSelected  =new EventEmitter<any>();
  }

  @Input()
  set DataSource(val: Array<any>) {
     if(val.length > 0) {
       this._DataSource = val;
       for(let p in this._DataSource[0]) {
         this.headers.push(p);
       }
     } else {
      this._DataSource = new Array<any>();
     }
  }

  get DataSource(): Array<any> {
    return this._DataSource;
  }

  onRowSelectedEvent(r: any) {
    // emit() method will emit an event
    this.onRowSelected.emit(r);
  }

  ngOnInit(): void { }
}
