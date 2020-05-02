import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  topBarMode = 'other';
  menus2 = [];
  titles = [];
  userName = '';
  section_id = [];
  constructor() { }

  ngOnInit(): void {
  }
  
execCmd(cmd: number) {
    console.log("execmd "+cmd);
  }
}
