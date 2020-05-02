import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuVertComponent } from './menu-vert/menu-vert.component';
import { MenuDropComponent } from './menu-drop/menu-drop.component';

@NgModule({
  declarations: [ 
    MenuVertComponent,
    MenuDropComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuVertComponent,
    MenuDropComponent
  ]
})
export class MenuModule { }
