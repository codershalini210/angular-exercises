import { Component } from '@angular/core';
import { CurrencyPipe,UpperCasePipe,DatePipe } from '@angular/common';
@Component({
  selector: 'app-pipeseg',
  imports: [ CurrencyPipe,UpperCasePipe,DatePipe ],
  templateUrl: './pipeseg.html',
  styleUrl: './pipeseg.css',
})
export class Pipeseg {
eventDate = new Date()
ticketPrice = 49.50
 eventName = 'angular workshop'
 attendeeCount = 12345.67
}
