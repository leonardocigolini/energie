import { Injectable, Output,EventEmitter } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { environment } from './../environments/environment';
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

 userAuthenticate(user: string, password: string, done: CallbackFunction) : void {
    console.log('user authenticate '+user+ ' '+password);
    this.data1 = { email: user, password: password};
   
  //  this.appoAuthenticate()
  //  this.getToken('','', this.appoAuthenticate);
    this.getToken2(user,password, done)
  }

  getToken2(email : string, password : string, done : CallbackFunction) : void {

    const pars: HttpParams = new HttpParams().set('m', '1').set('n', email).set('p',password);

    this.http.get<any>(environment.userUrl,{params: pars}).subscribe({
      next: (data : ApiAnswer) => { this.data2 = data; console.log('next')},
      error: error => console.log(error),
      complete: () => done(this.data2)
    });

  }

  
}
