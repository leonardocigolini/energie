import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleItemComponent } from './article-item/article-item.component';


@NgModule({
  declarations: [ArticleListComponent, ArticleItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [ArticleListComponent]
})
export class ArticleModule { }
