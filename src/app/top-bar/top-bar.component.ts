import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuGroup } from '../menu/menu-group';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
 
  @Output() doCmd: EventEmitter<number>;
  @Input() menus: MenuGroup[];
  @Input() titles: String[];
  @Input() section_ids: String[];


  constructor() {
    this.doCmd = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
