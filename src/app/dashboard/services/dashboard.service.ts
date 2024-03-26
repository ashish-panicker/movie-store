import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { TrendingMoviesResponse } from '../types/trending';

@Injectable({
  providedIn: 'root',
})
export class DashBoardService {

  trendingMoviesUrl = `${environment.API_URL}/trending/movie`;

  constructor(private http: HttpClient) {}

  getTrendingMovies(type: string = 'day'): Observable<TrendingMoviesResponse> {
    return this.http.get<TrendingMoviesResponse>(`${this.trendingMoviesUrl}/${type}?language=en-US`);
  }
}
