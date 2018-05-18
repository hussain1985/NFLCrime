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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopplayersComponent,
    TopteamsComponent,
    TopcrimesComponent,
    FilterNFLPipe,
    CrimeTimelineComponent
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
