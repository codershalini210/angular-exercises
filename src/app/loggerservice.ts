import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loggerservice {
  log(message: string){
    let dt = new Date()
    console.log(dt + "---"+message)
  }
}
