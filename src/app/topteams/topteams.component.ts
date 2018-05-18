import { Component, OnInit } from '@angular/core';
import { TopteamsService } from '../services/topteams.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'NFLtopteams',
  templateUrl: './topteams.component.html',
  styleUrls: ['./topteams.component.css']
})
export class TopteamsComponent implements OnInit {
  topTeams;
  category;
  constructor(private teamService: TopteamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.category=params['category']
      if(this.category){
        this.teamService.getTopTeams(this.category).subscribe(res=>
          {
            this.topTeams = res;
          })
      }
    })
   
  }

}
