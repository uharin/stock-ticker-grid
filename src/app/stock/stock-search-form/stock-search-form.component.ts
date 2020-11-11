import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpService } from '../../core/http/http.service';
import { Stock } from '../../shared/models/stock.model';
import { StockService } from '../../stock/stock.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-search-form',
  templateUrl: './stock-search-form.component.html',
  styleUrls: ['./stock-search-form.component.css'],
  providers: [] // does HttpService does not need to go in providers array because it is provided in root
})

export class StockSearchFormComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private stockService: StockService) {}

  stockSearchForm: FormGroup;
  stocks: Array<Stock> = [];
  // stockSearchFormArray: FormGroup;

  ngOnInit(): void {
    /* acts as a model for the an array of stock forms

    this.stockSearchFormArray = this.fb.group({
      stocks: this.fb.array([
        this.createStockForm()
      ]),
    });  
    */

    this.stockSearchForm = this.fb.group({
      stockSymbol: [
        '',
        [ Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5)
        ],
      ]
    });
    
    // subscribe to stockSearchForm Observable and update whenever form updates
    this.stockSearchForm.valueChanges.subscribe(console.log);
  }

  // form factory
  createStockForm() {
    let newForm = this.fb.group({
      stockSymbol: [
        '',
        [ Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(5)
        ],
      ]
    });
    return newForm;
  }

  // ------------- GETTERS  ------------- //
  
  get stockSymbol() {
    return this.stockSearchForm.get('stockSymbol');
  }

  // ------------- ADD/REMOVE FORMS  ------------- //
  
  /* add a new stock form to stock form array

  addStockForm() {
    const newStockForm = this.createStockForm();
    this.stockForms.push(newStockForm);
  }

  // remove a stock form from stock form array
  deleteStockForm(index) {
    this.stockForms.removeAt(index);
  }
  
  */
 
  getStock() {
    this.stockService.getStock(this.stockSearchForm.controls.stockSymbol.value)
  }

  addStock(){
    
  }

}

