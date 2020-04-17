import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from './../environments/environment';

import { Video } from './video';
import { VIDEOS, VIDEOS2 } from './mock-videos';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoUrl: string = environment.videoUrl;
  //videoUrl: string = 'https://eifis.online/api/eshop/v1/get_videos';
  //videoUrl: string = 'http://127.0.0.1:3001/api/eshop/v1/get_videos?t=1';

  constructor( private http: HttpClient) { }

  /** GET videos from the server */
  getVideos(t: number): Observable<any[]> {
    return this.http.get<any[]>( this.videoUrl+'?t='+t);
   }

  /** GET videos from mock */ 
  // getVideos2(): Observable<Video[]> {
  //  return of (VIDEOS2);
  //}

}
