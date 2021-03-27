import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Show } from '../../shared/models/show';
import{MoviesPagenationServiceService} from'../../components/movies/services/movies-pagenation-service.service';

@Component({
  selector: 'app-homepage-show',
  templateUrl: './homepage-show.component.html',
  styleUrls: ['./homepage-show.component.scss']
})
export class HomepageShowComponent implements OnInit {
  shows: Observable<Show[]>;
  loading = true;
  error: any;
  bestRating:any[];
  filteredRating: any[];
  selectedGenre: string;
  showFilteredShows(genre){
    this.selectedGenre = genre;
  }
  
// static data (solving slider lake)
  newArr = 
 
  [
      {
        "name": "The Vampire Diaries",
        "weight": 90,
        "summary": "<p><b>The Vampire Diaries</b> is a supernatural drama/romance based around Elena Gilbert who falls in love with a 163 year old vampire.</p><p>Based on a novel series by L.J. Smith.</p>",
        "rating": {
          "average": 8
        },
        "genres": [
          "Drama",
          "Romance",
          "Supernatural"
        ],
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/88/220908.jpg"
        },
        "url": "http://www.tvmaze.com/shows/63/the-vampire-diaries"
      },
      {
        "name": "Grey's Anatomy",
        "weight": 98,
        "summary": "<p>The doctors of Grey Sloan Memorial Hospital deal with life-or-death consequences on a daily basis -- it's in one another that they find comfort, friendship and, at times, more than friendship. Together they're discovering that neither medicine nor relationships can be defined in black and white. Real life only comes in shades of grey.</p>",
        "rating": {
          "average": 8.3
        },
        "genres": [
          "Drama",
          "Romance",
          "Medical"
        ],
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/125/314760.jpg"
        },
        "url": "http://www.tvmaze.com/shows/67/greys-anatomy"
      },
      {
        "name": "America's Next Top Model",
        "weight": 66,
        "summary": "<p>Created by supermodel Tyra Banks, <b>America's Next Top Model</b> follows a group of young women of various backgrounds, shapes and sizes who live together in a loft and vie for a modeling contract. The show exposes the transformation of everyday young women into potentially fierce supermodels, with participants facing weekly tests that determine who can make the cut. With mentoring by supermodel Tyra Banks and exposure to high-profile fashion-industry gurus, the finalists compete in a highly accelerated modeling boot camp--a crash course to supermodel fame.<br /><br /> Originally hosted by Tyra Banks for it's first 22 seasons, the 23rd season will move from The CW, to VH1 and will be hosted by Rita Ora, who heads up the new judging panel of Ashley Graham, Law Roach and Drew Elliott.</p>",
        "rating": {
          "average": 5.9
        },
        "genres": [],
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/147/369365.jpg"
        },
        "url": "http://www.tvmaze.com/shows/99/americas-next-top-model"
      },
      {
        "name": "The Mentalist",
        "weight": 89,
        "summary": "<p>Patrick Jane, an independent consultant with the California Bureau of Investigation (CBI), has a remarkable track record for solving serious crimes by using his razor sharp skills of observation. Within the Bureau, Jane is notorious for his blatant lack of protocol and his semi-celebrity past as a psychic medium, whose paranormal abilities he now admits he feigned. No-nonsense Senior Agent Teresa Lisbon openly resists having Jane in her unit and alternates between reluctantly acknowledging Jane's usefulness and blasting him for his theatrics, narcissism, and dangerous lack of boundaries. Lisbon's team includes agents Kimball Cho, Wayne Rigsby and rookie member Grace Van Pelt, who all think Jane's a loose cannon but admire his charm and knack for clearing cases.</p>",
        "rating": {
          "average": 8.6
        },
        "genres": [
          "Drama",
          "Crime",
          "Mystery"
        ],
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1239.jpg"
        },
        "url": "http://www.tvmaze.com/shows/116/the-mentalist"
      },
      {
        "name": "How I Met Your Mother",
        "weight": 95,
        "summary": "<p><b>How I Met Your Mother</b> is a comedy about Ted and how he fell in love. It all starts when Ted's best friend, Marshall drops the bombshell that he's going to propose to his long-time girlfriend, Lilya kindergarten teacher. At that moment, Ted realizes that he had better get a move on if he too hopes to find true love. Helping him in his quest is Barney a friend with endless, sometimes outrageous opinions, a penchant for suits and a foolproof way to meet women. When Ted meets Robin he's sure it's love at first sight, but destiny may have something else in store.</p>",
        "rating": {
          "average": 7.7
        },
        "genres": [
          "Drama",
          "Comedy",
          "Romance"
        ],
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/2451.jpg"
        },
        "url": "http://www.tvmaze.com/shows/171/how-i-met-your-mother"
      },
      {
        "name": "The New Normal",
        "weight": 19,
        "summary": "<p>These days, families come in all forms - single dads, double moms, sperm donors, egg donors, one-night-stand donors. Bryan and David are a Los Angeles couple and they have it all. Well, almost. With successful careers and a committed, loving partnership, there is one thing that this couple is missing: a baby. Just when they think the stars will never align, enter Goldie an extraordinary young woman with a checkered past. A midwestern waitress and single mother looking to escape her dead-end life and small-minded grandmother Goldie decides to change everything and move out west with her precocious eight year-old daughter. Desperate and broke - but also fertile - Goldie quickly becomes the guys' surrogate and quite possibly the girl of their dreams. Surrogate mother, surrogate family.</p>",
        "rating": {
          "average": 6.7
        },
        "genres": [
          "Comedy"
        ],
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/3817.jpg"
        },
        "url": "http://www.tvmaze.com/shows/235/the-new-normal"
      },
      {
        "name": "Awake",
        "weight": 56,
        "summary": "<p><b>Awake</b> is an intriguing drama about Detective Michael Britten who finds he's living two parallel lives. He's involved in a car accident that seems to have killed both his son and wife yet his mind creates an ingenious coping mechanism in which he now lives two separate lives - one where his wife survived and the other where his son did. Trying to regain some normalcy, Michael returns to solving crimes in both worlds with the help of two different partners, Detective Isaiah \"Bird\" Freeman and Detective Efrem Vega Michael is assigned a different case in each reality and quickly discovers that his dual existence is actually a powerful tool. He begins to solve impossible cases by using his two realities to gain unique perspectives and link clues that cross over from world to world. Helping Michael to navigate his two realities are his bureau-assigned therapists Dr. Evans and Dr. Lee While both therapists work to untangle his two worlds, Michael has no interest in proving either one is false. But when memories of the accident begin to haunt him, he is forced to confront the truth about what really happened the night of the crash.</p>",
        "rating": {
          "average": 7.3
        },
        "genres": [
          "Drama",
          "Fantasy",
          "Thriller"
        ],
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/3799.jpg"
        },
        "url": "http://www.tvmaze.com/shows/233/awake"
      },     
  ]


  constructor(private apollo: Apollo , private moviesService : MoviesPagenationServiceService) {}
  ngOnInit(){
   
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
          rating{
            average
          }
          url
          premiered
      }
    }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      // console.log(result.data.shows);
      this.shows = result?.data?.shows;
      this.loading = result.loading;
      this.error = result.error;
      this.filteredRating=result?.data?.shows;
      
      this.bestRating = this.filteredRating?.filter(item => {
         console.log("average:",item.rating.average)
        
                  return item.rating.average>9;
        
      })
      
    });
    // this.list=this.newArr;
    //  this.bestRating= this.newArr.filter(item => {
    //   item.rating["average"] >= 7
    //   console.log("items:",item)
    //  });
     //  this.bestRating.sort((ele1,ele2)=>ele2.rating.average-ele1.rating.average)
     console.log("bestrating: ",this.bestRating);
     
  }

  
  ngAfterOnInit() {
    
  }
}


