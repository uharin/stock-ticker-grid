// =========================================================================================
// ROOT MODULE - Anything added to app.module 'Imports' array will be available throughout App
// =========================================================================================

// @angular modules
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// other imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { StockDashboardModule } from './components/stock-dashboard/stock-dashboard.module';

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
    HttpClientModule,
    SharedModule,
    StockDashboardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
