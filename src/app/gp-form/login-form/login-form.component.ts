import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService, ApiAnswer, ApiRequest } from '../../user/user.service';
import { R3Identifiers } from '@angular/compiler';
import { stringify } from 'querystring';

enum Mode {
  Login,
  Register,
  ForgotPassword
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  notice: string = '';
  titles: string[] = [ '',
    'Area Riservata', 
    'Registrazione a energiemagazine.it', 
    'Recupero Password'
  ];

  descriptions: string[] = [ '', 
    '', 
    'Inserisci il tuo indirizzo mail, ti invierremo immediatamente un link per confermare la tua iscrizione. Controlla subito la tua casella mail!', 
    'Inserisci il tuo indirizzo mail, ti invierremo immediatamente un link attraverso il quale potrai resettare la password e impostarne una nuova!'
  ];
 
  @Input() mode: number;    // se 0 il form viene nascosto
  @Output() doCmd: EventEmitter<number>;

  ngOnInit(): void {}

  constructor(
    private userService: UserService,
  ) {    
    this.doCmd = new EventEmitter();
  }

  closeForm(cmd: number = 78) {
    console.log('closeform');
    this.notice = '';
    this.doCmd.emit(cmd);
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
    });
  }

  doRecoverPw(form: any) : void {
    this.userService.userRecoverPassword(form.user, (ris: ApiAnswer) => {
      this.notice = ris.notice;
    });
  }

  onSubmit(form: any): void {
    console.log('submitted value:',form);
    switch(this.mode) {
      case 1:
        this.doLogin(form)
        break;
      case 2:
        this.doSignin(form)
        break;
      case 3:
        this.doRecoverPw(form)
        break;
    }
  }
}
