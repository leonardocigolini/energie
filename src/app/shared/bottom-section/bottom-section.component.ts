import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuGroup } from '../../menu/menu-group';


@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.css']
})
export class BottomSectionComponent implements OnInit {
  
  @Input() menus: MenuGroup[];
  @Output() doCmd: EventEmitter<number>;


  constructor() {    
    this.doCmd = new EventEmitter();
  }

  ngOnInit(): void {  }

}
