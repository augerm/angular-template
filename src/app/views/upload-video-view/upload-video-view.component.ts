import { Component, OnInit } from '@angular/core';
import { AwsService } from '../../services/aws.service';

@Component({
  selector: 'app-upload-video-view',
  templateUrl: './upload-video-view.component.html',
  styleUrls: ['./upload-video-view.component.css']
})
export class UploadVideoViewComponent implements OnInit {
	videoFile: any;

  constructor(private aws: AwsService) { }

  ngOnInit() {
  }

  getFile(evt) {
  	this.videoFile = evt.target.files[0];
  }

  async submit() {
  	try {
  		await this.aws.addFile(this.videoFile);
  		alert("Successfully uploaded video file");
  	} catch(err) {
  		alert("Error uploading video file");
  		console.error(err);
  	}
  	
  	
  }

}
