import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent implements OnInit {
  
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
