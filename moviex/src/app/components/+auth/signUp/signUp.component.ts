import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {
  registerationForm: FormGroup;
  loading = false;
  submitted = false;
  message:string="";

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    ) { }

  ngOnInit() {  
     this.registerationForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
  }
  isValidInput(fieldName): boolean {
    return this.registerationForm.controls[fieldName].invalid &&
      (this.registerationForm.controls[fieldName].dirty || this.registerationForm.controls[fieldName].touched);
  }
  validateRequired(fieldName)
  {
    return this.registerationForm.controls[fieldName].errors.required;
  }
  validatePattern(fieldName)
  {
    return this.registerationForm.controls[fieldName].errors.pattern;
  }
  validateLength(fieldName)
  {
    return this.registerationForm.controls[fieldName].errors.minLength;
  }
  
  get f() { return this.registerationForm.controls; }
  onSubmit() {
        console.log(this.registerationForm.value);
        this.submitted = true;
        this.message = "";
        if (this.registerationForm.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.registerationForm.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['../dashboard/shows'], { relativeTo: this.route });
                },
                error: error => {
                  this.loading = false;
                   this.message = error.error.message
                },complete() {
                  var elems = document.querySelectorAll(".overlay");
                  [].forEach.call(elems, function(elem) {
                    elem.classList.remove("openform");
                  });
                }
            });
           
          
    }
}
