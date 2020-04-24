import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { MenuVertComponent } from './menu/menu-vert/menu-vert.component';
import { MenuDropComponent } from './menu/menu-drop/menu-drop.component';
import { VideoListComponent } from './video-list/video-list.component';
import { PageModule } from './page/page.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { MessageFormComponent } from './message-form/message-form.component'

@NgModule({
  declarations: [
    AppComponent,
    VideoItemComponent,
    DashboardComponent,
    TruncatePipe,
    FillIfEmptyPipe,
    VideoSelectComponent,
    TopBarComponent,
    BottomSectionComponent,
    MenuVertComponent,
    MenuDropComponent,
    VideoListComponent,
    LoginFormComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PageModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
