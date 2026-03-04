import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-postcode-card',
  imports: [],
  templateUrl: './postcode-card.html',
  styleUrl: './postcode-card.css',
})
export class PostcodeCard {
@Input() postcode :string=''
@Input() area  :string=''
@Output() mapRequested  = new EventEmitter<string>()
onMapRequested()
{
  this.mapRequested.emit(this.postcode)
}
}
