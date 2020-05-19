import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
 // selector: 'app-test1-element',
  templateUrl: './app.test1.element.view.html'
})
export class Test1ElementComponent implements OnInit {
  message: string;
  private _Source: Array<any>;
  headers: Array<string>;
  @Output()
  rowClick: EventEmitter<any>;
  constructor() {
    this.message = 'The Test1 Element';
    this._Source = new Array<any>();
    this.headers = new Array<string>();
    this.rowClick = new EventEmitter<any>();
  }


  @Input()
  set Source(v: Array<any>) {
     if(v.length > 0) {
        this._Source = v;
        for(let p in this._Source[0]) {
          this.headers.push(p);
        }
     } else {
      this._Source = new Array<any>();
     }
  }
  get Source() : Array<any> {
    return this._Source;
  }
  selectTableRow(row: any): void {
    console.log(`In Element ${JSON.stringify(row)}`);
    this.rowClick.emit(row);
  }
  ngOnInit(): void { }
}
