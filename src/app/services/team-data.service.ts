import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { ITeamData } from '../interfaces/iteam-data';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
  locationId: string;
  gameId: string;
  side: string;
	teams: Array<Team> = [];
  constructor() { }

  addTeam(team: Team) {
  	this.teams.push(team);
  }

  setGameData(locationId: string, gameId: string, side: string) {
    this.locationId = locationId;
    this.gameId = gameId;
    this.side = side;
  }

  getTeamData(): ITeamData {
    return {
      locationId: this.locationId,
      gameId: this.gameId,
      side: this.side,
      teams: this.teams
    }
  }

  getNumTeams() {
  	return this.teams.length;
  }
}
