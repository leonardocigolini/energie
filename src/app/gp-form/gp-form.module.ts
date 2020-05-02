import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [LoginFormComponent, MessageFormComponent],
  imports: [ CommonModule, FormsModule],
  exports: [LoginFormComponent, MessageFormComponent]
})
export class GpFormModule { }
