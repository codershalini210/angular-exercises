import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostcodeCard} from './postcode-card/postcode-card'
import {CounterComponent} from "./counter-component/counter-component"
import { TodoQUE } from './todo-que/todo-que';
import {CommonModule} from "@angular/common"
import { Pipeseg } from './pipeseg/pipeseg';
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,PostcodeCard,CounterComponent,TodoQUE,Pipeseg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
isSuccess=true
 showMessage = false
showMesageTrue()
{
  this.showMessage = true
}
// students=["John","Ron","David","sam","Oxana"]
students = [{name:"John",age:12},
{name:"Ron",age:14}  ,
{name:"David",age:15},
{name:"Sam",age:12},
{name:"Oxana",age:18}
]
// Use *ngIf to display the text "Welcome to Angular!" only when showMessage is true.
  userLoggedIn =false
  setlogin()
  {
    this.userLoggedIn = true
  }
  logout()
  {
    this.userLoggedIn = false
  }
  // count = 5 ;
  // postcode1= "SW1A 0AA" 
  // area1="Westminster" 
  // postcode2= "M1 1AF" 
  // area2="Manchester City Centre"
  // SelectedPostCode :string=""
  // setCount(n:number)
  // {
  //   this.count= n 
  // }
  // setSelectedPostCode(pc:string)
  // {
  //   this.SelectedPostCode = pc
  // }
  protected readonly title = signal('angular-exercises');
}
