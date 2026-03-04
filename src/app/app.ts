import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostcodeCard} from './postcode-card/postcode-card'
import {CounterComponent} from "./counter-component/counter-component"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PostcodeCard,CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 5 ;
  postcode1= "SW1A 0AA" 
  area1="Westminster" 
  postcode2= "M1 1AF" 
  area2="Manchester City Centre"
  SelectedPostCode :string=""
  setCount(n:number)
  {
    this.count= n 
  }
  setSelectedPostCode(pc:string)
  {
    this.SelectedPostCode = pc
  }
  protected readonly title = signal('angular-exercises');
}
