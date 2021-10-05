import { Component, OnInit } from '@angular/core';
import { AllSportsApiResponse, AllSportsApiTeam } from 'src/app/models/all-sports-api-classes';
import { AllSportsApiService } from 'src/app/services/all-sports-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  teams: Array<AllSportsApiTeam> = [];

  constructor(private sportsApi: AllSportsApiService) { }

  ngOnInit(): void {
    this.sportsApi.GetPlayersFromTeamOfALeague(
      environment.allSportsApi.APIkey,
      "44"
    ).subscribe(
      (response: Object) => {

        let sportsApiResponse = response as AllSportsApiResponse;

        if (sportsApiResponse.success = 1) {
          this.teams = sportsApiResponse.result;
          console.log(this.teams);
        }

      }
    );
  }

}
