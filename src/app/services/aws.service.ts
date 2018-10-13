import { Injectable } from '@angular/core';
import { UtilService } from '../services/util.service';
import { TeamDataService } from '../services/team-data.service';
import { IS3PutResponse } from '../interfaces/is3-put-response';
import { FILE_EXTENSIONS } from '../constants/file-extensions';
import * as AWS from 'aws-sdk';


@Injectable({
  providedIn: 'root'
})
export class AwsService {
	uploadBucketName: string;
	bucketRegion: string;
	IdentityPoolId: string;
	s3: AWS.S3;
	
  constructor(private util: UtilService, private teamData: TeamDataService) { 
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

	upload(file, objectKey): Promise<IS3PutResponse> {
		const promise = new Promise((resolve, reject) => {
			console.log(`uploading file`);
		  this.s3.upload({
		    Key: objectKey,
		    Body: file,
		    ACL: 'public-read',
		    Bucket: this.uploadBucketName
		  }, function(err, data) {
		    if (err) {
		    	if(err.retryable) {
		    		return this.upload(file, objectKey);
		    	}
		      reject(err.message);
		    }
		    resolve(data);
		  });
		});
		return promise;
	}

	addFile(file) {
	  const date = new Date().toLocaleDateString().replace(/\//g, '-');
	  const folderName = `${date}/${this.teamData.locationId}/${this.teamData.gameId}/${this.teamData.side}`;
	  const fileExtension = FILE_EXTENSIONS[file.type];
	  const objectKey = `${folderName}.${fileExtension}`;
	  console.log(`Adding file: ${objectKey}`);
	  return this.upload(file, objectKey);
	}
}
