import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

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
