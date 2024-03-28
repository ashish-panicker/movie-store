import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/types/movie';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './movide-card.component.html',
  styleUrl: './movide-card.component.css',
})
export class MovieCardComponent {
  
  @Input() movie?: Movie ;


}
