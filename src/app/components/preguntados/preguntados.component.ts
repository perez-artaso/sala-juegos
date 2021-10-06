import { Component, OnInit } from '@angular/core';
import { AllSportsApiPlayer, AllSportsApiResponse, AllSportsApiTeam } from 'src/app/models/all-sports-api-classes';
import { AllSportsApiService } from 'src/app/services/all-sports-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  gameLoaded: boolean = false;

  teams: Array<AllSportsApiTeam> = [];
  selectedPlayer: AllSportsApiPlayer = new AllSportsApiPlayer();
  correctAnswer?: string;
  wrongAnswers?: Array<string>;

  constructor(private sportsApi: AllSportsApiService) {
    
  }

  ngOnInit(): void {
    this.sportsApi.GetPlayersFromTeamOfALeague(
      environment.allSportsApi.APIkey,
      "44"
    ).subscribe(
      (response: Object) => {

        let sportsApiResponse = response as AllSportsApiResponse;

        if (sportsApiResponse.success = 1) {
          this.teams = sportsApiResponse.result;
          this.gameLoaded = true;
        }

      }
    );
  }

  setQuestion() {

    const chosen_teams = this.getRandomTeams(this.teams, 3, []);
    // TODO saco el primero y dsps hago un foreach, para no tener hardcodeada la cantidad de equivocadas.
    const chosen_1 = chosen_teams[0];
    const false_1 = chosen_teams[1];
    const false_2 = chosen_teams[2];

    if(chosen_1.players) {
      this.selectedPlayer = chosen_1.players[
        Math.floor(
          Math.random() * chosen_1.players?.length
        )
      ];

      this.correctAnswer = chosen_1.team_name;

      if (false_1.team_name && false_2.team_name) {
        this.wrongAnswers = [
          false_1.team_name,
          false_2.team_name
        ]
      }      

    }

  }

  getRandomTeams (source: Array<AllSportsApiTeam>, toSelect: number, selected: Array<AllSportsApiTeam>): Array<AllSportsApiTeam> {

    const randomIndex = Math.floor(Math.random() * (source.length - 1));
    const selectedTeam = source[randomIndex];

    if ( toSelect != 0 ) {
      return this.getRandomTeams(
        (source.slice(0, randomIndex).concat(source.slice(randomIndex + 1))),
        --toSelect,
        selected.concat(selectedTeam)
      );
    } else {
      return selected;
    }

  }

}
