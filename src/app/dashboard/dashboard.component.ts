import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  videos : Video[] = [];
  //dataOggi : string;
  currentVideo : Video;


  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
    //this.dataOggi = (new Date()).toLocaleDateString();
  }

  videoWasSelected(video: Video): void {
    this.currentVideo = video;
   // this.videos.forEach( (video) => { if video != cvideo { video.loadPicture() }})
  }

  getVideos(): void {
    this.videoService.getVideos().subscribe(videos => this.videos = videos.slice(0,5));
  }

  isSelected(video: Video): boolean {
    if (!video || !this.currentVideo) {
      return false;
    }
    return video == this.currentVideo;
    
  }

 

//  @Output() onVideoSelected: EventEmitter<Video>;

}
