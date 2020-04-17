import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [ChiSiamoComponent, ContattiComponent, PrivacyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChiSiamoComponent,
    ContattiComponent,
    PrivacyComponent
  ]
})
export class PageModule { }
