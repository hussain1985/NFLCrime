import { Component, OnInit } from '@angular/core';
import { TopteamsService } from '../services/topteams.service';

@Component({
  selector: 'NFLtopteams',
  templateUrl: './topteams.component.html',
  styleUrls: ['./topteams.component.css']
})
export class TopteamsComponent implements OnInit {
  topTeams;
  constructor(private teamService: TopteamsService) { }

  ngOnInit() {
    this.teamService.getTopTeams().subscribe(res=>
    {
      this.topTeams = res;
      console.log(this.topTeams)
    })
  }

}
