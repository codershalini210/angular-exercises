import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {CommonModule} from "@angular/common"
@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  ismsg = true
  toggleMessage()
  {
  this.ismsg = !this.ismsg
  }
@Input() username =''
isLoggedIn= true
fruits = ["Apple ","Banana","Orange","Kiwi"]
students = ["John","Ron","Sam"]
isActive = true
numbers = [12,55,36,45,25]
}
