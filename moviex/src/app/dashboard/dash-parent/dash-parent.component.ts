import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, share } from 'rxjs/operators';
import { AccountService } from 'src/app/components/+auth/_services/account.service';

@Component({
  selector: 'app-dash-parent',
  templateUrl: './dash-parent.component.html',
  styleUrls: ['./dash-parent.component.scss']
})
export class DashParentComponent implements OnInit {

  adminData = JSON.parse(localStorage.getItem('user'));
  isAdmin = this.adminData.isAdmin;
  

  constructor(private router: Router) { }

  ngOnInit(): void {

    // Check if not admin
    if(this.isAdmin == false) { 
      this.router.navigate(['/']);
    }
  
    

}

}
