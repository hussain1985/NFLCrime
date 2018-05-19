import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { TopplayersComponent } from './topplayers/topplayers.component';
import { TopteamsComponent } from './topteams/topteams.component';
import { TopcrimesComponent } from './topcrimes/topcrimes.component';
import {RouterModule} from '@angular/router';
import { FilterNFLPipe } from './filters/filter-nfl.pipe';
import { CrimeTimelineComponent } from './crime-timeline/crime-timeline.component';
import { NflSearchBarComponent } from './nfl-search-bar/nfl-search-bar.component';
import { FilterplayersPipe } from './filters/filterplayers.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopplayersComponent,
    TopteamsComponent,
    TopcrimesComponent,
    FilterNFLPipe,
    CrimeTimelineComponent,
    NflSearchBarComponent,
    FilterplayersPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,


    RouterModule.forRoot([
      {path: '', component: TopcrimesComponent},
      {path:':category/topplayers', component: TopplayersComponent},
      {path: ':category/topteams', component: TopteamsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
