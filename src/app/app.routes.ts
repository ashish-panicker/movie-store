import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () =>
      import('../app/dashboard/movie.routes').then((r) => r.registerRoutes),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../app/users/users.routes').then((r) => r.userRoutes),
  },
];
