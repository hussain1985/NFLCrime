import { Component, OnInit } from '@angular/core';
import { TopcrimesService } from './services/topcrimes.service';
import { TopplayersService } from './services/topplayers.service';
import { TopteamsService } from './services/topteams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NFL Crime';

  constructor(){

  }
  ngOnInit(){
    
  }
}
