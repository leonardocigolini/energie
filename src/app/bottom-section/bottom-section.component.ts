import { Component, OnInit, Input } from '@angular/core';
import { MenuGroup } from '../menu/menu-group';


@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.css']
})
export class BottomSectionComponent implements OnInit {
  
  @Input() menus: MenuGroup[];

  constructor() { }

  ngOnInit(): void {  }

}
