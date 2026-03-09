import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common"
import {BlogPost} from "./blog-post/blog-post"
import { CounterButtons } from './counter-buttons/counter-buttons';
import { CounterDisplay } from './counter-display/counter-display';
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,BlogPost,CounterButtons,CounterDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   protected readonly title = signal('angular-exercises');
}
