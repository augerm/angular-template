import { Injectable } from '@angular/core';
import { UtilService } from '../services/util.service';
import { DataService } from '../services/data-service';
import { IS3PutResponse } from '../interfaces/is3-put-response';
import { FILE_EXTENSIONS, MIME_TYPES } from '../constants/file-extensions';
import * as AWS from 'aws-sdk';


@Injectable({
  providedIn: 'root'
})
export class AwsService {
	uploadBucketName: string;
	bucketRegion: string;
	IdentityPoolId: string;
	s3: AWS.S3;
	
  constructor(private util: UtilService, private data: DataService) { 
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
		  this.s3.upload({
		    Key: objectKey,
		    Body: file,
		    ACL: 'public-read',
		    Bucket: this.uploadBucketName
		  }, function(err, data: IS3PutResponse) {
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

	uploadJSON(json, objectKey) {
		const promise = new Promise((resolve, reject) => {
			this.s3.upload({
		    Key: objectKey,
		    Body: json,
		    ACL: 'public-read',
		    ContentType: MIME_TYPES.json,
		    Bucket: this.uploadBucketName
		  }, function(err, data: IS3PutResponse) {
		    if (err) {
		    	if(err.retryable) {
		    		return this.upload(json, objectKey);
		    	}
		      reject(err.message);
		    }
		    resolve(data);
		  });
		});
		return promise;
	}

	addFile(file) {
	 	const folderName = this.getTargetFolder();
	 	const fileExtension = FILE_EXTENSIONS[file.type];
	  const objectKey = `${folderName}.${fileExtension}`;
	  return this.upload(file, objectKey);
	}

	addJSON(json) {
		const folderName = this.getTargetFolder();
		const objectKey = `${folderName}.json`;
		return this.uploadJSON(json, objectKey);
	}

	private getTargetFolder() {
		const date = new Date().toLocaleDateString().replace(/\//g, '-');
	  const folderName = `${date}/${this.data.locationId}/${this.data.gameId}/${this.data.side}`;
	  return folderName;
	}
}
