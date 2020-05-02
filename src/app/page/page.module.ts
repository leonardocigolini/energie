import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [ChiSiamoComponent, ContattiComponent, PrivacyComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    ChiSiamoComponent,
    ContattiComponent,
    PrivacyComponent
  ]
})
export class PageModule { }
