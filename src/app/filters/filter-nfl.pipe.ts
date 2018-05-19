import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterNFLCrimeCategory'
})
export class FilterNFLPipe implements PipeTransform {

  constructor() {

  }

  transform(crimes: any, term: any): any {

    if(crimes === undefined || term === undefined)
    return crimes
    else
    return crimes.filter(crime => crime.Category.toLowerCase().includes(term.toLowerCase()));

  }
}
