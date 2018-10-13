import { Component, OnInit } from '@angular/core';
import { AwsService } from '../../services/aws.service';
import { ProxyService } from '../../services/proxy.service';
import { TeamDataService } from '../../services/team-data.service';
import { VideoMetaData } from '../../models/video-meta-data';

@Component({
  selector: 'app-upload-video-view',
  templateUrl: './upload-video-view.component.html',
  styleUrls: ['./upload-video-view.component.css']
})
export class UploadVideoViewComponent implements OnInit {
	videoFile: any;

  constructor(private aws: AwsService, private proxy: ProxyService, private teamData: TeamDataService) { }

  ngOnInit() {
  }

  getFile(evt) {
  	this.videoFile = evt.target.files[0];
  }

  async submit() {
  	try {
  		const s3PutResponse = await this.aws.addFile(this.videoFile);
      const teamData = this.teamData.getTeamData();
      const videoMetaData = new VideoMetaData(s3PutResponse, teamData);
      await this.proxy.processVideo(videoMetaData)
        .subscribe((result) => {console.log(result)});
  	} catch(err) {
  		alert("Error uploading video file");
  		console.error(err);
  	}
  }

}
