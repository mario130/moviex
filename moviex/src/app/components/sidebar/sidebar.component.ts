import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}


  @Output()selectedGenre = new EventEmitter<string>()
  changeGenre(genre: string): void{
    this.selectedGenre.emit(genre)
  }

  genres = [
    'Action',
    'Adventure',
    'Anime',
    'Comedy',
    'Crime',
    'Drama',
    'Espionage',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Legal',
    'Medical',
    'Music',
    'Mystery',
    'Romance',
    'Science-Fiction',
    'Supernatural',
    'Thriller',
    'War',
    'Western',
  ];
}
