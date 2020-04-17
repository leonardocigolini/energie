import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuGroup } from '../menu-group';


@Component({
  selector: 'app-menu-drop',
  templateUrl: './menu-drop.component.html',
  styleUrls: ['./menu-drop.component.css']
})
export class MenuDropComponent implements OnInit {
  @Input() menu: MenuGroup;
  @Output() doCmd: EventEmitter<number>;

  constructor() {    
    this.doCmd = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
