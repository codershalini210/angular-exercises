import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-postcode-card',
  imports: [],
  templateUrl: './postcode-card.html',
  styleUrl: './postcode-card.css',
})
export class PostcodeCard {
@Input() postcode :string=''
@Input() area  :string=''
}
