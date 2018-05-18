import { Pipe, PipeTransform } from '@angular/core';
import { TopcrimesService } from '../services/topcrimes.service';
import { filter } from 'rxjs/operators'

@Pipe({
  name: 'filterNFL'
})
export class FilterNFLPipe implements PipeTransform {
  
  constructor(){
    
  }
  transform(value, args?: any): any {
 

  if(value !== undefined){
    return value.sort((a: any, b: any) => {

      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  
  }

}
