import { Component, Input } from '@angular/core';
import { Cast } from '../../../shared/types/cast';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cast-highlight',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cast-highlight.component.html',
  styleUrl: './cast-highlight.component.css',
})
export class CastHighlightComponent {
  @Input() cast?: Cast[]
}
