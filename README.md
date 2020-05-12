Generate package.json using command
- npm init -y
- package.json
  - dependencies
    - Runtime Dependencies on Production
      - Included in Production Build int the file 'vendor.js'
      - external Dependencis of angular are Build into 'polyfills.js'
      - Angular 7.0 +
        - The vendor.js is merged and minified in the application production file
          - main.js/app.js
    - npm install --save <PACKAGE-NAME>   
  - devDependencies
    - Used for dev/testing
    - npm install --save-dev <PACKAGE-NAME>
  - scripts
    - Build/Test/Run the application


<input type="text" id="txt" value="ABC"/> value is static
	--> value is HTML DOM attribute

document.getElementById('txt').value = "PQR"; value is dynamic
	--> value is DOM property

Attribuite + Property ==> Property Binding

<input type="text" id="txt" [value]="<PUBLIC-MEMBER-FROM-COMPONENT>"/>
[value], [href], [ckecked], [disabled]

Event Binding
<input type="button" (click)="<PUBLIC-METHOD-FROM-COMPONENT>"/>

Property Binding + Event Binding ==> Two-Way Binding
[(ngModel)]

import FormsModule from @angular/forms in import array of NgModule applied on AppModule

Interpolation AKA Exptression Binding, Read-Only binding of String Memebrs of Component to UI Element
**Note: Expression Binding will Auto-Transform the Members values into string
Syntax -->
   {{<PUBLIC-PROPERTY-FROM-COMPONENT>}}





============================================================================================================================================
Angular Directives
1. Reusable, Functional, Behavioral, UI Elements or Attributes
2. 3 Types
   1. Component Directive
   2. Structural Directives
      1. Add/Remove DOM Elements based on Conditions
         1. *ngFor --> Execure for..of loop on DOM
         2. *ngIf --> Execute if condition on DOM
         3. *ngSwich-ngSwitchCase
   3. Attribute Directives
      1. DOM Attribute 

========================================================================================================

Day 2: Exercise
1. Generate Delete Button for each row of Products table. Delete the row when the button is clicked
2. Add Two radio button above the products table for Sort and Reverse. Sort/Revese the Products table by ProductName when the Sort/Reverse Radio button is clicked.
3. Update the Product by selecting Product from Products table and show the updated back to the table.
4. Add a search Textbox above the products table to search products based on ProductName / Category Name  










