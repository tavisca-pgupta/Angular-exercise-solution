import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Logic } from 'src/app/models/app.logic';

// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }
  static checkUniqueValidator(logic: Logic): ValidatorFn {
    return (control: AbstractControl): any => {
        let notunique = false;
        let ids = logic.getProducts().map((p) => p.ProductId);
        ids.forEach((id) => {
          if(parseInt(control.value) == id)
            notunique=true;
        })

        if(notunique)
          return {notunique}
        return null;
    };
}
}
