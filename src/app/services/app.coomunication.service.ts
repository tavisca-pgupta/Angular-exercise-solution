import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // the event that will be emitted by sender and
  // will be subscribed by the receiver
    emitValue: EventEmitter<number>;
    constructor(){
       this.emitValue = new EventEmitter<number>();
    }
    // method that emits event. This method will be called
    // by sender
    onEmiteValue(data: number): void {
        this.emitValue.emit(data);
    }
}
