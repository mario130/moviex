import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { LocalStorageService } from '../../shared/Services/local-storage.service'

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  movieName: string;
  movieData: {};
  loading = true;
  favoirtesMovies = [];
  error: any;
  ratValue: number;
  rateMovie: number[] = [];
  notRateMovie: number[] = [];
  // overview:string;
  // img;
  constructor(private activateRoute: ActivatedRoute, private apollo: Apollo, private localStorage: LocalStorageService) { }

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
      // console.log(`from single show ${this.movieName}`)


      this.apollo
        .watchQuery({
          query: gql`
        {
          show(name: "${this.movieName}") {
          name
         summary
         image{
          medium
          original
        }
        rating{
          average
        }
        network{
          name
        }
        genres
        url
        runtime
        type
          }
         }
        `,
        })
        .valueChanges.subscribe((result: any) => {

          this.movieData = {
            "name": result?.data?.show.name,
            "image": result?.data?.show.image.medium,
            "imageOriginal": result?.data?.show.image.original,
            "summary": result?.data?.show.summary,
            "rating": result?.data?.show.rating.average,
            'genres': result?.data?.show.genres,
            "url": result?.data?.show.url,
            "runtime": result?.data?.show.runtime,
            "type": result?.data?.show.type,
            "channel": result?.data?.show.network.name
          }
          this.ratValue = parseInt(this.movieData['rating']);
          for (let indx = 0; indx < this.ratValue; indx++) {
            this.rateMovie[indx] = indx;

          }
          for (let indx = 10; indx > this.ratValue; indx--) {
            this.notRateMovie[10 - indx] = 10 - indx;

          }
          this.loading = result.loading;
          this.error = result.error;
        });
    })


  }

  addToFavourite() {
    var temp = this.localStorage.get("favoriteMovie");

    if (temp.lenght == 0) {
      this.favoirtesMovies.push(this.movieData);
      this.localStorage.set("favoriteMovie", this.favoirtesMovies);
      console.log("if")
    } else {
      for (var i = 0; i < temp.length; i++)
        this.favoirtesMovies.push(temp[i]);

      this.favoirtesMovies.push(this.movieData)
      this.localStorage.set("favoriteMovie", this.favoirtesMovies);
      console.log("else")
    }
    console.log("new elem: ", temp)

    // this.localStorage.set("favoriteMovie", this.movieData);
  }




}
