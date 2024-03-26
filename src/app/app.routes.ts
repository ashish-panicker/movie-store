import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/dashboard/dashboard.routes').then((r) => r.registerRoutes),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../app/users/users.routes').then((r) => r.userRoutes),
  },
];
