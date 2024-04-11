import { Component, Input } from '@angular/core';
import { Crew } from '../../../shared/types/crew';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-crew-highlight',
  standalone: true,
  imports: [NgFor],
  templateUrl: './crew-highlight.component.html',
  styleUrl: './crew-highlight.component.css'
})
export class CrewHighlightComponent {

  @Input() highlightCrew? : Crew[]
}
