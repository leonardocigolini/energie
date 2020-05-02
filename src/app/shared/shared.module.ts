import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { MenuModule } from '../menu/menu.module';
import { TruncatePipe } from '../shared/truncate.pipe';
import { FillIfEmptyPipe } from '../shared/fill-if-empty.pipe';




@NgModule({
  declarations: [TopBarComponent, BottomSectionComponent, TruncatePipe, FillIfEmptyPipe],
  imports: [
    CommonModule, MenuModule
  ],
  exports: [TopBarComponent, BottomSectionComponent, TruncatePipe, FillIfEmptyPipe]
})
export class SharedModule { }
