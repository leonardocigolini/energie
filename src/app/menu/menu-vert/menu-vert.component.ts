import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MenuGroup } from '../menu-group';

@Component({
  selector: 'app-menu-vert',
  templateUrl: './menu-vert.component.html',
  styleUrls: ['./menu-vert.component.css']
})
export class MenuVertComponent implements OnInit {
  @Input() menu: MenuGroup;
  @Output() doCmd: EventEmitter<number>;


  constructor() {    
    this.doCmd = new EventEmitter();
  }


  ngOnInit(): void {}

}
