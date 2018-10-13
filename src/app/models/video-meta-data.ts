import { IS3PutResponse } from '../interfaces/is3-put-response';
import { ITeamData } from '../interfaces/iteam-data';
import { ITimeData } from '../interfaces/itime-data';

export class VideoMetaData {
	videoUrl: string;
	side: string;
	gameId: string;
	locationId: string;
	startTime: number;
	duration: number;
	constructor(s3PutResponse: IS3PutResponse, teamData: ITeamData, timeData?: ITimeData) {
		this.videoUrl = s3PutResponse.Location;
		this.side = teamData.side;
		this.gameId = teamData.gameId;
		this.locationId = teamData.locationId;
		this.startTime = timeData ? timeData.startTime : null;
		this.duration = timeData ? timeData.duration : null;
	}
}
