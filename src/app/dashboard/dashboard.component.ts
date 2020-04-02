import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MenuGroup } from '../menu/menu-group';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  videos : Video[] = [];
  menus : MenuGroup[] = [];
  //dataOggi : string;
  currentVideo : Video;


  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
    //this.dataOggi = (new Date()).toLocaleDateString();

       const mm1 = [['one',''],['two',''],['three','']];
       const mm2 = [['uno',''],['due',''],['tre','']];
       const mm3 = [['ein',''],['zwei',''],['drei','']];
       const mm4 = [['um',''],['dois',''],['treis','']];

       this.menus.push( new MenuGroup("CONTACT US", mm1));
       this.menus.push( new MenuGroup("CUSTOMER SERVICE", mm2));
       this.menus.push( new MenuGroup("CORPORATION", mm3));
       this.menus.push( new MenuGroup("WHY CHOOSE US", mm4));

       
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
