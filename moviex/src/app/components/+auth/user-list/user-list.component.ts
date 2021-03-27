import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../shared/Services/local-storage.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
favoritesList=[];
list=[];
rateMovie: number[] = [];
notRateMovie:number[] = [];
ratValue: number;
userName: string;
retrived:boolean=false;

  constructor(private localStorage:LocalStorageService) { }

  ngOnInit(): void {
    var username = this.localStorage.get("user")["username"];
    
    this.list=this.localStorage.get("favoriteMovie"+username);
    if(!this.list){
      alert('Your list is empty')
      location.href =  '/home';
    }
    this.favoritesList=this.favoritesList.concat(this.list);
    console.log("revieved storage: ",this.favoritesList);
    // this.ratValue=this.favoritesList['rating'];
    for (let index = 0; index < 4; index++) {
      this.rateMovie[index] = index;

    }

    const userInLocalStorage = JSON.parse(localStorage.getItem('user'))
    this.userName = userInLocalStorage.username
    if (this.favoritesList) {
      this.retrived = true;
      console.log("lenght:",this.favoritesList.length);
    }

   

  }


}
