import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable, switchMap } from 'rxjs';
import { TrendingMoviesResponse } from '../types/trending';
import { MovieDetail } from '../../shared/types/movie-detail';
import { MovieDetailReview } from '../types/movie-detail-review';
import { ReviewDetail } from '../../shared/types/review-detail';
import { CreditResponse } from '../types/credit-response';

@Injectable({
  providedIn: 'root',
})
export class DashBoardService {
  trendingMoviesUrl = `${environment.API_URL}/trending/`;
  movieByIdUrl = `${environment.API_URL}/movie`;
  movieReviewUrl = `${this.movieByIdUrl}`;
  lang = 'language=en-US';
  bodyImage = signal<string>('');
  inSelection = signal<string>('movie')
  durationToLoad = signal<string>('day')

  constructor(private http: HttpClient) {}

  getTrendingMovies(type: string = 'day'): Observable<TrendingMoviesResponse> {
    return this.http.get<TrendingMoviesResponse>(
      `${this.trendingMoviesUrl}/${this.inSelection()}/${this.durationToLoad()}?${this.lang}`
    );
  }

  getMovieCredits(id: string): Observable<CreditResponse> {
    return this.http.get<CreditResponse>(`${this.movieByIdUrl}/${id}/credits`);
  }

  getMovieById(id: string): Observable<MovieDetailReview> {
    return this.http
      .get<MovieDetail>(`${this.movieByIdUrl}/${id}?${this.lang}`)
      .pipe(
        switchMap((movie) => {
          return this.http
            .get<ReviewDetail>(
              `${this.movieReviewUrl}/${id}/reviews?${this.lang}&page=1`
            )
            .pipe(
              map((review) => {
                this.bodyImage.set(
                  `${environment.IMG_URL}/original/${movie.poster_path}`
                );
                return {
                  movie,
                  review,
                };
              })
            );
        })
      );
  }

  getMoreViews(pageNum: string): Observable<ReviewDetail> {
    return this.http.get<ReviewDetail>(
      `${this.movieReviewUrl}/${pageNum}/reviews?${this.lang}&page=${pageNum}`
    );
  }
}
