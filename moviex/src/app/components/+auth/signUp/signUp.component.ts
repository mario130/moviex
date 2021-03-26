import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ConfirmedValidatorService} from '../../../shared/Services/confirmed-validator.service'
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  signUpForm=this.fb.group({
    username:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required,Validators.minLength(8)],
    confirmPassword:['']
    
  },
  {validators:[ConfirmedValidatorService]}
  );
  isValidInput(fieldName): boolean {
    return this.signUpForm.controls[fieldName].invalid &&
      (this.signUpForm.controls[fieldName].dirty || this.signUpForm.controls[fieldName].touched);
  }
  validateRequired(fieldName) {
    return this.signUpForm.controls[fieldName].errors.required;
  }
  validatePattern(fieldName) {
    return this.signUpForm.controls[fieldName].errors.pattern;
  }
  validateLength(fieldName) {
    return this.signUpForm.controls[fieldName].errors.minLength;
  }
  
  signUp(): void {
    console.log(this.signUpForm.value);
  }

}
