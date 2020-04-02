import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Video } from './video';
import { VIDEOS } from './mock-videos';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

   /** GET videos from the server */

   getVideos(): Observable<Video[]> {
     return of (VIDEOS);
   }
   //getVideos (): Observable<Video[]> {
    //return this.http.get<Hero[]>(this.videosUrl)
    //  .pipe(
    //    tap(_ => this.log('fetched videos')),
    //    catchError(this.handleError('getHeroes', []))
    //  );
  //}


}
