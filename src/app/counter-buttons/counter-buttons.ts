import { Component } from '@angular/core';
import { Counter } from '../counter';
@Component({
  selector: 'app-counter-buttons',
  imports: [],
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons {
  constructor(private counterService : Counter){}
  increaseCount()
  {
    this.counterService.increment()
  }
  decreaseCount()
  {
    this.counterService.decrement()
  }
}
