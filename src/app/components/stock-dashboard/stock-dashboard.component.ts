import { Component, OnInit } from '@angular/core';
import { StockSearchFormComponent } from '../stock-search-form/stock-search-form.component';
import { StockCardComponent } from '../stock-card/stock-card.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css'],
  providers: [SharedModule]
})
export class StockDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
