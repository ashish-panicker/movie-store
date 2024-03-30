import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

export const registerRoutes: Route[] = [
  { path: '', component: DashboardComponent },
  { path: 'details/:id', component: MovieDetailComponent },
];
