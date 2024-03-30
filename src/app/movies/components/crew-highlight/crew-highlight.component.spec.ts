import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewHighlightComponent } from './crew-highlight.component';

describe('CrewHighlightComponent', () => {
  let component: CrewHighlightComponent;
  let fixture: ComponentFixture<CrewHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
