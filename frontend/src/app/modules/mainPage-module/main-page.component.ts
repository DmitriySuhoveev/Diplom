import { config } from './../../config';
import { MainPageService } from './mainPage-service/main-page.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBackdropInfo, UpcomingBackdropInfo } from './mainPage-interfaces/mainPage-interfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  currentMonthPosters = [];
  trendingMoviesInfo: MovieBackdropInfo[] = [];
  upcomingMoviesInfo: UpcomingBackdropInfo[] = [];
  topRatedMoviesInfo: MovieBackdropInfo[] = [];
  horrors: MovieBackdropInfo[] = [];
  actions: MovieBackdropInfo[] = [];
  comedy: MovieBackdropInfo[] = [];
  drama: MovieBackdropInfo[] = [];
  fantasy: MovieBackdropInfo[] = [];
  thriller: MovieBackdropInfo[] = [];
  war: MovieBackdropInfo[] = [];

  constructor(private router: Router, private mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.getTrendingFunc();
    this.getPopularFunc();
    this.getUpcomingFunc();
    this.getTopRatedFunc();
    this.getHorrorsFunc();
    this.getActionFunc();
    this.getComedyFunc();
    this.getDramaFunc();
    this.getFantasyFunc();
    this.getThrillerFunc();
    this.getWarFunc();
  }

  getPopularFunc(): void{
    this.mainPageService.getPopular()
    .subscribe((result) => result.results.map((elem) => {
      this.trendingMoviesInfo.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.trendingMoviesInfo.splice(6);
    }));
  }

  getTrendingFunc(): void{
    this.mainPageService.getTrending()
    .subscribe((result) => result.results.map((elem) => {
      this.currentMonthPosters.push(`${config.imageUrl}${elem.poster_path}`);
      this.currentMonthPosters.splice(5);
    }));
  }

  getUpcomingFunc(): void{
    this.mainPageService.getUpcoming()
    .subscribe((result) => result.results.map((elem) => {
      this.upcomingMoviesInfo.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`});
      this.upcomingMoviesInfo.splice(7);
    }));
  }

  getTopRatedFunc(): void{
    this.mainPageService.getTopRated()
    .subscribe((result) => result.results.map((elem) => {
      this.topRatedMoviesInfo.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.topRatedMoviesInfo.splice(7);
    }));
  }


  getHorrorsFunc(): void{
    this.mainPageService.getHorrors()
    .subscribe((result) => result.results.map((elem) => {
      this.horrors.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
            poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.horrors.splice(7);
    }));
  }

  getActionFunc(): void{
    this.mainPageService.getAction()
    .subscribe((result) => result.results.map((elem) => {
      this.actions.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.actions.splice(7);
    }));
  }

  getComedyFunc(): void{
    this.mainPageService.getComedy()
    .subscribe((result) => result.results.map((elem) => {
      this.comedy.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.comedy.splice(7);
    }));
  }

  getDramaFunc(): void{
    this.mainPageService.getDrama()
    .subscribe((result) => result.results.map((elem) => {
      this.drama.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.drama.splice(7);
    }));
  }

  getFantasyFunc(): void{
    this.mainPageService.getFantasy()
    .subscribe((result) => result.results.map((elem) => {
      this.fantasy.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.fantasy.splice(7);
    }));
  }

  getThrillerFunc(): void{
    this.mainPageService.getThriller()
    .subscribe((result) => result.results.map((elem) => {
      this.thriller.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.thriller.splice(7);
    }));
  }

  getWarFunc(): void{
    this.mainPageService.getWar()
    .subscribe((result) => result.results.map((elem) => {
      this.war.push({id: elem.id, title: elem.title, releaseDate: elem.release_date,
        poster: `${config.imageUrl}${elem.poster_path}`, adult: null, voteAverage: elem.vote_average, overview: elem.overview});
      this.war.splice(7);
    }));
  }

}
