import { Stock } from './shared/models/stock.model';
// =========================================================================================
// ROOT MODULE - Anything added to app.module 'Imports' array will be available throughout App
// =========================================================================================

// modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
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
