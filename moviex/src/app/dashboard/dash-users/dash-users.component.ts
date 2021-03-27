import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/components/+auth/_services/account.service';

@Component({
  selector: 'app-dash-users',
  templateUrl: './dash-users.component.html',
  styleUrls: ['./dash-users.component.scss']
})
export class DashUsersComponent implements OnInit {
  allUsers;  
  loading = false;
  delUser(id){
    this.loading = true;
   this.userService.delete(id).subscribe((data) => {
    this.loading = false;   
  })
    this.ngOnInit(); 
  }

  constructor(private userService:AccountService, private http:HttpClient) { }

  ngOnInit(): void {    
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data
  });

  
  
  }

}
