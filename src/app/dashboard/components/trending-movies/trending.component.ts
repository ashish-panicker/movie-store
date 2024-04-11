import { Component, effect, OnInit } from '@angular/core';
import { DashBoardService } from '../../services/dashboard.service';
import { TrendingMoviesResponse } from '../../types/trending';
import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { MovieCardComponent } from '../movide-card/movide-card.component';
import { Store } from '@ngrx/store';
import { dashBoardActions } from '../../store/actions';
import { DashboardState } from '../../types/state/dashboard-state';
import { selectData, selectIsLoading } from '../../store/features';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [NgFor,NgIf, DecimalPipe, AsyncPipe, MovieCardComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent implements OnInit {
  response$: TrendingMoviesResponse | null;
  error$: string | null;
  selectedOption = ''
  isLoading$ = this.store.select(selectIsLoading)

  constructor(private service: DashBoardService, private store: Store<DashboardState>) {
    this.response$ = null;
    this.error$ = null;
    effect(() => {
      this.selectedOption = this.service.inSelection()
    })
    this.store.dispatch(dashBoardActions.load()) 
  }
  
  ngOnInit(): void {
    this.loadMovies('day');
  }
  
  loadMovies(type: string) {
    this.service.durationToLoad.set(type)
    this.store.dispatch(dashBoardActions.load()) 
    this.store.select(selectData).subscribe({
      next: (response) => {
        this.response$ = response;
      },
      error: (error) => (this.error$ = `${error.status} - ${error.message}`),
    });
  }
}
