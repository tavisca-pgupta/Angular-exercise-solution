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
\*\*Note: Expression Binding will Auto-Transform the Members values into string
Syntax -->
{{<PUBLIC-PROPERTY-FROM-COMPONENT>}}

============================================================================================================================================
Angular Directives

1. Reusable, Functional, Behavioral, UI Elements or Attributes
2. 3 Types
   1. Component Directive
   2. Structural Directives
      1. Add/Remove DOM Elements based on Conditions
         1. \*ngFor --> Execure for..of loop on DOM
         2. \*ngIf --> Execute if condition on DOM
         3. \*ngSwich-ngSwitchCase
   3. Attribute Directives
      1. DOM Attribute

========================================================================================================

Day 2: Exercise

1. Generate Delete Button for each row of Products table. Delete the row when the button is clicked
2. Add Two radio button above the products table for Sort and Reverse. Sort/Revese the Products table by ProductName when the Sort/Reverse Radio button is clicked.
3. Update the Product by selecting Product from Products table and show the updated back to the table.
4. Add a search Textbox above the products table to search products based on ProductName / Category Name

======================================================================
HTML 5

1. FormModel
   1. Name/Value pair of all editable elements inside HTML 5 Form
2. ngModel
   1. Attribute with ngModelChanged Event, [(ngModel)]
      1. Listen to the default event of HTML element, KeyUp event for the input:Text, trigger Change
      2. ngModel read the current data in the element for the default property, input:Text, the 'value' property that will be changed
      3. Trigger the ngModelChanged event
         1. Read the current value and update it for the proeprty Binding with the UI element
         2. This will update component
         3. The component will update all propeties in it
         4. The Updated property values will be send back to UI and UI is updated
3. Angular Model-Driven-Forms aka Data-Driven-Forms --> Reactive Forms
   1. Binding an Entity Class aka Model class directly to the HTML-Form OR Anguar Form using 'FormGroup' (?)
      1. FormGroup is a collection of various Editable Form elements inside the HTML 5 Form in Angular HTML Template
         1. FormGroup
            1. Contains FormControlsCollection
               1. Each element in collection is known as 'FormControl'
                  1. FormControl maps with the public property from the model class
   2. # @angular/forms package 1. ReactiveFormsModule class for Reactive Forms 2. FormGroup 3. FormControl 4. Validators class 1. static methods 1. required(AbstractConrtol) / requiredTrue(AbstractConrtol) 1. Methods with AbstractControl are invoked w/o parameters 2. min(int)/max(int) 3. minLength(int)/maxLength(int) 4. email(RegEx | string) 5. pattern(RegEx | string)

======================================================================================

Day 3: Exercise

1. Validate ProductId as Unique against the Products Array.
2. Validate the ProductName for not having Special Character and must start from Upper case character
3. Make sure that the Controls border become red when it contains an invalid value
   1. Hint use ngClass
4. create a Drop-Down Component that contains Radio Buttons for each option.

Angular Tech.

1. UI Reusability

   1. Directives
      1. UI Requirements
      2. Functional Requirements
      3. Properties for input and events for output
   2. Elements
      1. Component as Element
      2. Lit-Elements (Project Polymer)

2. Developing Complex UI Application
   1. Micro FrontEnd
