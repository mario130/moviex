import { Injectable } from '@angular/core';
import { AbstractControl } from "@angular/forms";

// @Injectable({
//   providedIn: 'root'
// })
// export class ConfirmedValidatorService {

//   constructor() { }
// }
export function ConfirmedValidatorService(controls: AbstractControl) {
  const password = controls.get('password');
  const confirmPassword = controls.get('confirmPassword');

  if (password.pristine || confirmPassword.pristine) {
      return null;
  }
  else {

      return password && confirmPassword && password.value !== confirmPassword.value
          ? { 'misMatch': true }
          : null;
  }
}
