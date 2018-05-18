import { Component, OnInit } from '@angular/core';
import { TopcrimesService } from '../services/topcrimes.service';

@Component({
  selector: 'NFLtopcrimes',
  templateUrl: './topcrimes.component.html',
  styleUrls: ['./topcrimes.component.css']
})
export class TopcrimesComponent implements OnInit {
  topCrimes;
  constructor(private crimeService: TopcrimesService) { }

  ngOnInit() {
    this.crimeService.getTopCrimes().subscribe(res=> {
      this.topCrimes = res;
      
    })
  }

}
