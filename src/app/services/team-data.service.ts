import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
	teams: Array<Team> = [];
  constructor() { }

  addTeam(team: Team) {
  	this.teams.push(team);
  }

  setGameData(locationId: string, gameId: string, side: string) {

  }

  getNumTeams() {
  	return this.teams.length;
  }
}
