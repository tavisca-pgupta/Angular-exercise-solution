import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MyCustomValidator} from './app.custom.validator';
@Component({
  selector: 'app-productreactive-component',
  templateUrl: './productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;
  value: number;
  frmPrd: FormGroup;
  constructor() {
      this.product = new Product(0, '', 0, '');
      this.products = new Array<Product>();
      this.logic = new Logic();
      this.headers  =new Array<string>();
      this.value = 0;

      // Bind the Product Model class to the FormGroup
      // Each public proeprty form the Model class will be bound using the
      // FormControl as Name/Value pair in FormGroup
      // FormControl will bind with Model property

      // the frmPrd will be Property-Bind with the [formGroup] property of the HTML form
      // All 'keys' will be bound to the editable elements using its 'formControlName' property
      this.frmPrd = new FormGroup({
        ProductId: new FormControl(this.product.ProductId,
           Validators.compose([
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(6),
              Validators.pattern('[0-9]+'),
              MyCustomValidator.checkEven
           ])),
        ProductName: new FormControl(this.product.ProductName),
        Price: new FormControl(this.product.Price),
        Category: new FormControl(this.product.Category)
      });
  }

  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {
     this.products = this.logic.getProducts();
     // read product Scehma from Product class
     for(let p in this.product) {
       this.headers.push(p);
     }
  }
  clear(): void {
    this.product = new Product(0, '', 0, '');
  }
  save(): void {
    // read the submitted value from the FromGroup
    this.product = this.frmPrd.value;
    this.products = this.logic.saveProducts(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(evt): void {
      console.log(JSON.stringify(evt));
      this.frmPrd.setValue(evt);
  }
}
