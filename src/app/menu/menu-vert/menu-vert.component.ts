import { Component, Input, OnInit } from '@angular/core';
import { MenuGroup } from '../menu-group';

@Component({
  selector: 'app-menu-vert',
  templateUrl: './menu-vert.component.html',
  styleUrls: ['./menu-vert.component.css']
})
export class MenuVertComponent implements OnInit {
  @Input() menu: MenuGroup;

  constructor() {}

  ngOnInit(): void {}

}
