import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllSportsApiResponse } from '../models/all-sports-api-classes';

@Injectable({
  providedIn: 'root'
})
export class AllSportsApiService {

  domain: string;

  constructor(private http: HttpClient) { 
    this.domain = "https://apiv2.allsportsapi.com";
  }

  GetPlayersFromTeamOfALeague(APIkey: string, leagueId: string): Observable<Object> {
    
    return this.http.get(
      this.domain + '/football?' +
      'met=Teams&' +
      'APIkey=' + APIkey +
      '&leagueId='+ leagueId
    );
    
  }

}
