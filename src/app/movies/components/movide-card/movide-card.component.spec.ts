import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movide-card.component';

describe('MovideCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
