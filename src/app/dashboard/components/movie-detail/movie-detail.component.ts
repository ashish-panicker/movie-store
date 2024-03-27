import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashBoardService } from '../../services/dashboard.service';
import { MovieDetail } from '../../../shared/types/movie-detail';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ReviewDetail } from '../../../shared/types/review-detail';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgFor, DatePipe, NgIf],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  id: string = '';
  service = inject(DashBoardService);
  movie: MovieDetail | undefined;
  review: ReviewDetail | undefined;
  isLoading = true

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getMovieById(this.id).subscribe({
      next: (response) => {
        this.movie = response.movie;
        this.review = response.review
        this.isLoading = false
      },
      error: (error) => console.error(error),
    });
  }
}
