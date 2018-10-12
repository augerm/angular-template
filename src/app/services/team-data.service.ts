import { Injectable } from '@angular/core';
import { Team } from '../models/team';

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

  getNumTeams() {
  	return this.teams.length;
  }
}
