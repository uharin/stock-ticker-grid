import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  readonly title = 'stock-ticker-grid';
  readonly API_endpoint = 'https://alpha-vantage.p.rapidapi.com/query';
  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(public auth: AuthService,
              private http: HttpClient) {}

  getPosts(){

    // create HttpParams to add to API call
    let params = new HttpParams()
      .set('function', 'GLOBAL_QUOTE')
      .set('symbol', 'TSLA');
    
    // create headers to add to API call
    let headers = new HttpHeaders()
      .set('allow', 'GET, HEAD, OPTIONS')
      .set('x-rapidapi-host', 'alpha-vantage.p.rapidapi.com')
      .set('x-rapidapi-key', 'c23180a618msh2f10be11824b9bdp1fc69djsn479ae91f1fe3')
      .set('useQueryString', 'true');

    // send GET API request with params and/or headers; returns Observable
    this.http.get(this.API_endpoint, {headers: headers, params: params})
      .subscribe(res => console.log(res))
  }
  
  createPost(){
    const data = {
      id: null,
      userId: 23,
      title: 'my post',
      body: 'Hello World'
    }
    // send post request with data object attached to it 
    this.newPost = this.http.post(this.API_endpoint + '/posts', data)
    .pipe(
      map(post => post.title)
    );
    // NOTE: can use RXJS operators like 'map' to manipulate data
  }

  sendErroneousPost() {
    const data = {
      id: null,
      userId: 23,
      title: 'my post',
      body: 'Hello World'
    }
    // send post request with incorrect URL in order to show debugging in browser
    this.newPost = this.http.post(this.API_endpoint + '/foo', data).pipe(
    retry(3),
    catchError(err => {console.log(err) 
    return of (err)
    }));
    // NOTE: MUST use PIPE w/ retry, catchError, map and other RXJS operators
  }
}
