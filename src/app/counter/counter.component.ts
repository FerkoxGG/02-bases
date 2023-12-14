import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3>
  Counter: {{ counter }}
</h3>

<button (click)="increaseDecreaseBy(+1)" type="button">+1</button>
<button (click)="resetCounter()" type="button">Reset</button>
<button (click)="increaseDecreaseBy(-1)" type="button">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseDecreaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
