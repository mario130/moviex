import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged:boolean = false;

  
  constructor() { }

  ngOnInit(): void {         
    if(localStorage.getItem('user')!==null){
      this.isLogged = true;            
    } 
    
  }



}
