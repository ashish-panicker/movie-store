import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashBoardService } from '../services/dashboard.service';
import { dashBoardActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const dashboardLoadEffect = createEffect(
  (actions$ = inject(Actions), service = inject(DashBoardService)) => {
    return actions$.pipe(
      ofType(dashBoardActions.load),
      switchMap(() => {
        return service.getTrendingMovies().pipe(
          map(
            (response) => {
              return dashBoardActions.loadSuccess(response);
            },
            catchError((error: HttpErrorResponse) => {
              return of(dashBoardActions.loadFailure({
                errors: error.error
              }));
            })
          )
        );
      })
    );
  },
  { functional: true }
);

export const dashboardRedirectEffect = createEffect(
  (actions$ = inject(Actions), router$ = inject(Router)) => {
    return actions$.pipe(
      ofType(dashBoardActions.loadSuccess),
      tap(() => router$.navigateByUrl('movies'))
    )
  },
  {functional: true, dispatch: false}
)
