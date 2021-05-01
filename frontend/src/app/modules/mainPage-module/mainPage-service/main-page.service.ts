import { config } from '../../../config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get(`${config.baseMovieDbUrl}/movie/popular?api_key=${this.API_TOKEN}&language=ru&region=RU`);
  }
}
