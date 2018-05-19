import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'nfl-search-bar',
  templateUrl: './nfl-search-bar.component.html',
  styleUrls: ['./nfl-search-bar.component.css']
})
export class NflSearchBarComponent implements OnInit {
  @Output()
  searchQuery = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  SearchTerm(search: string){
    this.searchQuery.emit(search);
  }
}
