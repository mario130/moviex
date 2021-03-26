import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  message:string = ""
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]]
      
    });
  }

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

  get f() { return this.loginForm.controls; }
  login(): void {
    console.log(this.loginForm.value);
   this.submitted = true;
   this.message = "";

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
        //stored in local storage
            .pipe(first())
            .subscribe({
                next: () => {
                  let userRetrived = this.accountService.getByUsername(this.f.username.value)
                  userRetrived.subscribe((user)=>{
                    if (user.isAdmin&&user.isAdmin!==null) {
                      this.router.navigate(['/dashboard/shows'], { relativeTo: this.route });
                    }
                    else{
                      this.router.navigate([''], { relativeTo: this.route });
                    }
                  })

                  },
                  error: error => {
                    this.loading = false;
                    this.message = error.error.message
                    console.log(error.error.message);
                  },complete() {
                    var elems = document.querySelectorAll(".overlay");
                    [].forEach.call(elems, function(elem) {
                      elem.classList.remove("openform");
                    });
                  }
              });
             
            
      }
  
  }