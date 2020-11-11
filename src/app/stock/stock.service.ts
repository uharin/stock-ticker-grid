import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, of, Subscription } from 'rxjs'
import { retry, catchError,  map } from 'rxjs/operators'
import { Stock } from '../shared/models/stock.model'
import { StockModule } from '../stock/stock.module'
import { HttpService } from '../core/http/http.service'

@Injectable({
  providedIn: 'root'
})

export class StockService {

  stock: Stock;
  stocksStore: AngularFirestoreCollection<Stock>;

  constructor(private http: HttpService,
              private afs: AngularFirestore) { }

  public getStockStore(user) {
    this.http.get
  }

  public getStock(symbol) {
    return this.http.get(symbol).subscribe(stock => console.log(stock))
  }
}
