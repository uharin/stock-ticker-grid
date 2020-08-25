import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { retry, catchError,  map } from 'rxjs/operators';
import { Stock } from '../../interfaces/stock.model'
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly API_endpoint = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/';
  stock: Stock;

  constructor(private httpClient: HttpClient) { }

  public get(symbol: string) {

    /* 
    Create params object to feed to HttpParams and add to API call 
    (not necessary with this API as it does not require typical parameter conventions of ?=)

    const paramsObj = {
      symbol: symbol
    }
    let params = new HttpParams({ fromObject: paramsObj });
    */

    // create headers to add to API call
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
      'x-rapidapi-key': 'c23180a618msh2f10be11824b9bdp1fc69djsn479ae91f1fe3', 
      'useQueryString': 'true'
    })

    // send GET API request with params and/or headers; returns Observable
    return this.httpClient.get<Stock>(this.API_endpoint + symbol, { headers: headers})
  }

  // handleError(error: HttpResponseError){
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error has occurred:', error.error.message);
  //   } else {
  //     this._error.whichError(error.status, error.message);
  //     return throwError({error: error.message, status: error.status});
  //   }
  // }
}
