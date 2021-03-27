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
  
  delUser(id){
   this.userService.delete(id).subscribe((data) => {
    console.log(data);    
  })
    this.ngOnInit(); // refresing page after del
  }

  constructor(private userService:AccountService, private http:HttpClient) { }

  ngOnInit(): void {    
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data
  }); /// getting all data
  
  }

}
