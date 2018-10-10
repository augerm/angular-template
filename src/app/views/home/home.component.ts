import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { AwsService } from '../../services/aws.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aws: AwsService, private util: UtilService) { }

  ngOnInit() {
  	const CHUNK_DURATION = 10000;

		const constraints = { audio: false, video: true };
		navigator.mediaDevices.getUserMedia(constraints)
			.then((stream) => {
				const mediaRecorder = new MediaRecorder(stream);
				console.log(mediaRecorder.mimeType);
				mediaRecorder.ondataavailable = (blob) => {
					// this.aws.addFile(blob.data);
				}
				mediaRecorder.start(CHUNK_DURATION);
			})
  }

}
