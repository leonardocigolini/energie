import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  notice: string;
 
  @Input() isActive: boolean;
  @Input() message: string;
  @Output() doCmd: EventEmitter<number>;


  constructor() {  this.doCmd = new EventEmitter(); }

  ngOnInit(): void {
  }

}
