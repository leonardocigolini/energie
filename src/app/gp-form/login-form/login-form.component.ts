import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService, ApiAnswer, ApiRequest } from '../../user/user.service';
import { R3Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  notice: string = '';
 
  @Input() isActive: boolean;
  @Input() mode: string;
  @Input() title: string;
  @Output() doCmd: EventEmitter<number>;

  ngOnInit(): void {}

  constructor(
    private userService: UserService,
  ) {    
    this.doCmd = new EventEmitter();
  }

  closeForm() {
    console.log('closeform');
    this.notice = '';
    this.doCmd.emit(98);
  }

  doLogin(form: any) : void {
    this.userService.userAuthenticate(form.user, form.password, (ris: ApiAnswer) => {
      if (ris.user_id) {
        this.userService.isUserLogged = true;
        this.closeForm();
      } else {
        this.userService.isUserLogged = false;
        this.notice = this.userService.data1.email+ ' '+ this.userService.data1.password+ ':'+this.userService.data2.notice;
      }
    });
  }

  doSignin(form: any) : void {
    this.userService.userSignin(form.user, (ris: ApiAnswer) => {
      this.notice = ris.notice;
   //   if (ris.user_id) {
   //     this.userService.isUserLogged = true;
   //     this.doCmd.emit(98)
   //   } else {
   //     this.userService.isUserLogged = false;
   //     this.notice = this.userService.data1.email+ ' '+ this.userService.data1.password+ ' '+this.userService.data2.notice 
   //   }
    });
  }

  onSubmit(form: any): void {
    console.log('submitted value:',form);
    if (this.mode == '1') {
      this.doLogin(form)
    } else {
      this.doSignin(form)
    } 
  }
}
