import { Component } from '@angular/core';
import { TrendingComponent } from '../trending/trending.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TrendingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
