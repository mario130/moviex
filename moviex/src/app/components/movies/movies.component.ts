import { Component, Input, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Show } from '../../shared/show';
import { Router} from '@angular/router';
import{MoviesPagenationServiceService} from'./services/movies-pagenation-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  shows:any[];
  filteredShows: any[];
  // shows: Observable<Show[]>;
  loading = true;
  error: any;
  // pageIndexFromLocalStorage:string;
  @Input() selectedGenre: string

  pager: any = {};
  pagedItems: any[];
  len : number;

  constructor(private router:Router,private apollo: Apollo , private moviesService : MoviesPagenationServiceService) {}
  ngOnInit() {
    // this.pageIndexFromLocalStorage = localStorage.getItem("pageIndex")
    // this.getShow()
    this.apollo
      .watchQuery({
        query: gql`
          {
            shows {
              name
              weight
              summary
              genres
              premiered
              rating {
                average
              }
              image {
                medium
              }
              url
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.shows = result?.data?.shows;
        this.filteredShows = result?.data?.shows;
        console.log(this.shows.length);
        this.loading = result.loading;
        this.error = result.error;
        if (!this.loading) {
          // if (this.pageIndexFromLocalStorage) {
          //   this.setPage(this.pageIndexFromLocalStorage)
          // }
          // else{
            this.setPage(1)
          // }
        }
      });

  }
  ngOnChanges(){
    if (this.selectedGenre !== ''){
      this.filteredShows = this.shows?.filter(show => {
        return show.genres.includes(this.selectedGenre)
      })
    } else {
      this.filteredShows = this.shows
    }
    this.setPage(1)
  }
  setPage(page) {
    // localStorage.setItem("pageIndex", page);
    // get pager object from service
    this.pager = this.moviesService.getPager(this.filteredShows?.length, page,9);
    // get current page of items
    console.log(this.pager);

    this.pagedItems = this.filteredShows?.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  // singleShow/:name
  // movieDetails(showName){
  //   console.log(showName);
  //   this.router.navigate(['/singleShow',showName]);
  // }
  // replaced by direct a href

}
