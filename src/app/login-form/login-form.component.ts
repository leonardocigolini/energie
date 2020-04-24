import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService, ApiAnswer, ApiRequest } from '../user.service';
import { R3Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  notice: string;
 
  @Input() isActive: boolean;
  @Output() doCmd: EventEmitter<number>;

  ngOnInit(): void {}

  constructor(
    private userService: UserService,
  ) {    
    this.doCmd = new EventEmitter();
  }

  onSubmit(form: any): void {
    console.log('submitted value:',form);
    this.userService.userAuthenticate(form.user, form.password, (ris: ApiAnswer) => {
      if (ris.user_id) {
        this.doCmd.emit(98)
      } else {
        this.notice = this.userService.data1.email+ ' '+ this.userService.data1.password+ ' '+this.userService.data2.notice 
      }
    });
  }
}
