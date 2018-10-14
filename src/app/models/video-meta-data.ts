import { IS3PutResponse } from '../interfaces/is3-put-response';
import { IData } from '../interfaces/idata';
import { ITimeData } from '../interfaces/itime-data';

export class VideoMetaData {
	videoUrl: string;
	side: string;
	gameId: string;
	locationId: string;
	startTime: number;
	duration: number;
	teams: string;
	constructor(s3PutResponse: IS3PutResponse, data: IData, timeData?: ITimeData) {
		this.videoUrl = s3PutResponse.Location;
		this.side = data.side;
		this.gameId = data.gameId;
		this.locationId = data.locationId;
		this.teams = JSON.stringify(data.teams);
		this.startTime = timeData ? timeData.startTime : null;
		this.duration = timeData ? timeData.duration : null;
	}
}
