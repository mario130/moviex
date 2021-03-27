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
  isLogged:boolean = false;
  isAdmin:boolean = false;
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

      if(localStorage.getItem('user')!==null){
        this.isLogged = true;
        if(JSON.parse(localStorage.getItem('user')).isAdmin){
          this.isAdmin = true;
        }
      }

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

    if(temp){
        for (var i = 0; i < temp.length; i++)
          this.favoirtesMovies.push(temp[i]);

        this.favoirtesMovies.push(this.movieData)
        this.localStorage.set("favoriteMovie", this.favoirtesMovies);
        console.log("else")
    } else {
      this.favoirtesMovies.push(this.movieData);
        this.localStorage.set("favoriteMovie", this.favoirtesMovies);
        console.log("if")
    }
    console.log("new elem: ", temp)

    // this.localStorage.set("favoriteMovie", this.movieData);
  }

}
