import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// custom components
import { HomeComponent } from './home/home.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';

// firebase
import { AngularFireModule } from '@angular/fire';

// Angular reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { StockSearchFormComponent } from './stock-search-form/stock-search-form.component';


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
    SuperSecretComponent,
    StockSearchFormComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
