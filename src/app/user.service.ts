import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  getToken(email : string, password : string) : void {
    this.http
      .post(
        environment.authUrl,
        JSON.stringify({
          email: environment.clientId,
          password: environment.clientSecret
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeHeaders(): void {
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'ng-book'
    });

    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: headers
      }
    );
    this.http.request(req).subscribe(data => {
      this.data = data['body'];
    });
  }
    


  makePost(): void {
    this.loading = true;
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }



   

}
