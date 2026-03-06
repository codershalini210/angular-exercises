import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) 
      {
        return ''
      }
    // let nameary =  value.split(' ')
    // let i = nameary.map((word)=>word[0]).join("").toUpperCase()
    // return i
    return value.split(' ').map((word)=>word[0]).join("").toUpperCase()

  }

}
