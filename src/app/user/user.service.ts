import { Injectable, Output,EventEmitter } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailValidator } from '@angular/forms';

export type CallbackFunction = (...args: any[]) => void;

export interface ApiAnswer {
  notice: string,
  next_state: number,
  user_id?: number
};

export interface ApiRequest {
  email: string,
  password: string
 
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  tok: string = '';
  data: Object;
  data1: ApiRequest;
  data2: ApiAnswer;
  loading: boolean; 
  isUserLogged: boolean = false;

 
  @Output() doCmd: EventEmitter<number>;

  constructor(private http: HttpClient) {
    this.doCmd = new EventEmitter();
   };

  

  appoCompleteAuth(ris: ApiAnswer) : void {
    if (ris.user_id)  
      console.log(ris.notice + ris.user_id)
    else
      console.log(ris.notice);
  };

  logout() : void {
    this.data1 = { email: '', password: ''};
    this.data2.user_id = 0;
    this.isUserLogged = false;

  };

  userName() : string {
    return this.isUserLogged ? this.data1.email : ''
  }

 userAuthenticate(user: string, password: string, done: CallbackFunction) : void {
    console.log('user authenticate '+user+ ' '+password);
    this.data1 = { email: user, password: password};
    this.getUser(user,password, '1', done)
  }

  userSignin(user: string, done: CallbackFunction) : void {
    console.log('user signin '+user);
    this.data1 = { email: user, password: ''};
    this.getUser(user, '', '2', done)
  }

  userRecoverPassword(user: string, done: CallbackFunction) : void {
    console.log('user recover password '+user);
    this.data1 = { email: user, password: ''};
    this.getUser(user, '', '3', done)
  }
  

  getUser(email : string, password : string, mode: string, done : CallbackFunction) : void {

    const pars: HttpParams = new HttpParams().set('m', mode).set('n', email).set('p',password);

    this.http.get<any>(environment.userUrl,{params: pars}).subscribe({
      next: (data : ApiAnswer) => { this.data2 = data; console.log('next')},
      error: error => console.log(error),
      complete: () => done(this.data2)
    });

  }

  
}
