import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { StockSearchFormComponent } from './stock-search-form/stock-search-form.component';
import { StockService } from './stock.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StockDashboardComponent,
    StockSearchFormComponent,
    StockCardComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    StockDashboardComponent
  ],
  providers: [StockService]
})

export class StockModule { }
