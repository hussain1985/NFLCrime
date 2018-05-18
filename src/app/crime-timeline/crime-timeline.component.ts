import { Component, OnInit } from '@angular/core';
import { CrimeTimelineServiceService } from '../services/crime-timeline-service.service';

@Component({
  selector: 'app-crime-timeline',
  templateUrl: './crime-timeline.component.html',
  styleUrls: ['./crime-timeline.component.css']
})
export class CrimeTimelineComponent implements OnInit {
  timeLine;
  constructor(private crimeTimelineService: CrimeTimelineServiceService) { }

  ngOnInit() {
    this.crimeTimelineService.getCrimeTimeLine('DUI').subscribe(res=> {
      this.timeLine = res;
      console.log(this.crimeTimelineService)
    })
  }

}
