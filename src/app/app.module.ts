import { Stock } from './shared/models/stock.model';
// =========================================================================================
// ROOT MODULE - Anything added to app.module 'Imports' array will be available throughout App
// =========================================================================================

// modules
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { StockModule } from './stock/stock.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StockDashboardComponent } from './stock/stock-dashboard/stock-dashboard.component';

// This app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUiXlH9RIVyDheVpYFNyxPzRQnHz7fC34",
    authDomain: "stock-ticker-grid.firebaseapp.com",
    databaseURL: "https://stock-ticker-grid.firebaseio.com",
    projectId: "stock-ticker-grid",
    storageBucket: "stock-ticker-grid.appspot.com",
    messagingSenderId: "527817637205",
    appId: "1:527817637205:web:edd213c949e3c42ec783dc",
    measurementId: "G-GQ13HVSNQV"
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    SharedModule,
    StockModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
