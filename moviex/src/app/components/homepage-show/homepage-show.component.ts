import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Show } from '../../shared/show';

@Component({
  selector: 'app-homepage-show',
  templateUrl: './homepage-show.component.html',
  styleUrls: ['./homepage-show.component.scss']
})
export class HomepageShowComponent implements OnInit {
  shows: Observable<Show[]>;
  loading = true;
  error: any;

  newArr = ['1','2','3','4','5','6']; // testing slider

  constructor(private apollo: Apollo) {}
  ngOnInit(){
    // this.getShow()
    this.apollo
    .watchQuery({
      query: gql`
      {
        shows {
          name
          weight
          summary
          image{
            medium
          }
          url
      }
    }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      console.log(result.data.shows);
      this.shows = result?.data?.shows;
      this.loading = result.loading;
      this.error = result.error;
    });    
  }
  ngAfterOnInit() {
    console.log(this.shows);
  }
}


