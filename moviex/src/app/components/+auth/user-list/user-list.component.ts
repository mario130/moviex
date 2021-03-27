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

  constructor(private localStorage:LocalStorageService) { }

  ngOnInit(): void {
    this.list=this.localStorage.get("favoriteMovie")
    this.favoritesList=this.favoritesList.concat(this.list);
    console.log("revieved storage: ",this.favoritesList);
    // this.ratValue=this.favoritesList['rating'];
    for (let indx = 0; indx < 4; indx++) {
      this.rateMovie[indx] = indx;

    }

    const userInLocalStorage = JSON.parse(localStorage.getItem('user'))
    this.userName = userInLocalStorage.username

    console.log("lenght:",this.favoritesList.length);

  }


}
