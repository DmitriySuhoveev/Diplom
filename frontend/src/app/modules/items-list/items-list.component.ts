import { config } from './../../config';
import { MainPageService } from './../mainPage-module/mainPage-service/main-page.service';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  inputQuery: string;
  searchMovieList = [];
  searchActorsList = [];
  constructor(public appComponent: AppComponent, private mainPageService: MainPageService) {  }

  ngOnInit(): void {
  }

  showListFunc(): void {
    this.searchMovieList = [];
    this.searchActorsList = [];
    if (this.inputQuery.length !== 0) {
      this.mainPageService.getMovieByKeyword(this.inputQuery)
      .subscribe((result) => {
        if (result.results.length === 0){
          this.searchMovieList = null;
        } else {
          result.results.map((item) => {
            this.searchMovieList.push({
              id: item.id,
              title: item.title,
              releaseDate: item.release_date,
              poster: `${config.imageUrl}${item.poster_path}`,
              adult: null,
              voteAverage: item.vote_average,
              overview: item.overview
            });
          });
        }
        }
        );
      this.mainPageService.getPersonByKeyword(this.inputQuery)
      .subscribe((result) => {
        if (result.results.length === 0){
          this.searchActorsList = null;
        } else {
          result.results.map((item) => {
            this.searchActorsList.push({
              title: item.name,
              voteAverage: item.popularity,
              poster: `${config.imageUrl}${item.profile_path}`
            });
          });
        }
      });
    } else {
      alert('Fill input field');
    }
  }

  filterByTitleFunc(): any {
    this.searchMovieList.sort((a, b): number => {
      const aName = a.title.toLowerCase();
      const bName = b.title.toLowerCase();
      if (aName < bName){
        return -1;
      } else if (aName > bName){
        return 1;
      } else {
        return 0;
      }
    });
  }

  filterByYearFunc(): any {
    this.searchMovieList.sort((a, b): number => {
      const dateA: any = new Date(a.releaseDate);
      const dateB: any = new Date(b.releaseDate);
      return dateA - dateB;
    });
  }

  filterByRatingFunc(): any{
    this.searchMovieList.sort((a, b): number => {
      return a.voteAverage - b.voteAverage;
    });
  }
}
