import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopteamsService {

  constructor(private http: HttpClient) { }

  getTopTeams(){
   return this.http.get("http://nflarrest.com/api/v1/crime/topTeams/DUI");
  }
}
