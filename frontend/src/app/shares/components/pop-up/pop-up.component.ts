import { MainPageService } from './../../../modules/mainPage-module/mainPage-service/main-page.service';
import { Component, Input, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { config } from './../../../config';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input() title: string;
  id: number;
  elements = [];
  backdrops = [];
  reviews = [];
  casts = [];
  similar = [];

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, private service: MainPageService,
              private carouselConfig: NgbCarouselConfig) {
  this.id = data.id;
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.service.getMovieInfoById(this.id)
    .subscribe((elem) => this.elements.push({
      adult: elem.adult,
      budget: elem.budget,
      getGenres(): string{
        return elem.genres.map((item) => {
          return item.name;
        });
      },
      overview: elem.overview,
      getCompanies(): string{
        return elem.production_companies.map((item) => {
          return item.name;
        });
      },
      getCountries(): string{
        return elem.production_countries.map((item) => {
          return item.name;
        });
      },
      title: elem.title,
      original_title: elem.original_title,
      poster: `${config.imageUrl}${elem.poster_path}`,
      release_date: elem.release_date,
      runtime: elem.runtime,
      vote_average: elem.vote_average,
      popularity: elem.popularity,
      status: elem.status
    }));
    this.service.getMovieImagesById(this.id)
    .subscribe((result) => result.backdrops.map((elem) => {
      this.backdrops.push({backdrop: `${config.imageUrl}${elem.file_path}`});
      this.backdrops.splice(5);
    }));
    this.service.getMovieReviewById(this.id)
    .subscribe((elem) => elem.results.map((element) => {
      this.reviews.push({
        content: element.content,
        created: element.created_at,
        updated: element.updated_at,
        details: element.author_details,
        avatar: `${config.avatarUrl}${element.author_details.avatar_path}`,
        cut(): string {
          return element.author_details.avatar_path.substring(1);
        }
      });
    }));
    this.service.getCreditsMovieById(this.id)
    .subscribe((result) => result.cast.map((elem) => {
      if (this.casts.length < 8){
            this.casts.push({
            character: elem.character,
            name: elem.original_name
          });
      }
    }));
    this.service.getSimilarMoviesById(this.id)
    .subscribe((result) => result.results.map((elem) => {
      this.similar.push({
        id: elem.id,
        title: elem.title,
        poster: `${config.imageUrl}${elem.poster_path}`,
        releaseDate: elem.release_date,
        vote_average: elem.vote_average
      });
      this.similar.splice(7);
      console.log(this.similar);
    }));
  }

  check(item): boolean {
    return (/https:\/\/secure.gravatar.com\/avatar/i.test(item));
  }
}
