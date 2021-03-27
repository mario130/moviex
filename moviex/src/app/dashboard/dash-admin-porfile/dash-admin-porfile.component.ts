import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/components/+auth/_services/account.service';

@Component({
  selector: 'app-dash-admin-porfile',
  templateUrl: './dash-admin-porfile.component.html',
  styleUrls: ['./dash-admin-porfile.component.scss']
})
export class DashAdminPorfileComponent implements OnInit {
  adminData;
  constructor(private userServie:AccountService) { }

  model: any = {};

  onSubmit(data) {    
    this.userServie.update(data.id,data).subscribe((x)=>{
      location.href = '/dashboard/users';      
    })
  };

  ngOnInit(): void {
    this.adminData = JSON.parse(localStorage.getItem('user'));
  }

}
