import { Component,Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
 @Input() count :number=0;
 @Output() handleCount = new EventEmitter<number>()
 childMethod()
 {
  alert("this is method of counter component")
 }
  increment()
{
  this.count++
  this.handleCount.emit(this.count)
}
decrement()
{
  this.count--
  this.handleCount.emit(this.count)
}
}
