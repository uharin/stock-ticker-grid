import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { SuperSecretComponent } from './super-secret/super-secret.component';

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
    HomeComponent,
    SuperSecretComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
