import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-search-form',
  templateUrl: './stock-search-form.component.html',
  styleUrls: ['./stock-search-form.component.css'],
})
export class StockSearchFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  // stockSearchForm: FormGroup;
  stockSearchFormArray: FormGroup;

  ngOnInit(): void {
    // acts as a model for the an array of stock forms
    this.stockSearchFormArray = this.fb.group({
      stocks: this.fb.array([
        this.createStockForm()
      ]),
    });

    // subscribe to stockSearchForm Observable and update whenever form updates
    this.stockSearchFormArray.valueChanges.subscribe(console.log);
  }

  // form factory
  createStockForm() {
    let newForm = this.fb.group({
      stockSymbol: [
        '',
        [
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(5)
        ],
      ],
      companyName: '',
      shares: '',
    });
    return newForm;
  }

  // ------------- GETTERS  ------------- //

  // configure getters; should make HTML validation cleaner
  // gets the array of stock forms from stockSearchForm
  get stockForms() {
    return this.stockSearchFormArray.get('stocks') as FormArray;
  }
  
  get stockSymbol() {
    console.log(this.stockForms);
    return this.stockForms.get('stockSymbol');
  }
  get companyName() {
    return this.stockForms.get('companyName');
  }
  get shares() {
    return this.stockForms.get('shares');
  }
  
  // ------------- ADD/REMOVE FORMS  ------------- //
  
  // add a new stock form to stock form array
  addStockForm() {
    const newStockForm = this.createStockForm();
    this.stockForms.push(newStockForm);
  }

  // remove a stock form from stock form array
  deleteStockForm(index) {
    this.stockForms.removeAt(index);
  }
}

