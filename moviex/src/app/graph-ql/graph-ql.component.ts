import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Show } from '../shared/models/show';

@Component({
  selector: 'app-graph-ql',
  templateUrl: './graph-ql.component.html',
  styleUrls: ['./graph-ql.component.scss']
})
export class GraphQLComponent implements OnInit {
  shows: Observable<Show[]>;
  loading = true;
  error: any;

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
      }
    }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.shows = result?.data?.shows;
      this.loading = result.loading;
      this.error = result.error;
    });
  }
  ngAfterOnInit() {
  }
}
