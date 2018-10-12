import { Player } from './player';

export class Team {
	players: Array<Player>;
	
	constructor(players: Array<Player>) {
		this.players = players;
	}
}
