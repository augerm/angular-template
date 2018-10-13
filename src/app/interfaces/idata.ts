import { Team } from '../models/team';

export interface IData {
  locationId: string,
  gameId: string,
  side: string,
  teams: Array<Team>
}
