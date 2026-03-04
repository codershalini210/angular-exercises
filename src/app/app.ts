import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostcodeCard} from './postcode-card/postcode-card'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PostcodeCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  postcode1= "SW1A 0AA" 
  area1="Westminster" 
  postcode2= "M1 1AF" 
  area2="Manchester City Centre"
  SelectedPostCode :string=""
  setSelectedPostCode(pc:string)
  {
    this.SelectedPostCode = pc
  }
  protected readonly title = signal('angular-exercises');
}
