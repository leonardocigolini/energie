import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';
import { VideoService } from '../../video/video.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  article_items_id = 6;
  topBarMode = 'other';
  menus2 = [];
  titles = [];
  userName = '';
  section_id = [];

  @Input() title: String;
  @Input() articles: Article[];
  @Input() userLogged: boolean;
  @Output() doCmd: EventEmitter<number>;
  
  constructor( private videoService: VideoService) { this.doCmd = new EventEmitter(); }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.videoService.getVideos(this.article_items_id).subscribe({
      next: items => { 
        this.articles = new Array;
        items.forEach( (item) => {  
         this.articles.push( new Article(item.title, item.description, item.picture));
        });
        console.log('articles loaded '+this.articles.length);
      },
      complete: () => { console.log('finished')} 
    });  

  }

  execCmd(cmd: number) {
    console.log("execmd "+cmd);
  }

}
