import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Video } from '../../video/video';
import { env } from 'process';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-start-msg',
  templateUrl: './start-msg.component.html',
  styleUrls: ['./start-msg.component.css']
})
export class StartMsgComponent implements OnInit {

  video: Video;

  @Output() doCmd: EventEmitter<number>;

  constructor() {  this.doCmd = new EventEmitter(); }
 

  ngOnInit(): void {
    this.video = new Video('', '', '', '', environment.startVideoUrl);
  }

}
