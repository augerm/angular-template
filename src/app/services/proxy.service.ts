import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { VideoMetaData } from '../models/video-meta-data';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http: HttpClient) { }

  processVideo(videoMetaData: VideoMetaData) {
  	return this.http.post(ENDPOINTS.proxyServer.processVideo, videoMetaData, {});
	    // .pipe(
	    //   catchError(this.handleError('addHero', hero))
	    // );
  }
}
