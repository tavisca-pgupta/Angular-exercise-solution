import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown.view.html',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true
    }
  ]
})
export class DropDownComponent implements OnInit, ControlValueAccessor {

    private _Options :Array<string>;
    selectedOption: string
    propagateChange = (_: any) => {};

    @Input()
    set Options(options: Array<string>) {
        this._Options = options
    }

    get Options(): Array<string>{
        return this._Options
    }
  constructor() {
    this._Options = new Array<string>();
  }
    writeValue(obj: any): void {
        this.selectedOption = obj;
    }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }
    registerOnTouched(fn: any): void {
    }

    setSelectedOption(value:string) : void{
        this.selectedOption = value;
        this.propagateChange(value);
    }
  
  ngOnInit(): void {
    
  }
}
