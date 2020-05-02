import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

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
