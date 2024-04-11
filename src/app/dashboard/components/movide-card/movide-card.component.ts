import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/types/movie';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CastHighlightComponent } from '../cast-highlight/cast-highlight.component';
import { CrewHighlightComponent } from '../crew-highlight/crew-highlight.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink, DecimalPipe, CastHighlightComponent, CrewHighlightComponent],
  templateUrl: './movide-card.component.html',
  styleUrl: './movide-card.component.css',
})
export class MovieCardComponent {
  
  @Input() movie?: Movie ;


}
