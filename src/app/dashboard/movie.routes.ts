import { Route } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TrendingComponent } from './components/trending-movies/trending.component';

export const registerRoutes: Route[] = [
  { path: '', component: TrendingComponent },
  { path: 'details/:id', component: MovieDetailComponent },
];
