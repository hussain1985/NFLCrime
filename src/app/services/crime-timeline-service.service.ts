import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrimeTimelineServiceService {

  constructor(private http: HttpClient) { }

  getCrimeTimeLine(category: string){
   return this.http.get("http://nflarrest.com/api/v1/crime/timeline/"+category)
  }
}
