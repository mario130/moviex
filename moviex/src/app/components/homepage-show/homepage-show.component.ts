import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  pageNum: any;

  constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) { }
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.pageNum = parseInt(params.get('pageNum'))
      }
    )
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
      this.shows = result?.data?.shows;
      this.loading = result.loading;
      this.error = result.error;
    });
  }
  ngAfterOnInit() {
  }
}
