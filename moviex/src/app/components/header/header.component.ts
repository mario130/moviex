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
  isAdmin:boolean = false;
  

  
  constructor() { }
  logOut(){
    alert('Are you sure you want to log out?')       
    localStorage.removeItem('user');     
    location.href = '/home'; // to recall data
   }
  ngOnInit(): void {         
    if(localStorage.getItem('user')!==null){
      this.isLogged = true;
      if(JSON.parse(localStorage.getItem('user')).isAdmin){
        console.log('sd');        
        this.isAdmin = true;
      }else{
        
      }           
    } 
    
  }



}
