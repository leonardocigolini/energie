import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PageModule } from './page/page.module';
import { SharedModule } from './shared/shared.module';
import { ArticleModule } from './article/article.module';
import { GpFormModule } from './gp-form/gp-form.module';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PageModule,
    SharedModule,
    GpFormModule,
    ArticleModule,
    VideoModule,
    EmbedVideo.forRoot()
  ],
  providers: [ 
    { provide: 'HOME_URL', useValue: 'http://eifis.it'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
