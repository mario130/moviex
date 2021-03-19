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
  movieData:{};
  loading = true;
  error: any;
  // overview:string;
  // img;
  constructor(private activateRoute: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {
    this.movieData = []
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
          show(name: "${this.movieName}") {
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
         
          this.movieData = {
            "name" : result?.data?.show.name,
            "summary" : result?.data?.show.summary,
            "image" : result?.data?.show.image.original,
          }
          // comment From Foad : i declare array and push data in it then print it 
          console.log( "name : " + this.movieData["name"]);
          console.log( "summary : " + this.movieData["summary"]);
          console.log( "image : " + this.movieData["image"]);
          
          this.loading = result.loading;
          this.error = result.error;
        });
    })


  }






}
