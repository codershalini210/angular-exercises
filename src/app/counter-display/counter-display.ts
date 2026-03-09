import { Component } from '@angular/core';
import { Counter } from '../counter';
@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {
constructor(public counterService:Counter){}

}
