import { Component, OnInit } from '@angular/core';
import { TopplayersService } from '../services/topplayers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'NFLtopplayers',
  templateUrl: './topplayers.component.html',
  styleUrls: ['./topplayers.component.css']
})
export class TopplayersComponent implements OnInit {

 
  category;
  topPlayers;
  constructor(private playerService: TopplayersService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.category = this.route.params.subscribe((params: Params) => {
      this.category = params['category'];

      if(this.category){
         console.log(this.category);
         this.playerService.getTopPlayer(this.category).subscribe(res=> 
           { 
             this.topPlayers = res;
           }
          
         );
       }
     
    })
  
  }

}
