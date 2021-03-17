import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  movieName: string;
  movieData:Observable<String[]>;
  loading = true;
  error: any;
  overview:string;
  img;
  constructor(private activateRoute: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('name') != null) {
        this.movieName = params.get('name')
      }
      else {
        this.movieName = "name not sended";
      }
      //typeof(NaN)
      console.log(`from single show ${this.movieName}`)


      this.apollo
        .watchQuery({
          query: gql`
        {
          show(name:"Penny Dreadful") {
          name
         summary
         image{
          original
        }
          }      
         }
        `,
        })
        .valueChanges.subscribe((result: any) => {
          this.movieData = result?.data?.show.name;
          this.overview=result?.data?.show.summary;
          this.overview.replace('</p>','');
          this.img=result?.data?.show.image.original;
          console.log(this.overview);
          this.loading = result.loading;
          this.error = result.error;

        });
    })


  }






}
