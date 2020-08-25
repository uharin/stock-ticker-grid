import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { HttpService } from './services/http/http.service';
import { Stock } from './interfaces/stock.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  readonly title = 'stock-ticker-grid';
  stocks: Stock[] = [];

  constructor(public auth: AuthService,
              public http: HttpService) {
  }


  addStock(stock){
    this.stocks.push(stock);
    console.log("Stocks is", this.stocks)
  }

  createPost(){
    const data = {
      id: null,
      userId: 23,
      title: 'my post',
      body: 'Hello World'
    }
    // send post request with data object attached to it 
      // this.newPost = this.http.post(this.API_endpoint + '/posts', data)
      // .pipe(
      //   map(post => post.title)
      // );
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
      // this.newPost = this.http.post(this.API_endpoint + '/foo', data).pipe(
      // retry(3),
      // catchError(err => {console.log(err) 
      // return of (err)
      // }));
    // NOTE: MUST use PIPE w/ retry, catchError, map and other RXJS operators
  }
}
