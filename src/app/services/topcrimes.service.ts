import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TopcrimesService {

  constructor(private http: HttpClient) { }

getTopCrimes(){
 return this.http.get("http://nflarrest.com/api/v1/crime");
}
}
