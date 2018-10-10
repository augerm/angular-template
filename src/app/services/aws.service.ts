import { Injectable } from '@angular/core';
import { UtilService } from '../services/util.service';
import * as AWS from 'aws-sdk';


@Injectable({
  providedIn: 'root'
})
export class AwsService {
	uploadBucketName: string;
	bucketRegion: string;
	IdentityPoolId: string;
	s3: AWS.S3;
	
  constructor(private util: UtilService) { 
		this.uploadBucketName = 'stat-tracker-uploads';
		this.bucketRegion = 'us-east-1';
		this.IdentityPoolId = 'us-east-1:e0d42120-a252-4d27-9675-ede0c5bff54e';

		AWS.config.update({
		  region: this.bucketRegion,
		  credentials: new AWS.CognitoIdentityCredentials({
		    IdentityPoolId: this.IdentityPoolId
		  })
		});

		this.s3 = new AWS.S3({
		  apiVersion: '2006-03-01',
		  params: {Bucket: this.uploadBucketName}
		});

  }

	upload(file, objectKey) {
		console.log(`uploading file`);
	  this.s3.upload({
	    Key: objectKey,
	    Body: file,
	    ACL: 'public-read',
	    Bucket: this.uploadBucketName
	  }, function(err, data) {
	    if (err) {
	    	if(err.retryable) {
	    		this.upload(file, objectKey);
	    		return;
	    	}
	      return alert('There was an error uploading your video: ' + err.message);
	    }
	    alert('Successfully uploaded video.');
	  });
	}

	addFile(file) {
	  const date = new Date().toLocaleDateString().replace(/\//g, '-');
	  const folderName = date + `-${this.util.guid()}`;
	  const objectKey = `testing-stream/${folderName}.webm`;
	  console.log(`Adding file: ${objectKey}`);
	  this.upload(file, objectKey);
	}
}
