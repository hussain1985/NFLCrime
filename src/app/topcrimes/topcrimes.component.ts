import { Component, OnInit } from '@angular/core';
import { TopcrimesService } from '../services/topcrimes.service';

@Component({
  selector: 'NFLtopcrimes',
  templateUrl: './topcrimes.component.html',
  styleUrls: ['./topcrimes.component.css']
})
export class TopcrimesComponent implements OnInit {
  topCrimes;
  filteredcrimes;
  searchTerm;
  isAscending=false;
  constructor(private crimeService: TopcrimesService) { }

  ngOnInit() {
    this.crimeService.getTopCrimes().subscribe(res => {
     this.filteredcrimes = this.topCrimes = res;


    });
  }
  NflSearch(val){
  this.searchTerm = val;
  }

  AlphaSort(){

  this.isAscending = !this.isAscending;

  this.filteredcrimes = (this.isAscending)? this.filteredcrimes.sort((a, b) => a.arrest_count - b.arrest_count) : this.filteredcrimes;
  this.filteredcrimes = (!this.isAscending)? this.filteredcrimes.sort((a, b) => b.arrest_count - a.arrest_count) : this.filteredcrimes;

  }

  descSort(c1, c2){
    let crimeOne = c1.Category.toUpperCase();
    let crimeTwo = c2.Category.toUpperCase();
    var textA = c1.Category.toUpperCase();
    var textB = c2.Category.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }
}
