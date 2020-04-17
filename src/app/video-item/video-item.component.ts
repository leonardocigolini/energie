import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video';
import { EmbedVideoService } from 'ngx-embed-video';
//based on https://github.com/SamirHodzic/ngx-embed-video

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input() video: Video;
  @Input() isSelected: boolean;

  iframe_html: any;

  constructor(
    private embedService: EmbedVideoService
  ) { }

  ngOnInit() {
    this.loadPicture(); 
  }

  ngOnChanges() {
    if (this.video) {
      if (this.isSelected)
        this.loadVideo()
      else
        this.loadPicture();
    }
  }

  loadVideo() {
    this.iframe_html = this.embedService.embed(this.video.url,{ attr: { width: '100%', height: 'auto' }});
  }

  loadPicture() {
    this.embedService.embed_image( this.video.url, { image: 'thumbnail_large' }
    ).then(res => { this.iframe_html = res.html;} );
  }

}
