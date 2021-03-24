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

 

}
