import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopteamsService {

  constructor(private http: HttpClient) { }

  getTopTeams(category: string){
   return this.http.get("http://nflarrest.com/api/v1/crime/topTeams/"+category);
  }
}
