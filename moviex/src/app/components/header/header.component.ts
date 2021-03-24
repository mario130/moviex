import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  routeHome() {
    console.log('done');
    this.router.navigate(['/home']);
  }

 
loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required,Validators.minLength(8)]
    
  });
  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }
  validateRequired(fieldName)
  {
    return this.loginForm.controls[fieldName].errors.required;
  }
  validatePattern(fieldName)
  {
    return this.loginForm.controls[fieldName].errors.pattern;
  }
  validateLength(fieldName)
  {
    return this.loginForm.controls[fieldName].errors.minLength;
  }
  login(): void {
    console.log(this.loginForm.value);
  }
}
