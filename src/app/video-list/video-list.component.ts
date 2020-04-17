import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() title: String;
  @Input() videos: Video[];

  currentVideo : Video;
  constructor() { }

  ngOnInit(): void {
  }

  videoWasSelected(video: Video): void {
    this.currentVideo = video;
   // console.log('videoWasSelected');
   // this.videos.forEach( (video) => { if video != cvideo { video.loadPicture() }})
  }

  isSelected(video: Video): boolean {
    var t:boolean;

   // console.log('isSelected');

    if (!video || !this.currentVideo) {
   //   console.log('false');

      return false;
    }
    t =  (video == this.currentVideo);
   // console.log(t);

    return t;
    
  }

}
