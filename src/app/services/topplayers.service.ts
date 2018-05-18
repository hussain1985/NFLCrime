import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopplayersService {

  constructor(private http: HttpClient) { }

  getTopPlayer(category: string){
    return this.http.get("http://nflarrest.com/api/v1/crime/topPlayers/"+category);
  }
}


