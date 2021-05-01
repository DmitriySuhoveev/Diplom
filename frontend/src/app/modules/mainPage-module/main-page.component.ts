import { config } from './../../config';
import { MainPageService } from './mainPage-service/main-page.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-module/auth-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  currentMonthPosters = [];
  trendingPosters = [];
  moviesInfo: any[] = [];

  constructor(private authService: AuthService, private router: Router, private mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.getTrendingFunc();
    this.getPopularFunc();
  }

  getPopularFunc(): void{
    this.mainPageService.getPopular()
    .subscribe((result) => result.results.map((elem) => {
      console.log(typeof(this.moviesInfo));
      this.trendingPosters.push(`${config.imageUrl}${elem.poster_path}`);
      this.trendingPosters.splice(6);
      // this.moviesInfo.push({elem.title, elem.vote_average, elem.releases_date});
    }));
  }

  getTrendingFunc(): any{
    this.mainPageService.getTrending()
    .subscribe((result) => result.results.map((elem) => {
      this.currentMonthPosters.push(`${config.imageUrl}${elem.poster_path}`);
      this.currentMonthPosters.splice(5);
    }));
  }



  logout(): void{
    this.authService.logout();
    this.router.navigate(['/auth/authorization']);
  }

}
