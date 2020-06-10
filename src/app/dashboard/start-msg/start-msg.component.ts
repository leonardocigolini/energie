import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Video } from '../../video/video';


@Component({
  selector: 'app-start-msg',
  templateUrl: './start-msg.component.html',
  styleUrls: ['./start-msg.component.css']
})
export class StartMsgComponent implements OnInit {

  @Input() video: Video;
  @Output() doCmd: EventEmitter<number>;

  constructor() {  this.doCmd = new EventEmitter(); }
 

  ngOnInit(): void {
  }

}
