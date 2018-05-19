import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterplayers'
})
export class FilterplayersPipe implements PipeTransform {

  transform(players: any, term: any): any {
    if(!players || !term) return players;
    return players.filter(player => player.Name.toLowerCase().includes(term.toLowerCase()));
  }

}
