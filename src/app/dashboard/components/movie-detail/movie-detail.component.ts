import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, DecimalPipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { DashBoardService } from '../../services/dashboard.service';
import { MovieDetail } from '../../../shared/types/movie-detail';
import { ReviewDetail } from '../../../shared/types/review-detail';
import { MinuteHourPipe } from '../../../shared/pipes/minute-hour.pipe';
import { CreditResponse } from '../../types/credit-response';
import { Crew } from '../../../shared/types/crew';
import { GroupedCrew } from '../../types/grouped-crew';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgFor, DatePipe, NgIf, NgStyle, MinuteHourPipe, DecimalPipe],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  id: string = '';
  service = inject(DashBoardService);
  movie: MovieDetail | undefined;
  review: ReviewDetail | undefined;
  credits: CreditResponse | undefined;
  groupedCrew: GroupedCrew | undefined;

  isCreditsLoading = true;
  isLoading = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getMovieById(this.id).subscribe({
      next: (response) => {
        this.movie = response.movie;
        this.review = response.review;
        this.isLoading = false;
      },
      error: (error) => console.error(error),
    });

    this.loadMovieCredits()
  }

  loadMovieCredits() {
    this.service.getMovieCredits(this.id).subscribe({
      next: (response) => {
        console.log(response.crew);
        this.credits = response;
        this.groupedCrew = this.groupByKnownForDepartment(response.crew);
        this.isCreditsLoading = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  groupByKnownForDepartment(array: Crew[]): GroupedCrew {
    return array.reduce((groups: { [key: string]: Crew[] }, item: Crew) => {
      const key = item.known_for_department;
      if (!groups[key]) {
        groups[key] = [];
      }
      // Check if the item already exists in the group
      const exists = groups[key].some(
        (existingItem) => existingItem.id === item.id
      );
      if (!exists) {
        groups[key].push(item);
      }
      return groups;
    }, {});
  }
}
