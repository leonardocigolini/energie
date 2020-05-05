import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() title: String;
  @Input() videos: Video[];
  @Input() userLogged: boolean;
  @Output() doCmd: EventEmitter<number>;
 
  currentVideo : Video;

  constructor() {
    this.doCmd = new EventEmitter();
  }

  ngOnInit(): void {
  }

  gotoStart(){
    this.doCmd.emit(10)
  }

  videoWasSelected(video: Video): void {
    if (this.userLogged) {
      this.currentVideo = video;
      this.doCmd.emit(80);
    } else {
      this.doCmd.emit(81);
    }
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
