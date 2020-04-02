import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TruncatePipe } from './truncate.pipe';
import { FillIfEmptyPipe } from './fill-if-empty.pipe';
import { VideoSelectComponent } from './video-select/video-select.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoItemComponent,
    DashboardComponent,
    TruncatePipe,
    FillIfEmptyPipe,
    VideoSelectComponent,
    TopBarComponent,
    BottomSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
