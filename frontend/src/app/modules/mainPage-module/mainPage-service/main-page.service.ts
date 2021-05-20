import { config } from './../../../config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieBackdropInfo, UpcomingBackdropInfo, SearchPost} from '../mainPage-interfaces/mainPage-interfaces';
export interface Poster{
  name: string;
  poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  API_TOKEN = 'c11ffc18ef425735c3f8d64caeb7eceb';

  constructor(private http: HttpClient) { }

  createSession(): Observable<any>{
    return this.http.get<any>(`${config.baseMovieDbUrl}/authentication/guest_session/new?api_key=c11ffc18ef425735c3f8d64caeb7eceb&language=ru`);
  }

  getTrending(): Observable<any>{
    return this.http.get<any>(`${config.baseMovieDbUrl}/trending/movie/week?api_key=${this.API_TOKEN}`);
  }

  getPopular(): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/movie/popular?api_key=${this.API_TOKEN}&language=ru&region=RU`);
  }

  getUpcoming(): Observable<any>{
    return this.http.get<UpcomingBackdropInfo>(`${config.baseMovieDbUrl}/movie/upcoming?api_key=${this.API_TOKEN}&language=ru&region=RU`);
  }

  getTopRated(): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/movie/top_rated?api_key=${this.API_TOKEN}`);
  }

  getGenreMovies(genreID: number): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/discover/movie?api_key=${this.API_TOKEN}&with_genres=${genreID}`);
  }

  getMovieInfoById(externalId: number): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/movie/${externalId}?api_key=${this.API_TOKEN}`);
  }

  getMovieImagesById(externalId: number): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/movie/${externalId}/images?api_key=${this.API_TOKEN}`);
  }

  getMovieReviewById(externalId: number): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/movie/${externalId}/reviews?api_key=${this.API_TOKEN}`);
  }

  getCreditsMovieById(externalId: number): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/movie/${externalId}/credits?api_key=${this.API_TOKEN}`);
  }

  getSimilarMoviesById(externalId: number): Observable<any>{
    return this.http.get<MovieBackdropInfo>(`${config.baseMovieDbUrl}/movie/${externalId}/similar?api_key=${this.API_TOKEN}`);
  }

  // Search Input Requests

  getMovieByKeyword(query: string): Observable<any> {
    return this.http.get<SearchPost>(`${config.baseMovieDbUrl}/search/movie?api_key=${this.API_TOKEN}&query=${query}&page=1`);
  }

  getPersonByKeyword(query: string): Observable<any> {
    return this.http.get<SearchPost>(`${config.baseMovieDbUrl}/search/person?api_key=${this.API_TOKEN}&query=${query}&page=1`);
  }
}
