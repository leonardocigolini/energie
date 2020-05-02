import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListComponent} from './video-list/video-list.component';
import { VideoService } from './video.service';
import { SharedModule } from '../shared/shared.module';
//import { Video } from './video';



@NgModule({
  declarations: [VideoItemComponent, VideoListComponent],
  imports: [CommonModule, SharedModule ],
  exports: [VideoItemComponent, VideoListComponent],
  providers: [VideoService]
})
export class VideoModule { }
