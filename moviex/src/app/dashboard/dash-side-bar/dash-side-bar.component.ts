import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/components/+auth/_services/account.service';

@Component({
  selector: 'app-dash-side-bar',
  templateUrl: './dash-side-bar.component.html',
  styleUrls: ['./dash-side-bar.component.scss']
})
export class DashSideBarComponent implements OnInit {
  logOut(){
    alert('Are you sure you want to log out?')       
    localStorage.removeItem('user');     
    location.href = '/home'; // to recall data
   }
  constructor() { }

  ngOnInit(): void {
  }

}
