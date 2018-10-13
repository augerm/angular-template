import { Team } from '../models/team';

export interface ITeamData {
  locationId: string,
  gameId: string,
  side: string,
  teams: Array<Team>
}
