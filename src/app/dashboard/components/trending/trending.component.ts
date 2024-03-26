import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../../services/dashboard.service';
import { TrendingMoviesResponse } from '../../types/trending';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [NgIf, NgFor, DecimalPipe],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent implements OnInit {
  response$: TrendingMoviesResponse | null;
  error$: string | null;

  constructor(private service: DashBoardService) {
    this.response$ = null;
    this.error$ = null;
  }

  ngOnInit(): void {
    this.loadMovies('day');
  }

  loadMovies(type: string) {
    this.service.getTrendingMovies(type).subscribe({
      next: (response) => {
        this.response$ = response;
      },
      error: (error) => (this.error$ = `${error.status} - ${error.message}`),
    });
  }
}
